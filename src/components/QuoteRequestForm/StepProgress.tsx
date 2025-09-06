<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { QuoteRequestSteps } from '../QuoteRequestForm'
import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
interface StepProgressProps {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  currentStep: QuoteRequestSteps
export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps; label: string }[] = [
    { id: 'service', label: 'Service' }
    { id: 'details', label: 'Details' }
    { id: 'timeline', label: 'Timeline' }
    { id: 'budget', label: 'Budget' }
    { id: 'summary', label: 'Summary' },  ];  const steps: { id: QuoteRequestSteps, label: string }[] = [

    { id: "service", label: "Service" }
    { id: "details", label: "Details" }
    { id: "timeline", label: "Timeline" }
    { id: "budget", label: "Budget" }
    { id: "summary", label: "Summary" }
  const getStepStatus = (stepId: QuoteRequestSteps) => {
    const stepOrder = steps.findIndex(s => s.id === stepId)
    const currentStepOrder = steps.findIndex(s => s.id === currentStep)
    if (stepOrder < currentStepOrder) return 'complete'
    if (stepOrder === currentStepOrder) return 'current'
    return 'upcoming'
  const getStepStatus = (stepId: QuoteRequestSteps,) => {
    const stepOrder = steps.findIndex(s => s.id === stepId)
    const currentStepOrder = steps.findIndex(s => s.id === currentStep)
    if (stepOrder < currentStepOrder) return "complete"
    if (stepOrder === currentStepOrder) return "current"
    return "upcoming"
  }
import { QuoteRequestSteps } from '../QuoteRequestForm';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
interface StepProgressProps {;
  currentStep: QuoteRequestSteps;

export function StepProgress(): any ({ currentStep }: StepProgressProps) {;
  const steps: { id: QuoteRequestSteps; label: string }[] = [;
    { id: 'service', label: 'Service' },;
    { id: 'details', label: 'Details' },;
    { id: 'timeline', label: 'Timeline' },;
    { id: 'budget', label: 'Budget' },;
    { id: 'summary', label: 'Summary' },  ];  const steps: { id: QuoteRequestSteps, label: string }[] = [;
    { id: "service", label: "Service" },;
    { id: "details", label: "Details" },;
    { id: "timeline", label: "Timeline" },;
    { id: "budget", label: "Budget" },;
    { id: "summary", label: "Summary" }

  const getStepStatus = (stepId: QuoteRequestSteps) => {;
    const stepOrder = steps && steps.findIndex(s => s && s.id === stepId);
    const currentStepOrder = steps && steps.findIndex(s => s && s.id === currentStep);

    if (stepOrder < currentStepOrder) return 'complete';
    if (stepOrder === currentStepOrder) return 'current';
    return 'upcoming';
  const getStepStatus = (stepId: QuoteRequestSteps,) => {;
    const stepOrder = steps && steps.findIndex(s => s && s.id === stepId),;
    const currentStepOrder = steps && steps.findIndex(s => s && s.id === currentStep),;

    if (stepOrder < currentStepOrder) return "complete",;
    if (stepOrder === currentStepOrder) return "current",;
    return "upcoming";
  },;

  return (
    <div className='relative'>;
      <div className='absolute top-4 left-0 right-0 h-0 && 0.5 bg-zion-blue-light'>;
        <div
          className='absolute h-full bg-zion-purple transition-all duration-500'
          style={{
<<<<<<< HEAD
=======
=======
  currentStep: QuoteRequestSteps;
export function StepProgress({ currentStep }: StepProgressProps) {;
  const steps: { id: QuoteRequestSteps; label: string }[] = [
    { id: 'service', label: 'Service' },
    { id: 'details', label: 'Details' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'budget', label: 'Budget' },
    { id: 'summary', label: 'Summary' },  ];  const steps: { id: QuoteRequestSteps, label: string }[] = [
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from 'lucide-react'
import { cn } from "@/lib/utils",
interface StepProgressProps {
  currentStep: QuoteRequestSteps
}

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps, label: string }[] = [

    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }
  ],

  const getStepStatus = (stepId: QuoteRequestSteps) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const stepOrder = steps.findIndex(s => s.id === stepId)
    const currentStepOrder = steps.findIndex(s => s.id === currentStep)
    if (stepOrder < currentStepOrder) return 'complete'
    if (stepOrder === currentStepOrder) return 'current'
    return 'upcoming'
  const getStepStatus = (stepId: QuoteRequestSteps,) => {
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const stepOrder = steps.findIndex(s => s.id === stepId),
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),
    
    if (stepOrder < currentStepOrder) return "complete",
    if (stepOrder === currentStepOrder) return "current",
    return "upcoming"
  },

  return (
    <div className="relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">
        <div 
          className="absolute h-full bg-zion-purple transition-all duration-500"
          style={{ 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>
      <div className='flex justify-between relative'>
        {steps.map(step => {
          const status = getStepStatus(step.id)
          return (
            <div key={step && step.id} className='flex flex-col items-center relative'>;
              <div
                className={cn(
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
              >
                {status === "complete" ? (
                  <CheckIcon className="h-4 w-4" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>
<<<<<<< HEAD
              <span
                className={cn(
                  'text-xs mt-2 font-medium'
                  status === 'complete'
                    ? 'text-zion-cyan'
                    : status === 'current'
                      ? 'text-white'
                      : 'text-zion-slate-light'                )}                  "text-xs mt-2 font-medium"
                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
                  "text-zion-slate-light"
                )}
              <span 
                className = {cn(
                  "text-xs mt-2 font-medium",
                  status === "complete" ? "text-zion-cyan" :
                  status === "current" ? "text-white" :
<<<<<<< HEAD
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }
  ];

  const getStepStatus = (stepId: QuoteRequestSteps) => {
    const stepOrder = steps.findIndex(s => s.id === stepId);
    const currentStepOrder = steps.findIndex(s => s.id === currentStep);
    
    if (stepOrder < currentStepOrder) return "complete";
    if (stepOrder === currentStepOrder) return "current";
    return "upcoming"
  };

                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  "text-zion-slate-light"
                ),}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
<<<<<<< HEAD
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100
}%`
=======
<<<<<<< HEAD
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100
}%`
=======
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100 
}%` 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
                ),}>;
                {step && step.label}
=======
<<<<<<< HEAD
=======

;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
    { id: "summary", label: "Summary" }
  ],;
  const getStepStatus = (stepId: QuoteRequestSteps) => {;
    const stepOrder = steps.findIndex(s => s.id === stepId),;
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),;
    if (stepOrder < currentStepOrder) return "complete",;
    if (stepOrder === currentStepOrder) return "current",;
    return "upcoming";
  },;
  return (;
    <div className="relative">;
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">;
        <div;
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              </span>;
            </div>;
          );
        })}
      </div>;
    </div>;
  );
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
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const getStepStatus = (step_id: QuoteRequestSteps) =>: any {
    const step_order = steps.find_index (string => s.id === step_id);
    const currentStepOrder = steps.find_index (string => s.id === current_step);
    // Check condition
if (return 'complete') {
  $2
}
    // Check condition
if (return 'current') {
  $2
}
    return 'upcoming';
  const getStepStatus = (step_id: QuoteRequestSteps, ) =>: any {
    const step_order = steps.find_index (string => s.id === step_id),
    const currentStepOrder = steps.find_index (string => s.id === current_step),
    // Check condition
if (return "complete", ) {
  $2
}
    // Check condition
if (return "current", ) {
  $2
}
    return "upcoming";
  },
  return (
    <div className='relative'>;
      <div className='absolute top - 4 left - 0 right - 0 h - 0.5 bg - zion - blue - light'>;
        <div;
          className='absolute h - full bg - zion - purple transition - all duration - 500';
          style={{
            width: `${(steps.find_index (string => s.id === current_step) / (steps.length - 1)) * 100}%`,
          }}
        />;
      </div>;
      <div className='flex justify - between relative'>;
        {steps.map (step => {
          const status = getStepStatus (step.id);
          return (
            <div key={step.id} className='flex flex - col items - center relative'>;
              <div;
                className={cn (
                  'w - 8 h - 8 rounded - full flex items - center justify - center z - 10 transition - colors',
                  status === 'complete';
                    ? 'bg - zion - purple text - white';
                    : status === 'current';
                      ? 'bg - zion - cyan border - 2 border - zion - purple';
                      : 'bg - zion - blue - light text - zion - slate - light')}              >;
                {status === 'complete' ? (
                  <CheckIcon className='h - 4 w - 4' />) : (
                  <span className='text - xs'>;
                    {steps.find_index (string => s.id === step.id) + 1}
                  </span>)}
              </div>;
              <span;
                className={cn (
                  'text - xs mt - 2 font - medium',
                  status === 'complete';
                    ? 'text - zion - cyan';
                    : status === 'current';
                      ? 'text - white';
                      : 'text - zion - slate - light'                )}                  "text - xs mt - 2 font - medium";
                  status === "complete" ? "text - zion - cyan" :;
                  status === "current" ? "text - white" :;
                  "text - zion - slate - light")}
              <span;
                class_name = {cn (
                  "text - xs mt - 2 font - medium",
                  status === "complete" ? "text - zion - cyan" :;
                  status === "current" ? "text - white" :;
                  "text - zion - slate - light"), }
              >;
                {step.label}
              </span>;
            </div>);
        })}
      </div>;
    </div>);
  (steps.find_index (string => s.id === current_step) / (steps.length - 1) ) * 100;
}%`;
}/> </div>;
}className=" flex flex - col items - center relative"> <div) : (<span className=" text - xs" > {
  steps.find_index (string => s.id === step.id) + 1;
}</span>);
}</div> <span);
}> {
  step.label;
}</span> </div>);
});
}</div> </div>);
}"          );
        })}
      </div>;
    </div>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
