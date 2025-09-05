
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface SeverityIndicatorProps {
  severity: &quot;safe&quot; | &quot;suspicious&quot; | &quot;dangerous&quot;;
  showIcon?: boolean;
  showText?: boolean;
  size?: &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;;
  className?: string;
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
          size === &quot;sm&quot; ? &quot;h-3 w-3&quot; : size === &quot;lg&quot; ? &quot;h-5 w-5&quot; : &quot;h-4 w-4&quot;,
          &quot;text-destructive&quot;
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
    }
  };

  return (
    <div className={cn(&quot;flex items-center gap-1&quot;, className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className=&quot;capitalize text-sm&quot;>{severity}</span>}
    </div>
  );
}
