  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
    try {
      // Call Supabase function to process the quote;
      const { data, error } = await supabase.functions.invoke ('process - quote', {
        body: {
          service: service ? {
            endDate: endDate?.toISOString()}
        }
      });
      if (error) throw error;
    } finally {
      setIsSubmitting (false);
    }
  }
                <Textarea
                  id="description"
                  name="description"
                  value={formData && formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your project needs in detail..."
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none"
                  required
                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your budget range" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;
                    {BUDGET_RANGES && BUDGET_RANGES.map((range) => (;
                      <SelectItem key={range && range.value} value={range && range.value} className="text-white hover:bg-zion-blue-light">;
                        {range && range.label}
                      </SelectItem>;
                    ))}
                  </SelectContent>;
                </Select>;
              </div>;
            </div>;
          )}
          {/* Step 2: Timeline */}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}
                >;
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select your timeline" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;
                    {TIMELINE_OPTIONS && TIMELINE_OPTIONS.map((option) => (;
                      <SelectItem key={option && option.value} value={option && option.value} className="text-white hover:bg-zion-blue-light">;
                        {option && option.label}
                      </SelectItem>;
                    ))}
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
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white"
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
          {currentStep === 'contact' && (;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <Label htmlFor="email" className="text-white">Contact Email</Label>;
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData && formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email && email.com"
                  className="bg-zion-blue-dark border-zion-blue-light text-white"
                  required
                  )}
                  {endDate && (;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">End Date:</span>;
                      <span className="text-white">{format(endDate, "PPP")}</span>;
                    </div>;
                  )}
                </div>;
              </div>;
            </div>;
          )}
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="border-zion-blue-light text-white hover:bg-zion-blue-light">;
                Previous;
              </Button>;
            )}
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>;
              )}
            </div>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
=======
    </Dialog>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
