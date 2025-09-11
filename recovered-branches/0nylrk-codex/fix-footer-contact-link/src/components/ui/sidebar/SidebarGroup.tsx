


import React from "react",
import { cn } from "@/lib/utils",


=======
import {cn} from "@/lib/utils";
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
}


export function SidebarGroup(): any ({ className, children, ...props }: SidebarGroupProps) {;

  return (

    <div className={cn("mb-4", className)} {...props}>

  )

=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {;
  return (;

    <div className={cn("mb-4", className)} {...props}>;
      {children}

    </div>;
  );
}
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
