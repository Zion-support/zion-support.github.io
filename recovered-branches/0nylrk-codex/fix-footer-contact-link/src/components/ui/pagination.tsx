<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
import {ButtonProps, buttonVariants} from '@/components/ui/button';
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
=======
=======

=======

>>>>>>> main
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
=======
=======
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
<<<<<<< HEAD
);
Pagination.displayName = 'Pagination';
const PaginationContent = React.forwardRef<
  HTMLUListElement
  React.ComponentProps<'ul'>
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}

  />

>>>>>>> main
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
<<<<<<< HEAD
));
PaginationContent.displayName = 'PaginationContent';
const PaginationItem = React.forwardRef<
  HTMLLIElement
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';
type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;
const PaginationLink = ({
  className
  isActive
  size = 'icon'
=======
=======


>(({ className, ...props }, ref) => (
=======
Pagination && Pagination.displayName = 'Pagination';

const PaginationContent = React && React.forwardRef<;
  HTMLUListElement,;
  React && React.ComponentProps<'ul'>;
>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <ul
=======
;
import {cn} from '@/lib / utils';
import {ButtonProps, button_variants} from '@/components / ui / button';
;
const Pagination = ({ class_name, ...props }: React.ComponentProps<'nav'>) =>: any (
  <nav;
    role='navigation';
    aria - label='pagination';
    className={cn ('mx - auto flex w - full justify - center', class_name)}
    {...props}
  />);
Pagination.display_name = 'Pagination';
;
const PaginationContent = React.forward_ref<;
  HTMLUListElement,
  React.ComponentProps<'ul'>;
>(({ class_name, ...props }, ref) => (
  <ul;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn ('flex flex - row items - center gap - 1', class_name)}
    {...props}

  />));
PaginationContent.display_name = 'PaginationContent';
;
const PaginationItem = React.forward_ref<;
  HTMLLIElement,
  React.ComponentProps<'li'>;
>(({ class_name, ...props }, ref) => (
  <li ref={ref} className={cn ('', class_name)} {...props} />));
PaginationItem.display_name = 'PaginationItem';
;

type PaginationLinkProps = {
  is_active?: boolean;
} & Pick < ButtonProps, 'size'> &;
  React.ComponentProps<'a'>;

  />

>>>>>>> main
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
<<<<<<< HEAD
        variant: isActive ? 'outline' : 'ghost'
        size
      })
=======
        variant: isActive ? "outline" : "ghost",
        size}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


  ...props
}: PaginationLinkProps) => (
=======
PaginationContent && PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React && React.forwardRef<;
  HTMLLIElement,;
  React && React.ComponentProps<'li'>;
>(({ className, ...props }, ref) => (;
  <li ref={ref} className={cn('', className)} {...props} />;
));
PaginationItem && PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {;
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &;
  React && React.ComponentProps<'a'>;

const PaginationLink = ({;
  className,;
  isActive,;
  size = 'icon',;
  ...props;
}: PaginationLinkProps) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({

PaginationLink && PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({;
  className,;
  ...props;
}: React && React.ComponentProps<typeof PaginationLink>) =></typeof> (;

  <PaginationLink
    aria-label='Go to previous page'
    size='default'
    className={cn('gap-1 pl-2 && 2.5', className)}
    {...props}>;
    <ChevronLeft className='h-4 w-4' />;
    <span>Previous</span>;
  </PaginationLink>;
);

PaginationPrevious && PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({;
  className,;
  ...props;
}: React && React.ComponentProps<typeof Pagination</typeof>Link>) => (;

  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={cn('gap-1 pr-2 && 2.5', className)}
    {...props}>;
    <span>Next</span>;
    <ChevronRight className='h-4 w-4' />;
  </PaginationLink>;
);


        variant: isActive ? "outline" : "ghost",
        size}),

>>>>>>> main
      className
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
);
PaginationLink.displayName = 'PaginationLink';
=======
)
PaginationLink.displayName = "PaginationLink"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

)
PaginationLink.displayName = "PaginationLink"


>>>>>>> main
const PaginationPrevious = ({
  className
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
<<<<<<< HEAD
<<<<<<< HEAD
);
PaginationPrevious.displayName = 'PaginationPrevious';
=======
)
PaginationPrevious.displayName = "PaginationPrevious"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

)
PaginationPrevious.displayName = "PaginationPrevious"


