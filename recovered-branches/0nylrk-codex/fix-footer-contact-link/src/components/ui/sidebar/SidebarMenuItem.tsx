
<<<<<<< HEAD

import {cn} from "@/lib/utils";
=======
import {cn} from "@/lib/utils";
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLLIElement> {;

  className?: string;
  children?: React && React.ReactNode;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import React from "react",
import { cn } from "@/lib/utils",

<<<<<<< HEAD
=======
=======
import {cn} from "@/lib/utils";
=======
import React from "react",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string,
  children?: React.ReactNode

<<<<<<< HEAD
=======
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {;
  className?: string;
  children?: React.ReactNode;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLLIElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarMenuItem - Function description
 */
function SidebarMenuItem() {

  return (
    <li className={cn ("", class_name)} {...props}>;
      {children}
<<<<<<< HEAD
    </li>

=======


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

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
