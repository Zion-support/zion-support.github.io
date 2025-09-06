<<<<<<< HEAD

<<<<<<< HEAD
=======

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
=======
=======
=======

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======

const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
import React from 'react';
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}

import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {cn} from '@/lib/utils';
import {ButtonProps, buttonVariants} from '@/components/ui/button';
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"


import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"


const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
import React from 'react';
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
<<<<<<< HEAD
  />
<<<<<<< HEAD

=======
);
Pagination.displayName = 'Pagination';
const PaginationContent = React.forwardRef<
  HTMLUListElement
  React.ComponentProps<'ul'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
<<<<<<< HEAD


>(({ className, ...props }, ref) => (
=======
=======
  />;
);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
type PaginationLinkProps = {
  is_active?: boolean;
} & Pick < ButtonProps, 'size'> &;
  React.ComponentProps<'a'>;
<<<<<<< HEAD

  />

=======
>(({ className, ...props }, ref) => (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


  ...props
}: PaginationLinkProps) => (
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  ...props
}: PaginationLinkProps) => (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
type PaginationLinkProps = {
  is_active?: boolean;
} & Pick < ButtonProps, 'size'> &;
  React.ComponentProps<'a'>;
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
<<<<<<< HEAD
<<<<<<< HEAD

PaginationLink && PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({;
  className,;
  ...props;
}: React && React.ComponentProps<typeof PaginationLink>) =></typeof> (;

=======
        variant: isActive ? 'outline' : 'ghost'
        size
      })
      className
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
;
import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";
;
const Pagination = ({ className, ...props } React.ComponentProps<"nav">) => (;
  <nav;
    role="navigation";
    aria-label="pagination";
    className={cn("mx-auto flex w-full justify-center", className)}
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
    className={cn('gap-1 pl-2 && 2.5', className)}
    {...props}>;
    <ChevronLeft className='h-4 w-4' />;
    <span>Previous</span>;
  </PaginationLink>;
);
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
PaginationPrevious && PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({;
  className,;
  ...props;
}: React && React.ComponentProps<typeof Pagination</typeof>Link>) => (;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={cn('gap-1 pr-2 && 2.5', className)}
    {...props}>;
    <span>Next</span>;
    <ChevronRight className='h-4 w-4' />;
  </PaginationLink>;
);
<<<<<<< HEAD


        variant: isActive ? "outline" : "ghost",
        size}),

=======
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost'
        size
      })
        variant: isActive ? "outline" : "ghost",
        size}),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className
    )}
    {...props}
  />

)
PaginationLink.displayName = "PaginationLink"


<<<<<<< HEAD
=======
);
PaginationLink.displayName = 'PaginationLink';
)
PaginationLink.displayName = "PaginationLink"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

)
PaginationPrevious.displayName = "PaginationPrevious"


<<<<<<< HEAD
=======
);
PaginationPrevious.displayName = 'PaginationPrevious';
)
PaginationPrevious.displayName = "PaginationPrevious"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

)
PaginationNext.displayName = "PaginationNext"



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<'span'>) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
PaginationNext && PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({;
  className,;
  ...props;
}: React && React.ComponentProps<'span'>) => (;
  <span
    aria-hidden
<<<<<<< HEAD
<<<<<<< HEAD

PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
=======
=======
);
PaginationNext.displayName = 'PaginationNext';
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      className
    )}
    {...props}
  />;
);
  <PaginationLink
    aria-label='Go to previous page'
    size='default'
    className={cn('gap-1 pl-2 && 2.5', className)}
    {...props}>;
    <ChevronLeft className='h-4 w-4' />;
    <span>Previous</span>;
  </PaginationLink>;
);
  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={cn('gap-1 pr-2 && 2.5', className)}
    {...props}>;
    <span>Next</span>;
    <ChevronRight className='h-4 w-4' />;
  </PaginationLink>;
);
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}>;
    <MoreHorizontal className='h-4 w-4' />;
    <span className='sr-only'>More pages</span>;
  </span>;
);
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
<<<<<<< HEAD
=======
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
)
PaginationEllipsis.displayName = "PaginationEllipsis"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  PaginationPrevious,;
};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}>;
    <MoreHorizontal className='h-4 w-4' />;
    <span className='sr-only'>More pages</span>;
  </span>;
);
PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
PaginationLink.displayName = "PaginationLink";
;
const PaginationPrevious = ({;
  className,;
  ...props;
} React.ComponentProps<typeof PaginationLink>) => (;
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
  >;
    <ChevronLeft className="h-4 w-4" />;
    <span>Previous</span>;
  </PaginationLink>;
);
PaginationPrevious.displayName = "PaginationPrevious";
;
const PaginationNext = ({;
  className,;
  ...props;
} React.ComponentProps<typeof PaginationLink>) => (;
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
  >;
    <span>Next</span>;
    <ChevronRight className="h-4 w-4" />;
  </PaginationLink>;
);
PaginationNext.displayName = "PaginationNext";
;
const PaginationEllipsis = ({;
  className,;
  ...props;
} React.ComponentProps<"span">) => (;
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
  PaginationPrevious,
}
;
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
