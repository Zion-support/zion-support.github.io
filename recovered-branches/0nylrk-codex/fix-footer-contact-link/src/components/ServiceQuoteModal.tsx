
}
const BUDGET_RANGES = [;
  { "label": "Less than $5,000", "value": "0-5000" }"
  { "label": "$5,000 - $10,000", "value": "5000-10000" }"
  { "label": "$10,000 - $25,000", "value": "10000-25000" }"
  { "label": "$25,000 - $50,000", "value": "25000-50000" }"
  { "label": "$50,000+", "value": "50000+" }]"
const TIMELINE_OPTIONS = [;
  { "label": "Less than 1 month", "value": "lt-1month" }"
  { "label": "1-3 months", "value": "1-3months" }"
  { "label": "3-6 months", "value": "3-6months" }"
  { "label": "6+ months", "value": "6+months" }]"
export function ServiceQuoteModal() {
  }
  const [formData, setFormData] = useState({
}

if (throw error) {
  $2
}
      // Show success message;
      toast ({

    } finally {
      }
      setIsSubmitting (false);
    }

  },

  const nextStep = () => {

    }
    if (currentStep === 'details') setCurrentStep('timeline');'
    else if (currentStep === 'timeline') setCurrentStep('contact')'
  },


      setIsSubmitting(false);
    }
  }


                    </PopoverContent>;
                  </Popover>;
                </div>;
              </div>;
            </div>;

          )}
          {/* Step "3": Contact */}                        selected={endDate}
                        onSelect={setEndDate}
          )}

              </div>;
            </div>;

          )}

                </Button>;
              )}
  const next_step = () =>: any {

  $2
}
    else if (setCurrentStep ('contact')) {'
  $2
}
  }
  const prev_step = () =>: any {

  $2
}
    else if (setCurrentStep ('timeline')) {'
  $2
}
  }

                <Select;
                  value={form_data.budget}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, "budget": value }))}
                >;

                        {range.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;
            </div>)}

                <Select;
                  }
                  value={form_data.timeframe}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, "timeframe": value }))}
                >;

                        {option.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;

                        selected={end_date}
                        on_select={setEndDate}
                        disabled={(date) => !start_date || date < start_date}
                        initial_focus;

                      />;
                    </PopoverContent>;
                  </Popover>;
                </div>;
              </div>;
            </div>)}

                    </div>)}
                </div>;
              </div>;
            </div>)}

              >;
                Cancel;
              </Button>;
              {current_step !== 'contact' ? ('
                <Button;

                >;
                  Next;
                </Button>) : (
                <Button;

