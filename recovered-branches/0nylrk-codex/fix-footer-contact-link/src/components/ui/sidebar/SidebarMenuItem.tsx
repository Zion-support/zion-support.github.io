
import React from "react";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarMenuItem(_{_className, _children, _...props}: SidebarMenuItemProps) {_return (
    <li 
      className={cn("", _className)} 
      {_...props}
    >
      {_children}
    </li>
  );
}
