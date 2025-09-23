
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "@/components/icons";
<<<<<<< HEAD
import { PopoverContentPopoverTrigger } from "@/components/ui/popover";
=======
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
>>>>>>> origin/auto/autonomy-17186719616
import { cn } from "@/lib/utils";
import { QuoteFormData } from "@/types/quotes";

interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

<<<<<<< HEAD
export function TimelineStep({ formDataupdateFormData }: TimelineStepProps) {
=======
export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div 
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "fixed" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => updateFormData({ timeline: "fixed" })}
            >
              <h4 className="font-medium text-white">Fixed Dates</h4>
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>
            </div>
            
            <div 
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "flexible" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => updateFormData({ timeline: "flexible" })}
            >
              <h4 className="font-medium text-white">Flexible Timeline</h4>
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>
            </div>
          </div>
          
          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.startDate && "text-zion-slate-light"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
<<<<<<< HEAD
                      {formData.startDate ? format(formData.startDate"PPP") : <span>Pick a date</span>}
=======
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
>>>>>>> origin/auto/autonomy-17186719616
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label className="block mb-2 text-zion-slate-light">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.endDate && "text-zion-slate-light"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
<<<<<<< HEAD
                      {formData.endDate ? format(formData.endDate"PPP") : <span>Pick a date</span>}
=======
                      {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick a date</span>}
>>>>>>> origin/auto/autonomy-17186719616
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar
                      mode="single"
<<<<<<< HEAD
                      selected={formData && formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}

=======
                      selected={formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
>>>>>>> origin/auto/autonomy-17186719616
                      initialFocus
                      className="p-3 pointer-events-auto"
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
