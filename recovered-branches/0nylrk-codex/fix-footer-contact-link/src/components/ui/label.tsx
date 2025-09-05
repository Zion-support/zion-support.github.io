import * as React from &quot;react&quot;
import * as LabelPrimitive from &quot;@radix-ui/react-label&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;

import { cn } from &quot;@/lib/utils&quot;

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled: cursor-not-allowed peer-disabled:opacity-70"import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(_({className, _...props}, ref) => (
  <LabelPrimitive.Root,
ref={ref}
    className={cn(labelVariants(), className)}
    {_...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName,
export {Label}
