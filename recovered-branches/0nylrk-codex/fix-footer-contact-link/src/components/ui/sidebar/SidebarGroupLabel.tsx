
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarGroupLabel({ className, children, ...props }: SidebarGroupLabelProps) {
  return (
    <div 
      className={cn(&quot;px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider&quot;, className)} 
      {...props}
    >
      {children}
    </div>
  );
}
