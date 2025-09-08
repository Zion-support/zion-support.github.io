
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}

import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';  <ul
;
import {cn} from '@/lib / utils';
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

  />
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
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

  ...props
}: PaginationLinkProps) => (  ...props
}: PaginationLinkProps) => (
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
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  React && React.ComponentProps<'a'>;
const PaginationLink = ({;
  className,;
  isActive,;'
  size = 'icon',;
  ...props;
}: PaginationLinkProps) => (;
<<<<<<< HEAD

  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({const PaginationPrevious = ({
  className
  ...props

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

)
PaginationPrevious.displayName = "PaginationPrevious"

  className
  ...props

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

)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<'span'>) => (
PaginationNext && PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({;
  className,;
  ...props;'
}: React && React.ComponentProps<'span'>) => (;
  <span
    aria-hidden

PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';

PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >"
    <MoreHorizontal className="h-4 w-4" />"
    <span className="sr-only">More pages</span>
  </span>  />;
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