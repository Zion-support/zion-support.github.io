<<<<<<< HEAD
=======
      "inline-flex items-center gap-1 text-sm text-zion-slate-light"
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
const Breadcrumb = React.forwardRef<
  HTMLElement
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
>(({ className, separator, ...props }, ref,) => (;
  <nav
import * as React from 'react';
import { Slot } from '@radix - ui / react - slot';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib / utils';
const Breadcrumb = React.forward_ref<;
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
<<<<<<< HEAD
    separator?: React.ReactNode;
=======
    separator?: React.ReactNode
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
>(({ class_name, separator, ...props }, ref, ) => (
  <nav;
    ref={ref}
    aria - label='breadcrumb';
    className={cn (
      'inline - flex items - center gap - 1 text - sm text - zion - slate - light',      class_name)}
    {...props}
<<<<<<< HEAD
=======
  />
))
Breadcrumb.displayName = 'Breadcrumb'
    ref = {ref,}
    aria-label="breadcrumb"
    className = {cn(
      "inline-flex items-center gap-1 text-sm text-zion-slate-light"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




<<<<<<< HEAD



      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
=======
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from 'lucide-react'
 
import { cn } from "@/lib/utils"
 
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref) => (;
  <nav;
    ref={ref}
    aria-label="breadcrumb"
    className={cn(
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
      className
    )}
    {...props}
  />
))
Breadcrumb.displayName = 'Breadcrumb'
  HTMLOListElement
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn('flex items-center gap-1.5', className)}    {...props}
  />
))
BreadcrumbList.displayName = 'BreadcrumbList'
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1.5', className)}    {...props}
  />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className
    ),}
    {...props}
  />
))

  />));
Breadcrumb.display_name = 'Breadcrumb';
    ref = {ref, }
    aria - label="breadcrumb";
    class_name = {cn (
      "inline - flex items - center gap - 1 text - sm text - zion - slate - light",
      class_name), }
    {...props}
  />));
Breadcrumb.display_name = 'Breadcrumb';

Breadcrumb.displayName = "Breadcrumb"
 
const BreadcrumbList = React.forwardRef<

  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>;
>(({ class_name, ...props }, ref) => (
  <ol;
    ref={ref}
    className={cn ('flex items - center gap - 1.5', class_name)}    {...props}
  />));
BreadcrumbList.display_name = 'BreadcrumbList';
const BreadcrumbItem = React.forward_ref<;
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>;
>(({ class_name, ...props }, ref) => (
  <li;
    ref={ref}
    className={cn ('inline - flex items - center gap - 1.5', class_name)}    {...props}
  />));
BreadcrumbItem.display_name = 'BreadcrumbItem';
const BreadcrumbLink = React.forward_ref<;
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    as_child?: boolean;
  }
<<<<<<< HEAD

=======
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'
      />
  )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'
Breadcrumb.displayName = "Breadcrumb"
 
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"
 
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"
 
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"
 
  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-zion-cyan", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"
 
<<<<<<< HEAD


const BreadcrumbSeparator = ({


=======
const BreadcrumbSeparator = ({
  children
  className
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role='presentation'
    aria-hidden='true'
    className={cn('[&>svg]:size-3.5 text-zion-slate-light/70', className)}    {...props}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  >
    {children |<ChevronRight className='h-4 w-4' />}
  </li>
)
<<<<<<< HEAD

=======
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'
const BreadcrumbSeparator = ({


}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}


  >
    {children || <ChevronRight className="h-4 w-4" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  />;
));
Breadcrumb && Breadcrumb.displayName = 'Breadcrumb';
    ref = {ref,}
    aria-label="breadcrumb";
    className = {cn(;
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",;
      className;
    ),}
    {...props}
  />;
));
Breadcrumb && Breadcrumb.displayName = 'Breadcrumb';

  HTMLOListElement,;
  React && React.ComponentPropsWithoutRef<'ol'>;
>(({ className, ...props }, ref) => (;

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from 'lucide-react'
 
import { cn } from "@/lib/utils"
import { ChevronRight } from 'lucide-react';
 
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref) => (
  <nav
    ref = {ref}
    aria-label="breadcrumb"
    className={cn(
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
      className
    )}
    {...props}
  />
))
Breadcrumb.displayName = "Breadcrumb"
 
