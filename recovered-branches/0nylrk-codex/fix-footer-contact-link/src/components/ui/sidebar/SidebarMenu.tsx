
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {
  return (
    <ul 
      className={cn(&quot;space-y-1&quot;, className)} 
      {...props}
    >
      {children}
    </ul>
  );
}
