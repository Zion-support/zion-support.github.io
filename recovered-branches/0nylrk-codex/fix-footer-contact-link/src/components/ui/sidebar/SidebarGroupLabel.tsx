<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
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
    <div
      className={cn(
        "px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        className
      )}
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
      {...props}
    >
      {children}
    </div>
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
  )
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;
=======


import React from "react",
import { cn } from "@/lib/utils",


=======
import {cn} from "@/lib/utils";
interface SidebarGroupLabelProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  className?: string;
  children?: React && React.ReactNode;
}
      )}
      {...props}
    >;
      {children}
<<<<<<< HEAD


export function SidebarGroupLabel(): any ({ className, children, ...props }: SidebarGroupLabelProps) {;
  return (
    <div
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
      {...props}>;
      {children}
    </div>;
  );
<<<<<<< HEAD
}
}
;
=======
=======

    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 

  );



}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
