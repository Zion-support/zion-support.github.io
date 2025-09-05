
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';

interface MilestoneSuggestionsProps {
  projectName: string;
  scopeSummary: string;
  startDate: Date;
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}

export function MilestoneSuggestions({
  projectName,
  scopeSummary,
  startDate,
  endDate,
  projectType,
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || &quot;Other&quot;
    };

    const milestones = await generateMilestones(input);
    
    if (milestones.length > 0) {
      setShowSuggestions(true);
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones);
      }
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className=&quot;space-y-4&quot;>
      {!showSuggestions && (
        <Button
          variant=&quot;outline&quot;
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}
          className=&quot;w-full&quot;
        >
          {isGenerating ? (
            <>
              <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
              Generating milestones...
            </>
          ) : (
            <>
              <Sparkles className=&quot;mr-2 h-4 w-4&quot; />
              Suggest Project Milestones with AI
            </>
          )}
        </Button>
      )}

      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
          <CardHeader className=&quot;pb-3&quot;>
            <CardTitle className=&quot;text-lg flex items-center&quot;>
              <Sparkles className=&quot;h-5 w-5 mr-2 text-primary&quot; />
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=&quot;space-y-3&quot;>
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className=&quot;p-3 border rounded-lg bg-muted/10&quot;>
                  <div className=&quot;flex items-center justify-between mb-1&quot;>
                    <div className=&quot;font-medium flex items-center&quot;>
                      {milestone.title}
                      <Badge variant=&quot;secondary&quot; className=&quot;ml-2 text-xs&quot;>
                        AI Suggested
                      </Badge>
                    </div>
                    <div className=&quot;text-sm text-muted-foreground&quot;>
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>
                  <p className=&quot;text-sm text-muted-foreground&quot;>{milestone.description}</p>
                  <div className=&quot;flex justify-between items-center mt-2 text-sm&quot;>
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}

              <div className=&quot;flex items-center justify-center mt-4 text-sm text-muted-foreground&quot;>
                <Check className=&quot;h-4 w-4 mr-1 text-green-500&quot; />
                These milestones will be added to your contract
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
