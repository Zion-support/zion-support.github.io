import React from "react";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";

import React from "react",
import { cn } from "@/lib/utils",

=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarGroupLabel({
  className,
  children,
  ...props
}: SidebarGroupLabelProps) {
  return (
    <div
      className={cn(
        "px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
        className,
      )}
      {...props}
    >
      {children}
    </div>
<<<<<<< HEAD

import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;


import React from "react",
import { cn } from "@/lib/utils",


import {cn} from "@/lib/utils";
interface SidebarGroupLabelProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
}
      )}
      {...props}
    >;
      {children}


export function SidebarGroupLabel(): any ({ className, children, ...props }: SidebarGroupLabelProps) {;
  return (
    <div
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
      {...props}>;
      {children}
    </div>;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  );
}
    </div>);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarGroupLabel({ className, children, ...props } SidebarGroupLabelProps) {;
  return (;
    <div ;
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
  )
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroupLabel({ className, children, ...props }: SidebarGroupLabelProps) {;
  return (;
    <div;
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} ;
      {...props}
    >;
      {children}
    </div>;
  );
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
