

import React from "react",
import { cn } from "@/lib/utils",

=======
import {cn} from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <div

      className={cn(;
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200";

        className
=======
      className={cn(
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200",
        className
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      )}
      {...props}
    >
      {children}
    </div>
  )
}