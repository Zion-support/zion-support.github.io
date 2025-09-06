
<<<<<<< HEAD
<<<<<<< HEAD
=======
  title = "Complete Your Profile"
  title = "Complete Your Profile", 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  title = "Complete Your Profile"
  title = "Complete Your Profile", 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react"
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import Link from "next/link",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface OnboardingStep {
  id: string
  label: string
  completed: boolean
  link: string
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
<<<<<<< HEAD
  action?: string
<<<<<<< HEAD

  return (
=======
=======
  action?: string
}

  action?: string
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
interface OnboardingTrackerProps {

  steps: OnboardingStep[]
  title?: string
  className?: string
}
export function OnboardingTracker({
  steps
  title = "Complete Your Profile"
  className
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length
  const progress = Math.round((completedSteps / steps.length) * 100)
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;
  action?: string;
}
;
interface OnboardingTrackerProps {;
  steps: OnboardingStep[],;
  title?: string,;
  className?: string;
}

<<<<<<< HEAD
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function OnboardingTracker({ 
  steps,
  title = "Complete Your Profile", 
  className 
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length,
  const progress = Math.round((completedSteps / steps.length) * 100),

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      
>>>>>>>       {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
export function OnboardingTracker({;
  steps,;
  title = "Complete Your Profile",;
  className;
}: OnboardingTrackerProps) {;
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  return (;
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white">{title}</h3>;
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      {/* Steps list */}
      <div className="space-y-3">;
        {steps && steps.map((step,) => (;
          <div key={step && step.id} className="flex items-center">;
            <div className="mr-3">;
              {step && step.completed ? (;
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;
              ) : (;
                <Circle className="h-5 w-5 text-zion-slate-light" />;
              )}

            </div>;
            <div className="flex-1">;
              <div className="text-sm font-medium text-white">{step && step.label}</div>;
            </div>;
            {!step && step.completed && step && step.action && (;
              <Button
                asChild 
                variant="ghost" 
                size="sm" 
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue">;
                <Link href={step && step.link}>;
                  {step && step.action} <ArrowRight className="ml-1 h-4 w-4" />;
                </Link>;
              </Button>;

=======
      </div>;
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
        <div;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
          style={{ width: `${progress}%` }}
        ></div>;
      </div>;
      {/* Steps list */}
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            <div className="mr-3">
              {step.completed ? (
                <CheckCircle className="h-5 w-5 text-zion-cyan" />
              ) : (
                <Circle className="h-5 w-5 text-zion-slate-light" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{step.label}</div>
            </div>
            {!step.completed && step.action && (
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue"
              >
                <Link href={step.link}>
                  {step.action} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
          </div>
        ))}
<<<<<<< HEAD
<<<<<<< HEAD

  title = "Complete Your Profile",
import React from './react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn  } from '@/lib / utils';
import { Button  } from '@/components / ui / button';
import Link from './next / link';
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string;
}
interface OnboardingTrackerProps {
  steps: OnboardingStep[],
  title?: string;
  class_name?: string;
}
export /**
 * OnboardingTracker - Function description
 */
function OnboardingTracker() {
  const completed_steps = steps.filter (step => step.completed).length;
  const progress = Math.round ((completed_steps / steps.length) * 100);
  return (
    <div className={cn ("rounded - lg border border - zion - blue - light bg - zion - blue - dark / 60 p - 4 md:p - 6", class_name)}>;
      <div className="flex items - center justify - between mb - 4">;
        <h3 className="text - lg font - medium text - white">{title}</h3>;
        <div className="text - sm font - medium text - zion - cyan">{progress}% Complete</div>;
>>>>>>>       </div>;
      {/* Progress bar */}
      <div className="w - full h - 2 bg - zion - blue rounded - full mb - 5">;
        <div;
          className="h - 2 bg - gradient - to - r from - zion - purple to - zion - cyan rounded - full transition - all duration - 500 ease - out";
          style={{ width: `${progress}%` }}
        ></div>;
      </div>;
<<<<<<< HEAD

      {/* Steps list */}
=======
>>>>>>>       {/* Steps list */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            <div className="mr-3">
              {step.completed ? (
                <CheckCircle className="h - 5 w - 5 text - zion - cyan" />) : (
                <Circle className="h - 5 w - 5 text - zion - slate - light" />)}
            </div>;
            <div className="flex - 1">;
              <div className="text - sm font - medium text - white">{step.label}</div>;
            </div>;
            {!step.completed && step.action && (
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue"
              >
                <Link href={step.link}>
                  {step.action} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        ))}
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>
    </div>
  )
}></div> </div> {
  /* Steps list */ "
}<div className="space-y-3" > {
  steps.map ( (step) => (<div key= {
  step.id "
}className="flex items-center" > <div className="mr-3" > {"
  step.completed ? (<CheckCircle className="h-5 w-5 text-zion-cyan" /> h-5 w-5 text-zion-slate-light"/>)
}</div> </div> {"
  !step.completed && step.action && (<Button asChild variant=" ghost"size=" sm"className=" text-zion-purple hover:text-zion-cyan hover:bg-zion-blue" > <Link href= {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  step.link
}> </Link> </Button>)
}</div>) )
}</div> </div>)
}"}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      </div>;
    </div>;
  );



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  step.id ";
}className="flex items - center" > <div className="mr - 3" > {";
  step.completed ? (<CheckCircle className="h - 5 w - 5 text - zion - cyan" /> h - 5 w - 5 text - zion - slate - light"/>);
}</div> </div> {";
  !step.completed && step.action && (<Button as_child variant=" ghost"size=" sm"className=" text - zion - purple hover:text - zion - cyan hover:bg - zion - blue" > <Link href= {
  step.link;
}> </Link> </Button>);
}</div>) );
}</div> </div>);
}"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  step.link 
}> </Link> </Button>) 
}</div>) ) ;
}</div> </div>) ;
}"};
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
