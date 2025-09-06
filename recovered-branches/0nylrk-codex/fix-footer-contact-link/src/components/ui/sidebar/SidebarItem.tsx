
<<<<<<< HEAD

import React from "react";

import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode,
  active?: boolean
}
export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
  return (
    <div


      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md";
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground"

        className
        "flex items-center px-3 py-2 text-sm font-medium rounded-md",
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        className
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string,;
  children?: React.ReactNode,;
  active?: boolean;
}
;
export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {;
  return (;
    <div;
      className={cn(;
        "flex items-center px-3 py-2 text-sm font-medium rounded-md";
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground";
        className;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  className?: string;
  children?: React && React.ReactNode;
  active?: boolean;
}


export function SidebarItem(): any ({ className, children, active, ...props }: SidebarItemProps) {;

  return (
    <div


        "flex items-center px-3 py-2 text-sm font-medium rounded-md"
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground",

        className
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      )}
      {...props}>;
      {children}

    </div>;
  );
}


