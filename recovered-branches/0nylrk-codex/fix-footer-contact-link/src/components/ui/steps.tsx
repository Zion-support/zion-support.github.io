<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx


<<<<<<< HEAD
import React from "react",

=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx
import React from "react";
import {cn} from "@/lib/utils";
import {CheckIcon} from "lucide-react";
interface StepProps {;
  status: "incomplete" | "current" | "complete",;
  label: string,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx

  description?: string;
  className?: string;
}


export function Step(): any ({;

========
  description?: string;
  className?: string;
}
export function Step(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx
  status;
  label;
  description;
  className}: StepProps) {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {cn} from "@/lib/utils";
import {CheckIcon} from "lucide-react";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
interface StepProps {

  status: "incomplete" | "current" | "complete"
  label: string

  description?: string;
=======
import { cn } from "@/lib/utils",
import { CheckIcon } from "lucide-react",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface StepProps {
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string,
<<<<<<< HEAD

  className?: string
}

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  className?: string
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function Step({;
  status;
  label;
  description;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function Step({
  status,
  label,
  description,
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  className}: StepProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <li
      className={cn(
        "relative flex items-center"
        {

<<<<<<< HEAD
=======

          "opacity-60": status === "incomplete"},


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        className
      )}>;
      <div
        className={cn(
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium"
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete"
            "bg-zion-blue border-zion-cyan text-white":
              status === "current"
            "bg-zion-purple border-zion-purple text-white":
              status === "complete"}

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  className}: StepProps) {
  return (
    <li

      className={cn(
        "relative flex items-center",
        {
<<<<<<< HEAD
          "opacity-60": status === "incomplete"}
=======
          "opacity-60": status === "incomplete"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        className
      )}
    >
      <div
        className={cn(
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete",
            "bg-zion-blue border-zion-cyan text-white":
              status === "current",
            "bg-zion-purple border-zion-purple text-white":
              status === "complete"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        )}
      >
        {status === "complete" ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
import React from "react",;
import { cn } from "@/lib/utils",;
import { CheckIcon } from "lucide-react",;
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
    >
      <div
        className={cn(
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium";
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete";
            "bg-zion-blue border-zion-cyan text-white":
              status === "current";
            "bg-zion-purple border-zion-purple text-white":
              status === "complete"}
        )}
      >;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {/* Step number would go here */}
          </span>;
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {/* Step number would go here */}
          </span>
        )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>
      <div className="ml-4 min-w-0">
        <h3
          className={cn("text-sm font-medium", {
<<<<<<< HEAD

=======
<<<<<<< HEAD
            "text-zion-slate-light": status === "incomplete";
            "text-white": status === "current" |status === "complete"})}
=======
            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        >
          {label}
        </h3>
        {description && (
          <p className="text-sm text-zion-slate-light">{description}</p>
        )}
      </div>
    </li>
  )
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface StepsProps {
  currentStep: number
  className?: string;
  children: React.ReactNode
}
<<<<<<< HEAD

  const childrenArray = React.Children.toArray(children);

;
=======


            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}


        >
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx
      </div>;
      <div className="ml-4 min-w-0">;
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" || status === "complete"})}>;
=======

import React from "react",;
import { cn } from "@/lib/utils",;
import { CheckIcon } from "lucide-react",;
;
interface StepProps {;
  status:"incomplete" | "current" | "complete",;
  label:string,;
  description?:string,;
  className?:string;
}
;
export function Step({;
  status,;
  label,;
  description,;
  className} StepProps) {;
  return (;
    <li;
      className={cn(;
        "relative flex items-center",;
        {;
          "opacity-60":status === "incomplete"},;
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
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) :(;
          <span>;            {/* Step number would go here */}
          </span>;
        )}
      </div>;
;
      <div className="ml-4 min-w-0">;
        <h3;
          className={cn("text-sm font-medium", {;
            "text-zion-slate-light":status === "incomplete",;
            "text-white":status === "current" || status === "complete"})}
        >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          {label}
        </h3>;
        {description && (;
          <p className="text-sm text-zion-slate-light">{description}</p>;
        )}
      </div>;
    </li>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx





interface StepsProps {
  currentStep: number
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx
interface StepsProps {;
  currentStep: number,;
  className?: string;
  children: React && React.ReactNode;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx

<<<<<<< HEAD
export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),

=======


export function Steps({ currentStep, className, children }: StepsProps) {;


  const childrenArray = React.Children.toArray(children);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export function Steps({ currentStep, className, children }: StepsProps) {
=======

export function Steps({ currentStep, className, children }: StepsProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const childrenArray = React.Children.toArray(children);
=======
;
interface StepsProps {;
  currentStep: number,;
  className?: string,;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
          if (!React.isValidElement(child)) return null;
          let status: "incomplete" | "current" | "complete" = "incomplete"
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
          
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>
      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
<<<<<<< HEAD

<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx
export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);
  return (
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;
<<<<<<< HEAD

    <div className={cn("w-full", className)}>;
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;
        {React && React.Children.map(childrenArray, (child, index) => {;
          if (!React && React.isValidElement(child)) return null;
          let status: "incomplete" | "current" | "complete" = "incomplete",;
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
          return React && React.cloneElement(child as React && React.ReactElement<StepProps>, {;
            status});
        })}
      </ol>;
      <div className="hidden md:flex md:mt-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx

========
        <div className="ml-[18px] w-[calc(100%-36px)] h-0 && 0.5 bg-zion-blue-light">;
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
              width: `${(currentStep / (childrenArray && childrenArray.length - 1)) * 100}%`}}
=======
  ),;}
;
interface StepsProps {;
  currentStep:number,;
  className?:string,;
  children:React.ReactNode;
}
;
export function Steps({ currentStep, className, children } StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  ;
  return (;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className={cn("w-full", className)}>;
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;
        {React.Children.map(childrenArray, (child, index) => {;
          if (!React.isValidElement(child)) return null,;
<<<<<<< HEAD
          ;
          let status:"incomplete" | "current" | "complete" = "incomplete",;
          if (index < currentStep) status = "complete",;
          if (index === currentStep) status = "current",;
          ;
          return React.cloneElement(child as React.ReactElement<StepProps>, {;
            status}),;
        })}
      </ol>;
      ;
      <div className="hidden md:flex md:mt-4">;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx
=======
          let status: "incomplete" | "current" | "complete" = "incomplete",;
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
          return React.cloneElement(child as React.ReactElement<StepProps>, {;
            status});
        })}
      </ol>;
      <div className="hidden md:flex md:mt-4">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
          <div;
            className="h-full bg-zion-purple transition-all";
            style={{;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
              width:`${(currentStep / (childrenArray.length - 1)) * 100}%`}}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          />;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
import React from './react';
import { cn } from '@/lib / utils';
import { CheckIcon } from './lucide-react';
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
          "shrink - 0 h - 9 w - 9 rounded - full border flex items - center justify - center text - center font - medium";
          {
            "bg - zion - blue - dark border - zion - blue - light text - zion - slate - light":;
              status === "incomplete";
            "bg - zion - blue border - zion - cyan text - white":;
              status === "current";
            "bg - zion - purple border - zion - purple text - white":;
              status === "complete"}
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
;
<<<<<<< HEAD

=======
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
=======
  ),; 
}status, label, description, className 
}: StepProps) {
  return (<li className= {
  cn (className) 
}> <div) : (<span> {
  /* Step number would go here */ 
}</span>) 
}</div> <div className="ml-4 min-w-0" > <h3 > {
  label 
}</h3>) 
}</div> </li>) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}) 
}</ol> <div className="hidden md:flex md:mt-4" > <div className="ml-[18px] w-[calc (100%-36px) ] h-0.5 bg-zion-blue-light" > <div width: `$ {
  (currentStep / (childrenArray.length - 1) ) * 100 
}%` 
}
}/> </div> </div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/steps.tsx
=======
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
