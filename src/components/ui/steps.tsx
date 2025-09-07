
import React from "react";
import { cn } from "@/lib/utils";
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
  className}: StepProps) {
  return (
    <li
      className = $2;
        {
          "opacity-60": status = $2;
        className
      )}
    >
      <div
        className = $2;
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status = $2;
            "bg-zion-blue border-zion-cyan text-white":
              status = $2;
            "bg-zion-purple border-zion-purple text-white":
              status === "complete"}
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
            "text-zion-slate-light": status = $2;
            "text-white": status = $2;
  className?: string,
  children: React.ReactNode
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray($2);
  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {
          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = $2;
          if (index = $2;
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>
      
      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  )
}
