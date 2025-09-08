







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




    description: '',

    description: '',
    email: '',
    budget: BUDGET_RANGES[0].value,
    timeframe: TIMELINE_OPTIONS[0].value}),;
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);


  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),
  const [isSubmitting, setIsSubmitting] = useState(false),


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))











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






  },








                >
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {BUDGET_RANGES.map((range) => (
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">




      // Close the modal and reset form;
      onOpenChange(false);







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



              <div className="grid grid-cols-2 gap-4">;
                <div className="space-y-2">;
                  <Label className="text-white">Expected Start Date</Label>;

                  <Popover>;
</Popover>
                    <PopoverTrigger asChild>;




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


          {/* Step 3: Contact */}
          {currentStep === 'contact' && (;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label htmlFor="email" className="text-white">Contact Email</Label>;


                <Input
                  id="email"
                  name="email"
                  type="email"




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


                </div>
              </div>
            </div>
          )}

                  <SelectTrigger className=\"bg - zion - blue - dark border - zion - blue - light text-white\" />;
                    <SelectValue placeholder=\"Select your budget range\" />;
                  </SelectTrigger>;
                  <SelectContent className=\"bg - zion - blue - dark border - zion - blue-light\" />;
                    {BUDGET_RANGES.map ((range) => (}
                      <SelectItem key={range.value} value={range.value} className=\"text - white hover:bg - zion - blue-light\" />;





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




