

import React from "react",
import { cn } from "@/lib/utils",

=======
import {cn} from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

  )

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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;


