import * as React from &quot;react&quot;
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import {cn} from &quot;@/lib/utils&quot;
import {ButtonProps,, buttonVariants} from &quot;@/components/ui/button&quot;
const Pagination = ({ className, ...props }: React.ComponentProps<&quot;nav&quot;>) => (
  <nav
role=&quot;navigation&quot;
    aria-label=&quot;pagination&quot;
extends React.ButtonHTMLAttributes<HTMLButtonElement> {page: number,
isActive?: boolean}
const PaginationLink = ({className,;
isActive;
  size = &quot;icon&quot;
  ...props}: PaginationLinkProps) => (
  <a
PaginationPrevious.displayName = &quot;PaginationPrevious&quot;
const PaginationNext = ({className;
  ...props}: Omit<PaginationLinkProps 'size'>) => (;
  <PaginationLink;
aria-label=&quot;Go to next page&quot;
PaginationNext.displayName = &quot;PaginationNext&quot;
const PaginationEllipsis = ({className;
  ...props}: React.ComponentProps<&quot;span">) => (
  <span
