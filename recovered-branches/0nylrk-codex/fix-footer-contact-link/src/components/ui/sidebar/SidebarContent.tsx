


import React from "react",
import { cn } from "@/lib/utils",


=======
import {cn} from "@/lib/utils";
interface SidebarContentProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
}


export function SidebarContent(): any ({ className, children, ...props }: SidebarContentProps) {;

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
}
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
