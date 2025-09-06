
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous"
  showIcon?: boolean
  showText?: boolean
  size?: "sm" | "md" | "lg"
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  className?: string
}
export function SeverityIndicator({
  severity
  showIcon = true
  showText = true
  size = "md"
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

<<<<<<< HEAD
interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm" | "md" | "lg",
<<<<<<< HEAD

=======
>>>>>>>   className?: string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  className?: string
>>>>>>> }

export function SeverityIndicator({ 
  severity, 
  showIcon = true, 
  showText = true, 
<<<<<<< HEAD

=======
  size = "md"
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  size = "md",
  className 
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
        return <AlertCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-destructive"
        )} />,
      case 'suspicious':
        return <AlertTriangle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-amber-500"
        )} />,
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
<<<<<<< HEAD

          "text-green-500"
=======
>>>>>>>           "text-green-500"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        )} />
ursor/fix-website-loading-errors-and-merge-6662
          "text-green-500"
        )} />;
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm" | "md" | "lg",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  className?: string
}
<<<<<<< HEAD
export function SeverityIndicator ({
  severity,
  show_icon = true,
  show_text = true,
  size = "md";
      default:;
        return <CheckCircle className={cn (
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";
          "text - green - 500")} />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>     }
  }

  return (

    <div className={cn("flex items-center gap-1", className)}>
<<<<<<< HEAD

=======
=======

export function SeverityIndicator({ 
  severity, 
  showIcon = true, 
  showText = true, 
<<<<<<< HEAD
=======
<<<<<<< HEAD
  size = "md"
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  size = "md",
  className 
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
        return <AlertCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-destructive"
        )} />,
      case 'suspicious':
        return <AlertTriangle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-amber-500"
        )} />,
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          "text-green-500"
        )} />
    }
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
import React from "react",;
import { cn } from "@/lib/utils",;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
  showIcon?: boolean,;
  showText?: boolean,;
  size?: "sm" | "md" | "lg",;
  className?: string;
}
;
export function SeverityIndicator({;
  severity,;
  showIcon = true,;
  showText = true,;
  size = "md",;
  className;
}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
        return <AlertCircle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",;
          "text-destructive";
        )} />,;
      case 'suspicious':;
        return <AlertTriangle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",;
          "text-amber-500";
        )} />,;
      default:;
        return <CheckCircle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
          "text-green-500";
        )} />;
    }
  };
  return (;

    <div className={cn("flex items-center gap-1", className)}>;
<<<<<<< HEAD

      {showIcon && getSeverityIcon()}
=======
<<<<<<< HEAD
>>>>>>>       {showIcon && getSeverityIcon()}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {showText && <span className="capitalize text-sm">{severity}</span>}

    </div>;
  );
<<<<<<< HEAD

=======
};
>>>>>>> 
  );

}
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
import React from "react",;
import { cn } from "@/lib/utils",;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
  showIcon?: boolean,;
  showText?: boolean,;
  size?: "sm" | "md" | "lg",;
  className?: string;
}
;
export function SeverityIndicator({;
  severity,;
  showIcon = true,;
  showText = true,;
  size = "md",;
  className;
}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
        return <AlertCircle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",;
          "text-destructive";
        )} />,;
      case 'suspicious':;
        return <AlertTriangle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",;
          "text-amber-500";
        )} />,;
      default:;
        return <CheckCircle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
          "text-green-500";
        )} />;
    }
  };
  return (;
    <div className={cn("flex items-center gap-1", className)}>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  );
<<<<<<< HEAD
};
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
