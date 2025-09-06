<<<<<<< HEAD

<<<<<<< HEAD
  title = "Complete Your Profile"
=======
<<<<<<< HEAD
  title = "Complete Your Profile"
=======
<<<<<<< HEAD
  title = "Complete Your Profile", 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React from "react"
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
<<<<<<< HEAD
export interface OnboardingStep {
  id: string
  label: string
  completed: boolean
  link: string

  action?: string
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

=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import Link from "next/link",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export interface OnboardingStep {
  id: string
  label: string
  completed: boolean
  link: string
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string
<<<<<<< HEAD
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  action?: string
<<<<<<< HEAD
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
=======
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

export function OnboardingTracker({ 
  steps,
  title = "Complete Your Profile", 
  className 
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length,
  const progress = Math.round((completedSteps / steps.length) * 100),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
<<<<<<< HEAD
          style={{ width: `${progress}%` }}
        ></div>
      </div>
  title = "Complete Your Profile", ;
import React from "react";
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;
  action?: string;
}

interface OnboardingTrackerProps {;
  steps: OnboardingStep[],;
  title?: string;
  className?: string;
}

export function OnboardingTracker(): any ({ ;
  steps;
  title = "Complete Your Profile", ;
  className ;
}: OnboardingTrackerProps) {;
  const completedSteps = steps && steps.filter(step => step && step.completed).length;
  const progress = Math && Math.round((completedSteps / steps && steps.length) * 100);

  return (
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          style={{ width: `${progress}%` }}
        ></div>
      </div>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
;
export function OnboardingTracker({;
  steps,;
  title = "Complete Your Profile",;
  className;
}: OnboardingTrackerProps) {;
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  return (;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white">{title}</h3>;
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;
      </div>;
<<<<<<< HEAD

      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}></div>;
      </div>;

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
            )}
          </div>;
        ))}
      </div>
    </div>
  )
=======
      {/* Progress bar */}
      <div className="w - full h - 2 bg - zion - blue rounded - full mb - 5">;
        <div;
          className="h - 2 bg - gradient - to - r from - zion - purple to - zion - cyan rounded - full transition - all duration - 500 ease - out";
          style={{ width: `${progress}%` }}
        ></div>;
      </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Steps list */}
      <div className="space - y-3">;
        {steps.map ((step, ) => (
          <div key={step.id} className="flex items - center">;
            <div className="mr - 3">;
              {step.completed ? (
                <CheckCircle className="h - 5 w - 5 text - zion - cyan" />) : (
                <Circle className="h - 5 w - 5 text - zion - slate - light" />)}
            </div>;
            <div className="flex - 1">;
              <div className="text - sm font - medium text - white">{step.label}</div>;
            </div>;
            {!step.completed && step.action && (
              <Button;
                as_child;
                variant="ghost";
                size="sm";
                className="text - zion - purple hover:text - zion - cyan hover:bg - zion - blue";
              >;
                <Link href={step.link}>;
                  {step.action} <ArrowRight className="ml - 1 h - 4 w - 4" />;
                </Link>;
              </Button>)}
          </div>))}
      </div>;
    </div>);

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}></div> </div> {
  /* Steps list */ ";
}<div className="space - y-3" > {
  steps.map ( (step) => (<div key= {
  step.id "
}className="flex items-center" > <div className="mr-3" > {"
  step.completed ? (<CheckCircle className="h-5 w-5 text-zion-cyan" /> h-5 w-5 text-zion-slate-light"/>)
}</div> </div> {"
  !step.completed && step.action && (<Button asChild variant=" ghost"size=" sm"className=" text-zion-purple hover:text-zion-cyan hover:bg-zion-blue" > <Link href= {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  step.link
}> </Link> </Button>)
}</div>) )
}</div> </div>)
}"}
<<<<<<< HEAD


=======
=======
  step.link 
}> </Link> </Button>) 
}</div>) ) ;
}</div> </div>) ;
}"};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </div>;
    </div>;
  );


=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
