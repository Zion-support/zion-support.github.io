import React from "react";
import { cn } from "@/lib/utils";
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
<<<<<<< HEAD
  className?: string;
  children?: React.ReactNode;
}

export function SidebarGroup({
  className,
  children,
  ...props
}: SidebarGroupProps) {
  return (

    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}
;
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {;
  return (;

    <div className={cn("mb-4", className)} {...props}>;
      {children}

    </div>;
  );
}

=======
  className?: string,
  children?: React.ReactNode

import React from "react",
import { cn } from "@/lib/utils",

import {cn} from "@/lib/utils";
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
}
  );
}
  )

  )

import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode
};
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {;
  return (;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

;

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <div className={cn("mb-4", className)} {...props}>;
      {children}
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
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
