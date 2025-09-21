import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { CalendarIcon } from 'lucide-react'
interface TimelineStepProps {
  formData: QuoteFormData;,
updateFormData: (data: Partial<QuoteFormData>) => void,
export function TimelineStep({ formData updateFormData }: TimelineStepProps) {
  return (
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
className='w-auto p-0 bg-zion-blue-dark border border-zion-blue-light'
                    align='start'
                  >
                    <Calendar
mode='single'
                      selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus,
className='p-3 pointer-events-auto'
                      disabled={date =>
                        date < (formData.startDate |new Date())
                      }                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}