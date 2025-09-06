
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