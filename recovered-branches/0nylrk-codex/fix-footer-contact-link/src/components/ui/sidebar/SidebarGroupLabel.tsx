
import React from "react";

interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarGroupLabel(_{_className, _children, _...props}: SidebarGroupLabelProps) {_return (
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", _className)} 
      {_...props}
    >
      {_children}
    </div>
  );
}
