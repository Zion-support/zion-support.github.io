<<<<<<< HEAD


=======


}
const BUDGET_RANGES = [;
  { "label": "Less than $5,000", "value": "0-5000" }"
  { "label": "$5,000 - $10,000", "value": "5000-10000" }"
  { "label": "$10,000 - $25,000", "value": "10000-25000" }"
  { "label": "$25,000 - $50,000", "value": "25000-50000" }"
  { "label": "$50,000+", "value": "50000+" }]"
const TIMELINE_OPTIONS = [;
  { "label": "Less than 1 month", "value": "lt-1month" }"
  { "label": "1-3 months", "value": "1-3months" }"
  { "label": "3-6 months", "value": "3-6months" }"
  { "label": "6+ months", "value": "6+months" }]"
export function ServiceQuoteModal() {
  }
  const [formData, setFormData] = useState({
}

if (throw error) {
  $2
}
      // Show success message;
      toast ({

    } finally {
      }
      setIsSubmitting (false);
    }

  },

  const nextStep = () => {

    }
    if (currentStep === 'details') setCurrentStep('timeline');'
    else if (currentStep === 'timeline') setCurrentStep('contact')'
  },


      setIsSubmitting(false);
    }
  }

import {useState} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/components/ui/dialog";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Textarea} from "@/components/ui/textarea";"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";"
import {Label} from "@/components/ui/label";"
import {Slider} from "@/components/ui/slider";"
import {Calendar} from "@/components/ui/calendar";"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";"
import {format} from "date-fns";"
import {CalendarIcon} from "lucide-react";"
import {cn} from "@/lib/utils";"
import {ProductListing} from "@/types/listings";'
import {toast} from '@/hooks/use-toast';"
import {supabase} from "@/integrations/supabase/client";

import { useState } from 'react',


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useState } from 'react',
import { useState } from 'react',

import { useState } from 'react',
import { useState } from 'react',
import { useState } from 'react',


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",

<<<<<<< HEAD



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

  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);'
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
'
import {useState} from 'react';'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components / ui / dialog';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Textarea } from '@/components / ui / textarea';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';'
import { Label } from '@/components / ui / label';'
import { Slider } from '@/components / ui / slider';'
import { Calendar } from '@/components / ui / calendar';'
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';'
import { format } from './date - fns';'
import { CalendarIcon } from './lucide-react';'
import { cn } from '@/lib / utils';'
import { ProductListing } from '@/types / listings';'
import {toast} from '@/hooks / use - toast';'
import { supabase } from '@/integrations / supabase / client';
interface ServiceQuoteModalProps {}

    timeframe: TIMELINE_OPTIONS[0].value}),;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
</Date>
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
</Date>'
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');'
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD


=======

'
import {useState} from 'react';''
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components / ui / dialog';''
import { Button } from '@/components / ui / button';''
import { Input } from '@/components / ui / input';''
import { Textarea } from '@/components / ui / textarea';''
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';''
import { Label } from '@/components / ui / label';''
import { Slider } from '@/components / ui / slider';''
import { Calendar } from '@/components / ui / calendar';''
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';''
import { format } from './date - fns';''
import { CalendarIcon } from './lucide-react';''
import { cn } from '@/lib / utils';''
import { ProductListing } from '@/types / listings';''
import {toast} from '@/hooks / use - toast';''
import { supabase } from '@/integrations / supabase / client';'

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ServiceQuoteModalProps {

  open: boolean,
  onOpenChange: (open: boolean) => void,
  service: ProductListing | null;
}

export /**
 * ServiceQuoteModal - Function description;
 */
function ServiceQuoteModal() {

    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
  }
;


<<<<<<< HEAD
    description: '',

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    email: '',
    budget: BUDGET_RANGES[0].value,
    timeframe: TIMELINE_OPTIONS[0].value}),;
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());


<<<<<<< HEAD
    description: '',
    email: '',
    budget: BUDGET_RANGES[0].value,
    timeframe: TIMELINE_OPTIONS[0].value}),;
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
    timeframe: TIMELINE_OPTIONS[0].value}),
  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),
