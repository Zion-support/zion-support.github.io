
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  title?: string,
  children?: React.ReactNode
}
export function SidebarSection({
  className
  title
  children
  ...props
}: SidebarSectionProps) {
  return (
    <div className={cn("py-2", className)} {...props}>
      {title && (
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
<<<<<<< HEAD
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string,;
  title?: string;
  children?: React.ReactNode;
}
;
export function SidebarSection({ className, title, children, ...props }: SidebarSectionProps) {;
  return (;
    <div className={cn("py-2", className)} {...props}>;
      {title && (;
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          {title}
        </h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>
<<<<<<< HEAD
  );
}
=======
  )
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
