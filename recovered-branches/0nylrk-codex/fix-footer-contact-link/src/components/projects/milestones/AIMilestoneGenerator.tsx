<<<<<<< HEAD
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
<<<<<<< HEAD
=======

<<<<<<< HEAD


export function AIMilestoneGenerator({;


import React, { useState } from 'react';
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
export function AIMilestoneGenerator({

export function AIMilestoneGenerator({;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function AIMilestoneGenerator(): any ({;

export function AIMilestoneGenerator({;
import React, { useState } from 'react';  },

export function AIMilestoneGenerator({;
import React, { useState } from 'react';

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  scope;
  startDate;
  endDate;
  projectType;
  onAddMilestones;
<<<<<<< HEAD

    }

  };

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

  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return;
    }

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

          <CardContent className="pt-6">;
            <div className="flex justify-between items-center mb-4">;
              <p className="text-sm text-muted-foreground">;
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
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] |false}
                        onChange={() => toggleMilestoneSelection(index)}

                            AI Suggested;

                        e.stopPropagation(),

                        handleAddSingleMilestone(milestone)

                    <Button;
                      variant="ghost";

                      size="sm";
                      onClick={(e) => {;
                        e.stopPropagation(),;
                        handleAddSingleMilestone(milestone),;
=======
<<<<<<< HEAD
  onAddMilestone
}: AIMilestoneGeneratorProps) {
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator($2);
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string, boolean>>({}),
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
=======
  const handleAddSingleMilestone = $2;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  onAddMilestone
}: AIMilestoneGeneratorProps) {
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator();

  const [selectedMilestones, setSelectedMilestones] = useState<Record<string, boolean>>({});
  const handleGenerateMilestones = async () => {
    if (!scope |!startDate |!projectType) {
      return
    }
    const input: MilestoneInput = {
      scope;
      startDate;
      endDate
      projectType
    }
    await generateMilestones(input);
    // Initially select all milestones
    const initialSelection = {}
    generatedMilestones.forEach((_, index) => {
      initialSelection[index] = true
    });
    setSelectedMilestones(initialSelection)
  }
  const handleAddToProject = () => {
    const selectedMilestonesList = generatedMilestones.filter((_, index) =>
      selectedMilestones[index]
    );
    onAddMilestones(selectedMilestonesList);
    clearGeneratedMilestones();
    setSelectedMilestones({})
  }
  const toggleMilestoneSelection = (index: number) => {
    setSelectedMilestones(prev => ({
      ...prev
      [index]: !prev[index]
    }))
  }
  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {
    onAddMilestone(milestone)
  }
>>>>>>> merged-prs-20250907-203621
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
    }
<<<<<<< HEAD
=======
=======
  onAddMilestone;
}: AIMilestoneGeneratorProps) {;
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    }

  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  };
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return;
    }
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const toggleMilestoneSelection = (index: number) => {;
    setSelectedMilestones(prev => ({;
      ...prev,;
      [index]: !prev[index];
    }));
<<<<<<< HEAD
=======
<<<<<<< HEAD
  },;
  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {;
    onAddMilestone(milestone);
  },;
=======
  };

  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {;
    onAddMilestone(milestone);
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const formatDate = (dateString: string) => {;
    try {;'
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;
<<<<<<< HEAD

=======
<<<<<<< HEAD
    }




  return (

import React, { useState } from 'react',;
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
;
interface AIMilestoneGeneratorProps {;
  scope:string,;
  startDate:string,;
  endDate:string | null,;
  projectType:string,;
  onAddMilestones:(milestones:GeneratedMilestone[]) => void,;
  onAddMilestone:(milestone:GeneratedMilestone) => void;
}
;
export function AIMilestoneGenerator({;
  scope,;
  startDate,;
  endDate,;
  projectType,;
  onAddMilestones,;
  onAddMilestone;
} AIMilestoneGeneratorProps) {;
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator(),;
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string boolean>>({}),;
;
  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return,;
    }
;
    const input:MilestoneInput = {;
      scope,;
      startDate,;
      endDate,;
      projectType;
    },;
;
    await generateMilestones(input),;
    // Initially select all milestones;
    const initialSelection = {},;
    generatedMilestones.forEach((_, index) => {;
      initialSelection[index] = true,;
    }),;
    setSelectedMilestones(initialSelection),;
  },;
;
  const handleAddToProject = () => {;
    const selectedMilestonesList = generatedMilestones.filter((_, index) => ;
      selectedMilestones[index];
    ),;
    ;
    onAddMilestones(selectedMilestonesList),;
    clearGeneratedMilestones(),;
    setSelectedMilestones({}),;
  },;
;
  const toggleMilestoneSelection = (index:number) => {;
    setSelectedMilestones(prev => ({;
      ...prev,;
      [index]:!prev[index];
    })),;
  },;
;
  const handleAddSingleMilestone = (milestone:GeneratedMilestone) => {;
    onAddMilestone(milestone);
  },;
;
  const formatDate = (dateString:string) => {;
    try {;
      return format(parseISO(dateString), 'MMM dd, yyyy'),;
    } catch (error) {;
      return dateString,;
    }
  },;
;
  return (;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

  },

    }

<<<<<<< HEAD
=======


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="space-y-4">;
      <div className="flex items-center justify-between">;
        <h3 className="text-lg font-medium flex items-center">;
          <Sparkles className="w-5 h-5 mr-2 text-primary" />;
          AI Milestone Generator;
        </h3>;
<<<<<<< HEAD
          disabled={isGenerating || !scope || !startDate || !projectType}>;
        <Button;
          variant="outline";
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
        >;
=======
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}

          disabled={isGenerating || !scope || !startDate || !projectType}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {isGenerating ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating...;
            </>;
<<<<<<< HEAD
          ) :(;
=======
          ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Milestones;
            </>;
          )}
        </Button>;
      </div>;
