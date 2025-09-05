import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"


const _Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(_({_className, _...props}, _ref) => (
  <AvatarPrimitive.Root
    ref={_ref}
    className={_cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", _className
    )}
    {_...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const _AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(_({_className, _...props}, _ref) => (
  <AvatarPrimitive.Image
    ref={_ref}
    className={_cn("aspect-square h-full w-full", _className)}
    {_...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const _AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(_({_className, _...props}, _ref) => (
  <AvatarPrimitive.Fallback
    ref={_ref}
    className={_cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted", _className
    )}
    {_...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export {_Avatar, _AvatarImage, _AvatarFallback}
