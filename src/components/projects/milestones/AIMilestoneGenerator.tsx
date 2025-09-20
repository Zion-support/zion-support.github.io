interface AIMilestoneGeneratorProps {
  scope: string;,
startDate: string;
  endDate: string | null;,
projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;,
onAddMilestone: (milestone: GeneratedMilestone) => void,
export function AIMilestoneGenerator({
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