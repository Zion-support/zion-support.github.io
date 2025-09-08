
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },


        {steps.map((step) => {

            <div key={step.id} className="flex flex-col items-center relative">
              <div;
                className={cn(


                  "bg-zion-blue-light text-zion-slate-light"
                )}>;"
                {status === "complete" ? (;"
                  <CheckIcon className="h-4 w-4" />;
                ) : (;"
                  <span className="text-xs">{steps && steps.findIndex(s => s && s.id === step && step.id) + 1}</span>;

                )}
              </div>;
              <span
                className={cn(
                  "text-xs mt-2 font-medium"


                  "text-xs mt-2 font-medium",

                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 

                  "text-zion-slate-light"

                )}>;
                {step && step.label}
              </span>;
            </div>;
          );

        })}

import { QuoteRequestSteps } from '../QuoteRequestForm';'
import { CheckIcon } from '@/components / icons';'
import { cn } from '@/lib / utils';'

interface StepProgressProps {
  }
  "current_step": QuoteRequestSteps;
}
export /**
 * StepProgress - Function description
 */
function StepProgress() {
  }
    { "id": "service", "label": "Service" },"
    { "id": "details", "label": "Details" },"
    { "id": "timeline", "label": "Timeline" },"
    { "id": "budget", "label": "Budget" },"
    { "id": "summary", "label": "Summary" }"
  ];
;


