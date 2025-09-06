<<<<<<< HEAD
import {cn} from "@/lib/utils";
interface SidebarContentProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
}
export function SidebarContent(): any ({ className, children, ...props }: SidebarContentProps) {;
  return (
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}
    </div>;
  );
}
import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarContentProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarContent - Function description
 */
function SidebarContent() {
  return (
    <div className={cn ("flex - 1 px - 2 py - 4", class_name)} {...props}>;
      {children}
    </div>);
=======

import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarContent({ className, children, ...props } SidebarContentProps) {;
  return (;
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}
    </div>;
  ),; interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
children?: React.ReactNode 
}export function SidebarContent ({
  className, children, ...props 
}: SidebarContentProps) {
  return (<div className= {
  cn ("flex-1 px-2 py-4", className) 
}{
  ...props 
}> {
  children 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}