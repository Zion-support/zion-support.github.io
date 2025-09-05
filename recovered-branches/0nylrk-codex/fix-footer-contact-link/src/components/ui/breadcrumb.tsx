
import * as React from &quot;react&quot;
import { Slot } from &quot;@radix-ui/react-slot&quot;
import { ChevronRight } from &quot;lucide-react&quot;
 
import { cn } from &quot;@/lib/utils&quot; 
const _Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<&quot;nav&quot;> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label=&quot;breadcrumb&quot;
    className={cn(
      &quot;inline-flex items-center gap-1 text-sm text-zion-slate-light&quot;,
      className    )}
    {_...props}
  />
))
Breadcrumb.displayName = &quot;Breadcrumb&quot;
 
const _BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<&quot;ol&quot;>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(&quot;flex items-center gap-1.5&quot;, className)}
    {...props}  />
))
BreadcrumbList.displayName = &quot;BreadcrumbList&quot;
 
const _BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<&quot;li&quot;>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(&quot;inline-flex items-center gap-1.5&quot;, className)}
    {...props}  />
))
BreadcrumbItem.displayName = &quot;BreadcrumbItem&quot;
 
const _BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<&quot;a&quot;> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : &quot;a&quot; 
  return (
    <Comp
      ref={ref}
      className={cn(&quot;transition-colors hover:text-zion-cyan&quot;, className)}
      {...props}    />
  )
})
BreadcrumbLink.displayName = &quot;BreadcrumbLink&quot;
 
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
    {children || <ChevronRight className=&quot;h-4 w-4&quot; />}  </li>
)
BreadcrumbSeparator.displayName = &quot;BreadcrumbSeparator&quot;
 
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<&quot;span&quot;>) => (
  <span
    role=&quot;presentation&quot;
    aria-hidden=&quot;true&quot;
    className={cn(&quot;flex h-9 w-9 items-center justify-center&quot;, className)}
    {...props}  >
    &#8230,
  </span>
)
BreadcrumbEllipsis.displayName = &quot;BreadcrumbElipssis&quot;
 
export {_Breadcrumb, _BreadcrumbList, _BreadcrumbItem, _BreadcrumbLink, _BreadcrumbSeparator, _BreadcrumbEllipsis}
