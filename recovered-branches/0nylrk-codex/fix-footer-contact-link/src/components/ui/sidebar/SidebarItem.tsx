
import React from "react";

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;
  active?: boolean;}

export function SidebarItem(_{_className, _children, _active, _...props}: SidebarItemProps) {_return (
    <div
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md", _active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground", _className
      )}
      {_...props}
    >
      {_children}
    </div>
  );
}
