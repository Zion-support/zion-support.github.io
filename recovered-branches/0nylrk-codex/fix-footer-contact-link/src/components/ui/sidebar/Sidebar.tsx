
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

export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <div
      className={cn(
        &quot;flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200&quot;,
        className
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string,;
  children?: React.ReactNode;
}
;
export function Sidebar({ className, children, ...props }: SidebarProps) {;
  return (;
    <div;
      className={cn(;
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200";
        className;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
      {...props}
    >;
      {children}
    </div>;
  );
}
;