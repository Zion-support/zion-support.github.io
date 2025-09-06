import React from "react";
import { cn } from "@/lib/utils";
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenu({
  className,
  children,
  ...props
}: SidebarMenuProps) {
  return (
    <ul className={cn("space-y-1", className)} {...props}>
      {children}
    </ul>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </ul>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
