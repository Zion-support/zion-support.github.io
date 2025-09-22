<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from &quot;react & quot;
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
import { ButtonProps, button_variants } from &quot;@/components / ui / button & quot;
;
const Pagination = ({ class_name, ...props }: React.ComponentProps<&quot;nav & quot;>) =>: any (
  <nav;
    role=&quot;navigation & quot;
    aria - label=&quot;pagination & quot;
    className={cn (&quot;mx - auto flex w - full justify - center & quot;, class_name)}
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx

<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
<<<<<<< HEAD
<<<<<<< HEAD
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
=======

    role="navigation"
    aria-label="pagination"
=======
import * as React from "react"'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
;
  <nav;
"
    role="navigation""
    aria-label="pagination""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
    className={cn("mx-auto flex w-full justify-center", className)}

    {...props}
  />
)
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,"
  React.ComponentProps<"ul">

=======
import * as React from "react""
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react''
  <nav
    role="navigation""
    aria-label="pagination""
    className={cn("mx-auto flex w-full justify-center", className)}"
    {...props}
  />
)
Pagination.displayName = "Pagination""
const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
>(({ className, ...props }, ref) => (
  <ul;
    ref={ref}
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
    className={cn("flex flex-row items-center gap-1", className)}


=======
    className={cn("flex flex-row items-center gap-1", className)}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
    {...props}
<<<<<<< HEAD
  />
))
=======
  />);
Pagination.display_name = &quot;Pagination & quot;
;
const PaginationContent = React.forward_ref<;
  HTMLUListElement,
  React.ComponentProps<&quot;ul & quot;>;
>(({ class_name, ...props }, ref) => (
  <ul;
    ref={ref}
    className={cn (&quot;flex flex - row items - center gap - 1&quot;, class_name)}
    {...props}
PaginationContent.displayName = "PaginationContent""
const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">"
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />"
))
PaginationItem.displayName = "PaginationItem""
type PaginationLinkProps = {
  isActive?: boolean
interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  page: number,
  isActive?: boolean
}
const PaginationLink = ({
  className,
  isActive,
  ...props
}:,  PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}"
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost","
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
  <li ref={ref} className={cn("", className)} {...props} />
))
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
  size?: ButtonProps["size"]
} & React.ComponentProps<"a">
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD

<<<<<<< HEAD
const PaginationLink = ({
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  className,
  isActive,
  size = "icon",
=======
=======
"
  <li ref={ref} className={cn("", className)} {...props} />

))
"
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {}
  isActive?: boolean;
interface PaginationButtonProps;
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
  page: number;
  isActive?: boolean;
}
const PaginationLink = ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
  className,
  isActive,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
