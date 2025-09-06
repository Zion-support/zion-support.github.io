<<<<<<< HEAD
import * as React from &quot;react&quot;
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
import { ButtonProps, buttonVariants } from &quot;@/components/ui/button&quot;
=======
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
import { ButtonProps, buttonVariants } from &quot;@/components/ui/button&quot;
const Pagination = ({ className, ...props }: React.ComponentProps<&quot;nav&quot;>) => (
=======

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  <nav
<<<<<<< HEAD
    role=&quot;navigation&quot;
    aria-label=&quot;pagination&quot;
    className={cn(&quot;mx-auto flex w-full justify-center&quot; className)}
=======
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    {...props}
  />
)
<<<<<<< HEAD
Pagination.displayName = &quot;Pagination&quot;
const PaginationContent = React.forwardRef<
  HTMLUListElement
  React.ComponentProps<&quot;ul&quot;>
=======
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
<<<<<<< HEAD
    className={cn(&quot;flex flex-row items-center gap-1&quot; className)}
=======
    className={cn("flex flex-row items-center gap-1", className)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    {...props}
/>
))
<<<<<<< HEAD
PaginationContent.displayName = &quot;PaginationContent&quot;
const PaginationItem = React.forwardRef<
  HTMLLIElement
  React.ComponentProps<&quot;li&quot;>
=======
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <li ref={ref} className={cn("&quot; className)} {...props} />
=======
  <li ref={ref} className={cn("", className)} {...props} />
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
))
<<<<<<< HEAD
PaginationItem.displayName = &quot;PaginationItem&quot;
type PaginationLinkProps = {
  isActive?: boolean
  size?: ButtonProps[&quot;size&quot;]
} & React.ComponentProps<&quot;a&quot;>
=======
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
<<<<<<< HEAD
  size?: ButtonProps[&quot;size&quot;]
} & React.ComponentProps<&quot;a&quot;>
=======
  size?: ButtonProps["size"]
} & React.ComponentProps<"a">

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  page: number
  isActive?: boolean
}
const PaginationLink = ({
<<<<<<< HEAD
  className
  isActive
  size = &quot;icon&quot;
=======
  className,
  isActive,
<<<<<<< HEAD
  size = &quot;icon&quot;
=======
  size = "icon",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
<<<<<<< HEAD
        variant: isActive ? "outline&quot; : &quot;ghost&quot;
<<<<<<< HEAD
        size})
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
PaginationLink.displayName = &quot;PaginationLink&quot;
=======
PaginationLink.displayName = "PaginationLink"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const PaginationButton = React.forwardRef<HTMLButtonElement PaginationButtonProps>(
  ({ page, isActive, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label={`Page ${page}`}
      aria-current={isActive ? 'page' : undefined}
      className={cn(;
<<<<<<< HEAD
        buttonVariants({ variant: 'ghost', size: 'icon' });
        isActive && 'bg-green-600 text-white';
=======
        buttonVariants({ variant: 'ghost', size: 'icon' }),;
        isActive && 'bg-green-600 text-white',;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
PaginationPrevious.displayName = &quot;PaginationPrevious&quot;
=======
PaginationPrevious.displayName = "PaginationPrevious"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
PaginationNext.displayName = &quot;PaginationNext&quot;
=======
PaginationNext.displayName = "PaginationNext"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
PaginationEllipsis.displayName = &quot;PaginationEllipsis"
export {
  Pagination
  PaginationContent
  PaginationEllipsis
  PaginationItem
  PaginationLink
  PaginationButton
  PaginationNext
  PaginationPrevious}
=======
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationButton,
<<<<<<< HEAD
  PaginationNext,;
  PaginationPrevious};
=======
  PaginationNext,
  PaginationPrevious}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
