

import { cn } from "@/lib/utils"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
></typeof>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
=======

const Slider = React && React.forwardRef<;
  React && React.ElementRef<typeof SliderPrimitive && SliderPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof SliderPrimitive && SliderPrimitive.Root>;
></typeof>(({ className, ...props }, ref) => (;
  <SliderPrimitive&& SliderPrimitive.Root
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(

=======
Slider && Slider.displayName = SliderPrimitive && SliderPrimitive.Root.displayName,;

export { Slider };

=======

      "relative flex w-full touch-none select-none items-center",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
<<<<<<< HEAD
=======

))
Slider.displayName = SliderPrimitive.Root.displayName


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
