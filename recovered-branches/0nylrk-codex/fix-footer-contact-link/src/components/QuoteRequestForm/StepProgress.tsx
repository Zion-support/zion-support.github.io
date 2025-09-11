
import {QuoteRequestSteps} from "../QuoteRequestForm";
import {CheckIcon} from "@/components/icons";
import {cn} from "@/lib/utils";
import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from "@/components/icons",
import { cn } from "@/lib/utils",


interface StepProgressProps {
  currentStep: QuoteRequestSteps
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
    { id: "summary", label: "Summary" }
  ],
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },


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
          const status = getStepStatus(step.id);
          return (
            <div key={step.id} className="flex flex-col items-center relative">
              <div
                className={cn(
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


export function StepProgress(): any ({ currentStep }: StepProgressProps) {;
  const steps: { id: QuoteRequestSteps, label: string }[] = [;
    { id: "service", label: "Service" },;
    { id: "details", label: "Details" },;
    { id: "timeline", label: "Timeline" },;
    { id: "budget", label: "Budget" },;
    { id: "summary", label: "Summary" }
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

                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors",
                  status === "complete" ? "bg-zion-purple text-white" : 
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  "bg-zion-blue-light text-zion-slate-light"
                )}>;
                {status === "complete" ? (;
                  <CheckIcon className="h-4 w-4" />;
                ) : (;
                  <span className="text-xs">{steps && steps.findIndex(s => s && s.id === step && step.id) + 1}</span>;
                )}

              </div>;
              <span
                className={cn(
                  "text-xs mt-2 font-medium"
=======


=======
                  "text-xs mt-2 font-medium",

                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  "text-zion-slate-light"
                )}>;
                {step && step.label}
              </span>;
            </div>;
          );
        })}

      </div>;
    </div>;
  );

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
