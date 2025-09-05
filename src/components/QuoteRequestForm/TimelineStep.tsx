

interface TimelineStepProps {_formData: QuoteFormData;
  updateFormData: (_data: Partial<QuoteFormData>) => void;}

export function TimelineStep(_{_formData, _updateFormData}: TimelineStepProps) {_return (_<div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div 
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "fixed" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"}`}
              onClick={_() => updateFormData({ timeline: "fixed"})}
            >
              <h4 className="font-medium text-white">Fixed Dates</h4>
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>
            </div>
            
            <div 
              className={_`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "flexible" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"}`}
              onClick={_() => updateFormData({ timeline: "flexible"})}
            >
              <h4 className="font-medium text-white">Flexible Timeline</h4>
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>
            </div>
          </div>
          
          {_formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark", _!formData.startDate && "text-zion-slate-light"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {_formData.startDate ? format(formData.startDate, _"PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar
                      mode="single"
                      selected={_formData.startDate}
                      onSelect={_(_date) => updateFormData({ startDate: date})}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label className="block mb-2 text-zion-slate-light">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={_cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark", _!formData.endDate && "text-zion-slate-light"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {_formData.endDate ? format(formData.endDate, _"PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar
                      mode="single"
                      selected={_formData.endDate}
                      onSelect={_(_date) => updateFormData({ endDate: date})}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      disabled={_(_date) => date < (formData.startDate || new Date())}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
