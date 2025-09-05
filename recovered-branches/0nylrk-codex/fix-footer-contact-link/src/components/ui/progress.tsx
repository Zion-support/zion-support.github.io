<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as ProgressPrimitive from &quot;@radix-ui/react-progress&quot;

import { cn } from &quot;@/lib/utils&quot;

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      &quot;relative h-4 w-full overflow-hidden rounded-full bg-secondary&quot;,
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className=&quot;h-full w-full flex-1 bg-primary transition-all&quot;
=======
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
const Progress = React.forwardRef<;
  React.ElementRef<typeof ProgressPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;
>(({ className, value, ...props }, ref) => (;
  <ProgressPrimitive.Root;
    ref={ref}
    className={cn(;
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary";
      className;
    )}
    {...props}
  >;
    <ProgressPrimitive.Indicator;
      className="h-full w-full flex-1 bg-primary transition-all";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />;
  </ProgressPrimitive.Root>;
));
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress }
;