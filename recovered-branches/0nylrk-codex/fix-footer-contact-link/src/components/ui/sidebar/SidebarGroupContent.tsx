
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from "react",
import { cn } from "@/lib/utils",


import {cn} from "@/lib/utils";
interface SidebarGroupContentProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
}


export function SidebarGroupContent(): any ({ className, children, ...props }: SidebarGroupContentProps) {;

  return (

    <div className={cn("space-y-1", className)} {...props}>

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
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarGroupContent({
  className
  children
  ...props
}: SidebarGroupContentProps) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  );
}
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {;
  return (;
<<<<<<< HEAD

    <div className={cn("space-y-1", className)} {...props}>;
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


    <div className={cn("space-y-1", className)} {...props}>;
      {children}
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
