
import React from "react",
import { cn } from "@/lib/utils",interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}

export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {
  return (
    <div className={cn(&quot;mb-4&quot;, className)} {...props}>
      {children}
import React from "react";

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarGroup(_{_className, _children, _...props}: SidebarGroupProps) {_return (
    <div className={cn("mb-4", _className)} {_...props}>
      {_children}
    </div>
  )
}
