
<<<<<<< HEAD
import React, { useState } from 'react',
import { Button } from '@/components/ui/button',
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Loader2, Sparkles, Check } from 'lucide-react',
import { Badge } from '@/components/ui/badge',
import { format, parseISO } from 'date-fns',

interface MilestoneSuggestionsProps {
  projectName: string,
  scopeSummary: string,
  startDate: Date,
  endDate?: Date,
  projectType: string,
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
=======
import React, {_useState} from 'react';

interface MilestoneSuggestionsProps {_projectName: string;
  scopeSummary: string;
  startDate: Date;
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (_milestones: GeneratedMilestone[]) => void;}

export function MilestoneSuggestions(_{_projectName, _scopeSummary, _startDate, _endDate, _projectType, _onMilestonesGenerated}: MilestoneSuggestionsProps) {_const { generateMilestones, _generatedMilestones, _isGenerating} = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleGenerateMilestones = async () => {_const input: MilestoneInput = {
      scope: `${projectName}: ${_scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
<<<<<<< HEAD
      projectType: projectType || "Other"
    },
=======
      projectType: projectType || &quot;Other&quot;
    };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
    const milestones = await generateMilestones(input),
    
    if (milestones.length > 0) {
      setShowSuggestions(true),
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones)
      }
=======
    const _milestones = await generateMilestones(input);
    
    if (milestones.length > 0) {_setShowSuggestions(true);
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
    }
  },

  return (
    <div className=&quot;space-y-4&quot;>
      {!showSuggestions && (
=======
  const _formatDate = (_dateString: string) => {_try {
      return format(parseISO(dateString), _'MMM dd, _yyyy');} catch (error) {_return dateString;}
  };

  return (
    <div className="space-y-4">
      {_!showSuggestions && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <Button
          variant=&quot;outline&quot;
          onClick={handleGenerateMilestones}
<<<<<<< HEAD
          disabled={isGenerating || !scopeSummary || !startDate}
          className=&quot;w-full&quot;
=======
          disabled={_isGenerating || !scopeSummary || !startDate}
          className="w-full"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_isGenerating ? (
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

<<<<<<< HEAD
      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
          <CardHeader className=&quot;pb-3&quot;>
            <CardTitle className=&quot;text-lg flex items-center&quot;>
              <Sparkles className=&quot;h-5 w-5 mr-2 text-primary&quot; />
=======
      {_showSuggestions && generatedMilestones.length > 0 && (_<Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
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
=======
            <div className="space-y-3">
              {generatedMilestones.map((milestone, _index) => (
                <div key={index} className="p-3 border rounded-lg bg-muted/10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium flex items-center">
                      {_milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        AI Suggested
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Due: {_formatDate(milestone.dueDate)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{_milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>Estimated: {_milestone.estimatedHours} hours</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}
