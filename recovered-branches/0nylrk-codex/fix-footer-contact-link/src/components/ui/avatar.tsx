<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {cn} from '@/lib/utils';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {cn} from '@/lib/utils';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { cn } from "@/lib/utils"

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root

const Avatar = React && React.forwardRef<;
  React && React.ElementRef<typeof AvatarPrimitive && AvatarPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof AvatarPrimitive && AvatarPrimitive.Root>;
></typeof>(({ className, ...props }, ref) => (;
  <AvatarPrimitive&& AvatarPrimitive.Root
    ref={ref}
    className={cn(
<<<<<<< HEAD

=======

import { cn } from "@/lib/utils"


import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
;
import { cn } from "@/lib/utils";
;
const Avatar = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Root;
    ref={ref}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",


      className
<<<<<<< HEAD
=======
    className={cn(;
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",;
      className;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      className
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    )}
    {...props}
  />;
));





<<<<<<< HEAD
<<<<<<< HEAD
=======

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(

=======
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======




>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive</typeof>.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

Avatar && Avatar.displayName = AvatarPrimitive && AvatarPrimitive.Root.displayName;
const AvatarImage = React && React.forwardRef<;
  React && React.ElementRef<typeof AvatarPrimitive && AvatarPrimitive.Image>,;
  React && React.ComponentPropsWithoutRef<typeof AvatarPrimitive</typeof>.Image>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive&& AvatarPrimitive.Image
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
const AvatarImage = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Image>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Image;



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>
  React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const AvatarFallback = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Fallback>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Fallback;
<<<<<<< HEAD
=======
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

    ref={ref}
    className={cn ('aspect - square h - full w - full', class_name)}
    {...props}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const AvatarImage = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Image>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Image;


<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>
  React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
<<<<<<< HEAD

=======
    ref={ref}
    className={cn ('aspect - square h - full w - full', class_name)}
    {...props}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
AvatarImage && AvatarImage.displayName = AvatarPrimitive && AvatarPrimitive.Image.displayName;

const AvatarFallback = React && React.forwardRef<;
  React && React.ElementRef<typeof AvatarPrimitive && AvatarPrimitive.Fallback>,;
  React && React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive && mitive.Fallback>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive&& AvatarPrimitive.Fallback
<<<<<<< HEAD

    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
=======
Avatar.displayName = AvatarPrimitive.Root.displayName;
;
const AvatarImage = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Image>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Image;
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />;
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
;
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const AvatarFallback = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Fallback>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Fallback;

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      className
=======
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
    ref={ref}
    className={cn(;
      "flex h-full w-full items-center justify-center rounded-full bg-muted",;
      className;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    ref={ref}
    className={cn ('aspect - square h - full w - full', class_name)}
    {...props}
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'
      className
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    )}
    {...props}
  />;
));
export { Avatar, AvatarImage, AvatarFallback }
export { Avatar, AvatarImage, AvatarFallback }
;


AvatarFallback && AvatarFallback.displayName = AvatarPrimitive && AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback }
;

<<<<<<< HEAD


<<<<<<< HEAD
=======
AvatarFallback && AvatarFallback.displayName = AvatarPrimitive && AvatarPrimitive.Fallback.displayName;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export { Avatar, AvatarImage, AvatarFallback };
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
;
export { Avatar, AvatarImage, AvatarFallback }import * as React from "react" import * as AvatarPrimitive from "@radix-ui/react-avatar" const Avatar = React.forwardRef< React.ElementRef<typeof AvatarPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> > ( ({
  className, ...props 
}, ref) => (<AvatarPrimitive.Root) 
}{
  ...props 
}/>) ) Avatar.displayName = AvatarPrimitive.Root.displayName const AvatarImage = React.forwardRef< React.ElementRef<typeof AvatarPrimitive.Image>;
React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> > ( ({
  className, ...props 
}, ref) => (<AvatarPrimitive.Image />) ) AvatarImage.displayName = AvatarPrimitive.Image.displayName const AvatarFallback = React.forwardRef< React.ElementRef<typeof AvatarPrimitive.Fallback>;
React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> > ( ({
  className, ...props 
}, ref) => (<AvatarPrimitive.Fallback) 
}{
  ...props 
}/>) ) AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName export {
  Avatar, AvatarImage, AvatarFallback 
}
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export { Avatar, AvatarImage, AvatarFallback };
export { Avatar, AvatarImage, AvatarFallback }
;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export { Avatar, AvatarImage, AvatarFallback }
export { Avatar, AvatarImage, AvatarFallback }
;

export { Avatar, AvatarImage, AvatarFallback };
export { Avatar, AvatarImage, AvatarFallback }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
