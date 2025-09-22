<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
import React from 'react';
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
<<<<<<< HEAD
import React from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}

import * as React from 'react';
<<<<<<< HEAD
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ButtonProps, buttonVariants} from '@/components/ui/button';
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
import React from 'react';
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
<<<<<<< HEAD
  />
<<<<<<< HEAD
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,"
  React.ComponentProps<"ul">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, ...props }, ref) => (
Pagination && Pagination.displayName = 'Pagination';

const PaginationContent = React && React.forwardRef<;
  HTMLUListElement,;'
  React && React.ComponentProps<'ul'>;
>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <ul
=======
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';  <ul
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  />

);
Pagination.displayName = 'Pagination';
const PaginationContent = React.forwardRef<
  HTMLUListElement
  React.ComponentProps<'ul'>
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">

>(({ className, ...props }, ref) => (
/>;
);
Pagination && Pagination.displayName = 'Pagination';

const PaginationContent = React && React.forwardRef<;
  HTMLUListElement,;
  React && React.ComponentProps<'ul'>;
>(({ className, ...props }, ref) => (;
  <ul
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
import {cn} from '@/lib / utils';
=======

  <ul;
;'
import {cn} from '@/lib / utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {ButtonProps, button_variants} from '@/components / ui / button';
;'
const Pagination = ({ class_name, ...props }: React.ComponentProps<'nav'>) =>: any (
  <nav;'
    role='navigation';'
    aria - label='pagination';'
    className={cn ('mx - auto flex w - full justify - center', class_name)}
    {...props}
  />);'
Pagination.display_name = 'Pagination';
;
const PaginationContent = React.forward_ref<;
  HTMLUListElement,'
  React.ComponentProps<'ul'>;
>(({ class_name, ...props }, ref) => (
  <ul;
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

>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD

  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

))
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,"
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => ("
  <li ref={ref} className={cn("", className)} {...props} />
))"
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {}
  isActive?: boolean"
} & Pick<ButtonProps "size"> &"
  React.ComponentProps<"a">

const PaginationLink = ({}
  className,
  isActive,"
  size = "icon",
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ...props
}: PaginationLinkProps) => (  ...props
}: PaginationLinkProps) => (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  ...props
}: PaginationLinkProps) => (
=======

  ...props;
}: PaginationLinkProps) => (
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
PaginationContent && PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React && React.forwardRef<;
  HTMLLIElement,;'
  React && React.ComponentProps<'li'>;
>(({ className, ...props }, ref) => (;'
  <li ref={ref} className={cn('', className)} {...props} />;
));'
PaginationItem && PaginationItem.displayName = 'PaginationItem';
type PaginationLinkProps = {;
isActive?: boolean;'
} & Pick<ButtonProps, 'size'> &;'
  React && React.ComponentProps<'a'>;
const PaginationLink = ({;
  className,;
  isActive,;'
  size = 'icon',;
  ...props;
}: PaginationLinkProps) => (;
type PaginationLinkProps = {}
  is_active?: boolean;'
} & Pick < ButtonProps, 'size'> &;'
  React.ComponentProps<'a'>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
      buttonVariants({
<<<<<<< HEAD
  className,;
  ...props;
}: React && React.ComponentProps<typeof PaginationLink>) =></typeof> (;

    {...props}
/>;
);
Pagination.displayName = "Pagination";
;
const PaginationContent = React.forwardRef<;
  HTMLUListElement,;
  React.ComponentProps<"ul">;
>(({ className, ...props }, ref) => (;
  <ul;
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />;
=======
  </span>  />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
));
PaginationContent.displayName = "PaginationContent";
;
const PaginationItem = React.forwardRef<;
  HTMLLIElement,;
  React.ComponentProps<"li">;
>(({ className, ...props }, ref) => (;
  <li ref={ref} className={cn("", className)} {...props} />;
));
PaginationItem.displayName = "PaginationItem";
;
type PaginationLinkProps = {;
  isActive?:boolean;
} & Pick<ButtonProps "size"> &;
  React.ComponentProps<"a">;
;
const PaginationLink = ({;
  className,;
  isActive,;
  size = "icon",;
  ...props;
} PaginationLinkProps) => (;
  <a;
    aria-current={isActive ? "page" :undefined}
    className={cn(;
      buttonVariants({;
        variant:isActive ? "outline" :"ghost",;
        size}),;
      className;
    )}
    {...props}
  />;
);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  <PaginationLink
    aria-label='Go to previous page'
    size='default'
=======
  <a'
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({}
  <PaginationLink'
    aria-label='Go to previous page''
    size='default''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    className={cn('gap-1 pl-2 && 2.5', className)}
    {...props}>;'
    <ChevronLeft className='h-4 w-4' />;
    <span>Previous</span>;
  </PaginationLink>;
);
'
PaginationPrevious && PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({;
  className,;
  ...props;
}: React && React.ComponentProps<typeof Pagination</typeof>Link>) => (;

  <PaginationLink'
    aria-label='Go to next page''
    size='default''
    className={cn('gap-1 pr-2 && 2.5', className)}
    {...props}>;
    <span>Next</span>;'
    <ChevronRight className='h-4 w-4' />;
  </PaginationLink>;
);

variant: isActive ? "outline" : "ghost",
        size}),
        variant: isActive ? 'outline' : 'ghost'
        size
      })
        variant: isActive ? "outline" : "ghost",
        size}),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    )}
    {...props}
  />

