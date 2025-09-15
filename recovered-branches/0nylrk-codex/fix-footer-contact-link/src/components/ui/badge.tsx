
import * as React from "react"
import { cn } from "@/lib/utils"

import { badgeVariants } from "@/components/ui/badge-variants"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
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
function Badge({ classNamevariant...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant })className)} {...props} />
  )
}

export { BadgebadgeVariants }
=======
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
>>>>>>> origin/auto/autonomy-17186719616
