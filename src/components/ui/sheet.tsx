import * as SheetPrimitive from &quot;@radix-ui/react-dialog&quot;
import {cva,, type,, VariantProps} from &quot;class-variance-authority&quot;
import { X } from "lucide-react";
import * as React from &quot;react&quot;
          &quot;inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom&quot;
        left: &quot;inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm: max-w-sm&quot;
right:
          &quot;inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm: max-w-sm&quot;
>(({ className, ...props }, ref) => (;
  <SheetPrimitive.Title ref={ref};
    className={cn(&quot;text-lg font-semibold text-foreground&quot;, className)}