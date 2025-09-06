
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode
}
=======
  children?: React.ReactNode;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function SidebarGroup({
  className
  children
  ...props
}: SidebarGroupProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
