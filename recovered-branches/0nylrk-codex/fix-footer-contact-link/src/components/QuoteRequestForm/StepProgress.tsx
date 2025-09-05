

interface StepProgressProps {_currentStep: QuoteRequestSteps;}

export function StepProgress(_{_currentStep}: StepProgressProps) {_const steps: { id: QuoteRequestSteps; label: string}[] = [
    {_id: "service", _label: "Service"},
    {_id: "details", _label: "Details"},
    {_id: "timeline", _label: "Timeline"},
    {_id: "budget", _label: "Budget"},
    {_id: "summary", _label: "Summary"}
  ];

  const _getStepStatus = (_stepId: QuoteRequestSteps) => {_const _stepOrder = steps.findIndex(s => s.id === stepId);
    const _currentStepOrder = steps.findIndex(s => s.id === currentStep);
    
    if (stepOrder < currentStepOrder) return "complete";
    if (stepOrder === currentStepOrder) return "current";
    return "upcoming";};

  return (
    <div className="relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">
        <div 
          className="absolute h-full bg-zion-purple transition-all duration-500"
          style={_{ 
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>
      
      <div className="flex justify-between relative">
        {_steps.map(_(step) => {
          const _status = getStepStatus(step.id);
          return (
            <div key={step.id} className="flex flex-col items-center relative">
              <div 
                className={_cn(
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors", _status === "complete" ? "bg-zion-purple text-white" : 
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 
                  "bg-zion-blue-light text-zion-slate-light"
                )}
              >
                {_status === "complete" ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>
              <span 
                className={_cn(
                  "text-xs mt-2 font-medium", _status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
                  "text-zion-slate-light"
                )}
              >
                {_step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
