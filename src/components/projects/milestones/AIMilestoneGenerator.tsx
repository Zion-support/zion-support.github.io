interface AIMilestoneGeneratorProps {;

import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react'
import { format, parseISO  } from 'date-fns';
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Badge } from '@/components/ui/badge';
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
origin/cursor/automate-test-improve-and-merge-code-2533
  scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;
interface AIMilestoneGeneratorProps {;
  scope: string;,
  startDate: string;
  endDate: string | null;,
  projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;



pr-12325

    if (!scope || !startDate || !projectType) {
      return;

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

    }
    const input: MilestoneInput = {
      scope;
      startDate;
      endDate;
      projectType;
import React, { useState } from 'react';
import { Button } from '@/components/ui/ button';
import { Card, CardContent } from '@/components/ui/ card';
import {
  // TODO: Implement
pr-12325
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components / ui / accordion';
} from '@/components/ui/ accordion';
pr-12325
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
} from '@/hooks/ useMilestoneGenerator';
import { Badge } from '@/components/ui/ badge';
interface AIMilestoneGeneratorProps {
  // TODO: Implement
  start_date: string;
  end_date: string | null;,
  project_type: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;,
  onAddMilestone: (milestone: GeneratedMilestone) => void;
export /**
 * AIMilestoneGenerator - Function description;
 */
function AIMilestoneGenerator() {
  const {
  // TODO: Implement
pr-12325
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
    // Check condition;
if ( {) {
  $2;
pr-12325
      scope,
      start_date,
      end_date,
      project_type,
    }
pr-12325
    await generate_milestones (input);
    // Initially select all milestones;
    const initial_selection: Record < number, boolean> = {}
    generated_milestones.for_each ((_, index: number) => {
      initial_selection[index] = true;
    });
    setSelectedMilestones (initial_selection);
  }
  const handleAddToProject = () => {
    const selectedMilestonesList = generatedMilestones.filter(
  const handleAddToProject = () => {
    const selectedMilestonesList = generatedMilestones.filter()
pr-12325
      (_, index) => selectedMilestones[index]
    )
    onAddMilestones(selectedMilestonesList)
    clearGeneratedMilestones()
    setSelectedMilestones({})
  }

  const toggleMilestoneSelection = (index: number, ) =>: any {
    setSelectedMilestones (prev => ({
      ...prev,
      [index]: !prev[index],
    }));

  }
  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {
    onAddMilestone(milestone)
  }
  const formatDate = (dateString: string,) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {

      return dateString
    }
  }

  const toggleMilestoneSelection = (index: number, ) =>: any {
  // TODO: Implement
    setSelectedMilestones (prev => ({
      ...prev,
      [index]: !prev[index],)
    }));

  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {
    onAddMilestone(milestone)
  const formatDate = (dateString: string,) => {
    try {
  // TODO: Implement
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {

      return dateString;


pr-12325

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
import { format, parseISO } from 'date-fns',;
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;
import { Badge } from '@/components/ui/badge',;
pr-12325
  scope: string,;
  startDate: string,;
  endDate: string | null,;
  projectType: string,;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void,;

  onAddMilestone: (milestone: GeneratedMilestone) => void;

;
export function AIMilestoneGenerator({;
pr-12325
  scope,;
  startDate,;
  endDate,;
  projectType,;
  onAddMilestones,;

  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return;
    }

    const input: MilestoneInput = {;
      scope,;
      startDate,;
      endDate,;

    try {;
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;
    }

  },

  return (

        <Button

          disabled={isGenerating || !scope || !startDate || !projectType}        >

          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
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

          disabled={isGenerating || !scope || !startDate || !projectType}>;
          {isGenerating ? (;
            <>;
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
              Generating...;
  onAddMilestone;)
}: AIMilestoneGeneratorProps) {;
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator(),;
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string boolean>>({}),;

    const initialSelection: Record<number boolean> = {},;
</number>
    <div className="space-y-4">"
</div>"
      <div className="flex items-center justify-between">"
        <h3 className="text-lg font-medium flex items-center">"
</h3>"
          <Sparkles className="w-5 h-5 mr-2 text-primary" />"

        </h3>
        <Button;
          disabled={isGenerating || !scope || !startDate || !projectType}        >

            <>"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
</Loader2>
            </>
          ) : (
              <Sparkles className="mr-2 h-4 w-4" />"

            </>)
          )}
        
      </div>
        <Card>
"
          <CardContent className="pt-6">"
            <div className="flex justify-between items-center mb-4">"
              <p className="text-sm text-muted-foreground">"
</p>
            <>;"
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
pr-12325
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
              <Button
                onClick={handleAddToProject}
                disabled={!Object && Object.values(selectedMilestones).some(Boolean)}>;
                Add Selected to Project;
              </Button>;
            </div>;

            <Accordion type='multiple' className='w-full'>;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;

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
                            className='ml-2 flex items-center'>;
                            <Sparkles className='w-3 h-3 mr-1' />;
      return date_string;
    }
  }
  return (

            </>;)
      </div>;
        <Card>;

          <CardContent className='pt-6'>;

            <div className='flex justify-between items-center mb-4'>;
              <p className='text-sm text-muted-foreground'>;
              </p>;
                onClick={handleAddToProject}
                disabled={!Object && Object.values(selectedMilestones).some(Boolean)}>;

            <Accordion type='multiple' className='w-full'>;

                <AccordionItem;
                  value={`item-${index}`}
                  key={index}
                  className='border p-2 rounded-md mb-2
                >

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center flex-1'>                      <input;
                      <AccordionTrigger className='hover:no-underline flex-1 text-left'>

                        <div className='flex items-center'>
                          <span className='font-medium'>{milestone.title}</span>
                          <Badge;
                            variant='secondary
                            className='ml-2 flex items-center'>;

                            <Sparkles className='w-3 h-3 mr-1' />;

pr-12325
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
                          </Badge>
                        </div>
                      </AccordionTrigger>
                    </div>
                    <Button

                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }}
                      className="mr-2"

                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation(),
  onAddMilestone: (milestone: GeneratedMilestone) => void
export function AIMilestoneGenerator({
  scope;
  startDate;
  endDate;
  projectType;
  onAddMilestones;
  onAddMilestone
}: AIMilestoneGeneratorProps) {
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator();
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string, boolean>>({}),

  const handleGenerateMilestones = null;
origin/cursor/automate-test-improve-and-merge-code-2533
                        handleAddSingleMilestone(milestone)
                      }}
                      className="mr-2"
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

