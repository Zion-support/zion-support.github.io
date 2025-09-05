import * as React from &quot;react&quot;
import * as AvatarPrimitive from &quot;@radix-ui/react-avatar&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(_({_className, _...props}, _ref) => (
  <AvatarPrimitive.Root
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;aspect-square h-full w-full&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("aspect-square h-full w-full", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const _AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(_({_className, _...props}, _ref) => (
  <AvatarPrimitive.Fallback
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;flex h-full w-full items-center justify-center rounded-full bg-muted&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export {_Avatar, _AvatarImage, _AvatarFallback}
