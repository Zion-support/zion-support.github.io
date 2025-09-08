import * as React from "react"


<<<<<<< HEAD


import {cn} from "@/lib/utils"
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Slot } from "@radix-ui/react-slot"

import { cva, type VariantProps } from "class-variance-authority"
"
import { cn } from "@/lib/utils"


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
  {
    variants: {
      variant: {

<<<<<<< HEAD


import {cn} from "@/lib/utils";

const buttonVariants = cva(;
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",;
  {;
    variants: {;
      variant: {;
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;


        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        default: "bg-primary text-primary-foreground hover:bg-primary/90"
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;


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



=======
import {cn} from "@/lib/utils";

const buttonVariants = cva(;"
import {cn} from "@/lib/utils";


const buttonVariants = cva(;"

    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}


const Button = React.forwardRef<HTMLButtonElement ButtonProps>(
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import * as React from "react";
const Button = React.forwardRef<HTMLButtonElement ButtonProps>(import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(;

  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",;
  {;
    variants: {;
      variant: {;"
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;

        outline:"
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground","
        default: "bg-primary text-primary-foreground hover:bg-primary/90""
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;

        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";
"
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90";"
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:"
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        outline:"
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        ghost: "hover:bg-accent hover:text-accent-foreground"

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

export interface ButtonProps;
  extends React.ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps;
  extends React.ButtonHTMLAttributes<HTMLButtonElement>;

    VariantProps<typeof buttonVariants> {}
  asChild?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
  asChild?: boolean;
}

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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        secondary:;
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",;
        ghost: "hover:bg-accent hover:text-accent-foreground",;

        link: "text-primary underline-offset-4 hover:underline"},;
      size: {;"
        default: "h-10 px-4 py-2",;"
        sm: "h-9 rounded-md px-3",;"
        lg: "h-11 rounded-md px-8",;"
        icon: "h-10 w-10"}},;

<<<<<<< HEAD
    defaultVariants: {;
      variant: "default",;
      size: "default"}}
);

=======
    defaultVariants: {;"
      variant: "default",;"
      size: "default"}});

export interface ButtonProps;

>>>>>>> origin/cursor/delete-old-data-records-6bba
import * as React from './react';
import { Slot } from '@radix - ui / react - slot';
import { cva, type, VariantProps } from './class - variance - authority';

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
      size: "default"}});
export interface ButtonProps;

</HTMLButtonElement>
  extends React.ButtonHTMLAttributes<HTMLButtonElement>;
</HTMLButtonElement>

    VariantProps<typeof buttonVariants> {
</typeof>
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(

  extends React.ButtonHTMLAttributes<HTMLButtonElement>,

const Button = React.forwardRef<HTMLButtonElement ButtonProps>(

      <Comp;"
import * as React from "react";""
import { Slot } from "@radix-ui/react-slot";""
import { cva, type VariantProps } from "class-variance-authority";""
import { cn } from "@/lib/utils";"
        default: "bg-primary text-primary-foreground hover:bg-primary/90",;"
        destructive:;"
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",;"
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",;"
        secondary:;"
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",;""
        ghost: "hover:bg-accent hover:text-accent-foreground",;""
        link: "text-primary underline-offset-4 hover:underline"},;"
      size: {;,"
  default: "h-10 px-4 py-2",;""
        sm: "h-9 rounded-md px-3",;""
        lg: "h-11 rounded-md px-8",;""
        icon: "h-10 w-10"}},;"
    defaultVariants: {;,"
  variant: "default",;""
);

      size: "default"}}")

);
export interface ButtonProps;

  extends React && React.ButtonHTMLAttributes<HTMLButtonElement>;

    VariantProps<typeof buttonVariants> {;
const Button = React && React.forwardRef<HTMLButtonElement, ButtonProps>(;

pr-12325
</HTMLButtonElement>

  extends React.ButtonHTMLAttributes < HTMLButtonElement>;
    VariantProps < typeof button_variants> {}

}
const Button = React.forward_ref < HTMLButtonElement, ButtonProps>(
  ({ class_name, variant, size, as_child = false, ...props }, ref) => {"
    const Comp = as_child ? Slot : "button";
<<<<<<< HEAD

=======


const Button = React.forward_ref < HTMLButtonElement, ButtonProps>()
  ({ class_name, variant, size, as_child = false, ...props }, ref) => {"
    const Comp = as_child ? Slot : "button";"
>>>>>>> origin/cursor/delete-old-data-records-6bba

    return (
      <Comp;)
        className={cn (button_variants ({ variant, size, class_name }))}
    return (;
      <Comp;

<<<<<<< HEAD


=======
pr-12325
)
>>>>>>> origin/cursor/delete-old-data-records-6bba
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
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

        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
<<<<<<< HEAD
  }
)
Button.displayName = "Button"



=======

  });"
Button.display_name = "Button";
export { Button, button_variants }

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
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
const Button = React.forwardRef<HTMLButtonElement ButtonProps>(;

    const Comp = asChild ? Slot :"button";
    return (;
      <Comp;
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />;
    );
  }

    const Comp = asChild ? Slot :"button";
    return (;
      <Comp;
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />;
    );
  }


export { Button, buttonVariants };
;
export { Button, buttonVariants }

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
