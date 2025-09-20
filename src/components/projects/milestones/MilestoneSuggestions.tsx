import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles, Check } from "lucide-react";

interface Milestone {
  id: string;
  title: string;
  description: string;
  estimatedDays: number;
  dependencies?: string[];
}

interface MilestoneSuggestionsProps {
  projectName: string;
  scopeSummary: string;
  startDate: string;
  endDate: string;
  projectType: string;
  onMilestonesGenerated: (milestones: Milestone[]) => void;
}

export function MilestoneSuggestions({
  projectName,
  scopeSummary,
  startDate,
  endDate,
  projectType,
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestedMilestones, setSuggestedMilestones] = useState<Milestone[]>([]);

  const handleGenerateMilestones = async () => {
    setIsGenerating(true);
    
    // Mock AI milestone generation - replace with actual API call
    setTimeout(() => {
      const mockMilestones: Milestone[] = [
        {
          id: "1",
          title: "Project Setup & Planning",
          description: "Initialize project structure and create detailed project plan",
          estimatedDays: 3
        },
        {
          id: "2",
          title: "Requirements Analysis",
          description: "Analyze and document detailed requirements",
          estimatedDays: 5
        },
        {
          id: "3",
          title: "Development Phase 1",
          description: "Core functionality development",
          estimatedDays: 10
        },
        {
          id: "4",
          title: "Testing & Quality Assurance",
          description: "Comprehensive testing and bug fixes",
          estimatedDays: 4
        },
        {
          id: "5",
          title: "Deployment & Launch",
          description: "Final deployment and go-live activities",
          estimatedDays: 2
        }
      ];
      
      setSuggestedMilestones(mockMilestones);
      setIsGenerating(false);
    }, 2000);
  };

  const handleAcceptMilestones = () => {
    onMilestonesGenerated(suggestedMilestones);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            AI-Suggested Milestones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-2">
              <p className="text-sm text-muted-foreground">
                Project: <strong>{projectName}</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Type: <strong>{projectType}</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Duration: <strong>{startDate}</strong> to <strong>{endDate}</strong>
              </p>
            </div>

            {suggestedMilestones.length === 0 ? (
              <Button 
                variant="outline" 
                onClick={handleGenerateMilestones}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating milestones...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Suggest Project Milestones with AI
                  </>
                )}
              </Button>
            ) : (
              <div className="space-y-3">
                <div className="space-y-2">
                  {suggestedMilestones.map((milestone) => (
                    <div key={milestone.id} className="p-3 border rounded-lg">
                      <h4 className="font-medium">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Estimated: {milestone.estimatedDays} days
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500" />
                    These milestones will be added to your contract
                  </div>
                  <Button onClick={handleAcceptMilestones}>
                    Accept Milestones
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}