=======
);
PaginationLink.displayName = 'PaginationLink';
)
PaginationLink.displayName = "PaginationLink"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const PaginationPrevious = ({
=======
      buttonVariants({const PaginationPrevious = ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      buttonVariants({const PaginationPrevious = ({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  className
  ...props
=======

const PaginationPrevious = ({}
  className;
  ...props;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink"
    aria-label="Go to previous page""
    size="default""
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >"
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const PaginationNext = ({
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  className
  ...props
=======

const PaginationNext = ({}
  className;
  ...props;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink"
    aria-label="Go to next page""
    size="default""
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>"
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>

PaginationNext && PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({;
  className,;
  ...props;'
}: React && React.ComponentProps<'span'>) => (;
<span
    aria-hidden

PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
<<<<<<< HEAD

const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  <span;
    aria-hidden;
'
PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >"
    <MoreHorizontal className="h-4 w-4" />"
    <span className="sr-only">More pages</span>
</span>

)"
PaginationEllipsis.displayName = "PaginationEllipsis"

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export {;
  Pagination,;
  PaginationContent,;
  PaginationEllipsis,;
  PaginationItem,;
<<<<<<< HEAD
  PaginationLink;
  PaginationNext;
  PaginationPrevious}
;
;
const PaginationLink = ({}
  class_name,
  is_active,'
  size = 'icon',
  ...props;
}: PaginationLinkProps) =>: any (
  <a;'
    aria - current={is_active ? 'page' : undefined}
    className={cn (
      button_variants ({'
        variant: is_active ? 'outline' : 'ghost',
        size,
      }),
      class_name)}
    {...props}
  />);'
PaginationLink.display_name = 'PaginationLink';
;
const PaginationPrevious = ({}
  class_name,
  ...props;
}: React.ComponentProps < typeof PaginationLink>) =>: any</typeof> (
  <PaginationLink;'
    aria - label='Go to previous page';'
    size='default';'
    className={cn ('gap - 1 pl - 2.5', class_name)}
    {...props}
  >;'
    <ChevronLeft className='h - 4 w - 4' />;
    <span > Previous</span>;
  </PaginationLink>);'
PaginationPrevious.display_name = 'PaginationPrevious';
;
const PaginationNext = ({}
  class_name,
  ...props;
}: React.ComponentProps < typeof Pagination</typeof > Link>) =>: any (
  <PaginationLink;'
    aria - label='Go to next page';'
    size='default';'
    className={cn ('gap - 1 pr - 2.5', class_name)}
    {...props}
  >;
    <span > Next</span>;'
    <ChevronRight className='h - 4 w - 4' />;
  </PaginationLink>);'
PaginationNext.display_name = 'PaginationNext';
;
const PaginationEllipsis = ({}
  class_name,
  ...props;'
}: React.ComponentProps<'span'>) =>: any (
  <span;
    aria - hidden;'
    className={cn ('flex h - 9 w - 9 items - center justify - center', class_name)}
    {...props}
  >;'
    <MoreHorizontal className='h - 4 w - 4' />;'
    <span className='sr - only'>More pages</span>;
  </span>);'
PaginationEllipsis.display_name = 'PaginationEllipsis';
;

export {}
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
<<<<<<< HEAD
  PaginationPrevious,;
};
  />;
=======
  </span>  />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  </span>  />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
));
=======
;
  />;
));"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React.forwardRef<;
  HTMLLIElement,;"
  React.ComponentProps<"li">;
>(({ className, ...props }, ref) => (;"
  <li ref={ref} className={cn("", className)} {...props} />;
));"
PaginationItem.displayName = "PaginationItem";
type PaginationLinkProps = {;
  isActive?: boolean;"
} & Pick<ButtonProps "size"> &;"
  React.ComponentProps<"a">;
const PaginationLink = ({;
  className,;
  isActive,;"
  size = "icon",;
  ...props;
}: PaginationLinkProps) => (;
  <a;"
    aria-current={isActive ? "page" : undefined}
    className={cn(;
      buttonVariants({;"
        variant: isActive ? "outline" : "ghost",;
        size}),;
      className;
    )}
    {...props}
  />
);"
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({;
  className,;
  ...props;
}: React.ComponentProps<typeof PaginationLink>) => (;'
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}>;'
    <MoreHorizontal className='h-4 w-4' />;'
    <span className='sr-only'>More pages</span>;
  </span>;
);'
PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';"
PaginationLink.displayName = "PaginationLink";
;
const PaginationPrevious = ({;
  className,;
  ...props;
} React.ComponentProps<typeof PaginationLink>) => (;
  <PaginationLink;"
    aria-label="Go to previous page";"
    size="default";"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >'
    <ChevronLeft className='h-4 w-4' />
    <span>Previous</span>
  </PaginationLink>
);"
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({;
  className,;
  ...props;
}: React.ComponentProps<typeof PaginationLink>) => (;
  >;"
    <ChevronLeft className="h-4 w-4" />;
    <span>Previous</span>;
  </PaginationLink>;
);"
PaginationPrevious.displayName = "PaginationPrevious";
;
const PaginationNext = ({;
  className,;
  ...props;
} React.ComponentProps<typeof PaginationLink>) => (;
  <PaginationLink;"
    aria-label="Go to next page";"
    size="default";"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>'
    <ChevronRight className='h-4 w-4' />
  </PaginationLink>
);"
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = ({;
  className,;
  ...props;"
}: React.ComponentProps<"span">) => (;
  >;
    <span>Next</span>;"
    <ChevronRight className="h-4 w-4" />;
  </PaginationLink>;
);"
PaginationNext.displayName = "PaginationNext";
;
const PaginationEllipsis = ({;
  className,;
  ...props;"
} React.ComponentProps<"span">) => (;
  <span;
    aria-hidden;"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >'
    <MoreHorizontal className='h-4 w-4' />'
    <span className='sr-only'>More pages</span>
  </span>
);"
PaginationEllipsis.displayName = "PaginationEllipsis";
  PaginationPrevious,
}
;
PaginationPrevious} />) Pagination.displayName = "Pagination" const PaginationContent = React.forwardRef< HTMLUListElement;
/>) ) PaginationContent.displayName = "PaginationContent" const PaginationItem = React.forwardRef< HTMLLIElement;
) ) PaginationItem.displayName = "PaginationItem" React.ComponentProps<"a"> 
}{
  ...props 
}/>) PaginationLink.displayName = "PaginationLink" const PaginationPrevious = ({
  className, ...props 
}: React.ComponentProps<typeof PaginationLink>) => (<PaginationLink > <ChevronLeft className="h-4 w-4" /> <span>Previous</span> </PaginationLink>) PaginationPrevious.displayName = "PaginationPrevious" const PaginationNext = ({
  className, ...props 
}: React.ComponentProps<typeof PaginationLink>) => (<PaginationLink > <span>Next</span> <ChevronRight className="h-4 w-4" /> </PaginationLink>) PaginationNext.displayName = "PaginationNext" <span aria-hidden className= {
  cn ("flex h-9 w-9 items-center justify-center", className) 
}{
  ...props 
}> <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >More pages</span> </span>) PaginationEllipsis.displayName = "PaginationEllipsis" export {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious 
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}: PaginationLinkProps) => (;
type PaginationLinkProps = {
  is_active?: boolean;
  <a;
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({

PaginationLink && PaginationLink.displayName = 'PaginationLink';
const PaginationPrevious = ({;
}: React && React.ComponentProps<typeof PaginationLink>) =></typeof> (;
</a>

  <PaginationLink;
    aria-label='Go to previous page
    size='default)
    className={cn('gap-1 pl-2 && 2.5', className)}
    {...props}>;

    <ChevronLeft className='h-4 w-4' />;

    <span>Previous</span>;
}: React && React.ComponentProps<typeof Pagination</typeof>Link>) => (;
    aria-label='Go to next page
    className={cn('gap-1 pr-2 && 2.5', className)}

    <span>Next</span>;
    <ChevronRight className='h-4 w-4' />;

}: React.ComponentProps<typeof PaginationLink>) => (
</typeof>
    aria-label="Go to previous page"""
    size="default"")"
    className={cn("gap-1 pl-2.5", className)}"
  >
    <ChevronLeft className="h-4 w-4" />"

    <span>Previous</span>

  <PaginationLink;"
    aria-label="Go to next page"""
    className={cn("gap-1 pr-2.5", className)}"

    <span>Next</span>"
    <ChevronRight className="h-4 w-4" />"

}: React.ComponentProps<'span'>) => (
PaginationNext && PaginationNext.displayName = 'PaginationNext';
const PaginationEllipsis = ({;
}: React && React.ComponentProps<'span'>) => (;
  <span;
    aria-hidden;
PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';')
    className={cn("flex h-9 w-9 items-center justify-center", className)}"
</span>"
    <MoreHorizontal className="h-4 w-4" />"
    <span className="sr-only">More pages</span>"
  </span>
    size='default

    className={cn('flex h-9 w-9 items-center justify-center', className)}
    <MoreHorizontal className='h-4 w-4' />;

    <span className='sr-only'>More pages</span>;
  </span>;
    aria - current={is_active ? 'page' : undefined}
    className={cn (
      button_variants ({
        variant: is_active ? 'outline' : 'ghost',
        size,)
      }),
      class_name)}
}: React.ComponentProps < typeof PaginationLink>) =>: any</typeof> (
    aria - label='Go to previous page';
    size='default';')
    className={cn ('gap - 1 pl - 2.5', class_name)}
  >;

    <ChevronLeft className='h - 4 w - 4' />;

    <span > Previous</span>;
  );
}: React.ComponentProps < typeof Pagination</typeof > Link>) =>: any (
    aria - label='Go to next page';
    className={cn ('gap - 1 pr - 2.5', class_name)}

    <span > Next</span>;
    <ChevronRight className='h - 4 w - 4' />;

}: React.ComponentProps<'span'>) =>: any (
    aria - hidden;)
    className={cn ('flex h - 9 w - 9 items - center justify - center', class_name)}
    <MoreHorizontal className='h - 4 w - 4' />;

    <span className='sr - only'>More pages</span>;
  </span>);
