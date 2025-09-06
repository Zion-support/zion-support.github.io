<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx
import * as React from "react"

=======

import * as React from "react"

=======
import * as React from "react"
<<<<<<< HEAD
import {Slot} from "@radix-ui/react-slot"
import {cva, type, VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
  {
    variants: {
      variant: {
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx
import {cn} from "@/lib/utils";
const buttonVariants = cva(;
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",;
  {;
    variants: {;
      variant: {;
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx

        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        outline:;
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground";


        default: "bg-primary text-primary-foreground hover:bg-primary/90",;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";

        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
        default: "bg-primary text-primary-foreground hover:bg-primary/90"
=======
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
=======
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
export interface ButtonProps
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export interface ButtonProps;
  extends React.ButtonHTMLAttributes<HTMLButtonElement>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface ButtonProps
<<<<<<< HEAD
  extends React.ButtonHTMLAttributes<HTMLButtonElement>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
<<<<<<< HEAD

const Button = React.forwardRef<HTMLButtonElement ButtonProps>(
=======
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
=======
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement ButtonProps>(
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(;
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",;
  {;
    variants: {;
      variant: {;
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;
        destructive:;
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",;
        outline:;
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",;
<<<<<<< HEAD

========
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        outline:;
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        secondary:;
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",;
        ghost: "hover:bg-accent hover:text-accent-foreground",;
        link: "text-primary underline-offset-4 hover:underline"},;
      size: {;
        default: "h-10 px-4 py-2",;
        sm: "h-9 rounded-md px-3",;
        lg: "h-11 rounded-md px-8",;
        icon: "h-10 w-10"}},;
    defaultVariants: {;
      variant: "default",;
      size: "default"}}
);
export interface ButtonProps;
<<<<<<< HEAD
  extends React && React.ButtonHTMLAttributes<HTMLButtonElement>;
    VariantProps<typeof buttonVariants> {;
  asChild?: boolean;
}
const Button = React && React.forwardRef<HTMLButtonElement, ButtonProps>(;
  ({ className, variant, size, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx
import * as React from './react';
import { Slot } from '@radix - ui / react - slot';
import { cva, type, VariantProps } from './class - variance - authority';
import { cn } from '@/lib / utils';
const button_variants = cva (
  "inline - flex items - center justify - center gap - 2 whitespace - nowrap rounded - md text - sm font - medium ring - offset - background transition - colors focus - visible: outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:pointer - events - none disabled:opacity - 50 [&_svg]:pointer - events - none [&_svg]:size - 4 [&_svg]:shrink - 0",
  {
    variants: {
      variant: {
        default: "bg - primary text - primary - foreground hover:bg - primary / 90",
        destructive: "bg - destructive text - destructive - foreground hover:bg - destructive / 90";
        outline:;
          "border border - input bg - background hover:bg - accent hover:text - accent - foreground";
        secondary:;
          "bg - secondary text - secondary - foreground hover:bg - secondary / 80",
        ghost: "hover:bg - accent hover:text - accent - foreground",
        link: "text - primary underline - offset - 4 hover:underline"},
      size: {
        default: "h - 10 px - 4 py - 2",
        sm: "h - 9 rounded - md px - 3",
        lg: "h - 11 rounded - md px - 8",
        icon: "h - 10 w - 10"}},
    default_variants: {
      variant: "default",
      size: "default"}}
);
export interface ButtonProps;
  extends React.ButtonHTMLAttributes < HTMLButtonElement>;
    VariantProps < typeof button_variants> {
  as_child?: boolean;
}
const Button = React.forward_ref < HTMLButtonElement, ButtonProps>(
  ({ class_name, variant, size, as_child = false, ...props }, ref) => {
    const Comp = as_child ? Slot : "button";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx
    return (
      <Comp;
        className={cn (button_variants ({ variant, size, class_name }))}
=======
    return (;
      <Comp;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        className={cn(buttonVariants({ variant, size, className }))}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        ref={ref}
        {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />
    )
  }
)
Button.displayName = "Button"
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx
);
Button && Button.displayName = "Button";
export { Button, buttonVariants }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx
      />);
  }
);
Button.display_name = "Button";
export { Button, button_variants }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot :"button";
    return (;
      <Comp;
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />;
    );
  }
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/button.tsx
=======
<<<<<<< HEAD
export { Button, buttonVariants }
=======

<<<<<<< HEAD
export { Button, buttonVariants };
;
=======
export { Button, buttonVariants }
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
