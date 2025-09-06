

import React from "react",
import { cn } from "@/lib/utils",

=======
import {cn} from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  title?: string,
  children?: React.ReactNode
}
export function SidebarSection({
  className
  title
  children
  ...props
}: SidebarSectionProps) {
  return (
    <div className={cn("py-2", className)} {...props}>
      {title && (
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">

import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string,;
  title?: string;
  children?: React.ReactNode;
}
;
export function SidebarSection({ className, title, children, ...props }: SidebarSectionProps) {;
  return (;
    <div className={cn("py-2", className)} {...props}>;
      {title && (;
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {title}
        </h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>

  )
}

