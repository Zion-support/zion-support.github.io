import * as React from &quot;react&quot;
import { Slot } from &quot;@radix-ui/react-slot&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;

import { cn } from &quot;@/lib/utils&quot;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",  {
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
import * as React from "react"

const _buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {_variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90", _destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90", _outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground", _secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80", _ghost: "hover:bg-accent hover:text-accent-foreground", _link: "text-primary underline-offset-4 hover:underline"},
      size: {_default: "h-10 px-4 py-2", _sm: "h-9 rounded-md px-3", _lg: "h-11 rounded-md px-8", _icon: "h-10 w-10"}},
    defaultVariants: {_variant: "default", _size: "default"}}
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {_asChild?: boolean}

const Button = React.forwardRef<HTMLButtonElement ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : &quot;button&quot;    return (
      <Comp
        className={cn(buttonVariants({ variant, _size, _className}))}
        ref={_ref}
        {_...props}
      />
    )
  }
)
Button.displayName = &quot;Button&quot;

export {_Button, _buttonVariants}
