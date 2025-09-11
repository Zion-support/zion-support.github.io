
<<<<<<< HEAD
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {QuoteRequestSteps} from "../QuoteRequestForm";
import {CheckIcon} from "@/components/icons";
import {cn} from "@/lib/utils";
import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from "@/components/icons",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
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

=======


interface StepProgressProps {
  currentStep: QuoteRequestSteps
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
    { id: "summary", label: "Summary" }
  ],
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
<<<<<<< HEAD
          const status = getStepStatus(step.id),
=======
          const status = getStepStatus(step.id);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          const status = getStepStatus(step.id);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          return (
            <div key={step.id} className="flex flex-col items-center relative">
              <div
                className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
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
import { cn } from "@/lib/utils",;
interface StepProgressProps {;
  currentStep: QuoteRequestSteps;
}
;
export function StepProgress({ currentStep }: StepProgressProps) {;


=======


export function StepProgress(): any ({ currentStep }: StepProgressProps) {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export function StepProgress(): any ({ currentStep }: StepProgressProps) {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const steps: { id: QuoteRequestSteps, label: string }[] = [;
    { id: "service", label: "Service" },;
    { id: "details", label: "Details" },;
    { id: "timeline", label: "Timeline" },;
    { id: "budget", label: "Budget" },;
    { id: "summary", label: "Summary" }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];

  const getStepStatus = (stepId: QuoteRequestSteps) => {;
    const stepOrder = steps && steps.findIndex(s => s && s.id === stepId);
    const currentStepOrder = steps && steps.findIndex(s => s && s.id === currentStep);

    if (stepOrder < currentStepOrder) return "complete";
    if (stepOrder === currentStepOrder) return "current",;
    return "upcoming";
  };

  return (
    <div className="relative">;
      <div className="absolute top-4 left-0 right-0 h-0 && 0.5 bg-zion-blue-light">;
        <div
          className="absolute h-full bg-zion-purple transition-all duration-500"
          style={{ 
            width: `${(steps && steps.findIndex(s => s && s.id === currentStep) / (steps && steps.length - 1)) * 100}%`;
          }}
        />;
      </div>;

      <div className="flex justify-between relative">;
        {steps && steps.map((step) => {;
          const status = getStepStatus(step && step.id);
          return (
            <div key={step && step.id} className="flex flex-col items-center relative">;
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors"
                  status === "complete" ? "bg-zion-purple text-white" : 
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors",
                  status === "complete" ? "bg-zion-purple text-white" : 
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  "bg-zion-blue-light text-zion-slate-light"
                )}>;
                {status === "complete" ? (;
                  <CheckIcon className="h-4 w-4" />;
                ) : (;
                  <span className="text-xs">{steps && steps.findIndex(s => s && s.id === step && step.id) + 1}</span>;
                )}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
              <span
                className={cn(
                  "text-xs mt-2 font-medium"
<<<<<<< HEAD


=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  "text-xs mt-2 font-medium",

                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  "text-zion-slate-light"
                )}>;
                {step && step.label}
              </span>;
            </div>;
          );
        })}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </div>;
  );

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { QuoteRequestSteps } from '../QuoteRequestForm';
import { CheckIcon } from '@/components / icons';
import { cn } from '@/lib / utils';
interface StepProgressProps {
  current_step: QuoteRequestSteps;
}
export /**
 * StepProgress - Function description
 */
function StepProgress() {
  const steps: { id: QuoteRequestSteps, label: string }[] = [;
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }
  ];
;
<<<<<<< HEAD
  const getStepStatus = (step_id: QuoteRequestSteps) =>: any {
    const step_order = steps.find_index (string => s.id === step_id);
    const currentStepOrder = steps.find_index (string => s.id === current_step);
;
    // Check condition
if (return "complete") {
  $2
}
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
