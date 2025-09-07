
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

Pagination && Pagination.displayName = 'Pagination';
const PaginationContent = React && React.forwardRef<;
  HTMLUListElement,;'
  React && React.ComponentProps<'ul'>;
>(({ className, ...props }, ref) => (;


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
)
PaginationLink.displayName = "PaginationLink"


);
PaginationLink.displayName = 'PaginationLink';
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({

  className
  ...props

}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink"
    aria-label="Go to previous page""
    size="default""
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className = $2;
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
