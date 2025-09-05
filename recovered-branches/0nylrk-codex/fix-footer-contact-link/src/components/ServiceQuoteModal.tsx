

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
    description: '', _email: '', _budget: BUDGET_RANGES[0].value, _timeframe: TIMELINE_OPTIONS[0].value});
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const _handleInputChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {_const { name, _value} = e.target;
    setFormData(prev => ({_...prev, _[name]: value}));
  };

  const _handleSubmit = async (_e: React.FormEvent<HTMLFormElement>) => {_e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call Supabase function to process the quote
      const { data, _error} = await supabase.functions.invoke(_'process-quote', _{_body: {
          service: service ? {
            id: service.id, _title: service.title, _category: service.category} : null, _quoteDetails: {_...formData, _startDate: startDate?.toISOString(), _endDate: endDate?.toISOString()}
        }
      });

      if (error) throw error;

      // Show success message
      toast({_title: "Quote Request Submitted!", _description: "We've sent your request to the service provider. They will contact you soon."});

      // Close the modal and reset form
      onOpenChange(false);
      setFormData({_description: '', _email: '', _budget: BUDGET_RANGES[0].value, _timeframe: TIMELINE_OPTIONS[0].value});
      setStartDate(new Date());
      setEndDate(undefined);
      setCurrentStep('details');
    } catch (error) {_toast({
        title: "Error", _description: "There was an error submitting your quote request. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };

  const _nextStep = () => {_if (currentStep === 'details') setCurrentStep('timeline');
    else if (currentStep === 'timeline') setCurrentStep('contact');};

  const _prevStep = () => {_if (currentStep === 'timeline') setCurrentStep('details');
    else if (currentStep === 'contact') setCurrentStep('timeline');};

  return (_<Dialog open={_open} onOpenChange={_onOpenChange}>
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-white">
            Request Service Quote
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={_handleSubmit} className="space-y-6">
          {_/* Step 1: Service Details */}
          {_currentStep === 'details' && (
            <div className="space-y-4">
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>
                <p className="text-white text-lg">{service?.title || "Custom Service"}</p>
                <p className="text-zion-slate-light text-sm mt-1">{_service?.category}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">Project Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={_formData.description}
                  onChange={_handleInputChange}
                  placeholder="Describe your project needs in detail..."
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white">Estimated Budget</Label>
                <Select 
                  value={_formData.budget} 
                  onValueChange={_(value) => setFormData(prev => ({ ...prev, _budget: value}))}
                >
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {_BUDGET_RANGES.map(_(range) => (
                      <SelectItem key={range.value} value={_range.value} className="text-white hover:bg-zion-blue-light">
                        {_range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {_/* Step 2: Timeline */}
          {_currentStep === 'timeline' && (_<div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white">Project Timeline</Label>
                <Select 
                  value={formData.timeframe}
                  onValueChange={_(value) => setFormData(prev => ({ ...prev, _timeframe: value}))}
                >
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="Select your timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {_TIMELINE_OPTIONS.map(_(option) => (
                      <SelectItem key={option.value} value={_option.value} className="text-white hover:bg-zion-blue-light">
                        {_option.label}
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
                        variant={_"outline"}
                        className={_cn(
                          "justify-start text-left font-normal w-full", _"bg-zion-blue-dark border-zion-blue-light text-white"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {_startDate ? format(startDate, _"PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">
                      <Calendar
                        mode="single"
                        selected={_startDate}
                        onSelect={_setStartDate}
                        initialFocus
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Expected End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={_"outline"}
                        className={_cn(
                          "justify-start text-left font-normal w-full", _"bg-zion-blue-dark border-zion-blue-light text-white"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {_endDate ? format(endDate, _"PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">
                      <Calendar
                        mode="single"
                        selected={_endDate}
                        onSelect={_setEndDate}
                        disabled={_(_date) => !startDate || date < startDate}
                        initialFocus
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          )}

          {_/* Step 3: Contact */}
          {_currentStep === 'contact' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Contact Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={_handleInputChange}
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">
            {_currentStep !== 'details' && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="border-zion-blue-light text-white hover:bg-zion-blue-light"
              >
                Previous
              </Button>
            )}
            
            <div className={_cn("flex gap-2", _currentStep === 'details' && "ml-auto")}>
              <Button
                type="button"
                variant="outline"
                onClick={_() => onOpenChange(false)}
                className="border-zion-blue-light text-white hover:bg-zion-blue-light"
              >
                Cancel
              </Button>
              
              {_currentStep !== 'contact' ? (
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
                  disabled={_isSubmitting}
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                >
                  {_isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
