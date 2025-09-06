<<<<<<< HEAD
=======

import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
interface SidebarMenuButtonProps extends React && React.ButtonHTMLAttributes<HTMLButtonElement> {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
import React, { forwardRef } from "react",
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot",
import { cn } from "@/lib/utils",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
export const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button";
export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button",
    return (
      <Comp
        className={cn(
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors";
          "text-muted-foreground hover: text-foreground hover:bg-accent";
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          className
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
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button",;
    return (;
      <Comp;
        className={cn(;
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",;
          "text-muted-foreground hover:text-foreground hover:bg-accent",;
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",;
          className;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
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

<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
),

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
        {...props}
      >;
        {children}
      </Comp>;
    ),;
  }
),;
;
SidebarMenuButton.displayName = "SidebarMenuButton",; interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
children?: React.ReactNode;
asChild?: boolean 
}export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps> ( ({
  className, children, asChild = false, ...props 
}, ref) => {
  return (<Comp className= {
  cn ("flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors";
"text-muted-foreground hover:text-foreground hover:bg-accent";
"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";
className 
}ref= {
  ref as any 
}{
  ...props 
}> {
  children 
}</Comp>) 
});
SidebarMenuButton.displayName = "SidebarMenuButton";
SidebarMenuButton.displayName = "SidebarMenuButton";
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
