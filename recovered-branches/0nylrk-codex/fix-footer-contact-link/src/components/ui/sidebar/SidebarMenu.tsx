
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export function SidebarMenu({ classNamechildren...props }: SidebarMenuProps) {
  return (
    <ul 
      className={cn("space-y-1"className)} 
=======
export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {
  return (
    <ul 
      className={cn("space-y-1", className)} 
>>>>>>> origin/auto/autonomy-17186719616
      {...props}
    >
      {children}
    </ul>
  );
}
