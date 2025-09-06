
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import {cva, type, VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
  {
    variants: {
      variant: {
<<<<<<< HEAD
        default: "bg-transparent"
        default: "bg-transparent",
        outline:;
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"};
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"}
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},
=======


        default: "bg-transparent",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
const Toggle = React.forwardRef<ToggleRef, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn (toggle_variants ({ variant, size, class_name }))}
      {...props}
<<<<<<< HEAD
    />
  )
)
Toggle.displayName = TogglePrimitive.Root.displayName
export { Toggle, toggleVariants }

=======
    />
  )
)
<<<<<<< HEAD
Toggle.displayName = TogglePrimitive.Root.displayName
export { Toggle, toggleVariants }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

import {cn} from "@/lib/utils";

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants };
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

const Toggle = React.forwardRef<ToggleRef ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleVariants = cva(;
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",;
  {;
    variants: {;
      variant: {;
        default: "bg-transparent",;
        outline:;
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
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />;
  );
);

Toggle && Toggle.displayName = TogglePrimitive && TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants }
;
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
