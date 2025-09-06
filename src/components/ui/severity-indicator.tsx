 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

import React from "react",
import { cn } from "@/lib/utils",
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
  showIcon = true, 
  showText = true, 

    }
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }

  return (

      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
