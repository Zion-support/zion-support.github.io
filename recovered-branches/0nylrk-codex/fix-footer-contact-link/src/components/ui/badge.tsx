

import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { badgeVariants } from &quot;@/components/ui/badge-variants&quot;
import * as React from "react"
import { cn } from "@/lib/utils"

import { badgeVariants } from "@/components/ui/badge-variants"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:;
    | &quot;default&quot;
    | &quot;secondary&quot;
    | &quot;destructive&quot;
    | &quot;outline&quot;
    | &quot;success&quot;
    | &quot;warning&quot;
    | &quot;info&quot;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"
}
function Badge({ className, variant, ...props }: BadgeProps) {return (;
    <span className={cn(badgeVariants({ variant }), className)} {...props} />;
  );
}




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


;
import { badge_variants } from &quot;@/components / ui / badge - variants & quot;
;
export interface BadgeProps;
  extends React.HTMLAttributes < HTMLSpanElement> {
  variant?:;
    | &quot;default & quot;
    | &quot;secondary & quot;
    | &quot;destructive & quot;
    | &quot;outline & quot;
    | &quot;success & quot;
    | &quot;warning & quot;
    | &quot;info & quot;
}

;

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


