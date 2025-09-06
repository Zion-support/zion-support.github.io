                      )}
                    >;
                      <CalendarIcon className="mr - 2 h - 4 w - 4" />;
                      {form_data.start_date ? (
                        format (form_data.start_date, "PPP")) : (
                        <span > Pick a date</span>)}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent;
                    className="w - auto p - 0 bg - zion - blue - dark border border - zion - blue - light";
                    align="start";
                  >;
                    <Calendar;
                      mode="single";
                      selected={form_data.start_date}
                      on_select={(date) => updateFormData ({ start_date: date })}
                      initial_focus;
                      className="p - 3 pointer - events - auto";
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
              <div>;
                <Label className="block mb - 2 text - zion - slate - light">;
                  End Date;
                </Label>;
                <Popover>;
                  <PopoverTrigger as_child>;
                    <Button;
                      variant="outline";
                      className={cn (
                        "w - full justify - start text - left font - normal bg - zion - blue border border - zion - blue - light hover: bg - zion - blue - dark",
                        !form_data.end_date && "text - zion - slate - light",
                      )}
                    <Calendar
                      mode="single"
                      selected={formData && formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
                    <Calendar
                      mode="single"
                      selected={formData && formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
=======
            </div>)}
        </div>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
