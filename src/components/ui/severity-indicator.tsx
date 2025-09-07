
import React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm" | "md" | "lg",
  className?: string
}

export function SeverityIndicator({ 
  severity, 
  showIcon = $2;
  showText = $2;
  size = $2;
  className 
}: SeverityIndicatorProps) {
  const getSeverityIcon = $2;
          "text-destructive"
        )} />,
      case 'suspicious':
        return <AlertTriangle className = $2;
          "text-amber-500"
        )} />,
      default:
        return <CheckCircle className = $2;
          "text-green-500"
        )} />
    }
  },

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
}
