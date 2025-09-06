<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenuItem({
  className,
  children,
  ...props
}: SidebarMenuItemProps) {
  return (
    <li className={cn("", className)} {...props}>
      {children}


=======
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLLIElement> {;

  className?: string;
  children?: React && React.ReactNode;

import React from "react",
import { cn } from "@/lib/utils",

import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
  className?: string;
  children?: React && React.ReactNode;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function SidebarMenuItem(): any ({ className, children, ...props }: SidebarMenuItemProps) {;
  return (
    <li
      className={cn("", className)} 
      {...props}>;
      {children}
    </li>;
  );
}

    </li>);
}
<<<<<<< HEAD
    </li>
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  );
}
;

}
<<<<<<< HEAD
export function SidebarMenuItem({
  className
  children
  ...props
}: SidebarMenuItemProps) {
  return (
    <li className={cn("", className)} {...props}>
      {children}
    </li>
  );
}
  )
}
;
  )
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
    </li>);
}
