import * as React from "react"
import { cn } from "@/lib/utils"

const Alert-dialog = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
Alert-dialog.displayName = "Alert-dialog"

export { Alert-dialog }
