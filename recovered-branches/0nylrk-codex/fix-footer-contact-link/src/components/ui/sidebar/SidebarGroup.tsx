
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}

export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {
  return (
    <div className={cn(&quot;mb-4&quot;, className)} {...props}>
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {;
  return (;
    <div className={cn("mb-4", className)} {...props}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      {children}
    </div>;
  );
}
;