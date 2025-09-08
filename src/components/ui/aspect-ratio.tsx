import * as React from "react"
import { cn } from "@/lib/utils"

const AspectRatio = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
