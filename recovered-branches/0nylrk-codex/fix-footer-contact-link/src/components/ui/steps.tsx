  status: "incomplete" | "current" | "complete"
  label: string

  description?: string;
import { cn } from "@/lib/utils",
import { CheckIcon } from "lucide-react",

import React from "react";
import {cn} from "@/lib/utils";

import {CheckIcon} from "lucide-react";

  className?: string
}

          <span>          {label}
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>
      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{;
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
          <div;
            className="h-full bg-zion-purple transition-all";
            style={{;
