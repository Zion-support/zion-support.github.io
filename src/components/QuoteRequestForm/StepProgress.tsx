import { QuoteRequestSteps } from '../QuoteRequestForm';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
=======
import { QuoteRequestSteps } from "../QuoteRequestForm";
import { CheckIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface StepProgressProps {
  currentStep: QuoteRequestSteps;

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps; label: string }[] = [
    { id: 'service', label: 'Service' },
    { id: 'details', label: 'Details' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'budget', label: 'Budget' },
    { id: 'summary', label: 'Summary' },  ];
  const steps: { id: QuoteRequestSteps, label: string }[] = [
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
  const getStepStatus = (stepId: QuoteRequestSteps) => {
    const stepOrder = steps.findIndex(s => s.id === stepId);
    const currentStepOrder = steps.findIndex(s => s.id === currentStep);

    if (stepOrder < currentStepOrder) return 'complete';
    if (stepOrder === currentStepOrder) return 'current';
    return 'upcoming';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };
=======
  const getStepStatus = (stepId: QuoteRequestSteps,) => {
    const stepOrder = steps.findIndex(s => s.id === stepId),
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),
    
    if (stepOrder < currentStepOrder) return "complete",
    if (stepOrder === currentStepOrder) return "current",
    return "upcoming"
  },
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

  return (
    <div className='relative'>
      <div className='absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light'>
        <div
          className='absolute h-full bg-zion-purple transition-all duration-500'
          style={{
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>
<<<<<<< HEAD

      <div className='flex justify-between relative'>
        {steps.map(step => {
          const status = getStepStatus(step.id);
          return (
            <div key={step.id} className='flex flex-col items-center relative'>
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors',
                  status === 'complete'
                    ? 'bg-zion-purple text-white'
                    : status === 'current'
                      ? 'bg-zion-cyan border-2 border-zion-purple'
                      : 'bg-zion-blue-light text-zion-slate-light'
                )}
=======
      
      <div className="flex justify-between relative">
        {steps.map((step,) => {
          const status = getStepStatus(step.id),
          return (
            <div key={step.id} className="flex flex-col items-center relative">
              <div 
                className = {cn(
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors",
                  status === "complete" ? "bg-zion-purple text-white" : 
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 
                  "bg-zion-blue-light text-zion-slate-light"
                ),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              >
                {status === 'complete' ? (
                  <CheckIcon className='h-4 w-4' />
                ) : (
                  <span className='text-xs'>
                    {steps.findIndex(s => s.id === step.id) + 1}
                  </span>
                )}
              </div>
<<<<<<< HEAD
              <span
                className={cn(
                  'text-xs mt-2 font-medium',
                  status === 'complete'
                    ? 'text-zion-cyan'
                    : status === 'current'
                      ? 'text-white'
                      : 'text-zion-slate-light'                )}
=======
                  "text-xs mt-2 font-medium";
                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
                  "text-zion-slate-light"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                )}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
              <span 
                className = {cn(
                  "text-xs mt-2 font-medium",
                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
                  "text-zion-slate-light"
                ),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
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
=======
          )
        })}
      </div>
    </div>
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
