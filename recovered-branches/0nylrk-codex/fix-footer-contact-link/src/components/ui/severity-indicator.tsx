
<<<<<<< HEAD
import React from "react",
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

<<<<<<< HEAD
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
=======
export function SeverityIndicator(): any ({ ;
  severity, ;
  showIcon = true, ;
  showText = true, ;
  size = "md";
  className ;
}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
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
<<<<<<< HEAD
      default: return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
=======
      default: return <CheckCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          "text-green-500"
        )} />;
    }
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
