import React from "react",
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  showIcon?: boolean;
  showText?: boolean;"
  size?: "sm" | "md" | "lg";

import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

interface SeverityIndicatorProps {;

import React from "react",

import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {

<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
<<<<<<< HEAD
}
<<<<<<< HEAD
import React from "react";"
import {cn} from "@/lib/utils";"
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";"
interface SeverityIndicatorProps {;
  }
  "severity": "safe" | "suspicious" | "dangerous",;import React from "react","
=======

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
interface SeverityIndicatorProps {

  severity, 
  showIcon = true, 

=======
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {

  severity: "safe" | "suspicious" | "dangerous"
=======

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
<<<<<<< HEAD
  className?: string
}

export function SeverityIndicator({
  severity
  showIcon = true
  showText = true
  size = "md";
  className
import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",
=======
  className?: string;
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface SeverityIndicatorProps {

  severity, 
  showIcon = true, 
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  showText = true, "
  size = "md",

}: SeverityIndicatorProps) {

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  showText = true, 
  size = "md",

  className 

<<<<<<< HEAD
  showText = true, ;
  size = "md";
  showText = true, 
  size = "md",
  className 
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
        return <AlertCircle className={cn(
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function SeverityIndicator(): any ({ ;
  severity, ;
  showIcon = true, ;
  showText = true, ;
  size = "md";
  className ;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          "text-destructive"
        )} />,'
      case 'suspicious':
        return <AlertTriangle className={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","
          "text-amber-500"

<<<<<<< HEAD
=======
<<<<<<< HEAD
        )} />;
      default: return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
          "text-green-500"
        )} />
    }
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        )} />,
      default:
        return <CheckCircle className={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","
<<<<<<< HEAD
          "text-amber-500""
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;"
interface SeverityIndicatorProps {;
  }
  "severity": "safe" | "suspicious" | "dangerous",;"
=======

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          "text-green-500"
        )} />
    }
  },
<<<<<<< HEAD

    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}
<<<<<<< HEAD

      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )

}
}

import React from "react",;
import { cn } from "@/lib/utils",;

import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
interface SeverityIndicatorProps {;"
  severity: "safe" | "suspicious" | "dangerous",;
>>>>>>> origin/chore/fix-lint-and-merge
  showIcon?: boolean,;
  showText?: boolean,;"
  size?: "sm" | "md" | "lg",;
  className?: string;

}
;

=======
<<<<<<< HEAD
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
}
}
;
=======

      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )

<<<<<<< HEAD
}
}

=======
<<<<<<< HEAD
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;
import { cn } from "@/lib/utils",;

import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
interface SeverityIndicatorProps {;"
  severity: "safe" | "suspicious" | "dangerous",;
>>>>>>> origin/chore/fix-lint-and-merge
  showIcon?: boolean,;
  showText?: boolean,;"
  size?: "sm" | "md" | "lg",;
  className?: string;

}
;
<<<<<<< HEAD

=======
export function SeverityIndicator({;
  severity,;
  showIcon = true,;
  showText = true,;
  size = "md",;
  className;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
<<<<<<< HEAD
      default: return <CheckCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
=======
        return <AlertCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          "text-destructive"
        )} />;

      case 'suspicious':;
        return <AlertTriangleclassName={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4""
          "text-amber-500"
        )} />;

<<<<<<< HEAD
"
=======
<<<<<<< HEAD
"
=======
      default: return <CheckCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          "text-green-500"
        )} />;
    }
  }
<<<<<<< HEAD
  return (

import React from "react",;
import { cn } from "@/lib/utils",;
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
;
interface SeverityIndicatorProps {;
  severity:"safe" | "suspicious" | "dangerous",;
  showIcon?:boolean,;
  showText?:boolean,;
  size?:"sm" | "md" | "lg",;
  className?:string;
}
;
export function SeverityIndicator({ ;
  severity, ;
  showIcon = true, ;
  showText = true, ;
  size = "md",;
  className ;
} SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
        return <AlertCircle className={cn(;
          size === "sm" ? "h-3 w-3" :size === "lg" ? "h-5 w-5" :"h-4 w-4",;
        return <AlertCircle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",;
          "text-destructive";
        )} />,;
      case 'suspicious':;
        return <AlertTriangle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",;
          "text-amber-500";
        )} />,;
      default:;
        return <CheckCircle className={cn(;
    </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (

}

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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
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
=======
}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
