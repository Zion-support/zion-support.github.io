
import React from "react";

interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarGroupContent(_{_className, _children, _...props}: SidebarGroupContentProps) {_return (
    <div className={cn("space-y-1", _className)} {_...props}>
      {_children}
    </div>
  );
}
