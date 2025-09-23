
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
=======
export function SidebarGroupContent({ classNamechildren...props }: SidebarGroupContentProps) {
  return (
    <div className={cn("space-y-1"className)} {...props}>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {children}
    </div>
  );
}
