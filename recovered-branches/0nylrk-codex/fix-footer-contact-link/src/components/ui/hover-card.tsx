=======
import * as React from &quot;react&quot;
import * as HoverCardPrimitive from &quot;@radix-ui/react-hover-card&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = &quot;center&quot;, sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(

      className
    )}
    {...props}
  />;
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
export { HoverCard, HoverCardTrigger, HoverCardContent }
export { HoverCard, HoverCardTrigger, HoverCardContent }
;
export { HoverCard, HoverCardTrigger, HoverCardContent };
export { HoverCard, HoverCardTrigger, HoverCardContent }
;
export { HoverCard, HoverCardTrigger, HoverCardContent }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
