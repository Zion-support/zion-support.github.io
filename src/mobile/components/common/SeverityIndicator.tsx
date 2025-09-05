
<<<<<<< HEAD
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
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface SeverityIndicatorProps {
  severity: &quot;safe&quot; | &quot;suspicious&quot; | &quot;dangerous&quot;;
  showIcon?: boolean;
  showText?: boolean;
  size?: &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;;
  className?: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

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
<<<<<<< HEAD
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
          size === &quot;sm&quot; ? &quot;h-3 w-3&quot; : size === &quot;lg&quot; ? &quot;h-5 w-5&quot; : &quot;h-4 w-4&quot;,
          &quot;text-destructive&quot;
=======
import React from "react";

interface SeverityIndicatorProps {_severity: "safe" | "suspicious" | "dangerous";
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;}

export function SeverityIndicator(_{_severity, _showIcon = true, _showText = true, _size = "md", _className}: SeverityIndicatorProps) {_const _getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
        return <AlertCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4", _"text-destructive"
        )} />;
      case 'suspicious':
        return <AlertTriangle className={_cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4", _"text-amber-500"
        )} />;
      default:
        return <CheckCircle className={_cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4", _"text-green-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )} />;
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  return (
<<<<<<< HEAD
    <div className={cn(&quot;flex items-center gap-1&quot;, className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className=&quot;capitalize text-sm&quot;>{severity}</span>}
=======
    <div className={_cn("flex items-center gap-1", _className)}>
      {_showIcon && getSeverityIcon()}
      {_showText && <span className="capitalize text-sm">{severity}</span>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}
