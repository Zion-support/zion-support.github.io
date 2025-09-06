import React from "react";
import { cn } from "@/lib/utils";
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenu({
  className,
  children,
  ...props
}: SidebarMenuProps) {
  return (
    <ul className={cn("space-y-1", className)} {...props}>
      {children}
    </ul>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </ul>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarMenu({ className, children, ...props } SidebarMenuProps) {;
  return (;
    <ul ;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <ul className={cn("space-y-1", className)} {...props}>
      {children}
    </ul>
    <ul 
      className={cn("space-y-1", className)} 
    <ul 
      className={cn("space-y-1", className)} 
      {...props}
    >
      {children}
    </ul>
  )
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {;


import React from "react",
import { cn } from "@/lib/utils",


import {cn} from "@/lib/utils";
interface SidebarMenuProps extends React && React.HTMLAttributes<HTMLUListElement> {;
  className?: string;
  children?: React && React.ReactNode;
}
  return (
    <ul className={cn ("space - y-1", class_name)} {...props}>;
      {children}
    </ul>);
}
<<<<<<< HEAD
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
