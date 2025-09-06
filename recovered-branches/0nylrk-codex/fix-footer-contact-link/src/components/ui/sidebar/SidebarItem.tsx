

<<<<<<< HEAD

import React from "react",
import { cn } from "@/lib/utils",


=======
import React from "react",
import { cn } from "@/lib/utils",

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  className?: string;
  children?: React && React.ReactNode;
  active?: boolean;
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function SidebarItem(): any ({ className, children, active, ...props }: SidebarItemProps) {;

  return (
    <div

<<<<<<< HEAD

        "flex items-center px-3 py-2 text-sm font-medium rounded-md"
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground",


import React from "react",
import { cn } from "@/lib/utils",


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


export function SidebarItem(): any ({ className, children, active, ...props }: SidebarItemProps) {;
  return (
    <div
      className={cn(
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        "flex items-center px-3 py-2 text-sm font-medium rounded-md"
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground",
        className

      )}
      {...props}>;
      {children}

    </div>;
  );
}
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD

import React from "react",
import { cn } from "@/lib/utils",


=======
import React from "react",
import { cn } from "@/lib/utils",

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {cn} from "@/lib/utils";
interface SidebarItemProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
  active?: boolean;
}
  return (
    <div

      className={cn(
        className
      )}
      {...props}>;
      {children}
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
