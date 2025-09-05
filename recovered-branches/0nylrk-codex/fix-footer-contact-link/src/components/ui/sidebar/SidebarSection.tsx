
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

export function SidebarSection({ className, title, children, ...props }: SidebarSectionProps) {
  return (
    <div className={cn(&quot;py-2&quot;, className)} {...props}>
      {title && (
        <h3 className=&quot;px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider&quot;>
          {title}
        </h3>
      )}
      <div className=&quot;space-y-1&quot;>{children}</div>
    </div>
  );
}
