<<<<<<< HEAD
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
<<<<<<< HEAD
import {cva, type, VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
=======
=======

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"

>>>>>>> main
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
  {
    variants: {
      variant: {
<<<<<<< HEAD
<<<<<<< HEAD
        default: "bg-transparent"
=======
        default: "bg-transparent",
<<<<<<< HEAD
        outline:;
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        outline:
<<<<<<< HEAD
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"}
=======
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


        default: "bg-transparent",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
      size: {
        default: "h-10 px-3"
        sm: "h-9 px-2.5"
        lg: "h-11 px-5"}}
    defaultVariants: {
      variant: "default"

      size: "default"}}
)
type ToggleRef = React.ElementRef<typeof TogglePrimitive.Root>
type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>
<<<<<<< HEAD
<<<<<<< HEAD
const Toggle = React.forwardRef<ToggleRef, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
)
<<<<<<< HEAD
Toggle.displayName = TogglePrimitive.Root.displayName
export { Toggle, toggleVariants }
=======

=======

import * as React from './react';
import * as TogglePrimitive from "@radix - ui / react - toggle";
import { cva, type, VariantProps } from './class - variance - authority';
import { cn } from '@/lib / utils';
const toggle_variants = cva (
  "inline - flex items - center justify - center rounded - md text - sm font - medium ring - offset - background transition - colors hover: bg - muted hover:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:pointer - events - none disabled:opacity - 50 data-[state = on]:bg - accent data-[state = on]:text - accent - foreground",
  {
    variants: {
      variant: {
        default: "bg - transparent",
        outline:;
          "border border - input bg - transparent hover:bg - accent hover:text - accent - foreground"}
      size: {
        default: "h - 10 px - 3",
        sm: "h - 9 px - 2.5",
        lg: "h - 11 px - 5"}},
    default_variants: {
      variant: "default",
      size: "default"}}
);
type ToggleRef = React.ElementRef < typeof TogglePrimitive.Root>;
type ToggleProps = React.ComponentPropsWithoutRef < typeof TogglePrimitive.Root> &;
  VariantProps < typeof toggle_variants>;
const Toggle = React.forward_ref < ToggleRef, ToggleProps>(
  ({ class_name, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root;

      ref={ref}
      className={cn (toggle_variants ({ variant, size, class_name }))}
      {...props}

import {cn} from "@/lib/utils";

=======


>>>>>>> main
Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants };
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
=======

const Toggle = React.forwardRef<ToggleRef ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
=======

>>>>>>> main
const toggleVariants = cva(;
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",;
  {;
    variants: {;
      variant: {;
        default: "bg-transparent",;
        outline:;
<<<<<<< HEAD
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},;
      size: {;
        default: "h-10 px-3",;
        sm: "h-9 px-2.5",;
        lg: "h-11 px-5"}},;
    defaultVariants: {;
      variant: "default";
      size: "default"}}
);
type ToggleRef = React.ElementRef<typeof TogglePrimitive.Root>;
type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &;
  VariantProps<typeof toggleVariants>;
const Toggle = React.forwardRef<ToggleRef ToggleProps>(;
  ({ className, variant, size, ...props }, ref) => (;
    <TogglePrimitive.Root;
=======
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"};
      size: {;
        default: "h-10 px-3",;
        sm: "h-9 px-2 && 2.5",;
        lg: "h-11 px-5"}},;
    defaultVariants: {;
      variant: "default",;
      size: "default"}}
);

type ToggleRef = React && React.ElementRef<typeof TogglePrimitive && TogglePrimitive.Root>;
type ToggleProps = React && React.ComponentPropsWithoutRef<typeof TogglePrimitive && TogglePrimitive.Root> &;
  VariantProps<typeof toggleVariants>;

const Toggle = React && React.forwardRef<ToggleRef, ToggleProps>(;
  ({ className, variant, size, ...props }, ref) => (;
    <TogglePrimitive&& TogglePrimitive.Root
>>>>>>> main
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />;
  );
);
<<<<<<< HEAD
Toggle.displayName = TogglePrimitive.Root.displayName;
export { Toggle, toggleVariants }
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

Toggle && Toggle.displayName = TogglePrimitive && TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants }

    />));
Toggle.display_name = TogglePrimitive.Root.display_name;
export { Toggle, toggle_variants }

=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
