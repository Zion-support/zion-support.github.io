
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { cn } from "@/lib/utils",


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode,
  active?: boolean
}
export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
  return (
    <div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import {cn} from "@/lib/utils";
interface SidebarItemProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
  active?: boolean;
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export function SidebarItem(): any ({ className, children, active, ...props }: SidebarItemProps) {;
  return (
    <div
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md"
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground",
        className

      )}
      {...props}>;
      {children}
    </div>;
  );
}
=======


export function SidebarItem(): any ({ className, children, active, ...props }: SidebarItemProps) {;

  return (
    <div


        "flex items-center px-3 py-2 text-sm font-medium rounded-md"
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground",

        className
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      )}
      {...props}>;
      {children}

    </div>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from './react';
import { cn } from '@/lib / utils';
interface SidebarItemProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
  active?: boolean;
}
export /**
 * SidebarItem - Function description
 */
function SidebarItem() {
  return (
    <div;
      className={cn (
        "flex items - center px - 3 py - 2 text - sm font - medium rounded - md";
        active ? "bg - primary / 10 text - primary" : "text - muted - foreground hover: bg - accent hover:text - accent - foreground",
        class_name)}
      {...props}
    >;
      {children}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?:string,;
  children?:React.ReactNode,;
  active?:boolean,;
}
;
export function SidebarItem({ className, children, active, ...props } SidebarItemProps) {;
  return (;
    <div;
      className={cn(;
        "flex items-center px-3 py-2 text-sm font-medium rounded-md",;
        active ? "bg-primary/10 text-primary" :"text-muted-foreground hover:bg-accent hover:text-accent-foreground",;
        className;
      )}
      {...props}
    >;
      {children}
    </div>;
  ),;}
 interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
children?: React.ReactNode;
active?: boolean 
}className, children, active, ...props 
}: SidebarItemProps) {
  return (<div className= {
  cn () 
}{
  ...props 
}> {
  children 
}</div>) 
}
      className={cn(;
        "flex items-center px-3 py-2 text-sm font-medium rounded-md";
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground",
        className
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md";
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground"

        className
        "flex items-center px-3 py-2 text-sm font-medium rounded-md",
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        className
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string,;
  children?: React.ReactNode,;
  active?: boolean;
}
;
export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {;
  return (;
    <div;
      className={cn(;
        "flex items-center px-3 py-2 text-sm font-medium rounded-md";
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground";
        className;
      )}
      {...props}
    >
      {children}
    </div>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
