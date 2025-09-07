
import * as React from "react"""
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"""
const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;''
import React from 'react';''
import * as React from 'react';''
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';')'
const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;'
  <nav;'
    role='navigation'''
    aria-label='pagination'')'
    className={cn('mx-auto flex w-full justify-center', className)}'
    {...props}
'
import * as React from 'react';''
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';''
import {cn} from '@/lib/utils';''
import {ButtonProps, buttonVariants} from '@/components/ui/button';''
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => ('
</nav>)'
const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (""
import React from 'react';''
import * as React from 'react';''
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';'
  <nav;'
    role='navigation'''
    aria-label='pagination'')'
    className={cn('mx-auto flex w-full justify-center', className)}'
    {...props}
  />
</nav>
const PaginationContent = React.forwardRef<
  HTMLUListElement,'
  React.ComponentProps<"ul">"
>(({ className, ...props }, ref) => ("
Pagination && Pagination.displayName = 'Pagination';'
const PaginationContent = React && React.forwardRef<;
  HTMLUListElement,;'
  React && React.ComponentProps<'ul'>;')
>(({ className, ...props }, ref) => (;
  <ul;
;'
import {cn} from '@/lib / utils';''
import {ButtonProps, button_variants} from '@/components / ui / button';'
;)'
const Pagination = ({ class_name, ...props }: React.ComponentProps<'nav'>) =>: any ('
</ul>
  <nav;'
    role='navigation';''
    aria - label='pagination';')'
    className={cn ('mx - auto flex w - full justify - center', class_name)}'
    {...props}
  />);
</nav>
const PaginationContent = React.forward_ref<;
  HTMLUListElement,'
  React.ComponentProps<'ul'>;'
>(({ class_name, ...props }, ref) => (
  <ul;
    ref={ref})'
    className={cn ('flex flex - row items - center gap - 1', class_name)}'
    {...props}

  />));
</ul>
const PaginationItem = React.forward_ref<;
  HTMLLIElement,'
  React.ComponentProps<'li'>;'
>(({ class_name, ...props }, ref) => ()'
  <li ref={ref} className={cn ('', class_name)} {...props} />));'
</li>'
} & Pick < ButtonProps, 'size'> &;''
  React.ComponentProps<'a'>;'
  />

  <ul;
    ref={ref}'
    className={cn('flex flex-row items-center gap-1', className)}'
    {...props}
  />
</ul>
const PaginationItem = React.forwardRef<
  HTMLLIElement;'
  React.ComponentProps<'li'>'
>(({ className, ...props }, ref) => ()'
  <li ref={ref} className={cn('', className)} {...props} />'
</li>'
} & Pick<ButtonProps, 'size'> &'
</ButtonProps>'
  React.ComponentProps<'a'>;'
const PaginationLink = ({
  className;
  isActive;'
  size = 'icon'')
))'
PaginationContent.displayName = "PaginationContent""
const PaginationItem = React.forwardRef<
  HTMLLIElement,"
  React.ComponentProps<"li">"
>(({ className, ...props }, ref) => ()"
  <li ref={ref} className={cn("", className)} {...props} />"
</li>"
} & Pick<ButtonProps "size"> &"
</ButtonProps>"
  React.ComponentProps<"a">"
const PaginationLink = ({
  className,
  isActive,"
  size = "icon","
  ...props;)
}: PaginationLinkProps) => (
  ...props;)
}: PaginationLinkProps) => ("
PaginationContent && PaginationContent.displayName = 'PaginationContent';'
const PaginationItem = React && React.forwardRef<;
  HTMLLIElement,;'
  React && React.ComponentProps<'li'>;')
>(({ className, ...props }, ref) => (;)'
  <li ref={ref} className={cn('', className)} {...props} />;'
</li>'
} & Pick<ButtonProps, 'size'> &;'
</ButtonProps>'
  React && React.ComponentProps<'a'>;'
const PaginationLink = ({;
  className,;
  isActive,;'
  size = 'icon',;'
  ...props;)
}: PaginationLinkProps) => (;
type PaginationLinkProps = {
  is_active?: boolean;'
} & Pick < ButtonProps, 'size'> &;''
  React.ComponentProps<'a'>;'
  <a;'
    aria-current={isActive ? 'page' : undefined}'
    className={cn(
      buttonVariants({
'
PaginationLink && PaginationLink.displayName = 'PaginationLink';'
const PaginationPrevious = ({;
  className,;
  ...props;)
}: React && React.ComponentProps<typeof PaginationLink>) =></typeof> (;
</a>

  <PaginationLink;'
    aria-label='Go to previous page'''
    size='default'')'
    className={cn('gap-1 pl-2 && 2.5', className)}'
    {...props}>;
</PaginationLink>'
    <ChevronLeft className='h-4 w-4' />;'
</ChevronLeft>
    <span>Previous</span>;
  </PaginationLink>;
}: React && React.ComponentProps<typeof Pagination</typeof>Link>) => (;
  <PaginationLink;'
    aria-label='Go to next page'''
    size='default'')'
    className={cn('gap-1 pr-2 && 2.5', className)}'
    {...props}>;
</PaginationLink>
    <span>Next</span>;'
    <ChevronRight className='h-4 w-4' />;'
</ChevronRight>
  </PaginationLink>;
}: React.ComponentProps<typeof PaginationLink>) => (
</typeof>
  <PaginationLink;'
    aria-label="Go to previous page"""
    size="default"")"
    className={cn("gap-1 pl-2.5", className)}"
    {...props}
  >
