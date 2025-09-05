
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}

export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {
  return (
    <div className={cn(&quot;space-y-1&quot;, className)} {...props}>
      {children}
=======
import React from "react";

interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  children?: React.ReactNode;}

export function SidebarGroupContent(_{_className, _children, _...props}: SidebarGroupContentProps) {_return (
    <div className={cn("space-y-1", _className)} {_...props}>
      {_children}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}
