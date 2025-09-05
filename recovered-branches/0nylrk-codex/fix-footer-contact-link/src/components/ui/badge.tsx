
<<<<<<< HEAD
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;

import { badgeVariants } from &quot;@/components/ui/badge-variants&quot;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | &quot;default&quot;
    | &quot;secondary&quot;
    | &quot;destructive&quot;
    | &quot;outline&quot;
    | &quot;success&quot;
    | &quot;warning&quot;
    | &quot;info&quot;
}
=======
import * as React from "react"


export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {_variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

function Badge(_{_className, _variant, _...props}: BadgeProps) {_return (
    <span className={cn(badgeVariants({ variant}), className)} {_...props} />
  )
}

export {_Badge, _badgeVariants}
