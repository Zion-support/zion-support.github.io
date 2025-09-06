
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159



export function AIMilestoneGenerator({;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
export function AIMilestoneGenerator({;

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function AIMilestoneGenerator({;
import React, { useState } from 'react';  },

<<<<<<< HEAD
<<<<<<< HEAD

export function AIMilestoneGenerator({;
import React, { useState } from 'react';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  scope;
  startDate;
  endDate;
  projectType;
  onAddMilestones;
<<<<<<< HEAD
<<<<<<< HEAD
  onAddMilestone;
}: AIMilestoneGeneratorProps) {;
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator();
=======
  onAddMilestone
}: AIMilestoneGeneratorProps) {
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator();

  const [selectedMilestones, setSelectedMilestones] = useState<Record<string, boolean>>({});
  const handleGenerateMilestones = async () => {
    if (!scope |!startDate |!projectType) {
      return
    }
    const input: MilestoneInput = {
<<<<<<< HEAD
=======
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
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    }

  };

<<<<<<< HEAD
=======
=======
  }
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  onAddMilestone;
}: AIMilestoneGeneratorProps) {;
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator();

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string boolean>>({}),;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD

    const input: MilestoneInput = {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
    }

<<<<<<< HEAD
    }

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const toggleMilestoneSelection = (index: number) => {;
    setSelectedMilestones(prev => ({;
      ...prev,;
      [index]: !prev[index];
    }));
<<<<<<< HEAD
  };

  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {;
    onAddMilestone(milestone);
  };

=======
  },;
  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {;
    onAddMilestone(milestone);
  },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const formatDate = (dateString: string) => {;
    try {;
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }

<<<<<<< HEAD
=======

    const input: MilestoneInput = {;
    }

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },




<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    }
=======
  return (    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function AIMilestoneGenerator({;
import React, { useState } from 'react';  },

  return (    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
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
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating...;
            </>;
          ) : (;            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Milestones;
            </>;
          )}
        </Button>;
      </div>;

      {generatedMilestones && generatedMilestones.length > 0 && (;        <Card>;
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
                        type="checkbox"                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] |false}
<<<<<<< HEAD
<<<<<<< HEAD
                        onChange={() => toggleMilestoneSelection(index)}
                        className="mr-2 w-4 h-4 rounded text-primary";
                      />;
                      <AccordionTrigger className="hover:no-underline flex-1 text-left">;
                        <div className="flex items-center">;
<<<<<<< HEAD
                          <span className="font-medium">{milestone && milestone.title}</span>;
                          <Badge variant="secondary" className="ml-2 flex items-center">;
                            <Sparkles className="w-3 h-3 mr-1" />;
<<<<<<< HEAD
=======
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
              </p>;
              <Button;
                on_click={handleAddToProject}
                disabled={!Object.values (selected_milestones).some (Boolean)}
              >;
                Add Selected to Project;
              </Button>;
            </div>;
            <Accordion type="multiple" className="w - full">;
              {generated_milestones.map ((milestone, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border p - 2 rounded - md mb - 2">;
                  <div className="flex items - center justify - between">;
                    <div className="flex items - center flex - 1">;
                      <input;
                        type="checkbox";
                        id={`milestone-${index}`}
                        checked={selected_milestones[index] || false}
                        on_change={() => toggleMilestoneSelection (index)}
                        className="mr - 2 w - 4 h - 4 rounded text - primary";
                      />;
                      <AccordionTrigger className="hover:no - underline flex - 1 text - left">;
                        <div className="flex items - center">;
                          <span className="font - medium">{milestone.title}</span>;
                          <Badge variant="secondary" className="ml - 2 flex items - center">;
                            <Sparkles className="w - 3 h - 3 mr - 1" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                          <span className="font-medium">{milestone.title}</span>;
                          <Badge variant="secondary" className="ml-2 flex items-center">;
                            <Sparkles className="w-3 h-3 mr-1" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}
                      <input
                        type="checkbox"
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] |false}
                        onChange={() => toggleMilestoneSelection(index)}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                            AI Suggested;
=======
                        onChange={() => toggleMilestoneSelection(index)}                            AI Suggested;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                        onChange={() => toggleMilestoneSelection(index)}                            AI Suggested;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                          </Badge>;
                        </div>;
                      </AccordionTrigger>;
                    </div>;

                      onClick={(e) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

                      onClick={(e) => {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        e.stopPropagation(),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                        handleAddSingleMilestone(milestone)
                    <Button;
                      variant="ghost";
                      size="sm";
                      onClick={(e) => {;
                        e.stopPropagation(),;
                        handleAddSingleMilestone(milestone),;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      }}
                      className="mr-2";
                    >;
                      <Plus className="h-4 w-4" />;
                    </Button>;
                  </div>;
                  <AccordionContent>;
                    <div className="pl-6 space-y-2">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </Accordion>;
          </CardContent>;
        </Card>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
  );
}

=======
=======
    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    <Button;
                      variant="ghost";
                      size="sm";
                      on_click={(e) => {
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
            </Accordion>;
          </CardContent>;
        </Card>;
      )}

    </div>;
  );
}

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
                      <input
                        type="checkbox"
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] |false}
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
                        e.stopPropagation();

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
