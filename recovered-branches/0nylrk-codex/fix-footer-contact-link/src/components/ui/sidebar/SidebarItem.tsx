<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/SidebarItem.tsx


<<<<<<< HEAD
import {cn} from "@/lib/utils";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import React from "react",
import { cn } from "@/lib/utils",

<<<<<<< HEAD
=======

import React from "react";
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode,
  active?: boolean
}
export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
  return (
    <div

<<<<<<< HEAD
      className={cn(

=======

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/SidebarItem.tsx
import {cn} from "@/lib/utils";
interface SidebarItemProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
  active?: boolean;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/SidebarItem.tsx


export function SidebarItem(): any ({ className, children, active, ...props }: SidebarItemProps) {;

  return (
    <div


        "flex items-center px-3 py-2 text-sm font-medium rounded-md"
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground",

========
export function SidebarItem(): any ({ className, children, active, ...props }: SidebarItemProps) {;
  return (
    <div
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md"
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground",
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/SidebarItem.tsx
        className
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
      {...props}>;
      {children}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/SidebarItem.tsx

    </div>;
  );
}

=======
========
    </div>;
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/SidebarItem.tsx
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
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
