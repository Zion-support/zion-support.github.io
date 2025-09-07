
<<<<<<< HEAD

import React, { forwardRef } from "react",
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
=======
import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
interface SidebarMenuButtonProps extends React && React.ButtonHTMLAttributes<HTMLButtonElement> {;
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors"
          "text-muted-foreground hover: text-foreground hover:bg-accent"
>>>>>>> origin/main

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  children?: React.ReactNode,
  asChild?: boolean
}
<<<<<<< HEAD


export const SidebarMenuButton = null;

=======
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
);
SidebarMenuButton.displayName = "SidebarMenuButton";
);
import React, { forward_ref } from './react';
import { Slot } from '@radix - ui / react - slot';
import { cn } from '@/lib / utils';
import React, { forwardRef } from "react";""
import {Slot} from "@radix-ui/react-slot";""
import {cn} from "@/lib/utils";"
interface SidebarMenuButtonProps extends React && React.ButtonHTMLAttributes<HTMLButtonElement> {;

export const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(;

      <Comp;
        className={cn(
"
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors"""
          "text-muted-foreground hover: text-foreground hover:bg-accent"""
import {cn} from "@/lib/utils";""
import React, { forwardRef } from "react",""
import { Slot } from "@radix-ui/react-slot";""
import { cn } from "@/lib/utils";""
import { Slot } from "@radix-ui/react-slot",""
import { cn } from "@/lib/utils",""


interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(

          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",""
          "text-muted-foreground hover:text-foreground hover:bg-accent",""
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring","
          className;"
import React, { forwardRef } from "react",;""
import { Slot } from "@radix-ui/react-slot",;""
import { cn } from "@/lib/utils",;"
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {;

export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(;

        className={cn(;"
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",;""
          "text-muted-foreground hover:text-foreground hover:bg-accent",;""
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",;"
          className;)
        )}
        ref={ref as any}
        {...props}>;

      ;
pr-12325
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes < HTMLButtonElement> {
  class_name?: string;
  children?: React.ReactNode;
  as_child?: boolean;
}
export const SidebarMenuButton = forward_ref < HTMLButtonElement, SidebarMenuButtonProps>(
  ({ class_name, children, as_child = false, ...props }, ref) => {
    const Comp = as_child ? Slot : "button";
    return (
      <Comp;
        className={cn (
          "flex items - center w - full px - 3 py - 2 text - sm rounded - md font - medium transition - colors";
          "text - muted - foreground hover: text - foreground hover:bg - accent";
          "focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring",
          class_name)}
        ref={ref as any}
        {...props}
      >;
        {children}
      </Comp>);
  }
);
;
SidebarMenuButton.display_name = "SidebarMenuButton";
;
),

SidebarMenuButton.displayName = "SidebarMenuButton",
);

SidebarMenuButton.displayName = "SidebarMenuButton";
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
)
}) "
pr-12325
>>>>>>> origin/main
