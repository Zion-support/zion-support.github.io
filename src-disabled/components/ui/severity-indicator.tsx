<<<<<<< HEAD
=======
<<<<<<< HEAD
size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4



import React from react",
import { cn } from "@/lib/utils,
import React from react";
import { cn } from "@/lib/utils;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> merged-prs-20250907-203621
:src/components/ui/severity-indicator.tsx
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react

interface SeverityIndicatorProps {
  severity: safe" | "suspicious | dangerous";
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm | md" | "lg;
  className?: string
}

<<<<<<< HEAD
=======
export function SeverityIndicator({
  severity,
  showIcon = true,
  showText = true,
  size = md',
  className,
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> merged-prs-20250907-203621
export function SeverityIndicator({ 
  severity;
  showIcon;
  severity: safe" | "suspicious | dangerous"
  showIcon?: boolean
  showText?: boolean
  size?: "sm | md" | "lg
  className?: string
}
export function SeverityIndicator({
  severity
  showIcon = true
  showText = true
  size = md"
      default:
        return <CheckCircle className={cn(
          size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4
  className?: string
}

export function SeverityIndicator({ 
  severity, 
  showIcon = true, 
  showText = true, 
  size = md",
  className 
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
<<<<<<< HEAD
=======
          "text-green-500"
          "text-green-500
        )} />;
size === sm" ? "h-3 w-3 : size === lg" ? "h-5 w-5 : h-4 w-4";
import React from "react,import { cn } from @/lib/utils",import React from react';
import { cn  } from '@/lib/utils;
import { AlertTriangle, AlertCircle, CheckCircle  } from lucide-react';
interface SeverityIndicatorProps  {severity: "safe | suspicious" | "dangerous,showIcon?: boolean,showText?: boolean,size?: sm" | "md | lg",className?: string;
}export function SeverityIndicator() {const getSeverityIcon = () => {switch (severity) {case 'dangerous:;
        return <AlertCircle className={cn(size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4,text-destructive";
        )} />,case suspicious':;
        return <AlertTriangle className={cn(size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4,text-amber-500";
        )} />,default:;
        return <CheckCircle className={cn(size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4,text-green-500";
        )} />;
          "text-green-500;
        )} />;interface SeverityIndicatorProps  {severity: safe" | "suspicious | dangerous",showIcon?: boolean,showText?: boolean,size?: "sm | md" | "lg,className?: string;
}
export function SeverityIndicator ({severity,show_icon = true,show_text = true,size = md";
      default:;
>>>>>>> merged-prs-20250907-203621
        return <AlertCircle className={cn(
          size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4,
          text-destructive"
        )} />,
      case 'suspicious:
        return <AlertTriangle className={cn(
          size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4,
          text-amber-500"
        )} />,
      default:
        return <CheckCircle className={cn(
          size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4,
          text-green-500"
        )} />
=======
>>>>>>> origin/chore/fix-lint-and-merge
interface SeverityIndicatorProps {
  severity: "safe | suspicious" | "dangerous,
  showIcon?: boolean,
  showText?: boolean,

  className?: string
}

export function SeverityIndicator({
  severity,
  showIcon = true,
  showText = true,

        )} />;
interface SeverityIndicatorProps {
  severity: "safe" | suspicious | "dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: sm" | "md | lg","
  className?: string
}
export function SeverityIndicator ({
  severity,
  show_icon = true,
  show_text = true,
  size = md;
      default:;,
        return <CheckCircle className={cn (
          size === "sm" ? h - 3 w - 3 : size === "lg" ? h - 5 w - 5 : "h - 4 w - 4";
          text - green - 500)} />;

    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }

        
          />
        );
      case suspicious':
        
          />
        );
      default:
        
          />
        );
    }
  }

  return (
    <div className={cn('flex items-center gap-1, className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className=capitalize text-sm'>{severity}</span>}
    </div>
  );

}
return (</div>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  },

  return (
    <div className={cn("flex items-center gap-1, className)}>

      {showIcon && getSeverityIcon()}
      {showText && <span className=capitalize text-sm">{severity}</span>}
    </div>
  )

      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm>{severity}</span>}
    </div>
<<<<<<< HEAD
:src/components/ui/severity-indicator.tsx
  );
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
  );

import { AlertTriangle, AlertCircle, CheckCircle } from lucide-react;
interface SeverityIndicatorProps {
  severity: safe" | "suspicious | dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm | md" | "lg,
  className?: string;
}
export function SeverityIndicator({
  severity,
  showIcon = true,
  showText = true,
  size = md",
  className;
}: SeverityIndicatorProps) {
    switch (severity) {
      case 'dangerous':;
        return <AlertCircle className={cn(;
          size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4,
          text-destructive";
        )} />,
      case suspicious:;
        return <AlertTriangle className={cn(;
          size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4,
          text-amber-500";
        )} />,
      default:;
        return <CheckCircle className={cn(;
<<<<<<< HEAD
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
          "text-green-500";
        )} />;
    }
  };
  return (;

    <div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
=======
<<<<<<< HEAD
          size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4;
        return <CheckCircle className={cn (size === sm" ? "h - 3 w - 3 : size === lg" ? "h - 5 w - 5 : h - 4 w - 4";
          "text - green - 500)} />;}
  }/>;
        )case 'suspicious':;
          />;
        )default:;
          />;
        )}
  }return (<div className={cn(flex items-center gap-1, className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className='capitalize text-sm'>{severity}</span>}
    </div>;
  )}return (</div>)};
  return (<div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className=capitalize text-sm>{severity}</span>}
    </div>;
  ){showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>;
  )interface SeverityIndicatorProps  {severity: safe | "suspicious" | dangerous,showIcon?: boolean,showText?: boolean,size?: "sm" | md | "lg",className?: string;
}export function SeverityIndicator() {const getSeverityIcon = () => {switch (severity) {case dangerous':;
        return <AlertCircle className={cn(size === sm ? "h-3 w-3" : size === lg ? "h-5 w-5" : h-4 w-4,"text-destructive";
        )} />,case 'suspicious':;
        return <AlertTriangle className={cn(size === sm ? "h-3 w-3" : size === lg ? "h-5 w-5" : h-4 w-4,"text-amber-500";
        )} />,default:;
        return <CheckCircle className={cn(size === sm ? "h-3 w-3" : size === lg ? "h-5 w-5" : h-4 w-4;
          "text-green-500";
        )} />;
    }
  }return (<div className={cn(flex items-center gap-1, className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}</div>;
  )}<div className={cn (flex items - center gap - 1, class_name)}>;
=======
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
          "text-green-500";
        )} />;
    }
  };
  return (;

    <div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>;
  );
}

    <div className={cn (flex items - center gap - 1, class_name)}>;
      {show_icon && getSeverityIcon ()}
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
});

}

}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
    </div>)}
  )}}
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
