
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarMenu({
  className
  children
  ...props
}: SidebarMenuProps) {
  return (
<<<<<<< HEAD
    <ul className={cn("space-y-1", className)} {...props}>
      {children}
    </ul>
=======
    <ul 
      className={cn("space-y-1", className)} 
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {;
  return (;
    <ul;
      className={cn("space-y-1", className)} ;
      {...props}
    >;
      {children}
    </ul>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  );
}