
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {ChevronRight} from "lucide-react"

import * as React from "react"

=======const Breadcrumb = React.forwardRef<;
  HTMLElement;

=======


const Breadcrumb = React.forwardRef<
  <nav
    ref={ref}
    aria-label="breadcrumb"
    className={cn(
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
=======      "inline-flex items-center gap-1 text-sm text-zion-slate-light"
      className
    )}
    {...props}

  />;
));
Breadcrumb && Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React && React.forwardRef<;

  />;
));
BreadcrumbList && BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React && React.forwardRef<;

const BreadcrumbLink = React && React.forwardRef<;


 


  BreadcrumbEllipsis}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
