import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
<<<<<<< HEAD
import { cvatype VariantProps } from "class-variance-authority"
=======
import { cva, type VariantProps } from "class-variance-authority"
>>>>>>> origin/auto/autonomy-17186719616

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
<<<<<<< HEAD
        link: "text-primary underline-offset-4 hover:underline"},
=======
        link: "text-primary underline-offset-4 hover:underline",
      },
>>>>>>> origin/auto/autonomy-17186719616
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
<<<<<<< HEAD
        icon: "h-10 w-10"}},
    defaultVariants: {
      variant: "default",
      size: "default"}}
=======
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
>>>>>>> origin/auto/autonomy-17186719616
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

<<<<<<< HEAD
const Button = React.forwardRef<HTMLButtonElementButtonProps>(
  ({ classNamevariantsizeasChild = false...props }ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variantsizeclassName }))}
=======
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
>>>>>>> origin/auto/autonomy-17186719616
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

<<<<<<< HEAD
export { ButtonbuttonVariants }
=======
export { Button, buttonVariants }
>>>>>>> origin/auto/autonomy-17186719616
