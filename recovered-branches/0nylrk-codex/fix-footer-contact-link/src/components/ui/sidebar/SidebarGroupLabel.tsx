
<<<<<<< HEAD
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
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarGroupLabel({
  className
  children
  ...props
}: SidebarGroupLabelProps) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div
      className={cn(
        "px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        className
      )}
=======
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {...props}
    >
      {children}
    </div>
<<<<<<< HEAD
=======
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
=======
  )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroupLabel({ className, children, ...props }: SidebarGroupLabelProps) {;
  return (;
    <div;
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} ;
      {...props}
    >;
      {children}
    </div>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  );
<<<<<<< HEAD
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


import React from "react",
import { cn } from "@/lib/utils",


=======
import {cn} from "@/lib/utils";
interface SidebarGroupLabelProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
}

import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarGroupLabelProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarGroupLabel - Function description
 */
function SidebarGroupLabel() {
  return (
    <div;
      className={cn (
        "px - 3 mb - 2 text - xs font - semibold text - muted - foreground uppercase tracking - wider",
        class_name,

      )}
      {...props}
    >;
      {children}


export function SidebarGroupLabel(): any ({ className, children, ...props }: SidebarGroupLabelProps) {;
  return (
    <div
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
      {...props}>;
      {children}
    </div>;
  );
=======

    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 

  );



}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
