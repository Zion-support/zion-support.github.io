
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
import { useState  } from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { useState } from 'react',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
import { useState } from 'react',
'
import { useState } from 'react','
import { useState } from 'react',

'
import { useState } from 'react',
<<<<<<< HEAD

import { useState } from 'react',
import { useState } from 'react',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { useState } from 'react',
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import { ProductListing } from "@/types/listings";
import { toast  } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ServiceQuoteModalProps {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
}

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

export function ServiceQuoteModal(): any ({ open, onOpenChange, service }: ServiceQuoteModalProps) {;
  const [formData, setFormData] = useState({,
  description: '',;
    email: '',;
    budget: BUDGET_RANGES[0].value,;
<<<<<<< HEAD
<<<<<<< HEAD
    timeframe: TIMELINE_OPTIONS[0].value}),;

=======
    description: ''
    email: ''
    budget: BUDGET_RANGES[0].value
    timeframe: TIMELINE_OPTIONS[0].value})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Textarea } from "@/components/ui/textarea","
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { Label } from "@/components/ui/label","
import { Slider } from "@/components/ui/slider","
import { Calendar } from "@/components/ui/calendar","
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover","
import { format } from "date-fns","
import { CalendarIcon } from "lucide-react","
import { cn } from "@/lib/utils",
"
import { ProductListing } from "@/types/listings",'
import { toast } from '@/hooks/use-toast',"
import { supabase } from "@/integrations/supabase/client",





interface ServiceQuoteModalProps {};
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: ProductListing | null;
}
const BUDGET_RANGES = ["
  { label: "Less than $5,000", value: "0-5000" }"
  { label: "$5,000 - $10,000", value: "5000-10000" }"
  { label: "$10,000 - $25,000", value: "10000-25000" }"
  { label: "$25,000 - $50,000", value: "25000-50000" }"
  { label: "$50,000+", value: "50000+" }]
const TIMELINE_OPTIONS = ["
  { label: "Less than 1 month", value: "lt-1month" }"
  { label: "1-3 months", value: "1-3months" }"
  { label: "3-6 months", value: "3-6months" }"
  { label: "6+ months", value: "6+months" }]
export function ServiceQuoteModal({ open, onOpenChange, service }: ServiceQuoteModalProps) {}
  const [formData, setFormData] = useState({};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  open: boolean,
  onOpenChange: (open: boolean) => void,
  service: ProductListing | null;
}
const BUDGET_RANGES = [;"
  { label: "Less than $5, 000", value: "0 - 5000" },"
  { label: "$5, 000 - $10, 000", value: "5000 - 10000" },"
  { label: "$10, 000 - $25, 000", value: "10000 - 25000" },"
  { label: "$25, 000 - $50, 000", value: "25000 - 50000" },"
  { label: "$50, 000+", value: "50000+" }],
const TIMELINE_OPTIONS = [;"
  { label: "Less than 1 month", value: "lt - 1month" },"
  { label: "1 - 3 months", value: "1 - 3months" },"
  { label: "3 - 6 months", value: "3 - 6months" },"
  { label: "6+ months", value: "6 + months" }],
export /**;
 * ServiceQuoteModal - Function description;
 */
function ServiceQuoteModal() {}
  const [form_data, setFormData] = useState ({'
    description: '','
    email: '',
    budget: BUDGET_RANGES[0].value,
    timeframe: TIMELINE_OPTIONS[0].value}),
  const [start_date, setStartDate] = useState < Date | undefined>(new Date ());
  const [end_date, setEndDate] = useState < Date | undefined>(undefined);'
  const [current_step, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>) =>: any {}
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
  }
;
  const handle_submit = async (e: React.FormEvent < HTMLFormElement>) => {}
    e.prevent_default ();
    setIsSubmitting (true),

'
    description: '','
    email: '',
    budget: BUDGET_RANGES[0].value,
