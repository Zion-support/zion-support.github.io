
import React from "react";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
=======
import {cn} from "@/lib/utils";
interface SidebarMenuProps extends React && React.HTMLAttributes<HTMLUListElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
}
<<<<<<< HEAD
export function SidebarMenu({
  className
  children
  ...props
}: SidebarMenuProps) {
  return (
    <ul className={cn("space-y-1", className)} {...props}>
      {children}
    </ul>
  );
}
=======

export function SidebarMenu(): any ({ className, children, ...props }: SidebarMenuProps) {;
  return (
    <ul
      className={cn("space-y-1", className)} 
      {...props}>;
      {children}
    </ul>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
