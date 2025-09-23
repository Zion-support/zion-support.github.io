
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
=======
export function SidebarGroup({ classNamechildren...props }: SidebarGroupProps) {
  return (
    <div className={cn("mb-4"className)} {...props}>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {children}
    </div>
  );
}