>>>>>>> main
const PaginationNext = ({
  className
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
<<<<<<< HEAD
<<<<<<< HEAD
);
PaginationNext.displayName = 'PaginationNext';
=======
)
PaginationNext.displayName = "PaginationNext"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
=======

)
PaginationNext.displayName = "PaginationNext"



const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<'span'>) => (
=======
PaginationNext && PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({;
  className,;
  ...props;
}: React && React.ComponentProps<'span'>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <span
    aria-hidden

PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
=======
>>>>>>> main
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
<<<<<<< HEAD
<<<<<<< HEAD
);
PaginationEllipsis.displayName = 'PaginationEllipsis';
export {
  Pagination
  PaginationContent
  PaginationEllipsis
  PaginationItem
  PaginationLink
  PaginationNext
  PaginationPrevious
}
=======
)
PaginationEllipsis.displayName = "PaginationEllipsis"

=======

)
PaginationEllipsis.displayName = "PaginationEllipsis"


export {;
  Pagination,;
  PaginationContent,;
  PaginationEllipsis,;
  PaginationItem,;
  PaginationLink,;
  PaginationNext,;
  PaginationPrevious,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
const PaginationLink = ({
  class_name,
  is_active,
  size = 'icon',
  ...props;
}: PaginationLinkProps) =>: any (
  <a;
    aria - current={is_active ? 'page' : undefined}
    className={cn (
      button_variants ({
        variant: is_active ? 'outline' : 'ghost',
        size,
      }),
      class_name)}
    {...props}
  />);
PaginationLink.display_name = 'PaginationLink';
;
const PaginationPrevious = ({
  class_name,
  ...props;
}: React.ComponentProps < typeof PaginationLink>) =>: any</typeof> (
  <PaginationLink;
    aria - label='Go to previous page';
    size='default';
    className={cn ('gap - 1 pl - 2.5', class_name)}
    {...props}
  >;
    <ChevronLeft className='h - 4 w - 4' />;
    <span > Previous</span>;
  </PaginationLink>);
PaginationPrevious.display_name = 'PaginationPrevious';
;
const PaginationNext = ({
  class_name,
  ...props;
}: React.ComponentProps < typeof Pagination</typeof > Link>) =>: any (
  <PaginationLink;
    aria - label='Go to next page';
    size='default';
    className={cn ('gap - 1 pr - 2.5', class_name)}
    {...props}
  >;
    <span > Next</span>;
    <ChevronRight className='h - 4 w - 4' />;
  </PaginationLink>);
PaginationNext.display_name = 'PaginationNext';
;
const PaginationEllipsis = ({
  class_name,
  ...props;
}: React.ComponentProps<'span'>) =>: any (
  <span;
    aria - hidden;
    className={cn ('flex h - 9 w - 9 items - center justify - center', class_name)}
    {...props}
  >;
    <MoreHorizontal className='h - 4 w - 4' />;
    <span className='sr - only'>More pages</span>;
  </span>);
PaginationEllipsis.display_name = 'PaginationEllipsis';
;
>>>>>>> main
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  PaginationPrevious,;
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  />;
));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React.forwardRef<;
  HTMLLIElement,;
  React.ComponentProps<"li">;
>(({ className, ...props }, ref) => (;
  <li ref={ref} className={cn("", className)} {...props} />;
));
PaginationItem.displayName = "PaginationItem";
type PaginationLinkProps = {;
  isActive?: boolean;
} & Pick<ButtonProps "size"> &;
  React.ComponentProps<"a">;
const PaginationLink = ({;
  className,;
  isActive,;
  size = "icon",;
  ...props;
}: PaginationLinkProps) => (;
  <a;
    aria-current={isActive ? "page" : undefined}
    className={cn(;
      buttonVariants({;
        variant: isActive ? "outline" : "ghost",;
        size}),;
      className;
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({;
  className,;
  ...props;
}: React.ComponentProps<typeof PaginationLink>) => (;
  <PaginationLink;
    aria-label="Go to previous page";
    size="default";
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className='h-4 w-4' />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({;
  className,;
  ...props;
}: React.ComponentProps<typeof PaginationLink>) => (;
  <PaginationLink;
    aria-label="Go to next page";
    size="default";
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className='h-4 w-4' />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = ({;
  className,;
  ...props;
}: React.ComponentProps<"span">) => (;
  <span;
    aria-hidden;
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className='h-4 w-4' />
    <span className='sr-only'>More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";
export {;
  Pagination,;
  PaginationContent,;
  PaginationEllipsis,;
  PaginationItem,;
  PaginationLink;
  PaginationNext;
  PaginationPrevious}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
