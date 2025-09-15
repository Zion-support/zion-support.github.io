
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export function SidebarGroupContent({ classNamechildren...props }: SidebarGroupContentProps) {
  return (
    <div className={cn("space-y-1"className)} {...props}>
=======
export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
>>>>>>> origin/auto/autonomy-17186719616
      {children}
    </div>
  );
}
