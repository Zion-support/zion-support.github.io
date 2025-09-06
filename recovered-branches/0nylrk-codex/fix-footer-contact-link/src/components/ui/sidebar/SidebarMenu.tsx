import React from "react";
import { cn } from "@/lib/utils";
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenu({
  className,
  children,
  ...props
}: SidebarMenuProps) {
  return (
    <ul className={cn("space-y-1", className)} {...props}>
      {children}
    </ul>
  );
}
<<<<<<< HEAD
    </ul>);
}

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarMenu({ className, children, ...props } SidebarMenuProps) {;
  return (;
    <ul ;
    <ul className={cn("space-y-1", className)} {...props}>
      {children}
    </ul>
    <ul 
      className={cn("space-y-1", className)} 
    <ul 
      className={cn("space-y-1", className)} 
      {...props}
    >
      {children}
    </ul>
  )
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {;

<<<<<<< HEAD

import React from "react",
import { cn } from "@/lib/utils",


=======
import React from "react",
import { cn } from "@/lib/utils",

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {cn} from "@/lib/utils";
interface SidebarMenuProps extends React && React.HTMLAttributes<HTMLUListElement> {;
  className?: string;
  children?: React && React.ReactNode;
}
  return (
    <ul className={cn ("space - y-1", class_name)} {...props}>;
      {children}
    </ul>);
}
}
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