<<<<<<< HEAD

  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),
  const [isSubmitting, setIsSubmitting] = useState(false),


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {}
    e.preventDefault(),
    setIsSubmitting(true),


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {
      // Call Supabase function to process the quote;
      const { data, error } = await supabase.functions.invoke ('process - quote', {
        body: {
          service: service ? {

<<<<<<< HEAD


=======
    try {}
      // Call Supabase function to process the quote;'
      const { data, error } = await supabase.functions.invoke ('process - quote', {}
        body: {}
          service: service ? {}

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e && e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleSubmit = async (e: React && React.FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();
    setIsSubmitting(true),;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {;
      // Call Supabase function to process the quote;'
      const { data, error } = await supabase && supabase.functions.invoke('process-quote', {;
        body: {;
          service: service ? {;
            id: service && service.id,;
            title: service && service.title,;
            category: service && service.category} : null,;
          quoteDetails: {;
            ...formData,;
            startDate: startDate?.toISOString(),;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }),

      if (error) throw error,

<<<<<<< HEAD
=======

      // Show success message;
      toast({"
        title: "Quote Request Submitted!"'"
        description: "We've sent your request to the service provider. They will contact you soon."})
>>>>>>> origin/cursor/delete-old-data-records-6bba


        description: '',

        email: '',
        budget: BUDGET_RANGES[0].value,
        timeframe: TIMELINE_OPTIONS[0].value}),
      setStartDate(new Date()),
      setEndDate(undefined),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      onOpenChange(false),
      setFormData({'
      setCurrentStep('details')
<<<<<<< HEAD

=======

    } catch (error) {"
      console.error("Error submitting quote:", error),

      toast({"
        title: "Error""
        description: "There was an error submitting your quote request. Please try again.""
        variant: "destructive"})

  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
</Date>'
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),'
  const [isSubmitting, setIsSubmitting] = useState(false),


>>>>>>> origin/cursor/delete-old-data-records-6bba
            id: service.id,
            title: service.title,
            category: service.category} : null,
          quote_details: {}
            ...form_data,
            start_date: start_date?.toISOString (),
            end_date: end_date?.toISOString ()}
        }
      });
<<<<<<< HEAD

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




=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  const nextStep = () => {
    if (currentStep === 'details') setCurrentStep('timeline'),
    else if (currentStep === 'timeline') setCurrentStep('contact')

  const prevStep = () => {
    if (currentStep === 'timeline') setCurrentStep('details'),
    else if (currentStep === 'contact') setCurrentStep('timeline')

<<<<<<< HEAD


  },




=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

                <Label htmlFor="description" className="text-white">Project Description</Label>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Textarea

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
<<<<<<< HEAD


                >
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {BUDGET_RANGES.map((range) => (
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Show success message;
      toast({;
        title: "Quote Request Submitted!",
        description: "We've sent your request to the service provider. They will contact you soon."}),;
<<<<<<< HEAD


      // Close the modal and reset form;
      onOpenChange(false);

=======

      // Close the modal and reset form;
      onOpenChange(false);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setFormData({;
        description: '',;
        email: '',;
        budget: BUDGET_RANGES[0].value,;
        timeframe: TIMELINE_OPTIONS[0].value}),;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setStartDate(new Date());
      setEndDate(undefined);
      setCurrentStep('details');
    } catch (error) {;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }


      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">;
        <DialogHeader>;"
          <DialogTitle className="text-2xl font-semibold text-white">;
            Request Service Quote;
          </DialogTitle>;
        </DialogHeader>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <form onSubmit={handleSubmit} className="space-y-6">;
          {/* Step 1: Service Details */}
          {currentStep === 'details' && (;
            <div className="space-y-4">;
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">;
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>;
                <p className="text-white text-lg">{service?.title || "Custom Service"}</p>;
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>;
              </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <div className="space-y-2">;
                <Label htmlFor="description" className="text-white">Project Description</Label>;
                <Textarea
                  id="description"

                  name="description"
                  value={formData && formData.description}
                  onChange={handleInputChange}"
                  placeholder="Describe your project needs in detail...""
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none"


                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;

                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;
<<<<<<< HEAD


                        {range.label}
                      </SelectItem>

                  </SelectContent>;
                </Select>;
              </div>;
            </div>;
          )}

          {/* Step 2: Timeline */}


          {currentStep === 'timeline' && (;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label className="text-white">Project Timeline</Label>;

                <Select
                  value={formData && formData.timeframe}

                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}

                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your timeline" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;

                    {TIMELINE_OPTIONS && TIMELINE_OPTIONS.map((option) => (;
                      <SelectItem key={option && option.value} value={option && option.value} className="text-white hover:bg-zion-blue-light">;
                        {option && option.label}

=======

                        {range.label}
                      </SelectItem>
                    {BUDGET_RANGES && BUDGET_RANGES.map((range) => (;"

                        {range.label}
                      </SelectItem>
                    {BUDGET_RANGES && BUDGET_RANGES.map((range) => (;

                      <SelectItem key={range && range.value} value={range && range.value} className="text-white hover:bg-zion-blue-light">;
                        {range && range.label}

>>>>>>> origin/cursor/delete-old-data-records-6bba
                      </SelectItem>;
                    ))}

                  </SelectContent>;
                </Select>;
              </div>;
            </div>;
          )}

                      <SelectItem key={option && option.value} value={option && option.value} className="text-white hover:bg-zion-blue-light">;
                        {option && option.label}
                      </SelectItem>;
                    ))}

<<<<<<< HEAD


              <div className="grid grid-cols-2 gap-4">;
                <div className="space-y-2">;
                  <Label className="text-white">Expected Start Date</Label>;

                  <Popover>;
</Popover>
                    <PopoverTrigger asChild>;


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <Button
                        variant={"outline"}
                        className={cn(
                          "justify-start text-left font-normal w-full"

<<<<<<< HEAD


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
          {currentStep === 'contact' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Contact Email</Label>

=======

                          "justify-start text-left font-normal w-full",

                          "bg-zion-blue-dark border-zion-blue-light text-white"

                        {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}

                      </Button>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;
                      <Calendar"
                        mode="single"

                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white";
                      />;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    </PopoverContent>;
                  </Popover>;
                </div>;
              </div>;
            </div>;

<<<<<<< HEAD

          {/* Step 3: Contact */}
          {currentStep === 'contact' && (;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label htmlFor="email" className="text-white">Contact Email</Label>;


                <Input
                  id="email"
                  name="email"
                  type="email"


=======
          )}

                  value={formData && formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email && email.com"
                  className="bg-zion-blue-dark border-zion-blue-light text-white"
                  required


                  value={formData && formData.email}
                  onChange={handleInputChange}"
                  placeholder="your@email && email.com""
                  className="bg-zion-blue-dark border-zion-blue-light text-white"
                  required;

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  )}
                  {endDate && (

"
                    <div className="flex justify-between">"
                      <span className="text-zion-slate-light">End Date:</span>"
                      <span className="text-white">{format(endDate, "PPP")}</span>
                    </div>
                  )}

<<<<<<< HEAD


                />;
              </div>;
                <Input;
                  id="email";
                  name="email";
                  type="email";
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com";
                  className="bg-zion-blue-dark border-zion-blue-light text-white";
                  required;
                />;
              </div>;
;
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">;

=======

              </div>;

            </div>;


>>>>>>> origin/cursor/delete-old-data-records-6bba
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>;
                <div className="space-y-2 text-sm">;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Service:</span>;

                    <span className="text-white">{service?.title || "Custom Service"}</span>;

                    <span className="text-zion-slate-light">Budget:</span>;
<<<<<<< HEAD

                </div>
              </div>
            </div>
          )}

=======


              </div>;
            </div>;

          )}

                </Button>;
              )}
  const next_step = () =>: any {

  $2
}
    else if (setCurrentStep ('contact')) {'
  $2
}
  }
  const prev_step = () =>: any {

  $2
}
    else if (setCurrentStep ('timeline')) {'
  $2
}
  }

                </div>;
              </div>;
            </div>;


          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">;
            {currentStep !== 'details' && (;

          )}

          )}
"
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">'
            {currentStep !== 'details' && (

              <Button
                type="button"

                variant="outline"
                onClick={prevStep}
"


          )}

          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">
            {currentStep !== 'details' && (

)}
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}


                className="border-zion-blue-light text-white hover:bg-zion-blue-light">;
                Previous;
              </Button>;
            )}

            <div className={cn("flex gap-2", currentStep === 'details' && "ml-auto")}>;