<<<<<<< HEAD
;
      {generatedMilestones.length > 0 && (;
=======

      {generatedMilestones && generatedMilestones.length > 0 && (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Card>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <CardContent className="pt-6">;
            <div className="flex justify-between items-center mb-4">;
              <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      }}
                      className="mr-2";
                    >;
                      <Plus className="h-4 w-4" />;
                    </Button>;
                  </div>;
                  <AccordionContent>;
                    <div className="pl-6 space-y-2">;
<<<<<<< HEAD
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
=======
                      <p className="text-sm">{milestone.description}</p>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

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
=======
    </div>;
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
  ),;}
 await generateMilestones (input);
//Initially select all milestones const handleAddToProject = () => {
  const selectedMilestonesList = generatedMilestones.filter ( (, index) => selectedMilestones[index]);
onAddMilestones (selectedMilestonesList);
clearGeneratedMilestones ();
setSelectedMilestones ({
  
}) 
};
return (<div className="space-y-4" > <div className="flex items-center justify-between" > <h3 className="text-lg font-medium flex items-center" > <Sparkles className="w-5 h-5 mr-2 text-primary" /> AI Milestone Generator </h3> <Button > {
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Generate Milestones </>) 
}</Button> </div> {
  generatedMilestones.length > 0 && (<Card> <CardContent className="pt-6" > <div className="flex justify-between items-center mb-4" > <p className="text-sm text-muted-foreground" > {
  generatedMilestones.length 
}milestones generated based on your project scope </p> <Button onClick= {
  handleAddToProject 
}disabled= {
  !Object.values (selectedMilestones) .some (Boolean) 
}> Add Selected to Project </Button> </div> AI Suggested </Badge> </div> </AccordionTrigger> </div> <Button > <Plus className="h-4 w-4" /> </Button> </div> <AccordionContent> </div> </div> </AccordionContent> </AccordionItem>) ) 
}</Accordion> </CardContent> </Card>) 
}</div>) 
}
>>>>>>> merged-prs-20250907-203621
  },

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-primary" />
          AI Milestone Generator
        </h3>
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating |!scope |!startDate |!projectType}
        >
          {isGenerating ? (
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
      {generatedMilestones.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">
                {generatedMilestones.length} milestones generated based on your project scope
              </p>
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
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <input
                        type="checkbox"
<<<<<<< HEAD
<input
                        type="checkbox"
                {generatedMilestones.length} milestones generated based on your project scope;
=======
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] |false}
                        onChange={() => toggleMilestoneSelection(index)}
<<<<<<< HEAD
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
                        e.stopPropagation();
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }}
                      className="mr-2"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
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
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  )
<<<<<<< HEAD
}
=======
}
=======
                        className="mr-2 w-4 h-4 rounded text-primary";
                      />;
                      <AccordionTrigger className="hover:no-underline flex-1 text-left">;
                        <div className="flex items-center">;
                          <span className="font-medium">{milestone && milestone.title}</span>;
                          <Badge variant="secondary" className="ml-2 flex items-center">;
                            <Sparkles className="w-3 h-3 mr-1" />;
