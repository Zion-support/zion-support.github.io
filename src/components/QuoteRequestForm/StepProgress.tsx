<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
import { QuoteRequestSteps } from '../QuoteRequestForm'
import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
interface StepProgressProps {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  currentStep: QuoteRequestSteps
export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps; label: string }[] = [
    { id: 'service', label: 'Service' }
    { id: 'details', label: 'Details' }
    { id: 'timeline', label: 'Timeline' }
    { id: 'budget', label: 'Budget' }
    { id: 'summary', label: 'Summary' },  ];  const steps: { id: QuoteRequestSteps, label: string }[] = [

<<<<<<< HEAD

  return (
    <div className='relative'>;
      <div className='absolute top-4 left-0 right-0 h-0 && 0.5 bg-zion-blue-light'>;
        <div
          className='absolute h-full bg-zion-purple transition-all duration-500'
          style={{
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
  return (
    <div className='relative'>
      <div className='absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light'>
        <div
          className='absolute h-full bg-zion-purple transition-all duration-500'
          style={{
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from 'lucide-react'
import { cn } from "@/lib/utils",
interface StepProgressProps {
  currentStep: QuoteRequestSteps
}

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps, label: string }[] = [
<<<<<<< HEAD
<<<<<<< HEAD

    { id: "service", label: "Service" },
=======
>>>>>>>     { id: "service", label: "Service" },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    { id: "service", label: "Service" },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }
  ],

  const getStepStatus = (stepId: QuoteRequestSteps) => {
<<<<<<< HEAD
<<<<<<< HEAD

    const stepOrder = steps.findIndex(s => s.id === stepId),
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const stepOrder = steps.findIndex(s => s.id === stepId)
    const currentStepOrder = steps.findIndex(s => s.id === currentStep)
    if (stepOrder < currentStepOrder) return 'complete'
    if (stepOrder === currentStepOrder) return 'current'
    return 'upcoming'
  const getStepStatus = (stepId: QuoteRequestSteps,) => {
<<<<<<< HEAD
>>>>>>>     const stepOrder = steps.findIndex(s => s.id === stepId),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const stepOrder = steps.findIndex(s => s.id === stepId),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>             width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>
      <div className='flex justify-between relative'>
        {steps.map(step => {
          const status = getStepStatus(step.id)
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>

=======
            width: `${(steps && steps.findIndex(s => s && s.id === currentStep) / (steps && steps.length - 1)) * 100}%`,;
          }}
        />;
      </div>;

      <div className='flex justify-between relative'>;
        {steps && steps.map(step => {;
          const status = getStepStatus(step && step.id);

>>>>>>>           return (
            <div key={step && step.id} className='flex flex-col items-center relative'>;
=======
<<<<<<< HEAD
      <div className='flex justify-between relative'>
        {steps.map(step => {
          const status = getStepStatus(step.id)
          return (
            <div key={step.id} className='flex flex-col items-center relative'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors'
                  status === 'complete'
                    ? 'bg-zion-purple text-white'
                    : status === 'current'
                      ? 'bg-zion-cyan border-2 border-zion-purple'
                      : 'bg-zion-blue-light text-zion-slate-light'
                )}              >
                {status === 'complete' ? (
                  <CheckIcon className='h-4 w-4' />
<<<<<<< HEAD
>>>>>>>                 ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100
}%`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      
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
                  "text-xs mt-2 font-medium"
                  status === "complete" ? "text-zion-cyan" :
                  status === "current" ? "text-white" :
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
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100 
}%` 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </span>;
            </div>;
          );
        })}
      </div>;
    </div>;
  );
<<<<<<< HEAD
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
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
