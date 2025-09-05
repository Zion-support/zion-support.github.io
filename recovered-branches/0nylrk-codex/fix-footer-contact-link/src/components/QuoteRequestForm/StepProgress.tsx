
<<<<<<< HEAD
import { QuoteRequestSteps } from "../QuoteRequestForm",;
import { CheckIcon } from "@/components/icons",;
import { cn } from "@/lib/utils",;
;
interface StepProgressProps {;
  currentStep:QuoteRequestSteps;
}
;
export function StepProgress({ currentStep } StepProgressProps) {;
  const steps:{ id:QuoteRequestSteps, label:string }[] = [;
    { id:"service", label:"Service" },;
    { id:"details", label:"Details" },;
    { id:"timeline", label:"Timeline" },;
    { id:"budget", label:"Budget" },;
    { id:"summary", label:"Summary" }
  ],;
;
  const getStepStatus = (stepId:QuoteRequestSteps) => {;
    const stepOrder = steps.findIndex(s => s.id === stepId),;
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),;
    ;
    if (stepOrder < currentStepOrder) return "complete",;
    if (stepOrder === currentStepOrder) return "current",;
    return "upcoming";
  },;
;
  return (;
    <div className="relative">;
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">;
        <div ;
          className="absolute h-full bg-zion-purple transition-all duration-500";
          style={{ ;
            width:`${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`;
          }}
        />;
      </div>;
      ;
      <div className="flex justify-between relative">;
        {steps.map((step) => {;
          const status = getStepStatus(step.id),;
          return (;
            <div key={step.id} className="flex flex-col items-center relative">;
              <div ;
                className={cn(;
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors",;
                  status === "complete" ? "bg-zion-purple text-white" :;
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" :;
                  "bg-zion-blue-light text-zion-slate-light";
                )}
              >;
                {status === "complete" ? (;
                  <CheckIcon className="h-4 w-4" />;
                ) :(;
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>;
                )}
              </div>;
              <span ;
                className={cn(;
                  "text-xs mt-2 font-medium",;
                  status === "complete" ? "text-zion-cyan" :;
                  status === "current" ? "text-white" :;
                  "text-zion-slate-light";
                )}
              >;
                {step.label}
              </span>;
            </div>;
          ),;
        })}
      </div>;
    </div>;
  ),;
=======
import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from "@/components/icons",
import { cn } from "@/lib/utils",interface StepProgressProps {
  currentStep: QuoteRequestSteps
}

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps, label: string }[] = [
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }
  ],  ];

  const getStepStatus = (stepId: QuoteRequestSteps) => {
    const stepOrder = steps.findIndex(s => s.id === stepId),
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),
    
    if (stepOrder < currentStepOrder) return "complete",
    if (stepOrder === currentStepOrder) return "current",
    return "upcoming"
  },  const _getStepStatus = (_stepId: QuoteRequestSteps) => {_const _stepOrder = steps.findIndex(s => s.id === stepId);
    const _currentStepOrder = steps.findIndex(s => s.id === currentStep);
    
    if (stepOrder < currentStepOrder) return "complete";
    if (stepOrder === currentStepOrder) return "current";
    return "upcoming";};

  return (
    <div className=&quot;relative&quot;>
      <div className=&quot;absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light&quot;>
        <div 
          className=&quot;absolute h-full bg-zion-purple transition-all duration-500&quot;
          style={{             width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>
      
      <div className=&quot;flex justify-between relative&quot;>
        {steps.map((step) => {
          const status = getStepStatus(step.id),          return (
            <div key={step.id} className=&quot;flex flex-col items-center relative&quot;>
              <div 
                className={cn(
                  &quot;w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors&quot;,
                  status === &quot;complete&quot; ? &quot;bg-zion-purple text-white&quot; : 
                  status === &quot;current&quot; ? &quot;bg-zion-cyan border-2 border-zion-purple&quot; : 
                  &quot;bg-zion-blue-light text-zion-slate-light&quot;
                )}
              >
                {status === &quot;complete&quot; ? (
                  <CheckIcon className=&quot;h-4 w-4&quot; />                ) : (
                  <span className=&quot;text-xs&quot;>{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>
              <span 
                className={cn(
                  &quot;text-xs mt-2 font-medium&quot;,
                  status === &quot;complete&quot; ? &quot;text-zion-cyan&quot; : 
                  status === &quot;current&quot; ? &quot;text-white&quot; : 
                  &quot;text-zion-slate-light&quot;                )}
              >
                {_step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
