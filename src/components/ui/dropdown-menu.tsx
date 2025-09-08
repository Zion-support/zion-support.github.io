import * as React from "react"
import { cn } from "@/lib/utils"

const Dropdown-menu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
Dropdown-menu.displayName = "Dropdown-menu"

export { Dropdown-menu }
