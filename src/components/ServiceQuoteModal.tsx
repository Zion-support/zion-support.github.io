import { useState  } from 'react';
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
import { ProductListing } from "@/types/listings";
import { toast  } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import {logErrorToProduction} from '@/utils/productionLogger';
interface ServiceQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: ProductListing | null
}

const BUDGET_RANGES = null;
                          "bg-zion-blue-dark border-zion-blue-light text-white"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                        {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        disabled={(date) => !startDate || date < startDate}
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
                <Input
                  id="email"
                  name="email"
                  type="email"
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
                    <span className="text-white">{service?.title || "Custom Service"}</span>
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
                  )}
                  {endDate && (
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">End Date:</span>
                      <span className="text-white">{format(endDate, "PPP")}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">
            {currentStep !== 'details' && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
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
  );

});
if (error) throw error;
//Show success message //Close the modal and reset form onOpenChange (false);
setFormData ({';
  description: '';';
email: '';';
budget: BUDGET RANGES[0]?.value || '0-5000';';
timeframe: TIMELINE OPTIONS[0]?.value || 'lt-1month' ;
});
setStartDate (new Date () );
setEndDate (undefined);';
setCurrentStep ('details') ;
}catch (error) {';
  logErrorToProduction ('Error submitting quote:', {;
  data: error ;
});
toast ({;
  ;
}finally {;
  setIsSubmitting (false) ;

};
const nextStep = () => {';
  if (currentStep === 'details') setCurrentStep ('timeline');';
else if (currentStep === 'timeline') setCurrentStep ('contact') ;
};
const prevStep = () => {';
  if (currentStep === 'timeline') setCurrentStep ('details');';
else if (currentStep === 'contact') setCurrentStep ('timeline') ;
};

}> <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]" > text-2xl font-semibold text-white"> Request Service Quote </DialogTitle> </DialogHeader> </div> <div className=" space-y-2"> <Label htmlFor=" description"className=" text-white">Project Description</Label> <Textarea required /> </div> <div className=" space-y-2"> <Label htmlFor=" budget"className=" text-white">Estimated Budget</Label> <Select value= {;
  formData.budget ;
}onValueChange= {;
  (value) => setFormData (prev => ({;
  ...prev, budget: value ;
}) ) ";
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your budget range"/> </SelectTrigger> </SelectItem>) ) ;
}</SelectContent> </Select> </div> </div>) ;
}<Select value= {;
  formData.timeframe ;
}onValueChange= {;
  (value) => setFormData (prev => ({;
  ...prev, timeframe: value ;
}) ) ";
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your timeline"/> </SelectTrigger> </SelectItem>) ) ";
}</SelectContent> </Select> </div> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-2"> <Label className=" text-white">Expected Start Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> <div className=" space-y-2"> <Label className=" text-white">Expected End Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> </div> </div>) ";
}<Input id=" email"name=" email"type=" email"value= {;
  formData.email ;
}required /> </div> </div>) ;
}</div> </div> </div>) ";
}<Button type=" button"variant=" outline"onClick={;
  prevStep ";
}className=" border-zion-blue-light text-white hover:bg-zion-blue-light"> Previous </Button>) ;
}> Cancel </Button> {'";
  currentStep !== 'contact' ? (<Button type=" button"onClick={;
  nextStep ";
}className=" bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" > Next </Button>) : (<Button </Button>) ;
}</div> </DialogFooter> </form> </DialogContent> </Dialog>) ;
}'"
}
}
