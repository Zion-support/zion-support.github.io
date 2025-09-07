<<<<<<< HEAD

<<<<<<< HEAD
import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {ChevronRight} from "lucide-react"

import {cn} from "@/lib/utils"
const Breadcrumb = React.forwardRef<;
  HTMLElement;
const Breadcrumb = React.forwardRef<;
  HTMLElement;
=======

import * as React from "react

const Breadcrumb = React.forwardRef<;
  HTMLElement;

import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {ChevronRight} from "lucide-react"

import {cn} from "@/lib/utils"
const Breadcrumb = React.forwardRef<;
  HTMLElement;
const Breadcrumb = React.forwardRef<;
  HTMLElement;
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Slot } from "@radix-ui/react-slot"

import { ChevronRight } from "lucide-react"
 "
import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
<<<<<<< HEAD

=======
<<<<<<< HEAD
 
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref) => (
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {ChevronRight} from "lucide-react";

import {cn} from "@/lib/utils";

const Breadcrumb = React && React.forwardRef<;

  HTMLElement;

  React && React.ComponentPropsWithoutRef<"nav"> & {;
    separator?: React && React.ReactNode;
  }
>(({ className, separator, ...props }, ref) => (;
<<<<<<< HEAD
<<<<<<< HEAD
 
=======

>>>>>>> origin/chore/fix-lint-and-merge
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<nav"> & {
    separator?: React.ReactNode

  }
>(({ className, separator, ...props }, ref) => (
>(({ className, separator, ...props }, ref) => (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  <nav
    ref={ref}

    aria-label="breadcrumb"
<<<<<<< HEAD

=======
    className={cn(
<<<<<<< HEAD

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "lucide-react";
 ;
import { cn } from "@/lib/utils";
 ;
const Breadcrumb = React.forwardRef<;
  HTMLElement,;
  React.ComponentPropsWithoutRef<"nav"> & {;
    separator?:React.ReactNode;  }
>(({ className, separator, ...props }, ref) => (;
  <nav;
    ref={ref}
    aria-label="breadcrumb";
    className={cn(;
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",;
      className;
    )}
    {...props}
  />;
));
=======
      "inline-flex items-center gap-1 text-sm text-zion-slate-light"
      className
    )}
    {...props}

  />;
));
Breadcrumb && Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React && React.forwardRef<;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  HTMLOListElement;
  React && React.ComponentPropsWithoutRef<"ol">;
>(({ className, ...props }, ref) => (;
  <ol
<<<<<<< HEAD
Breadcrumb.displayName = "Breadcrumb";
 ;
const BreadcrumbList = React.forwardRef<;
  HTMLOListElement,;
  React.ComponentPropsWithoutRef<"ol">;
>(({ className, ...props }, ref) => (;
  <ol;
    ref={ref}
    className={cn("flex items-center gap-1 && 1.5", className)}
    {...props}
  />;
));
=======
    ref={ref}
    className={cn("flex items-center gap-1 && 1.5", className)}
    {...props}

  />;
));
BreadcrumbList && BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React && React.forwardRef<;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  HTMLLIElement;
  React && React.ComponentPropsWithoutRef<"li">;
>(({ className, ...props }, ref) => (;
  <li
<<<<<<< HEAD
BreadcrumbList.displayName = "BreadcrumbList";
 ;
const BreadcrumbItem = React.forwardRef<;
  HTMLLIElement,;
  React.ComponentPropsWithoutRef<"li">;
>(({ className, ...props }, ref) => (;
  <li;
    ref={ref}
    className={cn("inline-flex items-center gap-1 && 1.5", className)}
    {...props}
  />;
));
=======
    ref={ref}
    className={cn("inline-flex items-center gap-1 && 1.5", className)}
    {...props}

  />;
));
BreadcrumbItem && BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React && React.forwardRef<;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  HTMLAnchorElement;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  React && React.ComponentPropsWithoutRef<"a"> & {;
    asChild?: boolean;
  }
<<<<<<< HEAD
>(({ className, asChild = false, ...props }, ref) => {;
  const Comp = asChild ? Slot : "a";
=======

<<<<<<< HEAD
=======
>(({ className, asChild = false, ...props }, ref) => {;
  const Comp = asChild ? Slot : "a";


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import * as React from './react';
import { Slot } from '@radix - ui / react - slot';
import { ChevronRight } from './lucide-react';

import { cn } from '@/lib / utils';
const Breadcrumb = React.forward_ref<;
  HTMLElement;"
  React.ComponentPropsWithoutRef<"nav"> & {}

    separator?: React.ReactNode;
  }
>(({ class_name, separator, ...props }, ref) => (
  <nav;
<<<<<<< HEAD

  return (

=======
    ref={ref}
    aria - label="breadcrumb";
    className={cn (
      "inline - flex items - center gap - 1 text - sm text - zion - slate - light";
      class_name)}
    {...props}
  />));
Breadcrumb.display_name = "Breadcrumb";
const BreadcrumbList = React.forward_ref<;
  HTMLOListElement;
  React.ComponentPropsWithoutRef<"ol">;
>(({ class_name, ...props }, ref) => (
  <ol;
    ref={ref}
    className={cn ("flex items - center gap - 1.5", class_name)}
    {...props}
  />));
BreadcrumbList.display_name = "BreadcrumbList";
const BreadcrumbItem = React.forward_ref<;
  HTMLLIElement;
  React.ComponentPropsWithoutRef<"li">;
>(({ class_name, ...props }, ref) => (
  <li;
    ref={ref}
    className={cn ("inline - flex items - center gap - 1.5", class_name)}
    {...props}
  />));
BreadcrumbItem.display_name = "BreadcrumbItem";
const BreadcrumbLink = React.forward_ref<;
  HTMLAnchorElement;
  React.ComponentPropsWithoutRef<"a"> & {
    as_child?: boolean;
  }
>(({ class_name, as_child = false, ...props }, ref) => {
  const Comp = as_child ? Slot : "a";
<<<<<<< HEAD
  return (
BreadcrumbItem.displayName = "BreadcrumbItem";
 ;
const BreadcrumbLink = React.forwardRef<;
  HTMLAnchorElement,;
  React.ComponentPropsWithoutRef<"a"> & {;
    asChild?:boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {;
  const Comp = asChild ? Slot :"a";
 ;
  return (;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <Comp;
      ref={ref}"
      className={cn ("transition - colors hover:text - zion - cyan", class_name)}
      {...props}
<<<<<<< HEAD
    />;
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
 ;
const BreadcrumbSeparator = ({;
  children,;
  className,;
  ...props;
} React.ComponentProps<"li">) => (;
  <li;
    role="presentation";
    aria-hidden="true";
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}
=======

  children;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  >;
    {children || <ChevronRight className="h-4 w-4" />}
  </li>;
);
<<<<<<< HEAD
  className;
  ...props;
}: React && React.ComponentProps<"span">) => (;
  <span
    role="presentation"
    aria-hidden="true"
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
 ;
const BreadcrumbEllipsis = ({;
  className,;
  ...props;
} React.ComponentProps<"span">) => (;
  <span;
    role="presentation";
    aria-hidden="true";
    className={cn("flex h-9 w-9 items-center justify-center", className)}
  class_name;
  ...props;
}: React.ComponentProps<"li">) =>: any (
  <li;
    role="presentation";
    aria - hidden="true";
    className={cn ("[&>svg]:size - 3.5 text - zion - slate - light / 70", class_name)}
    {...props}
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
      className
    )}
    {...props}
  />
))
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
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}
  >
    {children |<ChevronRight className="h-4 w-4" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
=======
BreadcrumbSeparator && BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  className;
  ...props;"
}: React && React.ComponentProps<"span">) => (;
<<<<<<< HEAD
  <span"
    role="presentation""
    aria-hidden="true""
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  <span
    role="presentation"
    aria-hidden="true"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    className={cn("flex h-9 w-9 items-center justify-center", className)}
<<<<<<< HEAD
    {...props}
  >
    &#8230
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
=======

<<<<<<< HEAD
  >
    &#8230
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

    {children || <ChevronRight className="h - 4 w - 4" />}
  </li>);"
BreadcrumbSeparator.display_name = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({}
  class_name;
  ...props;"
}: React.ComponentProps<"span">) =>: any (
  <span;"
    role="presentation";"
    aria - hidden="true";"

    className={cn ("flex h - 9 w - 9 items - center justify - center", class_name)}
    {...props}
  >;
    &#8230,

export {;
export {
 
export {;
<<<<<<< HEAD
export {;
=======

>>>>>>> origin/chore/fix-lint-and-merge
=======
  class_name;
  ...props;
}: React.ComponentProps<"li">) =>: any (
  <li;
    role="presentation";
    aria - hidden="true";
    className={cn ("[&>svg]:size - 3.5 text - zion - slate - light / 70", class_name)}
    {...props}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  >;
export {
    {...props}>;
    &#8230,;
  </span>;
);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
export {;
<<<<<<< HEAD
export {
 
export {;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Breadcrumb;
  BreadcrumbList;
  BreadcrumbItem;
  BreadcrumbLink;
  BreadcrumbSeparator;
<<<<<<< HEAD
  BreadcrumbEllipsis}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
  BreadcrumbEllipsis}

export {

>>>>>>> origin/chore/fix-lint-and-merge
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
<<<<<<< HEAD
  BreadcrumbSeparator,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

 


  BreadcrumbEllipsis}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  BreadcrumbEllipsis}
    &#8230,;
  </span>;
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
 ;
export {;
  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator,;
  BreadcrumbEllipsis} const Breadcrumb = React.forwardRef< HTMLElement;
) 
}{
  ...props 
}/>) ) Breadcrumb.displayName = "Breadcrumb" const BreadcrumbList = React.forwardRef< HTMLOListElement;
/>) ) BreadcrumbList.displayName = "BreadcrumbList" const BreadcrumbItem = React.forwardRef< HTMLLIElement;
/>) ) BreadcrumbItem.displayName = "BreadcrumbItem" const BreadcrumbLink = React.forwardRef< HTMLAnchorElement;
return (<Comp ref= {
  ref 
}/>) 
}) BreadcrumbLink.displayName = "BreadcrumbLink" </li>) BreadcrumbSeparator.displayName = "BreadcrumbSeparator" > &#8230;
</span>) BreadcrumbEllipsis.displayName = "BreadcrumbElipssis" export {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbEllipsis 
}
  BreadcrumbEllipsis}
;
  BreadcrumbEllipsis}
;
<<<<<<< HEAD
;
=======

  BreadcrumbEllipsis}
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
