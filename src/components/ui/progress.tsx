<<<<<<< HEAD
cn("w-full bg-slate-700 rounded-full h-2",
  className)
}>;"""
      <div;""""
        className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300";
        style={{ width: `${percentage}%` }};
      />;
    </div>;
  )};
;"`
export { Progress </div>}}'"`'"`
=======
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
