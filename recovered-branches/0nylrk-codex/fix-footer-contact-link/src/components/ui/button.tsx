<<<<<<< HEAD
import * as React from &quot;react&quot;
import { Slot } from &quot;@radix-ui/react-slot&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;

import { cn } from &quot;@/lib/utils&quot;

const buttonVariants = cva(
<<<<<<< HEAD
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
=======
  &quot;inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  {
    variants: {
      variant: {
        default: &quot;bg-primary text-primary-foreground hover:bg-primary/90&quot;,
        destructive:
          &quot;bg-destructive text-destructive-foreground hover:bg-destructive/90&quot;,
        outline:
          &quot;border border-input bg-background hover:bg-accent hover:text-accent-foreground&quot;,
        secondary:
          &quot;bg-secondary text-secondary-foreground hover:bg-secondary/80&quot;,
        ghost: &quot;hover:bg-accent hover:text-accent-foreground&quot;,
        link: &quot;text-primary underline-offset-4 hover:underline&quot;},
      size: {
        default: &quot;h-10 px-4 py-2&quot;,
        sm: &quot;h-9 rounded-md px-3&quot;,
        lg: &quot;h-11 rounded-md px-8&quot;,
        icon: &quot;h-10 w-10&quot;}},
    defaultVariants: {
      variant: &quot;default&quot;,
      size: &quot;default&quot;}}
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : &quot;button&quot;
    return (
      <Comp
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />;
    );
  }
<<<<<<< HEAD
)
Button.displayName = &quot;Button&quot;

=======
);
Button.displayName = "Button";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
export { Button, buttonVariants }
;