<<<<<<< HEAD
import * as React from "react"
import { cn } from "@/lib/utils"

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
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
            return React.cloneElement(step, {
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
              <span>{props.children}</span>
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

export { Steps, Step }
=======

import React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from 'lucide-react'

interface StepProps {
  status: "incomplete" | "current" | "complete";
  label: string;
  description?: string;
  className?: string;
}

export function Step({
  status,
  label,
  description,
  className,
}: StepProps) {
  return (
    <li
      className={cn(
        "relative flex items-center",
        {
          "opacity-60": status === "incomplete",
        },
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
              status === "complete",
          }
        )}
      >
        {status === "complete" ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>
            {/* Step number would go here */}
          </span>
        )}
      </div>

      <div className="ml-4 min-w-0">
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete",
          })}
        >
          {label}
        </h3>
        {description && (
          <p className="text-sm text-zion-slate-light">{description}</p>
        )}
      </div>
    </li>
  );
}

interface StepsProps {
  currentStep: number;
  className?: string;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {
          if (!React.isValidElement(child)) return null;
          
          let status: "incomplete" | "current" | "complete" = "incomplete";
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
          
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status,
          });
        })}
      </ol>
      
      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
>>>>>>> autobot/2025-08-24T03-49-38-332Z
