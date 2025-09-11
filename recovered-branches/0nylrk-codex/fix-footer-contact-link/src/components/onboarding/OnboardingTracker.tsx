
<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import {CheckCircle, Circle, ArrowRight} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;
  action?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface OnboardingTrackerProps {;
  steps: OnboardingStep[],;

  title?: string;
  className?: string;
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string


  title = "Complete Your Profile", 
  className 

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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function OnboardingTracker({ 
  steps,
  title = "Complete Your Profile", 
  className 
}: OnboardingTrackerProps) {
<<<<<<< HEAD
  const completedSteps = steps.filter(step => step.completed).length,
  const progress = Math.round((completedSteps / steps.length) * 100),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
;
export function OnboardingTracker({;
  steps,;
  title = "Complete Your Profile",;
  className;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  title?: string;
  className?: string;
}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function OnboardingTracker(): any ({ ;
  steps;
  title = "Complete Your Profile", ;
  className ;
}: OnboardingTrackerProps) {;
  const completedSteps = steps && steps.filter(step => step && step.completed).length;
  const progress = Math && Math.round((completedSteps / steps && steps.length) * 100);
<<<<<<< HEAD
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
}: OnboardingTrackerProps) {;
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white">{title}</h3>;
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}></div>;
      </div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"

          style={{ width: `${progress}%` }}
        ></div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Steps list */}
      <div className="space-y-3">;
        {steps && steps.map((step) => (;
          <div key={step && step.id} className="flex items-center">;
            <div className="mr-3">;
              {step && step.completed ? (;
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;
              ) : (;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                <Link to={step && step.link}>;
                  {step && step.action} <ArrowRight className="ml-1 h-4 w-4" />;
                </Link>;
              </Button>;

            )}
          </div>;
        ))}
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      </div>
    </div>
  )
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
<<<<<<< HEAD



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
