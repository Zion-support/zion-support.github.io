<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f



<<<<<<< HEAD


import React from "react";
import {CheckCircle, Circle, ArrowRight} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {Link} from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { CheckCircle, Circle, ArrowRight } from "lucide-react",
import { cn } from "@/lib/utils",

=======
import {Link} from "react-router-dom";
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string
<<<<<<< HEAD

=======
}

interface OnboardingTrackerProps {
  steps: OnboardingStep[],;
  title?: string;
  className?: string
}

export function OnboardingTracker({ ;
  steps;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



import React from "react";"
import {CheckCircle, Circle, ArrowRight} from "lucide-react";"
import {cn} from "@/lib/utils";"
import {Button} from "@/components/ui/button";"
import {Link} from "react-router-dom";
"
import React from "react","
import { CheckCircle, Circle, ArrowRight } from "lucide-react","
import { cn } from "@/lib/utils",";
import { Button } from "@/components/ui/button";"
import { Link } from "react-router-dom";
export interface OnboardingStep {};
  id: string;
  label: string;
  completed: boolean;
  link: string;
  action?: string;
}
interface OnboardingTrackerProps {}
  steps: OnboardingStep[]

  title?: string;
  className?: string;
}
export function OnboardingTracker({};
  steps;
"
  title = "Complete Your Profile"
  className"
import { Button } from "@/components/ui/button","
import { Link } from "react-router-dom",
export interface OnboardingStep {}
  id: string,
  label: string,
  completed: boolean,;
  link: string,;
  action?: string;
}

interface OnboardingTrackerProps {}
  steps: OnboardingStep[],;
  title?: string;
  className?: string;
}

export function OnboardingTracker({ ;
  steps;"
import React from "react",;"
import { CheckCircle, Circle, ArrowRight } from "lucide-react",;"
import { cn } from "@/lib/utils",;"
import { Button } from "@/components/ui/button",;"
import { Link } from "react-router-dom",;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;
  action?: string;
}

<<<<<<< HEAD
export interface OnboardingStep {}
  id: string,
  label: string,
  completed: boolean,
  link: string,;
  action?: string;
"
  title = "Complete Your Profile", 
  className;
}: OnboardingTrackerProps) {}
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);

<<<<<<< HEAD
export function OnboardingTracker({ 
  steps,
  title = "Complete Your Profile", 
  className 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}: OnboardingTrackerProps) {
=======

}: OnboardingTrackerProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const completedSteps = steps.filter(step => step.completed).length,
  const progress = Math.round((completedSteps / steps.length) * 100),


  return ("
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>"
      <div className="flex items-center justify-between mb-4">"
        <h3 className="text-lg font-medium text-white">{title}</h3>"
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>
      </div>
      {/* Progress bar */}"
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
=======
import {Link} from "react-router-dom";;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {Link} from "react-router-dom";;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface OnboardingTrackerProps {;
  steps: OnboardingStep[],;

  title?: string;
  className?: string;
}

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


;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function OnboardingTracker({;
  steps,;"
  title = "Complete Your Profile",;
  className;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title?: string;
  className?: string;
}

export function OnboardingTracker(): any ({ ;
  steps;
<<<<<<< HEAD
=======


export function OnboardingTracker(): any ({ ;
  steps;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  title = "Complete Your Profile", ;
  className ;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}: OnboardingTrackerProps) {;
  const completedSteps = steps && steps.filter(step => step && step.completed).length;
  const progress = Math && Math.round((completedSteps / steps && steps.length) * 100);
<<<<<<< HEAD

  return (
  return (
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white">{title}</h3>;
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
<<<<<<< HEAD
        <div;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div
=======


  return (
"
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;"
      <div className="flex items-center justify-between mb-4">;"
        <h3 className="text-lg font-medium text-white">{title}</h3>;"
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;
      </div>;



        <div"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
        <div
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}></div>;
      </div>;



=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          style={{ width: `${progress}%` }}
        ></div>
      </div>
<<<<<<< HEAD
=======

        <div "
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
`
          style={{ width: `${progress}%` }}
        ></div>
      </div>


  title?: string;
  className?: string;
}

      {/* Steps list */}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  title?: string;
  className?: string;
}
      {/* Steps list */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="space-y-3">;
        {steps && steps.map((step) => (;"
          <div key={step && step.id} className="flex items-center">;"
            <div className="mr-3">;
              {step && step.completed ? (;"
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;
              ) : (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Circle className="h-5 w-5 text-zion-slate-light" />;
              )}
            )}
          </div>;
        ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from './react';
import { CheckCircle, Circle, ArrowRight } from './lucide-react';
import { cn } from '@/lib / utils';
import { Button } from '@/components / ui / button';
<<<<<<< HEAD
=======
import React from './react';'
import { CheckCircle, Circle, ArrowRight } from './lucide-react';'
import { cn } from '@/lib / utils';'
import { Button } from '@/components / ui / button';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Link } from './react-router-dom';
export interface OnboardingStep {}
  id: string,
  label: string,
  completed: boolean,
  link: string,;
  action?: string;
}
interface OnboardingTrackerProps {}
=======
import { Link } from './react-router-dom';



import React from "react";""
import {CheckCircle, Circle, ArrowRight} from "lucide-react";""
import {cn} from "@/lib/utils";""
import {Button} from "@/components/ui/button";""
import {Link} from "react-router-dom";""
import React from "react",""
import { CheckCircle, Circle, ArrowRight } from "lucide-react",""
import { cn } from "@/lib/utils",""
import { Button } from "@/components/ui/button";""
import { Link } from "react-router-dom";"
export interface OnboardingStep {
  // TODO: Implement
}
  id: string;,
  label: string;
  completed: boolean;,
  link: string;
  action?: string;
interface OnboardingTrackerProps {
  // TODO: Implement
  steps: OnboardingStep[]

  title?: string;
  className?: string;
export function OnboardingTracker({
  steps;
"
  title = "Complete Your Profile""
  className;"
import { Button } from "@/components/ui/button",""
import { Link } from "react-router-dom","
  // TODO: Implement
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string;
}
interface OnboardingTrackerProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  steps: OnboardingStep[],
  title?: string;
  class_name?: string;
}
<<<<<<< HEAD
export /**;
 * OnboardingTracker - Function description;
 */
function OnboardingTracker() {}
=======
export /**
 * OnboardingTracker - Function description
 */
function OnboardingTracker() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  // TODO: Implement
  action?: string;"
  title = "Complete Your Profile","
  className;)
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  const completedSteps = steps.filter(step => step.completed).length,
  const progress = Math.round((completedSteps / steps.length) * 100),

  return ()"
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>"
</div>"
      <div className="flex items-center justify-between mb-4">"
        <h3 className="text-lg font-medium text-white">{title}</h3>""
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>"
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">"
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;"
      <div className="flex items-center justify-between mb-4">;"
        <h3 className="text-lg font-medium text-white">{title}</h3>;""
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;"
      </div>;"
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;"
</div>
        <div;"
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out""
          style={{ width: `${progress}%` }}></div>;
      </div>;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out""`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
      <div className="space-y-3">;"
          <div key={step && step.id} className="flex items-center">;"
            <div className="mr-3">;"
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;"
                <Circle className="h-5 w-5 text-zion-slate-light" />;"

          </div>;"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
