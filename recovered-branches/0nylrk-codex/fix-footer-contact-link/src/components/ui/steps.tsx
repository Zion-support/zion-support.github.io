


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import React from "react";
import {cn} from "@/lib/utils";
import {CheckIcon} from "lucide-react";
  status: "incomplete" | "current" | "complete"
  label: string

  description?: string;
import { cn } from "@/lib/utils",
import { CheckIcon } from "lucide-react",
=======
=======interface StepProps {;
  status: "incomplete" | "current" | "complete",;
  label: string,;

  description?: string;
  className?: string;
}


export function Step(): any ({;

  status;
  label;
  description;
  className}: StepProps) {;
=======

  className}: StepProps) {
=======
=======

  className}: StepProps) {
          "opacity-60": status === "incomplete"},


=======
  return (
    <li

      className={cn(
        "relative flex items-center"
        {
          "opacity-60": status === "incomplete"}
          "opacity-60": status === "incomplete"},        className
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

      className={cn(
        "relative flex items-center",
        {
          "opacity-60": status === "incomplete"}
          "opacity-60": status === "incomplete"},
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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        )}
      >
        {status === "complete" ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======import React from "react",;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;

            {/* Step number would go here */}
          </span>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        )}
      </div>
      <div className="ml-4 min-w-0">
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete";
            "text-white": status === "current" |status === "complete"})}
            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}

interface StepsProps {
  currentStep: number
  className?: string;
  children: React.ReactNode
}
=======


            {/* Step number would go here */}
          </span>;
        )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}


        >
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


        >
=======
      </div>;
      <div className="ml-4 min-w-0">;
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" || status === "complete"})}>;
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
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {label}
        </h3>;
        {description && (;
          <p className="text-sm text-zion-slate-light">{description}</p>;
        )}
      </div>;
    </li>;
interface StepsProps {;
  currentStep: number,;
=======
=======  );
}





interface StepsProps {
  currentStep: number
=======

interface StepsProps {;
  currentStep: number,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  const childrenArray = React.Children.toArray(children);
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children);
;
interface StepsProps {;
  currentStep: number,;
  className?: string,;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),
  
==============
export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),
    return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {
          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
          
=======          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>
      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{


              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  )
}
=======
=======
export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (
=======


=======
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

              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
              width:`${(currentStep / (childrenArray.length - 1)) * 100}%`}}
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
=======
=======


              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
}) 
}</ol> <div className="hidden md:flex md:mt-4" > <div className="ml-[18px] w-[calc (100%-36px) ] h-0.5 bg-zion-blue-light" > <div width: `$ {
  (currentStep / (childrenArray.length - 1) ) * 100 
}%` 
}
}/> </div> </div> </div>) 
}
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
