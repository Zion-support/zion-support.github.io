import React from 'react';
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {cn} from '@/lib/utils';
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
></typeof>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
      className
    )}
    {...props}
  />;
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive</typeof>.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
import * as AvatarPrimitive from '@radix - ui / react - avatar';
;
import {cn} from '@/lib / utils';
;
const Avatar = React.forward_ref<;
  React.ElementRef < typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof AvatarPrimitive.Root>;
></typeof>(({ class_name, ...props }, ref) => (
  <AvatarPrimitive.Root;
    ref={ref}
    className={cn (
      'relative flex h - 10 w - 10 shrink - 0 overflow - hidden rounded - full',
      class_name)}
    {...props}
  />));
Avatar.display_name = AvatarPrimitive.Root.display_name;
;
const AvatarImage = React.forward_ref<;
  React.ElementRef < typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef < typeof AvatarPrimitive</typeof>.Image>;
>(({ class_name, ...props }, ref) => (
  <AvatarPrimitive.Image;
    ref={ref}
    className={cn ('aspect - square h - full w - full', class_name)}
    {...props}
  />;
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>
  React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'
      className
    )}
    {...props}
  />;
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarImage, AvatarFallback }
  />));
AvatarImage.display_name = AvatarPrimitive.Image.display_name;
;
const AvatarFallback = React.forward_ref<;
  React.ElementRef < typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef < typeof AvatarPri</typeof > mitive.Fallback>;
>(({ class_name, ...props }, ref) => (
  <AvatarPrimitive.Fallback;
    ref={ref}
    className={cn (
      'flex h - full w - full items - center justify - center rounded - full bg - muted',
      class_name)}
    {...props}
  />));
AvatarFallback.display_name = AvatarPrimitive.Fallback.display_name;
;
export { Avatar, AvatarImage, AvatarFallback }
;
