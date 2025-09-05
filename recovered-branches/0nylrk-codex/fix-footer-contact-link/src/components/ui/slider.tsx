import * as React from &quot;react&quot;
import * as SliderPrimitive from &quot;@radix-ui/react-slider&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(_({_className, _...props}, _ref) => (
  <SliderPrimitive.Root
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative flex w-full touch-none select-none items-center&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative flex w-full touch-none select-none items-center", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    <SliderPrimitive.Track className=&quot;relative h-2 w-full grow overflow-hidden rounded-full bg-secondary&quot;>
      <SliderPrimitive.Range className=&quot;absolute h-full bg-primary&quot; />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className=&quot;block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50&quot; />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export {_Slider}
