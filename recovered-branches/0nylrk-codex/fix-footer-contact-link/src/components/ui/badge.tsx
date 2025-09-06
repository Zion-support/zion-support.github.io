
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {

}

;

=======
import * as React from &quot;react & quot;
import { cn } from &quot;@/lib / utils & quot;
=======


=======
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { badgeVariants } from &quot;@/components/ui/badge-variants&quot;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { badgeVariants } from &quot;@/components/ui/badge-variants&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from "react"
import { cn } from "@/lib/utils"

import { badgeVariants } from "@/components/ui/badge-variants"

<<<<<<< HEAD
<<<<<<< HEAD

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"
<<<<<<< HEAD
<<<<<<< HEAD

}


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
function Badge({ className, variant, ...props }: BadgeProps) {return (;
    <span className={cn(badgeVariants({ variant }), className)} {...props} />;
  );
}
export { Badge, badgeVariants }
;
function Badge({ className, variant, ...props }: BadgeProps) {;
  return (;
    <span className={cn(badgeVariants({ variant }), className)} {...props} />;
  );
}
;
export { Badge, badgeVariants };
export { Badge, badgeVariants }
;
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
