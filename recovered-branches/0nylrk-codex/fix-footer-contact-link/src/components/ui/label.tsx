import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
<<<<<<< HEAD
import { cva, type VariantProps } from "class-variance-authority"
=======
import { cvatype VariantProps } from "class-variance-authority"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
=======
>(({ className...props }ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants()className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
