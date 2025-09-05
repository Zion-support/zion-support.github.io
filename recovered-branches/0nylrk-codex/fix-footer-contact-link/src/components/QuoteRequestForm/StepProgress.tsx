
import { QuoteRequestSteps } from &quot;../QuoteRequestForm&quot;;
import { CheckIcon } from &quot;@/components/icons&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface StepProgressProps {
  currentStep: QuoteRequestSteps;
}

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps; label: string }[] = [
    { id: &quot;service&quot;, label: &quot;Service&quot; },
    { id: &quot;details&quot;, label: &quot;Details&quot; },
    { id: &quot;timeline&quot;, label: &quot;Timeline&quot; },
    { id: &quot;budget&quot;, label: &quot;Budget&quot; },
    { id: &quot;summary&quot;, label: &quot;Summary&quot; }
  ];

  const getStepStatus = (stepId: QuoteRequestSteps) => {
    const stepOrder = steps.findIndex(s => s.id === stepId);
    const currentStepOrder = steps.findIndex(s => s.id === currentStep);
    
    if (stepOrder < currentStepOrder) return &quot;complete&quot;;
    if (stepOrder === currentStepOrder) return &quot;current&quot;;
    return &quot;upcoming&quot;;
  };

  return (
    <div className=&quot;relative&quot;>
      <div className=&quot;absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light&quot;>
        <div 
          className=&quot;absolute h-full bg-zion-purple transition-all duration-500&quot;
          style={{ 
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>
      
      <div className=&quot;flex justify-between relative&quot;>
        {steps.map((step) => {
          const status = getStepStatus(step.id);
          return (
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
                  <CheckIcon className=&quot;h-4 w-4&quot; />
                ) : (
                  <span className=&quot;text-xs&quot;>{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>
              <span 
                className={cn(
                  &quot;text-xs mt-2 font-medium&quot;,
                  status === &quot;complete&quot; ? &quot;text-zion-cyan&quot; : 
                  status === &quot;current&quot; ? &quot;text-white&quot; : 
                  &quot;text-zion-slate-light&quot;
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
