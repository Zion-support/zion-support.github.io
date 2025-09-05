
<<<<<<< HEAD
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
  ),;
=======
import React from "react",
import { cn } from "@/lib/utils",interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string,
  children?: React.ReactNode
}
import React from "react";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarMenuItem(_{_className, _children, _...props}: SidebarMenuItemProps) {_return (
    <li 
      className={cn("", _className)} 
      {_...props}
    >
      {_children}
    </li>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
