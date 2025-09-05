import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"


const _toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {_variants: {
      variant: {
        default: "bg-transparent", _outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},
      size: {_default: "h-10 px-3", _sm: "h-9 px-2.5", _lg: "h-11 px-5"}},
    defaultVariants: {_variant: "default", _size: "default"}}
)

type ToggleRef = React.ElementRef<typeof TogglePrimitive.Root>
type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>

const _Toggle = React.forwardRef<ToggleRef, ToggleProps>(_({_className, _variant, _size, _...props}, _ref) => (
    <TogglePrimitive.Root
      ref={_ref}
      className={_cn(toggleVariants({ variant, _size, _className}))}
      {_...props}
    />
  )
)

Toggle.displayName = TogglePrimitive.Root.displayName

export {_Toggle, _toggleVariants}
