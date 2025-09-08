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

export function AIMilestoneGenerator(): any ({;

export function AIMilestoneGenerator({;

export function AIMilestoneGenerator({;
import React, { useState } from 'react';  },

  return (    }
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
                        onChange={() => toggleMilestoneSelection(index)}                            AI Suggested;
                          </Badge>;
                        </div>;
                      </AccordionTrigger>;
                    </div>;

                      onClick={(e) => {
                        e.stopPropagation(),


                        handleAddSingleMilestone(milestone)
                    <Button;
                      variant="ghost";
                      size="sm";
                      onClick={(e) => {;
                        e.stopPropagation(),;
                        handleAddSingleMilestone(milestone),;
