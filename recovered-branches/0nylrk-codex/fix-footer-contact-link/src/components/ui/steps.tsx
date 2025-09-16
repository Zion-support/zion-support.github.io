
import React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

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
  return (
    <li
      className={cn(
        "relative flex items-center",
        {
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

          if (!React.isValidElement(child)) return null;
          
          let status: "incomplete" | "current" | "complete" = "incomplete";
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
          
        })}
      </ol>
      
      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
          />
        </div>
      </div>
    </div>
  );
}
