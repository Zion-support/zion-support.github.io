import * as React from &quot;react&quot;
import * as SwitchPrimitives from &quot;@radix-ui/react-switch&quot;

import { cn } from &quot;@/lib/utils&quot;    )}
    {_...props}
    ref={_ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        &quot;pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0&quot;      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export {_Switch}
