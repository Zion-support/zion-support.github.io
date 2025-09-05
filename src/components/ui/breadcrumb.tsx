
import * as React from "react"
 
 
const _Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {_separator?: React.ReactNode}
>(_({_className, _separator, _...props}, _ref) => (
  <nav
    ref={_ref}
    aria-label="breadcrumb"
    className={_cn(
      "inline-flex items-center gap-1 text-sm text-zion-slate-light", _className
    )}
    {_...props}
  />
))
Breadcrumb.displayName = "Breadcrumb"
 
const _BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(_({_className, _...props}, _ref) => (
  <ol
    ref={_ref}
    className={_cn("flex items-center gap-1.5", _className)}
    {_...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"
 
const _BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(_({_className, _...props}, _ref) => (
  <li
    ref={_ref}
    className={_cn("inline-flex items-center gap-1.5", _className)}
    {_...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"
 
const _BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {_asChild?: boolean}
>(_({_className, _asChild = false, _...props}, _ref) => {_const _Comp = asChild ? Slot : "a"
 
  return (
    <Comp
      ref={ref}
      className={_cn("transition-colors hover:text-zion-cyan", _className)}
      {_...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"
 
const _BreadcrumbSeparator = (_{_children, _className, _...props}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={_cn("[&>svg]:size-3.5 text-zion-slate-light/70", _className)}
    {_...props}
  >
    {_children || <ChevronRight className="h-4 w-4" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
 
const _BreadcrumbEllipsis = (_{_className, _...props}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={_cn("flex h-9 w-9 items-center justify-center", _className)}
    {_...props}
  >
    &#8230;
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
 
export {_Breadcrumb, _BreadcrumbList, _BreadcrumbItem, _BreadcrumbLink, _BreadcrumbSeparator, _BreadcrumbEllipsis}
