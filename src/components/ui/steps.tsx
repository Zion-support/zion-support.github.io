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
  return (
          "opacity-60": status === "incomplete"},


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
      </div>
      <div className="ml-4 min-w-0">
        <h3
          className={cn("text-sm font-medium", {
            "text-white": status === "current" |status === "complete"})}


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

}
;
