
<<<<<<< HEAD
=======
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


  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}

import * as React from 'react';


  />
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {cn} from '@/lib/utils';
import {ButtonProps, buttonVariants} from '@/components/ui/button';
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD



)

Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,"
  React.ComponentProps<"ul">



=======
import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
import React from 'react';
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';

  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}

>>>>>>> origin/cursor/delete-old-data-records-6bba
Pagination && Pagination.displayName = 'Pagination';
const PaginationContent = React && React.forwardRef<;
  HTMLUListElement,;'
  React && React.ComponentProps<'ul'>;
>(({ className, ...props }, ref) => (;

<<<<<<< HEAD
  <ul
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

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />

=======
const PaginationLink = ({
  className
  isActive
  size = 'icon'


>>>>>>> origin/cursor/delete-old-data-records-6bba
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


  ...props
}: PaginationLinkProps) => (  ...props
}: PaginationLinkProps) => (
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  ...props
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
=======

type PaginationLinkProps = {}
  is_active?: boolean;'
} & Pick < ButtonProps, 'size'> &;'
  React.ComponentProps<'a'>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

  className,;
  isActive,;
  size = "icon",;
  ...props;

<<<<<<< HEAD
;
const PaginationLink = ({;

  className,;
  isActive,;
  size = "icon",;
  ...props;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    {...props}>;'
    <ChevronLeft className='h-4 w-4' />;
    <span>Previous</span>;
  </PaginationLink>;
);

<<<<<<< HEAD

=======
'
>>>>>>> origin/cursor/delete-old-data-records-6bba
PaginationPrevious && PaginationPrevious.displayName = 'PaginationPrevious';
const PaginationNext = ({;
  className,;
  ...props;
}: React && React.ComponentProps<typeof Pagination</typeof>Link>) => (;

<<<<<<< HEAD
  <PaginationLink
    aria-label='Go to next page'
    size='default'

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    className={cn('gap-1 pr-2 && 2.5', className)}
    {...props}>;
    <span>Next</span>;'
    <ChevronRight className='h-4 w-4' />;
  </PaginationLink>;
);

<<<<<<< HEAD
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        variant: isActive ? 'outline' : 'ghost'
        size
      })
        variant: isActive ? "outline" : "ghost",
        size}),
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className

    )}
    {...props}
  />
<<<<<<< HEAD


=======
)
PaginationLink.displayName = "PaginationLink"


);
PaginationLink.displayName = 'PaginationLink';
)
PaginationLink.displayName = "PaginationLink"
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

  >"
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>


const PaginationNext = ({

  className

=======
  >
    <ChevronLeft className = $2;
const PaginationNext = ({

  className
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ...props

}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink"
    aria-label="Go to next page""
    size="default""
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
<<<<<<< HEAD

    <span>Next</span>"
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>



=======
    <span>Next</span>
    <ChevronRight className = $2;
PaginationNext && PaginationNext.displayName = 'PaginationNext';
const PaginationEllipsis = ({;
  className,;
  ...props;'
}: React && React.ComponentProps<'span'>) => (;

  <span
    aria-hidden
);
PaginationNext.displayName = 'PaginationNext';
)
PaginationNext.displayName = "PaginationNext"


PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
>>>>>>> origin/cursor/delete-old-data-records-6bba
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >"
    <MoreHorizontal className="h-4 w-4" />"
    <span className="sr-only">More pages</span>
<<<<<<< HEAD

  </span>

=======


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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
<<<<<<< HEAD



=======
  PaginationPrevious}
;
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

        variant: isActive ? 'outline' : 'ghost'
        size
      })
        variant: isActive ? "outline" : "ghost",
        size}),

      className

    )}
    {...props}
  />

const PaginationPrevious = ({

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

const PaginationNext = ({

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

PaginationNext && PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({;
  className,;
  ...props;'
}: React && React.ComponentProps<'span'>) => (;

const PaginationEllipsis = ({
  className
  ...props

  <span
    aria-hidden

    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >"
    <MoreHorizontal className="h-4 w-4" />"
    <span className="sr-only">More pages</span>

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

  PaginationPrevious,;
};

  />;

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
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
