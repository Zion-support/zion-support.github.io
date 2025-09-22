<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
import React from "react",
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
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
className?: string;
}

import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

interface SeverityIndicatorProps {;
severity: "safe" | "suspicious" | "dangerous",;
import React from "react",
=======
  severity: "safe" | "suspicious" | "dangerous",;import React from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  severity: "safe" | "suspicious" | "dangerous",;
import React from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import React from "react",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

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
interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;import React from "react",
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface SeverityIndicatorProps {

export function SeverityIndicator({
  severity, 
  showIcon = true, 

  showText = true, "
  size = "md",
className 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}: SeverityIndicatorProps) {
=======
  severity: "safe" | "suspicious" | "dangerous"
interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;

  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}}: SeverityIndicatorProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}

import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;import React from "react",;
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        )} />,
      default:
        return <CheckCircle className={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","
=======

)} />;
      default: return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
          "text-green-500"
        )} />
    }
  }
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}"
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )

}
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  className;}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;

default: return <CheckCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          "text-green-500"
        )} />;
    }
  }
  return (
"
import React from "react",;"
import { cn } from "@/lib/utils",;"
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
;
interface SeverityIndicatorProps {;"
  severity:"safe" | "suspicious" | "dangerous",;
  showIcon?:boolean,;
  showText?:boolean,;"
  size?:"sm" | "md" | "lg",;
  className?:string;
}
;
export function SeverityIndicator({ ;
  severity, ;
  showIcon = true, ;
showText = true, ;"
  size = "md",;
  className ;
        )} />;
    }
  }
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
"
    <div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}"
      {showText && <span className="capitalize text-sm">{severity}</span>}

<<<<<<< HEAD
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
          "text - green - 500")} />;
    }
  }
;
return ("
    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}"
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
  // TODO: Implement
}"
  severity: "safe" | "suspicious" | "dangerous""
  severity: "safe" | "suspicious" | "dangerous",;"
  showIcon?: boolean;
  showText?: boolean;"
  size?: "sm" | "md" | "lg";"
  className?: string;

}

import React from \"react\";
import {cn} from \"@/lib/utils\";
import {AlertTriangle, AlertCircle, CheckCircle} from \"lucide-react\";
interface SeverityIndicatorProps {;}
  severity: \"safe\" | \"suspicious\" | \"dangerous\",;import React from \"react\",}
import { cn } from \"@/lib/utils\";
import { AlertTriangle, AlertCircle, CheckCircle } from \"lucide-react\";
interface SeverityIndicatorProps {

  // TODO: Implement
  severity: "safe" | "suspicious" | "dangerous","
  showIcon?: boolean,
  showText?: boolean,"
  size?: "sm" | "md" | "lg","

export function SeverityIndicator({ 
  severity, 
  showIcon = true, 

  showText = true, "
  size = "md","
  className;
  showText = true, ;"
  size = "md";"
  className;)
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {"
      case 'dangerous':
        return <AlertCircle className={cn(
)
export function SeverityIndicator(): any ({ ;
  severity, ;
  showIcon = true, ;
  showText = true, ;
  className ;"
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",""
          "text-destructive"")
        )} />,

        return <AlertTriangle className={cn("
          "text-amber-500"")

        return <CheckCircle className={cn("
          "text-green-500"")
        )} />
"
    <div className={cn("flex items-center gap-1", className)}>"
</div>"
      {showText && <span className="capitalize text-sm">{severity}</span>}"
    </div>
        return <AlertCircleclassName={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"""
        )} />;

        return <AlertTriangleclassName={cn("

      default: return <CheckCircleclassName={cn("
    <div className={cn("flex items-center gap-1", className)}>;"
        return <AlertCircle className={cn ("
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";")"
          "text - destructive")} />;"

        return <AlertTriangle className={cn ("
          "text - amber - 500")} />;"

      default: return <CheckCircle className={cn ("
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4",")"
          "text - green - 500")} />;"
    <div className={cn ("flex items - center gap - 1", class_name)}>;"
      {show_text && <span className="capitalize text - sm">{severity}</span>}"
    </div>);"
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      case 'dangerous':;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  cn (size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";")"
"text-amber-500")"

default: return <CheckCircle className= {"
"text-green-500")"

return (</div>) "
    </div>;"
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
