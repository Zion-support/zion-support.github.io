<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
    if (!scope |!startDate |!projectType) {
      return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======
interface AIMilestoneGeneratorProps {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    const input: MilestoneInput = {
      scope
      startDate
      endDate
      projectType
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
<<<<<<< HEAD
    await generateMilestones(input)
    // Initially select all milestones
    const initialSelection: Record<number, boolean> = {}
    generatedMilestones.forEach((_, index: number) => {
      initialSelection[index] = true
    })
    setSelectedMilestones(initialSelection)
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  }
  const handleAddToProject = () => {
    const selectedMilestonesList = generatedMilestones.filter(
      (_, index) => selectedMilestones[index]
    )
    onAddMilestones(selectedMilestonesList)
    clearGeneratedMilestones()
    setSelectedMilestones({})
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {
    onAddMilestone(milestone)
  }
  const formatDate = (dateString: string,) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
<<<<<<< HEAD

<<<<<<< HEAD
      return dateString
    }
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      return dateString
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onAddMilestone: (milestone: GeneratedMilestone) => void;
}
;
export function AIMilestoneGenerator({;
  scope,;
  startDate,;
  endDate,;
  projectType,;
  onAddMilestones,;
  onAddMilestone;
}: AIMilestoneGeneratorProps) {;
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator(),;
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string boolean>>({}),;
  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return;
    }
;
    const input: MilestoneInput = {;
      scope,;
      startDate,;
      endDate,;
      projectType;
    },;
    await generateMilestones(input),;
    // Initially select all milestones;
    const initialSelection: Record<number boolean> = {},;
    generatedMilestones.forEach((_, index: number) => {;
      initialSelection[index] = true;
    }),;
    setSelectedMilestones(initialSelection);
  },;
  const handleAddToProject = () => {;
    const selectedMilestonesList = generatedMilestones.filter((_, index) =>;
      selectedMilestones[index];
    ),;
    onAddMilestones(selectedMilestonesList),;
    clearGeneratedMilestones(),;
    setSelectedMilestones({});
  },;
  const toggleMilestoneSelection = (index: number) => {;
    setSelectedMilestones(prev => ({;
      ...prev,;
      [index]: !prev[index];
    }));
  },;
  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {;
    onAddMilestone(milestone);
  },;
  const formatDate = (dateString: string) => {;
    try {;
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;
    }
<<<<<<< HEAD

  },

<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-primary" />
          AI Milestone Generator
        </h3>
        <Button
<<<<<<< HEAD
=======



  return (
    <div className='space-y-4'>;
      <div className='flex items-center justify-between'>;
        <h3 className='text-lg font-medium flex items-center'>;
          <Sparkles className='w-5 h-5 mr-2 text-primary' />;
          AI Milestone Generator;
        </h3>;
        <Button


          disabled={isGenerating || !scope || !startDate || !projectType}        >
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
        >

=======
          disabled={isGenerating |!scope |!startDate |!projectType}        >
ursor/fix-website-loading-errors-and-merge-6662
=======
  },

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-primary" />
          AI Milestone Generator
        </h3>
        <Button
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
          disabled={isGenerating || !scope || !startDate || !projectType}        >

>>>>>>>           variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
        >
>>>>>>>           {isGenerating ? (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {isGenerating ? (
>>>>>>>             <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          variant='outline'
          onClick={handleGenerateMilestones}
          disabled={isGenerating |!scope |!startDate |!projectType}        >
          disabled={isGenerating || !scope || !startDate || !projectType}        >
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
        >
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      {generatedMilestones.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">
                {generatedMilestones.length} milestones generated based on your project scope
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                            AI Suggested
=======
              <Button
                onClick={handleAddToProject}
                disabled={!Object && Object.values(selectedMilestones).some(Boolean)}>;
                Add Selected to Project;
              </Button>;
            </div>;

            <Accordion type='multiple' className='w-full'>;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <Button
                onClick={handleAddToProject}
                disabled={!Object.values(selectedMilestones).some(Boolean)}              >
                Add Selected to Project
              </Button>
            </div>
            <Accordion type='multiple' className='w-full'>
              {generatedMilestones.map((milestone, index) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className='border p-2 rounded-md mb-2'
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center flex-1'>                      <input
                        type='checkbox'
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] |false}
                        onChange={() => toggleMilestoneSelection(index)}
                        className='mr-2 w-4 h-4 rounded text-primary'                      />
                      <AccordionTrigger className='hover:no-underline flex-1 text-left'>
                        <div className='flex items-center'>
                          <span className='font-medium'>{milestone.title}</span>
                          <Badge
                            variant='secondary'
<<<<<<< HEAD
                            className='ml-2 flex items-center'
                          >
                            <Sparkles className='w-3 h-3 mr-1' />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                             AI Suggested
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          </Badge>
                        </div>
                      </AccordionTrigger>
                    </div>
                    <Button
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }}
                      className="mr-2"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      variant='ghost'
                      size='sm'
                      onClick={e => {
                        e.stopPropagation()
                        handleAddSingleMilestone(milestone) }}
                      className='mr-2'
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

<<<<<<< HEAD
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }}
                      className="mr-2"
                    >
<<<<<<< HEAD
=======
>>>>>>>                     >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      <Plus className="h-4 w-4" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    >
                      <Plus className='h-4 w-4' />
>>>>>>>                     </Button>
=======
                      <Plus className="h-4 w-4" />
                    </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>
                  <AccordionContent>
                    <div className="pl-6 space-y-2">
                      <p className="text-sm">{milestone.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        Due: {formatDate(milestone.dueDate)}
                      </div>
                      <div className="text-sm text-muted-foreground">
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              ))}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </Accordion>
          </CardContent>
        </Card>
      )};
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </div>;
  );
}
;
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            </Accordion>;
          </CardContent>;
        </Card>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
  );
}

                    <Button;
                      variant='ghost';
                      size='sm';
                      on_click={e => {
                        e.stop_propagation ();
                        handleAddSingleMilestone (milestone) }}
                      className='mr - 2';
                    >;
                      <Plus className='h - 4 w - 4' />;
                    </Button>;
                  </div>;
                  <AccordionContent>;
                    <div className='pl - 6 space - y-2'>;
                      <p className='text - sm'>{milestone.description}</p>;
                      <div className='flex items - center text - sm text - muted - foreground'>;
                        <Calendar className='w - 4 h - 4 mr - 1' />;
                        Due: {format_date (milestone.due_date)}
                      </div>;
                      <div className='text - sm text - muted - foreground'>;
                        Estimated effort: {milestone.estimated_hours} hours;
                      </div>;
                    </div>;
                  </AccordionContent>;
                </AccordionItem>))}
            </Accordion>;
          </CardContent>;
        </Card>)}
    </div>);
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>
  )
}
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
