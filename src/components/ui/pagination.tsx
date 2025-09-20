import * as React from &quot;react&quot;
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import {cn} from &quot;@/lib/utils&quot;
import {ButtonProps,, buttonVariants} from &quot;@/components/ui/button&quot;
const Pagination = ({ className, ...props }: React.ComponentProps<&quot;nav&quot;>) => (
  <nav
role=&quot;navigation&quot;
    aria-label=&quot;pagination&quot;
    className={cn(&quot;mx-auto flex w-full justify-center&quot;, className)}
    {...props}
  />
)
Pagination.displayName = &quot;Pagination&quot;
const PaginationContent = React.forwardRef<;
  HTMLUListElement,;
React.ComponentProps<&quot;ul&quot;>
PaginationContent.displayName = &quot;PaginationContent&quot;
const PaginationItem = React.forwardRef<;
  HTMLLIElement,;
React.ComponentProps<&quot;li&quot;>
extends React.ButtonHTMLAttributes<HTMLButtonElement> {page: number,
isActive?: boolean}
const PaginationLink = ({className,;
isActive;
  size = &quot;icon&quot;
  ...props}: PaginationLinkProps) => (
  <a
aria-current={isActive ? &quot;page" : undefined}
  ({ page isActive className, ...props }, ref) => (;
    <button;
ref={ref};
      type=&quot;button"
const PaginationPrevious = ({className;
  ...props}: Omit<PaginationLinkProps 'size'>) => (;
  <PaginationLink;
aria-label="Go to previous page&quot;
    size=&quot;default"
PaginationPrevious.displayName = &quot;PaginationPrevious&quot;
const PaginationNext = ({className;
  ...props}: Omit<PaginationLinkProps 'size'>) => (;
  <PaginationLink;
aria-label=&quot;Go to next page&quot;
    size=&quot;default"
PaginationNext.displayName = &quot;PaginationNext&quot;
const PaginationEllipsis = ({className;
  ...props}: React.ComponentProps<&quot;span">) => (
  <span
aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)}