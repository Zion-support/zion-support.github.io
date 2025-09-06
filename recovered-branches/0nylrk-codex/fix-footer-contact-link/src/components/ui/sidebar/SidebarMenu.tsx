
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode
}
=======
  children?: React.ReactNode;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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