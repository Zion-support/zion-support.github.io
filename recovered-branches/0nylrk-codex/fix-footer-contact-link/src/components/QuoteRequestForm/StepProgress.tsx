

import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from "@/components/icons",
import { cn } from "@/lib/utils",
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface StepProgressProps {
  currentStep: QuoteRequestSteps
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
