import * as React from &quot;react&quot;
import * as AvatarPrimitive from &quot;@radix-ui/react-avatar&quot;

import { cn } from &quot;@/lib/utils&quot;    )}
    {_...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName,
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(_({className, _...props}, ref) => (
  <AvatarPrimitive.Image,
ref={ref}
    className={cn(&quot;aspect-square h-full w-full&quot;, className)}
    {...props}  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName,
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(_({className, _...props}, ref) => (
  <AvatarPrimitive.Fallback,
ref={ref}
    className={cn(
      &quot;flex h-full w-full items-center justify-center rounded-full bg-muted&quot;,
      className    )}
    {_...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName,
export {Avatar, AvatarImage, AvatarFallback}