className="border-zion-blue-light text-white hover:bg-zion-blue-light"
              >
                Previous
              </Button>
            )}
            <div className={cn("flex gap-2", currentStep === 'details' && "ml-auto")}>

              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}

                className="border-zion-blue-light text-white hover:bg-zion-blue-light";
              >;
                Cancel;
              </Button>;


                <Button

                  type="submit"

                </Button>;
              )}


;

}
  }
;
  return (

            Request Service Quote;
          </DialogTitle>;
        </DialogHeader>;
        <form on_submit={handle_submit} className=\"space-y-6\" />;
          {/* Step 1: Service Details */}
          {current_step === 'details' && (
            <div className=\"space-y-4\" />;
              <div className=\"p - 4 bg - zion - blue - dark rounded - md border border - zion - blue-light\" />;}
                <h3 className=\"font - medium text - zion - cyan mb-2\" />Selected Service</h3>;}
                <p className=\"text - white text-lg\" />{service?.title || \"Custom Service\"}</p>;
                <p className=\"text - zion - slate - light text - sm mt-1\" />{service?.category}</p>;
              </div>;
              <div className=\"space-y-2\" />;
                <Label html_for=\"description\" className=\"text-white\" />Project Description</Label>;
                <Textarea;
                  id=\"description\";
                  name=\"description\";
                  value={form_data.description}
                  on_change={handleInputChange}
                  placeholder=\"Describe your project needs in detail...\";
                  className=\"h - 32 bg - zion - blue - dark border - zion - blue - light text - white resize-none\";
                  required;
                />;
              </div>;
              <div className=\"space-y-2\" />;
                <Label html_for=\"budget\" className=\"text-white\" />Estimated Budget</Label>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Select;
                  value={form_data.budget}
                  onValueChange={(value) = /> setFormData (prev => ({ ...prev, budget: value }))}
                >;

<<<<<<< HEAD
                  <SelectTrigger className=\"bg - zion - blue - dark border - zion - blue - light text-white\" />;
                    <SelectValue placeholder=\"Select your budget range\" />;
                  </SelectTrigger>;
                  <SelectContent className=\"bg - zion - blue - dark border - zion - blue-light\" />;
                    {BUDGET_RANGES.map ((range) => (}
                      <SelectItem key={range.value} value={range.value} className=\"text - white hover:bg - zion - blue-light\" />;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        {range.label}

            </div>;"
            <div className="space-y-4">;"
</div>"
              <div className="space-y-2">;"
</div>"
                <Label htmlFor="email" className="text-white">Contact Email</Label>;"
                <Input;"
                  id="email"""
                  name="email"""
                  type="email""
                  value={formData && formData.email}
                  onChange={handleInputChange}"
                  placeholder="your@email && email.com"""
                  className="bg-zion-blue-dark border-zion-blue-light text-white""
                  required;
                  )}
                  {endDate && ("
                    <div className="flex justify-between">"
</Input>"
                      <span className="text-zion-slate-light">End Date:</span>")"
                      <span className="text-white">{format(endDate, "PPP")}</span>"
                    </div>
              </div>;
            </div>;
              </div>;
                <Input;"
                  id="email";""
                  name="email";""
                  type="email";"
                  value={formData.email}
                  onChange={handleInputChange}"
                  placeholder="your@email.com";""
                  className="bg-zion-blue-dark border-zion-blue-light text-white";"
                  required;
                />;
</Input>
              </div>;"
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">;"
</div>"
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>;""
                <div className="space-y-2 text-sm">;"
</div>"
                  <div className="flex justify-between">;"
</div>"
                    <span className="text-zion-slate-light">Service:</span>;""
                    <span className="text-white">{service?.title || "Custom Service"}</span>;"
                  </div>;"
                  <div className="flex justify-between">;"
</div>"
                    <span className="text-zion-slate-light">Budget:</span>;""
                    <span className="text-white">{BUDGET_RANGES && BUDGET_RANGES.find(b => b && b.value === formData && formData.budget)?.label}</span>;"
                  </div>;"
                  <div className="flex justify-between">;"
</div>"
                    <span className="text-zion-slate-light">Timeline:</span>;""
                    <span className="text-white">{TIMELINE_OPTIONS && TIMELINE_OPTIONS.find(t => t && t.value === formData && formData.timeframe)?.label}</span>;""
                    <span className="text-white">{BUDGET_RANGES.find(b => b.value === formData.budget)?.label}</span>;"
                  </div>;"
                  <div className="flex justify-between">;"
</div>"
                    <span className="text-zion-slate-light">Timeline:</span>;""
                    <span className="text-white">{TIMELINE_OPTIONS.find(t => t.value === formData.timeframe)?.label}</span>;"
                  </div>;"
                    <div className="flex justify-between">;"
</div>"
                      <span className="text-zion-slate-light">Start Date:</span>;""
                      <span className="text-white">{format(startDate, "PPP")}</span>;"
                    </div>;"
                    <div className="flex justify-between">;"
</div>"
                      <span className="text-zion-slate-light">End Date:</span>;""
                      <span className="text-white">{format(endDate, "PPP")}</span>;"
                    </div>;
                </div>;
              </div>;
            </div>;"
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">;"
</DialogFooter>"
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">"
</DialogFooter>
              <Button;"
                type="button"""
                variant="outline""
                onClick={prevStep}"
                className="border-zion-blue-light text-white hover:bg-zion-blue-light">;"
</Button>
              </Button>;"
            <div className={cn("flex gap-2", currentStep === 'details' && "ml-auto")}>;"
</div>
              <Button;"
                type="button"""
                variant="outline""
                onClick={() => onOpenChange(false)}
</Button>
              </Button>;
                <Button;"
                  type="button""
                  onClick={nextStep}"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"
</Button>
                </Button>;
                <Button;"
                  type="submit""
                  disabled={isSubmitting}"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"
</Button>
                </Button>;
    <Dialog open={open} onOpenChange={onOpenChange}>;
</Dialog>"
      <DialogContent className="bg - zion - blue border - zion - blue - light text - white sm:max - w-[600px]">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>"
          <DialogTitle className="text - 2xl font - semibold text - white">;"
</DialogTitle>
          </DialogTitle>;
        </DialogHeader>;"
        <form on_submit={handle_submit} className="space - y-6">;"
</form>"
            <div className="space - y-4">;"
</div>"
              <div className="p - 4 bg - zion - blue - dark rounded - md border border - zion - blue - light">;"
</div>"
                <h3 className="font - medium text - zion - cyan mb - 2">Selected Service</h3>;""
                <p className="text - white text - lg">{service?.title || "Custom Service"}</p>;""
                <p className="text - zion - slate - light text - sm mt - 1">{service?.category}</p>;"
              </div>;"
              <div className="space - y-2">;"
</div>"
                <Label html_for="description" className="text - white">Project Description</Label>;"
                <Textarea;"
                  id="description";""
                  name="description";"
                  value={form_data.description}
                  on_change={handleInputChange}"
                  placeholder="Describe your project needs in detail...";""
                  className="h - 32 bg - zion - blue - dark border - zion - blue - light text - white resize - none";"
                  required;
                />;
</Textarea>
              </div>;"
              <div className="space - y-2">;"
</div>"
                <Label html_for="budget" className="text - white">Estimated Budget</Label>;"
                <Select;
                  value={form_data.budget}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, budget: value }))}

                        {range.label}

                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;
            </div>)}

