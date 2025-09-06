<<<<<<< HEAD


  className?: string
}
export function Step({
=======
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

>>>>>>>   className?: string
}
export function Step({
  status,
  label,
  description,
  status
  label
  description
>>>>>>>   className}: StepProps) {
  className?: string
}
export function Step({

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  className}: StepProps) {
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   return (
    <li

      className={cn(
<<<<<<< HEAD

        className
=======
        "relative flex items-center"
        {
          "opacity-60": status === "incomplete"}
>>>>>>>         className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
    >
      <div
        className={cn(
<<<<<<< HEAD

=======
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium" {
ursor/fix-website-loading-errors-and-merge-6662
        className
      )}>;
      <div
        className={cn(

          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium"          {

>>>>>>>             "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete"
            "bg-zion-blue border-zion-cyan text-white":
              status === "current"
>>>>>>>             "bg-zion-purple border-zion-purple text-white":
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            "bg-zion-purple border-zion-purple text-white":
>>>>>>>               status === "complete"}
        )}
      >
        {status === "complete" ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>
<<<<<<< HEAD

            {/* Step number would go here */}
=======
>>>>>>>             {/* Step number would go here */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </span>
        )}
      </div>
      <div className="ml-4 min-w-0">
        <h3
          className={cn("text-sm font-medium", {
<<<<<<< HEAD

            "text-white": status === "current" || status === "complete"})}

        >
=======
            "text-white": status === "current" |status === "complete"})}
>>>>>>>             "text-white": status === "current" || status === "complete"})}
>>>>>>>         >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

interface StepsProps {
=======
ursor/fix-website-loading-errors-and-merge-6662
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
            {/* Step number would go here */}
          </span>;
        )}


            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",


            "text-white": status === "current" || status === "complete"})}
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        >
      </div>;

      <div className="ml-4 min-w-0">;
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" || status === "complete"})}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {label}
        </h3>;
        {description && (;
          <p className="text-sm text-zion-slate-light">{description}</p>;
        )}
      </div>;
    </li>;
  );
}





>>>>>>> interface StepsProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  currentStep: number
  className?: string
  children: React.ReactNode
}
export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children)
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
interface StepsProps {;
  currentStep: number,;
  className?: string,;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),
<<<<<<< HEAD

=======
  
>>>>>>>   return (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {

          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
<<<<<<< HEAD

=======
          
>>>>>>>           return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>
>>>>>>>       <div className="hidden md:flex md:mt-4">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>

<<<<<<< HEAD
=======

      


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div className="hidden md:flex md:mt-4">
>>>>>>>         <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
<<<<<<< HEAD

=======
}/> </div> </div> </div>)
}"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;

    <div className={cn("w-full", className)}>;
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;
        {React && React.Children.map(childrenArray, (child, index) => {;
          if (!React && React.isValidElement(child)) return null;          ;
          let status: "incomplete" | "current" | "complete" = "incomplete",;
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";

          return React && React.cloneElement(child as React && React.ReactElement<StepProps>, {;
            status});
        })}
      </ol>;

      <div className="hidden md:flex md:mt-4">;
        <div className="ml-[18px] w-[calc(100%-36px)] h-0 && 0.5 bg-zion-blue-light">;
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
              width: `${(currentStep / (childrenArray && childrenArray.length - 1)) * 100}%`}}
          />;
        </div>;
      </div>;
    </div>;
  );


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
}/> </div> </div> </div>);
}"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
