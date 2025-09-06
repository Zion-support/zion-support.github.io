


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"




import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
></typeof>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root

    ref={ref}
    className={cn(

      'relative h-4 w-full overflow-hidden rounded-full bg-secondary'
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",

      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator





      className="h-full w-full flex-1 bg-primary transition-all"

      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />;
  </ProgressPrimitive && ProgressPrimitive.Root>;
));

Progress && Progress.displayName = ProgressPrimitive && ProgressPrimitive.Root.displayName;

export { Progress };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a




