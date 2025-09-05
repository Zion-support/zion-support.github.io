
<<<<<<< HEAD
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from 'lucide-react';
 ;
import { cn } from "@/lib/utils";
 ;
const Breadcrumb = React.forwardRef<;
  HTMLElement,;
  React.ComponentPropsWithoutRef<"nav"> & {;
    separator?:React.ReactNode;
=======
import * as React from &quot;react&quot;
import { Slot } from &quot;@radix-ui/react-slot&quot;
import { ChevronRight } from 'lucide-react'
 
import { cn } from &quot;@/lib/utils&quot; 
const _Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<&quot;nav&quot;> & {
    separator?: React.ReactNode
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
>(({ className, separator, ...props }, ref) => (;
  <nav;
    ref={ref}
<<<<<<< HEAD
    aria-label="breadcrumb";
    className={cn(;
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",;
      className;
    )}
    {...props}
  />;
));
Breadcrumb.displayName = "Breadcrumb";
 ;
const BreadcrumbList = React.forwardRef<;
  HTMLOListElement,;
  React.ComponentPropsWithoutRef<"ol">;
>(({ className, ...props }, ref) => (;
  <ol;
    ref={ref}
    className={cn("flex items-center gap-1.5", className)}
    {...props}
  />;
));
BreadcrumbList.displayName = "BreadcrumbList";
 ;
const BreadcrumbItem = React.forwardRef<;
  HTMLLIElement,;
  React.ComponentPropsWithoutRef<"li">;
>(({ className, ...props }, ref) => (;
  <li;
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />;
));
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
    <Comp;
      ref={ref}
      className={cn("transition-colors hover:text-zion-cyan", className)}
      {...props}
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
    {...props}
  >;
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
  BreadcrumbEllipsis}
=======
    aria-label=&quot;breadcrumb&quot;
    className={cn(
      &quot;inline-flex items-center gap-1 text-sm text-zion-slate-light&quot;,
      className    )}
    {_...props}
  />
))
Breadcrumb.displayName = &quot;Breadcrumb&quot;
 
const _BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<&quot;ol&quot;>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(&quot;flex items-center gap-1.5&quot;, className)}
    {...props}  />
))
BreadcrumbList.displayName = &quot;BreadcrumbList&quot;
 
const _BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<&quot;li&quot;>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(&quot;inline-flex items-center gap-1.5&quot;, className)}
    {...props}  />
))
BreadcrumbItem.displayName = &quot;BreadcrumbItem&quot;
 
const _BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<&quot;a&quot;> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : &quot;a&quot; 
  return (
    <Comp
      ref={ref}
      className={cn(&quot;transition-colors hover:text-zion-cyan&quot;, className)}
      {...props}    />
  )
})
BreadcrumbLink.displayName = &quot;BreadcrumbLink&quot;
 
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<&quot;li&quot;>) => (
  <li
    role=&quot;presentation&quot;
    aria-hidden=&quot;true&quot;
    className={cn(&quot;[&>svg]:size-3.5 text-zion-slate-light/70&quot;, className)}
    {...props}
  >
    {children || <ChevronRight className=&quot;h-4 w-4&quot; />}  </li>
)
BreadcrumbSeparator.displayName = &quot;BreadcrumbSeparator&quot;
 
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<&quot;span&quot;>) => (
  <span
    role=&quot;presentation&quot;
    aria-hidden=&quot;true&quot;
    className={cn(&quot;flex h-9 w-9 items-center justify-center&quot;, className)}
    {...props}  >
    &#8230,
  </span>
)
BreadcrumbEllipsis.displayName = &quot;BreadcrumbElipssis&quot;
 
export {_Breadcrumb, _BreadcrumbList, _BreadcrumbItem, _BreadcrumbLink, _BreadcrumbSeparator, _BreadcrumbEllipsis}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
