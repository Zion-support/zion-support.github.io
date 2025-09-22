<<<<<<< HEAD
<<<<<<< HEAD
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,"
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul;
    ref={ref}
:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
    className={cn("flex flex-row items-center gap-1", className)}

=======
    className={cn("flex flex-row items-center gap-1", className)}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
    {...props}
/>
))
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,"
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
  <li ref={ref} className={cn("", className)} {...props} />
))
:src_backup/components/ui/pagination.tsx

PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
:src_backup/components/ui/pagination.tsx
size?: ButtonProps["size"]
} & React.ComponentProps<"a">
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  size?: ButtonProps["size"]
} & React.ComponentProps<"a">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx

interface PaginationButtonProps
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  page: number
  isActive?: boolean
}
:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
const PaginationLink = ({
<<<<<<< HEAD
  className,
  isActive,
  size = "icon",
  className,
  isActive,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
const PaginationLink = ({

:src_backup/components/ui/pagination.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  ...props
=======
  ...props;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
}: PaginationLinkProps) => (
  <a"
    aria-current={isActive ? "page" : undefined}
    className={cn(
:src_backup/components/ui/pagination.tsx
      buttonVariants({
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      buttonVariants({}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
        variant: isActive ? "outline" : "ghost",
        size}),
      className;
    )}
    {...props}
  />
)
:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
PaginationLink.displayName = "PaginationLink"

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
PaginationLink.displayName = "PaginationLink""
PaginationLink.displayName = "PaginationLink"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
const PaginationButton = React.forwardRef<HTMLButtonElement PaginationButtonProps>(
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ({ page, isActive, className, ...props }, ref) => (
:src_backup/components/ui/pagination.tsx
    <button;
      ref={ref}"
      type="button"
      aria-label={`Page ${page}`}'
      aria-current={isActive ? 'page' : undefined}
      className={cn(;
:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        buttonVariants({ variant: 'ghost', size: 'icon' }),;
        isActive && 'bg-green-600 text-white',;
        isActive && 'bg-green-600 text-white',;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        buttonVariants({ variant: 'ghost', size: 'icon' }),;
        isActive && 'bg-green-600 text-white',;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
PaginationPrevious.displayName = "PaginationPrevious"

:src_backup/components/ui/pagination.tsx
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const PaginationNext = ({
  className,
=======
  className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
  ...props
=======
const PaginationNext = ({}
  className;
  ...props'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
PaginationNext.displayName = "PaginationNext"
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const PaginationEllipsis = ({
  className,
  ...props
=======
"
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({}
  className;
  ...props"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
=======
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
PaginationEllipsis.displayName = "PaginationEllipsis"
export {
=======
export {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
  PaginationButton,
  PaginationNext,
  PaginationPrevious}
;
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  PaginationButton,'";`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
=======
  PaginationButton,
}})
  PaginationNext,
  PaginationPrevious}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
