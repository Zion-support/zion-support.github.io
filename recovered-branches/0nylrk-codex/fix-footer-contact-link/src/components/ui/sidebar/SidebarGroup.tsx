
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export function SidebarGroup({ classNamechildren...props }: SidebarGroupProps) {
  return (
    <div className={cn("mb-4"className)} {...props}>
=======
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
>>>>>>> origin/auto/autonomy-17186719616
      {children}
    </div>
  );
}