                      onClick={e => {;
                        e && e.stopPropagation();
                        handleAddSingleMilestone(milestone);                      }}
                      className='mr-2';
                    >;
                      <Plus className='h-4 w-4' />;
                    </Button>;
                  </div>;
                  <AccordionContent>;

        </h3>;
          variant='outline';
          on_click={handleGenerateMilestones}
          disabled={is_generating || !scope || !start_date || !project_type}        >;

              <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />;
            </>) : (
              <Sparkles className='mr - 2 h - 4 w - 4' />;
            </>)}

          <CardContent className='pt - 6'>;

            <div className='flex justify - between items - center mb - 4'>;
              <p className='text - sm text - muted - foreground'>;
                on_click={handleAddToProject}
                disabled={!Object.values (selected_milestones).some (Boolean)}              >;

            <Accordion type='multiple' className='w - full'>;

                <AccordionItem;`;
                  className='border p - 2 rounded - md mb - 2';
                >;

                    <div className='flex items - center flex - 1'>                      <input;
                      <AccordionTrigger className='hover:no - underline flex - 1 text - left'>;

                        <div className='flex items - center'>;
                          <span className='font - medium'>{milestone.title}</span>;
                            variant='secondary';
                            className='ml - 2 flex items - center';

                            <Sparkles className='w - 3 h - 3 mr - 1' />;

                disabled={!Object.values(selectedMilestones).some(Boolean)}

              

            <Accordion type="multiple" className="w-full">"
"`;
                <AccordionItem value={`item-${index}`} key={index} className="border p-2 rounded-md mb-2">"
                    <div className="flex items-center flex-1">"
                      <input;"
                        type="checkbox""`;
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}
</input>"
                      <AccordionTrigger className="hover:no-underline flex-1 text-left">"
                        <div className="flex items-center">"
                          <span className="font-medium">{milestone.title}</span>""
                          <Badge variant="secondary" className="ml-2 flex items-center">"
                            <Sparkles className="w-3 h-3 mr-1" />"

                          
                      
                    <Button;"
                      variant="ghost"""
                      size="sm""
                      onClick={(e) => {
                      <Plus className="h-4 w-4" />"

                    
                  <AccordionContent>
                    <div className="pl-6 space-y-2">"
                      <p className="text-sm">{milestone.description}</p>""
                      <div className="flex items-center text-sm text-muted-foreground">"
                        <Calendar className="w-4 h-4 mr-1" />"

                      <div className="text-sm text-muted-foreground">"
                  
                      <Plus className='h-4 w-4' />;

                  <AccordionContent>;

pr-12325
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

            </Accordion>;
          </CardContent>;
        </Card>;
      )}

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

                      <div className='text-sm text-muted-foreground'>;
                      variant='ghost';
                      size='sm';
                      on_click={e => {

                      <Plus className='h - 4 w - 4' />;


pr-12325
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
}
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

                      <div className='text - sm text - muted - foreground'>;
                ))}
    </div>);`;
pr-12325
