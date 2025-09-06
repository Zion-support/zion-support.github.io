
=======
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
;
export interface OnboardingStep {;
  id:string,;
  label:string,;
  completed:boolean,;
  link:string,;
  action?:string;}
;
interface OnboardingTrackerProps {;
  steps:OnboardingStep[],;
  title?:string,;
  className?:string;
}
;
export function OnboardingTracker({ ;
  steps,;
  title = "Complete Your Profile", ;
  className ;
} OnboardingTrackerProps) {;
  const completedSteps = steps.filter(step => step.completed).length,;
  const progress = Math.round((completedSteps / steps.length) * 100),;
;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white">{title}</h3>;
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;
      </div>;
<<<<<<< HEAD

                <Circle className="h-5 w-5 text-zion-slate-light" />;
              )}
            </div>;
            <div className="flex-1">;

          </div>;
        ))}
      </div>;
    </div>;

}