<<<<<<< HEAD


=======
                <Select;
                  }
                  value={form_data.timeframe}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, "timeframe": value }))}
                >;

>>>>>>> origin/cursor/delete-old-data-records-6bba
                        {option.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
<<<<<<< HEAD


                  <Popover>;
                    <PopoverTrigger as_child>;
                      <Button;"
                        variant={"outline"}
                        className={cn ("
                          "justify - start text - left font - normal w - full";"
                          "bg - zion - blue - dark border - zion - blue - light text - white")}

                  <Popover>;
                    <PopoverTrigger as_child>;
                      <Button;"
                        variant={"outline"}
                        className={cn ("
                          "justify - start text - left font - normal w - full";"
                          "bg - zion - blue - dark border - zion - blue - light text - white")}

                        mode="single";
                        selected={end_date}
                        on_select={setEndDate}
                        disabled={(date) => !start_date || date < start_date}

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

<<<<<<< HEAD

            {current_step !== 'details' && (
              <Button;"
                type="button";"
                variant="outline";

              >;
                Previous;
              </Button>)}'"
            <div className={cn ("flex gap - 2", current_step === 'details' && "ml - auto")}>;
              <Button;"
                type="button";"
                variant="outline";

              >;
                Cancel;
              </Button>;'
              {current_step !== 'contact' ? (
                <Button;"
                  type="button";

=======
                    </div>)}
                </div>;
              </div>;
            </div>)}

              >;
                Cancel;
              </Button>;
              {current_step !== 'contact' ? ('
                <Button;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                >;
                  Next;
                </Button>) : (
<<<<<<< HEAD


=======
                <Button;


                <Button;"
                  type="submit";

                  {is_submitting ? "Submitting..." : "Submit Request"}

                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                >;
                  Next;
                </Button>;
              ) :(;

                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
  open: boolean;,
  onOpenChange: (open: boolean) => void;,
  service: ProductListing | null;
const BUDGET_RANGES = ["
  { label: "Less than $5,000", value: "0-5000" }""
  { label: "$5,000 - $10,000", value: "5000-10000" }""
  { label: "$10,000 - $25,000", value: "10000-25000" }""
  { label: "$25,000 - $50,000", value: "25000-50000" }"]"
  { label: "$50,000+", value: "50000+" }]"
const TIMELINE_OPTIONS = ["
  { label: "Less than 1 month", value: "lt-1month" }""
  { label: "1-3 months", value: "1-3months" }""
  { label: "3-6 months", value: "3-6months" }"]"
  { label: "6+ months", value: "6+months" }]"
export function ServiceQuoteModal({ open, onOpenChange, service }: ServiceQuoteModalProps) {
  const [formData, setFormData] = useState({
"
import {supabase} from "@/integrations/supabase/client";"
interface ServiceQuoteModalProps {;
  open: boolean,;)
  onOpenChange: (open: boolean) => void,;

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
  const [formData, setFormData] = useState({;"
    description: ,;
    email: ,;
    budget: BUDGET_RANGES[0].value,;)
    timeframe: TIMELINE_OPTIONS[0].value}),;

;
    </Dialog>;
  ),; interface ServiceQuoteModalProps {
  open: boolean;
onOpenChange: (open: boolean) => void;
service: ProductListing | null 
}const BUDGET RANGES = [ export function ServiceQuoteModal ({
  open, onOpenChange, service 
}: ServiceQuoteModalProps) {
  const [formData, setFormData] = useState ({
  description: '';
email: '';
budget: BUDGET RANGES[0].value;
timeframe: TIMELINE OPTIONS[0].value 
});
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());

<<<<<<< HEAD
=======

  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),

  const [endDate, setEndDate] = useState<Date | undefined>(undefined),

  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;

  const handleSubmit = async (e: React && React.FormEvent<HTMLFormElement>) => {;

    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">"

        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-white">"

        <form onSubmit={handleSubmit} className="space-y-6">"
</form>"
            <div className="space-y-4">"

            </div>)}"
            <div className="space - y-4">;"
</div>"
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">"
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>""
                <p className="text-white text-lg">{service?.title |"Custom Service"}</p>""
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>"
              <div className="space-y-2">"
                <Label htmlFor="description" className="text-white">Project Description"
                <Textarea;"
                  id="description"""
                  name="description""
                  value={formData.description}
                  onChange={handleInputChange}"
                  placeholder="Describe your project needs in detail..."""
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none""
                  required;
                />

                <Label htmlFor="budget" className="text-white">Estimated Budget"
                <Select;
                  value={formData.budget}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">"
                    <SelectValue placeholder="Select your budget range" />"

                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">"
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">"

  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),;

  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {;

    <Dialog open={open} onOpenChange={onOpenChange}>;

      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">;"

        <DialogHeader>;
          <DialogTitle className="text-2xl font-semibold text-white">;"

        ;"
        <form onSubmit={handleSubmit} className="space-y-6">;"
            <div className="space-y-4">;"
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">;"
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>;""
                <p className="text-white text-lg">{service?.title || "Custom Service"}</p>;""
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>;"
              </div>;"
              <div className="space-y-2">;"
                <Label htmlFor="description" className="text-white">Project Description;"
                  value={formData && formData.description}
                />;

                <Label htmlFor="budget" className="text-white">Estimated Budget;"
                  value={formData && formData.budget} 

                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;"
                    <SelectValue placeholder="Select your budget range" />;"

                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;"
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">;"

                      <SelectItem key={range && range.value} value={range && range.value} className="text-white hover:bg-zion-blue-light">;"

              </div>;
                <Label className="text-white">Project Timeline;"
                  value={formData && formData.timeframe}

                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}
                    <SelectValue placeholder="Select your timeline" />;"

                      <SelectItem key={option && option.value} value={option && option.value} className="text-white hover:bg-zion-blue-light">;"

              <div className="grid grid-cols-2 gap-4">;"
                  <Label className="text-white">Expected Start Date;"
                  <Popover>;

                    <PopoverTrigger asChild>;

                      <Button;"
                        variant={"outline"}"
                        className={cn("
                          "justify-start text-left font-normal w-full"""
                          "bg-zion-blue-dark border-zion-blue-light text-white"")
                        )}>;
                        <CalendarIcon className="mr-2 h-4 w-4" />;"
                        {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}"
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;"

                      <Calendar;"
                        mode="single""
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus;"
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white""

                  <Label className="text-white">Expected End Date;"

                          "justify-start text-left font-normal w-full""
                        className={cn(;"
                          "justify-start text-left font-normal w-full",;""
                          "bg-zion-blue-dark border-zion-blue-light text-white";")
                        )}
                      >;
                        {startDate ? format(startDate, "PPP") :<span>Pick a date</span>}"

                        mode="single";"
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white";"

                  <Label className="text-white">Expected End Date"
                  <Popover>

                    <PopoverTrigger asChild>

                          "justify-start text-left font-normal w-full",""
                        {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}"

                        selected={endDate}
                        onSelect={setEndDate}

                        disabled={(date) => !startDate || date < startDate}

                <Label htmlFor="email" className="text-white">Contact Email;"
                <Input;"
                  id="email"""
                  name="email"""
                  type="email""
                  value={formData && formData.email}
                  placeholder="your@email && email.com"""
                  className="bg-zion-blue-dark border-zion-blue-light text-white""
                  {endDate && ("
                    <div className="flex justify-between">"
                      <span className="text-zion-slate-light">End Date:</span>")"
                      <span className="text-white">{format(endDate, "PPP")}</span>"
                    </div>
                  id="email";""
                  name="email";""
                  type="email";"
                  value={formData.email}
                  placeholder="your@email.com";""
                  className="bg-zion-blue-dark border-zion-blue-light text-white";"

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">;"
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>;""
                <div className="space-y-2 text-sm">;"
                  <div className="flex justify-between">;"
                    <span className="text-zion-slate-light">Service:</span>;""
                    <span className="text-white">{service?.title || "Custom Service"}</span>;"
                    <span className="text-zion-slate-light">Budget:</span>;""
                    <span className="text-white">{BUDGET_RANGES && BUDGET_RANGES.find(b => b && b.value === formData && formData.budget)?.label}</span>;"
                    <span className="text-zion-slate-light">Timeline:</span>;""
                    <span className="text-white">{TIMELINE_OPTIONS && TIMELINE_OPTIONS.find(t => t && t.value === formData && formData.timeframe)?.label}</span>;""
                    <span className="text-white">{BUDGET_RANGES.find(b => b.value === formData.budget)?.label}</span>;"
                    <span className="text-white">{TIMELINE_OPTIONS.find(t => t.value === formData.timeframe)?.label}</span>;"
                      <span className="text-zion-slate-light">Start Date:</span>;""
                      <span className="text-white">{format(startDate, "PPP")}</span>;"
                      <span className="text-zion-slate-light">End Date:</span>;""
                      <span className="text-white">{format(endDate, "PPP")}</span>;"
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">;"
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">"

                type="button"""
                variant="outline""
                onClick={prevStep}"
                className="border-zion-blue-light text-white hover:bg-zion-blue-light">;"

            <div className={cn("flex gap-2", currentStep === 'details' && "ml-auto")}>;"
                onClick={() => onOpenChange(false)}

                  type="button""
                  onClick={nextStep}"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"

                  type="submit""
                  disabled={isSubmitting}"

      <DialogContent className="bg - zion - blue border - zion - blue - light text - white sm:max - w-[600px]">;"

          <DialogTitle className="text - 2xl font - semibold text - white">;"

        <form on_submit={handle_submit} className="space - y-6">;"
            <div className="space - y-4">;"
              <div className="p - 4 bg - zion - blue - dark rounded - md border border - zion - blue - light">;"
                <h3 className="font - medium text - zion - cyan mb - 2">Selected Service</h3>;""
                <p className="text - white text - lg">{service?.title || "Custom Service"}</p>;""
                <p className="text - zion - slate - light text - sm mt - 1">{service?.category}</p>;"
              <div className="space - y-2">;"
                <Label html_for="description" className="text - white">Project Description;"
                  id="description";""
                  name="description";"
                  value={form_data.description}
                  on_change={handleInputChange}"
                  placeholder="Describe your project needs in detail...";""
                  className="h - 32 bg - zion - blue - dark border - zion - blue - light text - white resize - none";"

                <Label html_for="budget" className="text - white">Estimated Budget;"
                  value={form_data.budget}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, budget: value }))}
                  <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white">;"

                  <SelectContent className="bg - zion - blue - dark border - zion - blue - light">;"
                      <SelectItem key={range.value} value={range.value} className="text - white hover:bg - zion - blue - light">;"

                      ))}
            </div>)}"
                <Label className="text - white">Project Timeline;"
                  value={form_data.timeframe}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, timeframe: value }))}

                      <SelectItem key={option.value} value={option.value} className="text - white hover:bg - zion - blue - light">;"

              <div className="grid grid - cols - 2 gap - 4">;"
                  <Label className="text - white">Expected Start Date;"

                    <PopoverTrigger as_child>;

                        className={cn ("
                          "justify - start text - left font - normal w - full";")"
                          "bg - zion - blue - dark border - zion - blue - light text - white")}"
                        <CalendarIcon className="mr - 2 h - 4 w - 4" />;"
                        {start_date ? format (start_date, "PPP") : <span > Pick a date</span>}"
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light">;"

                        selected={start_date}
                        on_select={setStartDate}
                        initial_focus;"
                        className="p - 3 pointer - events - auto bg - zion - blue - dark text - white";"

                  <Label className="text - white">Expected End Date;"

                        {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}"

                        selected={end_date}
                        on_select={setEndDate}
                        disabled={(date) => !start_date || date < start_date}

                <Label html_for="email" className="text - white">Contact Email;"
                  value={form_data.email}
                  className="bg - zion - blue - dark border - zion - blue - light text - white";"

              <div className="bg - zion - blue - dark border border - zion - blue - light rounded - md p - 4">;"
                <h3 className="font - medium text - zion - cyan mb - 2">Quote Summary</h3>;""
                <div className="space - y-2 text - sm">;"
                  <div className="flex justify - between">;"
                    <span className="text - zion - slate - light">Service:</span>;""
                    <span className="text - white">{service?.title || "Custom Service"}</span>;"
                    <span className="text - zion - slate - light">Budget:</span>;""
                    <span className="text - white">{BUDGET_RANGES.find (boolean => b.value === form_data.budget)?.label}</span>;"
                    <span className="text - zion - slate - light">Timeline:</span>;""
                    <span className="text - white">{TIMELINE_OPTIONS.find (t => t.value === form_data.timeframe)?.label}</span>;"
                      <span className="text - zion - slate - light">Start Date:</span>;""
                      <span className="text - white">{format (start_date, "PPP")}</span>;"
                      <span className="text - zion - slate - light">End Date:</span>;""
                      <span className="text - white">{format (end_date, "PPP")}</span>;"
                    </div>)}
          <DialogFooter className="flex - col sm:flex - row sm:justify - between sm:space - x-2">;"

                type="button";""
                variant="outline";"
                on_click={prev_step}"
                className="border - zion - blue - light text - white hover:bg - zion - blue - light";"

              )}"
            <div className={cn ("flex gap - 2", current_step === 'details' && "ml - auto")}>;"
                on_click={() => onOpenChange (false)}

                  type="button";"
                  on_click={next_step}"
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";"

                ) : (
                  type="submit";"
                  disabled={is_submitting}"
)
                <Button ;"
                  type="button" ;"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";"

                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
                >

        </form>
        </form>;
    );
