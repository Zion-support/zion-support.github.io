import React from "react";
import { cn } from "@/lib/utils";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenuItem({
  className,
  children,
  ...props
}: SidebarMenuItemProps) {
  return (
    <li className={cn("", className)} {...props}>
      {children}


export function SidebarMenuItem(): any ({ className, children, ...props }: SidebarMenuItemProps) {;
  return (
    <li
      className={cn("", className)} 
      {...props}>;
      {children}
    </li>;
  );
}

=======
    </li>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    </li>
  );
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
