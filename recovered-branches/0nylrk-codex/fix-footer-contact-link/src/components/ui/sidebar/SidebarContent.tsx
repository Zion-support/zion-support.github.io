
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarContent({ className, children, ...props }: SidebarContentProps) {
  return (
    <div className={cn(&quot;flex-1 px-2 py-4&quot;, className)} {...props}>
      {children}
    </div>
  );
}
