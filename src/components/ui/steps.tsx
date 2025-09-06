<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

interface StepProps {
  status: "incomplete" | "current" | "complete";
  label: string;
  description?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  className?: string
}
export function Step({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
status;
  label;
  description;
  className}: StepProps) {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import React from "react",
import { cn } from "@/lib/utils",
import { CheckIcon } from 'lucide-react'

interface StepProps {
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string,
  className?: string
}

export function Step({
<<<<<<< HEAD
  status,
  label,
  description,
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  className}: StepProps) {
=======
  className?: string
}
export function Step({  className}: StepProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <li
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
        "relative flex items-center",
        {
          "opacity-60": status === "incomplete"},
=======

        "relative flex items-center",
        {
          "opacity-60": status === "incomplete"},

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        className
      )}
    >
      <div
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium"          {

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              status === "incomplete"
            "bg-zion-blue border-zion-cyan text-white":
              status === "current"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete",
            "bg-zion-blue border-zion-cyan text-white":
              status === "current",
            "bg-zion-purple border-zion-purple text-white":
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
              status === "complete",}
        )}>;

          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete",
            "bg-zion-blue border-zion-cyan text-white":
              status === "current",

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            "bg-zion-purple border-zion-purple text-white":
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              status === "complete"}
        )}
      >
        {status === "complete" ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>

import React from "react",;
import { cn } from "@/lib/utils",;
import { CheckIcon } from 'lucide-react';
interface StepProps {;
  status: "incomplete" | "current" | "complete",;
  label: string,;
  description?: string,;
  className?: string;
}
;
export function Step({;
  status,;
  label,;
  description,;
  className}: StepProps) {;
  return (;
    <li;
      className={cn(;
        "relative flex items-center",;
        {;
          "opacity-60": status === "incomplete"},;
        className;
      )}
    >;
      <div;
        className={cn(;
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",;
          {;
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":;
              status === "incomplete",;
            "bg-zion-blue border-zion-cyan text-white":;
              status === "current",;
            "bg-zion-purple border-zion-purple text-white":;
              status === "complete"}
        )}
      >;
<<<<<<< HEAD
<<<<<<< HEAD
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;
            {/* Step number would go here */}
          </span>;
        )}
      </div>

<<<<<<< HEAD
      <div className="ml-4 min-w-0">
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}
        >
=======
=======

            {/* Step number would go here */}
          </span>        )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",

<<<<<<< HEAD
=======

            {/* Step number would go here */}

        )}

            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

            "text-white": status === "current" || status === "complete"})}
        >
      </div>;

      <div className="ml-4 min-w-0">;
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" || status === "complete"})}>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {label}
<<<<<<< HEAD
        </h3>
        {description && (
          <p className="text-sm text-zion-slate-light">{description}</p>
        )}
<<<<<<< HEAD
      </div>;
    </li>;
  );
=======
      </div>
    </li>
  )
}





=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface StepsProps {
  currentStep: number
  className?: string
  children: React.ReactNode
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD
;
interface StepsProps {;
  currentStep: number,;
  className?: string,;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),
  
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children)

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
<<<<<<< HEAD
          
=======

          if (!React.isValidElement(child)) return null,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
          
=======
      className;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>

<<<<<<< HEAD
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

interface StepsProps {;
  currentStep: number,;
  className?: string;
  children: React && React.ReactNode;
}

export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (

}/> </div> </div> </div>) 
}"};
;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <div className={cn("w-full", className)}>;
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;
        {React.Children.map(childrenArray, (child, index) => {;
          if (!React.isValidElement(child)) return null,;
          let status: "incomplete" | "current" | "complete" = "incomplete",;
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
          return React.cloneElement(child as React.ReactElement<StepProps>, {;
            status});
        })}
      </ol>;
      <div className="hidden md:flex md:mt-4">;
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
          <div;
            className="h-full bg-zion-purple transition-all";
            style={{;
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
<<<<<<< HEAD
          />;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
          // Check condition
if (status = "current") {
  $2
}
interface StepProps {
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string;
  class_name?: string;
}
export /**
 * Step - Function description
 */
function Step() {
  return (
    <li;
      className={cn (
        "relative flex items - center";
        {
          "opacity - 60": status === "incomplete"}
        class_name)}
    >;
      <div;
        className={cn (
          "shrink - 0 h - 9 w - 9 rounded - full border flex items - center justify - center text - center font - medium" {
            "bg - zion - blue - dark border - zion - blue - light text - zion - slate - light":;
              status === "incomplete";
            "bg - zion - blue border - zion - cyan text - white":;
              status === "current";
            "bg - zion - purple border - zion - purple text - white":;
              status === "complete", }
        )}
      >;
        {status === "complete" ? (
          <CheckIcon className="h - 5 w - 5" />) : (
          <span>;
            {/* Step number would go here */}
          </span>)}
      </div>;
      <div className="ml - 4 min - w-0">;
        <h3;
          className={cn ("text - sm font - medium", {
            "text - zion - slate - light": status === "incomplete";
            "text - white": status === "current" || status === "complete"})}
        >;
          {label}
        </h3>;
        {description && (
          <p className="text - sm text - zion - slate - light">{description}</p>)}
      </div>;
    </li>);
}
interface StepsProps {
  current_step: number,
  class_name?: string;
  children: React.ReactNode;
}
export /**
 * Steps - Function description
 */
function Steps() {
  const children_array = React.Children.to_array (children);
  return (
    <div className={cn ("w - full", class_name)}>;
      <ol className="space - y-6 md:flex md:space - y-0 md:space - x-16">;
        {React.Children.map (children_array, (child, index) => {
          if () return null) {
  $2
}
          let status: "incomplete" | "current" | "complete" = "incomplete",
          // Check condition
if (status = "complete") {
  $2
}
          // Check condition
if (status = "current") {
  $2
}
          return React.clone_element (child as React.ReactElement < StepProps>, {
            status});
        })}
      </ol>;
      <div className="hidden md:flex md:mt - 4">;
        <div className="ml-[18px] w-[calc (100%-36px)] h - 0.5 bg - zion - blue - light">;
          <div;
            className="h - full bg - zion - purple transition - all";
            style={{
              width: `${(current_step / (children_array.length - 1)) * 100}%`}}
          />;
        </div>;
      </div>;
    </div>);
}/> </div> </div> </div>);
}"}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
          />
        </div>
      </div>
    </div>
  );

}/> </div> </div> </div>) ;
}"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
