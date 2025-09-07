<<<<<<< HEAD
import * as React from 'react';
=======
<<<<<<< HEAD
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
=======


import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
import React from 'react';
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}

import * as React from 'react';
<<<<<<< HEAD

<<<<<<< HEAD
  />
>>>>>>> merged-prs-20250907-203621
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {cn} from '@/lib/utils';
import {ButtonProps, buttonVariants} from '@/components/ui/button';
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';
const PaginationContent = React.forwardRef<
  HTMLUListElement
  React.ComponentProps<'ul'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
)

Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,"
  React.ComponentProps<"ul">
<<<<<<< HEAD
  />;
);
=======

<<<<<<< HEAD
=======

>(({ className, ...props }, ref) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
Pagination && Pagination.displayName = 'Pagination';
const PaginationContent = React && React.forwardRef<;
  HTMLUListElement,;'
  React && React.ComponentProps<'ul'>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

=======
  <ul
;
import {cn} from '@/lib / utils';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">
=======
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const PaginationLink = ({
  className
  isActive
  size = 'icon'
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
))
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

  ...props
}: PaginationLinkProps) => (  ...props
}: PaginationLinkProps) => (

  ...props
}: PaginationLinkProps) => (
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
PaginationContent && PaginationContent.displayName = 'PaginationContent';
const PaginationItem = React && React.forwardRef<;
  HTMLLIElement,;'
  React && React.ComponentProps<'li'>;
>(({ className, ...props }, ref) => (;'
  <li ref={ref} className={cn('', className)} {...props} />;
));'
PaginationItem && PaginationItem.displayName = 'PaginationItem';
type PaginationLinkProps = {;
<<<<<<< HEAD

=======
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  React && React.ComponentProps<'a'>;
const PaginationLink = ({;
  className,;
  isActive,;'
  size = 'icon',;
  ...props;
}: PaginationLinkProps) => (;
<<<<<<< HEAD
type PaginationLinkProps = {}
  is_active?: boolean;'
} & Pick < ButtonProps, 'size'> &;'
  React.ComponentProps<'a'>;

=======
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  className,;
  isActive,;
  size = "icon",;
  ...props;
<<<<<<< HEAD
}: React && React.ComponentProps<typeof PaginationLink>) =></typeof> (;
>>>>>>> merged-prs-20250907-203621

    {...props}

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
<<<<<<< HEAD
=======
;
const PaginationLink = ({;
>>>>>>> origin/chore/fix-lint-and-merge
  className,;
  isActive,;
  size = "icon",;
  ...props;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  <PaginationLink
    aria-label='Go to previous page'
    size='default'

    className={cn('gap-1 pl-2 && 2.5', className)}
    {...props}>;'
    <ChevronLeft className='h-4 w-4' />;
    <span>Previous</span>;
  </PaginationLink>;
);
<<<<<<< HEAD
'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
PaginationPrevious && PaginationPrevious.displayName = 'PaginationPrevious';
const PaginationNext = ({;
  className,;
  ...props;
}: React && React.ComponentProps<typeof Pagination</typeof>Link>) => (;
<<<<<<< HEAD

  <PaginationLink'
    aria-label='Go to next page''
    size='default''
=======
  <PaginationLink
    aria-label='Go to next page'
    size='default'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    className={cn('gap-1 pr-2 && 2.5', className)}
    {...props}>;
    <span>Next</span>;'
    <ChevronRight className='h-4 w-4' />;
  </PaginationLink>;
);
<<<<<<< HEAD

=======
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: isActive ? 'outline' : 'ghost'
        size
      })
        variant: isActive ? "outline" : "ghost",
        size}),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className

    )}
    {...props}
  />
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
)
PaginationLink.displayName = "PaginationLink"


<<<<<<< HEAD
);
PaginationLink.displayName = 'PaginationLink';
)
PaginationLink.displayName = "PaginationLink"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const PaginationPrevious = ({

  className
  ...props

}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink"
    aria-label="Go to previous page""
    size="default""
    className={cn("gap-1 pl-2.5", className)}
    {...props}
<<<<<<< HEAD
  >
    <ChevronLeft className = $2;
=======
  >"
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>

<<<<<<< HEAD
=======
)
PaginationPrevious.displayName = "PaginationPrevious"


<<<<<<< HEAD
);
PaginationPrevious.displayName = 'PaginationPrevious';
)
PaginationPrevious.displayName = "PaginationPrevious"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const PaginationNext = ({

  className
>>>>>>> merged-prs-20250907-203621
  ...props

}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink"
    aria-label="Go to next page""
    size="default""
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
<<<<<<< HEAD
    <span>Next</span>
    <ChevronRight className = $2;
=======
    <span>Next</span>"
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>

<<<<<<< HEAD
=======
)
PaginationNext.displayName = "PaginationNext"



const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<'span'>) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
PaginationNext && PaginationNext.displayName = 'PaginationNext';
const PaginationEllipsis = ({;
  className,;
  ...props;'
}: React && React.ComponentProps<'span'>) => (;
<<<<<<< HEAD

const PaginationEllipsis = ({
  className
  ...props

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  <span
    aria-hidden
);
PaginationNext.displayName = 'PaginationNext';
)
PaginationNext.displayName = "PaginationNext"

<<<<<<< HEAD
=======
<<<<<<< HEAD
const PaginationEllipsis = ({
  className
>>>>>>> merged-prs-20250907-203621
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
=======
PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >"
    <MoreHorizontal className="h-4 w-4" />"
    <span className="sr-only">More pages</span>
<<<<<<< HEAD
=======
  </span>
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
)
PaginationEllipsis.displayName = "PaginationEllipsis"

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

export {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
<<<<<<< HEAD
  PaginationPrevious}
;
=======
<<<<<<< HEAD
  PaginationPrevious,;
};
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

)
PaginationEllipsis.displayName = "PaginationEllipsis"


  >;
    <MoreHorizontal className="h-4 w-4" />;
    <span className="sr-only">More pages</span>;
  </span>;
);
PaginationEllipsis.displayName = "PaginationEllipsis";
;
export {;
  Pagination,;
  PaginationContent,;
  PaginationEllipsis,;
  PaginationItem,;
  PaginationLink;
  PaginationNext;
  PaginationPrevious}
;
  PaginationLink,;
  PaginationNext,;
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
=======

  PaginationPrevious,;
};

  />;

<<<<<<< HEAD
));

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
