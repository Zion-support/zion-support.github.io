<<<<<<< HEAD
<<<<<<< HEAD
          if (index < currentStep) status = "complete"
          if (index === currentStep) status = "current"
interface StepProps {
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string

import React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from 'lucide-react'

interface StepProps {

  status: "incomplete" | "current" | "complete"
  label: string
  description?: string

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
status;
  label;
  description;
  className}: StepProps) {;


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  className?: string
}
export function Step({


  className}: StepProps) {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  status
  label
  description
  status,
  label,
  description,
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  className}: StepProps) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <li

      className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
        "relative flex items-center"
        {
          "opacity-60": status === "incomplete"}
      )}
    >
      <div
        className={cn(
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium" {
ursor/fix-website-loading-errors-and-merge-6662
        "relative flex items-center"
        {
          "opacity-60": status === "incomplete"}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        "relative flex items-center"
        {
          "opacity-60": status === "incomplete"}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "relative flex items-center",
        {
          "opacity-60": status === "incomplete"},


        className
      )}
    >
      <div
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium" {
=======

          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium"          {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium" {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete"
            "bg-zion-blue border-zion-cyan text-white":
              status === "current"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete",
            "bg-zion-blue border-zion-cyan text-white":
              status === "current",
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            "bg-zion-purple border-zion-purple text-white":
              status === "complete",}
        )}>;

          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete",
            "bg-zion-blue border-zion-cyan text-white":
              status === "current",

            "bg-zion-purple border-zion-purple text-white":
              status === "complete"}
        )}
      >
        {status === "complete" ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            "text-white": status === "current" |status === "complete"})}
          {label}
        </h3>
        {description && (
          <p className="text-sm text-zion-slate-light">{description}</p>
        )}
      </div>
    </li>
  )
}
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;



            {/* Step number would go here */}
          </span>;
        )}
<<<<<<< HEAD


            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",


            "text-white": status === "current" || status === "complete"})}
        >
      </div>;

      <div className="ml-4 min-w-0">;
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" || status === "complete"})}>;
<<<<<<< HEAD
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" |status === "complete"})}
            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}
        >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface StepsProps {
  currentStep: number
  className?: string
  children: React.ReactNode
}
export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children)
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
interface StepsProps {;
  currentStep: number,;
  className?: string,;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),
  
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
  
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {
<<<<<<< HEAD
          if (!React.isValidElement(child)) return null
          let status: "incomplete" | "current" | "complete" = "incomplete"
          if (index < currentStep) status = "complete"
          if (index === currentStep) status = "current"

  



  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
          
<<<<<<< HEAD
          



=======



          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
          
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="hidden md:flex md:mt-4">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
<<<<<<< HEAD
}/> </div> </div> </div>)
}"}
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  )
}/> </div> </div> </div>)
}"}
}/> </div> </div> </div>) 
}"};
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

;
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
          />;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          // Check condition
if (status = "complete") {
  $2
}
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
};
export const _Step = ({ children, className, isActive, isCompleted }) => {
    return (<div className={cn("flex items-center space-x-2", isActive && "text-primary", isCompleted && "text-green-600", className)}>
      <div className={cn("flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium", isActive && "border-primary bg-primary text-white", isCompleted && "border-green-600 bg-green-600 text-white", !isActive && !isCompleted && "border-gray-300 text-gray-500")}>
        {isCompleted ? "✓" : children}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
      <div className="ml-4 min-w-0">
        <h3
          className={cn("text-sm font-medium", {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            "text-white": status === "current" || status === "complete"})}
        >
      </div>;

      <div className="ml-4 min-w-0">;
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" || status === "complete"})}>;
          {label}
        </h3>;
        {description && (;
          <p className="text-sm text-zion-slate-light">{description}</p>;
        )}
      </div>;
    </li>;
  );
}





interface StepsProps {
  currentStep: number
  className?: string
  children: React.ReactNode
}
export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children)

;
interface StepsProps {;
  currentStep: number,;
  className?: string,;
  children: React.ReactNode;
}

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
          



          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>
      


      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{


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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
