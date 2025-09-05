
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}

export function SidebarGroupLabel({ className, children, ...props }: SidebarGroupLabelProps) {
  return (
    <div 
      className={cn(&quot;px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider&quot;, className)} 
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroupLabel({ className, children, ...props }: SidebarGroupLabelProps) {;
  return (;
    <div;
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} ;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      {...props}
    >;
      {children}
    </div>;
  );
}
;