import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"


const _Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(_(
    {_className, _orientation = "horizontal", _decorative = true, _...props}, _ref) => (
    <SeparatorPrimitive.Root
      ref={_ref}
      decorative={_decorative}
      orientation={_orientation}
      className={_cn(
        "shrink-0 bg-border", _orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", _className
      )}
      {_...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export {_Separator}
