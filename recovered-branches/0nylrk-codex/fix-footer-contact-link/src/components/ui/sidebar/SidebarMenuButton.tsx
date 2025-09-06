
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
interface SidebarMenuButtonProps extends React && React.ButtonHTMLAttributes<HTMLButtonElement> {;

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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { forwardRef } from "react",
<<<<<<< HEAD
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
=======
import { Slot } from "@radix-ui/react-slot",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          className
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button",;
    return (;
      <Comp;
        className={cn(;
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",;
          "text-muted-foreground hover:text-foreground hover:bg-accent",;
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",;
          className;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        )}
        ref={ref as any}
        {...props}>;
        {children}
      </Comp>;
    );
  }


SidebarMenuButton && SidebarMenuButton.displayName = "SidebarMenuButton";

=======
import React, { forward_ref } from './react';
import { Slot } from '@radix - ui / react - slot';
import { cn } from '@/lib / utils';
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

),

SidebarMenuButton.displayName = "SidebarMenuButton",
);
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
SidebarMenuButton.displayName = "SidebarMenuButton";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
