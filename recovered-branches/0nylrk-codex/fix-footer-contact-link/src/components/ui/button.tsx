

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type, VariantProps} from "class-variance-authority"

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import {cn} from "@/lib/utils"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Slot } from "@radix-ui/react-slot"
=======

import { Slot } from "@radix-ui/react-slot""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cva, type VariantProps } from "class-variance-authority"
"
import { cn } from "@/lib/utils"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
  {
    variants: {
      variant: {


import {cn} from "@/lib/utils";

const buttonVariants = cva(;
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",;
  {;
    variants: {;
      variant: {;
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;

        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        outline:;
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground";


        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        default: "bg-primary text-primary-foreground hover:bg-primary/90"
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;

        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",



        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        ghost: "hover:bg-accent hover:text-accent-foreground"
        link: "text-primary underline-offset-4 hover:underline"}
      size: {
        default: "h-10 px-4 py-2"
        sm: "h-9 rounded-md px-3"
        lg: "h-11 rounded-md px-8"
        icon: "h-10 w-10"}}
    defaultVariants: {
      variant: "default"
      size: "default"}}
)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
  {
    variants: {
      variant: {
<<<<<<< HEAD
        default: "bg-primary text-primary-foreground hover:bg-primary/90"
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

const buttonVariants = cva("
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
  {}
    variants: {}
      variant: {}
";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {cn} from "@/lib/utils";

const buttonVariants = cva(;"
=======


    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",;
  {;
    variants: {;
      variant: {;"
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;



        outline:"
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground","
        default: "bg-primary text-primary-foreground hover:bg-primary/90""
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
"
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";"
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:"
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


        outline:"
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        ghost: "hover:bg-accent hover:text-accent-foreground"
=======



        secondary:"
          "bg-secondary text-secondary-foreground hover:bg-secondary/80""
        ghost: "hover:bg-accent hover:text-accent-foreground""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        link: "text-primary underline-offset-4 hover:underline"}
      size: {"
        default: "h-10 px-4 py-2""
        sm: "h-9 rounded-md px-3""
        lg: "h-11 rounded-md px-8""
        icon: "h-10 w-10"}}
    defaultVariants: {"
      variant: "default""
      size: "default"}}
)

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export interface ButtonProps;
  extends React.ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps;
  extends React.ButtonHTMLAttributes<HTMLButtonElement>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    VariantProps<typeof buttonVariants> {}
  asChild?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
  asChild?: boolean;
}

<<<<<<< HEAD
const Button = React.forwardRef<HTMLButtonElement ButtonProps>(import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
=======
const Button = React.forwardRef<HTMLButtonElement ButtonProps>(

  ({ className, variant, size, asChild = false, ...props }, ref) => {"
    const Comp = asChild ? Slot : "button"
    return (
      <Comp;
"
import * as React from "react";"
import { Slot } from "@radix-ui/react-slot";"
import { cva, type VariantProps } from "class-variance-authority";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from "@/lib/utils";
const buttonVariants = cva(;"
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",;
  {;
    variants: {;
      variant: {;"
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;
        destructive:;"
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",;
        outline:;"
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        secondary:;
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",;
        ghost: "hover:bg-accent hover:text-accent-foreground",;
=======



        secondary:;"
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",;"
        ghost: "hover:bg-accent hover:text-accent-foreground",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        link: "text-primary underline-offset-4 hover:underline"},;
      size: {;"
        default: "h-10 px-4 py-2",;"
        sm: "h-9 rounded-md px-3",;"
        lg: "h-11 rounded-md px-8",;"
        icon: "h-10 w-10"}},;
    defaultVariants: {;"
      variant: "default",;"
      size: "default"}}
);

export interface ButtonProps;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  extends React && React.ButtonHTMLAttributes<HTMLButtonElement>;
    VariantProps<typeof buttonVariants> {;
  asChild?: boolean;
}

const Button = React && React.forwardRef<HTMLButtonElement, ButtonProps>(;
  ({ className, variant, size, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button";

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import * as React from './react';
import { Slot } from '@radix - ui / react - slot';
import { cva, type, VariantProps } from './class - variance - authority';
=======

  extends React && React.ButtonHTMLAttributes<HTMLButtonElement>;
    VariantProps<typeof buttonVariants> {;
  asChild?: boolean;
}

const Button = React && React.forwardRef<HTMLButtonElement, ButtonProps>(;
  ({ className, variant, size, asChild = false, ...props }, ref) => {;"
    const Comp = asChild ? Slot : "button";




import * as React from './react';'
import { Slot } from '@radix - ui / react - slot';'
import { cva, type, VariantProps } from './class - variance - authority';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from '@/lib / utils';
const button_variants = cva ("
  "inline - flex items - center justify - center gap - 2 whitespace - nowrap rounded - md text - sm font - medium ring - offset - background transition - colors focus - visible: outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:pointer - events - none disabled:opacity - 50 [&_svg]:pointer - events - none [&_svg]:size - 4 [&_svg]:shrink - 0",
  {}
    variants: {}
      variant: {"
        default: "bg - primary text - primary - foreground hover:bg - primary / 90","
        destructive: "bg - destructive text - destructive - foreground hover:bg - destructive / 90";
        outline:;"
          "border border - input bg - background hover:bg - accent hover:text - accent - foreground";
        secondary:;"
          "bg - secondary text - secondary - foreground hover:bg - secondary / 80","
        ghost: "hover:bg - accent hover:text - accent - foreground","
        link: "text - primary underline - offset - 4 hover:underline"},
      size: {"
        default: "h - 10 px - 4 py - 2","
        sm: "h - 9 rounded - md px - 3","
        lg: "h - 11 rounded - md px - 8","
        icon: "h - 10 w - 10"}},
    default_variants: {"
      variant: "default","
      size: "default"}}
);
export interface ButtonProps;
  extends React.ButtonHTMLAttributes < HTMLButtonElement>;
    VariantProps < typeof button_variants> {}
  as_child?: boolean;
}
const Button = React.forward_ref < HTMLButtonElement, ButtonProps>(
  ({ class_name, variant, size, as_child = false, ...props }, ref) => {"
    const Comp = as_child ? Slot : "button";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    return (
      <Comp;
        className={cn (button_variants ({ variant, size, class_name }))}
    return (;
      <Comp;

        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  extends React.ButtonHTMLAttributes<HTMLButtonElement>;
    VariantProps<typeof buttonVariants> {;
  asChild?: boolean;
}
;
const Button = React.forwardRef<HTMLButtonElement ButtonProps>(;
  ({ className, variant, size, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button";
    return (;
      <Comp;
=======
    return (
      <Comp;
        className={cn (button_variants ({ variant, size, class_name }))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
=======
  }
)"
Button.displayName = "Button"


export { Button, buttonVariants }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export { Button, buttonVariants }

<<<<<<< HEAD
export { Button, buttonVariants };
;
export { Button, buttonVariants }
;
  }
)
Button.displayName = "Button"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

<<<<<<< HEAD
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      />);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);
Button && Button.displayName = "Button";

export { Button, buttonVariants }

export { Button, buttonVariants }

      />);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
);"
Button.display_name = "Button";
export { Button, button_variants }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD
";
import * as React from "react";"
import { Slot } from "@radix-ui/react-slot";"
import { cva, type VariantProps } from "class-variance-authority";
;"
import { cn } from "@/lib/utils";
;
const buttonVariants = cva(;"
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",;
  {;
    variants:{;
      variant:{;"
        default:"bg-primary text-primary-foreground hover:bg-primary/90",;
        destructive:;"
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",;
        outline:;"
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",;
        secondary:;"
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",;"
        ghost:"hover:bg-accent hover:text-accent-foreground",;"
        link:"text-primary underline-offset-4 hover:underline"},;
      size:{;"
        default:"h-10 px-4 py-2",;"
        sm:"h-9 rounded-md px-3",;"
        lg:"h-11 rounded-md px-8",;"
        icon:"h-10 w-10"}},;
    defaultVariants:{;"
      variant:"default",;"
=======

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
;
import { cn } from "@/lib/utils";
;
const buttonVariants = cva(;
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",;
  {;
    variants:{;
      variant:{;
        default:"bg-primary text-primary-foreground hover:bg-primary/90",;
        destructive:;
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",;
        outline:;
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",;
        secondary:;
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",;
        ghost:"hover:bg-accent hover:text-accent-foreground",;
        link:"text-primary underline-offset-4 hover:underline"},;
      size:{;
        default:"h-10 px-4 py-2",;
        sm:"h-9 rounded-md px-3",;
        lg:"h-11 rounded-md px-8",;
        icon:"h-10 w-10"}},;
    defaultVariants:{;
      variant:"default",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      size:"default"}}
);
;
export interface ButtonProps;
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,;
    VariantProps<typeof buttonVariants> {;
  asChild?:boolean;
}
;
const Button = React.forwardRef<HTMLButtonElement ButtonProps>(;
<<<<<<< HEAD
  ({ className, variant, size, asChild = false, ...props }, ref) => {;"
=======
  ({ className, variant, size, asChild = false, ...props }, ref) => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const Comp = asChild ? Slot :"button";
    return (;
      <Comp;
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />;
    );
  }
<<<<<<< HEAD
);"
Button.displayName = "Button";
;
export { Button, buttonVariants } {}
  variants: {}
  variant: {";
  default: "bg-primary text-primary-foreground hover:bg-primary/90";"
destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";"
outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground";"
secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80";"
ghost: "hover:bg-accent hover:text-accent-foreground";"
link: "text-primary underline-offset-4 hover:underline" 
};
size: {"
  default: "h-10 px-4 py-2";"
sm: "h-9 rounded-md px-3";"
lg: "h-11 rounded-md px-8";"
icon: "h-10 w-10" 
}
};
defaultVariants: {"
  variant: "default";"
size: "default" 
}
}VariantProps<typeof buttonVariants> {}
  asChild?: boolean;
}return (<Comp className= {}
  cn (buttonVariants ({}
  variant, size, className;
}) ) 
}ref= {}
  ref;
}{}
  ...props;
}/>) "
}) Button.displayName = "Button" export {};
  Button, buttonVariants;
}
export { Button, buttonVariants }
;
export { Button, buttonVariants };
;
export { Button, buttonVariants };
;
<<<<<<< HEAD
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
=======
);
Button.displayName = "Button";
;
export { Button, buttonVariants } {
  variants: {
  variant: {
  default: "bg-primary text-primary-foreground hover:bg-primary/90";
destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80";
ghost: "hover:bg-accent hover:text-accent-foreground";
link: "text-primary underline-offset-4 hover:underline" 
};
size: {
  default: "h-10 px-4 py-2";
sm: "h-9 rounded-md px-3";
lg: "h-11 rounded-md px-8";
icon: "h-10 w-10" 
}
};
defaultVariants: {
  variant: "default";
size: "default" 
}
}VariantProps<typeof buttonVariants> {
  asChild?: boolean 
}return (<Comp className= {
  cn (buttonVariants ({
  variant, size, className 
}) ) 
}ref= {
  ref 
}{
  ...props 
}/>) 
}) Button.displayName = "Button" export {
  Button, buttonVariants 
}
export { Button, buttonVariants }

export { Button, buttonVariants };
;
export { Button, buttonVariants }
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
