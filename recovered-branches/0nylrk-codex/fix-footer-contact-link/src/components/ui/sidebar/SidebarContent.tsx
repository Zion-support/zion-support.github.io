
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}

export function SidebarContent({ className, children, ...props }: SidebarContentProps) {
  return (
    <div className={cn(&quot;flex-1 px-2 py-4&quot;, className)} {...props}>
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarContent({ className, children, ...props }: SidebarContentProps) {;
  return (;
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      {children}
    </div>;
  );
}
;