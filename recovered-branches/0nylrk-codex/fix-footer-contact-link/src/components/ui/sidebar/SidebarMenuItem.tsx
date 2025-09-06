
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode
}
=======
  children?: React.ReactNode;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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