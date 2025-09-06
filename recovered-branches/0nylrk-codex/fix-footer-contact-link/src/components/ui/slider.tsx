<<<<<<< HEAD
import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import {cn} from '@/lib/utils';
=======
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'relative flex w-full touch-none select-none items-center'
=======
      "relative flex w-full touch-none select-none items-center",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
));
Slider.displayName = SliderPrimitive.Root.displayName
export { Slider }
=======
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
