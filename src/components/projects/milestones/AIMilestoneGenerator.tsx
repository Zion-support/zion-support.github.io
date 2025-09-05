
<<<<<<< HEAD
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
    const initialSelection:Record<number boolean> = {},;
    generatedMilestones.forEach((_, index:number) => {;
      initialSelection[index] = true;
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
    <div className="space-y-4">;
      <div className="flex items-center justify-between">;
        <h3 className="text-lg font-medium flex items-center">;
          <Sparkles className="w-5 h-5 mr-2 text-primary" />;
          AI Milestone Generator;
        </h3>;
        <Button;
          variant="outline";
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
        >;
          {isGenerating ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating...;
            </>;
          ) :(;
            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Milestones;
            </>;
          )}
        </Button>;
      </div>;
;
      {generatedMilestones.length > 0 && (;
        <Card>;
          <CardContent className="pt-6">;
            <div className="flex justify-between items-center mb-4">;
              <p className="text-sm text-muted-foreground">;
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
                </AccordionItem>;
=======
import React, { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Card, CardContent } from '@/components/ui/card',
import {
  Accordion,
  AccordionContent,
  AccordionItem,
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
}

export function AIMilestoneGenerator({
  scope,
  startDate,
  endDate,
  projectType,
  onAddMilestones,
  onAddMilestone
}: AIMilestoneGeneratorProps) {
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator(),
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string boolean>>({}),

  const handleGenerateMilestones = async () => {
    if (!scope || !startDate || !projectType) {
      return
    }

    const input: MilestoneInput = {
      scope,
      startDate,
      endDate,
      projectType
    },
    await generateMilestones(input),
    // Initially select all milestones,
const initialSelection: Record<number boolean> = {},
    generatedMilestones.forEach((_, index: number) => {
      initialSelection[index] = true
    }),
    setSelectedMilestones(initialSelection)
  },
  const handleAddToProject = () => {const selectedMilestonesList = generatedMilestones.filter(_(_, index) => 
      selectedMilestones[index]
    ),
    
    onAddMilestones(selectedMilestonesList),
    clearGeneratedMilestones(),
    setSelectedMilestones({})
  },

  const toggleMilestoneSelection = (index: number) => {
    setSelectedMilestones(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  },

  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {
    onAddMilestone(milestone)
  },

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
    }
  },
  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;text-lg font-medium flex items-center&quot;>
          <Sparkles className=&quot;w-5 h-5 mr-2 text-primary&quot; />
          AI Milestone Generator
        </h3>
        <Button,
variant=&quot;outline&quot;
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}        >
          {isGenerating ? (
            <>
              <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className=&quot;mr-2 h-4 w-4&quot; />
              Generate Milestones
            </>
          )}
        </Button>
      </div>

      {generatedMilestones.length > 0 && (
        <Card>
          <CardContent className=&quot;pt-6&quot;>
            <div className=&quot;flex justify-between items-center mb-4&quot;>
              <p className=&quot;text-sm text-muted-foreground&quot;>
                {generatedMilestones.length} milestones generated based on your project scope
              </p>
              <Button,
onClick={handleAddToProject}
                disabled={_!Object.values(selectedMilestones).some(Boolean)}
              >
                Add Selected to Project
              </Button>
            </div>

            <Accordion type=&quot;multiple&quot; className=&quot;w-full&quot;>
              {generatedMilestones.map((milestone, index) => (
                <AccordionItem value={`item-${index}`} key={index} className=&quot;border p-2 rounded-md mb-2&quot;>
                  <div className=&quot;flex items-center justify-between&quot;>
                    <div className=&quot;flex items-center flex-1&quot;>
                      <input,
type=&quot;checkbox&quot;
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}
                        className=&quot;mr-2 w-4 h-4 rounded text-primary&quot;
                      />
                      <AccordionTrigger className=&quot;hover:no-underline flex-1 text-left&quot;>
                        <div className=&quot;flex items-center&quot;>
                          <span className=&quot;font-medium&quot;>{milestone.title}</span>
                          <Badge variant=&quot;secondary&quot; className=&quot;ml-2 flex items-center&quot;>
                            <Sparkles className=&quot;w-3 h-3 mr-1&quot; />                            AI Suggested
                          </Badge>
                        </div>
                      </AccordionTrigger>
                    </div>
                    <Button,
variant=&quot;ghost&quot;
                      size=&quot;sm&quot;
                      onClick={(e) => {
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }}
                      className=&quot;mr-2&quot;                    >
                      <Plus className=&quot;h-4 w-4&quot; />
                    </Button>
                  </div>
                  <AccordionContent>
                    <div className=&quot;pl-6 space-y-2&quot;>
                      <p className=&quot;text-sm&quot;>{milestone.description}</p>
                      <div className=&quot;flex items-center text-sm text-muted-foreground&quot;>
                        <Calendar className=&quot;w-4 h-4 mr-1&quot; />
                        Due: {formatDate(milestone.dueDate)}
                      </div>
                      <div className=&quot;text-sm text-muted-foreground&quot;>
                        Estimated effort: {milestone.estimatedHours} hours                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </Accordion>;
          </CardContent>;
        </Card>;
      )}
<<<<<<< HEAD
    </div>;
  ),;
=======
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
