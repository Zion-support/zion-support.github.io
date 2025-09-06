
<<<<<<< HEAD

import React from "react";

import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  className?: string;
  children?: React && React.ReactNode;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}


export function SidebarGroupContent(): any ({ className, children, ...props }: SidebarGroupContentProps) {;

  return (

    <div className={cn("space-y-1", className)} {...props}>
<<<<<<< HEAD

      {children}
    </div>
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {;
  return (;

    <div className={cn("space-y-1", className)} {...props}>;
      {children}

    </div>;
  );
}
<<<<<<< HEAD
;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
