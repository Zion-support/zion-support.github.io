
import React from "react",
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {
<<<<<<< HEAD
  severity: "safe" | "suspicious" | "dangerous";
=======
  severity: "safe" | "suspicious" | "dangerous"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  showIcon?: boolean;
  showText?: boolean;
<<<<<<< HEAD
  size?: "sm" | "md" | "lg";
  className?: string
}
<<<<<<< HEAD
=======
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export function SeverityIndicator({ 
  severity;
  showIcon;
=======
export function SeverityIndicator({
  severity
  showIcon = true
  showText = true
  size = "md";
  className
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
        return <AlertCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
          "text-destructive"
        )} />;
      case 'suspicious':
        return <AlertTriangle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
          "text-amber-500"
        )} />;
      default: return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
          "text-green-500"
        )} />
    }
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
}