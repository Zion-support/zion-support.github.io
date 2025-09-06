import * as React from 'react';
import {Drawer, as, DrawerPrimitive} from 'vaul';
import {cn} from '@/lib/utils';
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

import { cn } from "@/lib/utils"

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

    ref={ref}
    className={cn ('fixed inset - 0 z - 50 bg - black / 80', class_name)}
    {...props}

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background'
const DrawerContent = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive.Content;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background'
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        className
      )}
      {...props}>;
      <div className='mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted' />;
      {children}

    </DrawerPrimitive.Content>
  </DrawerPortal>

const DrawerHeader = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />

}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />

    ref={ref}
    className={cn(

=======
      'text-lg font-semibold leading-none tracking-tight'
      "text-lg font-semibold leading-none tracking-tight",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      className
    )}
    {...props}
  />;
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======




>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>
</typeof>  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    {...props}
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}

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

  DrawerDescription,;
};
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
