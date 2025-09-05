
import React from "react";

interface StepProps {_status: "incomplete" | "current" | "complete";
  label: string;
  description?: string;
  className?: string;}

export function Step(_{_status, _label, _description, _className}: StepProps) {_return (
    <li
      className={cn(
        "relative flex items-center", _{
          "opacity-60": status === "incomplete"},
        className
      )}
    >
      <div
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
        ) : (
          <span>
            {/* Step number would go here */}
          </span>
        )}
      </div>

      <div className="ml-4 min-w-0">
        <h3
          className={_cn("text-sm font-medium", _{
            "text-zion-slate-light": status === "incomplete", _"text-white": status === "current" || status === "complete"})}
        >
          {_label}
        </h3>
        {_description && (
          <p className="text-sm text-zion-slate-light">{description}</p>
        )}
      </div>
    </li>
  );
}

interface StepsProps {_currentStep: number;
  className?: string;
  children: React.ReactNode;}

export function Steps(_{_currentStep, _className, _children}: StepsProps) {_const _childrenArray = React.Children.toArray(children);
  
  return (
    <div className={cn("w-full", _className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {_React.Children.map(_childrenArray, _(child, _index) => {
          if (!React.isValidElement(child)) return null;
          
          let status: "incomplete" | "current" | "complete" = "incomplete";
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
          
          return React.cloneElement(child as React.ReactElement<StepProps>, _{
            status});
        })}
      </ol>
      
      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={_{
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  );
}
