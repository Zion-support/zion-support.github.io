
import { format } from &quot;date-fns&quot;;
import { Calendar } from &quot;@/components/ui/calendar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { CalendarIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from &quot;@/components/ui/popover&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { QuoteFormData } from &quot;@/types/quotes&quot;;

interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>When do you need this?</h3>
        
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex items-center space-x-4&quot;>
            <div 
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === &quot;fixed&quot; 
                  ? &quot;bg-zion-purple/20 border-zion-purple&quot; 
                  : &quot;bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50&quot;
              }`}
              onClick={() => updateFormData({ timeline: &quot;fixed&quot; })}
            >
              <h4 className=&quot;font-medium text-white&quot;>Fixed Dates</h4>
              <p className=&quot;text-sm text-zion-slate-light&quot;>I have specific start and end dates</p>
            </div>
            
            <div 
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === &quot;flexible&quot; 
                  ? &quot;bg-zion-purple/20 border-zion-purple&quot; 
                  : &quot;bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50&quot;
              }`}
              onClick={() => updateFormData({ timeline: &quot;flexible&quot; })}
            >
              <h4 className=&quot;font-medium text-white&quot;>Flexible Timeline</h4>
              <p className=&quot;text-sm text-zion-slate-light&quot;>I'm flexible on the timing</p>
            </div>
          </div>
          
          {formData.timeline === &quot;fixed&quot; && (
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4 mt-6&quot;>
              <div>
                <Label className=&quot;block mb-2 text-zion-slate-light&quot;>Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant=&quot;outline&quot;
                      className={cn(
                        &quot;w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark&quot;,
                        !formData.startDate && &quot;text-zion-slate-light&quot;
                      )}
                    >
                      <CalendarIcon className=&quot;mr-2 h-4 w-4&quot; />
                      {formData.startDate ? format(formData.startDate, &quot;PPP&quot;) : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className=&quot;w-auto p-0 bg-zion-blue-dark border border-zion-blue-light&quot; align=&quot;start&quot;>
                    <Calendar
                      mode=&quot;single&quot;
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
                      initialFocus
                      className=&quot;p-3 pointer-events-auto&quot;
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label className=&quot;block mb-2 text-zion-slate-light&quot;>End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant=&quot;outline&quot;
                      className={cn(
                        &quot;w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark&quot;,
                        !formData.endDate && &quot;text-zion-slate-light&quot;
                      )}
                    >
                      <CalendarIcon className=&quot;mr-2 h-4 w-4&quot; />
                      {formData.endDate ? format(formData.endDate, &quot;PPP&quot;) : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className=&quot;w-auto p-0 bg-zion-blue-dark border border-zion-blue-light&quot; align=&quot;start&quot;>
                    <Calendar
                      mode=&quot;single&quot;
                      selected={formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
                      initialFocus
                      className=&quot;p-3 pointer-events-auto&quot;
                      disabled={(date) => date < (formData.startDate || new Date())}
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
}
