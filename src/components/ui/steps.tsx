<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  className?: string
}
export function Step({
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          if (index < currentStep) status = "complete"
          if (index === currentStep) status = "current"
interface StepProps {
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from 'lucide-react'

interface StepProps {

  status: "incomplete" | "current" | "complete"
  label: string
  description?: string

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
status;
  label;
  description;
  className}: StepProps) {;


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  className?: string
}
export function Step({

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  className}: StepProps) {
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   return (
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  status,
  label,
  description,
  status
  label
  description
  status,
  label,
  description,
  className}: StepProps) {
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <li

      className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        "relative flex items-center"
        {
          "opacity-60": status === "incomplete"}
        "relative flex items-center",
        {
          "opacity-60": status === "incomplete"},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        className
      )}
    >
      <div
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium"          {

>>>>>>>             "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete"
            "bg-zion-blue border-zion-cyan text-white":
              status === "current"
>>>>>>>             "bg-zion-purple border-zion-purple text-white":
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            "bg-zion-purple border-zion-purple text-white":
>>>>>>>               status === "complete"}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium" {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete"
            "bg-zion-blue border-zion-cyan text-white":
              status === "current"
<<<<<<< HEAD
=======
            "bg-zion-purple border-zion-purple text-white":
              status === "complete",}
        )}>;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete",
            "bg-zion-blue border-zion-cyan text-white":
              status === "current",
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD

            {/* Step number would go here */}
=======
>>>>>>>             {/* Step number would go here */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;
            {/* Step number would go here */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </span>
        )}
      </div>
      <div className="ml-4 min-w-0">
        <h3
          className={cn("text-sm font-medium", {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {/* Step number would go here */}
          </span>;
        )}


            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",


            "text-white": status === "current" || status === "complete"})}
<<<<<<< HEAD
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        >
      </div>;

      <div className="ml-4 min-w-0">;
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" || status === "complete"})}>;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" |status === "complete"})}
            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}
        >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD





>>>>>>> interface StepsProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

interface StepsProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  currentStep: number
  className?: string
  children: React.ReactNode
}
export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
;
interface StepsProps {;
  currentStep: number,;
  className?: string,;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
>>>>>>>   return (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
>>>>>>>     <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          if (!React.isValidElement(child)) return null
          let status: "incomplete" | "current" | "complete" = "incomplete"
          if (index < currentStep) status = "complete"
          if (index === currentStep) status = "current"

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
  



  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
<<<<<<< HEAD
<<<<<<< HEAD

=======
          
<<<<<<< HEAD
>>>>>>>           return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>
>>>>>>>       <div className="hidden md:flex md:mt-4">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <div className="hidden md:flex md:mt-4">
>>>>>>>         <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
}/> </div> </div> </div>)
}"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
;
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
