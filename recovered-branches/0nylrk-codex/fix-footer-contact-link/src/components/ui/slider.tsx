<<<<<<< HEAD
import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import {cn} from '@/lib/utils';
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
<<<<<<< HEAD
=======
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
<<<<<<< HEAD
=======


import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
=======
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

import { cn } from "@/lib/utils"

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
      'relative flex w-full touch-none select-none items-center'
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
));
Slider.displayName = SliderPrimitive.Root.displayName
export { Slider }
))
Slider.displayName = SliderPrimitive.Root.displayName

<<<<<<< HEAD
export { Slider }
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export { Slider };
export { Slider }
;
=======
<<<<<<< HEAD
export { Slider }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
