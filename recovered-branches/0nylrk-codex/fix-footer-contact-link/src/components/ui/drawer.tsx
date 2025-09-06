<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import {Drawer, as, DrawerPrimitive} from 'vaul';
import {cn} from '@/lib/utils';
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
<<<<<<< HEAD
=======


import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
=======
=======
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) =></typeof> (
  <DrawerPrimitive.Root
=======

const Drawer = ({;
  shouldScaleBackground = true,;
  ...props;
}: React && React.ComponentProps<typeof DrawerPrimitive && DrawerPrimitive.Root>) =></typeof> (;
  <DrawerPrimitive&& DrawerPrimitive.Root
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = 'Drawer';
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.O</typeof>verlay>
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
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



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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

DrawerOverlay && DrawerOverlay.displayName = DrawerPrimitive && DrawerPrimitive.Overlay.displayName;

const DrawerContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive && imitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive&& DrawerPrimitive.Content

=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
const DrawerContent = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive.Content;
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
import React from 'react';
import * as React from 'react';
import {Drawer, as, DrawerPrimitive} from 'vaul';
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />;
);
=======
;
import {cn} from '@/lib / utils';
;
const Drawer = ({
  shouldScaleBackground = true,
  ...props;
}: React.ComponentProps < typeof DrawerPrimitive.Root>) =>: any</typeof> (
  <DrawerPrimitive.Root;
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />);
Drawer.display_name = 'Drawer';
;
const DrawerTrigger = DrawerPrimitive.Trigger;
;
const DrawerPortal = DrawerPrimitive.Portal;
;
const DrawerClose = DrawerPrimitive.Close;
;
const DrawerOverlay = React.forward_ref<;
  React.ElementRef < typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof DrawerPrimitive.O</typeof > verlay>;
>(({ class_name, ...props }, ref) => (
  <DrawerPrimitive.Overlay;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn ('fixed inset - 0 z - 50 bg - black / 80', class_name)}
    {...props}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}>;
      <div className='mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted' />;
      {children}
<<<<<<< HEAD

    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
=======
    </DrawerPrimitive && DrawerPrimitive.Content>;
  </DrawerPortal>;
));
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
<<<<<<< HEAD
  />
);
DrawerHeader.displayName = 'DrawerHeader';
const DrawerFooter = ({
  className
  ...props</HTMLDivElement>
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
=======
  />;
);
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
<<<<<<< HEAD
  />
);
DrawerFooter.displayName = 'DrawerFooter';
const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>
  R</typeof>eact.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
=======
DrawerFooter && DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Title>,;
  R</typeof>eact && eact.ComponentPropsWithoutRef<typeof DrawerPrimitive && DrawerPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive&& DrawerPrimitive.Title
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight'
      "text-lg font-semibold leading-none tracking-tight",
=======
  />;
);
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight'
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD
<<<<<<< HEAD
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

=======
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>
</typeof>  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
const DrawerDescription = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive.Description;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
  />));
DrawerOverlay.display_name = DrawerPrimitive.Overlay.display_name;
;
const DrawerContent = React.forward_ref<;
  React.ElementRef < typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof DrawerPr</typeof > imitive.Content>;
>(({ class_name, children, ...props }, ref) => (
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive.Content;
      ref={ref}
      className={cn (
        'fixed inset - x-0 bottom - 0 z - 50 mt - 24 flex h - auto flex - col rounded - t-[10px] border bg - background',
        class_name)}
      {...props}
    >;
      <div className='mx - auto mt - 4 h - 2 w-[100px] rounded - full bg - muted' />;
      {children}
    </DrawerPrimitive.Content>;
  </DrawerPortal>));
DrawerContent.display_name = 'DrawerContent';
;
const DrawerHeader = ({
  class_name,
  ...props;
}: React.HTMLAtt</HTMLDivElement > ributes < HTMLDivElement>) =>: any (
  <div;
    className={cn ('grid gap - 1.5 p - 4 text - center sm:text - left', class_name)}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    {...props}
<<<<<<< HEAD
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
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
  />);
DrawerHeader.display_name = 'DrawerHeader';
;
const DrawerFooter = ({
  class_name,
  ...props</HTMLDivElement>;
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn ('mt - auto flex flex - col gap - 2 p - 4', class_name)}
    {...props}
  />);
DrawerFooter.display_name = 'DrawerFooter';
;
const DrawerTitle = React.forward_ref<;
  React.ElementRef < typeof DrawerPrimitive.Title>,
  R</typeof > eact.ComponentPropsWithoutRef < typeof DrawerPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <DrawerPrimitive.Title;
    ref={ref}
    className={cn (
      'text - lg font - semibold leading - none tracking - tight',
      class_name)}
    {...props}
  />));
DrawerTitle.display_name = DrawerPrimitive.Title.display_name;
;
const DrawerDescription = React.forward_ref<;
  React.ElementRef < typeof DrawerPrimitive.Description>,
</typeof>  React.ComponentPropsWithoutRef < typeof DrawerPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <DrawerPrimitive.Description;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}
<<<<<<< HEAD

DrawerDescription && DrawerDescription.displayName = DrawerPrimitive && DrawerPrimitive.Description.displayName;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



export {;
  Drawer,;
  DrawerPortal,;
  DrawerOverlay,;
  DrawerTrigger,;
  DrawerClose,;
  DrawerContent,;
  DrawerHeader,;
  DrawerFooter,;
  DrawerTitle,;
  DrawerDescription,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
  />));
DrawerDescription.display_name = DrawerPrimitive.Description.display_name;
;
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
<<<<<<< HEAD

  DrawerDescription,;
};
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  DrawerDescription,
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
