
<<<<<<< HEAD
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { badgeVariants } from &quot;@/components/ui/badge-variants&quot;
=======
import * as React from "react"
import { cn } from "@/lib/utils"

import { badgeVariants } from "@/components/ui/badge-variants"

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
