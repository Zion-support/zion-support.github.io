
import { QuoteRequestSteps } from "../QuoteRequestForm";
import { CheckIcon } from 'lucide-react'
import { cn } from "@/lib/utils";
interface StepProgressProps {
  currentStep: QuoteRequestSteps,
}

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps, label: string}[] = [
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }
  ],

  const getStepStatus = (stepId: QuoteRequestSteps) => {,
    const stepOrder = steps.findIndex(s => s.id === stepId),
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),
    
    if (stepOrder < currentStepOrder) return "complete",
    if (stepOrder = $2;
    return "upcoming"
  },

  return (
    <div className="relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">
        <div 
          className="absolute h-full bg-zion-purple transition-all duration-500"
          style={{ 
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>
      
      <div className="flex justify-between relative">
        {steps.map((step) => {
          const status = getStepStatus($2);
          return (
            <div key = $2;
                  status = $2;
                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
                  "text-zion-slate-light"
                )}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
;