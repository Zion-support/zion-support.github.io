

<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as PopoverPrimitive from &quot;@radix-ui/react-popover&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from &quot;react&quot;
import * as PopoverPrimitive from &quot;@radix-ui/react-popover&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
<<<<<<< HEAD
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
=======
>(({ className, align = &quot;center&quot;, sideOffset = 4, ...props }, ref) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(

<<<<<<< HEAD
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


        &quot;z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
=======

        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        className
      )}
      {...props}
    />;
  </PopoverPrimitive.Portal>;
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from &quot;react & quot;
import * as PopoverPrimitive from &quot;@radix - ui / react - popover & quot;
;
import { cn } from &quot;@/lib / utils & quot;

export { Popover, PopoverTrigger, PopoverContent }
;

<<<<<<< HEAD
export { Popover, PopoverTrigger, PopoverContent }
export { Popover, PopoverTrigger, PopoverContent }
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export { Popover, PopoverTrigger, PopoverContent };
export { Popover, PopoverTrigger, PopoverContent }
<<<<<<< HEAD
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
;
import { cn } from "@/lib/utils";
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
const Popover = PopoverPrimitive.Root;
;
const PopoverTrigger = PopoverPrimitive.Trigger;
;
const PopoverContent = React.forwardRef<;
  React.ElementRef<typeof PopoverPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>;
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (;
  <PopoverPrimitive.Portal>;
    <PopoverPrimitive.Content;
      ref={ref}
      align={align}
export { Popover, PopoverTrigger, PopoverContent }
      sideOffset={sideOffset}
      className={cn(;
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
        className;
      )}
      {...props}
    />;
<<<<<<< HEAD
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
=======
  </PopoverPrimitive.Portal>));
PopoverContent.display_name = PopoverPrimitive.Content.display_name;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export { Popover, PopoverTrigger, PopoverContent }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