</PaginationLink>"
    <ChevronLeft className="h-4 w-4" />"
</ChevronLeft>
    <span>Previous</span>
  </PaginationLink>
}: React.ComponentProps<typeof PaginationLink>) => (
</typeof>
  <PaginationLink;"
    aria-label="Go to next page"""
    size="default"")"
    className={cn("gap-1 pr-2.5", className)}"
    {...props}
  >
</PaginationLink>
    <span>Next</span>"
    <ChevronRight className="h-4 w-4" />"
</ChevronRight>
  </PaginationLink>"
}: React.ComponentProps<'span'>) => (''
PaginationNext && PaginationNext.displayName = 'PaginationNext';'
const PaginationEllipsis = ({;
  className,;
  ...props;)'
}: React && React.ComponentProps<'span'>) => (;'
  <span;
    aria-hidden;'
PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';''
PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';')'
    className={cn("flex h-9 w-9 items-center justify-center", className)}"
    {...props}
  >
</span>"
    <MoreHorizontal className="h-4 w-4" />"
</MoreHorizontal>"
    <span className="sr-only">More pages</span>"
  </span>
  <PaginationLink;"
    aria-label='Go to previous page'''
    size='default'''
    className={cn('gap-1 pl-2 && 2.5', className)}'
    {...props}>;
</PaginationLink>'
    <ChevronLeft className='h-4 w-4' />;'
</ChevronLeft>
    <span>Previous</span>;
  </PaginationLink>;
  <PaginationLink;'
    aria-label='Go to next page'''
    size='default'''
    className={cn('gap-1 pr-2 && 2.5', className)}'
    {...props}>;
</PaginationLink>
    <span>Next</span>;'
    <ChevronRight className='h-4 w-4' />;'
</ChevronRight>
  </PaginationLink>;
  <span;
    aria-hidden;'
    className={cn('flex h-9 w-9 items-center justify-center', className)}'
    {...props}>;
</span>'
    <MoreHorizontal className='h-4 w-4' />;'
</MoreHorizontal>'
    <span className='sr-only'>More pages</span>;'
  </span>;
  <a;'
    aria - current={is_active ? 'page' : undefined}'
    className={cn (
      button_variants ({'
        variant: is_active ? 'outline' : 'ghost','
        size,)
      }),
      class_name)}
    {...props}
  />);
</a>
}: React.ComponentProps < typeof PaginationLink>) =>: any</typeof> (
  <PaginationLink;'
    aria - label='Go to previous page';''
    size='default';')'
    className={cn ('gap - 1 pl - 2.5', class_name)}'
    {...props}
  >;
</PaginationLink>'
    <ChevronLeft className='h - 4 w - 4' />;'
</ChevronLeft>
    <span > Previous</span>;
  </PaginationLink>);
}: React.ComponentProps < typeof Pagination</typeof > Link>) =>: any (
  <PaginationLink;'
    aria - label='Go to next page';''
    size='default';')'
    className={cn ('gap - 1 pr - 2.5', class_name)}'
    {...props}
  >;
</PaginationLink>
    <span > Next</span>;'
    <ChevronRight className='h - 4 w - 4' />;'
</ChevronRight>
  </PaginationLink>);'
}: React.ComponentProps<'span'>) =>: any ('
  <span;
    aria - hidden;)'
    className={cn ('flex h - 9 w - 9 items - center justify - center', class_name)}'
    {...props}
  >;
