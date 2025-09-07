

<<<<<<< HEAD
import * as React from "react"
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
<<<<<<< HEAD
>(({ className, align = &quot;center&quot;, sideOffset = 4, ...props }, ref) => (
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
=======
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
<<<<<<< HEAD
      className={cn(


        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


        className
=======
      className={cn(        className
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      )}
      {...props}
    />;
  </PopoverPrimitive.Portal>;
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export { Popover, PopoverTrigger, PopoverContent }
export { Popover, PopoverTrigger, PopoverContent }
;
export { Popover, PopoverTrigger, PopoverContent };
export { Popover, PopoverTrigger, PopoverContent }
;

import * as React from &quot;react & quot;
import * as PopoverPrimitive from &quot;@radix - ui / react - popover & quot;
;
import { cn } from &quot;@/lib / utils & quot;

export { Popover, PopoverTrigger, PopoverContent }
;

<<<<<<< HEAD
export { Popover, PopoverTrigger, PopoverContent };
export { Popover, PopoverTrigger, PopoverContent }

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forward_ref<;
  React.ElementRef < typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof PopoverPrimitive.Content>;
>(({ class_name, align = &quot;center & quot;, side_offset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>;
    <PopoverPrimitive.Content;
      ref={ref}
      align={align}
<<<<<<< HEAD
      side_offset={side_offset}
      className={cn (
        &quot;z - 50 w - 72 rounded - md border bg - popover p - 4 text - popover - foreground shadow - md outline - none data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
        class_name)}
      {...props}
    />;
  </PopoverPrimitive.Portal>));
PopoverContent.display_name = PopoverPrimitive.Content.display_name;
export { Popover, PopoverTrigger, PopoverContent }
export { Popover, PopoverTrigger, PopoverContent }
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
