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

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export function SidebarMenuItem(): any ({ className, children, ...props }: SidebarMenuItemProps) {;
  return (
    <li
      className={cn("", className)} 
      {...props}>;
      {children}
    </li>;
  );
}

<<<<<<< HEAD
=======
    </li>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
    </li>);
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </li>
  );
}
;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  )
}
;
    </li>);
}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
