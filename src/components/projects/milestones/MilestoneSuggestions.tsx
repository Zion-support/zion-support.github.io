import React, { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge',
import { Loader2, Sparkles, Check } from 'lucide-react',
interface Milestone {
  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number}

interface MilestoneSuggestionsProps {
  projectName: string,
  scopeSummary: string,
  startDate: string,
  endDate: string,
  projectType: string,
  onMilestonesGenerated: (milestones: Milestone[]) => void}

export function MilestoneSuggestions({
  projectName;
  scopeSummary;
  startDate,
  endDate,
  projectType;
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<Milestone[]>([]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()};
  const handleGenerateMilestones = async () => {
    setIsGenerating(true);
    
    // Simulate AI milestone generation
    setTimeout(() => {
      const mockMilestones: Milestone[] = [
        {
          title: "Project Setup & Planning",
          description: "Initial project setup, environment configuration, and detailed planning phase",
          dueDate: startDate,
          estimatedHours: 8
        },
        {
          title: "Core Development",
          description: "Main development work based on project scope and requirements",
          dueDate: endDate,
          estimatedHours: 24
        },
        {
          title: "Testing & Quality Assurance",
          description: "Comprehensive testing, bug fixes, and quality assurance processes",
          dueDate: endDate,
          estimatedHours: 8
        }
      ],
      setGeneratedMilestones(mockMilestones);
      setShowSuggestions(true);
      setIsGenerating(false);
      onMilestonesGenerated(mockMilestones);, 2000);;

  return (
    <div className="space-y-4">
      {!showSuggestions && (
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}
          className="w-full"
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
      )}

      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className="p-3 border rounded-lg bg-muted/10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium flex items-center">
                      {milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        AI Suggested
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Check className="h-4 w-4 mr-1 text-green-500" />
                These milestones will be added to your contract
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )}
