<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
<<<<<<< HEAD
  AccordionTrigger,;
} from '@/components/ui/accordion';
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import {
  MilestoneInput,
  GeneratedMilestone,
  useMilestoneGenerator,;
} from '@/hooks/useMilestoneGenerator';
import { Badge } from '@/components/ui/badge';

interface AIMilestoneGeneratorProps {
  scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;
  onAddMilestone: (milestone: GeneratedMilestone) => void;
=======
  AccordionTrigger} from '@/components/ui/accordion',
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator';
import { Badge } from '@/components/ui/badge';
interface AIMilestoneGeneratorProps {
  scope: string,
  startDate: string,
  endDate: string | null,
  projectType: string,
  onAddMilestones: (milestones: GeneratedMilestone[],) => void,
  onAddMilestone: (milestone: GeneratedMilestone,) => void
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export function AIMilestoneGenerator({
  scope,
  startDate,
  endDate,
  projectType,
  onAddMilestones,
  onAddMilestone,
}: AIMilestoneGeneratorProps) {
  const {
    generateMilestones,
    generatedMilestones,
    isGenerating,
    clearGeneratedMilestones,
  } = useMilestoneGenerator();
  const [selectedMilestones, setSelectedMilestones] = useState<
    Record<string, boolean>
  >({});

  const handleGenerateMilestones = async () => {
    if (!scope || !startDate || !projectType) {
      return;
    }

    const input: MilestoneInput = {
      scope,
      startDate,
      endDate,
      projectType,
    };

    await generateMilestones(input);
    // Initially select all milestones
<<<<<<< HEAD
    const initialSelection: Record<number, boolean> = {};
    generatedMilestones.forEach((_, index: number) => {
      initialSelection[index] = true;
    });
    setSelectedMilestones(initialSelection);
  };

  const handleAddToProject = () => {
    const selectedMilestonesList = generatedMilestones.filter(
      (_, index) => selectedMilestones[index]
    );

    onAddMilestones(selectedMilestonesList);
    clearGeneratedMilestones();
    setSelectedMilestones({});
  };
=======
    const initialSelection: Record<number, boolean> = {},
    generatedMilestones.forEach((_, index: number,) => {
      initialSelection[index] = true
    }),
    setSelectedMilestones(initialSelection)
  },

  const handleAddToProject = () => {
    const selectedMilestonesList = generatedMilestones.filter((_, index,) => 
      selectedMilestones[index]
    ),
    
    onAddMilestones(selectedMilestonesList),
    clearGeneratedMilestones(),
    setSelectedMilestones({})
  },
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

  const toggleMilestoneSelection = (index: number,) => {
    setSelectedMilestones(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

<<<<<<< HEAD
  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {
    onAddMilestone(milestone);
  };
=======
  const handleAddSingleMilestone = (milestone: GeneratedMilestone,) => {
    onAddMilestone(milestone)
  },
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

  const formatDate = (dateString: string,) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-medium flex items-center'>
          <Sparkles className='w-5 h-5 mr-2 text-primary' />
          AI Milestone Generator
        </h3>
        <Button
<<<<<<< HEAD
          variant='outline'
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
=======
          variant="outline"
          onClick = {handleGenerateMilestones,}
          disabled = {isGenerating || !scope || !startDate || !projectType,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        >
          {isGenerating ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />
              Generate Milestones
            </>
          )}
        </Button>
      </div>

      {generatedMilestones.length > 0 && (
        <Card>
          <CardContent className='pt-6'>
            <div className='flex justify-between items-center mb-4'>
              <p className='text-sm text-muted-foreground'>
                {generatedMilestones.length} milestones generated based on your
                project scope
              </p>
<<<<<<< HEAD
              <Button
                onClick={handleAddToProject}
                disabled={!Object.values(selectedMilestones).some(Boolean)}
=======
              <Button 
                onClick = {handleAddToProject,}
                disabled = {!Object.values(selectedMilestones).some(Boolean),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              >
                Add Selected to Project
              </Button>
            </div>

<<<<<<< HEAD
            <Accordion type='multiple' className='w-full'>
              {generatedMilestones.map((milestone, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className='border p-2 rounded-md mb-2'
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center flex-1'>
=======
            <Accordion type="multiple" className="w-full">
              {generatedMilestones.map((milestone, index,) => (
                <AccordionItem value={`item-${index}`} key={index} className="border p-2 rounded-md mb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                      <input
                        type='checkbox'
                        id={`milestone-${index}`}
<<<<<<< HEAD
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}
                        className='mr-2 w-4 h-4 rounded text-primary'
=======
                        checked = {selectedMilestones[index] || false,}
                        onChange = {(,) => toggleMilestoneSelection(index),}
                        className="mr-2 w-4 h-4 rounded text-primary"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                      />
                      <AccordionTrigger className='hover:no-underline flex-1 text-left'>
                        <div className='flex items-center'>
                          <span className='font-medium'>{milestone.title}</span>
                          <Badge
                            variant='secondary'
                            className='ml-2 flex items-center'
                          >
                            <Sparkles className='w-3 h-3 mr-1' />
                            AI Suggested
                          </Badge>
                        </div>
                      </AccordionTrigger>
                    </div>
                    <Button
<<<<<<< HEAD
                      variant='ghost'
                      size='sm'
                      onClick={e => {
                        e.stopPropagation();
                        handleAddSingleMilestone(milestone);
=======
                      variant="ghost"
                      size="sm"
                      onClick={(e,) => {
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                      }}
                      className='mr-2'
                    >
                      <Plus className='h-4 w-4' />
                    </Button>
                  </div>
                  <AccordionContent>
                    <div className='pl-6 space-y-2'>
                      <p className='text-sm'>{milestone.description}</p>
                      <div className='flex items-center text-sm text-muted-foreground'>
                        <Calendar className='w-4 h-4 mr-1' />
                        Due: {formatDate(milestone.dueDate)}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Estimated effort: {milestone.estimatedHours} hours
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
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
