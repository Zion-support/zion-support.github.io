
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
interface SidebarMenuButtonProps extends React && React.ButtonHTMLAttributes<HTMLButtonElement> {;
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors"
=======
  className?: string;
  children?: React && React.ReactNode;
  asChild?: boolean;
}

export const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(;
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button";
    return (
      <Comp;
        className={cn(
"
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          "text-muted-foreground hover: text-foreground hover:bg-accent"

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
import React, { forwardRef } from "react",
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot",
import { cn } from "@/lib/utils",
<<<<<<< HEAD

import React, { forwardRef } from "react",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
interface SidebarMenuButtonProps extends React && React.ButtonHTMLAttributes<HTMLButtonElement> {;
=======
"
import React, { forwardRef } from "react";"
import {Slot} from "@radix-ui/react-slot";"
import {cn} from "@/lib/utils";"
import React, { forwardRef } from "react",";
import { Slot } from "@radix-ui/react-slot";"
import { cn } from "@/lib/utils";"
import { Slot } from "@radix-ui/react-slot","
import { cn } from "@/lib/utils",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
  className?: string,
  children?: React.ReactNode,;
  asChild?: boolean;
}
<<<<<<< HEAD
export const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(;
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  children?: React.ReactNode,
  asChild?: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
    return (
      <Comp
        className={cn(

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD

export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button",

    return (
      <Comp
        className={cn(

<<<<<<< HEAD
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className
import React, { forwardRef } from "react",;
import { Slot } from "@radix-ui/react-slot",;
=======

"
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors","
          "text-muted-foreground hover:text-foreground hover:bg-accent","
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className"
import React, { forwardRef } from "react",;"
import { Slot } from "@radix-ui/react-slot",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from "@/lib/utils",;
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {;
  className?: string,;
  children?: React.ReactNode,;
  asChild?: boolean;
}
;
export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(;
  ({ className, children, asChild = false, ...props }, ref) => {;"
    const Comp = asChild ? Slot : "button",;
    return (;
      <Comp;
        className={cn(;"
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",;"
          "text-muted-foreground hover:text-foreground hover:bg-accent",;"
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",;
          className;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          className
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

          className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        )}
        ref={ref as any}
        {...props}>;
        {children}
      </Comp>;
    );
  }
<<<<<<< HEAD

SidebarMenuButton.displayName = "SidebarMenuButton";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
SidebarMenuButton.displayName = "SidebarMenuButton";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
),


"
SidebarMenuButton.displayName = "SidebarMenuButton",
<<<<<<< HEAD
=======
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
);
SidebarMenuButton.displayName = "SidebarMenuButton";
);
import React, { forward_ref } from './react';
import { Slot } from '@radix - ui / react - slot';
=======
);"
SidebarMenuButton.displayName = "SidebarMenuButton";
);

import React, { forward_ref } from './react';'
import { Slot } from '@radix - ui / react - slot';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from '@/lib / utils';
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes < HTMLButtonElement> {}
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
  }
);
;"
SidebarMenuButton.display_name = "SidebarMenuButton";
;
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
),
"
SidebarMenuButton.displayName = "SidebarMenuButton",
);

<<<<<<< HEAD
SidebarMenuButton.displayName = "SidebarMenuButton";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
