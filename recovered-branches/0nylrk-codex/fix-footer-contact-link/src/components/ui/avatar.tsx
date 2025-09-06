import React from 'react';
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {cn} from '@/lib/utils';
<<<<<<< HEAD
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
></typeof>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
=======

const Avatar = React && React.forwardRef<;
  React && React.ElementRef<typeof AvatarPrimitive && AvatarPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof AvatarPrimitive && AvatarPrimitive.Root>;
></typeof>(({ className, ...props }, ref) => (;
  <AvatarPrimitive&& AvatarPrimitive.Root
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive</typeof>.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
=======
Avatar && Avatar.displayName = AvatarPrimitive && AvatarPrimitive.Root.displayName;

const AvatarImage = React && React.forwardRef<;
  React && React.ElementRef<typeof AvatarPrimitive && AvatarPrimitive.Image>,;
  React && React.ComponentPropsWithoutRef<typeof AvatarPrimitive</typeof>.Image>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive&& AvatarPrimitive.Image
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />;
));
<<<<<<< HEAD
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>
  React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
=======
AvatarImage && AvatarImage.displayName = AvatarPrimitive && AvatarPrimitive.Image.displayName;

const AvatarFallback = React && React.forwardRef<;
  React && React.ElementRef<typeof AvatarPrimitive && AvatarPrimitive.Fallback>,;
  React && React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive && mitive.Fallback>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive&& AvatarPrimitive.Fallback
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'
      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarImage, AvatarFallback }
=======
AvatarFallback && AvatarFallback.displayName = AvatarPrimitive && AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
