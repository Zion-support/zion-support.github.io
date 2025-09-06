<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

import * as React from "react"

const Breadcrumb = React.forwardRef<;
  HTMLElement;

=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {ChevronRight} from "lucide-react"

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {cn} from "@/lib/utils"
const Breadcrumb = React.forwardRef<;
  HTMLElement;
const Breadcrumb = React.forwardRef<;
  HTMLElement;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from "lucide-react"
 
import { cn } from "@/lib/utils"
 
<<<<<<< HEAD
=======
<<<<<<< HEAD



const Breadcrumb = React.forwardRef<
<<<<<<< HEAD
=======
import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {ChevronRight} from "lucide-react";

import {cn} from "@/lib/utils";

const Breadcrumb = React && React.forwardRef<;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  HTMLElement;
  React && React.ComponentPropsWithoutRef<"nav"> & {;
    separator?: React && React.ReactNode;
  }
>(({ className, separator, ...props }, ref) => (;
=======
 
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
<<<<<<< HEAD
>(({ className, separator, ...props }, ref) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>(({ className, separator, ...props }, ref) => (;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  <nav
    ref={ref}
    aria-label="breadcrumb"
    className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      "inline-flex items-center gap-1 text-sm text-zion-slate-light"
      className
    )}
    {...props}

  />;
));
Breadcrumb && Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React && React.forwardRef<;

=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  HTMLOListElement;
  React && React.ComponentPropsWithoutRef<"ol">;
>(({ className, ...props }, ref) => (;
  <ol
<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn("flex items-center gap-1 && 1.5", className)}
    {...props}

  />;
));
BreadcrumbList && BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React && React.forwardRef<;

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
  />;
));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  HTMLLIElement;
  React && React.ComponentPropsWithoutRef<"li">;
>(({ className, ...props }, ref) => (;
  <li
<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn("inline-flex items-center gap-1 && 1.5", className)}
    {...props}

  />;
));
BreadcrumbItem && BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React && React.forwardRef<;

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
  />;
));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  HTMLAnchorElement;
  React && React.ComponentPropsWithoutRef<"a"> & {;
    asChild?: boolean;
  }
<<<<<<< HEAD
<<<<<<< HEAD

>(({ className, asChild = false, ...props }, ref) => {;
  const Comp = asChild ? Slot : "a";


=======
=======
>(({ className, asChild = false, ...props }, ref) => {;
  const Comp = asChild ? Slot : "a";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import * as React from './react';
import { Slot } from '@radix - ui / react - slot';
import { ChevronRight } from './lucide-react';
import { cn } from '@/lib / utils';
const Breadcrumb = React.forward_ref<;
  HTMLElement;
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ class_name, separator, ...props }, ref) => (
  <nav;
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Comp;
      ref={ref}
      className={cn ("transition - colors hover:text - zion - cyan", class_name)}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD

    />);
});
BreadcrumbLink.display_name = "BreadcrumbLink";

const BreadcrumbSeparator = ({
=======
    />;
  );
});
BreadcrumbLink && BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbSeparator = ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  children;
  className;
  ...props;
}: React && React.ComponentProps<"span">) => (;
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
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
BreadcrumbEllipsis.display_name = "BreadcrumbElipssis";

<<<<<<< HEAD
=======
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
  >;
    {children || <ChevronRight className="h-4 w-4" />}
  </li>;
);
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
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    &#8230
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
  >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export {
    {...props}>;
    &#8230,;
  </span>;
);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
<<<<<<< HEAD
<<<<<<< HEAD

export {;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export {;
export {
 
export {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  Breadcrumb;
  BreadcrumbList;
  BreadcrumbItem;
  BreadcrumbLink;
  BreadcrumbSeparator;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
  BreadcrumbEllipsis}

export {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

 


  BreadcrumbEllipsis}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
