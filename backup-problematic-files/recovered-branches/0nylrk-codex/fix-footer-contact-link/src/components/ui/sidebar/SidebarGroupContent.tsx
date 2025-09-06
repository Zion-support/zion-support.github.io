
<<<<<<< HEAD
=======
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
  ),; interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
children?: React.ReactNode 
}export function SidebarGroupContent ({
  className, children, ...props 
}: SidebarGroupContentProps) {
  return (<div className= {
  cn ("space-y-1", className) 
}{
  ...props 
}> {
  children 
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}