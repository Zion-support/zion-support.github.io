
<<<<<<< HEAD
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
  ),;
=======
import React from "react",
import { cn } from "@/lib/utils",interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}

export function SidebarContent({ className, children, ...props }: SidebarContentProps) {
  return (
    <div className={cn(&quot;flex-1 px-2 py-4&quot;, className)} {...props}>
      {children}
import React from "react";

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarContent(_{_className, _children, _...props}: SidebarContentProps) {_return (
    <div className={cn("flex-1 px-2 py-4", _className)} {_...props}>
      {_children}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
