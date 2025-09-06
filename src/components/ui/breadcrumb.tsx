

      "inline-flex items-center gap-1 text-sm text-zion-slate-light",

      className
    )}
    {...props}
  />
))

const BreadcrumbSeparator = ({
  children
  className
  ...props

  >
    {children |<ChevronRight className='h-4 w-4' />}
  </li>
)

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

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
