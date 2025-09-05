
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
import { CheckIcon } from 'lucide-react'

interface StepProps {
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string,
  className?: string
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { CheckIcon } from 'lucide-react'

interface StepProps {
  status: &quot;incomplete&quot; | &quot;current&quot; | &quot;complete&quot;;
  label: string;
  description?: string;
  className?: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}
=======
import React from "react";

interface StepProps {_status: "incomplete" | "current" | "complete";
  label: string;
  description?: string;
  className?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function Step(_{_status, _label, _description, _className}: StepProps) {_return (
    <li
      className={cn(
<<<<<<< HEAD
        &quot;relative flex items-center&quot;,
        {
          &quot;opacity-60&quot;: status === &quot;incomplete&quot;},
=======
        "relative flex items-center", _{
          "opacity-60": status === "incomplete"},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        className
      )}
    >
      <div
<<<<<<< HEAD
        className={cn(
          &quot;shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium&quot;,
          {
            &quot;bg-zion-blue-dark border-zion-blue-light text-zion-slate-light&quot;:
              status === &quot;incomplete&quot;,
            &quot;bg-zion-blue border-zion-cyan text-white&quot;:
              status === &quot;current&quot;,
            &quot;bg-zion-purple border-zion-purple text-white&quot;:
              status === &quot;complete&quot;}
        )}
      >
        {status === &quot;complete&quot; ? (
          <CheckIcon className=&quot;h-5 w-5&quot; />
=======
        className={_cn(
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium", _{
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete", _"bg-zion-blue border-zion-cyan text-white":
              status === "current", _"bg-zion-purple border-zion-purple text-white":
              status === "complete"}
        )}
      >
        {_status === "complete" ? (
          <CheckIcon className="h-5 w-5" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ) : (
          <span>
            {/* Step number would go here */}
          </span>
        )}
      </div>

      <div className=&quot;ml-4 min-w-0&quot;>
        <h3
<<<<<<< HEAD
          className={cn(&quot;text-sm font-medium&quot;, {
            &quot;text-zion-slate-light&quot;: status === &quot;incomplete&quot;,
            &quot;text-white&quot;: status === &quot;current&quot; || status === &quot;complete&quot;})}
=======
          className={_cn("text-sm font-medium", _{
            "text-zion-slate-light": status === "incomplete", _"text-white": status === "current" || status === "complete"})}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_label}
        </h3>
<<<<<<< HEAD
        {description && (
          <p className=&quot;text-sm text-zion-slate-light&quot;>{description}</p>
=======
        {_description && (
          <p className="text-sm text-zion-slate-light">{description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
      </div>
    </li>
  )
}

<<<<<<< HEAD
interface StepsProps {
  currentStep: number,
  className?: string,
  children: React.ReactNode
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),
  
  return (
    <div className={cn(&quot;w-full&quot;, className)}>
      <ol className=&quot;space-y-6 md:flex md:space-y-0 md:space-x-16&quot;>
        {React.Children.map(childrenArray, (child, index) => {
          if (!React.isValidElement(child)) return null,
=======
interface StepsProps {_currentStep: number;
  className?: string;
  children: React.ReactNode;}

export function Steps(_{_currentStep, _className, _children}: StepsProps) {_const _childrenArray = React.Children.toArray(children);
  
  return (
    <div className={cn("w-full", _className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {_React.Children.map(_childrenArray, _(child, _index) => {
          if (!React.isValidElement(child)) return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          
<<<<<<< HEAD
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
=======
          let status: &quot;incomplete&quot; | &quot;current&quot; | &quot;complete&quot; = &quot;incomplete&quot;;
          if (index < currentStep) status = &quot;complete&quot;;
          if (index === currentStep) status = &quot;current&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          
<<<<<<< HEAD
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
=======
          return React.cloneElement(child as React.ReactElement<StepProps>, _{
            status});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        })}
      </ol>
      
      <div className=&quot;hidden md:flex md:mt-4&quot;>
        <div className=&quot;ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light&quot;>
          <div
<<<<<<< HEAD
            className=&quot;h-full bg-zion-purple transition-all&quot;
            style={{
=======
            className="h-full bg-zion-purple transition-all"
            style={_{
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  )
}
