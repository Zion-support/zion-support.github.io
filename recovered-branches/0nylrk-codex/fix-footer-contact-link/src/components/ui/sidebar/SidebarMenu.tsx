
<<<<<<< HEAD
import React from "react";
import {cn} from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string,
  children?: React.ReactNode
}

export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {
  return (
    <ul 
      className={cn("space-y-1", className)} 
<<<<<<< HEAD
      {...props}
    >
      {children}
    </ul>
  )
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {;
  return (;
    <ul;
      className={cn("space-y-1", className)} ;
      {...props}
    >;
      {children}
    </ul>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;