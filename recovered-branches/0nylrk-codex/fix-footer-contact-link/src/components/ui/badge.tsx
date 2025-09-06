
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { badgeVariants } from &quot;@/components/ui/badge-variants&quot;
=======
=======
import * as React from &quot;react & quot;
import { cn } from &quot;@/lib / utils & quot;
=======


>>>>>>> main
import * as React from "react"
import { cn } from "@/lib/utils"

import { badgeVariants } from "@/components/ui/badge-variants"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
<<<<<<< HEAD
  variant?:;
    | &quot;default&quot;
    | &quot;secondary&quot;
    | &quot;destructive&quot;
    | &quot;outline&quot;
    | &quot;success&quot;
    | &quot;warning&quot;
    | &quot;info&quot;
=======
=======

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {

>>>>>>> main
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
<<<<<<< HEAD
function Badge({ className, variant, ...props }: BadgeProps) {return (;
    <span className={cn(badgeVariants({ variant }), className)} {...props} />;
  );
}
export { Badge, badgeVariants }
=======
;
function Badge({ className, variant, ...props }: BadgeProps) {;
  return (;
    <span className={cn(badgeVariants({ variant }), className)} {...props} />;
  );
}
;
<<<<<<< HEAD
export { Badge, badgeVariants };
=======
export { Badge, badgeVariants }
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

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
>>>>>>> main
