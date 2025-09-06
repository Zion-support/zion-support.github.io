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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (

  <nav

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

))

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from &quot;react&quot;
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
<<<<<<< HEAD
import { cn } from &quot;@/lib / utils & quot;
import { ButtonProps, button_variants } from &quot;@/components / ui / button & quot;
;
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
import { ButtonProps, buttonVariants } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { ButtonProps, buttonVariants } from &quot;@/components/ui/button&quot;
const Pagination = ({ className, ...props }: React.ComponentProps<&quot;nav&quot;>) => (

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
>>>>>>>   <nav
    role=&quot;navigation&quot;
    aria-label=&quot;pagination&quot;
    className={cn(&quot;mx-auto flex w-full justify-center&quot; className)}
=======
;
import { cn } from &quot;@/lib/utils&quot;
import { ButtonProps, buttonVariants } from &quot;@/components/ui/button&quot;
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;
import { ButtonProps, buttonVariants } from &quot;@/components/ui/button&quot;
const Pagination = ({ className, ...props }: React.ComponentProps<&quot;nav&quot;>) => (

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role=&quot;navigation&quot;
    aria-label=&quot;pagination&quot;
    className={cn(&quot;mx-auto flex w-full justify-center&quot; className)}
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
const PaginationContent = React.forward_ref<;
  HTMLUListElement,
  React.ComponentProps<&quot;ul & quot;>;
>(({ class_name, ...props }, ref) => (
  <ul;
    ref={ref}
    className={cn (&quot;flex flex - row items - center gap - 1&quot;, class_name)}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    {...props}
  />
)
Pagination.displayName = &quot;Pagination&quot;
const PaginationContent = React.forwardRef<
  HTMLUListElement
  React.ComponentProps<&quot;ul&quot;>
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(&quot;flex flex-row items-center gap-1&quot; className)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
    className={cn(&quot;flex flex-row items-center gap-1&quot; className)}
=======
    className={cn("flex flex-row items-center gap-1", className)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    className={cn("flex flex-row items-center gap-1", className)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {...props}
/>
))
PaginationContent.displayName = &quot;PaginationContent&quot;
const PaginationItem = React.forwardRef<
  HTMLLIElement
  React.ComponentProps<&quot;li&quot;>
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("&quot; className)} {...props} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
  <li ref={ref} className={cn("&quot; className)} {...props} />
=======
  <li ref={ref} className={cn("", className)} {...props} />
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  <li ref={ref} className={cn("", className)} {...props} />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
))
PaginationItem.displayName = &quot;PaginationItem&quot;
type PaginationLinkProps = {
  isActive?: boolean
  size?: ButtonProps[&quot;size&quot;]
} & React.ComponentProps<&quot;a&quot;>
<<<<<<< HEAD
<<<<<<< HEAD
  size?: ButtonProps[&quot;size&quot;]
} & React.ComponentProps<&quot;a&quot;>
>>>>>>> interface PaginationButtonProps
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
  size?: ButtonProps[&quot;size&quot;]
} & React.ComponentProps<&quot;a&quot;>
  size?: ButtonProps["size"]
} & React.ComponentProps<"a">

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
interface PaginationButtonProps
>>>>>>>   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  page: number
  isActive?: boolean
}
const PaginationLink = ({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  className
  isActive
  size = &quot;icon&quot;
  size = &quot;icon&quot;
>>>>>>>   ...props
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  className
  isActive
  size = &quot;icon&quot;
  className,
  isActive,
  size = &quot;icon&quot;
  size = "icon",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ...props
>>>>>>> }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        variant: isActive ? "outline" : "ghost",

        size}),

=======
        size})
        variant: isActive ? "outline" : "ghost",
>>>>>>>         size}),
>>>>>>>       className
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        variant: isActive ? "outline&quot; : &quot;ghost&quot;
        size})
        variant: isActive ? "outline" : "ghost",
        size}),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


  className,
  isActive,


  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? &quot;page" : undefined}
    className={cn(
      buttonVariants({



        variant: isActive ? "outline" : "ghost",

        size}),
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      className
>>>>>>>     )}
    {...props}
  />
)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
PaginationLink.displayName = &quot;PaginationLink&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
PaginationLink.displayName = &quot;PaginationLink&quot;
PaginationLink.displayName = "PaginationLink"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const PaginationButton = React.forwardRef<HTMLButtonElement PaginationButtonProps>(
  ({ page, isActive, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label={`Page ${page}`}
      aria-current={isActive ? 'page' : undefined}
      className={cn(;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        buttonVariants({ variant: 'ghost', size: 'icon' });
        isActive && 'bg-green-600 text-white';
>>>>>>>         className;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        buttonVariants({ variant: 'ghost', size: 'icon' });
        isActive && 'bg-green-600 text-white';
        buttonVariants({ variant: 'ghost', size: 'icon' }),;
        isActive && 'bg-green-600 text-white',;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        className;
>>>>>>>       )}
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
PaginationPrevious.displayName = &quot;PaginationPrevious&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
PaginationPrevious.displayName = &quot;PaginationPrevious&quot;
PaginationPrevious.displayName = "PaginationPrevious"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
PaginationNext.displayName = &quot;PaginationNext&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
PaginationNext.displayName = &quot;PaginationNext&quot;
PaginationNext.displayName = "PaginationNext"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
  PaginationNext,;
  PaginationPrevious};
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
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
  is_active?: boolean;
  size?: ButtonProps[&quot;size & quot;];
} & React.ComponentProps<&quot;a & quot;>;
interface PaginationButtonProps;
  extends React.ButtonHTMLAttributes < HTMLButtonElement> {
  page: number;
  is_active?: boolean;
}
const PaginationLink = ({
  class_name,
  is_active,
  size = &quot;icon & quot;,
  ...props;
}: PaginationLinkProps) =>: any (
  <a;
    aria - current={is_active ? &quot;page" : undefined}
    className={cn (
      button_variants ({
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
      ref={ref}
      type=&quot;button";
      aria - label={`Page ${page}`}
      aria - current={is_active ? 'page' : undefined}
      className={cn (
        button_variants ({ variant: 'ghost', size: 'icon' }),
        is_active && 'bg - green - 600 text - white',
        class_name)}
      {...props}
    >;
      {page}
</button>));
PaginationButton.display_name = 'PaginationButton';
const PaginationPrevious = ({
  class_name,
  ...props;
}: Omit < PaginationLinkProps 'size'>) =>: any (
  <PaginationLink;
    aria - label="Go to previous page & quot;
    size=&quot;default";
    className={cn ("gap - 1 pl - 2.5", class_name)}
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
}: Omit < PaginationLinkProps 'size'>) =>: any (
  <PaginationLink;
    aria - label=&quot;Go to next page & quot;
    size=&quot;default";
    className={cn ("gap - 1 pr - 2.5", class_name)}
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
}: React.ComponentProps<&quot;span">) =>: any (
  <span;
    aria - hidden;
    className={cn ("flex h - 9 w - 9 items - center justify - center", class_name)}
    {...props}
  >;
    <MoreHorizontal className="h - 4 w - 4" />;
    <span className="sr - only & quot;>More pages</span>;
  </span>);
PaginationEllipsis.display_name = &quot;PaginationEllipsis";

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
<<<<<<< HEAD
  PaginationButton,
  PaginationNext,;
  PaginationPrevious};
  PaginationNext,
  PaginationPrevious}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
  PaginationButton,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
