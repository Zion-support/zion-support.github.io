import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
<<<<<<< HEAD
import { cvatype VariantProps } from "class-variance-authority"
=======
import { cva, type VariantProps } from "class-variance-authority"
>>>>>>> origin/auto/autonomy-17186719616

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
<<<<<<< HEAD
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"}},
    defaultVariants: {
      variant: "default",
      size: "default"}}
=======
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
>>>>>>> origin/auto/autonomy-17186719616
)

type ToggleRef = React.ElementRef<typeof TogglePrimitive.Root>
type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>

<<<<<<< HEAD
const Toggle = React.forwardRef<ToggleRefToggleProps>(
  ({ classNamevariantsize...props }ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variantsizeclassName }))}
      {...props}

=======
const Toggle = React.forwardRef<ToggleRef, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
>>>>>>> origin/auto/autonomy-17186719616
    />
  )
)

Toggle.displayName = TogglePrimitive.Root.displayName

<<<<<<< HEAD
export { ToggletoggleVariants }
=======
export { Toggle, toggleVariants }
>>>>>>> origin/auto/autonomy-17186719616
