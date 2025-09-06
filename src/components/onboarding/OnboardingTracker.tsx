<<<<<<< HEAD
<<<<<<< HEAD
{/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"

=======
  title = "Complete Your Profile"
  title = "Complete Your Profile", 
  title = "Complete Your Profile"
  title = "Complete Your Profile", 
import React from "react"
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"


import React from "react",
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import Link from "next/link",
export interface OnboardingStep {
  id: string
  label: string
  completed: boolean
  link: string
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string
}

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

  return (
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>
      </div>
{/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"

      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            )}
          </div>;
        ))}

  title = "Complete Your Profile",
import React from './react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn  } from '@/lib / utils';
import { Button  } from '@/components / ui / button';
import Link from './next / link';
import React from "react"
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react",
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import Link from "next/link",
export interface OnboardingStep {
  id: string
  label: string
  completed: boolean
  link: string
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  return (
<<<<<<< HEAD
    <div className={cn ("rounded - lg border border - zion - blue - light bg - zion - blue - dark / 60 p - 4 md:p - 6", class_name)}>;
      <div className="flex items - center justify - between mb - 4">;
        <h3 className="text - lg font - medium text - white">{title}</h3>;
        <div className="text - sm font - medium text - zion - cyan">{progress}% Complete</div>;
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>
      </div>
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </div>;
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
        <div;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
          style={{ width: `${progress}%` }}
        ></div>;
      </div>;
      {/* Steps list */}
<<<<<<< HEAD
      <div className="space - y-3">;
        {steps.map ((step, ) => (
          <div key={step.id} className="flex items - center">;
            <div className="mr - 3">;
=======
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            <div className="mr-3">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
<<<<<<< HEAD
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

}></div> </div> {
  /* Steps list */ ";
}<div className="space - y-3" > {
  steps.map ( (step) => (<div key= {


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  step.link 
}> </Link> </Button>) 
}</div>) ) ;
}</div> </div>) ;
}"};


<<<<<<< HEAD
=======
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
  step.link
}> </Link> </Button>)
}</div>) )
}</div> </div>)
}"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      </div>;
    </div>;
  );




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
}
;
=======
  step.link 
}> </Link> </Button>) 
}</div>) ) ;
}</div> </div>) ;
}"};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
