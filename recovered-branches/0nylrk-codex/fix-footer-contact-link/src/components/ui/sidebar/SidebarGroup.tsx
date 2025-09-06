
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarGroup({
  className
  children
  ...props
}: SidebarGroupProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
<<<<<<< HEAD
      {children}
    </div>
  );
}
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
      {children}
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
