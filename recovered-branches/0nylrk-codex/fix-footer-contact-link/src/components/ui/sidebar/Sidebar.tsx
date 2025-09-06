
import React from "react";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
=======
import {cn} from "@/lib/utils";
interface SidebarProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
}
<<<<<<< HEAD
export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <div
      className;
=======

export function Sidebar(): any ({ className, children, ...props }: SidebarProps) {;
  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        className
      )}
      {...props}>;
      {children}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