const [startDate, setStartDate] = useState<Date | undefined> (new Date () );

const [endDate, setEndDate] = useState<Date | undefined> (undefined);
const [currentStep, setCurrentStep] = useState<'details'| 'timeline'| 'contact'> ('details');
const [isSubmitting, setIsSubmitting] = useState (false);

return (<Dialog open= {
  open;
}onOpenChange= {
  onOpenChange;
}> <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]" > text-2xl font-semibold text-white"> Request Service Quote   </div> <div className=" space-y-2"> <Label htmlFor=" description"className=" text-white">Project Description <Textarea required /> </div> <div className=" space-y-2"> <Label htmlFor=" budget"className=" text-white">Estimated Budget <Select value= {"
)"
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your budget range"/>  ) )"
}  </div> </div>) 
}<Select value= {
  formData.timeframe;
}onValueChange= {
  (value) => setFormData (prev => ({
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your timeline"/>  ) )""
}  </div> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-2"> <Label className=" text-white">Expected Start Date <Popover> <PopoverTrigger asChild> <Button   <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/>   </div> <div className=" space-y-2"> <Label className=" text-white">Expected End Date <Popover> <PopoverTrigger asChild> <Button   <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/>   </div> </div> </div>)""
}<Input id=" email"name=" email"type=" email"value= {"
  formData.email;
}required /> </div> </div>) 

}</div> </DialogFooter> </form> </DialogContent> </Dialog>) 
}
    </Dialog>;
  );
}
;

>>>>>>> origin/cursor/delete-old-data-records-6bba
