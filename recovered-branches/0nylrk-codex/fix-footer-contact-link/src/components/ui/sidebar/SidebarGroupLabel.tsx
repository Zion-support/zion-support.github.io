
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export function SidebarGroupLabel({ classNamechildren...props }: SidebarGroupLabelProps) {
  return (
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"className)} 
=======
export function SidebarGroupLabel({ className, children, ...props }: SidebarGroupLabelProps) {
  return (
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
>>>>>>> origin/auto/autonomy-17186719616
      {...props}
    >
      {children}
    </div>
  );
}