const PaginationLink = ({

<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
  ...props
=======
  ...props;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
}: PaginationLinkProps) => (
  <a"
    aria-current={isActive ? "page" : undefined}
    className={cn(
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
      buttonVariants({
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/pagination.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
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
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
    <button;
      ref={ref}"
=======
    <button
      ref={ref}
      type="button""
      aria-label={`Page ${page}`}`
      aria-current={isActive ? 'page' : undefined}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
      type="button"
      aria-label={`Page ${page}`}'
      aria-current={isActive ? 'page' : undefined}
      className={cn(;
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        buttonVariants({ variant: 'ghost', size: 'icon' }),;
        isActive && 'bg-green-600 text-white',;
=======

        buttonVariants({ variant: 'ghost', size: 'icon' }),;
=======

'
        buttonVariants({ variant: 'ghost', size: 'icon' }),;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
        isActive && 'bg-green-600 text-white',;

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
)'
PaginationButton.displayName = 'PaginationButton'
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx

=======
)
PaginationButton.displayName = 'PaginationButton''
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
const PaginationPrevious = ({
  className,
  ...props
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
=======
const PaginationPrevious = ({}
  className;
  ...props'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
=======
}: Omit<PaginationLinkProps 'size'>) => ('
  <PaginationLink
    aria-label="Go to previous page""
    size="default""
    className={cn("gap-1 pl-2.5", className)}"
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />"
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious""
const PaginationNext = ({
  className
  ...props
}: Omit<PaginationLinkProps 'size'>) => ('
  <PaginationLink
    aria-label="Go to next page""
    size="default""
    className={cn("gap-1 pr-2.5", className)}"
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />"
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext""
const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<"span">) => ("
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}"
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />"
    <span className="sr-only">More pages</span>"
  </span>
)
/>));
PaginationContent.display_name = &quot;PaginationContent & quot;
;
const PaginationItem = React.forward_ref<;
  HTMLLIElement,
  React.ComponentProps<&quot;li & quot;>;
>(({ class_name, ...props }, ref) => (
  <li ref={ref} className={cn ("&quot;, class_name)} {...props} />));
PaginationItem.display_name = &quot;PaginationItem & quot;
;
type PaginationLinkProps = {
  is_active?: boolean;,
  size?: ButtonProps[&quot;size & quot;];
} & React.ComponentProps<&quot;a & quot;>;
interface PaginationButtonProps;
  extends React.ButtonHTMLAttributes < HTMLButtonElement> {
  page: number;,
  is_active?: boolean;
}
const PaginationLink = ({
  class_name,
  is_active,
  size = &quot;icon & quot;,
  ...props;
}:,  PaginationLinkProps) =>: any (
  <a;
    aria - current={is_active ? &quot;page" : undefined}"
    className={cn (
      button_variants ({
        variant: is_active ? "outline & quot; : &quot;ghost & quot;,"
        size}),
      class_name)}
    {...props}
  />);
PaginationLink.display_name = &quot;PaginationLink & quot;
;
const PaginationButton = React.forward_ref < HTMLButtonElement PaginationButtonProps>(
  ({ page, is_active, class_name, ...props }, ref) => (
    <button;
      ref={ref}
      type=&quot;button";
      aria - label={`Page ${page}`}`
      aria - current={is_active ? 'page' : undefined}'
      className={cn (
        button_variants ({ variant: 'ghost', size: 'icon' }),'
        is_active && 'bg - green - 600 text - white','
        class_name)}
      {...props}
    >;
      {page}
</button>));
PaginationButton.display_name = 'PaginationButton';
const PaginationPrevious = ({
  class_name,
  ...props;
}: Omit < PaginationLinkProps 'size'>) =>: any ('
  <PaginationLink;
    aria - label="Go to previous page & quot;
    size=&quot;default";
    className={cn ("gap - 1 pl - 2.5", class_name)}"
    {...props}
  >;
    <ChevronLeft className="h - 4 w - 4&quot; />;
    <span > Previous</span>;
  </PaginationLink>);
PaginationPrevious.display_name = &quot;PaginationPrevious & quot;
;
const PaginationNext = ({
  class_name,
  ...props;
}: Omit < PaginationLinkProps 'size'>) =>: any ('
  <PaginationLink;
    aria - label=&quot;Go to next page & quot;
    size=&quot;default";
    className={cn ("gap - 1 pr - 2.5", class_name)}"
    {...props}
  >;
    <span > Next</span>;
    <ChevronRight className="h - 4 w - 4&quot; />;
  </PaginationLink>);
PaginationNext.display_name = &quot;PaginationNext & quot;
;
const PaginationEllipsis = ({
  class_name,
  ...props;
}: React.ComponentProps<&quot;span">) =>: any ("
  <span;
    aria - hidden;
    className={cn ("flex h - 9 w - 9 items - center justify - center", class_name)}"
    {...props}
  >;
    <MoreHorizontal className="h - 4 w - 4" />;
    <span className="sr - only & quot;>More pages</span>;
  </span>);
PaginationEllipsis.display_name = &quot;PaginationEllipsis";
PaginationEllipsis.displayName = "PaginationEllipsis""
    </button>
  )
)
PaginationButton.displayName = 'PaginationButton'

const PaginationPrevious = ({
  className,
  ...props
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
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
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/pagination.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
PaginationPrevious.displayName = "PaginationPrevious"



<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx

<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
PaginationNext.displayName = "PaginationNext"

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
PaginationEllipsis.displayName = "PaginationEllipsis"

=======

/>));
PaginationContent.display_name = &quot;PaginationContent & quot;
;
const PaginationItem = React.forward_ref<;
  HTMLLIElement,
  React.ComponentProps<&quot;li & quot;>;
>(({ class_name, ...props }, ref) => ("
  <li ref={ref} className={cn ("&quot;, class_name)} {...props} />));
PaginationItem.display_name = &quot;PaginationItem & quot;
;
type PaginationLinkProps = {}
  is_active?: boolean;
  size?: ButtonProps[&quot;size & quot;];
} & React.ComponentProps<&quot;a & quot;>;
interface PaginationButtonProps;
  extends React.ButtonHTMLAttributes < HTMLButtonElement> {}
  page: number;
  is_active?: boolean;
}
const PaginationLink = ({}
  class_name,
  is_active,
  size = &quot;icon & quot;,
  ...props;
}: PaginationLinkProps) =>: any (
  <a;"
    aria - current={is_active ? &quot;page" : undefined}
    className={cn (
      button_variants ({"
        variant: is_active ? "outline & quot; : &quot;ghost & quot;,
        size}),
      class_name)}
    {...props}
  />);
PaginationLink.display_name = &quot;PaginationLink & quot;
;
const PaginationButton = React.forward_ref < HTMLButtonElement PaginationButtonProps>(
  ({ page, is_active, class_name, ...props }, ref) => (
    <button;
      ref={ref}"
      type=&quot;button";`
      aria - label={`Page ${page}`}'
      aria - current={is_active ? 'page' : undefined}
      className={cn ('
        button_variants ({ variant: 'ghost', size: 'icon' }),'
        is_active && 'bg - green - 600 text - white',
        class_name)}
      {...props}
    >;
      {page}
</button>));'
PaginationButton.display_name = 'PaginationButton';
const PaginationPrevious = ({}
  class_name,
  ...props;'
}: Omit < PaginationLinkProps 'size'>) =>: any (
  <PaginationLink;"
    aria - label="Go to previous page & quot;"
    size=&quot;default";"
    className={cn ("gap - 1 pl - 2.5", class_name)}
    {...props}
  >;"
    <ChevronLeft className="h - 4 w - 4&quot; />;
    <span > Previous</span>;
  </PaginationLink>);
PaginationPrevious.display_name = &quot;PaginationPrevious & quot;
;
const PaginationNext = ({}
  class_name,
  ...props;'
}: Omit < PaginationLinkProps 'size'>) =>: any (
  <PaginationLink;
    aria - label=&quot;Go to next page & quot;"
    size=&quot;default";"
    className={cn ("gap - 1 pr - 2.5", class_name)}
    {...props}
  >;
    <span > Next</span>;"
    <ChevronRight className="h - 4 w - 4&quot; />;
  </PaginationLink>);
PaginationNext.display_name = &quot;PaginationNext & quot;
;
const PaginationEllipsis = ({}
  class_name,
  ...props;"
}: React.ComponentProps<&quot;span">) =>: any (
  <span;
    aria - hidden;"
    className={cn ("flex h - 9 w - 9 items - center justify - center", class_name)}
    {...props}
  >;"
    <MoreHorizontal className="h - 4 w - 4" />;"
    <span className="sr - only & quot;>More pages</span>;
  </span>);"
PaginationEllipsis.display_name = &quot;PaginationEllipsis";
"
PaginationEllipsis.displayName = "PaginationEllipsis"


<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
PaginationEllipsis.displayName = "PaginationEllipsis"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/pagination.tsx
export {
=======
export {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/pagination.tsx
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD:src_backup/components/ui/pagination.tsx
<<<<<<< HEAD
  PaginationButton,
  PaginationNext,
  PaginationPrevious}
;
=======
  PaginationButton,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
