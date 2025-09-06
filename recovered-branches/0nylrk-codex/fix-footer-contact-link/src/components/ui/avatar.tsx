<<<<<<< HEAD
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
=======
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
=======
=======
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",


      className
    )}
    {...props}
  />;
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive</typeof>.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
=======

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

const AvatarImage = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Image>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Image;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>
  React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
const AvatarFallback = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Fallback>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Fallback;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      className
    )}
    {...props}
  />;
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
export { Avatar, AvatarImage, AvatarFallback }
=======

export { Avatar, AvatarImage, AvatarFallback }
;

=======

export { Avatar, AvatarImage, AvatarFallback };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
