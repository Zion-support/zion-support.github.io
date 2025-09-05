import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"


const _labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const _Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(_({_className, _...props}, _ref) => (
  <LabelPrimitive.Root
    ref={_ref}
    className={_cn(labelVariants(), _className)}
    {_...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export {_Label}
