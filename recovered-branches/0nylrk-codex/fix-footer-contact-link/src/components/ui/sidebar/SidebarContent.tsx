
import React from "react";

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarContent(_{_className, _children, _...props}: SidebarContentProps) {_return (
    <div className={cn("flex-1 px-2 py-4", _className)} {_...props}>
      {_children}
    </div>
  );
}
