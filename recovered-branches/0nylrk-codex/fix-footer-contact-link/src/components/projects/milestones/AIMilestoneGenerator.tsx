
import React, {_useState} from 'react';
import {_Accordion, _AccordionContent, _AccordionItem, _AccordionTrigger} from '@/components/ui/accordion';

interface AIMilestoneGeneratorProps {_scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
  onAddMilestones: (_milestones: GeneratedMilestone[]) => void;
  onAddMilestone: (_milestone: GeneratedMilestone) => void;}

export function AIMilestoneGenerator(_{_scope, _startDate, _endDate, _projectType, _onAddMilestones, _onAddMilestone}: AIMilestoneGeneratorProps) {_const { generateMilestones, _generatedMilestones, _isGenerating, _clearGeneratedMilestones} = useMilestoneGenerator();
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string, boolean>>({});

  const _handleGenerateMilestones = async () => {_if (!scope || !startDate || !projectType) {
      return;}

    const input: MilestoneInput = {_scope, _startDate, _endDate, _projectType};

    await generateMilestones(input);
    // Initially select all milestones
    const _initialSelection = {};
    generatedMilestones.forEach(_(_, _index) => {_initialSelection[index] = true;});
    setSelectedMilestones(initialSelection);
  };

  const _handleAddToProject = () => {_const _selectedMilestonesList = generatedMilestones.filter(_(_, _index) => 
      selectedMilestones[index]
    );
    
    onAddMilestones(selectedMilestonesList);
    clearGeneratedMilestones();
    setSelectedMilestones({});
  };

  const _toggleMilestoneSelection = (_index: number) => {_setSelectedMilestones(prev => ({
      ...prev, _[index]: !prev[index]}));
  };

  const _handleAddSingleMilestone = (_milestone: GeneratedMilestone) => {_onAddMilestone(milestone);};

  const _formatDate = (_dateString: string) => {_try {
      return format(parseISO(dateString), _'MMM dd, _yyyy');} catch (error) {_return dateString;}
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-primary" />
          AI Milestone Generator
        </h3>
        <Button
          variant="outline"
          onClick={_handleGenerateMilestones}
          disabled={_isGenerating || !scope || !startDate || !projectType}
        >
          {_isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Milestones
            </>
          )}
        </Button>
      </div>

      {_generatedMilestones.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">
                {generatedMilestones.length} milestones generated based on your project scope
              </p>
              <Button 
                onClick={_handleAddToProject}
                disabled={_!Object.values(selectedMilestones).some(Boolean)}
              >
                Add Selected to Project
              </Button>
            </div>

            <Accordion type="multiple" className="w-full">
              {_generatedMilestones.map(_(milestone, _index) => (_<AccordionItem value={`item-${index}`} key={_index} className="border p-2 rounded-md mb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <input
                        type="checkbox"
                        id={_`milestone-${index}`}
                        checked={_selectedMilestones[index] || false}
                        onChange={_() => toggleMilestoneSelection(index)}
                        className="mr-2 w-4 h-4 rounded text-primary"
                      />
                      <AccordionTrigger className="hover:no-underline flex-1 text-left">
                        <div className="flex items-center">
                          <span className="font-medium">{_milestone.title}</span>
                          <Badge variant="secondary" className="ml-2 flex items-center">
                            <Sparkles className="w-3 h-3 mr-1" />
                            AI Suggested
                          </Badge>
                        </div>
                      </AccordionTrigger>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={_(_e) => {
                        e.stopPropagation();
                        handleAddSingleMilestone(milestone);}}
                      className="mr-2"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <AccordionContent>
                    <div className="pl-6 space-y-2">
                      <p className="text-sm">{_milestone.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        Due: {_formatDate(milestone.dueDate)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Estimated effort: {_milestone.estimatedHours} hours
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
