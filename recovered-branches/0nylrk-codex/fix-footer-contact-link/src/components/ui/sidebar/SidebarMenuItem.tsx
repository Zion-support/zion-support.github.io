
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

export function SidebarMenuItem({ className, children, ...props }: SidebarMenuItemProps) {
  return (
    <li 
      className={cn("", className)} 
      {...props}
    >
      {children}
    </li>
  )
}
