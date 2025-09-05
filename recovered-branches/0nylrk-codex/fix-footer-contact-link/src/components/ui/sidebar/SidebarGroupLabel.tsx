
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
=======
import React from "react";

interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function SidebarGroupLabel(_{_className, _children, _...props}: SidebarGroupLabelProps) {_return (
    <div 
<<<<<<< HEAD
      className={cn(&quot;px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider&quot;, className)} 
      {...props}
=======
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", _className)} 
      {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    >
      {_children}
    </div>
  )
}
