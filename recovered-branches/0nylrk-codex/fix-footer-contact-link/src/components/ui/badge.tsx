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
function Badge({ className, variant, ...props }: BadgeProps) {return (;
    <span className={cn(badgeVariants({ variant }), className)} {...props} />;
  );
}
export { Badge, badgeVariants }
=======
import * as React from &quot;react & quot;
import { cn } from &quot;@/lib / utils & quot;
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
/**
 * Badge - Function description
 */
function Badge() {
  return (
    <span className={cn (badge_variants ({ variant }), class_name)} {...props} />);
}
export { Badge, badge_variants }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
