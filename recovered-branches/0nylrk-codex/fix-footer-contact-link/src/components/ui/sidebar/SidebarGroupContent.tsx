
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {
  return (
    <div className={cn(&quot;space-y-1&quot;, className)} {...props}>
      {children}
    </div>
  );
}
