
<<<<<<< HEAD
import * as React from &quot;react&quot;
import { Slot } from &quot;@radix-ui/react-slot&quot;
import { ChevronRight } from &quot;lucide-react&quot;
 
import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"
 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
 
const _Breadcrumb = React.forwardRef<
  HTMLElement,
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<&quot;nav&quot;> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label=&quot;breadcrumb&quot;
    className={cn(
      &quot;inline-flex items-center gap-1 text-sm text-zion-slate-light&quot;,
      className
=======
  React.ComponentPropsWithoutRef<"nav"> & {_separator?: React.ReactNode}
>(_({_className, _separator, _...props}, _ref) => (
  <nav
    ref={_ref}
    aria-label="breadcrumb"
    className={_cn(
      "inline-flex items-center gap-1 text-sm text-zion-slate-light", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
Breadcrumb.displayName = &quot;Breadcrumb&quot;
 
const _BreadcrumbList = React.forwardRef<
  HTMLOListElement,
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<&quot;ol&quot;>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(&quot;flex items-center gap-1.5&quot;, className)}
    {...props}
=======
  React.ComponentPropsWithoutRef<"ol">
>(_({_className, _...props}, _ref) => (
  <ol
    ref={_ref}
    className={_cn("flex items-center gap-1.5", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
BreadcrumbList.displayName = &quot;BreadcrumbList&quot;
 
const _BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<&quot;li&quot;>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(&quot;inline-flex items-center gap-1.5&quot;, className)}
    {...props}
=======
  React.ComponentPropsWithoutRef<"li">
>(_({_className, _...props}, _ref) => (
  <li
    ref={_ref}
    className={_cn("inline-flex items-center gap-1.5", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
BreadcrumbItem.displayName = &quot;BreadcrumbItem&quot;
 
const _BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<&quot;a&quot;> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : &quot;a&quot;
=======
  React.ComponentPropsWithoutRef<"a"> & {_asChild?: boolean}
>(_({_className, _asChild = false, _...props}, _ref) => {_const _Comp = asChild ? Slot : "a"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
 
  return (
    <Comp
      ref={ref}
<<<<<<< HEAD
      className={cn(&quot;transition-colors hover:text-zion-cyan&quot;, className)}
      {...props}
=======
      className={_cn("transition-colors hover:text-zion-cyan", _className)}
      {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
})
BreadcrumbLink.displayName = &quot;BreadcrumbLink&quot;
 
<<<<<<< HEAD
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<&quot;li&quot;>) => (
  <li
    role=&quot;presentation&quot;
    aria-hidden=&quot;true&quot;
    className={cn(&quot;[&>svg]:size-3.5 text-zion-slate-light/70&quot;, className)}
    {...props}
  >
    {children || <ChevronRight className=&quot;h-4 w-4&quot; />}
=======
const _BreadcrumbSeparator = (_{_children, _className, _...props}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={_cn("[&>svg]:size-3.5 text-zion-slate-light/70", _className)}
    {_...props}
  >
    {_children || <ChevronRight className="h-4 w-4" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  </li>
)
BreadcrumbSeparator.displayName = &quot;BreadcrumbSeparator&quot;
 
<<<<<<< HEAD
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<&quot;span&quot;>) => (
  <span
    role=&quot;presentation&quot;
    aria-hidden=&quot;true&quot;
    className={cn(&quot;flex h-9 w-9 items-center justify-center&quot;, className)}
    {...props}
=======
const _BreadcrumbEllipsis = (_{_className, _...props}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={_cn("flex h-9 w-9 items-center justify-center", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  >
    &#8230,
  </span>
)
BreadcrumbEllipsis.displayName = &quot;BreadcrumbElipssis&quot;
 
export {_Breadcrumb, _BreadcrumbList, _BreadcrumbItem, _BreadcrumbLink, _BreadcrumbSeparator, _BreadcrumbEllipsis}
