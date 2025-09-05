
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode,
  active?: boolean
}
=======
import React from "react";

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;
  active?: boolean;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function SidebarItem(_{_className, _children, _active, _...props}: SidebarItemProps) {_return (
    <div
      className={cn(
<<<<<<< HEAD
        &quot;flex items-center px-3 py-2 text-sm font-medium rounded-md&quot;,
        active ? &quot;bg-primary/10 text-primary&quot; : &quot;text-muted-foreground hover:bg-accent hover:text-accent-foreground&quot;,
        className
=======
        "flex items-center px-3 py-2 text-sm font-medium rounded-md", _active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    >
      {_children}
    </div>
  )
}
