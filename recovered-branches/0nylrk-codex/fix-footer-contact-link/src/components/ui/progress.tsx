import * as React from &quot;react&quot;
import * as ProgressPrimitive from &quot;@radix-ui/react-progress&quot;

import { cn } from &quot;@/lib/utils&quot;    )}
    {_...props}
  >
    <ProgressPrimitive.Indicator
      className=&quot;h-full w-full flex-1 bg-primary transition-all&quot;
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export {_Progress}
