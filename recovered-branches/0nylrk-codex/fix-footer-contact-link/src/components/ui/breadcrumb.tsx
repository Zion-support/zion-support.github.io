
<<<<<<< HEAD

import * as React from "react"

const Breadcrumb = React.forwardRef<;
  HTMLElement;
import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {ChevronRight} from "lucide-react"
<<<<<<< HEAD
<<<<<<< HEAD

  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  HTMLElement;
<<<<<<< HEAD
  React && React.ComponentPropsWithoutRef<"nav"> & {;
    separator?: React && React.ReactNode;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
const Breadcrumb = React.forwardRef<;
  HTMLElement;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Slot } from "@radix-ui/react-slot"
=======
import * as React from "react""
import {Slot} from "@radix-ui/react-slot""
import {ChevronRight} from "lucide-react"

"
import { Slot } from "@radix-ui/react-slot""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ChevronRight } from "lucide-react"
 "
import { cn } from "@/lib/utils"
 
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



const Breadcrumb = React.forwardRef<
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {ChevronRight} from "lucide-react";

import {cn} from "@/lib/utils";

const Breadcrumb = React && React.forwardRef<;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  HTMLElement;
=======
;
  HTMLElement;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  React && React.ComponentPropsWithoutRef<"nav"> & {;
    separator?: React && React.ReactNode;
  }
>(({ className, separator, ...props }, ref) => (;

 
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
>(({ className, separator, ...props }, ref) => (
    ref={ref}
=======


const Breadcrumb = React.forwardRef<
  HTMLElement,"
  React.ComponentPropsWithoutRef<"nav"> & {}
    separator?: React.ReactNode;
  }

  <nav;
    ref={ref}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    aria-label="breadcrumb"
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(



  HTMLOListElement;"
  React && React.ComponentPropsWithoutRef<"ol">;
>(({ className, ...props }, ref) => (;
  <ol;
"
Breadcrumb.displayName = "Breadcrumb";
 ;
const BreadcrumbList = React.forwardRef<;
  HTMLOListElement,;"
  React.ComponentPropsWithoutRef<"ol">;
>(({ className, ...props }, ref) => (;
  <ol;
    ref={ref}"
    className={cn("flex items-center gap-1 && 1.5", className)}
    {...props}

  HTMLLIElement;"
  React && React.ComponentPropsWithoutRef<"li">;
>(({ className, ...props }, ref) => (;
  <li;
"
BreadcrumbList.displayName = "BreadcrumbList";
 ;
const BreadcrumbItem = React.forwardRef<;
  HTMLLIElement,;"
  React.ComponentPropsWithoutRef<"li">;
>(({ className, ...props }, ref) => (;
  <li;
    ref={ref}"
    className={cn("inline-flex items-center gap-1 && 1.5", className)}
    {...props}

  HTMLAnchorElement;"
  React && React.ComponentPropsWithoutRef<"a"> & {;
    asChild?: boolean;
  }


<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======

import * as React from './react';'
import { Slot } from '@radix - ui / react - slot';'
import { ChevronRight } from './lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from '@/lib / utils';
const Breadcrumb = React.forward_ref<;
  HTMLElement;"
  React.ComponentPropsWithoutRef<"nav"> & {}
    separator?: React.ReactNode;
  }
>(({ class_name, separator, ...props }, ref) => (
  <nav;
    ref={ref}"
    aria - label="breadcrumb";
    className={cn ("
      "inline - flex items - center gap - 1 text - sm text - zion - slate - light";
      class_name)}
    {...props}
  />));"
Breadcrumb.display_name = "Breadcrumb";
const BreadcrumbList = React.forward_ref<;
  HTMLOListElement;"
  React.ComponentPropsWithoutRef<"ol">;
>(({ class_name, ...props }, ref) => (
  <ol;
    ref={ref}"
    className={cn ("flex items - center gap - 1.5", class_name)}
    {...props}
  />));"
BreadcrumbList.display_name = "BreadcrumbList";
const BreadcrumbItem = React.forward_ref<;
  HTMLLIElement;"
  React.ComponentPropsWithoutRef<"li">;
>(({ class_name, ...props }, ref) => (
  <li;
    ref={ref}"
    className={cn ("inline - flex items - center gap - 1.5", class_name)}
    {...props}
  />));"
BreadcrumbItem.display_name = "BreadcrumbItem";
const BreadcrumbLink = React.forward_ref<;
  HTMLAnchorElement;"
  React.ComponentPropsWithoutRef<"a"> & {}
    as_child?: boolean;
  }
>(({ class_name, as_child = false, ...props }, ref) => {"
  const Comp = as_child ? Slot : "a";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (

    <Comp;
      ref={ref}"
      className={cn ("transition - colors hover:text - zion - cyan", class_name)}
      {...props}



  children;
  className;
  ...props;"
}: React && React.ComponentProps<"span">) => (;
  <span"
    role="presentation""
    aria-hidden="true""
    className={cn("flex h-9 w-9 items-center justify-center", className)}
<<<<<<< HEAD
<<<<<<< HEAD

  class_name;
  ...props;
}: React.ComponentProps<"li">) =>: any (
  <li;
    role="presentation";
    aria - hidden="true";
    className={cn ("[&>svg]:size - 3.5 text - zion - slate - light / 70", class_name)}
    {...props}
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  >
    &#8230
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  >;
=======
  >;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  </span>);"
BreadcrumbEllipsis.display_name = "BreadcrumbElipssis";




export {};
    {...props}>;
    &#8230,;
  </span>;
);"
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";


export {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export {;
export {
 
export {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    className={cn(export {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    className={cn(export {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Breadcrumb;
  BreadcrumbList;
  BreadcrumbItem;
  BreadcrumbLink;
  BreadcrumbSeparator;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  BreadcrumbEllipsis}

export {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
<<<<<<< HEAD
<<<<<<< HEAD
  BreadcrumbSeparator,
<<<<<<< HEAD
<<<<<<< HEAD
  BreadcrumbEllipsis}
;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

 


  BreadcrumbEllipsis}


;
<<<<<<< HEAD
  BreadcrumbEllipsis}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  BreadcrumbSeparator,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  BreadcrumbSeparator,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
