<<<<<<< HEAD
=======
<<<<<<< HEAD

import * as React from &quot;react & quot;
import { cn } from &quot;@/lib / utils & quot;
<<<<<<< HEAD
=======


=======


import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { badgeVariants } from &quot;@/components/ui/badge-variants&quot;
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { badgeVariants } from &quot;@/components/ui/badge-variants&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
import { cn } from "@/lib/utils"

import { badgeVariants } from "@/components/ui/badge-variants"

<<<<<<< HEAD

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"
<<<<<<< HEAD

}


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
;
;

;

;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
