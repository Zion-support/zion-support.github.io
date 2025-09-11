import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type, VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


        default: "bg-primary text-primary-foreground hover:bg-primary/90",;

        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
=======
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",



        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export interface ButtonProps;
  extends React.ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>;
=======

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
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",;
  {;
    variants: {;
      variant: {;
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;
        destructive:;
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",;
        outline:;
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",;

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
  extends React && React.ButtonHTMLAttributes<HTMLButtonElement>;
    VariantProps<typeof buttonVariants> {;
  asChild?: boolean;
}

const Button = React && React.forwardRef<HTMLButtonElement, ButtonProps>(;
  ({ className, variant, size, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button";

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

    return (
      <Comp;
        className={cn (button_variants ({ variant, size, class_name }))}
=======
    return (;
      <Comp;

        className={cn(buttonVariants({ variant, size, className }))}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
export { Button, buttonVariants }

=======
      />);
  }
);
Button.display_name = "Button";
export { Button, button_variants }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
