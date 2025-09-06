<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
import * as React from &quot;react&quot;
import * as PopoverPrimitive from &quot;@radix-ui/react-popover&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from &quot;react&quot;
import * as PopoverPrimitive from &quot;@radix-ui/react-popover&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
<<<<<<< HEAD
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
=======
<<<<<<< HEAD
<<<<<<< HEAD
>(({ className, align = &quot;center&quot;, sideOffset = 4, ...props }, ref) => (
=======
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


=======
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


        &quot;z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        className
      )}
      {...props}
    />;
  </PopoverPrimitive.Portal>;
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export { Popover, PopoverTrigger, PopoverContent }
export { Popover, PopoverTrigger, PopoverContent }
;
export { Popover, PopoverTrigger, PopoverContent };
export { Popover, PopoverTrigger, PopoverContent }
;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import * as React from &quot;react & quot;
import * as PopoverPrimitive from &quot;@radix - ui / react - popover & quot;
;
import { cn } from &quot;@/lib / utils & quot;

export { Popover, PopoverTrigger, PopoverContent }
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
export { Popover, PopoverTrigger, PopoverContent }
export { Popover, PopoverTrigger, PopoverContent }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export { Popover, PopoverTrigger, PopoverContent };
export { Popover, PopoverTrigger, PopoverContent }
<<<<<<< HEAD
=======
export { Popover, PopoverTrigger, PopoverContent };
export { Popover, PopoverTrigger, PopoverContent }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

;
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forward_ref<;
  React.ElementRef < typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof PopoverPrimitive.Content>;
>(({ class_name, align = &quot;center & quot;, side_offset = 4, ...props }, ref) => (
<<<<<<< HEAD
=======
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
;
import { cn } from "@/lib/utils";
;
const Popover = PopoverPrimitive.Root;
;
const PopoverTrigger = PopoverPrimitive.Trigger;
;
const PopoverContent = React.forwardRef<;
  React.ElementRef<typeof PopoverPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>;
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  <PopoverPrimitive.Portal>;
    <PopoverPrimitive.Content;
      ref={ref}
      align={align}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      side_offset={side_offset}
      className={cn (
        &quot;z - 50 w - 72 rounded - md border bg - popover p - 4 text - popover - foreground shadow - md outline - none data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
        class_name)}
      {...props}
    />;
  </PopoverPrimitive.Portal>));
PopoverContent.display_name = PopoverPrimitive.Content.display_name;
<<<<<<< HEAD
=======
export { Popover, PopoverTrigger, PopoverContent }
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export { Popover, PopoverTrigger, PopoverContent }
      sideOffset={sideOffset}
      className={cn(;
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
        className;
      )}
      {...props}
    />;
  </PopoverPrimitive.Portal>;
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
;
export { Popover, PopoverTrigger, PopoverContent }import * as React from "react" import * as PopoverPrimitive from "@radix-ui/react-popover" const Popover = PopoverPrimitive.Root const PopoverTrigger = PopoverPrimitive.Trigger const PopoverContent = React.forwardRef< React.ElementRef<typeof PopoverPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>) 
}{
  ...props 
}/> </PopoverPrimitive.Portal>) ) PopoverContent.displayName = PopoverPrimitive.Content.displayName export {
  Popover, PopoverTrigger, PopoverContent 
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export { Popover, PopoverTrigger, PopoverContent }
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
