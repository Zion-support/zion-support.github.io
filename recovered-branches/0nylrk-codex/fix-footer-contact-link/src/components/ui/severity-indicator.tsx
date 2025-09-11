


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
  severity: "safe" | "suspicious" | "dangerous"
=======

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;=======

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
export function SeverityIndicator({
  severity
  showIcon = true
  showText = true
  size = "md";
  className
import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  showText = true, 
  size = "md",

  className 

==============

=======import React from "react",;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
      default: return <CheckCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",

    </div>;
  );

}=======
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
<<<<<<< HEAD
  ),; 
}export function SeverityIndicator ({
  severity;
showIcon = true;
showText = true;
size = "md";
className 
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
  switch (severity) {
  case 'dangerous': return <AlertCircle className= {
  cn () 
}/>;
case 'suspicious': return <AlertTriangle className= {
  cn (size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
"text-amber-500") 
}/>;
default: return <CheckCircle className= {
  cn (size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
"text-green-500") 
}/>;
}
};
return (</div>) 
}
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
;
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
