
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from "react",
import { cn } from "@/lib/utils",


import {cn} from "@/lib/utils";
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
}


export function SidebarGroup(): any ({ className, children, ...props }: SidebarGroupProps) {;

  return (

    <div className={cn("mb-4", className)} {...props}>

  )

<<<<<<< HEAD
=======
=======
import React from "react";
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarGroup({
  className
  children
  ...props
}: SidebarGroupProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {;
  return (;
<<<<<<< HEAD

    <div className={cn("mb-4", className)} {...props}>;
      {children}

    </div>;
  );
}

=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

;


    <div className={cn("mb-4", className)} {...props}>;
      {children}
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
