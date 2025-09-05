
import React from "react",
import { cn } from "@/lib/utils",interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode,
  active?: boolean
}
import React from "react";

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;
  active?: boolean;}

export function SidebarItem(_{_className, _children, _active, _...props}: SidebarItemProps) {_return (
    <div
      className={cn(
        &quot;flex items-center px-3 py-2 text-sm font-medium rounded-md&quot;,
        active ? &quot;bg-primary/10 text-primary&quot; : &quot;text-muted-foreground hover:bg-accent hover:text-accent-foreground&quot;,
        className      )}
      {_...props}
    >
      {_children}
    </div>
  )
}
