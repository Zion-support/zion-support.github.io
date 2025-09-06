
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {

  severity: "safe" | "suspicious" | "dangerous"
=======




import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
>>>>>>> main

  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
<<<<<<< HEAD
  className?: string
}

export function SeverityIndicator({
  severity
  showIcon = true
  showText = true
  size = "md";
  className
=======
import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  className?: string;
}


>>>>>>> main
interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm" | "md" | "lg",
  className?: string
}

export function SeverityIndicator({ 
  severity, 
  showIcon = true, 
<<<<<<< HEAD
<<<<<<< HEAD
  showText = true, ;
  size = "md";
=======
  showText = true, 
  size = "md",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  className 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

  showText = true, 
  size = "md",

  className 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
        return <AlertCircle className={cn(
<<<<<<< HEAD
=======

export function SeverityIndicator(): any ({ ;
  severity, ;
  showIcon = true, ;
  showText = true, ;
  size = "md";
  className ;
=======
>>>>>>> main
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-destructive"
        )} />,
      case 'suspicious':
        return <AlertTriangle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-amber-500"
<<<<<<< HEAD
<<<<<<< HEAD
        )} />;
      default: return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
          "text-green-500"
        )} />
    }
  }
=======
=======

>>>>>>> main
        )} />,
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-green-500"
        )} />
    }
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> main

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> main
=======
import React from "react",;
import { cn } from "@/lib/utils",;
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
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
<<<<<<< HEAD
=======

>>>>>>> main
}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
<<<<<<< HEAD
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
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
        return <AlertCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          "text-destructive"
        )} />;
      case 'suspicious':;
        return <AlertTriangleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
          "text-amber-500"
        )} />;

      default: return <CheckCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",

          "text-green-500"
        )} />;
    }
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}

    </div>;
  );

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import React from './react';
import { cn } from '@/lib / utils';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';
interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  show_icon?: boolean;
  show_text?: boolean;
  size?: "sm" | "md" | "lg";
  class_name?: string;
}
export /**
 * SeverityIndicator - Function description
 */
function SeverityIndicator() {
  const getSeverityIcon = () =>: any {
    switch (severity) {
      case 'dangerous':;
        return <AlertCircle className={cn (
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";
          "text - destructive")} />;
      case 'suspicious':;
        return <AlertTriangle className={cn (
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";
          "text - amber - 500")} />;
      default: return <CheckCircle className={cn (
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4",
          "text - green - 500")} />;
    }
  }
;
  return (
    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
