

export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (

              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "fixed"
                  ? "bg-zion-purple/20 border-zion-purple"
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}

              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "flexible"
                  ? "bg-zion-purple/20 border-zion-purple"
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => updateFormData({ timeline: "flexible" })}
            >
              <h4 className="font-medium text-white">Flexible Timeline</h4>
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>
            </div>
          </div>

              <div>
                <Label className='block mb-2 text-zion-slate-light'>
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button

                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar

                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className='block mb-2 text-zion-slate-light'>
                  End Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button

                      )}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent
                    className='w-auto p-0 bg-zion-blue-dark border border-zion-blue-light'
                    align='start'>;
                    <Calendar

                      selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus
