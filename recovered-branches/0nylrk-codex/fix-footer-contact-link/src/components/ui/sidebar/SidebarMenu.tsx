
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {
  return (
    <ul 
      className={cn("space-y-1", className)} 
=======
export function SidebarMenu({ classNamechildren...props }: SidebarMenuProps) {
  return (
    <ul 
      className={cn("space-y-1"className)} 
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {...props}
    >
      {children}
    </ul>
  );
}
