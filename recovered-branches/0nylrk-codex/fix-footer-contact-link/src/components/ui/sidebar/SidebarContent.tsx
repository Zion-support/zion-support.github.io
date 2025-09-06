
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarContent({
  className
  children
  ...props
}: SidebarContentProps) {
  return (
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>
<<<<<<< HEAD
      {children}
    </div>
  );
}
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
      {children}
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
