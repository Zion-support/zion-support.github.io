
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  title?: string,
  children?: React.ReactNode
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
  )
}
