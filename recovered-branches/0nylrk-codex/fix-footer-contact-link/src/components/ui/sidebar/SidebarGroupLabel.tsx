

import React from "react",
import { cn } from "@/lib/utils",

=======
import {cn} from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarGroupLabel({
  className
  children
  ...props
}: SidebarGroupLabelProps) {
  return (

    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 

  );


}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
