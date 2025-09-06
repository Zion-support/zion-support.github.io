import React from "react",
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
interface StepProps {

  status: "incomplete" | "current" | "complete"
  label: string

  description?: string;
import { cn } from "@/lib/utils",
import { CheckIcon } from "lucide-react",



<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

import React from "react";
import {cn} from "@/lib/utils";
import {CheckIcon} from "lucide-react";
interface StepProps {;
  status: "incomplete" | "current" | "complete",;
  label: string,;

  description?: string;
  className?: string;
}
<<<<<<< HEAD


export function Step(): any ({;

=======
  description?: string;
  className?: string;
}
export function Step(): any ({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  status;
  label;
  description;
  className}: StepProps) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

import React from "react";
import {cn} from "@/lib/utils";
import {CheckIcon} from "lucide-react";
import React from "react",
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
interface StepProps {

  status: "incomplete" | "current" | "complete"
  label: string

  description?: string;
import { cn } from "@/lib/utils",
import { CheckIcon } from "lucide-react",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface StepProps {
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string,
  className?: string
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export function Step({;
  status;
  label;
  description;
export function Step({
  status,
  label,
  description,
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  className}: StepProps) {
  return (
    <li
      className={cn(
        "relative flex items-center"
        {
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
  className}: StepProps) {
  return (
    <li

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        )}
      >
        {status === "complete" ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Step number would go here */}
          </span>;
        )}
=======
            {/* Step number would go here */}
          </span>
        )}
      </div>
      <div className="ml-4 min-w-0">
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete";
            "text-white": status === "current" |status === "complete"})}
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}

interface StepsProps {
  currentStep: number
  className?: string;
  children: React.ReactNode
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export function Steps({ currentStep, className, children }: StepsProps) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children);
;


        >
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </div>;

      <div className="ml-4 min-w-0">;
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" || status === "complete"})}>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            {/* Step number would go here */}
          </span>;
        )}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          {label}
        </h3>;
        {description && (;
          <p className="text-sm text-zion-slate-light">{description}</p>;
        )}
      </div>;
    </li>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
=======





interface StepsProps {
  currentStep: number
=======

=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface StepsProps {;
  currentStep: number,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children: React && React.ReactNode;
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export function Steps({ currentStep, className, children }: StepsProps) {;


  const childrenArray = React.Children.toArray(children);
<<<<<<< HEAD
=======
export function Steps({ currentStep, className, children }: StepsProps) {

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
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          if (!React.isValidElement(child)) return null;
          let status: "incomplete" | "current" | "complete" = "incomplete"
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
          
<<<<<<< HEAD

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
<<<<<<< HEAD

<<<<<<< HEAD

export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (
=======


=======
=======
export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);
  return (


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
;
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;
<<<<<<< HEAD
=======
<<<<<<< HEAD
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

=======
        <div className="ml-[18px] w-[calc(100%-36px)] h-0 && 0.5 bg-zion-blue-light">;
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
              width: `${(currentStep / (childrenArray && childrenArray.length - 1)) * 100}%`}}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
          <div;
            className="h-full bg-zion-purple transition-all";
            style={{;


<<<<<<< HEAD
<<<<<<< HEAD

              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
              width:`${(currentStep / (childrenArray.length - 1)) * 100}%`}}
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          />;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
}
  className?: string;
  children: React && React.ReactNode;
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
