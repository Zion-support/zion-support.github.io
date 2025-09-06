
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
=======
<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import {cn} from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarMenu({
  className
  children
  ...props
}: SidebarMenuProps) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <ul className={cn("space-y-1", className)} {...props}>
      {children}
    </ul>
=======
    <ul 
      className={cn("space-y-1", className)} 
=======
    <ul 
      className={cn("space-y-1", className)} 
<<<<<<< HEAD
      {...props}
    >
      {children}
    </ul>
  )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  className?: string;
  children?: React && React.ReactNode;
}
export function SidebarMenu({
  className
  children
  ...props
}: SidebarMenuProps) {
  return (
    <ul className={cn ("space - y-1", class_name)} {...props}>;
      {children}
    </ul>
  );
<<<<<<< HEAD
}
    </ul>);
}
=======
<<<<<<< HEAD
}
=======
  return (

    <ul 
      className={cn("space-y-1", className)} 
=======
    <ul 
      className={cn("space-y-1", className)} 

  );



}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
