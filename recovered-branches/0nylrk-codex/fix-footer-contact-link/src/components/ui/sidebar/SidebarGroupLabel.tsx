

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

      {...props}
    >
      {children}
    </div>

import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

}
;
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
