
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