'
    description: '','
    email: '',
    budget: BUDGET_RANGES[0].value,
    timeframe: TIMELINE_OPTIONS[0].value}),;
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);'
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
    timeframe: TIMELINE_OPTIONS[0].value}),
  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),'
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),
  const [isSubmitting, setIsSubmitting] = useState(false),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {}
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {}
    e.preventDefault(),
    setIsSubmitting(true),

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      // Call Supabase function to process the quote;
      const { data, error } = await supabase.functions.invoke ('process - quote', {
        body: {
          service: service ? {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



    try {}
      // Call Supabase function to process the quote;'
      const { data, error } = await supabase.functions.invoke ('process - quote', {}
        body: {}
          service: service ? {}
  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e && e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React && React.FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();
    setIsSubmitting(true),;

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

    try {
      // Call Supabase function to process the quote
      const { data, error } = await supabase.functions.invoke('process-quote', {
        body: {
          service: service ? {
            id: service.id
            title: service.title
            category: service.category} : null
          quoteDetails: {
            ...formData
            startDate: startDate?.toISOString()
            endDate: endDate?.toISOString()}
        }
<<<<<<< HEAD
=======
      });
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }),

      if (error) throw error,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc




      // Show success message;
      toast({"
        title: "Quote Request Submitted!"'"
        description: "We've sent your request to the service provider. They will contact you soon."})
<<<<<<< HEAD
      // Close the modal and reset form
<<<<<<< HEAD
<<<<<<< HEAD
      onOpenChange(false);
      setFormData({

<<<<<<< HEAD
=======

=======

      onOpenChange(false),
      setFormData({
        description: ''
        email: ''
        budget: BUDGET_RANGES[0].value
        timeframe: TIMELINE_OPTIONS[0].value})
      setStartDate(new Date());
      setEndDate(undefined);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        description: '',
=======
      // Close the modal and reset form;
'
        description: '','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        email: '',
        budget: BUDGET_RANGES[0].value,
        timeframe: TIMELINE_OPTIONS[0].value}),
      setStartDate(new Date()),
      setEndDate(undefined),


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setCurrentStep('details')
    } catch (error) {
      console.error("Error submitting quote:", error);
=======
      setCurrentStep('details')
    } catch (error) {
      console.error("Error submitting quote:", error),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      onOpenChange(false),
      setFormData({'
      setCurrentStep('details')
    } catch (error) {"
      console.error("Error submitting quote:", error),

      toast({"
        title: "Error""
        description: "There was an error submitting your quote request. Please try again.""
        variant: "destructive"})
<<<<<<< HEAD
<<<<<<< HEAD
    } finally {
      setIsSubmitting (false);
    }
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            endDate: endDate?.toISOString()}
        }
      });
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

  const nextStep = () => {
    if (currentStep === 'details') setCurrentStep('timeline');
    else if (currentStep === 'timeline') setCurrentStep('contact')

  },

  const prevStep = () => {
    if (currentStep === 'timeline') setCurrentStep('details');
    else if (currentStep === 'contact') setCurrentStep('timeline')

  },

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
    } finally {
      setIsSubmitting(false)
    }
  }
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const nextStep = () => {
    if (currentStep === 'details') setCurrentStep('timeline'),
    else if (currentStep === 'timeline') setCurrentStep('contact')

  const prevStep = () => {
    if (currentStep === 'timeline') setCurrentStep('details'),
    else if (currentStep === 'contact') setCurrentStep('timeline')

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
              </div>
              <div className="space-y-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
              </div>"
              <div className="space-y-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Label htmlFor="description" className="text-white">Project Description</Label>


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <Textarea
=======
                <Label htmlFor="description" className="text-white">Project Description</Label>                <Textarea
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <Label htmlFor="description" className="text-white">Project Description</Label>                <Textarea
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  id="description"
=======

                <Textarea"
                  id="description""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
'
import { useState } from 'react',;"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { Label } from "@/components/ui/label",;"
import { Slider } from "@/components/ui/slider",;"
import { Calendar } from "@/components/ui/calendar",;"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;"
import { format } from "date-fns",;"
import { CalendarIcon } from "lucide-react",;"
import { cn } from "@/lib/utils",;"
import { ProductListing } from "@/types/listings",;'
import { toast } from '@/hooks/use-toast',;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { supabase } from "@/integrations/supabase/client",;
interface ServiceQuoteModalProps {;
  open: boolean,;
  onOpenChange: (open: boolean) => void,;
  service: ProductListing | null;
}
;
const BUDGET_RANGES = [;"
  { label: "Less than $5,000", value: "0-5000" },;"
  { label: "$5,000 - $10,000", value: "5000-10000" },;"
  { label: "$10,000 - $25,000", value: "10000-25000" },;"
  { label: "$25,000 - $50,000", value: "25000-50000" },;"
  { label: "$50,000+", value: "50000+" }],;
const TIMELINE_OPTIONS = [;"
  { label: "Less than 1 month", value: "lt-1month" },;"
  { label: "1-3 months", value: "1-3months" },;"
  { label: "3-6 months", value: "3-6months" },;"
  { label: "6+ months", value: "6+months" }],;
export function ServiceQuoteModal() { return null; }
    timeframe: TIMELINE_OPTIONS[0].value}),;
  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),;
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;'
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
      // Call Supabase function to process the quote;'
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
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
      // Show success message;
      toast({;"
        title: "Quote Request Submitted!",;'"
        description: "We've sent your request to the service provider. They will contact you soon."}),;

      // Close the modal and reset form;

      setFormData({;'
        description: '',;'
        email: '',;
        budget: BUDGET_RANGES[0].value,;
        timeframe: TIMELINE_OPTIONS[0].value}),;

      toast({;"
        title: "Error",;"
        description: "There was an error submitting your quote request. Please try again.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
<<<<<<< HEAD
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
=======

    <Dialog open={open} onOpenChange={onOpenChange}>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">;
        <DialogHeader>;"
          <DialogTitle className="text-2xl font-semibold text-white">;
            Request Service Quote;
          </DialogTitle>;
        </DialogHeader>;
<<<<<<< HEAD
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
                  id="description"
=======
"
        <form onSubmit={handleSubmit} className="space-y-6">;
          {/* Step 1: Service Details */}'
          {currentStep === 'details' && (;"
            <div className="space-y-4">;"
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">;"
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>;"
                <p className="text-white text-lg">{service?.title || "Custom Service"}</p>;"
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>;
              </div>;

                <Textarea"
                  id="description""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  name="description"
                  value={formData && formData.description}
                  onChange={handleInputChange}"
                  placeholder="Describe your project needs in detail...""
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none"
<<<<<<< HEAD
                  required                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  required;
                />;
              </div>;
"
              <div className="space-y-2">;"
                <Label htmlFor="budget" className="text-white">Estimated Budget</Label>;
                <Select;
                  value={formData && formData.budget} 


                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}

                >;"
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;"
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;

<<<<<<< HEAD
                    {BUDGET_RANGES.map((range) => (;
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">;
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        {range.label}
                      </SelectItem>
                    {BUDGET_RANGES && BUDGET_RANGES.map((range) => (;"
                      <SelectItem key={range && range.value} value={range && range.value} className="text-white hover:bg-zion-blue-light">;
                        {range && range.label}
                      </SelectItem>;
                    ))}



                  </SelectContent>;
                </Select>;
              </div>;
            </div>;
          )}
'
          {currentStep === 'timeline' && (;"
            <div className="space-y-4">;"
              <div className="space-y-2">;"
                <Label className="text-white">Project Timeline</Label>;


                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}

                >;"
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;"
                    <SelectValue placeholder="Select your timeline" />;
                  </SelectTrigger>;"
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;

                    {TIMELINE_OPTIONS && TIMELINE_OPTIONS.map((option) => (;"
                      <SelectItem key={option && option.value} value={option && option.value} className="text-white hover:bg-zion-blue-light">;
                        {option && option.label}
                      </SelectItem>;
                    ))}
"
              <div className="grid grid-cols-2 gap-4">;"
                <div className="space-y-2">;"
                  <Label className="text-white">Expected Start Date</Label>;
                  <Popover>;
                    <PopoverTrigger asChild>;
"
                          "bg-zion-blue-dark border-zion-blue-light text-white"
                        )}>;"
                        <CalendarIcon className="mr-2 h-4 w-4" />;"
                        {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;



                      <Calendar"
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus"
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white"


                      <Button;"
                        variant={"outline"}
<<<<<<< HEAD
                        className={cn(
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                          "justify-start text-left font-normal w-full"

=======

                          "justify-start text-left font-normal w-full",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                      <Button;
                        variant={"outline"}
                        className={cn(;
                          "justify-start text-left font-normal w-full",;
=======
                        className={cn(;"
                          "justify-start text-left font-normal w-full",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          "bg-zion-blue-dark border-zion-blue-light text-white";
                        )}
                      >;"
                        <CalendarIcon className="mr-2 h-4 w-4" />;"
                        {startDate ? format(startDate, "PPP") :<span>Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;
                      <Calendar;"
                        mode="single";
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus;"
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white";
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
;"
                <div className="space-y-2">;"
                  <Label className="text-white">Expected End Date</Label>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      />
                    </PopoverContent>
                  </Popover>
                </div>"
                <div className="space-y-2">"
                  <Label className="text-white">Expected End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button"
                        variant={"outline"}
                        className={cn("
                          "justify-start text-left font-normal w-full"
"
                          "justify-start text-left font-normal w-full",

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          "bg-zion-blue-dark border-zion-blue-light text-white"
=======
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;                          "bg-zion-blue-dark border-zion-blue-light text-white"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;                          "bg-zion-blue-dark border-zion-blue-light text-white"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        )}>;
                        <CalendarIcon className="mr-2 h-4 w-4" />;
=======


"
                          "bg-zion-blue-dark border-zion-blue-light text-white"
                        )}>;"
                        <CalendarIcon className="mr-2 h-4 w-4" />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;
                      <Calendar"
                        mode="single"
<<<<<<< HEAD
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus;
=======

                        disabled={(date) => !startDate || date < startDate}
                        initialFocus;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white";
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
              </div>;
            </div>;

<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  value={formData && formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email && email.com"
                  className="bg-zion-blue-dark border-zion-blue-light text-white"
                  required
<<<<<<< HEAD
=======

                        selected={endDate}
                        onSelect={setEndDate}
          )}
          {/* Step 3: Contact */}
'
          {currentStep === 'contact' && (;"
            <div className="space-y-4">;"
              <div className="space-y-2">;"
                <Label htmlFor="email" className="text-white">Contact Email</Label>;



                <Input"
                  id="email""
                  name="email""
                  type="email"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                  value={formData && formData.email}
                  onChange={handleInputChange}"
                  placeholder="your@email && email.com""
                  className="bg-zion-blue-dark border-zion-blue-light text-white"
                  required;
                  )}
                  {endDate && (

"
                    <div className="flex justify-between">"
                      <span className="text-zion-slate-light">End Date:</span>"
                      <span className="text-white">{format(endDate, "PPP")}</span>
                    </div>
                  )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

              </div>;
=======
                  {endDate && (              </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  {endDate && (              </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>;

<<<<<<< HEAD
=======              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">;
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>;
                <div className="space-y-2 text-sm">;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Service:</span>;
=======



                />;
              </div>;
                <Input;"
                  id="email";"
                  name="email";"
                  type="email";
                  value={formData.email}
                  onChange={handleInputChange}"
                  placeholder="your@email.com";"
                  className="bg-zion-blue-dark border-zion-blue-light text-white";
                  required;
                />;
              </div>;
;
"
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">;"
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>;"
                <div className="space-y-2 text-sm">;"
                  <div className="flex justify-between">;"
                    <span className="text-zion-slate-light">Service:</span>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <span className="text-white">{service?.title || "Custom Service"}</span>;
                  </div>;"
                  <div className="flex justify-between">;"
                    <span className="text-zion-slate-light">Budget:</span>;
<<<<<<< HEAD
                    <span className="text-white">{BUDGET_RANGES && BUDGET_RANGES.find(b => b && b.value === formData && formData.budget)?.label}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Timeline:</span>;
                    <span className="text-white">{TIMELINE_OPTIONS && TIMELINE_OPTIONS.find(t => t && t.value === formData && formData.timeframe)?.label}</span>;                    <span className="text-white">{BUDGET_RANGES.find(b => b.value === formData.budget)?.label}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Timeline:</span>;
                    <span className="text-white">{TIMELINE_OPTIONS.find(t => t.value === formData.timeframe)?.label}</span>;
=======
"
                    <span className="text-white">{BUDGET_RANGES.find(b => b.value === formData.budget)?.label}</span>;
                  </div>;"
                  <div className="flex justify-between">;"
                    <span className="text-zion-slate-light">Timeline:</span>;"
                    <span className="text-white">{TIMELINE_OPTIONS.find(t => t.value === formData.timeframe)?.label}</span>;

                  </div>;
                  {startDate && (;"
                    <div className="flex justify-between">;"
                      <span className="text-zion-slate-light">Start Date:</span>;"
                      <span className="text-white">{format(startDate, "PPP")}</span>;
                    </div>;
                  )}
                  {endDate && (;"
                    <div className="flex justify-between">;"
                      <span className="text-zion-slate-light">End Date:</span>;"
                      <span className="text-white">{format(endDate, "PPP")}</span>;

                </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </div>;
            </div>;

          )}
<<<<<<< HEAD
<<<<<<< HEAD

"
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">;'
            {currentStep !== 'details' && (;

<<<<<<< HEAD
<<<<<<< HEAD
=======
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">;
            {currentStep !== 'details' && (;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                </div>
              </div>
            </div>
          )}
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          )}


          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">;
            {currentStep !== 'details' && (;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          )}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

          )}
"
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">'
            {currentStep !== 'details' && (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <Button
                type="button"
=======

              <Button"
                type="button""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                variant="outline"
                onClick={prevStep}
"
                className="border-zion-blue-light text-white hover:bg-zion-blue-light">;
                Previous;
              </Button>;
            )}



              <Button"
                type="button""
                variant="outline"
                onClick={() => onOpenChange(false)}
"
                className="border-zion-blue-light text-white hover:bg-zion-blue-light";
              >;
                Cancel;
              </Button>;


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <Button
=======

                <Button"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  type="submit"
                  disabled={isSubmitting}"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
  const next_step = () =>: any {'
    if (setCurrentStep ('timeline')) {}
  $2;
}'
    else if (setCurrentStep ('contact')) {}
  $2;
}
  }
;
  const prev_step = () =>: any {'
    if (setCurrentStep ('details')) {}
  $2;
}'
    else if (setCurrentStep ('timeline')) {}
  $2;
}
  }
;
  return (
<<<<<<< HEAD
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
                  id="description";
                  name="description";
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
=======
    <Dialog open={open} onOpenChange={onOpenChange}>;"
      <DialogContent className="bg - zion - blue border - zion - blue - light text - white sm:max - w-[600px]">;
        <DialogHeader>;"
          <DialogTitle className="text - 2xl font - semibold text - white">;
            Request Service Quote;
          </DialogTitle>;
        </DialogHeader>;"
        <form on_submit={handle_submit} className="space - y-6">;
          {/* Step 1: Service Details */}'
          {current_step === 'details' && ("
            <div className="space - y-4">;"
              <div className="p - 4 bg - zion - blue - dark rounded - md border border - zion - blue - light">;"
                <h3 className="font - medium text - zion - cyan mb - 2">Selected Service</h3>;"
                <p className="text - white text - lg">{service?.title || "Custom Service"}</p>;"
                <p className="text - zion - slate - light text - sm mt - 1">{service?.category}</p>;
              </div>;"
              <div className="space - y-2">;"
                <Label html_for="description" className="text - white">Project Description</Label>;
                <Textarea;"
                  id="description";"
                  name="description";
                  value={form_data.description}
                  on_change={handleInputChange}"
                  placeholder="Describe your project needs in detail...";"
                  className="h - 32 bg - zion - blue - dark border - zion - blue - light text - white resize - none";
                  required;
                />;
              </div>;"
              <div className="space - y-2">;"
                <Label html_for="budget" className="text - white">Estimated Budget</Label>;
                <Select;
                  value={form_data.budget}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, budget: value }))}
                >;"
                  <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white">;"
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;"
                  <SelectContent className="bg - zion - blue - dark border - zion - blue - light">;
                    {BUDGET_RANGES.map ((range) => ("
                      <SelectItem key={range.value} value={range.value} className="text - white hover:bg - zion - blue - light">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        {range.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;
            </div>)}
<<<<<<< HEAD
          {/* Step 2: Timeline */}
          {current_step === 'timeline' && (
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label className="text-white">Project Timeline</Label>;
                <Select;
                  value={form_data.timeframe}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, timeframe: value }))}
                >;
                  <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text-white">;
                    <SelectValue placeholder="Select your timeline" />;
                  </SelectTrigger>;
                  <SelectContent className="bg - zion - blue - dark border - zion - blue-light">;
                    {TIMELINE_OPTIONS.map ((option) => (
                      <SelectItem key={option.value} value={option.value} className="text - white hover:bg - zion - blue-light">;
=======
          {/* Step 2: Timeline */}'
          {current_step === 'timeline' && ("
            <div className="space - y-4">;"
              <div className="space - y-2">;"
                <Label className="text - white">Project Timeline</Label>;
                <Select;
                  value={form_data.timeframe}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, timeframe: value }))}
                >;"
                  <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white">;"
                    <SelectValue placeholder="Select your timeline" />;
                  </SelectTrigger>;"
                  <SelectContent className="bg - zion - blue - dark border - zion - blue - light">;
                    {TIMELINE_OPTIONS.map ((option) => ("
                      <SelectItem key={option.value} value={option.value} className="text - white hover:bg - zion - blue - light">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        {option.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
<<<<<<< HEAD
              </div>;
              <div className="grid grid - cols - 2 gap-4">;
                <div className="space-y-2">;
                  <Label className="text-white">Expected Start Date</Label>;
=======
              </div>;"
              <div className="grid grid - cols - 2 gap - 4">;"
                <div className="space - y-2">;"
                  <Label className="text - white">Expected Start Date</Label>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <Button;"
                        variant={"outline"}
                        className={cn ("
                          "justify - start text - left font - normal w - full";"
                          "bg - zion - blue - dark border - zion - blue - light text - white")}
<<<<<<< HEAD
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
=======
                      >;"
                        <CalendarIcon className="mr - 2 h - 4 w - 4" />;"
                        {start_date ? format (start_date, "PPP") : <span > Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light">;
                      <Calendar;"
                        mode="single";
                        selected={start_date}
                        on_select={setStartDate}
                        initial_focus;"
                        className="p - 3 pointer - events - auto bg - zion - blue - dark text - white";
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;"
                <div className="space - y-2">;"
                  <Label className="text - white">Expected End Date</Label>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <Button;"
                        variant={"outline"}
                        className={cn ("
                          "justify - start text - left font - normal w - full";"
                          "bg - zion - blue - dark border - zion - blue - light text - white")}
<<<<<<< HEAD
                      >;
                        <CalendarIcon className="mr - 2 h - 4 w-4" />;
                        {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue-light">;
                      <Calendar;
=======
                      >;"
                        <CalendarIcon className="mr - 2 h - 4 w - 4" />;"
                        {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light">;
                      <Calendar;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        mode="single";
                        selected={end_date}
                        on_select={setEndDate}
                        disabled={(date) => !start_date || date < start_date}
<<<<<<< HEAD
                        initial_focus;
                        className="p - 3 pointer - events - auto bg - zion - blue - dark text-white";
=======
                        initial_focus;"
                        className="p - 3 pointer - events - auto bg - zion - blue - dark text - white";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
              </div>;
            </div>)}
<<<<<<< HEAD
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
=======
          {/* Step 3: Contact */}'
          {current_step === 'contact' && ("
            <div className="space - y-4">;"
              <div className="space - y-2">;"
                <Label html_for="email" className="text - white">Contact Email</Label>;
                <Input;"
                  id="email";"
                  name="email";"
                  type="email";
                  value={form_data.email}
                  on_change={handleInputChange}"
                  placeholder="your@email.com";"
                  className="bg - zion - blue - dark border - zion - blue - light text - white";
                  required;
                />;
              </div>;"
              <div className="bg - zion - blue - dark border border - zion - blue - light rounded - md p - 4">;"
                <h3 className="font - medium text - zion - cyan mb - 2">Quote Summary</h3>;"
                <div className="space - y-2 text - sm">;"
                  <div className="flex justify - between">;"
                    <span className="text - zion - slate - light">Service:</span>;"
                    <span className="text - white">{service?.title || "Custom Service"}</span>;
                  </div>;"
                  <div className="flex justify - between">;"
                    <span className="text - zion - slate - light">Budget:</span>;"
                    <span className="text - white">{BUDGET_RANGES.find (boolean => b.value === form_data.budget)?.label}</span>;
                  </div>;"
                  <div className="flex justify - between">;"
                    <span className="text - zion - slate - light">Timeline:</span>;"
                    <span className="text - white">{TIMELINE_OPTIONS.find (t => t.value === form_data.timeframe)?.label}</span>;
                  </div>;
                  {start_date && ("
                    <div className="flex justify - between">;"
                      <span className="text - zion - slate - light">Start Date:</span>;"
                      <span className="text - white">{format (start_date, "PPP")}</span>;
                    </div>)}
                  {end_date && ("
                    <div className="flex justify - between">;"
                      <span className="text - zion - slate - light">End Date:</span>;"
                      <span className="text - white">{format (end_date, "PPP")}</span>;
                    </div>)}
                </div>;
              </div>;
            </div>)}"
          <DialogFooter className="flex - col sm:flex - row sm:justify - between sm:space - x-2">;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {current_step !== 'details' && (
              <Button;"
                type="button";"
                variant="outline";
<<<<<<< HEAD
                on_click={prev_step}
                className="border - zion - blue - light text - white hover:bg - zion - blue-light";
=======
                on_click={prev_step}"
                className="border - zion - blue - light text - white hover:bg - zion - blue - light";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              >;
                Previous;
              </Button>)}'"
            <div className={cn ("flex gap - 2", current_step === 'details' && "ml - auto")}>;
              <Button;"
                type="button";"
                variant="outline";
<<<<<<< HEAD
                on_click={() => onOpenChange (false)}
                className="border - zion - blue - light text - white hover:bg - zion - blue-light";
=======
                on_click={() => onOpenChange (false)}"
                className="border - zion - blue - light text - white hover:bg - zion - blue - light";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              >;
                Cancel;
              </Button>;'
              {current_step !== 'contact' ? (
                <Button;"
                  type="button";
<<<<<<< HEAD
                  on_click={next_step}
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion-purple";
=======
                  on_click={next_step}"
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                >;
                  Next;
                </Button>) : (
                <Button;"
                  type="submit";
<<<<<<< HEAD
                  disabled={is_submitting}
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion-purple";
                >;
=======
                  disabled={is_submitting}"
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                >;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  {is_submitting ? "Submitting..." : "Submit Request"}
<<<<<<< HEAD
<<<<<<< HEAD
                </Button>)}



              ;'
              {currentStep !== 'contact' ? (;
                <Button ;"
                  type="button" ;
                  onClick={nextStep}"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                >;
                  Next;
                </Button>;
              ) :(;
                <Button ;"
                  type="submit";
                  disabled={isSubmitting}"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                >;"
                  {isSubmitting ? "Submitting..." :"Submit Request"}
                </Button>;
              )}"
                className="border-zion-blue-light text-white hover:bg-zion-blue-light"
              >
                Cancel;
              </Button>'
              {currentStep !== 'contact' ? (
                <Button"
                  type="button"
                  onClick={nextStep}"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                >
                  Next;
                </Button>
              ) : (
                <Button"
                  type="submit"
                  disabled={isSubmitting}"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                >"
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



            </div>;
          </DialogFooter>;
        </form>;
      </DialogContent>;


    </Dialog>;
  ),; interface ServiceQuoteModalProps {}
  open: boolean;
onOpenChange: (open: boolean) => void;
service: ProductListing | null;
}const BUDGET RANGES = [ export function ServiceQuoteModal ({};
  open, onOpenChange, service;
}: ServiceQuoteModalProps) {}
  const [formData, setFormData] = useState ({'
  description: '';'
email: '';
budget: BUDGET RANGES[0].value;
timeframe: TIMELINE OPTIONS[0].value;
});
const [startDate, setStartDate] = useState<Date | undefined> (new Date () );
const [endDate, setEndDate] = useState<Date | undefined> (undefined);'
const [currentStep, setCurrentStep] = useState<'details'| 'timeline'| 'contact'> ('details');
const [isSubmitting, setIsSubmitting] = useState (false);
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {}
  const {}
  name, value;
}= e.target;
setFormData (prev => ({}
  ...prev, [name]: value;
}) ) 
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {}
  e.preventDefault ();
setIsSubmitting (true);
//Call Supabase function to process the quote const {}
  data, error '
}= await supabase.functions.invoke ('process-quote', {}
  body: {}
  service: service ? {}
  id: service.id, title: service.title, category: service.category;
}: null, quoteDetails: {}
  ...formData, startDate: startDate?.toISOString (), endDate: endDate?.toISOString () 
}
;

}
});
if (error) throw error;
//Show success message //Close the modal and reset form onOpenChange (false);
setFormData ({'
  description: '';'
email: '';
budget: BUDGET RANGES[0].value;
timeframe: TIMELINE OPTIONS[0].value;
});
setStartDate (new Date () );
setEndDate (undefined);'
setCurrentStep ('details') 
}catch (error) {}
}finally {}
  setIsSubmitting (false) 
}
};
const nextStep = () => {'
  if (currentStep === 'details') setCurrentStep ('timeline');'
else if (currentStep === 'timeline') setCurrentStep ('contact') 
};
const prevStep = () => {'
  if (currentStep === 'timeline') setCurrentStep ('details');'
else if (currentStep === 'contact') setCurrentStep ('timeline') 
};
return (<Dialog open= {}
  open;
}onOpenChange= {}
  onOpenChange "
}> <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]" > text-2xl font-semibold text-white"> Request Service Quote </DialogTitle> </DialogHeader> </div> <div className=" space-y-2"> <Label htmlFor=" description"className=" text-white">Project Description</Label> <Textarea required /> </div> <div className=" space-y-2"> <Label htmlFor=" budget"className=" text-white">Estimated Budget</Label> <Select value= {}
  formData.budget;
}onValueChange= {}
  (value) => setFormData (prev => ({}
  ...prev, budget: value;
}) ) "
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your budget range"/> </SelectTrigger> </SelectItem>) ) 
}</SelectContent> </Select> </div> </div>) 
}<Select value= {}
  formData.timeframe;
}onValueChange= {}
  (value) => setFormData (prev => ({}
  ...prev, timeframe: value;
}) ) "
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your timeline"/> </SelectTrigger> </SelectItem>) ) "
}</SelectContent> </Select> </div> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-2"> <Label className=" text-white">Expected Start Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> <div className=" space-y-2"> <Label className=" text-white">Expected End Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> </div> </div>) "
}<Input id=" email"name=" email"type=" email"value= {}
  formData.email;
}required /> </div> </div>) 
}</div> </div> </div>) "
}<Button type=" button"variant=" outline"onClick= {}
  prevStep "
}className=" border-zion-blue-light text-white hover:bg-zion-blue-light"> Previous </Button>) 
}> Cancel </Button> {'"
  currentStep !== 'contact' ? (<Button type=" button"onClick= {}
  nextStep "
}className=" bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" > Next </Button>) : (<Button </Button>) 
}</div> </DialogFooter> </form> </DialogContent> </Dialog>) 
}
    </Dialog>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                </Button>)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                </Button>)}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
