import * as React from &quot;react&quot;
import { ChevronLeft, ChevronRight, MoreHorizontal } from &quot;lucide-react&quot;

import { cn } from &quot;@/lib/utils&quot;
import { ButtonProps, buttonVariants } from &quot;@/components/ui/button&quot;

const Pagination = ({ className, ...props }: React.ComponentProps<&quot;nav&quot;>) => (
  <nav
    role=&quot;navigation&quot;
    aria-label=&quot;pagination&quot;
    className={cn(&quot;mx-auto flex w-full justify-center&quot;, className)}
    {...props}
  />
)
Pagination.displayName = &quot;Pagination&quot;

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<&quot;ul&quot;>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(&quot;flex flex-row items-center gap-1&quot;, className)}
    {...props}
  />
))
PaginationContent.displayName = &quot;PaginationContent&quot;

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<&quot;li&quot;>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("&quot;, className)} {...props} />
))
PaginationItem.displayName = &quot;PaginationItem&quot;

type PaginationLinkProps = {
  isActive?: boolean
<<<<<<< HEAD
} & Pick<ButtonProps "size"> &
  React.ComponentProps<"a">
=======
} & Pick<ButtonProps, &quot;size&quot;> &
  React.ComponentProps<&quot;a&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

const PaginationLink = ({
  className,
  isActive,
  size = &quot;icon&quot;,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? &quot;page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline&quot; : &quot;ghost&quot;,
        size}),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = &quot;PaginationLink&quot;

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label=&quot;Go to previous page&quot;
    size=&quot;default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4&quot; />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = &quot;PaginationPrevious&quot;

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label=&quot;Go to next page&quot;
    size=&quot;default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4&quot; />
  </PaginationLink>
)
PaginationNext.displayName = &quot;PaginationNext&quot;

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<&quot;span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only&quot;>More pages</span>
  </span>
)
PaginationEllipsis.displayName = &quot;PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious}
