
import * as React from "react"
import { cn } from "@/lib/utils"

import { badgeVariants } from "@/components/ui/badge-variants"

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
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;