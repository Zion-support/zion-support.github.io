
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode
}
=======
  children?: React.ReactNode;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function SidebarGroupLabel({
  className
  children
  ...props
}: SidebarGroupLabelProps) {
  return (
    <div
      className={cn(
        "px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}