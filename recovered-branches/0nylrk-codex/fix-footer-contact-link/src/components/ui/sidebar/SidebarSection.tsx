
<<<<<<< HEAD
=======
  children?: React.ReactNode,
import React from "react","
import { cn } from "@/lib/utils","
  className?: string;import React from './react';'
import { cn  } from '@/lib / utils';'
interface SidebarSectionProps extends React.HTMLAttributes < HTMLDivElement> {
  }
  class_name?: string;import React from "react";"
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {;
  }
  className?: string,;
  return (
    <div className={cn("py-2", className)} {...props}>;
      {title && (;
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">;
}
export function SidebarSection({
  className
  title
  children
  ...props
}: SidebarSectionProps) {
  return (
    <div className={cn("py-2", className)} {...props}>
      {title && (
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react",;


<<<<<<< HEAD
import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?:string,;
  title?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarSection({ className, title, children, ...props } SidebarSectionProps) {;
  return (;
    <div className={cn("py-2", className)} {...props}>;
      {title && (;
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">;          {title}
        </h3>;
      )}

      <div className="space-y-1">{children}</div>;
    </div>;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export /**
 * SidebarSection - Function description
 */
function SidebarSection() {
  return (
    <div className={cn ("py - 2", class_name)} {...props}>;
      {title && (
        <h3 className="px - 3 mb - 2 text - xs font - semibold text - muted - foreground uppercase tracking - wider">;
          {title}
        </h3>)}
      <div className="space - y-1">{children}</div>;
    </div>);
}

  )
ursor/fix-website-loading-errors-and-merge-6662

import React from "react";""
import { cn } from "@/lib/utils";"
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {

interface SidebarSectionProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  title?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD




=======

}</div> 
}
          {title}
        </h3>


  );
}
  )
}
;

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
