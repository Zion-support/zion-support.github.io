>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import {cva, type, VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
=======import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
  {
    variants: {
      variant: {


        default: "bg-transparent"
        default: "bg-transparent",
        outline:;
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"};
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"}
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},
=======
=======
        default: "bg-transparent",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      size: "default"}}
)
type ToggleRef = React.ElementRef<typeof TogglePrimitive.Root>
type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>

=======const Toggle = React.forwardRef<ToggleRef, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      ref={ref}
      className={cn (toggle_variants ({ variant, size, class_name }))}
      {...props}
==============
import {cn} from "@/lib/utils";

=======

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants };
;
==============

=======
const Toggle = React.forwardRef<ToggleRef ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const toggleVariants = cva(;
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",;
  {;
    variants: {;
      variant: {;
        default: "bg-transparent",;
        outline:;
type ToggleRef = React && React.ElementRef<typeof TogglePrimitive && TogglePrimitive.Root>;
type ToggleProps = React && React.ComponentPropsWithoutRef<typeof TogglePrimitive && TogglePrimitive.Root> &;
  VariantProps<typeof toggleVariants>;

const Toggle = React && React.forwardRef<ToggleRef, ToggleProps>(;
  ({ className, variant, size, ...props }, ref) => (;
    <TogglePrimitive&& TogglePrimitive.Root
export { Toggle, toggleVariants }
<<<<<<< HEAD
    />));
Toggle.display_name = TogglePrimitive.Root.display_name;
export { Toggle, toggle_variants }

;

