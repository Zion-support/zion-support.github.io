
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
    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">;
        <DialogHeader>;
          <DialogTitle className="text-2xl font-semibold text-white">;
            Request Service Quote;
          </DialogTitle>;
        </DialogHeader>;

          {currentStep === 'details' && (;
            <div className="space-y-4">;
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">;
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>;
                <p className="text-white text-lg">{service?.title || "Custom Service"}</p>;
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>;
              </div>;

                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;

                  </SelectContent>;
                </Select>;
              </div>;
            </div>;
          )}

          {currentStep === 'timeline' && (;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label className="text-white">Project Timeline</Label>;

                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your timeline" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;

                      </SelectItem>;
                    ))}
                  </SelectContent>;
                </Select>;
              </div>;

              <div className="grid grid-cols-2 gap-4">;
                <div className="space-y-2">;
                  <Label className="text-white">Expected Start Date</Label>;
                  <Popover>;
                    <PopoverTrigger asChild>;

                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;

                <div className="space-y-2">;
                  <Label className="text-white">Expected End Date</Label>;
                  <Popover>;
                    <PopoverTrigger asChild>;

                        selected={endDate}
                        onSelect={setEndDate}
                        disabled={(date) => !startDate || date < startDate}
                        initialFocus;
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white";
                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
              </div>;
            </div>;
          )}

          {currentStep === 'contact' && (;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label htmlFor="email" className="text-white">Contact Email</Label>;

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">;
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>;
                <div className="space-y-2 text-sm">;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Service:</span>;
                    <span className="text-white">{service?.title || "Custom Service"}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-zion-slate-light">Budget:</span>;

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

                </div>;
              </div>;
            </div>;
          )}

                onClick={() => onOpenChange(false)}
                className="border-zion-blue-light text-white hover:bg-zion-blue-light";
              >;
                Cancel;
              </Button>;

            </div>;
          </DialogFooter>;
        </form>;
      </DialogContent>;

}