<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarMenu({
  className
  children
  ...props
}: SidebarMenuProps) {
  return (
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
=======


import React from "react",
import { cn } from "@/lib/utils",


=======
import {cn} from "@/lib/utils";
interface SidebarMenuProps extends React && React.HTMLAttributes<HTMLUListElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  className?: string;
  children?: React && React.ReactNode;
}
  return (
    <ul className={cn ("space - y-1", class_name)} {...props}>;
      {children}
<<<<<<< HEAD


export function SidebarMenu(): any ({ className, children, ...props }: SidebarMenuProps) {;
  return (
    <ul
      className={cn("space-y-1", className)} 
      {...props}>;
      {children}
    </ul>;
  );
<<<<<<< HEAD
}
}
;
=======
=======
  return (

    <ul 
      className={cn("space-y-1", className)} 
=======
    <ul 
      className={cn("space-y-1", className)} 

  );



}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
    </ul>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
