

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

    const stepOrder = steps.findIndex(s => s.id === stepId)
    const currentStepOrder = steps.findIndex(s => s.id === currentStep)
    if (stepOrder < currentStepOrder) return 'complete'
    if (stepOrder === currentStepOrder) return 'current'
    return 'upcoming'
  const getStepStatus = (stepId: QuoteRequestSteps,) => {


                  'w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors'
                  status === 'complete'
                    ? 'bg-zion-purple text-white'
                    : status === 'current'
                      ? 'bg-zion-cyan border-2 border-zion-purple'
                      : 'bg-zion-blue-light text-zion-slate-light'
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
              >
                {status === "complete" ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>

              <span
                className={cn(
                  'text-xs mt-2 font-medium'
                  status === 'complete'
                    ? 'text-zion-cyan'
                    : status === 'current'
                      ? 'text-white'

                      : 'text-zion-slate-light'                )}                  "text-xs mt-2 font-medium"

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
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100
}%`
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100 
}%` 


  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100 ;
}
;
});
}</div> </div>) ;
}"
;
