import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"


const _Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(_({_className, _value, _...props}, _ref) => (
  <ProgressPrimitive.Root
    ref={_ref}
    className={_cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary", _className
    )}
    {_...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={_{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export {_Progress}
