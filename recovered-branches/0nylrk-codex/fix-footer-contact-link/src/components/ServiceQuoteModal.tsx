<<<<<<< HEAD

<<<<<<< HEAD
import { useState  } from 'react';
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { useState } from 'react',
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
import { ProductListing } from "@/types/listings";
import { toast  } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface ServiceQuoteModalProps {

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
    description: ''
    email: ''
    budget: BUDGET_RANGES[0].value
    timeframe: TIMELINE_OPTIONS[0].value})
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
    description: '',
    email: '',
    budget: BUDGET_RANGES[0].value,
    timeframe: TIMELINE_OPTIONS[0].value}),;
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
    timeframe: TIMELINE_OPTIONS[0].value}),
  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true)
  },

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(),
    setIsSubmitting(true),

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    try {
      // Call Supabase function to process the quote;
      const { data, error } = await supabase.functions.invoke ('process - quote', {
        body: {
          service: service ? {
            endDate: endDate?.toISOString()}
        }
<<<<<<< HEAD
      });
      if (error) throw error;
      }),

      if (error) throw error,

      // Show success message
      toast({
        title: "Quote Request Submitted!"
        description: "We've sent your request to the service provider. They will contact you soon."})
      // Close the modal and reset form
      onOpenChange(false);
      setFormData({
        description: ''
        email: ''
        budget: BUDGET_RANGES[0].value
        timeframe: TIMELINE_OPTIONS[0].value})
      setStartDate(new Date());
      setEndDate(undefined);
        description: '',
        email: '',
        budget: BUDGET_RANGES[0].value,
        timeframe: TIMELINE_OPTIONS[0].value}),
      setStartDate(new Date()),
      setEndDate(undefined),
      setCurrentStep('details')
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast({
        title: "Error"
        description: "There was an error submitting your quote request. Please try again."
        variant: "destructive"})
=======
            id: service.id,
            title: service.title,
            category: service.category} : null,
          quote_details: {
            ...form_data,
            start_date: start_date?.toISOString (),
            end_date: end_date?.toISOString ()}
        }
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      });
      if (error) throw error;
    } finally {
      setIsSubmitting (false);
    }
  }
