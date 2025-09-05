<<<<<<< HEAD
import * as React from &quot;react&quot;
import { Drawer as DrawerPrimitive } from &quot;vaul&quot;

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Drawer = (_{_shouldScaleBackground = true, _...props}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={_shouldScaleBackground}
    {_...props}
  />
)
Drawer.displayName = &quot;Drawer&quot;

const _DrawerTrigger = DrawerPrimitive.Trigger

const _DrawerPortal = DrawerPrimitive.Portal

const _DrawerClose = DrawerPrimitive.Close

const _DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(_({_className, _...props}, _ref) => (
  <DrawerPrimitive.Overlay
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;fixed inset-0 z-50 bg-black/80&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("fixed inset-0 z-50 bg-black/80", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const _DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(_({_className, _children, _...props}, _ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
<<<<<<< HEAD
      ref={ref}
      className={cn(
        &quot;fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background&quot;,
        className
=======
      ref={_ref}
      className={_cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    >
<<<<<<< HEAD
      <div className=&quot;mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted&quot; />
      {children}
=======
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {_children}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = &quot;DrawerContent&quot;

const _DrawerHeader = (_{_className, _...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
<<<<<<< HEAD
    className={cn(&quot;grid gap-1.5 p-4 text-center sm:text-left&quot;, className)}
    {...props}
=======
    className={_cn("grid gap-1.5 p-4 text-center sm:text-left", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
)
DrawerHeader.displayName = &quot;DrawerHeader&quot;

const _DrawerFooter = (_{_className, _...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
<<<<<<< HEAD
    className={cn(&quot;mt-auto flex flex-col gap-2 p-4&quot;, className)}
    {...props}
=======
    className={_cn("mt-auto flex flex-col gap-2 p-4", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
)
DrawerFooter.displayName = &quot;DrawerFooter&quot;

const _DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(_({_className, _...props}, _ref) => (
  <DrawerPrimitive.Title
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;text-lg font-semibold leading-none tracking-tight&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "text-lg font-semibold leading-none tracking-tight", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const _DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(_({_className, _...props}, _ref) => (
  <DrawerPrimitive.Description
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;text-sm text-muted-foreground&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("text-sm text-muted-foreground", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {_Drawer, _DrawerPortal, _DrawerOverlay, _DrawerTrigger, _DrawerClose, _DrawerContent, _DrawerHeader, _DrawerFooter, _DrawerTitle, _DrawerDescription}
