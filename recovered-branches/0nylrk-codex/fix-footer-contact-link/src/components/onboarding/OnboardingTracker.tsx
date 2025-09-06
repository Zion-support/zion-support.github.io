<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx


<<<<<<< HEAD
import React from "react",
import { CheckCircle, Circle, ArrowRight } from "lucide-react",
import { cn } from "@/lib/utils",

=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {CheckCircle, Circle, ArrowRight} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { CheckCircle, Circle, ArrowRight } from "lucide-react",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export interface OnboardingStep {

  id: string
  label: string
  completed: boolean
  link: string

  action?: string
}
interface OnboardingTrackerProps {

  steps: OnboardingStep[]

  title?: string;
  className?: string
}
export function OnboardingTracker({
  steps;

  title = "Complete Your Profile"
  className
=======
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
}

interface OnboardingTrackerProps {
  steps: OnboardingStep[],;
  title?: string;
  className?: string
}

export function OnboardingTracker({ ;
  steps;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
<<<<<<< HEAD
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx
import React from "react";
import {CheckCircle, Circle, ArrowRight} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;
  action?: string;
}
<<<<<<< HEAD
interface OnboardingTrackerProps {;
  steps: OnboardingStep[],;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx

  title?: string;
  className?: string;
}

<<<<<<< HEAD
export function OnboardingTracker({ 
  steps,
=======
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  title = "Complete Your Profile", 
  className 

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
=======
;
interface OnboardingTrackerProps {;
  steps: OnboardingStep[],;
  title?: string,;
  className?: string;
}

export function OnboardingTracker({ 
  steps,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  title = "Complete Your Profile", 
  className 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length,
  const progress = Math.round((completedSteps / steps.length) * 100),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>
      </div>
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
=======
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
export function OnboardingTracker({;
  steps,;
  title = "Complete Your Profile",;
  className;
<<<<<<< HEAD
=======

========
  title?: string;
  className?: string;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx
export function OnboardingTracker(): any ({ ;
  steps;
  title = "Complete Your Profile", ;
  className ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}: OnboardingTrackerProps) {;
  const completedSteps = steps && steps.filter(step => step && step.completed).length;
  const progress = Math && Math.round((completedSteps / steps && steps.length) * 100);
  return (
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
}: OnboardingTrackerProps) {;
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white">{title}</h3>;
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
<<<<<<< HEAD
        <div;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
=======
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}></div>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx


=======

        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

          style={{ width: `${progress}%` }}
        ></div>
      </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx
      {/* Steps list */}
      <div className="space-y-3">;
        {steps && steps.map((step) => (;
          <div key={step && step.id} className="flex items-center">;
            <div className="mr-3">;
              {step && step.completed ? (;
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;
              ) : (;
=======
      ;
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
        <div ;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
          style={{ width:`${progress}%` }}
        ></div>;
      </div>;
      ;
      {/* Steps list */}
      <div className="space-y-3">;
        {steps.map((step) => (;
          <div key={step.id} className="flex items-center">;
            <div className="mr-3">;
              {step.completed ? (;
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;
              ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <Circle className="h-5 w-5 text-zion-slate-light" />;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx
            </div>;
            <div className="flex-1">;
<<<<<<< HEAD
              <div className="text-sm font-medium text-white">{step && step.label}</div>;
            </div>;
            {!step && step.completed && step && step.action && (;
              <Button
                asChild 
                variant="ghost" 
                size="sm" 
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue">;
                <Link to={step && step.link}>;
                  {step && step.action} <ArrowRight className="ml-1 h-4 w-4" />;
                </Link>;
              </Button>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx
            )}
=======
              <div className="text-sm font-medium text-white">{step.label}</div>;
            </div>;
            {!step.completed && step.action && (;
              <Button ;
                asChild ;
                variant="ghost" ;
                size="sm" ;
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue";
              >;
                <Link to={step.link}>;
                  {step.action} <ArrowRight className="ml-1 h-4 w-4" />;
                </Link>;
              </Button>;            )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </div>;
        ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
import React from './react';
import { CheckCircle, Circle, ArrowRight } from './lucide-react';
import { cn } from '@/lib / utils';
import { Button } from '@/components / ui / button';
import { Link } from './react-router-dom';
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
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
          style={{ width: `${progress}%` }}
        ></div>;
      </div>;
      {/* Steps list */}
      <div className="space - y-3">;
        {steps.map ((step) => (
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
                <Link to={step.link}>;
                  {step.action} <ArrowRight className="ml - 1 h - 4 w - 4" />;
                </Link>;
              </Button>)}
          </div>))}
      </div>;
    </div>);
=======
  ),; export interface OnboardingStep {
  id: string;
label: string;
completed: boolean;
link: string;
action?: string 
}interface OnboardingTrackerProps {
  steps: OnboardingStep[];
title?: string;
className?: string 
}export function OnboardingTracker ({
  className 
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter (step => step.completed) .length;
const progress = Math.round ( (completedSteps /steps.length) * 100);
return (<div className= {
  cn ("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className) 
}> <div className="flex items-center justify-between mb-4" > <h3 className="text-lg font-medium text-white" > {
  title 
}</h3> <div className="text-sm font-medium text-zion-cyan" > {
  progress 
}% Complete</div> </div> {
  /* Progress bar */ 
}<div className="w-full h-2 bg-zion-blue rounded-full mb-5" > <div className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out" style= {
  {
  width: `$ {
  progress 
}%` 
}
}></div> </div> {
  /* Steps list */ 
}<div className="space-y-3" > {
  steps.map ( (step) => (<div key= {
  step.id 
}className="flex items-center" > <div className="mr-3" > {
  step.completed ? (<CheckCircle className="h-5 w-5 text-zion-cyan" /> h-5 w-5 text-zion-slate-light"/>) 
}</div> </div> {
  !step.completed && step.action && (<Button asChild variant=" ghost"size=" sm"className=" text-zion-purple hover:text-zion-cyan hover:bg-zion-blue" > <Link to= {
  step.link 
}> </Link> </Button>) 
}</div>) ) 
}</div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/OnboardingTracker.tsx
=======
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
        <div;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          style={{ width: `${progress}%` }}
        ></div>
      </div>
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
                <Link to={step.link}>
                  {step.action} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        ))}
<<<<<<< HEAD
      </div>
    </div>
  )
}
=======
      </div>;
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
