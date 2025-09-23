
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from "lucide-react"
 
import { cn } from "@/lib/utils"
 
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
<<<<<<< HEAD
>(({ classNameseparator...props }ref) => (
=======
>(({ className, separator, ...props }, ref) => (
>>>>>>> origin/auto/autonomy-17186719616
  <nav
    ref={ref}
    aria-label="breadcrumb"
    className={cn(
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
      className
    )}
    {...props}
  />
))
Breadcrumb.displayName = "Breadcrumb"
 
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
<<<<<<< HEAD
>(({ className...props }ref) => (
  <ol
    ref={ref}
    className={cn("flex items-center gap-1.5"className)}
=======
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("flex items-center gap-1.5", className)}
>>>>>>> origin/auto/autonomy-17186719616
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"
 
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
<<<<<<< HEAD
>(({ className...props }ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5"className)}
=======
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
>>>>>>> origin/auto/autonomy-17186719616
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"
 
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
<<<<<<< HEAD
>(({ classNameasChild = false...props }ref) => {
=======
>(({ className, asChild = false, ...props }, ref) => {
>>>>>>> origin/auto/autonomy-17186719616
  const Comp = asChild ? Slot : "a"
 
  return (
    <Comp
      ref={ref}
<<<<<<< HEAD
      className={cn("transition-colors hover:text-zion-cyan"className)}
=======
      className={cn("transition-colors hover:text-zion-cyan", className)}
>>>>>>> origin/auto/autonomy-17186719616
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"
 
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
<<<<<<< HEAD
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70"className)}
=======
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
>>>>>>> origin/auto/autonomy-17186719616
    {...props}
  >
    {children || <ChevronRight className="h-4 w-4" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
 
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
<<<<<<< HEAD
    className={cn("flex h-9 w-9 items-center justify-center"className)}
=======
    className={cn("flex h-9 w-9 items-center justify-center", className)}
>>>>>>> origin/auto/autonomy-17186719616
    {...props}
  >
    &#8230;
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
 
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
<<<<<<< HEAD
  BreadcrumbEllipsis}
=======
  BreadcrumbEllipsis,
}
>>>>>>> origin/auto/autonomy-17186719616
