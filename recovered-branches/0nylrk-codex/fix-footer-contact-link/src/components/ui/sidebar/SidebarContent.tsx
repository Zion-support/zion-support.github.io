<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
=======


import React from "react",
import { cn } from "@/lib/utils",


=======
import {cn} from "@/lib/utils";
interface SidebarContentProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  className?: string;
  children?: React && React.ReactNode;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
  return (
<<<<<<< HEAD

    <div className={cn("flex-1 px-2 py-4", className)} {...props}>
<<<<<<< HEAD
      {children}
    </div>
  );
}
  )
=======

  )

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarContent({ className, children, ...props }: SidebarContentProps) {;
  return (;

    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}

    </div>;
  );
}
;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}
=======
import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarContentProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarContent - Function description
 */
function SidebarContent() {
  return (
    <div className={cn ("flex - 1 px - 2 py - 4", class_name)} {...props}>;
      {children}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
