
import React from "react";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
=======
import {cn} from "@/lib/utils";
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLLIElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
}
<<<<<<< HEAD
export function SidebarMenuItem({
  className
  children
  ...props
}: SidebarMenuItemProps) {
  return (
    <li className={cn("", className)} {...props}>
      {children}
    </li>
  );
}
=======

export function SidebarMenuItem(): any ({ className, children, ...props }: SidebarMenuItemProps) {;
  return (
    <li
      className={cn("", className)} 
      {...props}>;
      {children}
    </li>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
