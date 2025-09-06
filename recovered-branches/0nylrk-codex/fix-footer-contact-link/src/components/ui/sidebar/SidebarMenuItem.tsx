<<<<<<< HEAD
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
import { cn } from "@/lib/utils",
=======
import React from "react";
import { cn } from "@/lib/utils";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
<<<<<<< HEAD
  className?: string;
  children?: React && React.ReactNode;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}

export function SidebarMenuItem({
  className,
  children,
  ...props
}: SidebarMenuItemProps) {
  return (
    <li className={cn("", className)} {...props}>
      {children}


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
    </li>
  );
}
;

}
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
;
    </li>);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