=======
import {Button} from '@/components / ui / button';
import {Card, CardContent} from '@/components / ui / card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components / ui / accordion';
import {Loader2, Sparkles, Plus, Calendar} from 'lucide-react';
import {format, parseISO} from 'date - fns';
import {MilestoneInput, GeneratedMilestone, useMilestoneGenerator} from '@/hooks / useMilestoneGenerator';
import {Badge} from '@/components / ui / badge';
interface AIMilestoneGeneratorProps {
  scope: string,
  start_date: string,
  end_date: string | null,
  project_type: string,
  onAddMilestones: (milestones: GeneratedMilestone[]) => void,
  onAddMilestone: (milestone: GeneratedMilestone) => void;
}
export /**
 * AIMilestoneGenerator - Function description
 */
function AIMilestoneGenerator() {
  const { generate_milestones, generated_milestones, is_generating, clearGeneratedMilestones } = useMilestoneGenerator ();
  const [selected_milestones, setSelectedMilestones] = useState < Record < string, boolean>>({});
;
  const handleGenerateMilestones = async () => {
    // Check condition
if ( {) {
  $2
}
      return;
    }
    const input: MilestoneInput = {
      scope;
      start_date;
      end_date,
      project_type;
    }
;
    await generate_milestones (input);
    // Initially select all milestones;
    const initial_selection = {}
    generated_milestones.for_each ((_, index) => {
      initial_selection[index] = true;
    });
    setSelectedMilestones (initial_selection);
  }
;
  const handleAddToProject = () =>: any {
    const selectedMilestonesList = generated_milestones.filter ((_, index) =>;
      selected_milestones[index]);
;
    onAddMilestones (selectedMilestonesList);
    clearGeneratedMilestones ();
    setSelectedMilestones ({});
  }
;
  const toggleMilestoneSelection = (index: number) =>: any {
    setSelectedMilestones (prev => ({
      ...prev,
      [index]: !prev[index];
    }));
  }
;
  const handleAddSingleMilestone = (milestone: GeneratedMilestone) =>: any {
    onAddMilestone (milestone);
  }
;
  const format_date = (date_string: string) =>: any {
    try {
      return format (parseISO (date_string), 'MMM dd, yyyy');
    } catch (error) {
      return date_string;
    }
  }
;
  return (
    <div className="space - y-4">;
      <div className="flex items - center justify - between">;
        <h3 className="text - lg font - medium flex items - center">;
          <Sparkles className="w - 5 h - 5 mr - 2 text - primary" />;
          AI Milestone Generator;
        </h3>;
        <Button;
          variant="outline";
          on_click={handleGenerateMilestones}
          disabled={is_generating || !scope || !start_date || !project_type}
        >;
          {is_generating ? (
            <>;
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
              Generating...;
            </>) : (
            <>;
              <Sparkles className="mr - 2 h - 4 w - 4" />;
              Generate Milestones;
            </>)}
        </Button>;
      </div>;
      {generated_milestones.length > 0 && (
        <Card>;
          <CardContent className="pt - 6">;
            <div className="flex justify - between items - center mb - 4">;
              <p className="text - sm text - muted - foreground">;
                {generated_milestones.length} milestones generated based on your project scope;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] |false}
                        onChange={() => toggleMilestoneSelection(index)}

                            AI Suggested;

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
<<<<<<< HEAD

                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }}
                      className="mr-2"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
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
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
