
import React from "react";

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarMenu(_{_className, _children, _...props}: SidebarMenuProps) {_return (
    <ul 
      className={cn("space-y-1", _className)} 
      {_...props}
    >
      {_children}
    </ul>
  );
}
