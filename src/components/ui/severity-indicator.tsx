
<<<<<<< HEAD
=======
import React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string
}

export function SeverityIndicator({ 
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  severity, 
  showIcon = true, 
  showText = true, 
  size = "md";
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
