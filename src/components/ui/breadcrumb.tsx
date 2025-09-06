=======

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from 'lucide-react'
 
import { cn } from "@/lib/utils"
 
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref) => (;
  <nav;
    ref={ref}
    aria-label="breadcrumb"
    className={cn(
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
))
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const BreadcrumbSeparator = ({
  children
  className
  ...props
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  >
    {children |<ChevronRight className='h-4 w-4' />}
  </li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'
=======
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}
  >
    {children || <ChevronRight className="h-4 w-4" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const BreadcrumbEllipsis = ({
  className
  ...props
export {
  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    &#8230,
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
 
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis}
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
