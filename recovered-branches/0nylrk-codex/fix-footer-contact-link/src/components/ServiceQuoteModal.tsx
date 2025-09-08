
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Label } from "@/components/ui/label",
import { Slider } from "@/components/ui/slider",
import { Calendar } from "@/components/ui/calendar",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { format } from "date-fns",
import { CalendarIcon } from "lucide-react",
import { cn } from "@/lib/utils",

  open: boolean
  onOpenChange: (open: boolean) => void
  service: ProductListing | null
}
const BUDGET_RANGES = [
  { label: "Less than $5,000", value: "0-5000" }
  { label: "$5,000 - $10,000", value: "5000-10000" }
  { label: "$10,000 - $25,000", value: "10000-25000" }
  { label: "$25,000 - $50,000", value: "25000-50000" }
  { label: "$50,000+", value: "50000+" }]
const TIMELINE_OPTIONS = [
  { label: "Less than 1 month", value: "lt-1month" }
  { label: "1-3 months", value: "1-3months" }
  { label: "3-6 months", value: "3-6months" }
  { label: "6+ months", value: "6+months" }]
export function ServiceQuoteModal({ open, onOpenChange, service }: ServiceQuoteModalProps) {
  const [formData, setFormData] = useState({

import {useState} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";
import {Calendar} from "@/components/ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {ProductListing} from "@/types/listings";
import {toast} from '@/hooks/use-toast';
import {supabase} from "@/integrations/supabase/client";
interface ServiceQuoteModalProps {;
  open: boolean,;
  onOpenChange: (open: boolean) => void,;
  service: ProductListing | null;

=======
interface ServiceQuoteModalProps {


import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",


import { ProductListing } from "@/types/listings";
import { toast  } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",

interface ServiceQuoteModalProps {

interface ServiceQuoteModalProps {
  // TODO: Implement

>>>>>>> origin/cursor/delete-old-data-records-6bba
}

                        {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus;
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white";
                      />;
const BUDGET_RANGES = [;"
  { label: "Less than $5,000", value: "0-5000" },;""
  { label: "$5,000 - $10,000", value: "5000-10000" },;""
  { label: "$10,000 - $25,000", value: "10000-25000" },;""
  { label: "$25,000 - $50,000", value: "25000-50000" },;"]"
  { label: "$50,000+", value: "50000+" }],;"
const TIMELINE_OPTIONS = [;"
  { label: "Less than 1 month", value: "lt-1month" },;""
  { label: "1-3 months", value: "1-3months" },;""
  { label: "3-6 months", value: "3-6months" },;"]"
  { label: "6+ months", value: "6+months" }],;"
export function ServiceQuoteModal(): any ({ open, onOpenChange, service }: ServiceQuoteModalProps) {;
  const [formData, setFormData] = useState({,
  description: '',;
    email: '',;
    budget: BUDGET_RANGES[0].value,;
    timeframe: TIMELINE_OPTIONS[0].value}),;    try {
      // Call Supabase function to process the quote;
      const { data, error } = await supabase.functions.invoke ('process - quote', {
        body: {
          service: service ? {      // Show success message
      toast({
        title: "Quote Request Submitted!"
        description: "We've sent your request to the service provider. They will contact you soon."})
      // Close the modal and reset form      toast({
        title: "Error"
        description: "There was an error submitting your quote request. Please try again."
        variant: "destructive"})
            id: service.id,
            title: service.title,
            category: service.category} : null,
          quote_details: {}
            ...form_data,
            start_date: start_date?.toISOString (),
            end_date: end_date?.toISOString ()}
        }
      });
;
      // Check condition
if (throw error) {
  $2
}
      // Show success message;
      toast ({
        title: "Quote Request Submitted!",
        description: "We've sent your request to the service provider. They will contact you soon."}),
      // Close the modal and reset form;
      onOpenChange (false);
      setFormData ({
        description: '',
        email: '',
        budget: BUDGET_RANGES[0].value,
        timeframe: TIMELINE_OPTIONS[0].value}),
      setStartDate (new Date ());
      setEndDate (undefined);
      setCurrentStep ('details');
    } catch (error) {
      console.error ("Error submitting quote:", error);
      toast ({
        title: "Error",
        description: "There was an error submitting your quote request. Please try again.",
        variant: "destructive"});
    } finally {
      setIsSubmitting (false);
    }

  },

  const nextStep = () => {
    if (currentStep === 'details') setCurrentStep('timeline');
    else if (currentStep === 'timeline') setCurrentStep('contact')

  },

  const prevStep = () => {
    if (currentStep === 'timeline') setCurrentStep('details');
    else if (currentStep === 'contact') setCurrentStep('timeline')

  },

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>"
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">
        <DialogHeader>"
          <DialogTitle className="text-2xl font-semibold text-white">
            Request Service Quote;
          </DialogTitle>
        </DialogHeader>"
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Service Details */}'
          {currentStep === 'details' && ("
            <div className="space-y-4">"
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">"
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>"
                <p className="text-white text-lg">{service?.title |"Custom Service"}</p>"
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">Project Description</Label>                <Textarea
                  id="description"

                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}"
                  placeholder="Describe your project needs in detail...""
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none"
                  required;
                />
              </div>"
              <div className="space-y-2">"
                <Label htmlFor="budget" className="text-white">Estimated Budget</Label>
                <Select;
                  value={formData.budget}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                >
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {BUDGET_RANGES.map((range) => (
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">
      // Show success message;
      toast({;
        title: "Quote Request Submitted!",,
  description: "We've sent your request to the service provider. They will contact you soon."}),;

      // Close the modal and reset form;
      onOpenChange(false);      setFormData({,
  description: '',;
        email: '',;
        budget: BUDGET_RANGES[0].value,;
        timeframe: TIMELINE_OPTIONS[0].value}),;
      setStartDate(new Date());
      setEndDate(undefined);
      setCurrentStep('details');
    } catch (error) {;
      console && console.error("Error submitting quote:", error);      toast({;
        title: "Error",,
  description: "There was an error submitting your quote request. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {;
    if (currentStep === 'details') setCurrentStep('timeline');
    else if (currentStep === 'timeline') setCurrentStep('contact')
};

  const prevStep = () => {;
    if (currentStep === 'timeline') setCurrentStep('details');
    else if (currentStep === 'contact') setCurrentStep('timeline')
};

  return (    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">;
        <DialogHeader>;"
          <DialogTitle className="text-2xl font-semibold text-white">;
            Request Service Quote;
          </DialogTitle>;
        </DialogHeader>;
        <form onSubmit={handleSubmit} className="space-y-6">;
          {/* Step 1: Service Details */}
          {currentStep === 'details' && (;
            <div className="space-y-4">;
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">;
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>;
                <p className="text-white text-lg">{service?.title || "Custom Service"}</p>;
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>;
              </div>;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <div className="space-y-2">;
                <Label htmlFor="description" className="text-white">Project Description</Label>;
                  id="description"

                  name="description"
                  value={formData && formData.description}
                  onChange={handleInputChange}"
                  placeholder="Describe your project needs in detail...""
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none"
                  required                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;                          "bg-zion-blue-dark border-zion-blue-light text-white"
                        )}>;
                        <CalendarIcon className="mr-2 h-4 w-4" />;
                        {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus;
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white";
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
              </div>;
            </div>;

          )}
          {/* Step 3: Contact */}                        selected={endDate}
                        onSelect={setEndDate}
          )}
          {/* Step 3: Contact */}
          {currentStep === 'contact' && (;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label htmlFor="email" className="text-white">Contact Email</Label>;
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {endDate && (              </div>;
            </div>;

=======              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">;
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>;
                <div className="space-y-2 text-sm">;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Service:</span>;

                    <span className="text-white">{service?.title || "Custom Service"}</span>;

                    <span className="text-zion-slate-light">Budget:</span>;
                    <span className="text-white">{BUDGET_RANGES && BUDGET_RANGES.find(b => b && b.value === formData && formData.budget)?.label}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Timeline:</span>;
                    <span className="text-white">{TIMELINE_OPTIONS && TIMELINE_OPTIONS.find(t => t && t.value === formData && formData.timeframe)?.label}</span>;                    <span className="text-white">{BUDGET_RANGES.find(b => b.value === formData.budget)?.label}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Timeline:</span>;
                    <span className="text-white">{TIMELINE_OPTIONS.find(t => t.value === formData.timeframe)?.label}</span>;
              </div>;
            </div>;

          )}
                <Button

                  type="submit"

                </Button>;
              )}
;

}
  }
;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="bg - zion - blue border - zion - blue - light text - white sm:max-w-[600px]">;
        <DialogHeader>;
          <DialogTitle className="text - 2xl font - semibold text-white">;
            Request Service Quote;
          </DialogTitle>;
        </DialogHeader>;
        <form on_submit={handle_submit} className="space-y-6">;
          {/* Step 1: Service Details */}
          {current_step === 'details' && (
            <div className="space-y-4">;
              <div className="p - 4 bg - zion - blue - dark rounded - md border border - zion - blue-light">;
                <h3 className="font - medium text - zion - cyan mb-2">Selected Service</h3>;
                <p className="text - white text-lg">{service?.title || "Custom Service"}</p>;
                <p className="text - zion - slate - light text - sm mt-1">{service?.category}</p>;
              </div>;
              <div className="space-y-2">;
                <Label html_for="description" className="text-white">Project Description</Label>;
                <Textarea;
                  id=\"description\";
                  name=\"description\";
                  value={form_data.description}
                  on_change={handleInputChange}
                  placeholder="Describe your project needs in detail...";
                  className="h - 32 bg - zion - blue - dark border - zion - blue - light text - white resize-none";
                  required;
                />;
              </div>;
              <div className="space-y-2">;
                <Label html_for="budget" className="text-white">Estimated Budget</Label>;
                <Select;
                  value={form_data.budget}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, budget: value }))}
                >;
                  <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text-white">;
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;
                  <SelectContent className="bg - zion - blue - dark border - zion - blue-light">;
                    {BUDGET_RANGES.map ((range) => (
                      <SelectItem key={range.value} value={range.value} className="text - white hover:bg - zion - blue-light">;
                        {range.label}

                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;
            </div>)}
          {/* Step 2: Timeline */}
          {current_step === 'timeline' && (
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label className="text-white">Project Timeline</Label>;
                <Select;
                  }
                  value={form_data.timeframe}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, "timeframe": value }))}
                >;
                  <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text-white">;
                    <SelectValue placeholder="Select your timeline" />;
                  </SelectTrigger>;
                  <SelectContent className="bg - zion - blue - dark border - zion - blue-light">;
                    {TIMELINE_OPTIONS.map ((option) => (
                      <SelectItem key={option.value} value={option.value} className="text - white hover:bg - zion - blue-light">;
                        {option.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;
              <div className="grid grid - cols - 2 gap-4">;
                <div className="space-y-2">;
                  <Label className="text-white">Expected Start Date</Label>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <Button;"
                        variant={"outline"}
                        className={cn ("
                          "justify - start text - left font - normal w - full";"
                          "bg - zion - blue - dark border - zion - blue - light text - white")}
                      >;
                        <CalendarIcon className="mr - 2 h - 4 w-4" />;
                        {start_date ? format (start_date, "PPP") : <span > Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue-light">;
                      <Calendar;
                        mode="single";
                        selected={start_date}
                        on_select={setStartDate}
                        initial_focus;
                        className="p - 3 pointer - events - auto bg - zion - blue - dark text-white";
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
                <div className="space-y-2">;
                  <Label className="text-white">Expected End Date</Label>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <Button;"
                        variant={"outline"}
                        className={cn ("
                          "justify - start text - left font - normal w - full";"
                          "bg - zion - blue - dark border - zion - blue - light text - white")}
                      >;
                        <CalendarIcon className="mr - 2 h - 4 w-4" />;
                        {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue-light">;
                      <Calendar;
                        mode="single";
                        selected={end_date}
                        on_select={setEndDate}
                        disabled={(date) => !start_date || date < start_date}
                        initial_focus;
                        className="p - 3 pointer - events - auto bg - zion - blue - dark text-white";
                      />;

            </div>)}"
            <div className="space - y-4">;"
</div>"
              <div className="space - y-2">;"
</div>"
                <Label className="text - white">Project Timeline</Label>;"
                <Select;
                  value={form_data.timeframe}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, timeframe: value }))}
