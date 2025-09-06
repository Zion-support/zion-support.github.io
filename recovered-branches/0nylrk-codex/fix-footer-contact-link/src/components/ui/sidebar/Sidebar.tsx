
import React from "react";
import { cn } from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
import React from "react",
import { cn } from "@/lib/utils",
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}


export function Sidebar(): any ({ className, children, ...props }: SidebarProps) {;
  return (
    <div
=======
      className;
      className={cn(;
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200";

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        className

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        className

import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string,;
  children?: React.ReactNode;
}
;
export function Sidebar({ className, children, ...props }: SidebarProps) {;
  return (;
    <div;
      className={cn(;
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200";
        className;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      )}
      {...props}>;
      {children}

    </div>;
  );
}

