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

interface ServiceQuoteModalProps {

interface ServiceQuoteModalProps {
  // TODO: Implement

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
                  {endDate && (              </div>;
            </div>;

