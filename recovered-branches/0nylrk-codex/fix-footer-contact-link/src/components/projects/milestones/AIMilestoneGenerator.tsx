
<<<<<<< HEAD
import React, { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Card, CardContent } from '@/components/ui/card',
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger} from '@/components/ui/accordion',
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react',
import { format, parseISO } from 'date-fns',
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',
import { Badge } from '@/components/ui/badge',
interface AIMilestoneGeneratorProps {
  scope: string,
  startDate: string,
  endDate: string | null,
  projectType: string,
  onAddMilestones: (milestones: GeneratedMilestone[]) => void,
  onAddMilestone: (milestone: GeneratedMilestone) => void
}

export function AIMilestoneGenerator({
  scope,
  startDate,
  endDate,
  projectType,
  onAddMilestones,
  onAddMilestone
}: AIMilestoneGeneratorProps) {
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator(),
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string boolean>>({}),

  const handleGenerateMilestones = async () => {
    if (!scope || !startDate || !projectType) {
      return
    }

    const input: MilestoneInput = {
      scope,
      startDate,
      endDate,
      projectType
    },
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    await generateMilestones(input),
    // Initially select all milestones
<<<<<<< HEAD
    const initialSelection = {},
    generatedMilestones.forEach((_, index) => {
      initialSelection[index] = true
    }),
    setSelectedMilestones(initialSelection)
  },
=======
    const _initialSelection = {};
    generatedMilestones.forEach(_(_, _index) => {_initialSelection[index] = true;});
    setSelectedMilestones(initialSelection);
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleAddToProject = () => {_const _selectedMilestonesList = generatedMilestones.filter(_(_, _index) => 
      selectedMilestones[index]
    ),
    
    onAddMilestones(selectedMilestonesList),
    clearGeneratedMilestones(),
    setSelectedMilestones({})
  },

<<<<<<< HEAD
  const toggleMilestoneSelection = (index: number) => {
    setSelectedMilestones(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  },

  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {
    onAddMilestone(milestone)
  },

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
    }
  },
=======
  const _toggleMilestoneSelection = (_index: number) => {_setSelectedMilestones(prev => ({
      ...prev, _[index]: !prev[index]}));
  };

  const _handleAddSingleMilestone = (_milestone: GeneratedMilestone) => {_onAddMilestone(milestone);};

  const _formatDate = (_dateString: string) => {_try {
      return format(parseISO(dateString), _'MMM dd, _yyyy');} catch (error) {_return dateString;}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;text-lg font-medium flex items-center&quot;>
          <Sparkles className=&quot;w-5 h-5 mr-2 text-primary&quot; />
          AI Milestone Generator
        </h3>
        <Button
<<<<<<< HEAD
          variant=&quot;outline&quot;
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
=======
          variant="outline"
          onClick={_handleGenerateMilestones}
          disabled={_isGenerating || !scope || !startDate || !projectType}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_isGenerating ? (
            <>
              <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className=&quot;mr-2 h-4 w-4&quot; />
              Generate Milestones
            </>
          )}
        </Button>
      </div>

      {_generatedMilestones.length > 0 && (
        <Card>
          <CardContent className=&quot;pt-6&quot;>
            <div className=&quot;flex justify-between items-center mb-4&quot;>
              <p className=&quot;text-sm text-muted-foreground&quot;>
                {generatedMilestones.length} milestones generated based on your project scope
              </p>
              <Button 
                onClick={_handleAddToProject}
                disabled={_!Object.values(selectedMilestones).some(Boolean)}
              >
                Add Selected to Project
              </Button>
            </div>

<<<<<<< HEAD
            <Accordion type=&quot;multiple&quot; className=&quot;w-full&quot;>
              {generatedMilestones.map((milestone, index) => (
                <AccordionItem value={`item-${index}`} key={index} className=&quot;border p-2 rounded-md mb-2&quot;>
                  <div className=&quot;flex items-center justify-between&quot;>
                    <div className=&quot;flex items-center flex-1&quot;>
                      <input
                        type=&quot;checkbox&quot;
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}
                        className=&quot;mr-2 w-4 h-4 rounded text-primary&quot;
                      />
                      <AccordionTrigger className=&quot;hover:no-underline flex-1 text-left&quot;>
                        <div className=&quot;flex items-center&quot;>
                          <span className=&quot;font-medium&quot;>{milestone.title}</span>
                          <Badge variant=&quot;secondary&quot; className=&quot;ml-2 flex items-center&quot;>
                            <Sparkles className=&quot;w-3 h-3 mr-1&quot; />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            AI Suggested
                          </Badge>
                        </div>
                      </AccordionTrigger>
                    </div>
                    <Button
<<<<<<< HEAD
                      variant=&quot;ghost&quot;
                      size=&quot;sm&quot;
                      onClick={(e) => {
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }}
                      className=&quot;mr-2&quot;
=======
                      variant="ghost"
                      size="sm"
                      onClick={_(_e) => {
                        e.stopPropagation();
                        handleAddSingleMilestone(milestone);}}
                      className="mr-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      <Plus className=&quot;h-4 w-4&quot; />
                    </Button>
                  </div>
                  <AccordionContent>
<<<<<<< HEAD
                    <div className=&quot;pl-6 space-y-2&quot;>
                      <p className=&quot;text-sm&quot;>{milestone.description}</p>
                      <div className=&quot;flex items-center text-sm text-muted-foreground&quot;>
                        <Calendar className=&quot;w-4 h-4 mr-1&quot; />
                        Due: {formatDate(milestone.dueDate)}
                      </div>
                      <div className=&quot;text-sm text-muted-foreground&quot;>
                        Estimated effort: {milestone.estimatedHours} hours
=======
                    <div className="pl-6 space-y-2">
                      <p className="text-sm">{_milestone.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        Due: {_formatDate(milestone.dueDate)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Estimated effort: {_milestone.estimatedHours} hours
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}
