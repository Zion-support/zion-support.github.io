<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx


<<<<<<< HEAD
import { useState } from 'react',

=======

import { useState  } from 'react';
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
import { useState } from 'react',

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from 'react',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { useState } from 'react',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======

import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ProductListing } from "@/types/listings";
import { toast  } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
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
  const [formData, setFormData] = useState({;
    description: '',;
    email: '',;
    budget: BUDGET_RANGES[0].value,;
    timeframe: TIMELINE_OPTIONS[0].value}),;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    description: ''
    email: ''
    budget: BUDGET_RANGES[0].value
    timeframe: TIMELINE_OPTIONS[0].value})
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
import {useState} from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Label } from '@/components / ui / label';
import { Slider } from '@/components / ui / slider';
import { Calendar } from '@/components / ui / calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';
import { format } from './date - fns';
import { CalendarIcon } from './lucide-react';
import { cn } from '@/lib / utils';
import { ProductListing } from '@/types / listings';
import {toast} from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';
interface ServiceQuoteModalProps {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  service: ProductListing | null;
}
const BUDGET_RANGES = [;
  { label: "Less than $5, 000", value: "0 - 5000" },
  { label: "$5, 000 - $10, 000", value: "5000 - 10000" },
  { label: "$10, 000 - $25, 000", value: "10000 - 25000" },
  { label: "$25, 000 - $50, 000", value: "25000 - 50000" },
  { label: "$50, 000+", value: "50000+" }],
const TIMELINE_OPTIONS = [;
  { label: "Less than 1 month", value: "lt - 1month" },
  { label: "1 - 3 months", value: "1 - 3months" },
  { label: "3 - 6 months", value: "3 - 6months" },
  { label: "6+ months", value: "6 + months" }],
export /**
 * ServiceQuoteModal - Function description
 */
function ServiceQuoteModal() {
  const [form_data, setFormData] = useState ({
    description: '',
    email: '',
    budget: BUDGET_RANGES[0].value,
    timeframe: TIMELINE_OPTIONS[0].value}),
  const [start_date, setStartDate] = useState < Date | undefined>(new Date ());
  const [end_date, setEndDate] = useState < Date | undefined>(undefined);
  const [current_step, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>) =>: any {
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
  }
;
  const handle_submit = async (e: React.FormEvent < HTMLFormElement>) => {
    e.prevent_default ();
    setIsSubmitting (true),
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

=======

    description: '',
    email: '',
    budget: BUDGET_RANGES[0].value,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
=======
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true)
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(),
    setIsSubmitting(true),

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
    try {
      // Call Supabase function to process the quote;
      const { data, error } = await supabase.functions.invoke ('process - quote', {
        body: {
          service: service ? {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e && e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React && React.FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();
    setIsSubmitting(true),;
    try {;
      // Call Supabase function to process the quote;
      const { data, error } = await supabase && supabase.functions.invoke('process-quote', {;
        body: {;
          service: service ? {;
            id: service && service.id,;
            title: service && service.title,;
            category: service && service.category} : null,;
          quoteDetails: {;
            ...formData,;
            startDate: startDate?.toISOString(),;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

            endDate: endDate?.toISOString()}
        }
<<<<<<< HEAD

=======


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
      });
      if (error) throw error;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }),

      if (error) throw error,

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Show success message
      toast({
        title: "Quote Request Submitted!"
        description: "We've sent your request to the service provider. They will contact you soon."})
      // Close the modal and reset form
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        description: '',
        email: '',
        budget: BUDGET_RANGES[0].value,
        timeframe: TIMELINE_OPTIONS[0].value}),
      setStartDate(new Date()),
      setEndDate(undefined),
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      setCurrentStep('details')
    } catch (error) {
      console.error("Error submitting quote:", error);
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      setCurrentStep('details')
    } catch (error) {
      console.error("Error submitting quote:", error),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Error"
        description: "There was an error submitting your quote request. Please try again."
        variant: "destructive"})
<<<<<<< HEAD
=======
========
            endDate: endDate?.toISOString()}
        }
      });
      if (error) throw error;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
            id: service.id,
            title: service.title,
            category: service.category} : null,
          quote_details: {
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const nextStep = () => {
    if (currentStep === 'details') setCurrentStep('timeline');
    else if (currentStep === 'timeline') setCurrentStep('contact')
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const prevStep = () => {
    if (currentStep === 'timeline') setCurrentStep('details');
    else if (currentStep === 'contact') setCurrentStep('timeline')
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    } finally {
      setIsSubmitting(false)
    }
  }
  },

  const nextStep = () => {
    if (currentStep === 'details') setCurrentStep('timeline'),
    else if (currentStep === 'timeline') setCurrentStep('contact')
  }
  },

  const prevStep = () => {
    if (currentStep === 'timeline') setCurrentStep('details'),
    else if (currentStep === 'contact') setCurrentStep('timeline')
  }
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Show success message;
      toast({;
        title: "Quote Request Submitted!",;
        description: "We've sent your request to the service provider. They will contact you soon."}),;
      // Close the modal and reset form;
