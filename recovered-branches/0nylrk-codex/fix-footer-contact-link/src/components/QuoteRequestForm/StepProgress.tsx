<<<<<<< HEAD
<<<<<<< HEAD


import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from "@/components/icons",
import { cn } from "@/lib/utils",
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface StepProgressProps {
  currentStep: QuoteRequestSteps
=======
interface StepProgressProps {}
  currentStep: QuoteRequestSteps;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
<<<<<<< HEAD
export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps, label: string }[] = [
    { id: "summary", label: "Summary" }
  ];
  const getStepStatus = (stepId: QuoteRequestSteps) => {
    const stepOrder = steps.findIndex(s => s.id === stepId);
    const currentStepOrder = steps.findIndex(s => s.id === currentStep);
    if (stepOrder < currentStepOrder) return "complete";
    if (stepOrder === currentStepOrder) return "current"
    return "upcoming"
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                className={cn(

}
;
=======

    { id: "summary", label: "Summary" }
"
    { id: "summary", label: "Summary" }
"
    { id: "service", label: "Service" },"
    { id: "details", label: "Details" },"
    { id: "timeline", label: "Timeline" },"
    { id: "budget", label: "Budget" },

<<<<<<< HEAD
  return (
    <div className="relative">
=======

  return ("
    <div className="relative">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">
        <div"
          className="absolute h-full bg-zion-purple transition-all duration-500"
          style={{}
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>"
      <div className="flex justify-between relative">
        {steps.map((step) => {}
          const status = getStepStatus(step.id),
          return ("
            <div key={step.id} className="flex flex-col items-center relative">
              <div;
                className={cn(
}"
                  "text-xs mt-2 font-medium","
                  status === "complete" ? "text-zion-cyan" : "
                  status === "current" ? "text-white" : "
                  "text-zion-slate-light""
import { QuoteRequestSteps } from "../QuoteRequestForm",;"
import { CheckIcon } from "@/components/icons",;"
import { cn } from "@/lib/utils",;
interface StepProgressProps {;
  currentStep: QuoteRequestSteps;
}
;
export function StepProgress() { return null; }
export function StepProgress(): any ({ currentStep }: StepProgressProps) {;
  const steps: { id: QuoteRequestSteps, label: string }[] = [;"
    { id: "service", label: "Service" },;"
    { id: "details", label: "Details" },;"
    { id: "timeline", label: "Timeline" },;"
    { id: "budget", label: "Budget" },;"
    { id: "summary", label: "Summary" }
  ];

  const getStepStatus = (stepId: QuoteRequestSteps) => {;
    const stepOrder = steps && steps.findIndex(s => s && s.id === stepId);
    const currentStepOrder = steps && steps.findIndex(s => s && s.id === currentStep);
<<<<<<< HEAD

    if (stepOrder < currentStepOrder) return "complete";
    if (stepOrder === currentStepOrder) return "current",;
    return "upcoming"
};
=======
"
    if (stepOrder < currentStepOrder) return "complete";"
    if (stepOrder === currentStepOrder) return "current",;"
    return "upcoming";
  };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors",
                  status === "complete" ? "bg-zion-purple text-white" : 
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors","
                  status === "complete" ? "bg-zion-purple text-white" : "
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  "bg-zion-blue-light text-zion-slate-light"
                )}>;"
                {status === "complete" ? (;"
                  <CheckIcon className="h-4 w-4" />;
                ) : (;"
                  <span className="text-xs">{steps && steps.findIndex(s => s && s.id === step && step.id) + 1}</span>;
<<<<<<< HEAD
                )}
<<<<<<< HEAD

              </div>;
              <span
                className={cn(
                  "text-xs mt-2 font-medium"
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                )}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  "text-zion-slate-light"
                )}>;
                {step && step.label}
              </span>;
            </div>;
          );
        })}
<<<<<<< HEAD

      </div>;
    </div>;
  );
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
import { QuoteRequestSteps } from '../QuoteRequestForm';'
import { CheckIcon } from '@/components / icons';'
import { cn } from '@/lib / utils';
interface StepProgressProps {}
  current_step: QuoteRequestSteps;
}
export /**;
 * StepProgress - Function description;
 */
function StepProgress() {}
  const steps: { id: QuoteRequestSteps, label: string }[] = [;"
    { id: "service", label: "Service" },"
    { id: "details", label: "Details" },"
    { id: "timeline", label: "Timeline" },"
    { id: "budget", label: "Budget" },"
    { id: "summary", label: "Summary" }
  ];
;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
