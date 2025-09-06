import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { cn } from "@/lib/utils";
import { QuoteFormData } from "@/types/quotes";
import {
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { QuoteFormData } from '@/types/quotes'
interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (
    <div className;
                        !formData.endDate && "text-zion-slate-light"
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
                      initialFocus
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
  );
