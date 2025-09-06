<<<<<<< HEAD
import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
=======
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary'
=======
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
<<<<<<< HEAD
      className='h-full w-full flex-1 bg-primary transition-all'
      style={{ transform: `translateX(-${100 - (value |0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
=======
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />;
  </ProgressPrimitive.Root>;
));
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
