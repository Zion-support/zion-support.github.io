
<<<<<<< HEAD

import React from "react";

import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
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


export function Sidebar(): any ({ className, children, ...props }: SidebarProps) {;
  return (
    <div
<<<<<<< HEAD



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======

      className={cn(;
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200";

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        className
      className={cn(
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        className

import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string,;
  children?: React.ReactNode;
}
;
export function Sidebar({ className, children, ...props }: SidebarProps) {;
  return (;
    <div;
      className={cn(;
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200";
        className;


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      )}
      {...props}>;
      {children}

    </div>;
  );
}


