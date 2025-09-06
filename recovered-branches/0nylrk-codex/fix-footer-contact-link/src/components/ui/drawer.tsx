<<<<<<< HEAD
import * as React from 'react';
import {Drawer, as, DrawerPrimitive} from 'vaul';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
=======
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
=======
=======
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const Drawer = ({
  shouldScaleBackground = true
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
<<<<<<< HEAD
);
Drawer.displayName = 'Drawer';
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.O</typeof>verlay>
=======
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
<<<<<<< HEAD
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
const DrawerContent = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive.Content;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
<<<<<<< HEAD
));
DrawerContent.displayName = 'DrawerContent';
=======
))
DrawerContent.displayName = "DrawerContent"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const DrawerHeader = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
<<<<<<< HEAD
);
DrawerHeader.displayName = 'DrawerHeader';
const DrawerFooter = ({
  className
  ...props</HTMLDivElement>
=======
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
<<<<<<< HEAD
);
DrawerFooter.displayName = 'DrawerFooter';
const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>
  R</typeof>eact.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
=======
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'text-lg font-semibold leading-none tracking-tight'
=======
      "text-lg font-semibold leading-none tracking-tight",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>
</typeof>  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
=======
const DrawerDescription = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive.Description;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
export {
  Drawer
  DrawerPortal
  DrawerOverlay
  DrawerTrigger
  DrawerClose
  DrawerContent
  DrawerHeader
  DrawerFooter
  DrawerTitle
  DrawerDescription
}
=======

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export {;
  Drawer,;
  DrawerPortal,;
  DrawerOverlay,;
  DrawerTrigger,;
  DrawerClose,;
  DrawerContent,;
  DrawerHeader,;
  DrawerFooter;
  DrawerTitle;
  DrawerDescription}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
