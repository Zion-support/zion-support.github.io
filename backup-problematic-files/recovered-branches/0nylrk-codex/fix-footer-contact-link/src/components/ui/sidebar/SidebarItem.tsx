<<<<<<< HEAD
import {cn} from "@/lib/utils";
interface SidebarItemProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
  active?: boolean;
}
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
