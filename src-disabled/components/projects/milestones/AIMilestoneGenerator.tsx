

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
                        handleAddSingleMilestone(milestone);                      }
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


            <Accordion type='multiple' className='w-full'>'
'`;
                <AccordionItem value={`item-${index}`} key={index} className='border p-2 rounded-md mb-2'>'
                    <div className='flex items-center flex-1'>'
                      <input;'
                        type='checkbox''`;
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}
</input>'
                      <AccordionTrigger className='hover:no-underline flex-1 text-left'>'
                        <div className='flex items-center'>'
                          <span className='font-medium'>{milestone.title}</span>''
                          <Badge variant='secondary' className='ml-2 flex items-center'>'
                            <Sparkles className='w-3 h-3 mr-1' />'

                    <Button;'
                      variant='ghost'''
                      size='sm''
                      onClick={(e) => {
                      <Plus className='h-4 w-4' />'

                  <AccordionContent>
                    <div className='pl-6 space-y-2'>'
                      <p className='text-sm'>{milestone.description}</p>''
                      <div className='flex items-center text-sm text-muted-foreground'>'
                        <Calendar className='w-4 h-4 mr-1' />'

                      <div className='text-sm text-muted-foreground'>'
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
                        handleAddSingleMilestone (milestone) }
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
})
;
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

                      <div className='text - sm text - muted - foreground'>;
                ))}
    </div>);`;
pr-12325
