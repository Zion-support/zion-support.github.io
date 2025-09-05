
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"


const _Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(_({_className, _...props}, _ref) => (
  <CheckboxPrimitive.Root
    ref={_ref}
    className={_cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", _className
    )}
    {_...props}
  >
    <CheckboxPrimitive.Indicator
      className={_cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export {_Checkbox}
