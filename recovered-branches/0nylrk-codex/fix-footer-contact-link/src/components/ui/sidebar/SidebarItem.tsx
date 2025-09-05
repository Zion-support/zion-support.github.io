
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
}

export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
  return (
    <div
      className={cn(
        &quot;flex items-center px-3 py-2 text-sm font-medium rounded-md&quot;,
        active ? &quot;bg-primary/10 text-primary&quot; : &quot;text-muted-foreground hover:bg-accent hover:text-accent-foreground&quot;,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