<<<<<<< HEAD
  },

  const nextStep = () => {
    if (currentStep === 'details') setCurrentStep('timeline');
    else if (currentStep === 'timeline') setCurrentStep('contact')
  }
  },

  const prevStep = () => {
    if (currentStep === 'timeline') setCurrentStep('details');
    else if (currentStep === 'contact') setCurrentStep('timeline')
  }
  },

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-white">
            Request Service Quote
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Service Details */}
          {currentStep === 'details' && (
            <div className="space-y-4">
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>
                <p className="text-white text-lg">{service?.title |"Custom Service"}</p>
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">Project Description</Label>


=======
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your project needs in detail..."
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white">Estimated Budget</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                >
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {BUDGET_RANGES.map((range) => (
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">
import { useState } from 'react',;
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Label } from "@/components/ui/label",;
import { Slider } from "@/components/ui/slider",;
import { Calendar } from "@/components/ui/calendar",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { format } from "date-fns",;
import { CalendarIcon } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { ProductListing } from "@/types/listings",;
import { toast } from '@/hooks/use-toast',;
import { supabase } from "@/integrations/supabase/client",;
interface ServiceQuoteModalProps {;
  open: boolean,;
  onOpenChange: (open: boolean) => void,;
  service: ProductListing | null;
}
;
const BUDGET_RANGES = [;
  { label: "Less than $5,000", value: "0-5000" },;
  { label: "$5,000 - $10,000", value: "5000-10000" },;
  { label: "$10,000 - $25,000", value: "10000-25000" },;
  { label: "$25,000 - $50,000", value: "25000-50000" },;
  { label: "$50,000+", value: "50000+" }],;
const TIMELINE_OPTIONS = [;
  { label: "Less than 1 month", value: "lt-1month" },;
  { label: "1-3 months", value: "1-3months" },;
  { label: "3-6 months", value: "3-6months" },;
  { label: "6+ months", value: "6+months" }],;
export function ServiceQuoteModal({ open, onOpenChange, service }: ServiceQuoteModalProps) {;
  const [formData, setFormData] = useState({;
    description: '',;
    email: '',;
    budget: BUDGET_RANGES[0].value,;
    timeframe: TIMELINE_OPTIONS[0].value}),;
  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),;
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({ ...prev, [name]: value }));
  },;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;
    try {;
      // Call Supabase function to process the quote;
      const { data, error } = await supabase.functions.invoke('process-quote', {;
        body: {;
          service: service ? {;
            id: service.id,;
            title: service.title,;
            category: service.category} : null,;
          quoteDetails: {;
            ...formData,;
            startDate: startDate?.toISOString(),;
            endDate: endDate?.toISOString()}
        }
      }),;
      if (error) throw error,;

      // Show success message;
      toast({;
        title: "Quote Request Submitted!",;
        description: "We've sent your request to the service provider. They will contact you soon."}),;

      // Close the modal and reset form;
      onOpenChange(false);
      setFormData({;
        description: '',;
        email: '',;
        budget: BUDGET_RANGES[0].value,;
        timeframe: TIMELINE_OPTIONS[0].value}),;
      setStartDate(new Date());
      setEndDate(undefined);
      setCurrentStep('details');
    } catch (error) {;
      console && console.error("Error submitting quote:", error);
      toast({;
        title: "Error",;
        description: "There was an error submitting your quote request. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {;
    if (currentStep === 'details') setCurrentStep('timeline');
    else if (currentStep === 'timeline') setCurrentStep('contact');
  };

  const prevStep = () => {;
    if (currentStep === 'timeline') setCurrentStep('details');
    else if (currentStep === 'contact') setCurrentStep('timeline');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">;
        <DialogHeader>;
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

              <div className="space-y-2">;
                <Label htmlFor="description" className="text-white">Project Description</Label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                <Textarea
                  id="description"
                  name="description"
                  value={formData && formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your project needs in detail..."
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none"
                  required
                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;
<<<<<<< HEAD

                    {BUDGET_RANGES.map((range) => (;
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                        {range.label}
                      </SelectItem>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                    {BUDGET_RANGES && BUDGET_RANGES.map((range) => (;
                      <SelectItem key={range && range.value} value={range && range.value} className="text-white hover:bg-zion-blue-light">;
                        {range && range.label}
                      </SelectItem>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    ))}
                  </SelectContent>;
                </Select>;
              </div>;
            </div>;
          )}
          {/* Step 2: Timeline */}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}
                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your timeline" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;
                    {TIMELINE_OPTIONS && TIMELINE_OPTIONS.map((option) => (;
                      <SelectItem key={option && option.value} value={option && option.value} className="text-white hover:bg-zion-blue-light">;
                        {option && option.label}
                      </SelectItem>;
                    ))}
                      <Button
                        variant={"outline"}
                        className={cn(
                          "justify-start text-left font-normal w-full"
                          "bg-zion-blue-dark border-zion-blue-light text-white"
                        )}>;
                        <CalendarIcon className="mr-2 h-4 w-4" />;
                        {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white"
<<<<<<< HEAD

                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;

                <div className="space-y-2">;
                  <Label className="text-white">Expected End Date</Label>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <Button
                        variant={"outline"}
                        className={cn(
                          "justify-start text-left font-normal w-full";

                          "justify-start text-left font-normal w-full",
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                          "bg-zion-blue-dark border-zion-blue-light text-white"
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
                  value={formData && formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email && email.com"
                  className="bg-zion-blue-dark border-zion-blue-light text-white"
                  required
<<<<<<< HEAD

                  )}
                  {endDate && (
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">End Date:</span>
                      <span className="text-white">{format(endDate, "PPP")}</span>
                    </div>
                  )}
<<<<<<< HEAD
                </div>
              </div>
            </div>
          )}
                </div>;
              </div>;
            </div>;
=======



=======
                />;
              </div>;

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">;
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>;
                <div className="space-y-2 text-sm">;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Service:</span>;
                    <span className="text-white">{service?.title || "Custom Service"}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Budget:</span>;
                    <span className="text-white">{BUDGET_RANGES && BUDGET_RANGES.find(b => b && b.value === formData && formData.budget)?.label}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Timeline:</span>;
                    <span className="text-white">{TIMELINE_OPTIONS && TIMELINE_OPTIONS.find(t => t && t.value === formData && formData.timeframe)?.label}</span>;
                  </div>;
                  {startDate && (;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">Start Date:</span>;
                      <span className="text-white">{format(startDate, "PPP")}</span>;
                    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  )}
                  {endDate && (;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">End Date:</span>;
                      <span className="text-white">{format(endDate, "PPP")}</span>;
                    </div>;
                  )}
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          )}

          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">
            {currentStep !== 'details' && (
=======
          )}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="border-zion-blue-light text-white hover:bg-zion-blue-light">;
                Previous;
              </Button>;
            )}
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>;
              )}
<<<<<<< HEAD
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            </div>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
=======
    </Dialog>);
}
<<<<<<< HEAD

=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
