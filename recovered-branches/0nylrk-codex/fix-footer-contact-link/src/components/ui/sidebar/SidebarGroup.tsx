
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {
  return (
    <div className={cn(&quot;mb-4&quot;, className)} {...props}>
      {children}
    </div>
  );
}
