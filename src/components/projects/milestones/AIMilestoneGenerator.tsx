
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
interface AIMilestoneGeneratorProps {
  scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;
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
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
;