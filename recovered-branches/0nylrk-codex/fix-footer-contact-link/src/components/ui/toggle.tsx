<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import {cva, type, VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
<<<<<<< HEAD
=======

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
  {
    variants: {
      variant: {

<<<<<<< HEAD
<<<<<<< HEAD
        default: "bg-transparent",


        default: "bg-transparent"
        default: "bg-transparent",
        outline:;
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"};
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"}
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        default: "bg-transparent",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const Toggle = React.forwardRef<ToggleRef, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
<<<<<<< HEAD
      className={cn(toggleVariants({ variant, size, className }))}
=======
      className={cn (toggle_variants ({ variant, size, class_name }))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {...props}
    />
  )
)
<<<<<<< HEAD
Toggle.displayName = TogglePrimitive.Root.displayName
export { Toggle, toggleVariants }
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {cn} from "@/lib/utils";

=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants };
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const Toggle = React.forwardRef<ToggleRef ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
<<<<<<< HEAD
      ref={ref}
      className={cn (toggle_variants ({ variant, size, class_name }))}
      {...props}
import {cn} from "@/lib/utils";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const toggleVariants = cva(;
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",;
  {;
    variants: {;
      variant: {;
        default: "bg-transparent",;
        outline:;
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
;
import { cn } from "@/lib/utils";
;
const toggleVariants = cva(;
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",;
  {;
    variants:{;
      variant:{;
        default:"bg-transparent",;
        outline:;
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},;
      size:{;
        default:"h-10 px-3",;
        sm:"h-9 px-2.5",;
        lg:"h-11 px-5"}},;
    defaultVariants:{;
      variant:"default",;
      size:"default"}}
);
;
type ToggleRef = React.ElementRef<typeof TogglePrimitive.Root>;
type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &;
  VariantProps<typeof toggleVariants>;
;
const Toggle = React.forwardRef<ToggleRef ToggleProps>(;
  ({ className, variant, size, ...props }, ref) => (;
    <TogglePrimitive.Root;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />;
  );
);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

Toggle && Toggle.displayName = TogglePrimitive && TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    />));
Toggle.display_name = TogglePrimitive.Root.display_name;
export { Toggle, toggle_variants }

;


<<<<<<< HEAD
    />));
Toggle.display_name = TogglePrimitive.Root.display_name;
export { Toggle, toggle_variants }
;
Toggle.displayName = TogglePrimitive.Root.displayName;
;
export { Toggle, toggleVariants } {
  variants: {
  variant: {
  default: "bg-transparent";
outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground" 
};
size: {
  default: "h-10 px-3";
sm: "h-9 px-2.5";
lg: "h-11 px-5" 
}
};
defaultVariants: {
  variant: "default";
size: "default" 
}
}ref 
}className= {
  cn (toggleVariants ({
  variant, size, className 
}) ) 
}{
  ...props 
}/>) ) Toggle.displayName = TogglePrimitive.Root.displayName export {
  Toggle, toggleVariants 
}
Toggle.displayName = TogglePrimitive.Root.displayName;
export { Toggle, toggleVariants }
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