<<<<<<< HEAD
      onOpenChange(false);
=======
      onOpenChange(false),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setFormData({;
        description: '',;
        email: '',;
        budget: BUDGET_RANGES[0].value,;
        timeframe: TIMELINE_OPTIONS[0].value}),;
<<<<<<< HEAD
      setStartDate(new Date());
      setEndDate(undefined);
      setCurrentStep('details');
    } catch (error) {;
      console && console.error("Error submitting quote:", error);
=======
      setStartDate(new Date()),;
      setEndDate(undefined),;
      setCurrentStep('details');
    } catch (error) {;
      console.error("Error submitting quote:", error),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({;
        title: "Error",;
        description: "There was an error submitting your quote request. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
<<<<<<< HEAD
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
=======

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
;
interface ServiceQuoteModalProps {;
  open:boolean,;
  onOpenChange:(open:boolean) => void,;
  service:ProductListing | null;
}
;
const BUDGET_RANGES = [;
  { label:"Less than $5,000", value:"0-5000" },;
  { label:"$5,000 - $10,000", value:"5000-10000" },;
  { label:"$10,000 - $25,000", value:"10000-25000" },;
  { label:"$25,000 - $50,000", value:"25000-50000" },;
  { label:"$50,000+", value:"50000+" }],;
;
const TIMELINE_OPTIONS = [;
  { label:"Less than 1 month", value:"lt-1month" },;
  { label:"1-3 months", value:"1-3months" },;
  { label:"3-6 months", value:"3-6months" },;
  { label:"6+ months", value:"6+months" }],;
;
export function ServiceQuoteModal({ open, onOpenChange, service } ServiceQuoteModalProps) {;
  const [formData, setFormData] = useState({;
    description:'',;
    email:'',;
    budget:BUDGET_RANGES[0].value,;
    timeframe:TIMELINE_OPTIONS[0].value}),;
  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),;
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
;
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({ ...prev, [name]:value })),;
  },;
;
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;
;
    try {;
      // Call Supabase function to process the quote;
      const { data, error } = await supabase.functions.invoke('process-quote', {;
        body:{;
          service:service ? {;
            id:service.id,;
            title:service.title,;
            category:service.category} null,;
          quoteDetails:{;
            ...formData,;
            startDate:startDate?.toISOString(),;
            endDate:endDate?.toISOString()}
        }
      }),;
;
      if (error) throw error,;
;
      // Show success message;
      toast({;
        title:"Quote Request Submitted!",;
        description:"We've sent your request to the service provider. They will contact you soon."}),;
;
      // Close the modal and reset form;
      onOpenChange(false),;
      setFormData({;
        description:'',;
        email:'',;
        budget:BUDGET_RANGES[0].value,;
        timeframe:TIMELINE_OPTIONS[0].value}),;
      setStartDate(new Date()),;
      setEndDate(undefined),;
      setCurrentStep('details'),;
    } catch (error) {;
      console.error("Error submitting quote:", error),;
      toast({;
        title:"Error",;
        description:"There was an error submitting your quote request. Please try again.",;
        variant:"destructive"}),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  const nextStep = () => {;
    if (currentStep === 'details') setCurrentStep('timeline'),;
    else if (currentStep === 'timeline') setCurrentStep('contact'),;
  },;
;
  const prevStep = () => {;
    if (currentStep === 'timeline') setCurrentStep('details'),;
    else if (currentStep === 'contact') setCurrentStep('timeline'),;
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  },;
  const nextStep = () => {;
    if (currentStep === 'details') setCurrentStep('timeline'),;
    else if (currentStep === 'timeline') setCurrentStep('contact');
  },;
  const prevStep = () => {;
    if (currentStep === 'timeline') setCurrentStep('details'),;
    else if (currentStep === 'contact') setCurrentStep('timeline');
  },;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">;
        <DialogHeader>;
          <DialogTitle className="text-2xl font-semibold text-white">;
            Request Service Quote;
          </DialogTitle>;
        </DialogHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
        <form onSubmit={handleSubmit} className="space-y-6">;
          {/* Step 1: Service Details */}
=======
;
        <form onSubmit={handleSubmit} className="space-y-6">;
          {/* Step 1:Service Details */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        <form onSubmit={handleSubmit} className="space-y-6">;
          {/* Step 1: Service Details */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {currentStep === 'details' && (;
            <div className="space-y-4">;
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">;
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>;
                <p className="text-white text-lg">{service?.title || "Custom Service"}</p>;
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="space-y-2">;
                <Label htmlFor="description" className="text-white">Project Description</Label>;
                <Textarea
                  id="description"
                  name="description"
                  value={formData && formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your project needs in detail..."
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none"
                  required
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                />;
              </div>;
              <div className="space-y-2">;
                <Label htmlFor="budget" className="text-white">Estimated Budget</Label>;
                <Select
                  value={formData && formData.budget} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
=======
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="space-y-2">;
                <Label htmlFor="description" className="text-white">Project Description</Label>;
                <Textarea;
                  id="description";
                  name="description";
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your project needs in detail...";
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none";
                  required;
                />;
              </div>;
<<<<<<< HEAD
;
              <div className="space-y-2">;
                <Label htmlFor="budget" className="text-white">Estimated Budget</Label>;
                <Select ;
                  value={formData.budget} ;
                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget:value }))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              <div className="space-y-2">;
                <Label htmlFor="budget" className="text-white">Estimated Budget</Label>;
                <Select;
                  value={formData.budget} ;
                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

                    {BUDGET_RANGES.map((range) => (;
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        {range.label}
                      </SelectItem>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
<<<<<<< HEAD
                    {BUDGET_RANGES && BUDGET_RANGES.map((range) => (;
                      <SelectItem key={range && range.value} value={range && range.value} className="text-white hover:bg-zion-blue-light">;
                        {range && range.label}
                      </SelectItem>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                    ))}
=======
                    {BUDGET_RANGES.map((range) => (;
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">;
                        {range.label}
                      </SelectItem>;                    ))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </SelectContent>;
                </Select>;
              </div>;
            </div>;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
          {/* Step 2: Timeline */}

========
<<<<<<< HEAD
          {/* Step 2: Timeline */}
=======
;
          {/* Step 2:Timeline */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
          {currentStep === 'timeline' && (;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label className="text-white">Project Timeline</Label>;
<<<<<<< HEAD
                <Select
                  value={formData && formData.timeframe}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}
=======
                <Select ;
                  value={formData.timeframe}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe:value }))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your timeline" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;
<<<<<<< HEAD
                    {TIMELINE_OPTIONS && TIMELINE_OPTIONS.map((option) => (;
                      <SelectItem key={option && option.value} value={option && option.value} className="text-white hover:bg-zion-blue-light">;
                        {option && option.label}
=======
                    {TIMELINE_OPTIONS.map((option) => (;
                      <SelectItem key={option.value} value={option.value} className="text-white hover:bg-zion-blue-light">;
                        {option.label}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </SelectItem>;
                    ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                  </SelectContent>;
                </Select>;
              </div>;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="grid grid-cols-2 gap-4">;
                <div className="space-y-2">;
                  <Label className="text-white">Expected Start Date</Label>;
                  <Popover>;
                    <PopoverTrigger asChild>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
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
=======
                    {BUDGET_RANGES.map((range) => (;
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">;
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          {/* Step 2: Timeline */}
          {currentStep === 'timeline' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white">Project Timeline</Label>
                <Select
                  value={formData.timeframe}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}
                >
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="Select your timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {TIMELINE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="text-white hover:bg-zion-blue-light">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">Expected Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "justify-start text-left font-normal w-full",
                          "bg-zion-blue-dark border-zion-blue-light text-white"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
=======
                      <Button;
                        variant={"outline"}
                        className={cn(;
                          "justify-start text-left font-normal w-full",;
                          "bg-zion-blue-dark border-zion-blue-light text-white";
                        )}
                      >;
                        <CalendarIcon className="mr-2 h-4 w-4" />;
                        {startDate ? format(startDate, "PPP") :<span>Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;
                      <Calendar;
                        mode="single";
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus;
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <div className="space-y-2">;
                  <Label className="text-white">Expected End Date</Label>;
                  <Popover>;
                    <PopoverTrigger asChild>;
<<<<<<< HEAD
=======
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Expected End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <Button
                        variant={"outline"}
                        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
                          "justify-start text-left font-normal w-full"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

=======

                          "justify-start text-left font-normal w-full",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                          "bg-zion-blue-dark border-zion-blue-light text-white"
                        )}>;
                        <CalendarIcon className="mr-2 h-4 w-4" />;
                        {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;
                      <Calendar
                        mode="single"
=======
                      <Button;
                        variant={"outline"}
                        className={cn(;
                          "justify-start text-left font-normal w-full",;
                          "bg-zion-blue-dark border-zion-blue-light text-white";
                        )}
                      >;
                        <CalendarIcon className="mr-2 h-4 w-4" />;
                        {endDate ? format(endDate, "PPP") :<span>Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;
                      <Calendar;
                        mode="single";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        selected={endDate}
                        onSelect={setEndDate}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                        disabled={(date) => !startDate || date < startDate}
                        initialFocus;
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white";
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
              </div>;
            </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
          )}
<<<<<<< HEAD
          {/* Step 3: Contact */}
=======
;
          {/* Step 3:Contact */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          {currentStep === 'contact' && (;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label htmlFor="email" className="text-white">Contact Email</Label>;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                          "justify-start text-left font-normal w-full";

                          "justify-start text-left font-normal w-full",
                          "bg-zion-blue-dark border-zion-blue-light text-white"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        disabled={(date) => !startDate |date < startDate}
                        initialFocus
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          )}
          {/* Step 3: Contact */}
          {currentStep === 'contact' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Contact Email</Label>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Input
                  id="email"
                  name="email"
                  type="email"
<<<<<<< HEAD
                  value={formData && formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email && email.com"
                  className="bg-zion-blue-dark border-zion-blue-light text-white"
                  required
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

=======
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="bg-zion-blue-dark border-zion-blue-light text-white"
                  required
                />
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Service:</span>
                    <span className="text-white">{service?.title |"Custom Service"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Budget:</span>
                    <span className="text-white">{BUDGET_RANGES.find(b => b.value === formData.budget)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Timeline:</span>
                    <span className="text-white">{TIMELINE_OPTIONS.find(t => t.value === formData.timeframe)?.label}</span>
                  </div>
                  {startDate && (
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Start Date:</span>
                      <span className="text-white">{format(startDate, "PPP")}</span>
                    </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  )}
                  {endDate && (
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">End Date:</span>
                      <span className="text-white">{format(endDate, "PPP")}</span>
                    </div>
                  )}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                />;
              </div>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">;
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>;
                <div className="space-y-2 text-sm">;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Service:</span>;
                    <span className="text-white">{service?.title || "Custom Service"}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Budget:</span>;
<<<<<<< HEAD
                    <span className="text-white">{BUDGET_RANGES && BUDGET_RANGES.find(b => b && b.value === formData && formData.budget)?.label}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Timeline:</span>;
                    <span className="text-white">{TIMELINE_OPTIONS && TIMELINE_OPTIONS.find(t => t && t.value === formData && formData.timeframe)?.label}</span>;
=======
                    <span className="text-white">{BUDGET_RANGES.find(b => b.value === formData.budget)?.label}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Timeline:</span>;
                    <span className="text-white">{TIMELINE_OPTIONS.find(t => t.value === formData.timeframe)?.label}</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </div>;
                  {startDate && (;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">Start Date:</span>;
                      <span className="text-white">{format(startDate, "PPP")}</span>;
                    </div>;
                  )}
                  {endDate && (;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">End Date:</span>;
                      <span className="text-white">{format(endDate, "PPP")}</span>;
<<<<<<< HEAD
                    </div>;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
                    </div>;                  )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                </div>;
              </div>;
            </div>;

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
          )}

          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">
            {currentStep !== 'details' && (
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          )}


          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">;
            {currentStep !== 'details' && (;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">;
            {currentStep !== 'details' && (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                </div>
              </div>
            </div>
          )}
                </div>;
              </div>;
            </div>;
          )}

          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">
            {currentStep !== 'details' && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
<<<<<<< HEAD
                className="border-zion-blue-light text-white hover:bg-zion-blue-light">;
                Previous;
              </Button>;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx


            <div className={cn("flex gap-2", currentStep === 'details' && "ml-auto")}>;

=======
                className="border-zion-blue-light text-white hover:bg-zion-blue-light"
              >
                Previous
              </Button>
            )}
            <div className={cn("flex gap-2", currentStep === 'details' && "ml-auto")}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
<<<<<<< HEAD

========
            <div className={cn("flex gap-2", currentStep === 'details' && "ml-auto")}>;
              <Button
                type="button"
                variant="outline"
=======
;
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">;
            {currentStep !== 'details' && (;
              <Button;
                type="button";
                variant="outline";
                onClick={prevStep}
                className="border-zion-blue-light text-white hover:bg-zion-blue-light";
              >;
                Previous;
              </Button>;
            )}
            ;
            <div className={cn("flex gap-2", currentStep === 'details' && "ml-auto")}>;
              <Button;
                type="button";
                variant="outline";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                onClick={() => onOpenChange(false)}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                className="border-zion-blue-light text-white hover:bg-zion-blue-light";
              >;
                Cancel;
              </Button>;
<<<<<<< HEAD
              {currentStep !== 'contact' ? (;
                <Button
                  type="button" 
                  onClick={nextStep}
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                  Next;
                </Button>;
              ) : (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

<<<<<<< HEAD
=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
;
  const next_step = () =>: any {
    if (setCurrentStep ('timeline')) {
  $2
}
    else if (setCurrentStep ('contact')) {
  $2
}
  }
;
  const prev_step = () =>: any {
    if (setCurrentStep ('details')) {
  $2
}
    else if (setCurrentStep ('timeline')) {
  $2
}
  }
;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="bg - zion - blue border - zion - blue - light text - white sm:max - w-[600px]">;
        <DialogHeader>;
          <DialogTitle className="text - 2xl font - semibold text - white">;
            Request Service Quote;
          </DialogTitle>;
        </DialogHeader>;
        <form on_submit={handle_submit} className="space - y-6">;
          {/* Step 1: Service Details */}
          {current_step === 'details' && (
            <div className="space - y-4">;
              <div className="p - 4 bg - zion - blue - dark rounded - md border border - zion - blue - light">;
                <h3 className="font - medium text - zion - cyan mb - 2">Selected Service</h3>;
                <p className="text - white text - lg">{service?.title || "Custom Service"}</p>;
                <p className="text - zion - slate - light text - sm mt - 1">{service?.category}</p>;
              </div>;
              <div className="space - y-2">;
                <Label html_for="description" className="text - white">Project Description</Label>;
                <Textarea;
                  id="description";
                  name="description";
                  value={form_data.description}
                  on_change={handleInputChange}
                  placeholder="Describe your project needs in detail...";
                  className="h - 32 bg - zion - blue - dark border - zion - blue - light text - white resize - none";
                  required;
                />;
              </div>;
              <div className="space - y-2">;
                <Label html_for="budget" className="text - white">Estimated Budget</Label>;
                <Select;
                  value={form_data.budget}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, budget: value }))}
                >;
                  <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white">;
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;
                  <SelectContent className="bg - zion - blue - dark border - zion - blue - light">;
                    {BUDGET_RANGES.map ((range) => (
                      <SelectItem key={range.value} value={range.value} className="text - white hover:bg - zion - blue - light">;
                        {range.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;
            </div>)}
          {/* Step 2: Timeline */}
          {current_step === 'timeline' && (
            <div className="space - y-4">;
              <div className="space - y-2">;
                <Label className="text - white">Project Timeline</Label>;
                <Select;
                  value={form_data.timeframe}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, timeframe: value }))}
                >;
                  <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white">;
                    <SelectValue placeholder="Select your timeline" />;
                  </SelectTrigger>;
                  <SelectContent className="bg - zion - blue - dark border - zion - blue - light">;
                    {TIMELINE_OPTIONS.map ((option) => (
                      <SelectItem key={option.value} value={option.value} className="text - white hover:bg - zion - blue - light">;
                        {option.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;
              <div className="grid grid - cols - 2 gap - 4">;
                <div className="space - y-2">;
                  <Label className="text - white">Expected Start Date</Label>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <Button;
                        variant={"outline"}
                        className={cn (
                          "justify - start text - left font - normal w - full";
                          "bg - zion - blue - dark border - zion - blue - light text - white")}
                      >;
                        <CalendarIcon className="mr - 2 h - 4 w - 4" />;
                        {start_date ? format (start_date, "PPP") : <span > Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light">;
                      <Calendar;
                        mode="single";
                        selected={start_date}
                        on_select={setStartDate}
                        initial_focus;
                        className="p - 3 pointer - events - auto bg - zion - blue - dark text - white";
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
                <div className="space - y-2">;
                  <Label className="text - white">Expected End Date</Label>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <Button;
                        variant={"outline"}
                        className={cn (
                          "justify - start text - left font - normal w - full";
                          "bg - zion - blue - dark border - zion - blue - light text - white")}
                      >;
                        <CalendarIcon className="mr - 2 h - 4 w - 4" />;
                        {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}
                      </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light">;
                      <Calendar;
                        mode="single";
                        selected={end_date}
                        on_select={setEndDate}
                        disabled={(date) => !start_date || date < start_date}
                        initial_focus;
                        className="p - 3 pointer - events - auto bg - zion - blue - dark text - white";
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
              </div>;
            </div>)}
          {/* Step 3: Contact */}
          {current_step === 'contact' && (
            <div className="space - y-4">;
              <div className="space - y-2">;
                <Label html_for="email" className="text - white">Contact Email</Label>;
                <Input;
                  id="email";
                  name="email";
                  type="email";
                  value={form_data.email}
                  on_change={handleInputChange}
                  placeholder="your@email.com";
                  className="bg - zion - blue - dark border - zion - blue - light text - white";
                  required;
                />;
              </div>;
              <div className="bg - zion - blue - dark border border - zion - blue - light rounded - md p - 4">;
                <h3 className="font - medium text - zion - cyan mb - 2">Quote Summary</h3>;
                <div className="space - y-2 text - sm">;
                  <div className="flex justify - between">;
                    <span className="text - zion - slate - light">Service:</span>;
                    <span className="text - white">{service?.title || "Custom Service"}</span>;
                  </div>;
                  <div className="flex justify - between">;
                    <span className="text - zion - slate - light">Budget:</span>;
                    <span className="text - white">{BUDGET_RANGES.find (boolean => b.value === form_data.budget)?.label}</span>;
                  </div>;
                  <div className="flex justify - between">;
                    <span className="text - zion - slate - light">Timeline:</span>;
                    <span className="text - white">{TIMELINE_OPTIONS.find (t => t.value === form_data.timeframe)?.label}</span>;
                  </div>;
                  {start_date && (
                    <div className="flex justify - between">;
                      <span className="text - zion - slate - light">Start Date:</span>;
                      <span className="text - white">{format (start_date, "PPP")}</span>;
                    </div>)}
                  {end_date && (
                    <div className="flex justify - between">;
                      <span className="text - zion - slate - light">End Date:</span>;
                      <span className="text - white">{format (end_date, "PPP")}</span>;
                    </div>)}
                </div>;
              </div>;
            </div>)}
          <DialogFooter className="flex - col sm:flex - row sm:justify - between sm:space - x-2">;
            {current_step !== 'details' && (
              <Button;
                type="button";
                variant="outline";
                on_click={prev_step}
                className="border - zion - blue - light text - white hover:bg - zion - blue - light";
              >;
                Previous;
              </Button>)}
            <div className={cn ("flex gap - 2", current_step === 'details' && "ml - auto")}>;
              <Button;
                type="button";
                variant="outline";
                on_click={() => onOpenChange (false)}
                className="border - zion - blue - light text - white hover:bg - zion - blue - light";
              >;
                Cancel;
              </Button>;
              {current_step !== 'contact' ? (
                <Button;
                  type="button";
                  on_click={next_step}
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                >;
                  Next;
                </Button>) : (
                <Button;
                  type="submit";
                  disabled={is_submitting}
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                >;
                  {is_submitting ? "Submitting..." : "Submit Request"}
                </Button>)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
=======
              ;
              {currentStep !== 'contact' ? (;
                <Button ;
                  type="button" ;
                  onClick={nextStep}
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                >;
                  Next;
                </Button>;
              ) :(;
                <Button ;
                  type="submit";
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                >;
                  {isSubmitting ? "Submitting..." :"Submit Request"}
                </Button>;
              )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
=======
                className="border-zion-blue-light text-white hover:bg-zion-blue-light"
              >
                Cancel
              </Button>
              {currentStep !== 'contact' ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                >
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </div>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
    </Dialog>);
=======
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
const [startDate, setStartDate] = useState<Date | undefined> (new Date () );
const [endDate, setEndDate] = useState<Date | undefined> (undefined);
const [currentStep, setCurrentStep] = useState<'details'| 'timeline'| 'contact'> ('details');
const [isSubmitting, setIsSubmitting] = useState (false);
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const {
  name, value 
}= e.target;
setFormData (prev => ({
  ...prev, [name]: value 
}) ) 
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault ();
setIsSubmitting (true);
//Call Supabase function to process the quote const {
  data, error 
}= await supabase.functions.invoke ('process-quote', {
  body: {
  service: service ? {
  id: service.id, title: service.title, category: service.category 
}: null, quoteDetails: {
  ...formData, startDate: startDate?.toISOString (), endDate: endDate?.toISOString () 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
});
if (error) throw error;
//Show success message //Close the modal and reset form onOpenChange (false);
setFormData ({
  description: '';
email: '';
budget: BUDGET RANGES[0].value;
timeframe: TIMELINE OPTIONS[0].value 
});
setStartDate (new Date () );
setEndDate (undefined);
setCurrentStep ('details') 
}catch (error) {
  
}finally {
  setIsSubmitting (false) 
}
};
const nextStep = () => {
  if (currentStep === 'details') setCurrentStep ('timeline');
else if (currentStep === 'timeline') setCurrentStep ('contact') 
};
const prevStep = () => {
  if (currentStep === 'timeline') setCurrentStep ('details');
else if (currentStep === 'contact') setCurrentStep ('timeline') 
};
return (<Dialog open= {
  open 
}onOpenChange= {
  onOpenChange 
}> <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]" > text-2xl font-semibold text-white"> Request Service Quote </DialogTitle> </DialogHeader> </div> <div className=" space-y-2"> <Label htmlFor=" description"className=" text-white">Project Description</Label> <Textarea required /> </div> <div className=" space-y-2"> <Label htmlFor=" budget"className=" text-white">Estimated Budget</Label> <Select value= {
  formData.budget 
}onValueChange= {
  (value) => setFormData (prev => ({
  ...prev, budget: value 
}) ) 
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your budget range"/> </SelectTrigger> </SelectItem>) ) 
}</SelectContent> </Select> </div> </div>) 
}<Select value= {
  formData.timeframe 
}onValueChange= {
  (value) => setFormData (prev => ({
  ...prev, timeframe: value 
}) ) 
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your timeline"/> </SelectTrigger> </SelectItem>) ) 
}</SelectContent> </Select> </div> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-2"> <Label className=" text-white">Expected Start Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> <div className=" space-y-2"> <Label className=" text-white">Expected End Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> </div> </div>) 
}<Input id=" email"name=" email"type=" email"value= {
  formData.email 
}required /> </div> </div>) 
}</div> </div> </div>) 
}<Button type=" button"variant=" outline"onClick= {
  prevStep 
}className=" border-zion-blue-light text-white hover:bg-zion-blue-light"> Previous </Button>) 
}> Cancel </Button> {
  currentStep !== 'contact' ? (<Button type=" button"onClick= {
  nextStep 
}className=" bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" > Next </Button>) : (<Button </Button>) 
}</div> </DialogFooter> </form> </DialogContent> </Dialog>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ServiceQuoteModal.tsx
=======
    </Dialog>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
