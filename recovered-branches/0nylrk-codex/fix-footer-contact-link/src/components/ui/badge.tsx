
import * as React from &quot;react & quot;
import { cn } from &quot;@/lib / utils & quot;



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
