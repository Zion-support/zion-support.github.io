
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string,
  children?: React.ReactNode
<<<<<<< HEAD
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {;
  className?: string;
  children?: React.ReactNode;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
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