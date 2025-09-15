
<<<<<<< HEAD
import React, { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Card, CardContent } from '@/components/ui/card',
=======
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
>>>>>>> origin/auto/autonomy-17186719616
import {
  Accordion,
  AccordionContent,
  AccordionItem,
<<<<<<< HEAD
  AccordionTrigger} from '@/components/ui/accordion',
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react'
import { format, parseISO } from 'date-fns',
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',
import { Badge } from '@/components/ui/badge',

interface AIMilestoneGeneratorProps {
  scope: string,
  startDate: string,
  endDate: string | null,
  projectType: string,
  onAddMilestones: (milestones: GeneratedMilestone[]) => void,
  onAddMilestone: (milestone: GeneratedMilestone) => void
=======
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react'
import { format, parseISO } from 'date-fns';
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator';
import { Badge } from '@/components/ui/badge';

interface AIMilestoneGeneratorProps {
  scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;
  onAddMilestone: (milestone: GeneratedMilestone) => void;
>>>>>>> origin/auto/autonomy-17186719616
}

export function AIMilestoneGenerator({
  scope,
  startDate,
  endDate,
  projectType,
  onAddMilestones,
  onAddMilestone
}: AIMilestoneGeneratorProps) {
<<<<<<< HEAD
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator(),
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string boolean>>({}),

  const handleGenerateMilestones = async () => {
    if (!scope || !startDate || !projectType) {
      return,
=======
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator();
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string, boolean>>({});

  const handleGenerateMilestones = async () => {
    if (!scope || !startDate || !projectType) {
      return;
>>>>>>> origin/auto/autonomy-17186719616
    }

    const input: MilestoneInput = {
      scope,
      startDate,
      endDate,
      projectType
<<<<<<< HEAD
    },

    await generateMilestones(input),
    // Initially select all milestones
    const initialSelection: Record<number boolean> = {},
    generatedMilestones.forEach((_, index: number) => {
      initialSelection[index] = true
    }),
    setSelectedMilestones(initialSelection),
  },
=======
    };

    await generateMilestones(input);
    // Initially select all milestones
    const initialSelection: Record<number, boolean> = {};
    generatedMilestones.forEach((_, index: number) => {
      initialSelection[index] = true;
    });
    setSelectedMilestones(initialSelection);
  };
>>>>>>> origin/auto/autonomy-17186719616

  const handleAddToProject = () => {
    const selectedMilestonesList = generatedMilestones.filter((_, index) => 
      selectedMilestones[index]
<<<<<<< HEAD
    ),
    
    onAddMilestones(selectedMilestonesList),
    clearGeneratedMilestones(),
    setSelectedMilestones({}),
  },
=======
    );
    
    onAddMilestones(selectedMilestonesList);
    clearGeneratedMilestones();
    setSelectedMilestones({});
  };
>>>>>>> origin/auto/autonomy-17186719616

  const toggleMilestoneSelection = (index: number) => {
    setSelectedMilestones(prev => ({
      ...prev,
      [index]: !prev[index]
<<<<<<< HEAD
    })),
  },

  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {
    onAddMilestone(milestone)
  },

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy'),
    } catch (error) {
      return dateString,
    }

  },

  return (



=======
    }));
  };

  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {
    onAddMilestone(milestone);
  };

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  return (
>>>>>>> origin/auto/autonomy-17186719616
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-primary" />
          AI Milestone Generator
        </h3>
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
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

<<<<<<< HEAD

=======
      {generatedMilestones.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">
                {generatedMilestones.length} milestones generated based on your project scope
              </p>
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone),
=======
                        e.stopPropagation();
                        handleAddSingleMilestone(milestone);
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
