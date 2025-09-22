:src_backup/components/QuoteRequestForm/StepProgress.tsx
return (
    <div className='relative'>;
      <div className='absolute top-4 left-0 right-0 h-0 && 0.5 bg-zion-blue-light'>;
return (
    <div className='relative'>;
      <div className='absolute top-4 left-0 right-0 h-0 && 0.5 bg-zion-blue-light'>;
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" };
    { id: "summary", label: "Summary" }
  ];
  const getStepStatus = null;
                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
    { id: "service", label: "Service" }
    { id: "details", label: "Details" }
    { id: "timeline", label: "Timeline" }
    { id: "budget", label: "Budget" }
    { id: "summary", label: "Summary" }
  const getStepStatus = (stepId: QuoteRequestSteps) => {
    const stepOrder = steps.findIndex(s => s.id === stepId);
    const currentStepOrder = steps.findIndex(s => s.id === currentStep);
if (stepOrder < currentStepOrder) return 'complete';
    if (stepOrder === currentStepOrder) return 'current';
    return 'upcoming';
  };

  return (
    <div className='relative'>
      <div className='absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <div
          className='absolute h-full bg-zion-purple transition-all duration-500''
          style={{
:src_backup/components/QuoteRequestForm/StepProgress.tsx

currentStep: QuoteRequestSteps;
export function StepProgress({ currentStep }: StepProgressProps) {;
  const steps: { id: QuoteRequestSteps; label: string }[] = [
    { id: 'service', label: 'Service' },
    { id: 'details', label: 'Details' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'budget', label: 'Budget' },
    { id: 'summary', label: 'Summary' },  ];  const steps: { id: QuoteRequestSteps, label: string }[] = [

import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from 'lucide-react'
import { cn } from "@/lib/utils",
interface StepProgressProps {
  currentStep: QuoteRequestSteps
}

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps, label: string }[] = [

:src/components/QuoteRequestForm/StepProgress.tsx
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }
  ],

  const getStepStatus = (stepId: QuoteRequestSteps) => {

:src/components/QuoteRequestForm/StepProgress.tsx
    const stepOrder = steps.findIndex(s => s.id === stepId),
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),

    if (stepOrder < currentStepOrder) return "complete",
    if (stepOrder === currentStepOrder) return "current",
    return "upcoming"
  currentStep: QuoteRequestSteps;,
export function StepProgress({ currentStep }:,  StepProgressProps) {;,
  const steps: { id: QuoteRequestSteps; label: string }[] = [,
    { id: 'service', label: 'Service' },'
    { id: 'details', label: 'Details' },'
    { id: 'timeline', label: 'Timeline' },'
    { id: 'budget', label: 'Budget' },'
    { id: 'summary', label: 'Summary' },  ];  const steps: { id: QuoteRequestSteps, label: string }[] = [',
import { QuoteRequestSteps } from "../QuoteRequestForm","
import { CheckIcon } from 'lucide-react''
import { cn } from "@/lib/utils","
interface StepProgressProps {
  currentStep: QuoteRequestSteps
}
export function StepProgress({ currentStep }:,  StepProgressProps) {
  const steps: { id: QuoteRequestSteps, label: string }[] = [,
    { id: "service", label: "Service" },"
    { id: "details", label: "Details" },"
    { id: "timeline", label: "Timeline" },"
    { id: "budget", label: "Budget" },"
    { id: "summary", label: "Summary" }"
  ],
  const getStepStatus = (stepId:,  QuoteRequestSteps) => {,
    const stepOrder = steps.findIndex(s => s.id ===,  stepId),
    const currentStepOrder = steps.findIndex(s => s.id ===,  currentStep),
    if (stepOrder <,  currentStepOrder) return "complete","
    if (stepOrder ===,  currentStepOrder) return "current","
    return "upcoming""
  },
  return (
    <div className="relative">"
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">"
        <div
          className="absolute h-full bg-zion-purple transition-all duration-500""
          style={{
            width: `${(steps.findIndex(s => s.id ===,  currentStep) / (steps.length - 1)) * 100}%``
          }}
        />
      </div>
:src_backup/components/QuoteRequestForm/StepProgress.tsx

      <div className="flex justify-between relative">
        {steps.map((step) => {
          const status = getStepStatus(step.id),
          return (
            <div key={step.id} className="flex flex-col items-center relative">
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors",
                  status === "complete" ? "bg-zion-purple text-white" : 
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 
                  "bg-zion-blue-light text-zion-slate-light"
                )}
              >
                {status === "complete" ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>

            width: `${(steps && steps.findIndex(s => s && s.id === currentStep) / (steps && steps.length - 1)) * 100}%`,;
          }}
        />;
      </div>;
      <div className='flex justify-between relative'>;
        {steps && steps.map(step => {;
          const status = getStepStatus(step && step.id);
:src_backup/components/QuoteRequestForm/StepProgress.tsx

          return (
            <div key={step && step.id} className='flex flex-col items-center relative'>;
              <div
                className={cn(
:src_backup/components/QuoteRequestForm/StepProgress.tsx
                  'w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors'
                  status === 'complete'
                    ? 'bg-zion-purple text-white'
                    : status === 'current'
                      ? 'bg-zion-cyan border-2 border-zion-purple'
                      : 'bg-zion-blue-light text-zion-slate-light'
                )}>;
                {status === 'complete' ? (;
                  <CheckIcon className='h-4 w-4' />;
                ) : (;
                  <span className='text-xs'>;
                    {steps && steps.findIndex(s => s && s.id === step && step.id) + 1}
                  </span>;
                )}
              </div>;
:src_backup/components/QuoteRequestForm/StepProgress.tsx

              <span
                className={cn(
                  'text-xs mt-2 font-medium'
                  status === 'complete'
                    ? 'text-zion-cyan'
                    : status === 'current'
                      ? 'text-white'
:src/components/QuoteRequestForm/StepProgress.tsx
: 'text-zion-slate-light'                )}                  "text-xs mt-2 font-medium"

                  "text-zion-slate-light"

                )}
              </div>
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

}/> </div>

:src/components/QuoteRequestForm/StepProgress.tsx


                      : 'text-zion-slate-light'
origin/cursor/automate-test-improve-and-merge-code-2533
                  "text-zion-slate-light"

                )}
              <span
                className = {cn(
                  "text-xs mt-2 font-medium"
                  status === "complete" ? "text-zion-cyan" :
                  status === "current" ? "text-white" :
                  "text-zion-slate-light"
:src_backup/components/QuoteRequestForm/StepProgress.tsx
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>
:src_backup/components/QuoteRequestForm/StepProgress.tsx

}/> </div>
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

:src_backup/components/QuoteRequestForm/StepProgress.tsx

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
:src_backup/components/QuoteRequestForm/StepProgress.tsx
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

  (steps && steps.findIndex (s => s && s.id ===,  currentStep) / (steps && steps.length - 1) ) * 100 ;
}%` ;`
}
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
}) ;
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
:src_backup/components/QuoteRequestForm/StepProgress.tsx
          className="absolute h-full bg-zion-purple transition-all duration-500";
          style={{;
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`;
          }}
        />;
      </div>;
      <div className="flex justify-between relative">;
        {steps.map((step) => {;
          const status = getStepStatus(step.id),;
          return (;
            <div key={step.id} className="flex flex-col items-center relative">;
              <div;
:src_backup/components/QuoteRequestForm/StepProgress.tsx
                className={cn(;
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors";
                  status === "complete" ? "bg-zion-purple text-white" :;
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" :;
                  "bg-zion-blue-light text-zion-slate-light";
                )}
              >;
                {status === "complete" ? (;
                  <CheckIcon className="h-4 w-4" />;
                ) : (;
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>;
                )}
              </div>;
              <span;
                className={cn(;
                  "text-xs mt-2 font-medium";
                  status === "complete" ? "text-zion-cyan" :;
                  status === "current" ? "text-white" :;
                  "text-zion-slate-light";
                )}
              >;
                {step.label}
              </span>;
            </div>;
          );
        })}
      </div>;
:src_backup/components/QuoteRequestForm/StepProgress.tsx
    </div>;
  );
}
;]
}
;
;
:src_backup/components/QuoteRequestForm/StepProgress.tsx

                ),}
              >
                {step.label}
              </span>
            </div>
);
        })}
      </div>
    </div>
  );
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100 ;
}%` ;

}/> </div> 
}className=" flex flex-col items-center relative"> <div) : (<span className=" text-xs" > {;
  steps.findIndex (s => s.id === step.id) + 1 ;
}</span>) ;
}</div> <span) ;
}> {;
  step.label ;
}</span> </div>) ;
}) ;
}</div> </div>) ;
}"
:src/components/QuoteRequestForm/StepProgress.tsx