</Select>"
                  <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white">;"
</SelectTrigger>"
                    <SelectValue placeholder="Select your timeline" />;"
</SelectValue>
                  </SelectTrigger>;"
                  <SelectContent className="bg - zion - blue - dark border - zion - blue - light">;"
</SelectContent>"
                      <SelectItem key={option.value} value={option.value} className="text - white hover:bg - zion - blue - light">;"
</SelectItem>
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;"
              <div className="grid grid - cols - 2 gap - 4">;"
</div>"
                <div className="space - y-2">;"
</div>"
                  <Label className="text - white">Expected Start Date</Label>;"
                  <Popover>;
</Popover>
                    <PopoverTrigger as_child>;
</PopoverTrigger>
                      <Button;"
                        variant={"outline"}"
                        className={cn ("
                          "justify - start text - left font - normal w - full";")"
                          "bg - zion - blue - dark border - zion - blue - light text - white")}"
                      >;
</Button>"
                        <CalendarIcon className="mr - 2 h - 4 w - 4" />;"
</CalendarIcon>"
                        {start_date ? format (start_date, "PPP") : <span > Pick a date</span>}"
                      </Button>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light">;"
</PopoverContent>
                      <Calendar;"
                        mode="single";"
                        selected={start_date}
                        on_select={setStartDate}
                        initial_focus;"
                        className="p - 3 pointer - events - auto bg - zion - blue - dark text - white";"

                      />;
