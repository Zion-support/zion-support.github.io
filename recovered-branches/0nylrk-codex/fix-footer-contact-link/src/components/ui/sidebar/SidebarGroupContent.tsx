
<<<<<<< HEAD

<<<<<<< HEAD
import {cn} from "@/lib/utils";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import React from "react",
import { cn } from "@/lib/utils",

<<<<<<< HEAD
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
=======

=======
import {cn} from "@/lib/utils";
interface SidebarGroupContentProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}


export function SidebarGroupContent(): any ({ className, children, ...props }: SidebarGroupContentProps) {;

  return (

    <div className={cn("space-y-1", className)} {...props}>

<<<<<<< HEAD
=======
  )

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarGroupContent({
  className
  children
  ...props
}: SidebarGroupContentProps) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
<<<<<<< HEAD
      {children}
    </div>
<<<<<<< HEAD
  );
}
=======
  )
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {;
  return (;
<<<<<<< HEAD

    <div className={cn("space-y-1", className)} {...props}>;
      {children}

    </div>;
  );
<<<<<<< HEAD

}
;

=======
}

=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    <div className={cn("space-y-1", className)} {...props}>;
      {children}
    </div>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
