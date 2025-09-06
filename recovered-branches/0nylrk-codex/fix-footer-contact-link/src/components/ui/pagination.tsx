<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

<<<<<<< HEAD
const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (

=======
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
=======
=======
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
import React from 'react';
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
const Pagination = ({ className, ...props }: React && React.ComponentProps<'nav'>) => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx

  />
<<<<<<< HEAD

>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />

=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ButtonProps, buttonVariants} from '@/components/ui/button';
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
<<<<<<< HEAD
<<<<<<< HEAD


>(({ className, ...props }, ref) => (
=======
========
  />;
);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
type PaginationLinkProps = {
  is_active?: boolean;
} & Pick < ButtonProps, 'size'> &;
  React.ComponentProps<'a'>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx

  />

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>(({ className, ...props }, ref) => (
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  ...props
}: PaginationLinkProps) => (
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
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
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx

<<<<<<< HEAD
=======
========
        variant: isActive ? 'outline' : 'ghost'
        size
      })
      className
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    )}
    {...props}
  />;
);
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
PaginationLink && PaginationLink.displayName = 'PaginationLink';
const PaginationPrevious = ({;
  className,;
  ...props;
}: React && React.ComponentProps<typeof PaginationLink>) =></typeof> (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
  <PaginationLink
    aria-label='Go to previous page'
    size='default'
    className={cn('gap-1 pl-2 && 2.5', className)}
    {...props}>;
    <ChevronLeft className='h-4 w-4' />;
    <span>Previous</span>;
  </PaginationLink>;
);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
PaginationPrevious && PaginationPrevious.displayName = 'PaginationPrevious';
const PaginationNext = ({;
  className,;
  ...props;
}: React && React.ComponentProps<typeof Pagination</typeof>Link>) => (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={cn('gap-1 pr-2 && 2.5', className)}
    {...props}>;
    <span>Next</span>;
    <ChevronRight className='h-4 w-4' />;
  </PaginationLink>;
);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx


        variant: isActive ? "outline" : "ghost",
        size}),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      className
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

)
PaginationLink.displayName = "PaginationLink"


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
);
PaginationLink.displayName = 'PaginationLink';
)
PaginationLink.displayName = "PaginationLink"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======

)
PaginationPrevious.displayName = "PaginationPrevious"


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
);
PaginationPrevious.displayName = 'PaginationPrevious';
)
PaginationPrevious.displayName = "PaginationPrevious"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======

)
PaginationNext.displayName = "PaginationNext"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<'span'>) => (
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
PaginationNext && PaginationNext.displayName = 'PaginationNext';
const PaginationEllipsis = ({;
  className,;
  ...props;
}: React && React.ComponentProps<'span'>) => (;
  <span
    aria-hidden
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx

PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,;
};
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
========
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}>;
    <MoreHorizontal className='h-4 w-4' />;
    <span className='sr-only'>More pages</span>;
  </span>;
);
PaginationEllipsis && PaginationEllipsis.displayName = 'PaginationEllipsis';
=======
PaginationLink.displayName = "PaginationLink";
;
const PaginationPrevious = ({;
  className,;
  ...props;
} React.ComponentProps<typeof PaginationLink>) => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  <PaginationLink;
    aria-label="Go to previous page";
    size="default";
    className={cn("gap-1 pl-2.5", className)}
    {...props}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  <PaginationLink;
    aria-label="Go to next page";
    size="default";
    className={cn("gap-1 pr-2.5", className)}
    {...props}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  <span;
    aria-hidden;
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  >
    <MoreHorizontal className='h-4 w-4' />
    <span className='sr-only'>More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";
<<<<<<< HEAD
=======

)
PaginationEllipsis.displayName = "PaginationEllipsis"


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  >;
    <MoreHorizontal className="h-4 w-4" />;
    <span className="sr-only">More pages</span>;
  </span>;
);
PaginationEllipsis.displayName = "PaginationEllipsis";
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export {;
  Pagination,;
  PaginationContent,;
  PaginationEllipsis,;
  PaginationItem,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  PaginationLink;
  PaginationNext;
  PaginationPrevious}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  PaginationLink,;
  PaginationNext,;
<<<<<<< HEAD
  PaginationPrevious,;
};
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
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
  PaginationPrevious,
}
;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/pagination.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
