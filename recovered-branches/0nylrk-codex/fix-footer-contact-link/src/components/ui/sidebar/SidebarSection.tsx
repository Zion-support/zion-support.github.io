<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
=======
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
=======

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",
import { cn } from "@/lib/utils",


<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  title?: string,
=======
>>>>>>> merged-prs-20250907-203621
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  title?: string,
  children?: React.ReactNode
<<<<<<< HEAD
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
          {title}
        </h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  )
}
=======

export function SidebarSection(): any ({ className, title, children, ...props }: SidebarSectionProps) {;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  title?: string,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
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
=======
  children?: React.ReactNode
  title?: string;
  children?: React && React.ReactNode;
<<<<<<< HEAD

import React from "react",;

=======
<<<<<<< HEAD
=======
}


export function SidebarSection(): any ({ className, title, children, ...props }: SidebarSectionProps) {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className={cn("py-2", className)} {...props}>;
      {title && (;
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">;
<<<<<<< HEAD
}
export function SidebarSection({
  className
  title
  children
  ...props
}: SidebarSectionProps) {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className={cn("py-2", className)} {...props}>
      {title && (
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",;

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="space-y-1">{children}</div>
    </div>
  );
}

          {title}
        </h3>;
      )}
          {title}
        </h3>;
      )}

<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge
  title?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  ),;}
 interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
title?: string;
children?: React.ReactNode 
}export function SidebarSection ({
  className, title, children, ...props 
}: SidebarSectionProps) {
  return (<div className= {
  cn ("py-2", className) 
}{
  ...props 
}> {
  title && (<h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" > {
  title 
}</h3>) 
}<div className="space-y-1" > {
  children 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}</div> 
}
          {title}
        </h3>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      )}
      <div className="space-y-1">{children}</div>
    </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
}
  )
}
;
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
