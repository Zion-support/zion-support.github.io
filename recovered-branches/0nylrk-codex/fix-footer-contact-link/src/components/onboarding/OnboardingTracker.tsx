<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react",
import { CheckCircle, Circle, ArrowRight } from "lucide-react",
import { cn } from "@/lib/utils",
=======

<<<<<<< HEAD
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
import {CheckCircle, Circle, ArrowRight} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React from "react",
import { CheckCircle, Circle, ArrowRight } from "lucide-react",
import { cn } from "@/lib/utils",
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
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string
}

interface OnboardingTrackerProps {
  steps: OnboardingStep[],;
  title?: string;
  className?: string
}

export function OnboardingTracker({ ;
  steps;
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;
  action?: string;
}
<<<<<<< HEAD
=======

interface OnboardingTrackerProps {;
  steps: OnboardingStep[],;

  title?: string;
  className?: string;
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string

import React from "react",;
import { CheckCircle, Circle, ArrowRight } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;

export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;
  action?: string;
}

<<<<<<< HEAD
  const completedSteps = steps.filter(step => step.completed).length,
  const progress = Math.round((completedSteps / steps.length) * 100),
=======
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return ("
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>"
      <div className="flex items-center justify-between mb-4">"
        <h3 className="text-lg font-medium text-white">{title}</h3>"
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>
      </div>
      {/* Progress bar */}"
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
;
export function OnboardingTracker({;
  steps,;
  title = "Complete Your Profile",;
  className;
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"

;

export function OnboardingTracker({;
  steps,;"
  title = "Complete Your Profile",;
  className;

  title?: string;
  className?: string;
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

=======
  return (
<<<<<<< HEAD

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
>>>>>>> merged-prs-20250907-203621
}: OnboardingTrackerProps) {;
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white">{title}</h3>;
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div

          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}></div>;
      </div>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"

          style={{ width: `${progress}%` }}
        ></div>
      </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Steps list */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="space-y-3">;
        {steps && steps.map((step) => (;"
          <div key={step && step.id} className="flex items-center">;"
            <div className="mr-3">;
              {step && step.completed ? (;"
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;
              ) : (;
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
                <Circle className="h-5 w-5 text-zion-slate-light" />;
              )}
            </div>;
            <div className="flex-1">;
            )}
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
          </div>;
        ))}
      </div>;
    </div>;
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
}
>>>>>>> merged-prs-20250907-203621
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
        <div;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
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
      </div>
    </div>
  )
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <Circle className="h-5 w-5 text-zion-slate-light" />;
              )}
            )}
          </div>;
        ))}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from './react';
import { CheckCircle, Circle, ArrowRight } from './lucide-react';
import { cn } from '@/lib / utils';
import { Button } from '@/components / ui / button';

import { Link } from './react-router-dom';
export interface OnboardingStep {}
  id: string,
  label: string,
  completed: boolean,
  link: string,;
  action?: string;
}
interface OnboardingTrackerProps {}

  steps: OnboardingStep[],
  title?: string;
  class_name?: string;
}

  const completed_steps = steps.filter (step => step.completed).length;
  const progress = Math.round ((completed_steps / steps.length) * 100);
;

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
                <Circle className="h-5 w-5 text-zion-slate-light" />;
              )}
            </div>;
            <div className="flex-1">;
            )}
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
          </div>;
        ))}
      </div>;
    </div>;
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

  // TODO: Implement
  steps: OnboardingStep[],;

<<<<<<< HEAD
export function OnboardingTracker({ ;
  steps;"
import React from "react",;""
import { CheckCircle, Circle, ArrowRight } from "lucide-react",;""
import { cn } from "@/lib/utils",;""
import { Button } from "@/components/ui/button",;""
import { Link } from "react-router-dom",;"
export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;

interface OnboardingTrackerProps {;

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
      </div>
    </div>
  )
}

      </div>;
    </div>;
  );
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
