
<<<<<<< HEAD
import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarGroupLabel({ className, children, ...props } SidebarGroupLabelProps) {;
  return (;
    <div ;
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} ;
      {...props}
    >;
      {children}
    </div>;
  ),;
=======
import React from "react",
import { cn } from "@/lib/utils",interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
import React from "react";

interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarGroupLabel(_{_className, _children, _...props}: SidebarGroupLabelProps) {_return (
    <div 
      className={cn(&quot;px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider&quot;, className)} 
      {...props}    >
      {_children}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