const PaginationItem = React.forwardRef<;
  React.ComponentProps<"li">;"
>(({ className, ...props }, ref) => (;)"
  <li ref={ref} className={cn("", className)} {...props} />;"
} & Pick<ButtonProps "size"> &;"
  React.ComponentProps<"a">;"
  isActive,;"
  size = "icon",;"
  <a;"
    aria-current={isActive ? "page" : undefined}"
    className={cn(;
      buttonVariants({;"
        variant: isActive ? "outline" : "ghost",;")
        size}),;
    )}
}: React.ComponentProps<typeof PaginationLink>) => (;
</typeof>"

  </span>;)
} React.ComponentProps<typeof PaginationLink>) => (;
    aria-label="Go to previous page";""
    size="default";")"
    <ChevronLeft className='h-4 w-4' />

    <ChevronLeft className="h-4 w-4" />;"

    aria-label="Go to next page";""

    <ChevronRight className='h-4 w-4' />

}: React.ComponentProps<"span">) => (;"
    <span>Next</span>;"
    <ChevronRight className="h-4 w-4" />;"

  ;)"
} React.ComponentProps<"span">) => (;"
    aria-hidden;)"
    <MoreHorizontal className='h-4 w-4' />

    <span className='sr-only'>More pages</span>
  PaginationPrevious} />) Pagination.displayName = "Pagination" const PaginationContent = React.forwardRef< HTMLUListElement;""
/>) ) PaginationContent.displayName = "PaginationContent" const PaginationItem = React.forwardRef< HTMLLIElement;""
) ) PaginationItem.displayName = "PaginationItem" React.ComponentProps<"a">"
}{
  ...props;"
}/>) PaginationLink.displayName = "PaginationLink" const PaginationPrevious = ({"
  className, ...props;)"
}: React.ComponentProps<typeof PaginationLink>) => (<PaginationLink > <ChevronLeft className="h-4 w-4" /> <span>Previous</span> ) PaginationPrevious.displayName = "PaginationPrevious" const PaginationNext = ({"
</typeof>)"
}: React.ComponentProps<typeof PaginationLink>) => (<PaginationLink > <span>Next</span> <ChevronRight className="h-4 w-4" /> ) PaginationNext.displayName = "PaginationNext" <span aria-hidden className= {"
}> <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >More pages</span> </span>) PaginationEllipsis.displayName = "PaginationEllipsis" export {"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
