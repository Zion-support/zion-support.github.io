import React from "react","
import { cn } from "@/lib/utils";"
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";"
interface SeverityIndicatorProps {
<<<<<<< HEAD

=======
}
interface SeverityIndicatorProps {;
  }
  "severity": "safe" | "suspicious" | "dangerous",;"
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;


<<<<<<< HEAD
=======
  showIcon?: boolean;
  showText?: boolean;"
  size?: "sm" | "md" | "lg";
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react";
import {cn} from "@/lib/utils";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

<<<<<<< HEAD

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
=======
interface SeverityIndicatorProps {;

import React from "react",

import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface SeverityIndicatorProps {
>>>>>>> origin/cursor/delete-old-data-records-6bba


  showIcon?: boolean;
  showText?: boolean;
<<<<<<< HEAD
  size?: "sm" | "md" | "lg";

  className?: string;
}


=======
  size?: "sm" | "md" | "lg";"
  className?: string;
}
import React from "react";"
import {cn} from "@/lib/utils";"
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";"
interface SeverityIndicatorProps {;
  }
  "severity": "safe" | "suspicious" | "dangerous",;import React from "react","
>>>>>>> origin/cursor/delete-old-data-records-6bba


interface SeverityIndicatorProps {

  severity, 
  showIcon = true, 
<<<<<<< HEAD

=======
  showText = true, "
  size = "md",
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
}: SeverityIndicatorProps) {
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          "text-destructive"
        )} />,'
      case 'suspicious':
        return <AlertTriangle className={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","
          "text-amber-500"

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        )} />,
      default:
        return <CheckCircle className={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","
<<<<<<< HEAD



=======
          "text-amber-500""
import React from "react";"
import { cn } from "@/lib/utils";"
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;"
interface SeverityIndicatorProps {;
  }
  "severity": "safe" | "suspicious" | "dangerous",;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          "text-green-500"
        )} />
    }
  },

<<<<<<< HEAD

=======
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}"
>>>>>>> origin/cursor/delete-old-data-records-6bba


  return (
    <div className={cn("flex items-center gap-1", className)}>
      {showIcon && getSeverityIcon()}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )

<<<<<<< HEAD
=======
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react",;
import { cn } from "@/lib/utils",;

import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
interface SeverityIndicatorProps {;"
  severity: "safe" | "suspicious" | "dangerous",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  showIcon?: boolean,;
  showText?: boolean,;"
  size?: "sm" | "md" | "lg",;
  className?: string;

}
;

<<<<<<< HEAD
export function SeverityIndicator({;
  severity,;
  showIcon = true,;
  showText = true,;
  size = "md",;
  className;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          "text-destructive"
        )} />;

      case 'suspicious':;
        return <AlertTriangleclassName={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4""
          "text-amber-500"
        )} />;


<<<<<<< HEAD
      default: return <CheckCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",


          "text-green-500"
        )} />;
    }
  }


=======
"
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
<<<<<<< HEAD
=======
}

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

}



<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
