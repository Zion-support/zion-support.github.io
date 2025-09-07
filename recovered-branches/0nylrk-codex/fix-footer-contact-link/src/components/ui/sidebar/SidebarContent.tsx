<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { cn } from "@/lib/utils",

import {cn} from "@/lib/utils";
interface SidebarContentProps extends React && React.HTMLAttributes<HTMLDivElement> {;
=======
import React from "react";"
import { cn } from "@/lib/utils";
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  className?: string;
  children?: React && React.ReactNode;
}
<<<<<<< HEAD
<<<<<<< HEAD


export function SidebarContent(): any ({ className, children, ...props }: SidebarContentProps) {;

  return (

    <div className={cn("flex-1 px-2 py-4", className)} {...props}>

  )

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  className?: string,
  children?: React.ReactNode
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  className?: string;
  children?: React.ReactNode;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  className?: string,
  children?: React.ReactNode

import React from "react",
import { cn } from "@/lib/utils",

import {cn} from "@/lib/utils";
interface SidebarContentProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  className?: string;
  children?: React.ReactNode;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  className?: string,
  children?: React.ReactNode

import React from "react",;
import { cn } from "@/lib/utils",;

import {cn} from "@/lib/utils";
interface SidebarContentProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export function SidebarContent({
  className,
  children,
  ...props
}: SidebarContentProps) {
  return (

    <div className={cn("flex-1 px-2 py-4", className)} {...props}>
      {children}
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
=======
  );
}
  )

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  )

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  )

  )

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
;
export function SidebarContent({ className, children, ...props }: SidebarContentProps) {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
  children?: React.ReactNode
};
export function SidebarContent({ className, children, ...props }: SidebarContentProps) {;
  return (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  children?: React.ReactNode
};
export function SidebarContent({ className, children, ...props }: SidebarContentProps) {;
  return (;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
=======
  children?: React.ReactNode
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function SidebarContent({ className, children, ...props }: SidebarContentProps) {;
  return (;

    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}

    </div>;
  );
}

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}
import React from './react';'
import { cn  } from '@/lib / utils';
<<<<<<< HEAD
interface SidebarContentProps extends React.HTMLAttributes < HTMLDivElement> {}
  class_name?: string;
  children?: React.ReactNode;
}
export /**;
 * SidebarContent - Function description;
 */
function SidebarContent() {}
  return ("
    <div className={cn ("flex - 1 px - 2 py - 4", class_name)} {...props}>;
=======

import React from "react";""
import { cn } from "@/lib/utils";"
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
"
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>"
</div>
    </div>"
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;"
    </div>;"
pr-12325
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;"
</div>

interface SidebarContentProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;}
  children?: React.ReactNode;}
}
export /**
 * SidebarContent - Function description
 * SidebarContent - Function description;
 */
function SidebarContent() {}
  return (}
    <div className={cn (\"flex - 1 px - 2 py - 4\", class_name)} {...props} />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {children}
    </div>);
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
 * SidebarContent - Function description;
 */
function SidebarContent() {
  return ()"
    <div className={cn ("flex - 1 px - 2 py - 4", class_name)} {...props}>;"
    </div>);"
pr-12325
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
