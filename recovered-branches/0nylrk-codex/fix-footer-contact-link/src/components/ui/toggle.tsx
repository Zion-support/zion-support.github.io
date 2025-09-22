import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"

import { cva, type VariantProps } from "class-variance-authority"
"
import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
  {
    variants: {
      variant: {

        default: "bg-transparent",

        default: "bg-transparent"
        default: "bg-transparent",
import * as TogglePrimitive from "@radix-ui/react-toggle"const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
  {
    variants: {
      variant: {        default: "bg-transparent",
import * as TogglePrimitive from "@radix-ui/react-toggle"const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
  {
    variants: {
      variant: {        default: "bg-transparent",
import * as TogglePrimitive from "@radix-ui/react-toggle"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import {cva, type, VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
  {
    variants: {
      variant: {

        default: "bg-transparent",

default: "bg-transparent",

        default: "bg-transparent"
        default: "bg-transparent",
        outline:;
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"};
        outline:"
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"}"
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},

        default: "bg-transparent",

      size: {
        default: "h-10 px-3"
        sm: "h-9 px-2.5"


      size: {"
        default: "h-10 px-3""
        sm: "h-9 px-2.5""
        lg: "h-11 px-5"}}
    defaultVariants: {"
      variant: "default"
"
      size: "default"}}
)
type ToggleRef = React.ElementRef<typeof TogglePrimitive.Root>
type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>

"

import {cn} from "@/lib/utils";

const Toggle = React.forwardRef<ToggleRef, ToggleProps>(
Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants };
;

const Toggle = React.forwardRef<ToggleRef ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
)
Toggle.displayName = TogglePrimitive.Root.displayName
export { Toggle, toggleVariants }

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants };
;

Toggle.displayName = TogglePrimitive.Root.displayName;
export { Toggle, toggleVariants };
;


const Toggle = React.forwardRef<ToggleRef ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root"
import * as React from "react";"
import * as TogglePrimitive from "@radix-ui/react-toggle";"
import { cva, type VariantProps } from "class-variance-authority";"
import { cn } from "@/lib/utils";

      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />;
  );
);

Toggle && Toggle.displayName = TogglePrimitive && TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants }

    />));
Toggle.display_name = TogglePrimitive.Root.display_name;
export { Toggle, toggle_variants }

;
;

;
    />));
Toggle.display_name = TogglePrimitive.Root.display_name;
export { Toggle, toggle_variants };
;
Toggle.displayName = TogglePrimitive.Root.displayName;
;
export { Toggle, toggleVariants } {}
  variants: {}
  variant: {";
  default: "bg-transparent";"
outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground" 
};
size: {"
  default: "h-10 px-3";"
sm: "h-9 px-2.5";"
lg: "h-11 px-5" 
}
};
defaultVariants: {"
  variant: "default";"
size: "default" 
}
}ref;
}className= {}
  cn (toggleVariants ({}
  variant, size, className;
}) ) 
}{}
  ...props;
}/>) ) Toggle.displayName = TogglePrimitive.Root.displayName export {};
  Toggle, toggleVariants;
}
Toggle.displayName = TogglePrimitive.Root.displayName;
export { Toggle, toggleVariants };
;
      ref={ref}
      className={cn (toggle_variants ({ variant, size, class_name }))}
      {...props}
    />));
Toggle.display_name = TogglePrimitive.Root.display_name;
export { Toggle, toggle_variants }

";
import * as React from "react"""
import * as TogglePrimitive from "@radix-ui/react-toggle"""
import { cva, type VariantProps } from "class-variance-authority"""
import { cn } from "@/lib/utils""
const toggleVariants = cva("
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground""
  {
    variants: {,
  variant: {

"
        default: "bg-transparent",""
        default: "bg-transparent"","
  default: "bg-transparent","
        outline:;"
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"};"
        outline:"
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"}""
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},""
      size: {,"
  default: "h-10 px-3"""
        sm: "h-9 px-2.5"","
  lg: "h-11 px-5"}}"
    defaultVariants: {,"
  variant: "default"""
      size: "default"}}")
)
type ToggleRef = React.ElementRef<typeof TogglePrimitive.Root>
</typeof>
type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>
type ToggleRef = React.ElementRef < typeof TogglePrimitive.Root>;
type ToggleProps = React.ComponentPropsWithoutRef < typeof TogglePrimitive.Root> &;
  VariantProps < typeof toggle_variants>;
const Toggle = React.forward_ref < ToggleRef, ToggleProps>()
  ({ class_name, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root;

      ref={ref})
      className={cn (toggle_variants ({ variant, size, class_name }))}
      {...props}
import {cn} from "@/lib/utils";"
Toggle.displayName = TogglePrimitive.Root.displayName;
export { Toggle, toggleVariants };
;

const Toggle = React.forwardRef<ToggleRef ToggleProps>(

    <TogglePrimitive.Root;"
import * as React from "react";""
import * as TogglePrimitive from "@radix-ui/react-toggle";""
import { cva, type VariantProps } from "class-variance-authority";""
import { cn } from "@/lib/utils";"
const toggleVariants = cva(;"
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",;"
  {;
    variants: {;,
  variant: {;"
        default: "bg-transparent",;"
      size: {;,"
  default: "h-10 px-3",;""
        sm: "h-9 px-2 && 2.5",;""
        lg: "h-11 px-5"}},;"
    defaultVariants: {;,"
  variant: "default",;""
);

type ToggleRef = React && React.ElementRef<typeof TogglePrimitive && TogglePrimitive.Root>;

type ToggleProps = React && React.ComponentPropsWithoutRef<typeof TogglePrimitive && TogglePrimitive.Root> &;
  VariantProps<typeof toggleVariants>;

const Toggle = React && React.forwardRef<ToggleRef, ToggleProps>(;

    <TogglePrimitive&& TogglePrimitive.Root;
      className={cn(toggleVariants({ variant, size, className }))}
    />;
pr-12325
</TogglePrimitive>"

