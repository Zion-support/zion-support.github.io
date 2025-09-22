
<<<<<<< HEAD
=======
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
export { Badge, badgeVariants } function Badge ({
  className, variant, ...props 
}: BadgeProps) {
  return (<span className= {
  cn (badgeVariants ({
  variant 
}), className) 
}{
  ...props 
}/>) 
}export {
  Badge, badgeVariants 
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
