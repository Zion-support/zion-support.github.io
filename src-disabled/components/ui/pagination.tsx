import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
    className={cn("mx-auto flex w-full justify-center", className)}

    {...props}
  />
)
:src_backup/components/ui/pagination.tsx

Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,"
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul;
    ref={ref}
:src_backup/components/ui/pagination.tsx
    className={cn("flex flex-row items-center gap-1", className)}

    className={cn("flex flex-row items-center gap-1", className)}"
    {...props}
/>
))
"
import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
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
  HTMLLIElement,"
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
:src_backup/components/ui/pagination.tsx
  <li ref={ref} className={cn("", className)} {...props} />
))
:src_backup/components/ui/pagination.tsx

PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
:src_backup/components/ui/pagination.tsx
size?: ButtonProps["size"]
} & React.ComponentProps<"a">
  size?: ButtonProps["size"]
} & React.ComponentProps<"a">

interface PaginationButtonProps
    {...props}
  />
)
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    {...props}
/>
))
>(({ className, ...props }, ref) => (
))interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  page: number
  isActive?: boolean
}
:src_backup/components/ui/pagination.tsx
const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  className,
  isActive,

const PaginationLink = ({

:src_backup/components/ui/pagination.tsx
  ...props
  ...props;
}: PaginationLinkProps) => (
  <a"
    aria-current={isActive ? "page" : undefined}
    className={cn(
:src_backup/components/ui/pagination.tsx
      buttonVariants({
      buttonVariants({}
"
        variant: isActive ? "outline" : "ghost",
        size}),
      className;
    )}
    {...props}
  />
)
:src_backup/components/ui/pagination.tsx
PaginationLink.displayName = "PaginationLink"



PaginationLink.displayName = "PaginationLink""
PaginationLink.displayName = "PaginationLink"

const PaginationButton = React.forwardRef<HTMLButtonElement PaginationButtonProps>(
  ({ page, isActive, className, ...props }, ref) => (
:src_backup/components/ui/pagination.tsx
    <button;
      ref={ref}"
      type="button"
      aria-label={`Page ${page}`}'
      aria-current={isActive ? 'page' : undefined}
      className={cn(;
:src_backup/components/ui/pagination.tsx
        buttonVariants({ variant: 'ghost', size: 'icon' }),;
        isActive && 'bg-green-600 text-white',;
        isActive && 'bg-green-600 text-white',;


        buttonVariants({ variant: 'ghost', size: 'icon' }),;
        isActive && 'bg-green-600 text-white',;
        className;
      )}
      {...props}
    >;
      {page}
    </button>
  )
:src_backup/components/ui/pagination.tsx
)'
PaginationButton.displayName = 'PaginationButton'
const PaginationPrevious = ({
  className,
  ...props
:src_backup/components/ui/pagination.tsx
}: Omit<PaginationLinkProps 'size'>) => (
  <PaginationLink"
    aria-label="Go to previous page""
    size="default""
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >"
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
:src_backup/components/ui/pagination.tsx
PaginationPrevious.displayName = "PaginationPrevious"

:src_backup/components/ui/pagination.tsx

const PaginationNext = ({
  className,
  className
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
const PaginationNext = ({}
  className;
  ...props'
}: Omit<PaginationLinkProps 'size'>) => (
  <PaginationLink"
    aria-label="Go to next page""
    size="default""
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>"
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
:src_backup/components/ui/pagination.tsx


PaginationNext.displayName = "PaginationNext"
const PaginationEllipsis = ({
  className,
  ...props
"
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({}
  className;
  ...props"
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span;
    aria-hidden"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >"
    <MoreHorizontal className="h-4 w-4" />"
    <span className="sr-only">More pages</span>
  </span>
)
:src_backup/components/ui/pagination.tsx
PaginationEllipsis.displayName = "PaginationEllipsis"
export {
export {}
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
:src_backup/components/ui/pagination.tsx
  PaginationButton,
  PaginationNext,
  PaginationPrevious}
;

  PaginationButton,'";`
  PaginationButton,
}})
  PaginationNext,
  PaginationPrevious}
;
