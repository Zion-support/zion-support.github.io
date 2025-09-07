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
    separator?: React.ReactNode;
>(({ class_name, separator, ...props }, ref, ) => (
  <nav;
    ref={ref}
    aria-label='breadcrumb'
    className={cn(
      'inline-flex items-center gap-1 text-sm text-zion-slate-light',      className
    )}
    {...props}

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from 'lucide-react'

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
>(({ className, separator, ...props }, ref) => (;
    aria-label="breadcrumb"

      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
      className
  />
))

  />));
Breadcrumb.display_name = 'Breadcrumb';
    ref = {ref, }
    aria - label="breadcrumb";
    class_name = {cn (
      "inline - flex items - center gap - 1 text - sm text - zion - slate - light",
      class_name), }

Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<

  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>;
>(({ class_name, ...props }, ref) => (
  <ol;
    className={cn ('flex items - center gap - 1.5', class_name)}    {...props}
BreadcrumbList.display_name = 'BreadcrumbList';
const BreadcrumbItem = React.forward_ref<;
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>;
  <li;
    className={cn ('inline - flex items - center gap - 1.5', class_name)}    {...props}
BreadcrumbItem.display_name = 'BreadcrumbItem';
const BreadcrumbLink = React.forward_ref<;
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean

>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      className={cn("transition-colors hover:text-zion-cyan", className)}
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbSeparator = ({

}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}

  >
    {children |<ChevronRight className='h-4 w-4' />}
  </li>

  />;
));
Breadcrumb && Breadcrumb.displayName = 'Breadcrumb';

  HTMLOListElement,;
  React && React.ComponentPropsWithoutRef<'ol'>;
>(({ className, ...props }, ref) => (;

const BreadcrumbEllipsis = ({
  ...props
}: React.ComponentProps<'span'>) => (  <span
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
    className={cn('flex h-9 w-9 items-center justify-center', className)}    {...props}>;
    &#8230,;
  </span>;
    role="presentation";
    aria-hidden="true";
    className={cn("flex h-9 w-9 items-center justify-center", className)}

    {children || <ChevronRight className="h-4 w-4" />}
BreadcrumbSeparator && BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

  className;
}: React && React.ComponentProps<"span">) => (;

  <span

export {

  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink

    {...props}>;
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {;
  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator,;
  BreadcrumbEllipsis,;
};);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

  BreadcrumbSeparator;
  BreadcrumbEllipsis};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

  className,

}: React.ComponentProps<"span">) => (

    &#8230,
    aria - hidden="true";
    className={cn ("flex h - 9 w - 9 items - center justify - center", class_name)}
    className={cn ("[&>svg]:size - 3.5 text - zion - slate - light / 70", class_name)}
  </span>
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,

  BreadcrumbEllipsis}
;