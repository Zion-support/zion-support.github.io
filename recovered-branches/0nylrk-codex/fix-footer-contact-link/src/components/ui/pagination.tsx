
<<<<<<< HEAD

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
=======
=======

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"


<<<<<<< HEAD

const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
import React from 'react';
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
=======
const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}

<<<<<<< HEAD
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ButtonProps, buttonVariants} from '@/components/ui/button';
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

<<<<<<< HEAD
import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  />
);
Pagination.displayName = 'Pagination';
const PaginationContent = React.forwardRef<
  HTMLUListElement
  React.ComponentProps<'ul'>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
<<<<<<< HEAD
<<<<<<< HEAD
  />;
);
=======


>(({ className, ...props }, ref) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
Pagination && Pagination.displayName = 'Pagination';
const PaginationContent = React && React.forwardRef<;
  HTMLUListElement,;
  React && React.ComponentProps<'ul'>;
>(({ className, ...props }, ref) => (;
  <ul
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======


  ...props
}: PaginationLinkProps) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
PaginationContent && PaginationContent.displayName = 'PaginationContent';
=======
  ...props
}: PaginationLinkProps) => (
=======
PaginationContent && PaginationContent.displayName = 'PaginationContent';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const PaginationItem = React && React.forwardRef<;
  HTMLLIElement,;
  React && React.ComponentProps<'li'>;
>(({ className, ...props }, ref) => (;
  <li ref={ref} className={cn('', className)} {...props} />;
));
PaginationItem && PaginationItem.displayName = 'PaginationItem';
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type PaginationLinkProps = {;
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &;
  React && React.ComponentProps<'a'>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const PaginationLink = ({;
  className,;
  isActive,;
  size = 'icon',;
  ...props;
}: PaginationLinkProps) => (;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost'
        size
      })
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        variant: isActive ? "outline" : "ghost",
        size}),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  />
<<<<<<< HEAD

)
PaginationLink.displayName = "PaginationLink"


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
);
PaginationLink.displayName = 'PaginationLink';
)
PaginationLink.displayName = "PaginationLink"

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

)
PaginationPrevious.displayName = "PaginationPrevious"


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
);
PaginationPrevious.displayName = 'PaginationPrevious';
)
PaginationPrevious.displayName = "PaginationPrevious"

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

)
PaginationNext.displayName = "PaginationNext"



const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<'span'>) => (
PaginationNext && PaginationNext.displayName = 'PaginationNext';
const PaginationEllipsis = ({;
  className,;
  ...props;
}: React && React.ComponentProps<'span'>) => (;
  <span
    aria-hidden
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
);
PaginationNext.displayName = 'PaginationNext';
)
PaginationNext.displayName = "PaginationNext"

<<<<<<< HEAD
<<<<<<< HEAD
const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
=======
PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
=======

)
PaginationEllipsis.displayName = "PaginationEllipsis"

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
<<<<<<< HEAD
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



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
