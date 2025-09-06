
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

  <nav

    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}

    {...props}
  />
)

Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">

>(({ className, ...props }, ref) => (
  <ul
    ref={ref}

    className={cn("flex flex-row items-center gap-1", className)}

    {...props}
/>
))

PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">

>(({ className, ...props }, ref) => (

  <li ref={ref} className={cn("", className)} {...props} />

))

PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  page: number
  isActive?: boolean
}
const PaginationLink = ({

  className,
  isActive,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({


=======
        variant: isActive ? "outline" : "ghost",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        size}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
)

PaginationLink.displayName = "PaginationLink"


const PaginationButton = React.forwardRef<HTMLButtonElement PaginationButtonProps>(
  ({ page, isActive, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label={`Page ${page}`}
      aria-current={isActive ? 'page' : undefined}
      className={cn(;

        buttonVariants({ variant: 'ghost', size: 'icon' }),;
        isActive && 'bg-green-600 text-white',;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        className;
      )}
      {...props}
    >;
      {page}
</button>
  )
)
PaginationButton.displayName = 'PaginationButton'
const PaginationPrevious = ({
  className
  ...props
}: Omit<PaginationLinkProps 'size'>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)

PaginationPrevious.displayName = "PaginationPrevious"


const PaginationNext = ({
  className
  ...props
}: Omit<PaginationLinkProps 'size'>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)

PaginationNext.displayName = "PaginationNext"


const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)

PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationButton,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
