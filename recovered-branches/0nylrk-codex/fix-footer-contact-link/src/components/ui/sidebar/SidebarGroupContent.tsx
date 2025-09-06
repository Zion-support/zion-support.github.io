
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
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
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
export function SidebarGroupContent({
  className
  children
  ...props
}: SidebarGroupContentProps) {
  return (
<<<<<<< HEAD
=======

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
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {;
  return (;

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    <div className={cn("space-y-1", className)} {...props}>;
      {children}
    </div>
  );
}
<<<<<<< HEAD
import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarGroupContentProps;
  extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarGroupContent - Function description
 */
function SidebarGroupContent() {
  return (
    <div className={cn ("space - y-1", class_name)} {...props}>;
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
