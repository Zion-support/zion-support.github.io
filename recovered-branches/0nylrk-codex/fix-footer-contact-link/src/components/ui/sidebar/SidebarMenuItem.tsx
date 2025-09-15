
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export function SidebarMenuItem({ classNamechildren...props }: SidebarMenuItemProps) {
  return (
    <li 
      className={cn(""className)} 
=======
export function SidebarMenuItem({ className, children, ...props }: SidebarMenuItemProps) {
  return (
    <li 
      className={cn("", className)} 
>>>>>>> origin/auto/autonomy-17186719616
      {...props}
    >
      {children}
    </li>
  );
}