</Calendar>
                    </PopoverContent>;
                  </Popover>;

                </div>;"
                <div className="space - y-2">;"
</div>"
                  <Label className="text - white">Expected End Date</Label>;"
                  <Popover>;
</Popover>
                    <PopoverTrigger as_child>;
</PopoverTrigger>
                      <Button;"
                        variant={"outline"}"
                        className={cn ("
                          "justify - start text - left font - normal w - full";")"
                          "bg - zion - blue - dark border - zion - blue - light text - white")}"
                      >;
</Button>"
                        <CalendarIcon className="mr - 2 h - 4 w - 4" />;"
</CalendarIcon>"
                        {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}"
                      </Button>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light">;"
</PopoverContent>
                      <Calendar;"
                        mode="single";"
                        selected={end_date}
                        on_select={setEndDate}
                        disabled={(date) => !start_date || date < start_date}
</Calendar>


=======
              </div>;

                        selected={end_date}
                        on_select={setEndDate}
                        disabled={(date) => !start_date || date < start_date}
                        initial_focus;

                      />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </PopoverContent>;
                  </Popover>;
                </div>;
              </div>;
            </div>)}
          {/* Step 3: Contact */}
          {current_step === 'contact' && (
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label html_for="email" className="text-white">Contact Email</Label>;
                <Input;
                  id="email";
                  name="email";
                  type="email";
                  value={form_data.email}
                  on_change={handleInputChange}
                  placeholder="your@email.com";
                  className="bg - zion - blue - dark border - zion - blue - light text-white";
                  required;
                />;
              </div>;
              <div className="bg - zion - blue - dark border border - zion - blue - light rounded - md p-4">;
                <h3 className="font - medium text - zion - cyan mb-2">Quote Summary</h3>;
                <div className="space - y-2 text-sm">;
                  <div className="flex justify-between">;
                    <span className="text - zion - slate-light">Service:</span>;
                    <span className="text-white">{service?.title || "Custom Service"}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text - zion - slate-light">Budget:</span>;
                    <span className="text-white">{BUDGET_RANGES.find (boolean => b.value === form_data.budget)?.label}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text - zion - slate-light">Timeline:</span>;
                    <span className="text-white">{TIMELINE_OPTIONS.find (t => t.value === form_data.timeframe)?.label}</span>;
                  </div>;
                  {start_date && (
                    <div className="flex justify-between">;
                      <span className="text - zion - slate-light">Start Date:</span>;
                      <span className="text-white">{format (start_date, "PPP")}</span>;
                    </div>)}
                  {end_date && (
                    <div className="flex justify-between">;
                      <span className="text - zion - slate-light">End Date:</span>;
                      <span className="text-white">{format (end_date, "PPP")}</span>;
                    </div>)}
                </div>;
              </div>;
            </div>)}
          <DialogFooter className="flex - col sm:flex - row sm:justify - between sm:space-x-2">;
            {current_step !== 'details' && (
              <Button;
                type="button";
                variant="outline";
                on_click={prev_step}
                className="border - zion - blue - light text - white hover:bg - zion - blue-light";
              >;
                Previous;
              </Button>)}
            <div className={cn ("flex gap - 2", current_step === 'details' && "ml - auto")}>;
              <Button;
                type="button";
                variant="outline";
                on_click={() => onOpenChange (false)}
                className="border - zion - blue - light text - white hover:bg - zion - blue-light";
              >;
                Cancel;
              </Button>;
              {current_step !== 'contact' ? ('
                <Button;
                  type="button";
                  on_click={next_step}
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion-purple";
                >;
                  Next;
                </Button>) : (
                <Button;
                  type="submit";
                  disabled={is_submitting}
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion-purple";
                >;
                  {is_submitting ? "Submitting..." : "Submit Request"}
                </Button>)}