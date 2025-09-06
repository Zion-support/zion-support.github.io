
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
=======
import React from "react";
import {cn} from "@/lib/utils";
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
>>>>>>> main
  children?: React.ReactNode
}

export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
<<<<<<< HEAD
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
      {children}
    </div>;
  );
}
;
=======
      {children}
    </div>
  )
}
>>>>>>> main
