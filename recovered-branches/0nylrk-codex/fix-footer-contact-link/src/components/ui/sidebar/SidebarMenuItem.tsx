
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
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string,
  children?: React.ReactNode
<<<<<<< HEAD
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {;
  className?: string;
  children?: React.ReactNode;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export function SidebarMenuItem({
  className
  children
  ...props
}: SidebarMenuItemProps) {
  return (
    <li className={cn("", className)} {...props}>
      {children}
    </li>
<<<<<<< HEAD
  );
}
=======
  )
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
