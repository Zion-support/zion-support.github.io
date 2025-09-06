
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  active?: boolean
}

export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
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
