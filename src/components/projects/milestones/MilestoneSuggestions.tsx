interface MilestoneSuggestionsProps {
  projectName: string;
  scopeSummary: string;
  startDate: Date; import React, { useState } from 'react'
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator'
import { Loader2, Sparkles, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
interface MilestoneSuggestionsProps {
              <Sparkles className='mr-2 h-4 w-4' />              <Sparkles className="mr-2 h-4 w-4" />
          )}
                        AI Suggested
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>

            <div className="space-y-3">

              {generatedMilestones.map((milestone, index) => (
                <div key={index} className="p-3 border rounded-lg bg-muted/10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium flex items-center">
                      {milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        AI Suggested
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>


                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}


              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">






                <Check className="h-4 w-4 mr-1 text-green-500" />
                These milestones will be added to your contract
              </div>
            </div>
          </CardContent>
        </Card>
      )}
