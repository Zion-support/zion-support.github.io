
<<<<<<< HEAD
=======
import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
interface SidebarMenuButtonProps extends React && React.ButtonHTMLAttributes<HTMLButtonElement> {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  className?: string;
  children?: React && React.ReactNode;
  asChild?: boolean;
}

export const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(;
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(

          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors"

          "text-muted-foreground hover: text-foreground hover:bg-accent"


<<<<<<< HEAD



=======
import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { forwardRef } from "react",
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
  className?: string,
  children?: React.ReactNode,;
  asChild?: boolean;
}

export const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(;
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(


>>>>>>> origin/cursor/delete-old-data-records-6bba
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  children?: React.ReactNode,
  asChild?: boolean
}

export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button",

    return (
      <Comp
        className={cn(

<<<<<<< HEAD

=======
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",

          className
import React, { forwardRef } from "react",;
import { Slot } from "@radix-ui/react-slot",;

import { cn } from "@/lib/utils",;
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {;
  className?: string,;
  children?: React.ReactNode,;
  asChild?: boolean;
}
;
export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(;

          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",


          className
import React, { forwardRef } from "react",;
import { Slot } from "@radix-ui/react-slot",;
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
          className

        )}
        ref={ref as any}
        {...props}>;
        {children}
      </Comp>;
    );

  }

SidebarMenuButton && SidebarMenuButton.displayName = "SidebarMenuButton";

);
SidebarMenuButton && SidebarMenuButton.displayName = "SidebarMenuButton";
  });
SidebarMenuButton.displayName = "SidebarMenuButton";
);
import React, { forward_ref } from './react';
import { Slot } from '@radix - ui / react - slot';

import { cn } from '@/lib / utils';

  class_name?: string;
  children?: React.ReactNode;
  as_child?: boolean;
}
export const SidebarMenuButton = forward_ref < HTMLButtonElement, SidebarMenuButtonProps>(
  ({ class_name, children, as_child = false, ...props }, ref) => {";
    const Comp = as_child ? Slot : "button";
    return (
      <Comp;
        className={cn ("
          "flex items - center w - full px - 3 py - 2 text - sm rounded - md font - medium transition - colors";"
          "text - muted - foreground hover: text - foreground hover:bg - accent";"
          "focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring",
          class_name)}
        ref={ref as any}
        {...props}
      >;
        {children}
      </Comp>);
  });
;"
SidebarMenuButton.display_name = "SidebarMenuButton";
;


        ref={ref as any}
        {...props}
      >
        {children}
      </Comp>
    )
  });
SidebarMenuButton.displayName = "SidebarMenuButton";


        )}
        ref={ref as any}
        {...props}
      >
        {children}
      </Comp>
    )
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";

),

),
"
SidebarMenuButton.displayName = "SidebarMenuButton",
);

import React, { forwardRef } from "react",;
import { Slot } from "@radix-ui/react-slot",;
import { cn } from "@/lib/utils",;
;
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {;
  className?:string,;
  children?:React.ReactNode,;
  asChild?:boolean,;
}
;
export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(;
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot :"button",;
    return (;
      <Comp;
        className={cn(;
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",;
          "text-muted-foreground hover:text-foreground hover:bg-accent",;
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",;
          className;
        )}
        ref={ref as any}

export const SidebarMenuButton = forward_ref < HTMLButtonElement, SidebarMenuButtonProps>()
  ({ class_name, children, as_child = false, ...props }, ref) => {"
    const Comp = as_child ? Slot : "button";"
    return (
        className={cn ("
          "flex items - center w - full px - 3 py - 2 text - sm rounded - md font - medium transition - colors";""
          "text - muted - foreground hover: text - foreground hover:bg - accent";""
          "focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring",")
          class_name)}
        {...props}
      >;

      );

      ;"
SidebarMenuButton.displayName = "SidebarMenuButton",; interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {"

}export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps> ( ({

  return (<Comp className= {"
  cn ("flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors";""
"text-muted-foreground hover:text-foreground hover:bg-accent";""
"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";"
className;
}ref= {
  ref as any;
}{
  ...props;

}> {
  children 
}</Comp>) 
});
SidebarMenuButton.displayName = "SidebarMenuButton";

SidebarMenuButton.displayName = "SidebarMenuButton";
>>>>>>> origin/cursor/delete-old-data-records-6bba
