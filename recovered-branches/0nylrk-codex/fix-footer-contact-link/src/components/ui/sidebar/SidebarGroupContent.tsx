
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
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {;
  return (;
    <div className={cn("space-y-1", className)} {...props}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      {children}
    </div>;
  );
}
;