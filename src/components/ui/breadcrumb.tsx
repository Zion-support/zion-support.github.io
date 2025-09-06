import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
const Breadcrumb = React.forwardRef<
  HTMLElement
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode
import React from 'react';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

const Breadcrumb = React && React.forwardRef<;
  HTMLElement,;
  React && React.ComponentPropsWithoutRef<'nav'> & {;
    separator?: React && React.ReactNode;
  }
>(({ className, separator, ...props }, ref,) => (;
  <nav
<<<<<<< HEAD
import * as React from 'react';
import { Slot } from '@radix - ui / react - slot';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib / utils';
const Breadcrumb = React.forward_ref<;
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
  }
>(({ class_name, separator, ...props }, ref, ) => (
  <nav;
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    ref={ref}
    aria-label='breadcrumb'
    className={cn(
      'inline-flex items-center gap-1 text-sm text-zion-slate-light',      className
    )}
    {...props}
  />
))
Breadcrumb.displayName = 'Breadcrumb'
    ref = {ref,}
<<<<<<< HEAD
    aria-label="breadcrumb"
    className = {cn(
      "inline-flex items-center gap-1 text-sm text-zion-slate-light"
=======
    aria-label="breadcrumb"
    className = {cn(
<<<<<<< HEAD
      "inline-flex items-center gap-1 text-sm text-zion-slate-light"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      className
    ),}
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
  React.ComponentPropsWithoutRef<'a'> & {
    as_child?: boolean;
  }
<<<<<<< HEAD
>(({ class_name, as_child = false, ...props }, ref) => {
  const Comp = as_child ? Slot : 'a';
      />);
});
BreadcrumbLink.display_name = 'BreadcrumbLink';
=======

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const BreadcrumbSeparator = ({
  children
  className
  ...props
<<<<<<< HEAD
}: React.ComponentProps<'li'>) => (
  <li
    role='presentation'
    aria-hidden='true'
    className={cn('[&>svg]:size-3.5 text-zion-slate-light/70', className)}    {...props}
=======
<<<<<<< HEAD
}: React.ComponentProps<'li'>) => (
  <li
    role='presentation'
    aria-hidden='true'
    className={cn('[&>svg]:size-3.5 text-zion-slate-light/70', className)}    {...props}
<<<<<<< HEAD
=======
=======
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  >
    {children |<ChevronRight className='h-4 w-4' />}
  </li>
)
<<<<<<< HEAD
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'
=======
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}
  />;
));
Breadcrumb && Breadcrumb.displayName = 'Breadcrumb';

  HTMLOListElement,;
  React && React.ComponentPropsWithoutRef<'ol'>;
>(({ className, ...props }, ref) => (;
=======

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

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
    className={cn("flex h-9 w-9 items-center justify-center", className)}
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3 && 3.5 text-zion-slate-light/70", className)}
    {...props}
  >
    {children |<ChevronRight className="h-4 w-4" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
const BreadcrumbEllipsis = ({
  className
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    &#8230
  </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'
export {
<<<<<<< HEAD
  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
  BreadcrumbEllipsis
};)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
export {
  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
    {...props}>;
    &#8230,;
  </span>;
);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';
<<<<<<< HEAD

export {;
  Breadcrumb,;
  BreadcrumbList,;
=======
=======
  Breadcrumb,
  BreadcrumbList,
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator;
  BreadcrumbEllipsis;
};)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export {
  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
<<<<<<< HEAD
  BreadcrumbSeparator
  BreadcrumbEllipsis}

export {;
<<<<<<< HEAD
  children,
  class_name,
  ...props;
}: React.ComponentProps<'li'>) =>: any (
  <li;
    role='presentation';
    aria - hidden='true';
    className={cn ('[&>svg]:size - 3.5 text - zion - slate - light / 70', class_name)}    {...props}
  >;
    {children || <ChevronRight className='h - 4 w - 4' />}
  </li>);
BreadcrumbSeparator.display_name = 'BreadcrumbSeparator';
const BreadcrumbEllipsis = ({
  class_name,
  ...props;
}: React.ComponentProps<'span'>) =>: any (  <span;
    role='presentation';
    aria - hidden='true';
    className={cn ('flex h - 9 w - 9 items - center justify - center', class_name)}    {...props}
  >;
=======
=======
=======
  BreadcrumbSeparator;
  BreadcrumbEllipsis};
=======
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
 
const BreadcrumbEllipsis = ({
  className,
  ...props
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    &#8230,
  </span>;
    role="presentation";
    aria - hidden="true";
    className={cn ("flex h - 9 w - 9 items - center justify - center", class_name)}
  <li;
    role="presentation";
    aria - hidden="true";
    className={cn ("[&>svg]:size - 3.5 text - zion - slate - light / 70", class_name)}
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
  BreadcrumbEllipsis,
});
BreadcrumbEllipsis.display_name = "BreadcrumbElipssis";
export {
  Breadcrumb;
  BreadcrumbList;
  BreadcrumbItem;
  BreadcrumbLink;
  BreadcrumbSeparator;
  BreadcrumbEllipsis}

  BreadcrumbEllipsis}
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
