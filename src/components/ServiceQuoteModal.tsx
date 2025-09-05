<<<<<<< HEAD
<<<<<<< HEAD
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
import { CalendarIcon } from 'lucide-react'
import { cn } from "@/lib/utils",
import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from &quot;@/components/ui/dialog&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Slider } from &quot;@/components/ui/slider&quot;;
import { Calendar } from &quot;@/components/ui/calendar&quot;;
import { Popover, PopoverContent, PopoverTrigger } from &quot;@/components/ui/popover&quot;;
import { format } from &quot;date-fns&quot;;
import { CalendarIcon } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;
import { ProductListing } from &quot;@/types/listings&quot;;
import { toast } from '@/hooks/use-toast';
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ServiceQuoteModalProps {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  service: ProductListing | null
}

const BUDGET_RANGES = [
<<<<<<< HEAD
  { label: "Less than $5,000", value: "0-5000" },
  { label: "$5,000 - $10,000", value: "5000-10000" },
  { label: "$10,000 - $25,000", value: "10000-25000" },
  { label: "$25,000 - $50,000", value: "25000-50000" },
  { label: "$50,000+", value: "50000+" }],

const TIMELINE_OPTIONS = [
  { label: "Less than 1 month", value: "lt-1month" },
  { label: "1-3 months", value: "1-3months" },
  { label: "3-6 months", value: "3-6months" },
  { label: "6+ months", value: "6+months" }],
=======
  { label: &quot;Less than $5,000&quot;, value: &quot;0-5000&quot; },
  { label: &quot;$5,000 - $10,000&quot;, value: &quot;5000-10000&quot; },
  { label: &quot;$10,000 - $25,000&quot;, value: &quot;10000-25000&quot; },
  { label: &quot;$25,000 - $50,000&quot;, value: &quot;25000-50000&quot; },
  { label: &quot;$50,000+&quot;, value: &quot;50000+&quot; }];

const TIMELINE_OPTIONS = [
  { label: &quot;Less than 1 month&quot;, value: &quot;lt-1month&quot; },
  { label: &quot;1-3 months&quot;, value: &quot;1-3months&quot; },
  { label: &quot;3-6 months&quot;, value: &quot;3-6months&quot; },
  { label: &quot;6+ months&quot;, value: &quot;6+months&quot; }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function ServiceQuoteModal({ open, onOpenChange, service }: ServiceQuoteModalProps) {
  const [formData, setFormData] = useState({
    description: '',
    email: '',
    budget: BUDGET_RANGES[0]?.value || '0-5000',
    timeframe: TIMELINE_OPTIONS[0]?.value || 'lt-1month'}),
  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))
  },

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(),
    setIsSubmitting(true),
=======


interface ServiceQuoteModalProps {_open: boolean;
  onOpenChange: (_open: boolean) => void;
  service: ProductListing | null;}

const _BUDGET_RANGES = [
  {_label: "Less than $5, _000", _value: "0-5000"},
  {_label: "$5, _000 - $10, _000", _value: "5000-10000"},
  {_label: "$10, _000 - $25, _000", _value: "10000-25000"},
  {_label: "$25, _000 - $50, _000", _value: "25000-50000"},
  {_label: "$50, _000+", _value: "50000+"}];

const _TIMELINE_OPTIONS = [
  {_label: "Less than 1 month", _value: "lt-1month"},
  {_label: "1-3 months", _value: "1-3months"},
  {_label: "3-6 months", _value: "3-6months"},
  {_label: "6+ months", _value: "6+months"}];

