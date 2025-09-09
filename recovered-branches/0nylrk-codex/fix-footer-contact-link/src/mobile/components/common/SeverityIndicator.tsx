import React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {
  showIcon?: boolean;
  showText?: boolean;"
  size?: "sm" | "md" | "lg";
  className?: string;
}

import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;import React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {

  severity: "safe" | "suspicious" | "dangerous"
  showIcon?: boolean;
  showText?: boolean;
}}: SeverityIndicatorProps) {
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-destructive"
        )} />,'
      case 'suspicious':
        return <AlertTriangle className={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","
          "text-amber-500"
import React from "react";;
import { cn } from "@/lib/utils",;

import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
interface SeverityIndicatorProps {;"
  severity: "safe" | "suspicious" | "dangerous",;

  className;}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
