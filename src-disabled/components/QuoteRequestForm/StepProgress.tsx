
                )}>;
                {status === 'complete' ? (;
                  <CheckIcon className='h-4 w-4' />;
                ) : (;
                  <span className='text-xs'>;
                    {steps && steps.findIndex(s => s && s.id === step && step.id) + 1}
                  </span>;
                )}
              </div>;
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>}/> </div>
}className=" flex flex-col items-center relative"> <div) : (<span className=" text-xs" > {
  steps.findIndex (s => s.id === step.id) + 1
}</span>)
}</div> <span)
}> {
  step.label
}</span> </div>)
})
}</div> </div>)
}"          )
        })}
      </div>
    </div>
  )
}

                ),}>;
                {step && step.label}

;

              <span 
                className={cn(
                  "text-xs mt-2 font-medium",
                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
                  "text-zion-slate-light"
import { QuoteRequestSteps } from "../QuoteRequestForm",;
import { CheckIcon } from 'lucide-react';
import { cn } from "@/lib/utils",;
interface StepProgressProps {;
  currentStep: QuoteRequestSteps;
}
;

export function StepProgress({ currentStep }: StepProgressProps) {;
  const steps: { id: QuoteRequestSteps, label: string }[] = [;
    { id: "service", label: "Service" },;
    { id: "details", label: "Details" },;
    { id: "timeline", label: "Timeline" },;
    { id: "budget", label: "Budget" },;
    { id: "summary", label: "Summary" }"
  ],;
  const getStepStatus = (stepId:,  QuoteRequestSteps) => {;,
    const stepOrder = steps.findIndex(s => s.id ===,  stepId),;
    const currentStepOrder = steps.findIndex(s => s.id ===,  currentStep),;
    if (stepOrder <,  currentStepOrder) return "complete",;
    if (stepOrder ===,  currentStepOrder) return "current",;
    { id: "summary", label: "Summary" }
  ],;
  const getStepStatus = (stepId: QuoteRequestSteps) => {;
    const stepOrder = steps.findIndex(s => s.id === stepId),;
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),;
    if (stepOrder < currentStepOrder) return "complete",;
    if (stepOrder === currentStepOrder) return "current",;

  (steps && steps.findIndex (s => s && s.id === currentStep) / (steps && steps.length - 1) ) * 100 ;
}%` ;

}/> </div> ;
}className=" flex flex-col items-center relative"> <div) : (<span className=" text-xs" > {;
  steps && steps.findIndex (s => s && s.id === step && step.id) + 1 ;
}</span>) ;
}</div> <span)
}> {;
  step && step.label ;
}</span> </div>) ;
});
}</div> </div>) ;
}"          );
        })}
      </div>;
    </div>;
  );
}
  const getStepStatus = (step_id:,  QuoteRequestSteps) =>: any {,
    const step_order = steps.find_index (string => s.id ===,  step_id);
    const currentStepOrder = steps.find_index (string => s.id ===,  current_step);
    // Check condition
if (return 'complete') {'
  $2
}
    // Check condition
if (return 'current') {'
  $2
}
    return 'upcoming';
  const getStepStatus = (step_id: QuoteRequestSteps, ) =>: any {
    const step_order = steps.find_index (string => s.id ===,  step_id),
    const currentStepOrder = steps.find_index (string => s.id ===,  current_step),
    // Check condition
if (return "complete", ) {"
  $2
}
    // Check condition
if (return "current", ) {"
  $2
}

    return "upcoming";
  },;
  return (;
    <div className="relative">;
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">;
        <div;

          }}
        />;
      </div>;
      <div className="flex justify-between relative">;
        {steps.map((step) => {;
          const status = getStepStatus(step.id),;
          return (;
            <div key={step.id} className="flex flex-col items-center relative">;
              <div;

              >;
                {step.label}
              </span>;
            </div>;
          );
        })}
      </div>;

}
;]
}
;
;

);
        })}
      </div>
    </div>
  );
}
