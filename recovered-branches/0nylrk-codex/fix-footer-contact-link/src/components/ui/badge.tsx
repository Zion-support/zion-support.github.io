
import * as React from "react"


export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {_variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"}

function Badge(_{_className, _variant, _...props}: BadgeProps) {_return (
    <span className={cn(badgeVariants({ variant}), className)} {_...props} />
  )
}

export {_Badge, _badgeVariants}
