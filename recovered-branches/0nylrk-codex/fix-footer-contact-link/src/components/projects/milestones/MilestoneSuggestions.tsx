
import React, {_useState} from 'react';

interface MilestoneSuggestionsProps {_projectName: string;
  scopeSummary: string;
  startDate: Date;
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (_milestones: GeneratedMilestone[]) => void;}

export function MilestoneSuggestions(_{_projectName, _scopeSummary, _startDate, _endDate, _projectType, _onMilestonesGenerated}: MilestoneSuggestionsProps) {_const { generateMilestones, _generatedMilestones, _isGenerating} = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const _handleGenerateMilestones = async () => {_const input: MilestoneInput = {
      scope: `${projectName}: ${_scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || "Other"
    };

    const _milestones = await generateMilestones(input);
    
    if (milestones.length > 0) {_setShowSuggestions(true);
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones);}
    }
  };

  const _formatDate = (_dateString: string) => {_try {
      return format(parseISO(dateString), _'MMM dd, _yyyy');} catch (error) {_return dateString;}
  };

  return (
    <div className="space-y-4">
      {_!showSuggestions && (
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={_isGenerating || !scopeSummary || !startDate}
          className="w-full"
        >
          {_isGenerating ? (
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

      {_showSuggestions && generatedMilestones.length > 0 && (_<Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
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
  );
}
