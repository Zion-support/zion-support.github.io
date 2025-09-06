


  projectName: string,
  scopeSummary: string,
  startDate: Date,
  endDate?: Date;
  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}

export function MilestoneSuggestions({;
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;

=======
import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Loader2, Sparkles, Check } from 'lucide-react',;
import { Badge } from '@/components/ui/badge',;
import { format, parseISO } from 'date-fns',;
interface MilestoneSuggestionsProps {;
  projectName: string,;
  scopeSummary: string,;
  startDate: Date,;
  endDate?: Date,;
  projectType: string,;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}

  projectName: string
  scopeSummary: string
  startDate: Date
  endDate?: Date;
  projectType: string

  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}
export function MilestoneSuggestions({
  projectName,
  scopeSummary,
  startDate,
  endDate,
  projectType,
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),

  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`
      startDate: startDate.toISOString()
      endDate: endDate ? endDate.toISOString() : null
      projectType: projectType |"Other"
    }
    const milestones = await generateMilestones(input);
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || "Other"
    },

    const milestones = await generateMilestones(input),
    
    if (milestones.length > 0) {
      setShowSuggestions(true),
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones)

  };

=======
;
export function MilestoneSuggestions({;
  projectName,;
  scopeSummary,;
  startDate,;
  endDate,;
  projectType,;
  onMilestonesGenerated;
}: MilestoneSuggestionsProps) {;
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),;
  const [showSuggestions, setShowSuggestions] = useState(false),;

  const handleGenerateMilestones = async () => {;
    const input: MilestoneInput = {;
      scope: `${projectName}: ${scopeSummary}`,;
      startDate: startDate && startDate.toISOString(),;
      endDate: endDate ? endDate && endDate.toISOString() : null,;
      projectType: projectType || "Other";
    };

    const milestones = await generateMilestones(input);

    if (milestones && milestones.length > 0) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setShowSuggestions(true);
      if (onMilestonesGenerated) {;
        onMilestonesGenerated(milestones);
      }
    }

import {Button} from '@/components / ui / button';
import {GeneratedMilestone, MilestoneInput, useMilestoneGenerator} from '@/hooks / useMilestoneGenerator';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Loader2, Sparkles, Check} from 'lucide-react';
import {Badge} from '@/components / ui / badge';
import {format, parseISO} from 'date - fns';
interface MilestoneSuggestionsProps {
  project_name: string,
  scope_summary: string,
  start_date: Date,
  end_date?: Date;
  project_type: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}
export /**
 * MilestoneSuggestions - Function description
 */
function MilestoneSuggestions() {
  const { generate_milestones, generated_milestones, is_generating } = useMilestoneGenerator ();
  const [show_suggestions, setShowSuggestions] = useState (false);
;
  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${project_name}: ${scope_summary}`,
      start_date: start_date.toISOString (),
      end_date: end_date ? end_date.toISOString () : null,
      project_type: project_type || "Other";
    }
;
    const milestones = await generate_milestones (input);
;
    // Check condition
if ( {) {
  $2
}
      setShowSuggestions (true);
      // Check condition
if ( {) {
  $2
}
        onMilestonesGenerated (milestones);
      }
    }
  }
;
  const format_date = (date_string: string) =>: any {

    try {
      return format (parseISO (date_string), 'MMM dd, yyyy');
    } catch (error) {

  };

  const formatDate = (dateString: string) => {;
    try {;
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;

    }

  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <div className="space-y-4">;
      {!showSuggestions && (;
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating |!scopeSummary |!startDate}
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
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
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
  )
}
    </div>;
  );
}
;
