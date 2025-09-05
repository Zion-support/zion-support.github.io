
import React from "react",
import { cn } from "@/lib/utils",interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string,
  children?: React.ReactNode
}
import React from "react";

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarMenu(_{_className, _children, _...props}: SidebarMenuProps) {_return (
    <ul 
      className={cn(&quot;space-y-1&quot;, className)} 
      {...props}    >
      {_children}
    </ul>
  )
}
