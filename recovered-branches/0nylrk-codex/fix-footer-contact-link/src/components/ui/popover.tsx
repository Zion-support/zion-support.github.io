import * as React from &quot;react&quot;
import * as PopoverPrimitive from &quot;@radix-ui/react-popover&quot;
import { cn } from &quot;@/lib/utils&quot;
const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = &quot;center&quot;, sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        &quot;z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
        className
      )}
      {...props}
    />;
  </PopoverPrimitive.Portal>;
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
<<<<<<< HEAD
export { Popover, PopoverTrigger, PopoverContent }
=======
<<<<<<< HEAD
<<<<<<< HEAD
export { Popover, PopoverTrigger, PopoverContent }
=======

export { Popover, PopoverTrigger, PopoverContent }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export { Popover, PopoverTrigger, PopoverContent };
=======
export { Popover, PopoverTrigger, PopoverContent }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
