
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"

=======
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
  {
    variants: {
      variant: {

        outline:

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
