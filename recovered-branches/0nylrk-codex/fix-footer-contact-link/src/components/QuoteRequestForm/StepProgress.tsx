<<<<<<< HEAD
interface StepProgressProps {
  currentStep: QuoteRequestSteps

}

=======

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from "@/components/icons",
import { cn } from "@/lib/utils",


interface StepProgressProps {
  currentStep: QuoteRequestSteps
<<<<<<< HEAD
}

import {QuoteRequestSteps} from "../QuoteRequestForm";
import {CheckIcon} from "@/components/icons";
import {cn} from "@/lib/utils";
import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from "@/components/icons",
import { cn } from "@/lib/utils",
interface StepProgressProps {
  currentStep: QuoteRequestSteps
}
export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps, label: string }[] = [

    { id: "service", label: "Service" }
    { id: "details", label: "Details" }
    { id: "timeline", label: "Timeline" }
    { id: "budget", label: "Budget" }
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
<<<<<<< HEAD
    { id: "summary", label: "Summary" };
  ];
    { id: "summary", label: "Summary" }
  ];
  const getStepStatus = (stepId: QuoteRequestSteps) => {
    const stepOrder = steps.findIndex(s => s.id === stepId);
    const currentStepOrder = steps.findIndex(s => s.id === currentStep);
    if (stepOrder < currentStepOrder) return "complete";
    if (stepOrder === currentStepOrder) return "current"
    return "upcoming"
  }
  ],

  const getStepStatus = (stepId: QuoteRequestSteps) => {
    const stepOrder = steps.findIndex(s => s.id === stepId),
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),
    
    if (stepOrder < currentStepOrder) return "complete",
    if (stepOrder === currentStepOrder) return "current",
    return "upcoming"
  },


    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  return (
    <div className="relative">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">
        <div"
          className="absolute h-full bg-zion-purple transition-all duration-500"
          style={{}
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>"
      <div className="flex justify-between relative">
<<<<<<< HEAD
        {steps.map((step) => {}
          const status = getStepStatus(step.id),
          return ("
=======
        {steps.map((step) => {
<<<<<<< HEAD
          const status = getStepStatus(step.id),
=======
          const status = getStepStatus(step.id);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div key={step.id} className="flex flex-col items-center relative">
              <div;
                className={cn(
<<<<<<< HEAD
}"
                  "text-xs mt-2 font-medium","
                  status === "complete" ? "text-zion-cyan" : "
                  status === "current" ? "text-white" : "
                  "text-zion-slate-light""
import { QuoteRequestSteps } from "../QuoteRequestForm",;"
import { CheckIcon } from "@/components/icons",;"
=======
<<<<<<< HEAD
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors";
                  status === "complete" ? "bg-zion-purple text-white" :
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" :
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
                  "text-xs mt-2 font-medium";
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
                  "text-xs mt-2 font-medium",
                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
                  "text-zion-slate-light"
import { QuoteRequestSteps } from "../QuoteRequestForm",;
import { CheckIcon } from "@/components/icons",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { cn } from "@/lib/utils",;
interface StepProgressProps {;
  currentStep: QuoteRequestSteps;
}
;
<<<<<<< HEAD
export function StepProgress() { return null; }
export function StepProgress(): any ({ currentStep }: StepProgressProps) {;
  const steps: { id: QuoteRequestSteps, label: string }[] = [;"
    { id: "service", label: "Service" },;"
    { id: "details", label: "Details" },;"
    { id: "timeline", label: "Timeline" },;"
    { id: "budget", label: "Budget" },;"
    { id: "summary", label: "Summary" }
=======
export function StepProgress({ currentStep }: StepProgressProps) {;


=======


export function StepProgress(): any ({ currentStep }: StepProgressProps) {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const steps: { id: QuoteRequestSteps, label: string }[] = [;
    { id: "service", label: "Service" },;
    { id: "details", label: "Details" },;
    { id: "timeline", label: "Timeline" },;
    { id: "budget", label: "Budget" },;
    { id: "summary", label: "Summary" }
<<<<<<< HEAD
=======
  ];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  ];
  const getStepStatus = (stepId: QuoteRequestSteps) = /> {;
    const stepOrder = steps && steps.findIndex(s => s && s.id === stepId);
    const currentStepOrder = steps && steps.findIndex(s => s && s.id === currentStep);

  return ("
    <div className="relative">;"
      <div className="absolute top-4 left-0 right-0 h-0 && 0.5 bg-zion-blue-light">;
        <div"
          className="absolute h-full bg-zion-purple transition-all duration-500"
          style={{}`
            width: `${(steps && steps.findIndex(s => s && s.id === currentStep) / (steps && steps.length - 1)) * 100}%`;
          }}
        />;
      </div>;
"
      <div className="flex justify-between relative">;
        {steps && steps.map((step) => {;
          const status = getStepStatus(step && step.id);
          return ("
            <div key={step && step.id} className="flex flex-col items-center relative">;
              <div;
                className={cn("
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors""
                  status === "complete" ? "bg-zion-purple text-white" : "
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors",
                  status === "complete" ? "bg-zion-purple text-white" : 
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  "bg-zion-blue-light text-zion-slate-light"
                )}>;"
                {status === "complete" ? (;"
                  <CheckIcon className="h-4 w-4" />;
                ) : (;"
                  <span className="text-xs">{steps && steps.findIndex(s => s && s.id === step && step.id) + 1}</span>;
<<<<<<< HEAD

=======
                )}
              </div>;
              <span
                className={cn(
                  "text-xs mt-2 font-medium"


                  "text-xs mt-2 font-medium",

                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  "text-zion-slate-light"

                )}>;
                {step && step.label}
              </span>;
            </div>;
          );
        })}
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
    </div>
  )
}
import { QuoteRequestSteps } from '../QuoteRequestForm';'
import { CheckIcon } from '@/components / icons';'
import { cn } from '@/lib / utils';'
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>;
    </div>;
  );

}
import { QuoteRequestSteps } from '../QuoteRequestForm';
import { CheckIcon } from '@/components / icons';
import { cn } from '@/lib / utils';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
    // Check condition
if (return "current", ) {
  $2
}
    return "upcoming";
  }
;
  return (
    <div className="relative">;
      <div className="absolute top - 4 left - 0 right - 0 h - 0.5 bg - zion - blue - light">;
        <div;
          className="absolute h - full bg - zion - purple transition - all duration - 500";
          style={{
            width: `${(steps.find_index (string => s.id === current_step) / (steps.length - 1)) * 100}%`;
          }}
        />;
      </div>;
      <div className="flex justify - between relative">;
        {steps.map ((step) => {
          const status = getStepStatus (step.id);
          return (
            <div key={step.id} className="flex flex - col items - center relative">;
              <div;
                className={cn (
                  "w - 8 h - 8 rounded - full flex items - center justify - center z - 10 transition - colors";
                  status === "complete" ? "bg - zion - purple text - white" :;
                  status === "current" ? "bg - zion - cyan border - 2 border - zion - purple" :;
                  "bg - zion - blue - light text - zion - slate - light")}
              >;
                {status === "complete" ? (
                  <CheckIcon className="h - 4 w - 4" />) : (
                  <span className="text - xs">{steps.find_index (string => s.id === step.id) + 1}</span>)}
              </div>;
              <span;
                className={cn (
                  "text - xs mt - 2 font - medium";
                  status === "complete" ? "text - zion - cyan" :;
                  status === "current" ? "text - white" :;
                  "text - zion - slate - light")}
              >;
                {step.label}
              </span>;
            </div>);
        })}
      </div>;
    </div>);

import { QuoteRequestSteps } from "../QuoteRequestForm",;
import { CheckIcon } from "@/components/icons",;
import { cn } from "@/lib/utils",;
;
interface StepProgressProps {;
  currentStep:QuoteRequestSteps;
}
<<<<<<< HEAD
;
export function StepProgress({ currentStep } StepProgressProps) {;
  const steps:{ id:QuoteRequestSteps, label:string }[] = [;
    { id:"service", label:"Service" },;
    { id:"details", label:"Details" },;
    { id:"timeline", label:"Timeline" },;
    { id:"budget", label:"Budget" },;
    { id:"summary", label:"Summary" }
  ],;
;
  const getStepStatus = (stepId:QuoteRequestSteps) => {;
    const stepOrder = steps.findIndex(s => s.id === stepId),;
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),;
    ;
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
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
