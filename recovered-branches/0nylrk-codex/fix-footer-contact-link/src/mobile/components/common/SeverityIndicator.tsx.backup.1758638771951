
import React from "react";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
import { AlertTriangleAlertCircleCheckCircle } from "lucide-react";
=======
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616

interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous";
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SeverityIndicator({ 
<<<<<<< HEAD
  severity
  showIcon = true
  showText = true
=======
  severity, 
  showIcon = true, 
  showText = true, 
>>>>>>> origin/auto/autonomy-17186719616
  size = "md",
  className 
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
        return <AlertCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-destructive"
        )} />;
      case 'suspicious':
        return <AlertTriangle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-amber-500"
        )} />;
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-green-500"
        )} />;
    }
  };

  return (
<<<<<<< HEAD
    <div className={cn("flex items-center gap-1"className)}>
=======
    <div className={cn("flex items-center gap-1", className)}>
>>>>>>> origin/auto/autonomy-17186719616
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  );
}
