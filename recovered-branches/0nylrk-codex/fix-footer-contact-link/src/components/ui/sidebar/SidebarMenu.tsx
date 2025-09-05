
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string,
  children?: React.ReactNode
}
=======
import React from "react";

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {_className?: string;
  children?: React.ReactNode;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function SidebarMenu(_{_className, _children, _...props}: SidebarMenuProps) {_return (
    <ul 
<<<<<<< HEAD
      className={cn(&quot;space-y-1&quot;, className)} 
      {...props}
=======
      className={cn("space-y-1", _className)} 
      {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    >
      {_children}
    </ul>
  )
}
