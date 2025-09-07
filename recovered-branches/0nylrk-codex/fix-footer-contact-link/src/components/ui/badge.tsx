
import * as React from &quot;react & quot;
import { cn } from &quot;@/lib / utils & quot;
<<<<<<< HEAD
import * as React from "react"
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { cn } from "@/lib/utils"

import { badgeVariants } from "@/components/ui/badge-variants"

<<<<<<< HEAD

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {

=======
export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"

}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
;

;

;
<<<<<<< HEAD

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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
