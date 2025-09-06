import {cn} from '@/lib/utils';
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"



import { cn } from "@/lib/utils"

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
      className
    )}
    {...props}
  />;
));





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



    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;


const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>
  React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback

AvatarImage && AvatarImage.displayName = AvatarPrimitive && AvatarPrimitive.Image.displayName;

const AvatarFallback = React && React.forwardRef<;
  React && React.ElementRef<typeof AvatarPrimitive && AvatarPrimitive.Fallback>,;
  React && React.ComponentPropsWithoutRef<typeof AvatarPri</typeof>mitive && mitive.Fallback>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive&& AvatarPrimitive.Fallback

    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'


const AvatarFallback = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Fallback>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Fallback;
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
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


export { Avatar, AvatarImage, AvatarFallback };
export { Avatar, AvatarImage, AvatarFallback }
;
