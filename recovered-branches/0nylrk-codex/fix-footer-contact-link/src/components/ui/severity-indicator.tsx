
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
        )} />;
    }
  };

  return (
    <div className={_cn("flex items-center gap-1", _className)}>
      {_showIcon && getSeverityIcon()}
      {_showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  );
}
