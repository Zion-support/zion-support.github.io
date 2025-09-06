import { QuoteRequestSteps } from '../QuoteRequestForm';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepProgressProps {
  currentStep: QuoteRequestSteps;

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps; label: string }[] = [
    { id: 'service', label: 'Service' },
    { id: 'details', label: 'Details' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'budget', label: 'Budget' },
    { id: 'summary', label: 'Summary' },  ];  const steps: { id: QuoteRequestSteps, label: string }[] = [
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }

  ];

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

              >
                {status === 'complete' ? (
                  <CheckIcon className='h-4 w-4' />
                ) : (
                  <span className='text-xs'>
                    {steps.findIndex(s => s.id === step.id) + 1}
                  </span>
                )}
              </div>

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