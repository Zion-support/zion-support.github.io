
<<<<<<< HEAD
import React from "react";
import {cn} from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}

export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
<<<<<<< HEAD
      {children}
    </div>
  )
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
