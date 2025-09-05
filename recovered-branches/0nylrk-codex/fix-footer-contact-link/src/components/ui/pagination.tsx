import * as React from "react"


const _Pagination = (_{_className, _...props}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={_cn("mx-auto flex w-full justify-center", _className)}
    {_...props}
  />
)
Pagination.displayName = "Pagination"

const _PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(_({_className, _...props}, _ref) => (
  <ul
    ref={_ref}
    className={_cn("flex flex-row items-center gap-1", _className)}
    {_...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const _PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(_({_className, _...props}, _ref) => (
  <li ref={_ref} className={_cn("", _className)} {_...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {_isActive?: boolean} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const _PaginationLink = (_{_className, _isActive, _size = "icon", _...props}: PaginationLinkProps) => (
  <a
    aria-current={_isActive ? "page" : undefined}
    className={_cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost", _size}),
      className
    )}
    {_...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const _PaginationPrevious = (_{_className, _...props}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={_cn("gap-1 pl-2.5", _className)}
    {_...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const _PaginationNext = (_{_className, _...props}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={_cn("gap-1 pr-2.5", _className)}
    {_...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const _PaginationEllipsis = (_{_className, _...props}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={_cn("flex h-9 w-9 items-center justify-center", _className)}
    {_...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {_Pagination, _PaginationContent, _PaginationEllipsis, _PaginationItem, _PaginationLink, _PaginationNext, _PaginationPrevious}
