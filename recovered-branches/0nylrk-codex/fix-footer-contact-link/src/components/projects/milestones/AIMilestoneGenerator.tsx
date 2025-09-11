

export function AIMilestoneGenerator({;


=======import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, Sparkles, Plus, Calendar  } from 'lucide-react';
import { format, parseISO  } from 'date-fns';
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Badge } from '@/components/ui/badge';
interface AIMilestoneGeneratorProps {

  scope: string
  startDate: string
  endDate: string | null
  projectType: string
  onAddMilestones: (milestones: GeneratedMilestone[]) => void

  onAddMilestone: (milestone: GeneratedMilestone) => void
}
export function AIMilestoneGenerator({;
=======
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Loader2, Sparkles, Plus, Calendar} from 'lucide-react';
import {format, parseISO} from 'date-fns';
import {MilestoneInput, GeneratedMilestone, useMilestoneGenerator} from '@/hooks/useMilestoneGenerator';
import {Badge} from '@/components/ui/badge';
interface AIMilestoneGeneratorProps {;
  scope: string,;
  startDate: string,;
  endDate: string | null,;
  projectType: string,;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void,;
  onAddMilestone: (milestone: GeneratedMilestone) => void;
}
=======
export function AIMilestoneGenerator(): any ({;

=======



export function AIMilestoneGenerator({;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string, boolean>>({});
  const handleGenerateMilestones = async () => {
    if (!scope |!startDate |!projectType) {
      return
    }
  };

  };

=======import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger} from '@/components/ui/accordion',;
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react',;
import { format, parseISO } from 'date-fns',;
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;
import { Badge } from '@/components/ui/badge',;
interface AIMilestoneGeneratorProps {;
  scope: string,;
  startDate: string,;
  endDate: string | null,;
  projectType: string,;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void,;
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
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string boolean>>({}),;=======
  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return;
    }
    const input: MilestoneInput = {;
      scope;
      startDate;
      endDate,;
      projectType;
    };

    await generateMilestones(input);
    // Initially select all milestones;
    const initialSelection = {};
    generatedMilestones && generatedMilestones.forEach((_, index) => {;
      initialSelection[index] = true;
    });
    setSelectedMilestones(initialSelection);
  };

  const handleAddToProject = () => {;
    const selectedMilestonesList = generatedMilestones && generatedMilestones.filter((_, index) => ;
      selectedMilestones[index];
    );

    onAddMilestones(selectedMilestonesList);
    clearGeneratedMilestones();
    setSelectedMilestones({});
  };

                            AI Suggested;
                          </Badge>;
                        </div>;
                      </AccordionTrigger>;
                    </div>;

                      onClick={(e) => {

                        handleAddSingleMilestone(milestone)
=======
                      onClick={(e) => {;
                        e && e.stopPropagation();
                        handleAddSingleMilestone(milestone);                      }}
                      className="mr-2";
                    >;
                      <Plus className="h-4 w-4" />;
                    </Button>;
                  </div>;
                  <AccordionContent>;
                    <div className="pl-6 space-y-2">;
                      <p className="text-sm">{milestone && milestone.description}</p>;
                      <div className="flex items-center text-sm text-muted-foreground">;
                        <Calendar className="w-4 h-4 mr-1" />;
                        Due: {formatDate(milestone && milestone.dueDate)}
                      </div>;
                      <div className="text-sm text-muted-foreground">;
                        Estimated effort: {milestone && milestone.estimatedHours} hours;
                      </div>;
                    </div>;
                  </AccordionContent>;
                </AccordionItem>;
              ))}
            </Accordion>;
          </CardContent>;
        </Card>;
      )}

    </div>;
  );
}

=======
                    <Button;
                      variant="ghost";
                      size="sm";
                      on_click={(e) => {
                        e.stop_propagation ();
                        handleAddSingleMilestone (milestone);
=======
                        e.stopPropagation();

                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      }}
                      className="mr - 2";
                    >;
                      <Plus className="h - 4 w - 4" />;
                    </Button>;
                  </div>;
                  <AccordionContent>;
                    <div className="pl - 6 space - y-2">;
                      <p className="text - sm">{milestone.description}</p>;
                      <div className="flex items - center text - sm text - muted - foreground">;
                        <Calendar className="w - 4 h - 4 mr - 1" />;
                        Due: {format_date (milestone.due_date)}
                      </div>;
                      <div className="text - sm text - muted - foreground">;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
