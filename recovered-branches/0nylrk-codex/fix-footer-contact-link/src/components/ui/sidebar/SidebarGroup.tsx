import React from "react";
import { cn } from "@/lib/utils";
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarGroup({
  className,
  children,
  ...props
}: SidebarGroupProps) {
  return (

    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}
;
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {;
  return (;

    <div className={cn("mb-4", className)} {...props}>;
      {children}

    </div>;
  );
}

=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
