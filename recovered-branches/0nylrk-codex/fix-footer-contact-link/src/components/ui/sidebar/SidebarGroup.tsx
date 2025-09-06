
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React && React.ReactNode;
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
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
export function SidebarGroup({
  className
  children
  ...props
}: SidebarGroupProps) {
  return (
<<<<<<< HEAD
=======

    <div className={cn("mb-4", className)} {...props}>
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
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {;
  return (;

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    <div className={cn("mb-4", className)} {...props}>;
      {children}
    </div>
  );
}
<<<<<<< HEAD
import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarGroup - Function description
 */
function SidebarGroup() {
  return (
    <div className={cn ("mb - 4", class_name)} {...props}>;
      {children}
    </div>);
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
