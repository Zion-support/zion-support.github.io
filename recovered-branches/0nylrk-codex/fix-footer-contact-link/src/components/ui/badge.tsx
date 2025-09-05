
<<<<<<< HEAD
import * as React from "react";
import { cn } from "@/lib/utils";
;
import { badgeVariants } from "@/components/ui/badge-variants";
;
export interface BadgeProps;
  extends React.HTMLAttributes<HTMLSpanElement> {;
  variant?:;
    | "default";
    | "secondary";
    | "destructive";
    | "outline";
    | "success";
    | "warning";
    | "info";
}
;
function Badge({ className, variant, ...props } BadgeProps) {;
  return (;
    <span className={cn(badgeVariants({ variant }), className)} {...props} />;
  );
}
;
export { Badge, badgeVariants }
=======
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
function Badge(_{_className, _variant, _...props}: BadgeProps) {_return (
    <span className={cn(badgeVariants({ variant}), className)} {_...props} />
  )
}

export {_Badge, _badgeVariants}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
