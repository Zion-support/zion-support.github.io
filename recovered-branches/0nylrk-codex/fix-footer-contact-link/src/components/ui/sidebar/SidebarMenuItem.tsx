
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export function SidebarMenuItem({ className, children, ...props }: SidebarMenuItemProps) {
  return (
    <li 
      className={cn("", className)} 
=======
export function SidebarMenuItem({ classNamechildren...props }: SidebarMenuItemProps) {
  return (
    <li 
      className={cn(""className)} 
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {...props}
    >
      {children}
    </li>
  );
}
