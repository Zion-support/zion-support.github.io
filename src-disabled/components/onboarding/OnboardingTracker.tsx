:src_backup/components/onboarding/OnboardingTracker.tsx
import React from "react",
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import Link from "next/link",
{/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"


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
                variant="ghost" "
                size="sm" "
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue">;
                <Link href={step && step.link} />;
                  {step && step.action} <ArrowRight className="ml-1 h-4 w-4" />;
                </Link>;
              </Button>;
            )}
          </div>
        ))}
  title = "Complete Your Profile","
import React from './react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn  } from '@/lib / utils';
import { Button  } from '@/components / ui / button';
import Link from './next / link';
:src/components/onboarding/OnboardingTracker.tsx

import React from "react",
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import Link from "next/link",
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button";
import Link from "next/link";
export interface OnboardingStep {
  id: string;
  label: string;
  completed: boolean;
  link: string;
  title = "Complete Your Profile"
origin/cursor/automate-test-improve-and-merge-code-2533
import React from "react"
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
export interface OnboardingStep {
  id: string
  label: string
  completed: boolean
  link: string
:src_backup/components/onboarding/OnboardingTracker.tsx
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
:src/components/onboarding/OnboardingTracker.tsx
  action?: string
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
  action?: string
}
interface OnboardingTrackerProps {

  title?: string;
  className?: string
}

export function OnboardingTracker({ 
  steps;
:src_backup/components/onboarding/OnboardingTracker.tsx
  title;
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
      </div>;
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
        <div;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
:src/components/onboarding/OnboardingTracker.tsx
  action?: string;
}
interface OnboardingTrackerProps {,
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
      </div>;
      {/* Progress bar */}
      <div className="w - full h - 2 bg - zion - blue rounded - full mb - 5">;
        <div;
          className="h - 2 bg - gradient - to - r from - zion - purple to - zion - cyan rounded - full transition - all duration - 500 ease - out";
:src_backup/components/onboarding/OnboardingTracker.tsx

          style={{ width: `${progress}%` }}
        ></div>;
      </div>;
      {/* Steps list */}
:src/components/onboarding/OnboardingTracker.tsx
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
:src_backup/components/onboarding/OnboardingTracker.tsx
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
      <div className="space - y-3">;
        {steps.map ((step, ) => (
          <div key={step.id} className="flex items - center">;
            <div className="mr - 3">;
              {step.completed ? (
                <CheckCircle className="h - 5 w - 5 text - zion - cyan" />) : ("
                <Circle className="h - 5 w - 5 text - zion - slate - light" />)}"
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
                <Link href={step.link} />;
                  {step.action} <ArrowRight className="ml - 1 h - 4 w - 4" />;
                </Link>;
              </Button>)}
          </div>))}
      </div>;
    </div>);
}></div> </div> {
  /* Steps list */ ""
}<div className="space-y-3" > {"
  steps.map ( (step) => (<div key= {
:src_backup/components/onboarding/OnboardingTracker.tsx

  step.link 
            {!step.completed && step.action && (  step.link 
}> </Link> </Button>) 
}</div>) ) ;
}</div> </div>) ;
}"};

      </div>;
    </div>;
  );
:src/components/onboarding/OnboardingTracker.tsx
}
;

origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/onboarding/OnboardingTracker.tsx
