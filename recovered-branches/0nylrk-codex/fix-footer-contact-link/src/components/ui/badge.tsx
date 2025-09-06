
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
function Badge({ className, variant, ...props }: BadgeProps) {return (;
    <span className={cn(badgeVariants({ variant }), className)} {...props} />;
  );
}

;

;
export { Badge, badgeVariants }
;
