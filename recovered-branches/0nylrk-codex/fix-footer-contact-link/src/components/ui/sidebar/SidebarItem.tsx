

<<<<<<< HEAD
import {cn} from "@/lib/utils";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import React from "react",
import { cn } from "@/lib/utils",

<<<<<<< HEAD
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode,
  active?: boolean
}
export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
  return (
    <div

      className={cn(

=======

=======
import {cn} from "@/lib/utils";
interface SidebarItemProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
      {...props}>;
      {children}

    </div>;
  );
}

=======
import React from './react';
import { cn } from '@/lib / utils';
interface SidebarItemProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
  active?: boolean;
}
export /**
 * SidebarItem - Function description
 */
function SidebarItem() {
  return (
    <div;
      className={cn (
        "flex items - center px - 3 py - 2 text - sm font - medium rounded - md";
        active ? "bg - primary / 10 text - primary" : "text - muted - foreground hover: bg - accent hover:text - accent - foreground",
        class_name)}
      {...props}
    >;
      {children}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
