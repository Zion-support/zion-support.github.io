
<<<<<<< HEAD
import React from "react",;
import { cn } from "@/lib/utils",;
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
;
interface SeverityIndicatorProps {;
  severity:"safe" | "suspicious" | "dangerous",;
  showIcon?:boolean,;
  showText?:boolean,;
  size?:"sm" | "md" | "lg",;
  className?:string;
}
;
export function SeverityIndicator({ ;
  severity, ;
  showIcon = true, ;
  showText = true, ;
  size = "md",;
  className ;
} SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
        return <AlertCircle className={cn(;
          size === "sm" ? "h-3 w-3" :size === "lg" ? "h-5 w-5" :"h-4 w-4",;
          "text-destructive";
        )} />,;
      case 'suspicious':;
        return <AlertTriangle className={cn(;
          size === "sm" ? "h-3 w-3" :size === "lg" ? "h-5 w-5" :"h-4 w-4",;
          "text-amber-500";
        )} />,;
      default:;
        return <CheckCircle className={cn(;
          size === "sm" ? "h-3 w-3" :size === "lg" ? "h-5 w-5" :"h-4 w-4",;
          "text-green-500";
        )} />,;
    }
  },;
;
  return (;
    <div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>;
  ),;
=======
import React from "react",
import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm" | "md" | "lg",
  className?: string}

export function SeverityIndicator({ 
  severity, 
  showIcon = true, 
  showText = true, 
  size = &quot;md&quot;,
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
        )} />        )} />;
      case 'suspicious':
        return <AlertTriangle className={cn(
          size === &quot;sm&quot; ? &quot;h-3 w-3&quot; : size === &quot;lg&quot; ? &quot;h-5 w-5&quot; : &quot;h-4 w-4&quot;,
          &quot;text-amber-500&quot;
        )} />;
      default:
        return <CheckCircle className={cn(
          size === &quot;sm&quot; ? &quot;h-3 w-3&quot; : size === &quot;lg&quot; ? &quot;h-5 w-5&quot; : &quot;h-4 w-4&quot;,
          &quot;text-green-500&quot;
        )} />;
    }
  },

  return (
    <div className={cn(&quot;flex items-center gap-1&quot;, className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className=&quot;capitalize text-sm&quot;>{severity}</span>}    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
