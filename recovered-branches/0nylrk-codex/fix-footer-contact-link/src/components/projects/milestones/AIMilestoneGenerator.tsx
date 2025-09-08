<<<<<<< HEAD


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

export function AIMilestoneGenerator(): any ({;

export function AIMilestoneGenerator({;
import React, { useState } from 'react';  },

export function AIMilestoneGenerator({;
import React, { useState } from 'react';
>>>>>>> origin/cursor/delete-old-data-records-6bba


  scope;
  startDate;
  endDate;
  projectType;
  onAddMilestones;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    }

  };


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;

import { Card, CardContent } from '@/components/ui/card',;
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;'
  AccordionTrigger} from '@/components/ui/accordion',;'
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react',;'
import { format, parseISO } from 'date-fns',;'
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;'
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
export function AIMilestoneGenerator() { return null; }
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator(),;
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string boolean>>({}),;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return;
    }
<<<<<<< HEAD



=======
;
    const input: MilestoneInput = {;
      scope,;
      startDate,;
      endDate,;
      projectType;
    },;
    await generateMilestones(input),;
    // Initially select all milestones;
    const initialSelection = {},;
    generatedMilestones.forEach((_, index) => {;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const toggleMilestoneSelection = (index: number) => {;
    setSelectedMilestones(prev => ({;
      ...prev,;
      [index]: !prev[index];
    }));


  const formatDate = (dateString: string) => {;
    try {;'
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;


    }

  },

    }


<<<<<<< HEAD




  return (

    <div className="space-y-4">;
      <div className="flex items-center justify-between">;
        <h3 className="text-lg font-medium flex items-center">;
          <Sparkles className="w-5 h-5 mr-2 text-primary" />;
          AI Milestone Generator;
        </h3>;

        <Button
          variant="outline"
          onClick={handleGenerateMilestones}

          disabled={isGenerating || !scope || !startDate || !projectType}>;

          {isGenerating ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating...;
            </>;

          ) : (;

            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Milestones;
            </>;
          )}
        </Button>;
      </div>;


      {generatedMilestones && generatedMilestones.length > 0 && (;

        <Card>;

          <CardContent className="pt-6">;
            <div className="flex justify-between items-center mb-4">;
              <p className="text-sm text-muted-foreground">;

=======
          <CardContent className="pt-6">;
            <div className="flex justify-between items-center mb-4">;
              <p className="text-sm text-muted-foreground">;
                      <input
                        type="checkbox"
                {generatedMilestones.length} milestones generated based on your project scope;
              </p>;
              <Button ;
                onClick={handleAddToProject}
                disabled={!Object.values(selectedMilestones).some(Boolean)}
              >;
                Add Selected to Project;
              </Button>;
            </div>;
;
            <Accordion type="multiple" className="w-full">;
              {generatedMilestones.map((milestone, index) => (;
                <AccordionItem value={`item-${index}`} key={index} className="border p-2 rounded-md mb-2">;
                  <div className="flex items-center justify-between">;
                    <div className="flex items-center flex-1">;
                      <input;
                        type="checkbox";
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}
                        className="mr-2 w-4 h-4 rounded text-primary";
                      />;
                      <AccordionTrigger className="hover:no-underline flex-1 text-left">;
                        <div className="flex items-center">;
                          <span className="font-medium">{milestone.title}</span>;
                          <Badge variant="secondary" className="ml-2 flex items-center">;
                            <Sparkles className="w-3 h-3 mr-1" />;
                            AI Suggested;
                          </Badge>;
                        </div>;
                      </AccordionTrigger>;
                    </div>;

                        e.stopPropagation(),


                        handleAddSingleMilestone(milestone)
                    <Button;
                      variant="ghost";
                      size="sm";
                      onClick={(e) => {;
                        e.stopPropagation(),;
                        handleAddSingleMilestone(milestone),;
                      }}
                      className="mr-2";
                    >;
                      <Plus className="h-4 w-4" />;
                    </Button>;
                  </div>;
                  <AccordionContent>;
                    <div className="pl-6 space-y-2">;

>>>>>>> origin/cursor/delete-old-data-records-6bba
                {generatedMilestones && generatedMilestones.length} milestones generated based on your project scope;
              </p>;
              <Button
                onClick={handleAddToProject}
                disabled={!Object && Object.values(selectedMilestones).some(Boolean)}>;
                Add Selected to Project;
              </Button>;
            </div>;

            <Accordion type="multiple" className="w-full">;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;
                <AccordionItem value={`item-${index}`} key={index} className="border p-2 rounded-md mb-2">;
                  <div className="flex items-center justify-between">;
                    <div className="flex items-center flex-1">;

<<<<<<< HEAD

                      <input
                        type="checkbox"

=======
                      <input
                        type="checkbox"

<input
                        type="checkbox"
                {generatedMilestones.length} milestones generated based on your project scope;
              </p>;
              <Button ;
                onClick={handleAddToProject}
                disabled={!Object.values(selectedMilestones).some(Boolean)}
              >;
                Add Selected to Project;
              </Button>;
            </div>;
;
            <Accordion type="multiple" className="w-full">;
              {generatedMilestones.map((milestone, index) => (;
                <AccordionItem value={`item-${index}`} key={index} className="border p-2 rounded-md mb-2">;
                  <div className="flex items-center justify-between">;
                    <div className="flex items-center flex-1">;
                      <input;
                        type="checkbox";
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] |false}

                        className="mr-2 w-4 h-4 rounded text-primary";
                      />;"
                      <AccordionTrigger className="hover:no-underline flex-1 text-left">;"
                        <div className="flex items-center">;

"
                          <span className="font-medium">{milestone.title}</span>;"
                          <Badge variant="secondary" className="ml-2 flex items-center">;"
                            <Sparkles className="w-3 h-3 mr-1" />;

          variant="outline"
          onClick={handleGenerateMilestones}
                      <input"
                        type="checkbox"`
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] |false}
                        onChange={() => toggleMilestoneSelection(index)}


<<<<<<< HEAD
=======
                        e.stopPropagation(),

                        handleAddSingleMilestone(milestone)

                    <Button;
                      variant="ghost";

                      size="sm";
                      onClick={(e) => {;
                        e.stopPropagation(),;
                        handleAddSingleMilestone(milestone),;

                      }}

                      className="mr-2";
                    >;"
                      <Plus className="h-4 w-4" />;
                    </Button>;
                  </div>;
                  <AccordionContent>;"
                    <div className="pl-6 space-y-2">;
"
                      <p className="text-sm">{milestone && milestone.description}</p>;"
                      <div className="flex items-center text-sm text-muted-foreground">;"
                        <Calendar className="w-4 h-4 mr-1" />;
                        Due: {formatDate(milestone && milestone.dueDate)}
                      </div>;"
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

                    <Button;"
                      variant="ghost";"
                      size="sm";
                      on_click={(e) => {}
                        e.stop_propagation ();
                        handleAddSingleMilestone (milestone);

                      }}
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
<p className="text-sm">{milestone.description}</p>;
                      <div className="flex items-center text-sm text-muted-foreground">;
                        <Calendar className="w-4 h-4 mr-1" />;
                        Due:{formatDate(milestone.dueDate)}
                      </div>;
                      <div className="text-sm text-muted-foreground">;
                        Estimated effort:{milestone.estimatedHours} hours;
                      </div>;
                    </div>;
                  </AccordionContent>;
                </AccordionItem>;              ))}
            </Accordion>;
          </CardContent>;
        </Card>;
      )}

                      className="mr - 2";
                    >;"
                      <Plus className="h - 4 w - 4" />;
                    </Button>;
                  </div>;
                  <AccordionContent>;"
                    <div className="pl - 6 space - y-2">;"
                      <p className="text - sm">{milestone.description}</p>;"
                      <div className="flex items - center text - sm text - muted - foreground">;"
                        <Calendar className="w - 4 h - 4 mr - 1" />;
                        Due: {format_date (milestone.due_date)}
                      </div>;"

                    <Button;
                      variant="ghost";
                      size="sm";
                      on_click={(e) => {
                        e.stop_propagation ();
                        handleAddSingleMilestone (milestone);
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

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