const BreadcrumbList = React.forwardRef<
  HTMLOListElement;
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (

  <ol
    ref={ref}
    className={cn('flex items-center gap-1 && 1.5', className)}    {...props}
  />;
));
BreadcrumbList && BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React && React.forwardRef<;
  HTMLLIElement,;
  React && React.ComponentPropsWithoutRef<'li'>;
>(({ className, ...props }, ref) => (;
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1 && 1.5', className)}    {...props}
  />;
));
BreadcrumbItem && BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React && React.forwardRef<;
  HTMLAnchorElement,;
  React && React.ComponentPropsWithoutRef<'a'> & {;
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {;
  const Comp = asChild ? Slot : 'a';

      />;
  );
});
BreadcrumbLink && BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbSeparator = ({;
  children,;
  className,;
  ...props;
}: React && React.ComponentProps<'li'>) => (;
  <li
    role='presentation'
    aria-hidden='true'
    className={cn('[&>svg]:size-3 && 3.5 text-zion-slate-light/70', className)}    {...props}
  >;
    {children || <ChevronRight className='h-4 w-4' />}
  </li>;
);
BreadcrumbSeparator && BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = ({;
  className,;
  ...props;
}: React && React.ComponentProps<'span'>) => (  <span
    role='presentation'
    aria-hidden='true'
    className={cn('flex h-9 w-9 items-center justify-center', className)}    {...props}>;
    &#8230,;
  </span>;
    role="presentation";
    aria-hidden="true";
<<<<<<< HEAD
=======
 
const BreadcrumbEllipsis = ({
  className
  ...props
}: React.ComponentProps<'span'>) => (  <span
    role='presentation'
    aria-hidden='true'
    className={cn('flex h-9 w-9 items-center justify-center', className)}    {...props}
  >
    &#8230
  </span>
    role="presentation"
    aria-hidden="true"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    className={cn("flex h-9 w-9 items-center justify-center", className)}
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3 && 3.5 text-zion-slate-light/70", className)}
    {...props}
<<<<<<< HEAD

  >;
    {children || <ChevronRight className="h-4 w-4" />}
  </li>;
);
BreadcrumbSeparator && BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({;
  className;
  ...props;
}: React && React.ComponentProps<"span">) => (;

=======
  >
    {children |<ChevronRight className="h-4 w-4" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
const BreadcrumbEllipsis = ({
  className
  ...props
}: React.ComponentProps<"span">) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
<<<<<<< HEAD


export {
=======
    {...props}
  >
    &#8230
  </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'
export {
  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
  BreadcrumbEllipsis
};)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator;
  BreadcrumbEllipsis;
};)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
 
export {
  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
  BreadcrumbEllipsis}

    {...props}>;
    &#8230,;
  </span>;
);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export {;
  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator,;
  BreadcrumbEllipsis,;
};);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {;

<<<<<<< HEAD
=======
  BreadcrumbSeparator;
  BreadcrumbEllipsis};

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  BreadcrumbSeparator;
  BreadcrumbEllipsis};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
 
const BreadcrumbEllipsis = ({
  className,
  ...props
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
<<<<<<< HEAD
    {...props}
  >

    &#8230,
  </span>;
    role="presentation";
    aria - hidden="true";
    className={cn ("flex h - 9 w - 9 items - center justify - center", class_name)}
  <li;
    role="presentation";
    aria - hidden="true";
    className={cn ("[&>svg]:size - 3.5 text - zion - slate - light / 70", class_name)}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    {...props}
  >;
    {children || <ChevronRight className="h - 4 w - 4" />}
  </li>);
BreadcrumbSeparator.display_name = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({
  class_name;
  ...props;
}: React.ComponentProps<"span">) =>: any (
  <span;
    role="presentation";
    aria - hidden="true";
    className={cn ("flex h - 9 w - 9 items - center justify - center", class_name)}
    {...props}
  >;
    &#8230,
  </span>);
BreadcrumbEllipsis.display_name = 'BreadcrumbElipssis';
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
<<<<<<< HEAD


=======
  BreadcrumbEllipsis}
;
  BreadcrumbEllipsis}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
