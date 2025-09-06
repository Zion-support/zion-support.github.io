
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}