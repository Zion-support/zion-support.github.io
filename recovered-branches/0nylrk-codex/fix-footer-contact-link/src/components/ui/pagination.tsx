import * as React from "react"
<<<<<<< HEAD
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
=======
import { ChevronLeftChevronRightMoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonPropsbuttonVariants } from "@/components/ui/button"

const Pagination = ({ className...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center"className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
=======
>(({ className...props }ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1"className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
=======
>(({ className...props }ref) => (
  <li ref={ref} className={cn(""className)} {...props} />
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
<<<<<<< HEAD
} & Pick<ButtonProps, "size"> &
=======
} & Pick<ButtonProps"size"> &
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
<<<<<<< HEAD
        size,
      }),
=======
        size}),
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
<<<<<<< HEAD
    className={cn("gap-1 pl-2.5", className)}
=======
    className={cn("gap-1 pl-2.5"className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
<<<<<<< HEAD
    className={cn("gap-1 pr-2.5", className)}
=======
    className={cn("gap-1 pr-2.5"className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
<<<<<<< HEAD
    className={cn("flex h-9 w-9 items-center justify-center", className)}
=======
    className={cn("flex h-9 w-9 items-center justify-center"className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
  PaginationNext,
<<<<<<< HEAD
  PaginationPrevious,
}
=======
  PaginationPrevious}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