</span>'
    <MoreHorizontal className='h - 4 w - 4' />;'
</MoreHorizontal>'
    <span className='sr - only'>More pages</span>;'
  </span>);
const PaginationItem = React.forwardRef<;
  HTMLLIElement,;'
  React.ComponentProps<"li">;"
>(({ className, ...props }, ref) => (;)"
  <li ref={ref} className={cn("", className)} {...props} />;"
</li>"
} & Pick<ButtonProps "size"> &;"
</ButtonProps>"
  React.ComponentProps<"a">;"
const PaginationLink = ({;
  className,;
  isActive,;"
  size = "icon",;"
  ...props;)
}: PaginationLinkProps) => (;
  <a;"
    aria-current={isActive ? "page" : undefined}"
    className={cn(;
      buttonVariants({;"
        variant: isActive ? "outline" : "ghost",;")
        size}),;
      className;
    )}
    {...props}
  />
</a>
}: React.ComponentProps<typeof PaginationLink>) => (;
</typeof>"
    <MoreHorizontal className='h-4 w-4' />;'
</MoreHorizontal>'
    <span className='sr-only'>More pages</span>;'
  </span>;)
} React.ComponentProps<typeof PaginationLink>) => (;
</typeof>
  <PaginationLink;'
    aria-label="Go to previous page";""
    size="default";")"
    className={cn("gap-1 pl-2.5", className)}"
    {...props}
  >
</PaginationLink>"
    <ChevronLeft className='h-4 w-4' />'
</ChevronLeft>
    <span>Previous</span>
  </PaginationLink>
}: React.ComponentProps<typeof PaginationLink>) => (;
</typeof>'
    <ChevronLeft className="h-4 w-4" />;"
</ChevronLeft>
    <span>Previous</span>;
  </PaginationLink>;)
} React.ComponentProps<typeof PaginationLink>) => (;
</typeof>
  <PaginationLink;"
    aria-label="Go to next page";""
    size="default";")"
    className={cn("gap-1 pr-2.5", className)}"
    {...props}
  >
</PaginationLink>
    <span>Next</span>"
    <ChevronRight className='h-4 w-4' />'
</ChevronRight>
  </PaginationLink>'
}: React.ComponentProps<"span">) => (;"
  >;
    <span>Next</span>;"
    <ChevronRight className="h-4 w-4" />;"
</ChevronRight>
  </PaginationLink>;)"
} React.ComponentProps<"span">) => (;"
  <span;
    aria-hidden;)"
    className={cn("flex h-9 w-9 items-center justify-center", className)}"
    {...props}
  >
</span>"
    <MoreHorizontal className='h-4 w-4' />'
</MoreHorizontal>'
    <span className='sr-only'>More pages</span>'
  </span>'
  PaginationPrevious} />) Pagination.displayName = "Pagination" const PaginationContent = React.forwardRef< HTMLUListElement;""
/>) ) PaginationContent.displayName = "PaginationContent" const PaginationItem = React.forwardRef< HTMLLIElement;""
) ) PaginationItem.displayName = "PaginationItem" React.ComponentProps<"a">"
}{
  ...props;"
}/>) PaginationLink.displayName = "PaginationLink" const PaginationPrevious = ({"
  className, ...props;)"
}: React.ComponentProps<typeof PaginationLink>) => (<PaginationLink > <ChevronLeft className="h-4 w-4" /> <span>Previous</span> </PaginationLink>) PaginationPrevious.displayName = "PaginationPrevious" const PaginationNext = ({"
</typeof>)"
}: React.ComponentProps<typeof PaginationLink>) => (<PaginationLink > <span>Next</span> <ChevronRight className="h-4 w-4" /> </PaginationLink>) PaginationNext.displayName = "PaginationNext" <span aria-hidden className= {"
</typeof>"
}> <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >More pages</span> </span>) PaginationEllipsis.displayName = "PaginationEllipsis" export {"
</MoreHorizontal>"