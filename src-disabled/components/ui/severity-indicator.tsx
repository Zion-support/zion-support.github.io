<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/ui/severity-indicator.tsx
size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
size === "sm ? h-3 w-3" : size === "lg ? h-5 w-5" : "h-4 w-4
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc



import React from "react",
import { cn } from "@/lib/utils",
import React from "react";
import { cn } from "@/lib/utils";
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> merged-prs-20250907-203621
:src/components/ui/severity-indicator.tsx
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

<<<<<<< HEAD
:src_backup/components/ui/severity-indicator.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function SeverityIndicator({
  severity,
  showIcon = true,
  showText = true,
  size = 'md',
  className,
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> merged-prs-20250907-203621
export function SeverityIndicator({ 
  severity;
  showIcon;
  severity: "safe" | "suspicious" | "dangerous"
  showIcon?: boolean
  showText?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}
export function SeverityIndicator({
  severity
  showIcon = true
  showText = true
  size = "md"
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
  className?: string
}

export function SeverityIndicator({ 
  severity, 
  showIcon = true, 
  showText = true, 
  size = "md",
  className 
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
<<<<<<< HEAD
:src_backup/components/ui/severity-indicator.tsx
          "text-green-500"
=======
<<<<<<< HEAD
=======
          "text-green-500"
          "text-green-500
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        )} />;

;
size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
import React from "react",import { cn } from "@/lib/utils",import React from 'react';
import { cn  } from '@/lib/utils';
import { AlertTriangle, AlertCircle, CheckCircle  } from 'lucide-react';
interface SeverityIndicatorProps  {severity: "safe" | "suspicious" | "dangerous",showIcon?: boolean,showText?: boolean,size?: "sm" | "md" | "lg",className?: string;
}export function SeverityIndicator() {const getSeverityIcon = () => {switch (severity) {case 'dangerous':;
        return <AlertCircle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","text-destructive";
        )} />,case 'suspicious':;
        return <AlertTriangle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","text-amber-500";
        )} />,default:;
        return <CheckCircle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","text-green-500";
        )} />;
          "text-green-500";
        )} />;interface SeverityIndicatorProps  {severity: "safe" | "suspicious" | "dangerous",showIcon?: boolean,showText?: boolean,size?: "sm" | "md" | "lg",className?: string;
}
export function SeverityIndicator ({severity,show_icon = true,show_text = true,size = "md";
      default:;
<<<<<<< HEAD
:src_backup/components/ui/severity-indicator.tsx
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        return <AlertCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-destructive"
        )} />,
      case 'suspicious':
        return <AlertTriangle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-amber-500"
        )} />,
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-green-500"
        )} />
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous","
  showIcon?: boolean,
  showText?: boolean,

  className?: string
}

export function SeverityIndicator({
  severity,
  showIcon = true,
  showText = true,

        )} />;
;
interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous","
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm" | "md" | "lg","
  className?: string
}
export function SeverityIndicator ({
  severity,
  show_icon = true,
  show_text = true,
  size = "md";
      default:;,
        return <CheckCircle className={cn (
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";
          "text - green - 500")} />;

    }
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/ui/severity-indicator.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }

        
          />
        );
      case 'suspicious':
        
          />
        );
      default:
        
          />
        );
    }
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className='capitalize text-sm'>{severity}</span>}
    </div>
  );

};
return (</div>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  return (
    <div className={cn("flex items-center gap-1", className)}>

      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
<<<<<<< HEAD
:src_backup/components/ui/severity-indicator.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/ui/severity-indicator.tsx
  );
<<<<<<< HEAD
};
=======
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );

import React from "react",;
import { cn } from "@/lib/utils",;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
  showIcon?: boolean,;
  showText?: boolean,;
  size?: "sm" | "md" | "lg",;
  className?: string;
}
;
export function SeverityIndicator({;
  severity,;
  showIcon = true,;
  showText = true,;
  size = "md",;
  className;
}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
        return <CheckCircle className={cn (size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";
          "text - green - 500")} />;}
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }/>;
        )case 'suspicious':;
          />;
        )default:;
          />;
        )}
  }return (<div className={cn('flex items-center gap-1', className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className='capitalize text-sm'>{severity}</span>}
    </div>;
  )}return (</div>)}'";
  return (<div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>;
  ){showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>;
  )interface SeverityIndicatorProps  {severity: "safe" | "suspicious" | "dangerous",showIcon?: boolean,showText?: boolean,size?: "sm" | "md" | "lg",className?: string;
}export function SeverityIndicator() {const getSeverityIcon = () => {switch (severity) {case 'dangerous':;
        return <AlertCircle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","text-destructive";
        )} />,case 'suspicious':;
        return <AlertTriangle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","text-amber-500";
        )} />,default:;
        return <CheckCircle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
          "text-green-500";
        )} />;
    }
  }return (<div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
<<<<<<< HEAD
:src_backup/components/ui/severity-indicator.tsx
      {showText && <span className="capitalize text-sm">{severity}</span>}</div>;
  )}<div className={cn ("flex items - center gap - 1", class_name)}>;
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>;
  );
}
;

    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}
      {show_text && <span className="capitalize text - sm">{severity}</span>}
<<<<<<< HEAD
:src_backup/components/ui/severity-indicator.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>);
});

}

;

}
<<<<<<< HEAD

=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
:src_backup/components/ui/severity-indicator.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </div>)}
  )}}

