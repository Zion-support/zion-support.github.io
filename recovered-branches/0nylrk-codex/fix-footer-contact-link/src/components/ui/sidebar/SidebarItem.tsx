
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
}

<<<<<<< HEAD
export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
=======
export function SidebarItem({ classNamechildrenactive...props }: SidebarItemProps) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  return (
    <div
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md",
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
