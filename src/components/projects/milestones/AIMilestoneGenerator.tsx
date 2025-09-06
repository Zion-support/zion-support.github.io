import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,

export function AIMilestoneGenerator({
  scope,
  startDate,
  endDate,
  projectType,
  onAddMilestones,
  onAddMilestone,
}: AIMilestoneGeneratorProps) {
  const {
    generateMilestones,
    generatedMilestones,
    isGenerating,
    clearGeneratedMilestones,
  } = useMilestoneGenerator();
  const [selectedMilestones, setSelectedMilestones] = useState<
    Record<string, boolean>
  >({});

  const handleGenerateMilestones = async () => {
    if (!scope || !startDate || !projectType) {
      return;
    }

    const input: MilestoneInput = {
      scope,
      startDate,
      endDate,
      projectType,
    };

    await generateMilestones(input);
    // Initially select all milestones

  const toggleMilestoneSelection = (index: number,) => {
    setSelectedMilestones(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const formatDate = (dateString: string,) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-medium flex items-center'>
          <Sparkles className='w-5 h-5 mr-2 text-primary' />
          AI Milestone Generator
        </h3>
        <Button

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

              >
                Add Selected to Project
              </Button>
            </div>

                      <input
                        type='checkbox'
                        id={`milestone-${index}`}

                      />
                      <AccordionTrigger className='hover:no-underline flex-1 text-left'>
                        <div className='flex items-center'>
                          <span className='font-medium'>{milestone.title}</span>
                          <Badge
                            variant='secondary'
                            className='ml-2 flex items-center'
                          >
                            <Sparkles className='w-3 h-3 mr-1' />
                            AI Suggested
                          </Badge>
                        </div>
                      </AccordionTrigger>
                    </div>
                    <Button

                      }}
                      className='mr-2'
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
  );