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
import React from 'react'

interface StepsProps {
  children: React.ReactNode
  className?: string
}

interface StepProps {
  children: React.ReactNode
  className?: string
  isActive?: boolean
  isCompleted?: boolean
}

const Steps = ({ children, className = "" }: StepsProps) => (
  <div className={`flex items-center ${className}`}>
    {children}
  </div>
)

const Step = ({ children, className = "", isActive = false, isCompleted = false }: StepProps) => (
  <div className={`flex items-center ${className}`}>
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
        isCompleted
          ? "border-zion-cyan bg-zion-cyan text-white"
          : isActive
          ? "border-zion-cyan bg-white text-zion-cyan"
          : "border-zion-slate-300 bg-white text-zion-slate-500"
      }`}
    >
      {isCompleted ? (
        <CheckIcon className="h-4 w-4" />
      ) : (
        <span className="text-sm font-medium">{children}</span>
      )}
    </div>
  </div>
)

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
)

export { Steps, Step, CheckIcon }
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
