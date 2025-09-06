<<<<<<< HEAD
import {cn} from "@/lib/utils";
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLLIElement> {;
  className?: string;
  children?: React && React.ReactNode;
}
import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLLIElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarMenuItem - Function description
 */
function SidebarMenuItem() {
  return (
    <li className={cn ("", class_name)} {...props}>;
      {children}
export function SidebarMenuItem(): any ({ className, children, ...props }: SidebarMenuItemProps) {;
  return (
    <li
      className={cn("", className)} 
      {...props}>;
      {children}
    </li>;
  );
}
    </li>);
}
=======

import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarMenuItem({ className, children, ...props } SidebarMenuItemProps) {;
  return (;
    <li ;
      className={cn("", className)} ;
      {...props}
    >;
      {children}
    </li>;
  ),;}
 interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
children?: React.ReactNode 
}className, children, ...props 
}: SidebarMenuItemProps) {
  return (<li className= {
  cn ("", className) 
}{
  ...props 
}> {
  children 
}</li>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
