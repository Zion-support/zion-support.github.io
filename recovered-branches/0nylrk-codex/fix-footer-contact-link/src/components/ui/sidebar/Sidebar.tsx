
import React from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}

export function Sidebar(_{_className, _children, _...props}: SidebarProps) {_return (
    <div
      className={cn(
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200", _className
      )}
      {_...props}
    >
      {_children}
    </div>
  );
}
