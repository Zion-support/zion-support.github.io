
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode,
  active?: boolean
}

export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
  return (
    <div
      className={cn(
        &quot;flex items-center px-3 py-2 text-sm font-medium rounded-md&quot;,
        active ? &quot;bg-primary/10 text-primary&quot; : &quot;text-muted-foreground hover:bg-accent hover:text-accent-foreground&quot;,
        className
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string,;
  children?: React.ReactNode,;
  active?: boolean;
}
;
export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {;
  return (;
    <div;
      className={cn(;
        "flex items-center px-3 py-2 text-sm font-medium rounded-md";
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground";
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