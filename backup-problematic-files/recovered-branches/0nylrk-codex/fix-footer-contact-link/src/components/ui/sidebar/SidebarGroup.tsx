<<<<<<< HEAD
import {cn} from "@/lib/utils";
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
}
export function SidebarGroup(): any ({ className, children, ...props }: SidebarGroupProps) {;
  return (
    <div className={cn("mb-4", className)} {...props}>;
      {children}
    </div>;
  );
}
import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarGroup - Function description
 */
function SidebarGroup() {
  return (
    <div className={cn ("mb - 4", class_name)} {...props}>;
      {children}
    </div>);
=======

import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarGroup({ className, children, ...props } SidebarGroupProps) {;
  return (;
    <div className={cn("mb-4", className)} {...props}>;
      {children}
    </div>;
  ),; interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
children?: React.ReactNode 
}export function SidebarGroup ({
  className, children, ...props 
}: SidebarGroupProps) {
  return (<div className= {
  cn ("mb-4", className) 
}{
  ...props 
}> {
  children 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}