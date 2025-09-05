
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
import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",interface ServiceQuoteModalProps {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  service: ProductListing | null
}

const BUDGETRANGES = [
  { label: "Less than $5,000", value: "0-5000" },
  { label: "$5,000 - $10,000", value: "5000-10000" },
  { label: "$10,000 - $25,000", value: "10000-25000" },
  { label: "$25,000 - $50,000", value: "25000-50000" },
  { label: "$50,000+", value: "50000+" }],

const TIMELINEOPTIONS = [
  { label: "Less than 1 month", value: "lt-1month" },
  { label: "1-3 months", value: "1-3months" },
  { label: "3-6 months", value: "3-6months" },
  { label: "6+ months", value: "6+months" }],
export function ServiceQuoteModal({ open, onOpenChange, service }: ServiceQuoteModalProps) {
  const [formData, setFormData] = useState({
    description: '',
    email: '',
    budget: BUDGETRANGES[0].value,
    timeframe: TIMELINEOPTIONS[0].value}),
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

interface ServiceQuoteModalProps {open: boolean,
  onOpenChange: (open: boolean) => void;
  service: ProductListing | null}

const BUDGET_RANGES = [
  {label: "Less than $5, 000", value: "0-5000"},
  {label: "$5, 000 - $10, 000", value: "5000-10000"},
  {label: "$10, 000 - $25, 000", value: "10000-25000"},
  {label: "$25, 000 - $50, 000", value: "25000-50000"},
  {label: "$50, 000+", value: "50000+"}];

const TIMELINE_OPTIONS = [
  {label: "Less than 1 month", value: "lt-1month"},
  {label: "1-3 months", value: "1-3months"},
  {label: "3-6 months", value: "3-6months"},
  {label: "6+ months", value: "6+months"}];

export function ServiceQuoteModal(_{open, onOpenChange, service}: ServiceQuoteModalProps) {const [formData, setFormData] = useState({
    description: '', email: '', budget: BUDGETRANGES[0].value, timeframe: TIMELINEOPTIONS[0].value});
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {const { name, value} = e.target;
    setFormData(prev => ({_...prev, _[name]: value}))
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call Supabase function to process the quote,
const { data, error} = await supabase.functions.invoke(_'process-quote', _{body: {
          service: service ? {
            id: service.id, title: service.title, category: service.category} : null, quoteDetails: {_...formData, startDate: startDate?.toISOString(), endDate: endDate?.toISOString()}
        }
      }),

      if (error) throw error,

      // Show success message,
toast({
        title: "Quote Request Submitted!",
        description: "We've sent your request to the service provider. They will contact you soon."}),
      // Close the modal and reset form,
onOpenChange(false),
      setFormData({
        description: '',
        email: '',
        budget: BUDGETRANGES[0].value,
        timeframe: TIMELINEOPTIONS[0].value}),
      setStartDate(new Date()),
      setEndDate(undefined),
      setCurrentStep('details')
    } catch (error) {
      console.error("Error submitting quote:", error),
      toast({
        title: "Error",
        description: "There was an error submitting your quote request. Please try again.",
        variant: "destructive"})    } finally {
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
      toast({title: "Quote Request Submitted!", description: "We've sent your request to the service provider. They will contact you soon."});

      // Close the modal and reset form,
onOpenChange(false);
      setFormData({description: '', email: '', budget: BUDGETRANGES[0].value, timeframe: TIMELINEOPTIONS[0].value});
      setStartDate(new Date());
      setEndDate(undefined);
      setCurrentStep('details')
    } catch (error) {toast({
        title: "Error", description: "There was an error submitting your quote request. Please try again.", variant: "destructive"})
    } finally {setIsSubmitting(false)}
  };

  const nextStep = () => {if (currentStep === 'details') setCurrentStep('timeline');
    else if (currentStep === 'timeline') setCurrentStep('contact')};

  const prevStep = () => {if (currentStep === 'timeline') setCurrentStep('details');
    else if (currentStep === 'contact') setCurrentStep('timeline')};

  return (_<Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className=&quot;text-2xl font-semibold text-white&quot;>
            Request Service Quote
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
          {/* Step 1: Service Details */}
          {currentStep === 'details' && (
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light&quot;>
                <h3 className=&quot;font-medium text-zion-cyan mb-2&quot;>Selected Service</h3>
                <p className=&quot;text-white text-lg&quot;>{service?.title || &quot;Custom Service&quot}</p>
                <p className=&quot;text-zion-slate-light text-sm mt-1&quot;>{service?.category}</p>              </div>

              <div className=&quot;space-y-2&quot;>
                <Label htmlFor=&quot;description&quot; className=&quot;text-white&quot;>Project Description</Label>
                <Textarea,
id=&quot;description&quot;
                  name=&quot;description&quot;
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder=&quot;Describe your project needs in detail...&quot;
                  className=&quot;h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none&quot;                  required
                />
              </div>

              <div className=&quot;space-y-2&quot;>
                <Label htmlFor=&quot;budget&quot; className=&quot;text-white&quot;>Estimated Budget</Label>
                <Select,
value={formData.budget} 
                  onValueChange={_(value) => setFormData(prev => ({ ...prev, budget: value}))}
                >
                  <SelectTrigger className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;>
                    <SelectValue placeholder=&quot;Select your budget range&quot; />
                  </SelectTrigger>
                  <SelectContent className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
                    {BUDGETRANGES.map((range) => (
                      <SelectItem key={range.value} value={range.value} className=&quot;text-white hover:bg-zion-blue-light&quot;>
                        {range.label}                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 2: Timeline */}
          {currentStep === 'timeline' && (
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;space-y-2&quot;>
                <Label className=&quot;text-white&quot;>Project Timeline</Label>                <Select,
value={formData.timeframe}
                  onValueChange={_(value) => setFormData(prev => ({ ...prev, timeframe: value}))}
                >
                  <SelectTrigger className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;>
                    <SelectValue placeholder=&quot;Select your timeline&quot; />
                  </SelectTrigger>
                  <SelectContent className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
                    {TIMELINEOPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value} className=&quot;text-white hover:bg-zion-blue-light&quot;>
                        {option.label}                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className=&quot;grid grid-cols-2 gap-4&quot;>
                <div className=&quot;space-y-2&quot;>
                  <Label className=&quot;text-white&quot;>Expected Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button,
variant={&quot;outline&quot}
                        className={cn(
                          &quot;justify-start text-left font-normal w-full&quot;,
                          &quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;
                        )}
                      >
                        <CalendarIcon className=&quot;mr-2 h-4 w-4&quot; />
                        {startDate ? format(startDate, &quot;PPP&quot;) : <span>Pick a date</span>}                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className=&quot;w-auto p-0 bg-zion-blue-dark border-zion-blue-light&quot;>
                      <Calendar,
mode=&quot;single&quot;
                        selected={startDate}
                        onSelect={setStartDate}                        initialFocus,
className=&quot;p-3 pointer-events-auto bg-zion-blue-dark text-white&quot;
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className=&quot;space-y-2&quot;>
                  <Label className=&quot;text-white&quot;>Expected End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button,
variant={&quot;outline&quot}
                        className={cn(
                          &quot;justify-start text-left font-normal w-full&quot;,
                          &quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;
                        )}
                      >
                        <CalendarIcon className=&quot;mr-2 h-4 w-4&quot; />
                        {endDate ? format(endDate, &quot;PPP&quot;) : <span>Pick a date</span>}                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className=&quot;w-auto p-0 bg-zion-blue-dark border-zion-blue-light&quot;>
                      <Calendar,
mode=&quot;single&quot;
                        selected={endDate}
                        onSelect={setEndDate}
                        disabled={(date) => !startDate || date < startDate}                        initialFocus,
className=&quot;p-3 pointer-events-auto bg-zion-blue-dark text-white&quot;
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact */}
          {currentStep === 'contact' && (
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;space-y-2&quot;>
                <Label htmlFor=&quot;email&quot; className=&quot;text-white&quot;>Contact Email</Label>                <Input,
id=&quot;email&quot;
                  name=&quot;email&quot;
                  type=&quot;email&quot;
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=&quot;your@email.com&quot;
                  className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;                  required
                />
              </div>

              <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-md p-4&quot;>
                <h3 className=&quot;font-medium text-zion-cyan mb-2&quot;>Quote Summary</h3>
                <div className=&quot;space-y-2 text-sm&quot;>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Service:</span>
                    <span className=&quot;text-white&quot;>{service?.title || &quot;Custom Service&quot}</span>
                  </div>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Budget:</span>
                    <span className=&quot;text-white&quot;>{BUDGETRANGES.find(b => b.value === formData.budget)?.label}</span>
                  </div>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Timeline:</span>
                    <span className=&quot;text-white&quot;>{TIMELINEOPTIONS.find(t => t.value === formData.timeframe)?.label}</span>
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
                      <span className=&quot;text-white&quot;>{format(endDate, &quot;PPP&quot;)}</span>                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <DialogFooter className=&quot;flex-col sm:flex-row sm:justify-between sm:space-x-2&quot;>
            {currentStep !== 'details' && (              <Button,
type=&quot;button&quot;
                variant=&quot;outline&quot;
                onClick={prevStep}
                className=&quot;border-zion-blue-light text-white hover:bg-zion-blue-light&quot;
              >
                Previous
              </Button>
            )}
            
            <div className={cn(&quot;flex gap-2&quot;, currentStep === 'details' && &quot;ml-auto&quot;)}>
              <Button,
type=&quot;button&quot;
                variant=&quot;outline&quot;
                onClick={() => onOpenChange(false)}
                className=&quot;border-zion-blue-light text-white hover:bg-zion-blue-light&quot;              >
                Cancel
              </Button>
              
              {currentStep !== 'contact' ? (
                <Button,
type=&quot;button&quot; 
                  onClick={nextStep}
                  className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
                >
                  Next
                </Button>
              ) : (
                <Button,
type=&quot;submit&quot;
                  disabled={isSubmitting}
                  className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
                >
                  {isSubmitting ? &quot;Submitting...&quot; : &quot;Submit Request&quot}                </Button>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