export function ServiceQuoteModal(_{_open, _onOpenChange, _service}: ServiceQuoteModalProps) {_const [formData, _setFormData] = useState({
    description: '', _email: '', _budget: BUDGET_RANGES[0]?.value || '0-5000', _timeframe: TIMELINE_OPTIONS[0]?.value || 'lt-1month'});
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const _handleInputChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {_const { name, _value} = e.target;
    setFormData(prev => ({_...prev, _[name]: value}));
  };

  const _handleSubmit = async (_e: React.FormEvent<HTMLFormElement>) => {_e.preventDefault();
    setIsSubmitting(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    try {
      // Call Supabase function to process the quote
      const { data, _error} = await supabase.functions.invoke(_'process-quote', _{_body: {
          service: service ? {
            id: service.id, _title: service.title, _category: service.category} : null, _quoteDetails: {_...formData, _startDate: startDate?.toISOString(), _endDate: endDate?.toISOString()}
        }
      }),

      if (error) throw error,

      // Show success message
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Quote Request Submitted!",
        description: "We've sent your request to the service provider. They will contact you soon."}),
=======
        title: &quot;Quote Request Submitted!&quot;,
        description: &quot;We've sent your request to the service provider. They will contact you soon.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      // Close the modal and reset form
      onOpenChange(false),
      setFormData({
        description: '',
        email: '',
        budget: BUDGET_RANGES[0]?.value || '0-5000',
        timeframe: TIMELINE_OPTIONS[0]?.value || 'lt-1month'}),
      setStartDate(new Date()),
      setEndDate(undefined),
      setCurrentStep('details')
    } catch (error) {
      logErrorToProduction('Error submitting quote:', { data: error }),
      toast({
<<<<<<< HEAD
        title: "Error",
        description: "There was an error submitting your quote request. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Error&quot;,
        description: &quot;There was an error submitting your quote request. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },

  const nextStep = () => {
    if (currentStep === 'details') setCurrentStep('timeline'),
    else if (currentStep === 'timeline') setCurrentStep('contact')
  },

  const prevStep = () => {
    if (currentStep === 'timeline') setCurrentStep('details'),
    else if (currentStep === 'contact') setCurrentStep('timeline')
  },

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=&quot;bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]&quot;>
=======
      toast({_title: "Quote Request Submitted!", _description: "We've sent your request to the service provider. They will contact you soon."});

      // Close the modal and reset form
      onOpenChange(false);
      setFormData({_description: '', _email: '', _budget: BUDGET_RANGES[0]?.value || '0-5000', _timeframe: TIMELINE_OPTIONS[0]?.value || 'lt-1month'});
      setStartDate(new Date());
      setEndDate(undefined);
      setCurrentStep('details');
    } catch (error) {_logErrorToProduction('Error submitting quote:', _{ data: error});
      toast({_title: "Error", _description: "There was an error submitting your quote request. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };

  const _nextStep = () => {_if (currentStep === 'details') setCurrentStep('timeline');
    else if (currentStep === 'timeline') setCurrentStep('contact');};

  const _prevStep = () => {_if (currentStep === 'timeline') setCurrentStep('details');
    else if (currentStep === 'contact') setCurrentStep('timeline');};

  return (_<Dialog open={_open} onOpenChange={_onOpenChange}>
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <DialogHeader>
          <DialogTitle className=&quot;text-2xl font-semibold text-white&quot;>
            Request Service Quote
          </DialogTitle>
        </DialogHeader>

<<<<<<< HEAD
        <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
          {/* Step 1: Service Details */}
          {currentStep === 'details' && (
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light&quot;>
                <h3 className=&quot;font-medium text-zion-cyan mb-2&quot;>Selected Service</h3>
                <p className=&quot;text-white text-lg&quot;>{service?.title || &quot;Custom Service&quot;}</p>
                <p className=&quot;text-zion-slate-light text-sm mt-1&quot;>{service?.category}</p>
=======
        <form onSubmit={_handleSubmit} className="space-y-6">
          {_/* Step 1: Service Details */}
          {_currentStep === 'details' && (
            <div className="space-y-4">
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>
                <p className="text-white text-lg">{service?.title || "Custom Service"}</p>
                <p className="text-zion-slate-light text-sm mt-1">{_service?.category}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>

              <div className=&quot;space-y-2&quot;>
                <Label htmlFor=&quot;description&quot; className=&quot;text-white&quot;>Project Description</Label>
                <Textarea
<<<<<<< HEAD
                  id=&quot;description&quot;
                  name=&quot;description&quot;
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder=&quot;Describe your project needs in detail...&quot;
                  className=&quot;h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none&quot;
=======
                  id="description"
                  name="description"
                  value={_formData.description}
                  onChange={_handleInputChange}
                  placeholder="Describe your project needs in detail..."
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  required
                />
              </div>

              <div className=&quot;space-y-2&quot;>
                <Label htmlFor=&quot;budget&quot; className=&quot;text-white&quot;>Estimated Budget</Label>
                <Select 
                  value={_formData.budget} 
                  onValueChange={_(value) => setFormData(prev => ({ ...prev, _budget: value}))}
                >
                  <SelectTrigger className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;>
                    <SelectValue placeholder=&quot;Select your budget range&quot; />
                  </SelectTrigger>
<<<<<<< HEAD
                  <SelectContent className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
                    {BUDGET_RANGES.map((range) => (
                      <SelectItem key={range.value} value={range.value} className=&quot;text-white hover:bg-zion-blue-light&quot;>
                        {range.label}
=======
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {_BUDGET_RANGES.map(_(range) => (
                      <SelectItem key={range.value} value={_range.value} className="text-white hover:bg-zion-blue-light">
                        {_range.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

<<<<<<< HEAD
          {/* Step 2: Timeline */}
          {currentStep === 'timeline' && (
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;space-y-2&quot;>
                <Label className=&quot;text-white&quot;>Project Timeline</Label>
=======
          {_/* Step 2: Timeline */}
          {_currentStep === 'timeline' && (_<div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white">Project Timeline</Label>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Select 
                  value={formData.timeframe}
                  onValueChange={_(value) => setFormData(prev => ({ ...prev, _timeframe: value}))}
                >
                  <SelectTrigger className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;>
                    <SelectValue placeholder=&quot;Select your timeline&quot; />
                  </SelectTrigger>
<<<<<<< HEAD
                  <SelectContent className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
                    {TIMELINE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value} className=&quot;text-white hover:bg-zion-blue-light&quot;>
                        {option.label}
=======
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {_TIMELINE_OPTIONS.map(_(option) => (
                      <SelectItem key={option.value} value={_option.value} className="text-white hover:bg-zion-blue-light">
                        {_option.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className=&quot;grid grid-cols-2 gap-4&quot;>
                <div className=&quot;space-y-2&quot;>
                  <Label className=&quot;text-white&quot;>Expected Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
<<<<<<< HEAD
                        variant={&quot;outline&quot;}
                        className={cn(
                          &quot;justify-start text-left font-normal w-full&quot;,
                          &quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;
                        )}
                      >
                        <CalendarIcon className=&quot;mr-2 h-4 w-4&quot; aria-hidden=&quot;true&quot; />
                        {startDate ? format(startDate, &quot;PPP&quot;) : <span>Pick a date</span>}
=======
                        variant={_"outline"}
                        className={_cn(
                          "justify-start text-left font-normal w-full", _"bg-zion-blue-dark border-zion-blue-light text-white"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                        {_startDate ? format(startDate, _"PPP") : <span>Pick a date</span>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className=&quot;w-auto p-0 bg-zion-blue-dark border-zion-blue-light&quot;>
                      <Calendar
<<<<<<< HEAD
                        mode=&quot;single&quot;
                        selected={startDate}
                        onSelect={setStartDate}
=======
                        mode="single"
                        selected={_startDate}
                        onSelect={_setStartDate}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        initialFocus
                        className=&quot;p-3 pointer-events-auto bg-zion-blue-dark text-white&quot;
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className=&quot;space-y-2&quot;>
                  <Label className=&quot;text-white&quot;>Expected End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
<<<<<<< HEAD
                        variant={&quot;outline&quot;}
                        className={cn(
                          &quot;justify-start text-left font-normal w-full&quot;,
                          &quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;
                        )}
                      >
                        <CalendarIcon className=&quot;mr-2 h-4 w-4&quot; aria-hidden=&quot;true&quot; />
                        {endDate ? format(endDate, &quot;PPP&quot;) : <span>Pick a date</span>}
=======
                        variant={_"outline"}
                        className={_cn(
                          "justify-start text-left font-normal w-full", _"bg-zion-blue-dark border-zion-blue-light text-white"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                        {_endDate ? format(endDate, _"PPP") : <span>Pick a date</span>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className=&quot;w-auto p-0 bg-zion-blue-dark border-zion-blue-light&quot;>
                      <Calendar
<<<<<<< HEAD
                        mode=&quot;single&quot;
                        selected={endDate}
                        onSelect={setEndDate}
                        disabled={(date) => !startDate || date < startDate}
=======
                        mode="single"
                        selected={_endDate}
                        onSelect={_setEndDate}
                        disabled={_(_date) => !startDate || date < startDate}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        initialFocus
                        className=&quot;p-3 pointer-events-auto bg-zion-blue-dark text-white&quot;
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          )}

<<<<<<< HEAD
          {/* Step 3: Contact */}
          {currentStep === 'contact' && (
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;space-y-2&quot;>
                <Label htmlFor=&quot;email&quot; className=&quot;text-white&quot;>Contact Email</Label>
=======
          {_/* Step 3: Contact */}
          {_currentStep === 'contact' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Contact Email</Label>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Input
                  id=&quot;email&quot;
                  name=&quot;email&quot;
                  type=&quot;email&quot;
                  value={formData.email}
<<<<<<< HEAD
                  onChange={handleInputChange}
                  placeholder=&quot;your@email.com&quot;
                  className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;
=======
                  onChange={_handleInputChange}
                  placeholder="your@email.com"
                  className="bg-zion-blue-dark border-zion-blue-light text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  required
                />
              </div>

<<<<<<< HEAD
              <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-md p-4&quot;>
                <h3 className=&quot;font-medium text-zion-cyan mb-2&quot;>Quote Summary</h3>
                <div className=&quot;space-y-2 text-sm&quot;>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Service:</span>
                    <span className=&quot;text-white&quot;>{service?.title || &quot;Custom Service&quot;}</span>
                  </div>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Budget:</span>
                    <span className=&quot;text-white&quot;>{BUDGET_RANGES.find(b => b.value === formData.budget)?.label}</span>
                  </div>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Timeline:</span>
                    <span className=&quot;text-white&quot;>{TIMELINE_OPTIONS.find(t => t.value === formData.timeframe)?.label}</span>
                  </div>
                  {startDate && (
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>Start Date:</span>
                      <span className=&quot;text-white&quot;>{format(startDate, &quot;PPP&quot;)}</span>
                    </div>
                  )}
                  {endDate && (
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>End Date:</span>
                      <span className=&quot;text-white&quot;>{format(endDate, &quot;PPP&quot;)}</span>
=======
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Service:</span>
                    <span className="text-white">{_service?.title || "Custom Service"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Budget:</span>
                    <span className="text-white">{_BUDGET_RANGES.find(b => b.value === formData.budget)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Timeline:</span>
                    <span className="text-white">{_TIMELINE_OPTIONS.find(t => t.value === formData.timeframe)?.label}</span>
                  </div>
                  {_startDate && (
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Start Date:</span>
                      <span className="text-white">{format(startDate, _"PPP")}</span>
                    </div>
                  )}
                  {_endDate && (
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">End Date:</span>
                      <span className="text-white">{format(endDate, _"PPP")}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

<<<<<<< HEAD
          <DialogFooter className=&quot;flex-col sm:flex-row sm:justify-between sm:space-x-2&quot;>
            {currentStep !== 'details' && (
=======
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">
            {_currentStep !== 'details' && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Button
                type=&quot;button&quot;
                variant=&quot;outline&quot;
                onClick={prevStep}
                className=&quot;border-zion-blue-light text-white hover:bg-zion-blue-light&quot;
              >
                Previous
              </Button>
            )}
            
<<<<<<< HEAD
            <div className={cn(&quot;flex gap-2&quot;, currentStep === 'details' && &quot;ml-auto&quot;)}>
              <Button
                type=&quot;button&quot;
                variant=&quot;outline&quot;
                onClick={() => onOpenChange(false)}
                className=&quot;border-zion-blue-light text-white hover:bg-zion-blue-light&quot;
=======
            <div className={_cn("flex gap-2", _currentStep === 'details' && "ml-auto")}>
              <Button
                type="button"
                variant="outline"
                onClick={_() => onOpenChange(false)}
                className="border-zion-blue-light text-white hover:bg-zion-blue-light"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Cancel
              </Button>
              
              {_currentStep !== 'contact' ? (
                <Button 
                  type=&quot;button&quot; 
                  onClick={nextStep}
                  className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
                >
                  Next
                </Button>
              ) : (
                <Button 
<<<<<<< HEAD
                  type=&quot;submit&quot;
                  disabled={isSubmitting}
                  className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
                >
                  {isSubmitting ? &quot;Submitting...&quot; : &quot;Submit Request&quot;}
=======
                  type="submit"
                  disabled={_isSubmitting}
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                >
                  {_isSubmitting ? "Submitting..." : "Submit Request"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Button>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
