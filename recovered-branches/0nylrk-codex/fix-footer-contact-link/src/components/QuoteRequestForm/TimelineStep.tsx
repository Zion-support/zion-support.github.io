
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { format } from "date-fns",
import { Calendar } from "@/components/ui/calendar",
import { Button } from "@/components/ui/button",
import { Label } from "@/components/ui/label",
import { CalendarIcon } from "@/components/icons",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { cn } from "@/lib/utils",
import { QuoteFormData } from "@/types/quotes",
=======
import { useState } from &quot;react&quot;;
import { format } from &quot;date-fns&quot;;
import { Calendar } from &quot;@/components/ui/calendar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { CalendarIcon } from &quot;@/components/icons&quot;;
import { Popover, PopoverContent, PopoverTrigger } from &quot;@/components/ui/popover&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { QuoteFormData } from &quot;@/types/quotes&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TimelineStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (
    <div className=&quot;space-y-6&quot;>
=======

interface TimelineStepProps {_formData: QuoteFormData;
  updateFormData: (_data: Partial<QuoteFormData>) => void;}

export function TimelineStep(_{_formData, _updateFormData}: TimelineStepProps) {_return (_<div className="space-y-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <div>
        <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>When do you need this?</h3>
        
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex items-center space-x-4&quot;>
            <div 
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
<<<<<<< HEAD
                formData.timeline === &quot;fixed&quot; 
                  ? &quot;bg-zion-purple/20 border-zion-purple&quot; 
                  : &quot;bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50&quot;
              }`}
              onClick={() => updateFormData({ timeline: &quot;fixed&quot; })}
=======
                formData.timeline === "fixed" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"}`}
              onClick={_() => updateFormData({ timeline: "fixed"})}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h4 className=&quot;font-medium text-white&quot;>Fixed Dates</h4>
              <p className=&quot;text-sm text-zion-slate-light&quot;>I have specific start and end dates</p>
            </div>
            
            <div 
<<<<<<< HEAD
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === &quot;flexible&quot; 
                  ? &quot;bg-zion-purple/20 border-zion-purple&quot; 
                  : &quot;bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50&quot;
              }`}
              onClick={() => updateFormData({ timeline: &quot;flexible&quot; })}
=======
              className={_`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "flexible" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"}`}
              onClick={_() => updateFormData({ timeline: "flexible"})}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h4 className=&quot;font-medium text-white&quot;>Flexible Timeline</h4>
              <p className=&quot;text-sm text-zion-slate-light&quot;>I'm flexible on the timing</p>
            </div>
          </div>
          
<<<<<<< HEAD
          {formData.timeline === &quot;fixed&quot; && (
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4 mt-6&quot;>
=======
          {_formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <div>
                <Label className=&quot;block mb-2 text-zion-slate-light&quot;>Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant=&quot;outline&quot;
                      className={cn(
<<<<<<< HEAD
                        &quot;w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark&quot;,
                        !formData.startDate && &quot;text-zion-slate-light&quot;
                      )}
                    >
                      <CalendarIcon className=&quot;mr-2 h-4 w-4&quot; />
                      {formData.startDate ? format(formData.startDate, &quot;PPP&quot;) : <span>Pick a date</span>}
=======
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark", _!formData.startDate && "text-zion-slate-light"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {_formData.startDate ? format(formData.startDate, _"PPP") : <span>Pick a date</span>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className=&quot;w-auto p-0 bg-zion-blue-dark border border-zion-blue-light&quot; align=&quot;start&quot;>
                    <Calendar
<<<<<<< HEAD
                      mode=&quot;single&quot;
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
=======
                      mode="single"
                      selected={_formData.startDate}
                      onSelect={_(_date) => updateFormData({ startDate: date})}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
                      variant=&quot;outline&quot;
                      className={cn(
                        &quot;w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark&quot;,
                        !formData.endDate && &quot;text-zion-slate-light&quot;
                      )}
                    >
                      <CalendarIcon className=&quot;mr-2 h-4 w-4&quot; />
                      {formData.endDate ? format(formData.endDate, &quot;PPP&quot;) : <span>Pick a date</span>}
=======
                      variant="outline"
                      className={_cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark", _!formData.endDate && "text-zion-slate-light"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {_formData.endDate ? format(formData.endDate, _"PPP") : <span>Pick a date</span>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className=&quot;w-auto p-0 bg-zion-blue-dark border border-zion-blue-light&quot; align=&quot;start&quot;>
                    <Calendar
<<<<<<< HEAD
                      mode=&quot;single&quot;
                      selected={formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
                      initialFocus
                      className=&quot;p-3 pointer-events-auto&quot;
                      disabled={(date) => date < (formData.startDate || new Date())}
=======
                      mode="single"
                      selected={_formData.endDate}
                      onSelect={_(_date) => updateFormData({ endDate: date})}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      disabled={_(_date) => date < (formData.startDate || new Date())}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
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
