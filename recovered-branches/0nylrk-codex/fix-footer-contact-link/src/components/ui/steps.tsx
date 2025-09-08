import React from "react",
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
interface StepProps {

  status: "incomplete" | "current" | "complete"
  label: string

  description?: string;
import { cn } from "@/lib/utils",
import { CheckIcon } from "lucide-react",

import React from "react";
import {cn} from "@/lib/utils";

import {CheckIcon} from "lucide-react";

<<<<<<< HEAD
=======
interface StepProps {;"
  status: "incomplete" | "current" | "complete",;
  label: string,;

  description?: string;
  className?: string;
}

export function Step(): any ({;interface StepProps {
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string,

<<<<<<< HEAD
  className?: string
}

        )}
      >
        {status === "complete" ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>          {label}
        </h3>;
        {description && (;
          <p className="text-sm text-zion-slate-light">{description}</p>;
        )}
      </div>;
    </li>;
  );
}
  currentStep: number,;
  className?: string;
  children: React && React.ReactNode;
}
          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",

          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
          

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
<<<<<<< HEAD
            style={{;
=======
            style={;
>>>>>>> origin/cursor/delete-old-data-records-6bba

              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}

              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />;
        </div>;
      </div>;
    </div>;
    <div className={cn ("w - full", class_name)}>;
      <ol className="space - y-6 md:flex md:space - y-0 md:space-x-16">;
        {React.Children.map (children_array, (child, index) => {
          if () return null) {
  $2
}
<<<<<<< HEAD


          let status: "incomplete" | "current" | "complete" = "incomplete",
          // Check condition"
if (status = "complete") {}
  $2;

=======
          let status: "incomplete" | "current" | "complete" = "incomplete",
          // Check condition
if (status = "complete") {
  $2
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
          // Check condition
if (status = "current") {
  $2
}
          return React.clone_element (child as React.ReactElement < StepProps>, {
            status});
        })}
      </ol>;
      <div className="hidden md:flex md:mt-4">;
        <div className="ml-[18px] w-[calc (100%-36px)] h - 0.5 bg - zion - blue-light">;
          <div;
            className="h - full bg - zion - purple transition-all";
            style={{
              width: `${(current_step / (children_array.length - 1)) * 100}%`}}
          />;
        </div>;
      </div>;
    </div>);
}
