
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm" | "md" | "lg",
  className?: string
=======
import React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous";
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
>>>>>>> origin/auto/autonomy-17186719616
}

export function SeverityIndicator({ 
  severity, 
  showIcon = true, 
  showText = true, 
  size = "md",
  className 
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
        return <AlertCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-destructive"
<<<<<<< HEAD
        )} />,
=======
        )} />;
>>>>>>> origin/auto/autonomy-17186719616
      case 'suspicious':
        return <AlertTriangle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-amber-500"
<<<<<<< HEAD
        )} />,
=======
        )} />;
>>>>>>> origin/auto/autonomy-17186719616
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-green-500"
<<<<<<< HEAD
        )} />,
    }
  }

  return (

=======
        )} />;
    }
  };

  return (
>>>>>>> origin/auto/autonomy-17186719616
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
