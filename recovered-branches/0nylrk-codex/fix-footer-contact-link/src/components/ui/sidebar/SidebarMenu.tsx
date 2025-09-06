
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",
import { cn } from "@/lib/utils",


<<<<<<< HEAD
=======
=======
import React from "react";
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarMenu({
  className
  children
  ...props
}: SidebarMenuProps) {
  return (

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {cn} from "@/lib/utils";
interface SidebarMenuProps extends React && React.HTMLAttributes<HTMLUListElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
}
<<<<<<< HEAD

import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarMenuProps extends React.HTMLAttributes < HTMLUListElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarMenu - Function description
 */
function SidebarMenu() {
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  return (
    <ul className={cn ("space - y-1", class_name)} {...props}>;
      {children}
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function SidebarMenu(): any ({ className, children, ...props }: SidebarMenuProps) {;
  return (
    <ul
      className={cn("space-y-1", className)} 
      {...props}>;
      {children}
    </ul>;
  );
  return (

    <ul 
      className={cn("space-y-1", className)} 
    <ul 
      className={cn("space-y-1", className)} 

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
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {;
  return (;
    <ul;
      className={cn("space-y-1", className)} ;
      {...props}
    >;
      {children}
    </ul>;
  );
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
