
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenuItem({ className, children, ...props }: SidebarMenuItemProps) {
  return (
    <li 
      className={cn("", className)} 
      {...props}
    >
      {children}
    </li>
  );
}
