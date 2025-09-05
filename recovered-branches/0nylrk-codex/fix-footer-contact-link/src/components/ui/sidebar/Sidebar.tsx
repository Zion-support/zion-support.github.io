
import React from "react",
import { cn } from "@/lib/utils",interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
import React from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}

export function Sidebar(_{_className, _children, _...props}: SidebarProps) {_return (
    <div
      className={cn(
        &quot;flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200&quot;,
        className      )}
      {_...props}
    >
      {_children}
    </div>
  )
}
