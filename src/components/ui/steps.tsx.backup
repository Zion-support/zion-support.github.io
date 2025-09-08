  className?: string
}
export function Step({  className}: StepProps) {
  return (
    <li
<<<<<<< HEAD
import * as React from "react"
import { cn } from "@/lib/utils"

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<StepProps>[]
  currentStep?: number
}

const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  ({ className, children, currentStep = 0, ...props }, ref) => {
    const steps = React.Children.toArray(children)
    
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-between", className)}
        {...props}
      >
        {steps.map((step, index) => {
          if (React.isValidElement(step)) {
            return React.cloneElement(step as React.ReactElement<StepProps>, {
              key: index,
              isActive: index === currentStep,
              isCompleted: index < currentStep,
              isLast: index === steps.length - 1,
            })
          }
          return step
        })}
      </div>
    )
  }
)
Steps.displayName = "Steps"

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  isActive?: boolean
  isCompleted?: boolean
  isLast?: boolean
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ className, children, isActive = false, isCompleted = false, isLast = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
      >
        <div className="flex items-center">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors",
              isCompleted
                ? "border-zion-cyan bg-zion-cyan text-white"
                : isActive
                ? "border-zion-purple bg-zion-purple text-white"
                : "border-zion-slate-light text-zion-slate-light"
            )}
          >
            {isCompleted ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <span>{React.Children.count(children)}</span>
            )}
          </div>
          {!isLast && (
            <div
              className={cn(
                "h-0.5 w-8 transition-colors",
                isCompleted ? "bg-zion-cyan" : "bg-zion-slate-light"
              )}
            />
          )}
        </div>
      </div>
    )
  }
)
Step.displayName = "Step"

<<<<<<< HEAD
export { Steps, Step }
=======
export { Steps, Step }
=======
      className={cn(

        "relative flex items-center",
        {
          "opacity-60": status === "incomplete"},

        className
      )}><div
        className={cn(
              status === "incomplete"
            "bg-zion-blue border-zion-cyan text-white":
              status === "current"
            "bg-zion-purple border-zion-purple text-white":
            "bg-zion-purple border-zion-purple text-white":
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

            {/* Step number would go here */}
          </span>        )}

export { Steps, Step, CheckIcon }
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
