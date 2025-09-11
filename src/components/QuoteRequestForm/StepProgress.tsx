<<<<<<< HEAD
<<<<<<< HEAD
import { QuoteRequestSteps } from '../QuoteRequestForm'
import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
interface StepProgressProps {
  currentStep: QuoteRequestSteps
export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps; label: string }[] = [
    { id: 'service', label: 'Service' }
    { id: 'details', label: 'Details' }
    { id: 'timeline', label: 'Timeline' }
    { id: 'budget', label: 'Budget' }
    { id: 'summary', label: 'Summary' },  ];  const steps: { id: QuoteRequestSteps, label: string }[] = [

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
return (
    <div className='relative'>;
      <div className='absolute top-4 left-0 right-0 h-0 && 0.5 bg-zion-blue-light'>;
        <div
          className='absolute h-full bg-zion-purple transition-all duration-500'
          style={{
<<<<<<< HEAD
<<<<<<< HEAD
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }
  ],

  const getStepStatus = (stepId: QuoteRequestSteps) => {
<<<<<<< HEAD
<<<<<<< HEAD
    const stepOrder = steps.findIndex(s => s.id === stepId)
    const currentStepOrder = steps.findIndex(s => s.id === currentStep)
    if (stepOrder < currentStepOrder) return 'complete'
    if (stepOrder === currentStepOrder) return 'current'
    return 'upcoming'
  const getStepStatus = (stepId: QuoteRequestSteps,) => {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
          }}
        />
      </div>
      <div className='flex justify-between relative'>
        {steps.map(step => {
          const status = getStepStatus(step.id)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            width: `${(steps && steps.findIndex(s => s && s.id === currentStep) / (steps && steps.length - 1)) * 100}%`,;
          }}
        />;
      </div>;

      <div className='flex justify-between relative'>;
        {steps && steps.map(step => {;
          const status = getStepStatus(step && step.id);

            <div key={step && step.id} className='flex flex-col items-center relative'>;
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='flex justify-between relative'>
        {steps.map(step => {
          const status = getStepStatus(step.id)
          return (
<<<<<<< HEAD
            <div key={step.id} className='flex flex-col items-center relative'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <div key={step && step.id} className='flex flex-col items-center relative'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors'
                  status === 'complete'
                    ? 'bg-zion-purple text-white'
                    : status === 'current'
                      ? 'bg-zion-cyan border-2 border-zion-purple'
                      : 'bg-zion-blue-light text-zion-slate-light'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}              >
                {status === 'complete' ? (
                  <CheckIcon className='h-4 w-4' />
      
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
<<<<<<< HEAD
              >
                {status === "complete" ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>
=======
                )}>;
                {status === 'complete' ? (;
                  <CheckIcon className='h-4 w-4' />;
                ) : (;
                  <span className='text-xs'>;
                    {steps && steps.findIndex(s => s && s.id === step && step.id) + 1}
                  </span>;
                )}
              </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <span
                className={cn(
                  'text-xs mt-2 font-medium'
                  status === 'complete'
                    ? 'text-zion-cyan'
                    : status === 'current'
                      ? 'text-white'
                      : 'text-zion-slate-light'                )}                  "text-xs mt-2 font-medium"
<<<<<<< HEAD
<<<<<<< HEAD
                  status === "complete" ? "text-zion-cyan" :
                  status === "current" ? "text-white" :

                  "text-zion-slate-light"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                  "text-zion-slate-light"

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}
              <span
                className = {cn(
                  "text-xs mt-2 font-medium"
                  status === "complete" ? "text-zion-cyan" :
                  status === "current" ? "text-white" :
                  "text-zion-slate-light"
<<<<<<< HEAD
<<<<<<< HEAD
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
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100
}%`
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100 
}%` 
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
;
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                ),}>;
                {step && step.label}

;
<<<<<<< HEAD

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
              </span>;
            </div>;
          );
        })}
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
;
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
