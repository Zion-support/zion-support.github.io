
<<<<<<< HEAD
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

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
import React, { forwardRef } from "react",
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot",
import { cn } from "@/lib/utils",
import React, { forwardRef } from "react",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
interface SidebarMenuButtonProps extends React && React.ButtonHTMLAttributes<HTMLButtonElement> {;

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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button",

    return (
      <Comp
        className={cn(

<<<<<<< HEAD
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className
import React, { forwardRef } from "react",;
import { Slot } from "@radix-ui/react-slot",;
=======
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className
import React, { forwardRef } from "react",;
import { Slot } from "@radix-ui/react-slot",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          className
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

          className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button",;
    return (;
      <Comp;
        className={cn(;
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",;
          "text-muted-foreground hover:text-foreground hover:bg-accent",;
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",;
          className;
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        )}
        ref={ref as any}
        {...props}>;
        {children}
      </Comp>;
    );
  }
SidebarMenuButton.displayName = "SidebarMenuButton";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
SidebarMenuButton.displayName = "SidebarMenuButton";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
),

SidebarMenuButton && SidebarMenuButton.displayName = "SidebarMenuButton";

SidebarMenuButton.displayName = "SidebarMenuButton",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
),
"
SidebarMenuButton.displayName = "SidebarMenuButton",
);

SidebarMenuButton.displayName = "SidebarMenuButton";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
)
}) "
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
