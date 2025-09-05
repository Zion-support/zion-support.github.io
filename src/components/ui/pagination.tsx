<<<<<<< HEAD
import * as React from &quot;react&quot;
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from &quot;@/lib/utils&quot;
import { ButtonProps, buttonVariants } from &quot;@/components/ui/button&quot;

const Pagination = ({ className, ...props }: React.ComponentProps<&quot;nav&quot;>) => (
  <nav
    role=&quot;navigation&quot;
    aria-label=&quot;pagination&quot;
    className={cn(&quot;mx-auto flex w-full justify-center&quot;, className)}
    {...props}
=======
import * as React from "react"


const _Pagination = (_{_className, _...props}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={_cn("mx-auto flex w-full justify-center", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
)
Pagination.displayName = &quot;Pagination&quot;

const _PaginationContent = React.forwardRef<
  HTMLUListElement,
<<<<<<< HEAD
  React.ComponentProps<&quot;ul&quot;>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(&quot;flex flex-row items-center gap-1&quot;, className)}
    {...props}
=======
  React.ComponentProps<"ul">
>(_({_className, _...props}, _ref) => (
  <ul
    ref={_ref}
    className={_cn("flex flex-row items-center gap-1", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
PaginationContent.displayName = &quot;PaginationContent&quot;

const _PaginationItem = React.forwardRef<
  HTMLLIElement,
<<<<<<< HEAD
  React.ComponentProps<&quot;li&quot;>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("&quot;, className)} {...props} />
=======
  React.ComponentProps<"li">
>(_({_className, _...props}, _ref) => (
  <li ref={_ref} className={_cn("", _className)} {_...props} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
))
PaginationItem.displayName = &quot;PaginationItem&quot;

<<<<<<< HEAD
type PaginationLinkProps = {
  isActive?: boolean
  size?: ButtonProps[&quot;size&quot;]
} & React.ComponentProps<&quot;a&quot;>
=======
type PaginationLinkProps = {_isActive?: boolean
  size?: ButtonProps["size"]} & React.ComponentProps<"a">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {_page: number
  isActive?: boolean}

<<<<<<< HEAD
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
=======
const _PaginationLink = (_{_className, _isActive, _size = "icon", _...props}: PaginationLinkProps) => (
  <a
    aria-current={_isActive ? "page" : undefined}
    className={_cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost", _size}),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      className
    )}
    {_...props}
  />
)
PaginationLink.displayName = &quot;PaginationLink&quot;

<<<<<<< HEAD
const PaginationButton = React.forwardRef<HTMLButtonElement PaginationButtonProps>(
  ({ page, isActive, className, ...props }, ref) => (
    <button
      ref={ref}
      type=&quot;button"
      aria-label={`Page ${page}`}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
=======
const _PaginationButton = React.forwardRef<HTMLButtonElement, PaginationButtonProps>(_({_page, _isActive, _className, _...props}, _ref) => (
    <button
      ref={_ref}
      type="button"
      aria-label={_`Page ${page}`}
      aria-current={_isActive ? 'page' : undefined}
      className={_cn(
        buttonVariants({ variant: 'ghost', _size: 'icon'}),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        isActive && 'bg-green-600 text-white',
        className
      )}
      {_...props}
    >
      {_page}
    </button>
  )
)
PaginationButton.displayName = 'PaginationButton'

<<<<<<< HEAD
const PaginationPrevious = ({
  className,
  ...props
}: Omit<PaginationLinkProps 'size'>) => (
  <PaginationLink
    aria-label="Go to previous page&quot;
    size=&quot;default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
=======
const _PaginationPrevious = (_{_className, _...props}: Omit<PaginationLinkProps, _'size'>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={_cn("gap-1 pl-2.5", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  >
    <ChevronLeft className="h-4 w-4&quot; />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = &quot;PaginationPrevious&quot;

<<<<<<< HEAD
const PaginationNext = ({
  className,
  ...props
}: Omit<PaginationLinkProps 'size'>) => (
  <PaginationLink
    aria-label=&quot;Go to next page&quot;
    size=&quot;default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
=======
const _PaginationNext = (_{_className, _...props}: Omit<PaginationLinkProps, _'size'>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={_cn("gap-1 pr-2.5", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4&quot; />
  </PaginationLink>
)
PaginationNext.displayName = &quot;PaginationNext&quot;

<<<<<<< HEAD
const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<&quot;span">) => (
=======
const _PaginationEllipsis = (_{_className, _...props}: React.ComponentProps<"span">) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  <span
    aria-hidden
    className={_cn("flex h-9 w-9 items-center justify-center", _className)}
    {_...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only&quot;>More pages</span>
  </span>
)
PaginationEllipsis.displayName = &quot;PaginationEllipsis"

export {_Pagination, _PaginationContent, _PaginationEllipsis, _PaginationItem, _PaginationLink, _PaginationButton, _PaginationNext, _PaginationPrevious}
