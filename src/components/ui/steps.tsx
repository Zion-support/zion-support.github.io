=======
          if (index < currentStep) status = "complete"
          if (index === currentStep) status = "current"
interface StepProps {
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

import React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from 'lucide-react'

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
status;
  label;
  description;
  className}: StepProps) {;

>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
  className}: StepProps) {
  return (
    <li

      className={cn(



        className
      )}
    >
      <div
        className={cn(
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium" {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete"
            "bg-zion-blue border-zion-cyan text-white":
              status === "current"
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete",
            "bg-zion-blue border-zion-cyan text-white":
              status === "current",
            "bg-zion-purple border-zion-purple text-white":
              status === "complete",}
        )}>;

          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete",
            "bg-zion-blue border-zion-cyan text-white":
              status === "current",



            {/* Step number would go here */}
          </span>;
        )}
<<<<<<< HEAD


            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          {label}
        </h3>
        {description && (
          <p className="text-sm text-zion-slate-light">{description}</p>
        )}
      </div>
    </li>
  )
}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            "text-white": status === "current" || status === "complete"})}
        >
      </div>;

      <div className="ml-4 min-w-0">;
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" || status === "complete"})}>;
          {label}
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
interface StepsProps {
  currentStep: number
  className?: string
  children: React.ReactNode
}
export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children)

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
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
