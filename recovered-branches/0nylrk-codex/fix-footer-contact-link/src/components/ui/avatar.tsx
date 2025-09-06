<<<<<<< HEAD
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {cn} from '@/lib/utils';
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
<<<<<<< HEAD
=======


import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
=======
=======
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import { cn } from "@/lib/utils"

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
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD
Avatar.displayName = AvatarPrimitive.Root.displayName;

=======
Avatar.displayName = AvatarPrimitive.Root.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive</typeof>.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
const AvatarImage = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Image>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Image;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
<<<<<<< HEAD
<<<<<<< HEAD

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

AvatarImage && AvatarImage.displayName = AvatarPrimitive && AvatarPrimitive.Image.displayName;

const AvatarFallback = React && React.forwardRef<;
  React && React.ElementRef<typeof AvatarPrimitive && AvatarPrimitive.Fallback>,;
  React && React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive && mitive.Fallback>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive&& AvatarPrimitive.Fallback

    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
const AvatarFallback = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Fallback>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Fallback;
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarImage, AvatarFallback }
export { Avatar, AvatarImage, AvatarFallback }
;

=======

AvatarFallback && AvatarFallback.displayName = AvatarPrimitive && AvatarPrimitive.Fallback.displayName;
=======

export { Avatar, AvatarImage, AvatarFallback }
;

=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export { Avatar, AvatarImage, AvatarFallback };
export { Avatar, AvatarImage, AvatarFallback }
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
