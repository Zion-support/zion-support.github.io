<<<<<<< HEAD
=======
size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import React from "react",
import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

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
  showText = true, 


<<<<<<< HEAD
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
          "text-green-500"
        )} />
=======
          "text-green-500"
        )} />;
;
interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm" | "md" | "lg",
  className?: string
}
export function SeverityIndicator ({
  severity,
  show_icon = true,
  show_text = true,
  size = "md";
      default:;
        return <CheckCircle className={cn (
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";
          "text - green - 500")} />;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    }
  }

  return (
<<<<<<< HEAD
=======

    <div className={cn("flex items-center gap-1", className)}>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
<<<<<<< HEAD
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  );
=======
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
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}

    </div>;
  );
}

    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
}
  );

}
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
