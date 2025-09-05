
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
=======
import React from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function Sidebar(_{_className, _children, _...props}: SidebarProps) {_return (
    <div
      className={cn(
<<<<<<< HEAD
        &quot;flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200&quot;,
        className
=======
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    >
      {_children}
    </div>
  )
}
