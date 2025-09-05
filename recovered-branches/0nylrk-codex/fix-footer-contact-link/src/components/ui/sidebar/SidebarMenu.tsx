
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

export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {
  return (
    <ul 
      className={cn(&quot;space-y-1&quot;, className)} 
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {;
  return (;
    <ul;
      className={cn("space-y-1", className)} ;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      {...props}
    >;
      {children}
    </ul>;
  );
}
;