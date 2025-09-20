
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, Check } from "lucide-react";

interface MilestoneSuggestionsProps {
  projectName: string;
  scopeSummary: string;
  startDate: string;
  endDate: string;
  projectType: string;
  onMilestonesGenerated: (milestones: any[]) => void;
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

  const handleGenerateMilestones = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      const mockMilestones = [
        { id: 1, name: "Project Setup", description: "Initial project setup and configuration" },
        { id: 2, name: "Development Phase", description: "Core development work" },
        { id: 3, name: "Testing & QA", description: "Quality assurance and testing" },
        { id: 4, name: "Deployment", description: "Final deployment and launch" }
      ];
      onMilestonesGenerated(mockMilestones);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>AI-Suggested Milestones</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" onClick={handleGenerateMilestones}>
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
          <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
            <Check className="h-4 w-4 mr-1 text-green-500" />
            These milestones will be added to your contract
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

