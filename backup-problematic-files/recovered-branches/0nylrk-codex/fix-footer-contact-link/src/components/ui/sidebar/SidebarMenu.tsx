
<<<<<<< HEAD
=======
import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarMenu({ className, children, ...props } SidebarMenuProps) {;
  return (;
    <ul ;
      className={cn("space-y-1", className)} ;
      {...props}
    >;
      {children}
    </ul>;
  ),;}
 interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
children?: React.ReactNode 
}className, children, ...props 
}: SidebarMenuProps) {
  return (<ul > {
  children 
}</ul>) 
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
