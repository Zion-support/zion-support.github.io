

import * as React from "react""
const Breadcrumb = React.forwardRef<;
  HTMLElement;
"
import * as React from "react"""
import {Slot} from "@radix-ui/react-slot"""
import {ChevronRight} from "lucide-react"""
import {cn} from "@/lib/utils""
const Breadcrumb = React.forwardRef<;
  HTMLElement;
const Breadcrumb = React.forwardRef<;
  HTMLElement;"
import { Slot } from "@radix-ui/react-slot"""
import { ChevronRight } from "lucide-react"""
import { cn } from "@/lib/utils""
const Breadcrumb = React.forwardRef<
  HTMLElement;"
  React && React.ComponentPropsWithoutRef<"nav"> & {;"
    separator?: React && React.ReactNode;
  }
>(({ className, separator, ...props }, ref) => (;
 
const Breadcrumb = React.forwardRef<
  HTMLElement,"
  React.ComponentPropsWithoutRef<"nav"> & {"
    separator?: React.ReactNode;
  })
>(({ className, separator, ...props }, ref) => ()
>(({ className, separator, ...props }, ref) => (;
  <nav;
    ref={ref}"
    aria-label="breadcrumb""
    className={cn("
      "inline-flex items-center gap-1 text-sm text-zion-slate-light""
      className;)
    )}
    {...props}

  />;
</nav>
const BreadcrumbList = React && React.forwardRef<;

  HTMLOListElement;"
  React && React.ComponentPropsWithoutRef<"ol">;"
>(({ className, ...props }, ref) => (;
  <ol;
    ref={ref})"
    className={cn("flex items-center gap-1 && 1.5", className)}"
    {...props}

  />;
</ol>
const BreadcrumbItem = React && React.forwardRef<;
"
Breadcrumb.displayName = "Breadcrumb";"
 ;
const BreadcrumbList = React.forwardRef<;
  HTMLOListElement,;"
  React.ComponentPropsWithoutRef<"ol">;"
>(({ className, ...props }, ref) => (;
  <ol;
    ref={ref})"
    className={cn("flex items-center gap-1 && 1.5", className)}"
    {...props}
  />;
</ol>"
  React && React.ComponentPropsWithoutRef<"li">;"
>(({ className, ...props }, ref) => (;
  <li;
    ref={ref})"
    className={cn("inline-flex items-center gap-1 && 1.5", className)}"
    {...props}

  />;
</li>
const BreadcrumbLink = React && React.forwardRef<;
"
BreadcrumbList.displayName = "BreadcrumbList";"
 ;
const BreadcrumbItem = React.forwardRef<;
  HTMLLIElement,;"
  React.ComponentPropsWithoutRef<"li">;"
>(({ className, ...props }, ref) => (;
  <li;
    ref={ref})"
    className={cn("inline-flex items-center gap-1 && 1.5", className)}"
    {...props}
  />;
</li>"
  React && React.ComponentPropsWithoutRef<"a"> & {;"
    asChild?: boolean;
  }

>(({ className, asChild = false, ...props }, ref) => {;"
  const Comp = asChild ? Slot : "a";""
import * as React from './react';''
import { Slot } from '@radix - ui / react - slot';''
import { ChevronRight } from './lucide-react';''
import { cn } from '@/lib / utils';'
const Breadcrumb = React.forward_ref<;
  HTMLElement;'
  React.ComponentPropsWithoutRef<"nav"> & {"
    separator?: React.ReactNode;
  }
>(({ class_name, separator, ...props }, ref) => (
  <nav;
    ref={ref}"
    aria - label="breadcrumb";"
    className={cn ("
      "inline - flex items - center gap - 1 text - sm text - zion - slate - light";")
      class_name)}
    {...props}
  />));
</nav>
const BreadcrumbList = React.forward_ref<;
  HTMLOListElement;"
  React.ComponentPropsWithoutRef<"ol">;"
>(({ class_name, ...props }, ref) => (
  <ol;
    ref={ref})"
    className={cn ("flex items - center gap - 1.5", class_name)}"
    {...props}
  />));
</ol>
const BreadcrumbItem = React.forward_ref<;
  HTMLLIElement;"
  React.ComponentPropsWithoutRef<"li">;"
>(({ class_name, ...props }, ref) => (
  <li;
    ref={ref})"
    className={cn ("inline - flex items - center gap - 1.5", class_name)}"
    {...props}
  />));
</li>
const BreadcrumbLink = React.forward_ref<;
  HTMLAnchorElement;"
  React.ComponentPropsWithoutRef<"a"> & {"
    as_child?: boolean;
  }
>(({ class_name, as_child = false, ...props }, ref) => {"
  const Comp = as_child ? Slot : "a";"
  return (
  return ("
BreadcrumbItem.displayName = "BreadcrumbItem";"
 ;
const BreadcrumbLink = React.forwardRef<;
  HTMLAnchorElement,;"
  React.ComponentPropsWithoutRef<"a"> & {;"
    asChild?:boolean;
  })
>(({ className, asChild = false, ...props }, ref) => {;"
  const Comp = asChild ? Slot :"a";"
 ;
  return (;
  return (
    <Comp;
      ref={ref})"
      className={cn ("transition - colors hover:text - zion - cyan", class_name)}"
      {...props}

    />);
</Comp>"
}: React && React.ComponentProps<"span">) => (;"
  <span;"
    role="presentation"""
    aria-hidden="true"")"
    className={cn("flex h-9 w-9 items-center justify-center", className)}"
  >;
</span>"
    {children || <ChevronRight className="h - 4 w - 4" />}"
</ChevronRight>
  </li>);"
}: React.ComponentProps<"span">) =>: any ("
  <span;"
    role="presentation";""
    aria - hidden="true";")"
    className={cn ("flex h - 9 w - 9 items - center justify - center", class_name)}"
    {...props}
  >;
</span>
  </span>);
  </span>;
  </span>;
  BreadcrumbEllipsis} const Breadcrumb = React.forwardRef< HTMLElement;
) 
}{
  ...props;"
}/>) ) Breadcrumb.displayName = "Breadcrumb" const BreadcrumbList = React.forwardRef< HTMLOListElement;""
/>) ) BreadcrumbList.displayName = "BreadcrumbList" const BreadcrumbItem = React.forwardRef< HTMLLIElement;""
/>) ) BreadcrumbItem.displayName = "BreadcrumbItem" const BreadcrumbLink = React.forwardRef< HTMLAnchorElement;"
return (<Comp ref= {
  ref;)
}/>) 
</Comp>"
}) BreadcrumbLink.displayName = "BreadcrumbLink" </li>) BreadcrumbSeparator.displayName = "BreadcrumbSeparator" > &#8230;""
</span>) BreadcrumbEllipsis.displayName = "BreadcrumbElipssis" export {""