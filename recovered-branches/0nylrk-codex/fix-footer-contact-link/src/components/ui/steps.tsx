import React from "react",";
import { cn } from "@/lib/utils";"
import { CheckIcon } from "lucide-react";
interface StepProps {}
"
  status: "incomplete" | "current" | "complete"
  label: string;
  description?: string;"
import { cn } from "@/lib/utils","
import { CheckIcon } from "lucide-react",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react";
import {cn} from "@/lib/utils";
=======

";
import React from "react";"
import {cn} from "@/lib/utils";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {CheckIcon} from "lucide-react";
interface StepProps {;"
  status: "incomplete" | "current" | "complete",;
  label: string,;

  description?: string;
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

export function Step(): any ({;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  status;
  label;
  description;
  className}: StepProps) {;
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {cn} from "@/lib/utils";
import {CheckIcon} from "lucide-react";
import React from "react",
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
interface StepProps {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
  description?: string;
import { cn } from "@/lib/utils",
import { CheckIcon } from "lucide-react",
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface StepProps {
=======
export function Step(): any ({;interface StepProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function Step(): any ({;interface StepProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface StepProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string,
<<<<<<< HEAD

=======
  className?: string
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
interface StepProps {"
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string,
  className?: string;
}


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function Step({;
  status;
  label;
  description;
<<<<<<< HEAD
export function Step({}
=======
export function Step({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  status,
  label,
  description,

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  className}: StepProps) {
  return (
    <li
      className={cn(
        "relative flex items-center"
        {
<<<<<<< HEAD
<<<<<<< HEAD

=======
          "opacity-60": status === "incomplete"}
          "opacity-60": status === "incomplete"},
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className
=======
  className}: StepProps) {}
  return (;
    <li;
      className={cn("
        "relative flex items-center"
        {}
        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      )}>;
      <div;
        className={cn("
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium"
          {"
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":"
              status === "incomplete""
            "bg-zion-blue border-zion-cyan text-white":"
              status === "current""
            "bg-zion-purple border-zion-purple text-white":"
              status === "complete"}

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        )}
      >"
        {status === "complete" ? ("
          <CheckIcon className="h-5 w-5" />
        ) : (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <span>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",;
import { cn } from "@/lib/utils",;
=======
"
import React from "react",;"
import { cn } from "@/lib/utils",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { CheckIcon } from "lucide-react",;
interface StepProps {;"
=======
          <span>

import React from "react",;
import { cn } from "@/lib/utils",;
import { CheckIcon } from "lucide-react",;
interface StepProps {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  status: "incomplete" | "current" | "complete",;
  label: string,;
  description?: string,;
  className?: string;
}
;
<<<<<<< HEAD
export function Step() { return null; }
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          "opacity-60": status === "incomplete"},;
        className;
      )}
    >
<<<<<<< HEAD
      <div;
        className={cn("
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium";
          {"
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":"
              status === "incomplete";"
            "bg-zion-blue border-zion-cyan text-white":"
              status === "current";"
            "bg-zion-purple border-zion-purple text-white":"
=======
      <div
        className={cn(
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium";
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete";
            "bg-zion-blue border-zion-cyan text-white":
              status === "current";
            "bg-zion-purple border-zion-purple text-white":
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              status === "complete"}
        )}
      >;

<<<<<<< HEAD

"
        {status === "complete" ? (;"
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* Step number would go here */}
          </span>;
        )}
=======
=======
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;



            {/* Step number would go here */}
          </span>;
        )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            {/* Step number would go here */}
          </span>
        )}
      </div>
      <div className="ml-4 min-w-0">
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete";
            "text-white": status === "current" |status === "complete"})}
<<<<<<< HEAD
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            "text-zion-slate-light": status === "incomplete",
=======
"
            "text-zion-slate-light": status === "incomplete","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            "text-white": status === "current" || status === "complete"})}
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

interface StepsProps {}
  currentStep: number;
  className?: string;
  children: React.ReactNode;
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export function Steps({ currentStep, className, children }: StepsProps) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children);
;
<<<<<<< HEAD
        <h3
          className={cn("text-sm font-medium", {

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
=======


            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

interface StepsProps {
  currentStep: number
  className?: string;
  children: React.ReactNode
}
<<<<<<< HEAD

  const childrenArray = React.Children.toArray(children);

=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


export function Steps() { return null; }
            "text-white": status === "current" || status === "complete"})}>;


            {/* Step number would go here */}
          </span>;
        )}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          {label}
=======
          <span>          {label}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <span>          {label}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function Steps({ currentStep, className, children }: StepsProps) {

export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children);
;


        >
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
            {/* Step number would go here */}
          </span>;
        )}
          {label}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </h3>;
        {description && (;"
          <p className="text-sm text-zion-slate-light">{description}</p>;
        )}
      </div>;
    </li>;
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31





interface StepsProps {
  currentStep: number
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface StepsProps {;
  currentStep: number,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

interface StepsProps {;
  currentStep: number,;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  className?: string;
  children: React && React.ReactNode;
}



export function Steps() { return null; }
}

<<<<<<< HEAD
<<<<<<< HEAD


export function Steps({ currentStep, className, children }: StepsProps) {;


  const childrenArray = React.Children.toArray(children);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
          if (!React.isValidElement(child)) return null;
          let status: "incomplete" | "current" | "complete" = "incomplete"
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
=======
interface StepsProps {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  currentStep: number,;
  className?: string;
  children: React && React.ReactNode;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  currentStep: number,;
  className?: string;
  children: React && React.ReactNode;
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



export function Steps({ currentStep, className, children }: StepsProps) {;


  const childrenArray = React.Children.toArray(children);
  );
}
  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {

          if (!React.isValidElement(child)) return null;
          let status: "incomplete" | "current" | "complete" = "incomplete"
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
          
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f



          return React.cloneElement(child as React.ReactElement<StepProps>, {
=======
  return ("
    <div className={cn("w-full", className)}>"
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {}
          if (!React.isValidElement(child)) return null;"
          let status: "incomplete" | "current" | "complete" = "incomplete""
          if (index < currentStep) status = "complete";"
          if (index === currentStep) status = "current";




          return React.cloneElement(child as React.ReactElement<StepProps>, {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            status})
        })}
      </ol>"
      <div className="hidden md:flex md:mt-4">"
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div"
            className="h-full bg-zion-purple transition-all"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            style={{
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
            style={{


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (
<<<<<<< HEAD
=======


=======
=======
export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);
  return (


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
            style={{}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
            style={{;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            style={{;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;

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

        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
          <div;
            className="h-full bg-zion-purple transition-all";
            style={{;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
              width:`${(currentStep / (childrenArray.length - 1)) * 100}%`}}
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
=======
;
export function Steps() { return null; }`
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          />;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  className?: string;
  children: React && React.ReactNode;
}
import React from './react';'
import { cn } from '@/lib / utils';'
import { CheckIcon } from './lucide-react';
interface StepProps {"
=======
  );
}
  className?: string;
  children: React && React.ReactNode;
}
import React from './react';
import { cn } from '@/lib / utils';
import { CheckIcon } from './lucide-react';
interface StepProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string;
  class_name?: string;
}
<<<<<<< HEAD
export /**;
 * Step - Function description;
 */
function Step() {}
  return (
    <li;
      className={cn ("
        "relative flex items - center";
        {"
=======
export /**
 * Step - Function description
 */
function Step() {
  return (
    <li;
      className={cn (
        "relative flex items - center";
        {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          "opacity - 60": status === "incomplete"}
        class_name)}
    >;
      <div;
<<<<<<< HEAD
        className={cn ("
          "shrink - 0 h - 9 w - 9 rounded - full border flex items - center justify - center text - center font - medium";
          {"
            "bg - zion - blue - dark border - zion - blue - light text - zion - slate - light":;"
              status === "incomplete";"
            "bg - zion - blue border - zion - cyan text - white":;"
              status === "current";"
            "bg - zion - purple border - zion - purple text - white":;"
              status === "complete"}
        )}
      >;"
        {status === "complete" ? ("
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <CheckIcon className="h - 5 w - 5" />) : (
          <span>;
            {/* Step number would go here */}
          </span>)}
<<<<<<< HEAD
      </div>;"
      <div className="ml - 4 min - w-0">;
        <h3;"
          className={cn ("text - sm font - medium", {"
            "text - zion - slate - light": status === "incomplete";"
=======
      </div>;
      <div className="ml - 4 min - w-0">;
        <h3;
          className={cn ("text - sm font - medium", {
            "text - zion - slate - light": status === "incomplete";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            "text - white": status === "current" || status === "complete"})}
        >;
          {label}
        </h3>;
<<<<<<< HEAD
        {description && ("
=======
        {description && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <p className="text - sm text - zion - slate - light">{description}</p>)}
      </div>;
    </li>);
}
<<<<<<< HEAD
interface StepsProps {}
=======
interface StepsProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  current_step: number,
  class_name?: string;
  children: React.ReactNode;
}
<<<<<<< HEAD
export /**;
 * Steps - Function description;
 */
function Steps() {}
  const children_array = React.Children.to_array (children);
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export /**
 * Steps - Function description
 */
function Steps() {
  const children_array = React.Children.to_array (children);
;
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div className={cn ("w - full", class_name)}>;
      <ol className="space - y-6 md:flex md:space - y-0 md:space - x-16">;
        {React.Children.map (children_array, (child, index) => {
          if () return null) {
  $2
}
=======

  return ("
    <div className={cn ("w - full", class_name)}>;"
      <ol className="space - y-6 md:flex md:space - y-0 md:space - x-16">;
        {React.Children.map (children_array, (child, index) => {}
          if () return null) {}
  $2;
}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          let status: "incomplete" | "current" | "complete" = "incomplete",
          // Check condition"
if (status = "complete") {}
  $2;
}
          // Check condition"
if (status = "current") {}
  $2;
}
          return React.clone_element (child as React.ReactElement < StepProps>, {}
            status});
        })}
<<<<<<< HEAD
      </ol>;
      <div className="hidden md:flex md:mt - 4">;
        <div className="ml-[18px] w-[calc (100%-36px)] h - 0.5 bg - zion - blue - light">;
          <div;
            className="h - full bg - zion - purple transition - all";
            style={{
=======
      </ol>;"
      <div className="hidden md:flex md:mt - 4">;"
        <div className="ml-[18px] w-[calc (100%-36px)] h - 0.5 bg - zion - blue - light">;
          <div;"
            className="h - full bg - zion - purple transition - all";
            style={{}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              width: `${(current_step / (children_array.length - 1)) * 100}%`}}
          />;
        </div>;
      </div>;
    </div>);
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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
