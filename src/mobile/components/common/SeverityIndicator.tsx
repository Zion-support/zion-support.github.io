
import React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous";
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string
}

export function SeverityIndicator({ 
  severity;
  showIcon;
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
}
;