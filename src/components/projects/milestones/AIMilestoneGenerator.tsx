<<<<<<< HEAD
=======
    if (!scope |!startDate |!projectType) {
      return
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion
  AccordionContent
  AccordionItem
  AccordionTrigger
} from '@/components/ui/accordion'
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react'
import { format, parseISO } from 'date-fns'
  MilestoneInput
  GeneratedMilestone
  useMilestoneGenerator
} from '@/hooks/useMilestoneGenerator'
import { Badge } from '@/components/ui/badge'

interface AIMilestoneGeneratorProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface AIMilestoneGeneratorProps {;
  scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;
<<<<<<< HEAD




    if (!scope || !startDate || !projectType) {
      return;


=======
  onAddMilestone: (milestone: GeneratedMilestone) => void
export function AIMilestoneGenerator({

  scope
  startDate
  endDate
  projectType
  onAddMilestones
  onAddMilestone
}: AIMilestoneGeneratorProps) {
  const {
    generateMilestones
    generatedMilestones
    isGenerating
    clearGeneratedMilestones
  } = useMilestoneGenerator()
  const [selectedMilestones, setSelectedMilestones] = useState<
    Record<string, boolean>
  >({})
  const handleGenerateMilestones = async () => {
    if (!scope |!startDate |!projectType) {
      return
    if (!scope || !startDate || !projectType) {
      return;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
    const input: MilestoneInput = {
      scope
      startDate
      endDate
      projectType
import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components / ui / accordion';
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react';
import { format, parseISO } from 'date - fns';
  MilestoneInput,
  GeneratedMilestone,
  useMilestoneGenerator,
} from '@/hooks / useMilestoneGenerator';
import { Badge } from '@/components / ui / badge';
interface AIMilestoneGeneratorProps {
  scope: string;
  start_date: string;
  end_date: string | null;
  project_type: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;
  onAddMilestone: (milestone: GeneratedMilestone) => void;
export /**
 * AIMilestoneGenerator - Function description
 */
function AIMilestoneGenerator() {
  const {
    generate_milestones,
    generated_milestones,
    is_generating,
    clearGeneratedMilestones,
  } = useMilestoneGenerator ();
  const [selected_milestones, setSelectedMilestones] = useState<;
    Record < string, boolean>;
  >({});
  const handleGenerateMilestones = async () => {
    // Check condition
if ( {) {
  $2
}
      return;
    }
    const input: MilestoneInput = {
      scope,
      start_date,
      end_date,
      project_type,
    }
    await generate_milestones (input);
    // Initially select all milestones;
    const initial_selection: Record < number, boolean> = {}
    generated_milestones.for_each ((_, index: number) => {
      initial_selection[index] = true;
    });
    setSelectedMilestones (initial_selection);
  }
  const handleAddToProject = () =>: any {
    const selectedMilestonesList = generated_milestones.filter (
      (_, index) => selected_milestones[index]);
    onAddMilestones (selectedMilestonesList);
    clearGeneratedMilestones ();
    setSelectedMilestones ({});
  }
<<<<<<< HEAD

  const toggleMilestoneSelection = (index: number, ) =>: any {
    setSelectedMilestones (prev => ({
      ...prev,
      [index]: !prev[index],
    }));

=======
  const toggleMilestoneSelection = (index: number,) => {
    setSelectedMilestones(prev => ({
      ...prev
      [index]: !prev[index]
    }))
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
  const handleAddSingleMilestone = (milestone: GeneratedMilestone) =>: any {
    onAddMilestone (milestone);
  }
  const format_date = (date_string: string, ) =>: any {
    try {
      return format (parseISO (date_string), 'MMM dd, yyyy');
    } catch (error) {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return dateString
    }
  }



import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger} from '@/components/ui/accordion',;
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns',;
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;
import { Badge } from '@/components/ui/badge',;
interface AIMilestoneGeneratorProps {;
  scope: string,;
  startDate: string,;
  endDate: string | null,;
  projectType: string,;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void,;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  onAddMilestone: (milestone: GeneratedMilestone) => void;
export function AIMilestoneGenerator(): any ({;
  scope,;
  startDate,;
  endDate,;
  projectType,;
  onAddMilestones,;
  onAddMilestone,;
}: AIMilestoneGeneratorProps) {;
  const {;
    generateMilestones,;
    generatedMilestones,;
    isGenerating,;
    clearGeneratedMilestones,;
  } = useMilestoneGenerator();
  const [selectedMilestones, setSelectedMilestones] = useState<;
    Record<string, boolean>;
  >({});

  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return;
    }

    const input: MilestoneInput = {;
      scope,;
      startDate,;
      endDate,;
      projectType,;
    };

    await generateMilestones(input);
    // Initially select all milestones;
    const initialSelection: Record<number, boolean> = {};
    generatedMilestones && generatedMilestones.forEach((_, index: number) => {;
      initialSelection[index] = true;
    });
    setSelectedMilestones(initialSelection);
  };

  const handleAddToProject = () => {;
    const selectedMilestonesList = generatedMilestones && generatedMilestones.filter(;
      (_, index) => selectedMilestones[index];
    );

    onAddMilestones(selectedMilestonesList);
    clearGeneratedMilestones();
    setSelectedMilestones({});
  };
  const toggleMilestoneSelection = (index: number,) => {;
    setSelectedMilestones(prev => ({;
      ...prev,;
      [index]: !prev[index],;
    }));
  };

  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {;
    onAddMilestone(milestone);
  };
  const formatDate = (dateString: string,) => {;
    try {;
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;
    }
<<<<<<< HEAD

  },

=======
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-primary" />
          AI Milestone Generator
        </h3>
        <Button
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



  return (
    <div className='space-y-4'>;
      <div className='flex items-center justify-between'>;
        <h3 className='text-lg font-medium flex items-center'>;
          <Sparkles className='w-5 h-5 mr-2 text-primary' />;
          AI Milestone Generator;
        </h3>;
        <Button


          disabled={isGenerating || !scope || !startDate || !projectType}        >

<<<<<<< HEAD
          {isGenerating ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
=======
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
        >

          disabled={isGenerating |!scope |!startDate |!projectType}        >
ursor/fix-website-loading-errors-and-merge-6662
  },

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-primary" />
          AI Milestone Generator
        </h3>
        <Button
          variant='outline'
          onClick={handleGenerateMilestones}
          disabled={isGenerating |!scope |!startDate |!projectType}        >
          disabled={isGenerating || !scope || !startDate || !projectType}        >
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

          disabled={isGenerating || !scope || !startDate || !projectType}>;
          {isGenerating ? (;
            <>;
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
              Generating...;
            </>;
          ) : (;
            <>;
              <Sparkles className='mr-2 h-4 w-4' />;
              Generate Milestones;
            </>;
          )}
        </Button>;
      </div>;

      {generatedMilestones && generatedMilestones.length > 0 && (;
        <Card>;
          <CardContent className='pt-6'>;
            <div className='flex justify-between items-center mb-4'>;
              <p className='text-sm text-muted-foreground'>;
                {generatedMilestones && generatedMilestones.length} milestones generated based on your;
                project scope;
              </p>;
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Button
                onClick={handleAddToProject}
                disabled={!Object && Object.values(selectedMilestones).some(Boolean)}>;
                Add Selected to Project;
              </Button>;
            </div>;

            <Accordion type='multiple' className='w-full'>;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;

<<<<<<< HEAD
=======
              <Button
                onClick={handleAddToProject}
                disabled={!Object.values(selectedMilestones).some(Boolean)}              >
                Add Selected to Project
              </Button>
            </div>
            <Accordion type='multiple' className='w-full'>
              {generatedMilestones.map((milestone, index) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className='border p-2 rounded-md mb-2'>;
                  <div className='flex items-center justify-between'>;
                    <div className='flex items-center flex-1'>                      <input
                        type='checkbox'
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] |false}
                        onChange={() => toggleMilestoneSelection(index)}
                        className='mr-2 w-4 h-4 rounded text-primary'                      />;
                      <AccordionTrigger className='hover:no-underline flex-1 text-left'>;
                        <div className='flex items-center'>;
                          <span className='font-medium'>{milestone && milestone.title}</span>;
                          <Badge
                            variant='secondary'
<<<<<<< HEAD
=======
                            className='ml-2 flex items-center'>;
                            <Sparkles className='w-3 h-3 mr-1' />;
      return date_string;
    }
  }
  return (
    <div className='space - y-4'>;
      <div className='flex items - center justify - between'>;
        <h3 className='text - lg font - medium flex items - center'>;
          <Sparkles className='w - 5 h - 5 mr - 2 text - primary' />;
          AI Milestone Generator;
        </h3>;
        <Button;
          variant='outline';
          on_click={handleGenerateMilestones}
          disabled={is_generating || !scope || !start_date || !project_type}        >;
          {is_generating ? (
            <>;
              <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />;
              Generating...;
            </>) : (
            <>;
              <Sparkles className='mr - 2 h - 4 w - 4' />;
              Generate Milestones;
            </>)}
        </Button>;
      </div>;
      {generated_milestones.length > 0 && (
        <Card>;
          <CardContent className='pt - 6'>;
            <div className='flex justify - between items - center mb - 4'>;
              <p className='text - sm text - muted - foreground'>;
                {generated_milestones.length} milestones generated based on your;
                project scope;
              </p>;
              <Button;
                on_click={handleAddToProject}
                disabled={!Object.values (selected_milestones).some (Boolean)}              >;
                Add Selected to Project;
              </Button>;
            </div>;
            <Accordion type='multiple' className='w - full'>;
              {generated_milestones.map ((milestone, index) => (
                <AccordionItem;
                  value={`item-${index}`}
                  key={index}
                  className='border p - 2 rounded - md mb - 2';
                >;
                  <div className='flex items - center justify - between'>;
                    <div className='flex items - center flex - 1'>                      <input;
                        type='checkbox';
                        id={`milestone-${index}`}
                        checked={selected_milestones[index] || false}
                        on_change={() => toggleMilestoneSelection (index)}
                        className='mr - 2 w - 4 h - 4 rounded text - primary'                      />;
                      <AccordionTrigger className='hover:no - underline flex - 1 text - left'>;
                        <div className='flex items - center'>;
                          <span className='font - medium'>{milestone.title}</span>;
                          <Badge;
                            variant='secondary';
                            className='ml - 2 flex items - center';
                          >;
                            <Sparkles className='w - 3 h - 3 mr - 1' />;
                            AI Suggested;
                          </Badge>;
                        </div>;
                      </AccordionTrigger>;
                    </div>;


              <Button 
                onClick={handleAddToProject}
                disabled={!Object.values(selectedMilestones).some(Boolean)}
              >
                Add Selected to Project
              </Button>
            </div>

            <Accordion type="multiple" className="w-full">
              {generatedMilestones.map((milestone, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border p-2 rounded-md mb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <input
                        type="checkbox"
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}
                        className="mr-2 w-4 h-4 rounded text-primary"
                      />
                      <AccordionTrigger className="hover:no-underline flex-1 text-left">
                        <div className="flex items-center">
                          <span className="font-medium">{milestone.title}</span>
                          <Badge variant="secondary" className="ml-2 flex items-center">
                            <Sparkles className="w-3 h-3 mr-1" />
                            AI Suggested
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          </Badge>
                        </div>
                      </AccordionTrigger>
                    </div>
                    <Button

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }}
                      className="mr-2"
<<<<<<< HEAD


                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }}
                      className="mr-2"
                    >
                      <Plus className='h-4 w-4' />
=======
                      variant='ghost'
                      size='sm'
                      onClick={e => {
                        e.stopPropagation()
                        handleAddSingleMilestone(milestone) }}
                      className='mr-2'

                      <Plus className="h-4 w-4" />

                    >
                      <Plus className='h-4 w-4' />
                      <Plus className="h-4 w-4" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

                      onClick={e => {;
                        e && e.stopPropagation();
                        handleAddSingleMilestone(milestone);                      }}
                      className='mr-2';
                    >;
                      <Plus className='h-4 w-4' />;
                    </Button>;
                  </div>;
                  <AccordionContent>;
                    <div className='pl-6 space-y-2'>;
                      <p className='text-sm'>{milestone && milestone.description}</p>;
                      <div className='flex items-center text-sm text-muted-foreground'>;
                        <Calendar className='w-4 h-4 mr-1' />;
                        Due: {formatDate(milestone && milestone.dueDate)}
                      </div>;
                      <div className='text-sm text-muted-foreground'>;
                        Estimated effort: {milestone && milestone.estimatedHours} hours;
                      </div>;
                    </div>;
                  </AccordionContent>;
                </AccordionItem>;

              ))}
              ))}

=======
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )};
    </div>;
  );
};
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </Accordion>;
          </CardContent>;
        </Card>;
      )}
<<<<<<< HEAD

=======
    </div>
  )
}
    </div>;
  );
}
;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
