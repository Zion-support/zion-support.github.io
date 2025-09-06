<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx


import * as React from "react"

=======

import * as React from "react"
<<<<<<< HEAD
import {Slot} from "@radix-ui/react-slot"
import {ChevronRight} from "lucide-react"

import {cn} from "@/lib/utils"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
const Breadcrumb = React.forwardRef<;
  HTMLElement;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from "lucide-react"
 
import { cn } from "@/lib/utils"
<<<<<<< HEAD
<<<<<<< HEAD

const Breadcrumb = React.forwardRef<
  HTMLElement,

  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
=======
 



const Breadcrumb = React.forwardRef<
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {ChevronRight} from "lucide-react";
import {cn} from "@/lib/utils";
const Breadcrumb = React && React.forwardRef<;
  HTMLElement;
  React && React.ComponentPropsWithoutRef<"nav"> & {;
    separator?: React && React.ReactNode;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
>(({ className, separator, ...props }, ref) => (;
=======
 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const Breadcrumb = React.forwardRef<
  HTMLElement,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  <nav
    ref={ref}
    aria-label="breadcrumb"
    className={cn(
<<<<<<< HEAD
      "inline-flex items-center gap-1 text-sm text-zion-slate-light"
      className
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    )}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
  />;
));
<<<<<<< HEAD
Breadcrumb && Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React && React.forwardRef<;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
  HTMLOListElement;
  React && React.ComponentPropsWithoutRef<"ol">;
>(({ className, ...props }, ref) => (;
  <ol
=======
Breadcrumb.displayName = "Breadcrumb";
 ;
const BreadcrumbList = React.forwardRef<;
  HTMLOListElement,;
  React.ComponentPropsWithoutRef<"ol">;
>(({ className, ...props }, ref) => (;
  <ol;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    ref={ref}
    className={cn("flex items-center gap-1 && 1.5", className)}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
  />;
));
<<<<<<< HEAD
BreadcrumbList && BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React && React.forwardRef<;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
  HTMLLIElement;
  React && React.ComponentPropsWithoutRef<"li">;
>(({ className, ...props }, ref) => (;
  <li
=======
BreadcrumbList.displayName = "BreadcrumbList";
 ;
const BreadcrumbItem = React.forwardRef<;
  HTMLLIElement,;
  React.ComponentPropsWithoutRef<"li">;
>(({ className, ...props }, ref) => (;
  <li;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    ref={ref}
    className={cn("inline-flex items-center gap-1 && 1.5", className)}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
  />;
));
<<<<<<< HEAD
BreadcrumbItem && BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React && React.forwardRef<;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
  HTMLAnchorElement;
  React && React.ComponentPropsWithoutRef<"a"> & {;
    asChild?: boolean;
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

>(({ className, asChild = false, ...props }, ref) => {;
  const Comp = asChild ? Slot : "a";


=======
========
>(({ className, asChild = false, ...props }, ref) => {;
  const Comp = asChild ? Slot : "a";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
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
  return (
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Comp;
      ref={ref}
      className={cn ("transition - colors hover:text - zion - cyan", class_name)}
      {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

    />);
});
BreadcrumbLink.display_name = "BreadcrumbLink";

========
<<<<<<< HEAD
    />);
});
BreadcrumbLink.display_name = "BreadcrumbLink";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
const BreadcrumbSeparator = ({
    />;
  );
});
BreadcrumbLink && BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbSeparator = ({;
  children;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
  >;
    {children || <ChevronRight className="h-4 w-4" />}
  </li>;
);
<<<<<<< HEAD
BreadcrumbSeparator && BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
  className;
  ...props;
}: React && React.ComponentProps<"span">) => (;
  <span
    role="presentation"
    aria-hidden="true"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
    className={cn("flex h-9 w-9 items-center justify-center", className)}

========
=======
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
 ;
const BreadcrumbEllipsis = ({;
  className,;
  ...props;
} React.ComponentProps<"span">) => (;
  <span;
    role="presentation";
    aria-hidden="true";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    className={cn("flex h-9 w-9 items-center justify-center", className)}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
  class_name;
  ...props;
}: React.ComponentProps<"li">) =>: any (
  <li;
    role="presentation";
    aria - hidden="true";
    className={cn ("[&>svg]:size - 3.5 text - zion - slate - light / 70", class_name)}
    {...props}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  >
    &#8230
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
<<<<<<< HEAD

=======
  >;
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
export {
    {...props}>;
    &#8230,;
  </span>;
);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
export {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
=======
<<<<<<< HEAD
export {
<<<<<<< HEAD
=======
 
<<<<<<< HEAD
export {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Breadcrumb;
  BreadcrumbList;
  BreadcrumbItem;
  BreadcrumbLink;
  BreadcrumbSeparator;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx

<<<<<<< HEAD
=======
<<<<<<< HEAD
  BreadcrumbEllipsis}

=======
=======
=======
export {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
<<<<<<< HEAD

  BreadcrumbEllipsis}
;

=======
=======

 


  BreadcrumbEllipsis}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  BreadcrumbEllipsis}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/breadcrumb.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  BreadcrumbEllipsis}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
