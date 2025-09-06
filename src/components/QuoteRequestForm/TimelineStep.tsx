import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,;
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { QuoteFormData } from '@/types/quotes';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
=======
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { QuoteFormData } from "@/types/quotes";
interface TimelineStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>,) => void
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-xl font-semibold text-white mb-4'>
          When do you need this?
        </h3>

        <div className='space-y-4'>
          <div className='flex items-center space-x-4'>
            <div
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === 'fixed'
                  ? 'bg-zion-purple/20 border-zion-purple'
                  : 'bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50'
              }`}
<<<<<<< HEAD
              onClick={() => updateFormData({ timeline: 'fixed' })}
=======
              onClick={(,) => updateFormData({ timeline: "fixed" })}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
            >
              <h4 className='font-medium text-white'>Fixed Dates</h4>
              <p className='text-sm text-zion-slate-light'>
                I have specific start and end dates
              </p>
            </div>

            <div
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === 'flexible'
                  ? 'bg-zion-purple/20 border-zion-purple'
                  : 'bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50'
              }`}
              onClick={() => updateFormData({ timeline: 'flexible' })}
            >
              <h4 className='font-medium text-white'>Flexible Timeline</h4>
              <p className='text-sm text-zion-slate-light'>
                I'm flexible on the timing
              </p>
            </div>
          </div>

          {formData.timeline === 'fixed' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
              <div>
                <Label className='block mb-2 text-zion-slate-light'>
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
<<<<<<< HEAD
                      variant='outline'
                      className={cn(
                        'w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark',
                        !formData.startDate && 'text-zion-slate-light'
                      )}
=======
                      variant="outline"
                      className = {cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.startDate && "text-zion-slate-light"
                      ),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                    >
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {formData.startDate ? (
                        format(formData.startDate, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className='w-auto p-0 bg-zion-blue-dark border border-zion-blue-light'
                    align='start'
                  >
                    <Calendar
<<<<<<< HEAD
                      mode='single'
                      selected={formData.startDate}
                      onSelect={date => updateFormData({ startDate: date })}
=======
                      mode="single"
                      selected = {formData.startDate,}
                      onSelect={(date,) => updateFormData({ startDate: date })}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                      initialFocus
                      className='p-3 pointer-events-auto'
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className='block mb-2 text-zion-slate-light'>
                  End Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
<<<<<<< HEAD
                      variant='outline'
                      className={cn(
                        'w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark',
                        !formData.endDate && 'text-zion-slate-light'
                      )}
=======
                      variant="outline"
                      className = {cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.endDate && "text-zion-slate-light"
                      ),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                    >
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {formData.endDate ? (
                        format(formData.endDate, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className='w-auto p-0 bg-zion-blue-dark border border-zion-blue-light'
                    align='start'
                  >
                    <Calendar
<<<<<<< HEAD
                      mode='single'
                      selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus
                      className='p-3 pointer-events-auto'
                      disabled={date =>
                        date < (formData.startDate || new Date())
                      }
=======
                      mode="single"
                      selected = {formData.endDate,}
                      onSelect={(date,) => updateFormData({ endDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      disabled = {(date,) => date < (formData.startDate || new Date()),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
