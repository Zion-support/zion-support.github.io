



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string,
  children?: React.ReactNode

import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {;
  className?: string;
  children?: React.ReactNode;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




>>>>>>> origin/feature/merge-conflicts-and-improvements

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




export function SidebarMenuItem(): any ({ className, children, ...props }: SidebarMenuItemProps) {;
  return (
    <li
      className={cn("", className)} 
      {...props}>;
      {children}
    </li>;

  );
}

  )
}
;




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

