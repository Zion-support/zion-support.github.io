
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string,
  children?: React.ReactNode
}
=======
import React from "react";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {_className?: string;
  children?: React.ReactNode;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function SidebarMenuItem(_{_className, _children, _...props}: SidebarMenuItemProps) {_return (
    <li 
      className={cn("", _className)} 
      {_...props}
    >
      {_children}
    </li>
  )
}
