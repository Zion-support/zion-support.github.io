<<<<<<< HEAD

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
=======
=======
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
></typeof>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root

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





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;



<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>
  React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
<<<<<<< HEAD



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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const AvatarFallback = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Fallback>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Fallback;


<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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


=======

AvatarFallback && AvatarFallback.displayName = AvatarPrimitive && AvatarPrimitive.Fallback.displayName;
=======

export { Avatar, AvatarImage, AvatarFallback }
;

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export { Avatar, AvatarImage, AvatarFallback };
export { Avatar, AvatarImage, AvatarFallback }
;
<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
