
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode
}
=======
  children?: React.ReactNode;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <div
      className;
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}