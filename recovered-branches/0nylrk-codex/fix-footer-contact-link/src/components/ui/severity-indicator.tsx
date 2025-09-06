<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


import React from "react";"
import {cn} from "@/lib/utils";"
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
"
import React from "react",";
import { cn } from "@/lib/utils";"
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  showIcon?: boolean;
  showText?: boolean;"
  size?: "sm" | "md" | "lg";
<<<<<<< HEAD
  className?: string;
}
=======




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

interface SeverityIndicatorProps {;
<<<<<<< HEAD
<<<<<<< HEAD
  severity: "safe" | "suspicious" | "dangerous",;
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",
=======
  severity: "safe" | "suspicious" | "dangerous",;import React from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  severity: "safe" | "suspicious" | "dangerous",;
import React from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {

<<<<<<< HEAD
interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
=======
  severity: "safe" | "suspicious" | "dangerous"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
<<<<<<< HEAD
}

import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

<<<<<<< HEAD
export function SeverityIndicator({
  severity
  showIcon = true
  showText = true
  size = "md";
  className
import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
  className?: string;
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;import React from "react",
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface SeverityIndicatorProps {

<<<<<<< HEAD
export function SeverityIndicator({ 
=======



  className?: string;
}


interface SeverityIndicatorProps {"
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,"
  size?: "sm" | "md" | "lg",
  className?: string;
}

export function SeverityIndicator({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  severity, 
  showIcon = true, 

  showText = true, "
  size = "md",
<<<<<<< HEAD

  className 

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  showText = true, ;
  size = "md";
  showText = true, 
  size = "md",
  className 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}: SeverityIndicatorProps) {
=======
  severity: "safe" | "suspicious" | "dangerous"
interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;

  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
<<<<<<< HEAD
}}: SeverityIndicatorProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}: SeverityIndicatorProps) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}


  className?: string;
}

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
  size = "md",

  className 

  showText = true, ;
  size = "md";
  showText = true, 
  size = "md",
  className 
}: SeverityIndicatorProps) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
        return <AlertCircle className={cn(

export function SeverityIndicator(): any ({ ;
  severity, ;
  showIcon = true, ;
  showText = true, ;
  size = "md";
  className ;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
=======
;
  className;
}: SeverityIndicatorProps) {}
  const getSeverityIcon = () => {}
    switch (severity) {}
      case 'dangerous':
        return <AlertCircle className={cn(

export function SeverityIndicator(): any ({ ;
  severity, ;
  showIcon = true, ;
  showText = true, ;"
  size = "md";
  className ;
"
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          "text-destructive"
        )} />,'
      case 'suspicious':
        return <AlertTriangle className={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","
          "text-amber-500"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
        )} />;
      default: return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
          "text-green-500"
        )} />
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        )} />,
      default:
        return <CheckCircle className={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","
=======

        )} />,
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          "text-green-500"
        )} />
    }
  },


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
  return (
=======


  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}"
=======
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )


}


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",;
import { cn } from "@/lib/utils",;
=======
"
import React from "react",;"
import { cn } from "@/lib/utils",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
interface SeverityIndicatorProps {;"
  severity: "safe" | "suspicious" | "dangerous",;
  showIcon?: boolean,;
  showText?: boolean,;"
  size?: "sm" | "md" | "lg",;
  className?: string;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function SeverityIndicator({;
  severity,;
  showIcon = true,;
  showText = true,;
  size = "md",;
  className;

}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      case 'dangerous':;
<<<<<<< HEAD
<<<<<<< HEAD
        return <AlertCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          "text-destructive"
        )} />;
=======
export function SeverityIndicator() { return null; }
        )} />;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      case 'suspicious':;
        return <AlertTriangleclassName={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4""
          "text-amber-500"
        )} />;


"
=======
      case 'dangerous':;
        return <AlertCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
          "text-destructive"
        )} />;
      case 'suspicious':;
        return <AlertTriangleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
          "text-amber-500"
        )} />;

      default: return <CheckCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          "text-green-500"
        )} />;
    }
  }
  return (
<<<<<<< HEAD
"
import React from "react",;"
import { cn } from "@/lib/utils",;"
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
;
interface SeverityIndicatorProps {;"
  severity:"safe" | "suspicious" | "dangerous",;
  showIcon?:boolean,;
  showText?:boolean,;"
=======

import React from "react",;
import { cn } from "@/lib/utils",;
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
;
interface SeverityIndicatorProps {;
  severity:"safe" | "suspicious" | "dangerous",;
  showIcon?:boolean,;
  showText?:boolean,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  size?:"sm" | "md" | "lg",;
  className?:string;
}
;
export function SeverityIndicator({ ;
  severity, ;
  showIcon = true, ;
<<<<<<< HEAD
  showText = true, ;"
=======
  showText = true, ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  size = "md",;
  className ;
        )} />;
    }
  }

  return (
<<<<<<< HEAD
"
    <div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}"
      {showText && <span className="capitalize text-sm">{severity}</span>}

<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
import React from './react';
import { cn } from '@/lib / utils';
=======
}'
import React from './react';'
import { cn } from '@/lib / utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';
interface SeverityIndicatorProps {"
  severity: "safe" | "suspicious" | "dangerous",
  show_icon?: boolean;
  show_text?: boolean;"
  size?: "sm" | "md" | "lg";
  class_name?: string;
}
export /**;
 * SeverityIndicator - Function description;
 */
function SeverityIndicator() {}
  const getSeverityIcon = () =>: any {}
    switch (severity) {'
      case 'dangerous':;
        return <AlertCircle className={cn ("
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";"
          "text - destructive")} />;'
      case 'suspicious':;
        return <AlertTriangle className={cn ("
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";"
          "text - amber - 500")} />;
      default: return <CheckCircle className={cn ("
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4","
=======
    <div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}

}
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          "text - green - 500")} />;
    }
  }
;
<<<<<<< HEAD

  return ("
    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}"
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
  return (
    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      case 'dangerous':;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      case 'dangerous':;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
