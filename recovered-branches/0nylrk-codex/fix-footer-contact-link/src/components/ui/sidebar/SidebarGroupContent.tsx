
<<<<<<< HEAD
import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarGroupContent({ className, children, ...props } SidebarGroupContentProps) {;
  return (;
    <div className={cn("space-y-1", className)} {...props}>;
      {children}
    </div>;
  ),;
=======
import React from "react",
import { cn } from "@/lib/utils",interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}

export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {
  return (
    <div className={cn(&quot;space-y-1&quot;, className)} {...props}>
      {children}
import React from "react";

interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarGroupContent(_{_className, _children, _...props}: SidebarGroupContentProps) {_return (
    <div className={cn("space-y-1", _className)} {_...props}>
      {_children}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
