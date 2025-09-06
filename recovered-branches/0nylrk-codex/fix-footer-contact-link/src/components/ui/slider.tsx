<<<<<<< HEAD
import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
=======
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
=======
=======
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

Slider && Slider.displayName = SliderPrimitive && SliderPrimitive.Root.displayName,;

export { Slider };

=======
import * as SliderPrimitive from '@radix - ui / react - slider';
;
import {cn} from '@/lib / utils';
;
const Slider = React.forward_ref<;
  React.ElementRef < typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof SliderPrimitive.Root>;
></typeof>(({ class_name, ...props }, ref) => (
  <SliderPrimitive.Root;
    ref={ref}
    className={cn (
      'relative flex w - full touch - none select - none items - center',
      class_name)}
    {...props}
  >;
    <SliderPrimitive.Track className='relative h - 2 w - full grow overflow - hidden rounded - full bg - secondary'>;
      <SliderPrimitive.Range className='absolute h - full bg - primary' />;
    </SliderPrimitive.Track>;
    <SliderPrimitive.Thumb className='block h - 5 w - 5 rounded - full border - 2 border - primary bg - background ring - offset - background transition - colors focus - visible: outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:pointer - events - none disabled:opacity - 50' />;
  </SliderPrimitive.Root>));
Slider.display_name = SliderPrimitive.Root.display_name,
export { Slider }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

      "relative flex w-full touch-none select-none items-center",

      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>

))
Slider.displayName = SliderPrimitive.Root.displayName

<<<<<<< HEAD
export { Slider }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
export { Slider };
=======
export { Slider }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
