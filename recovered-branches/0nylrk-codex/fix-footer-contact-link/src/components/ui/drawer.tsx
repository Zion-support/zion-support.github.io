
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
=======
=======

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
=======
=======
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"


import { cn } from "@/lib/utils"

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
;
import { cn } from "@/lib/utils";
;
const Drawer = ({;
  shouldScaleBackground = true,;
  ...props;
} React.ComponentProps<typeof DrawerPrimitive.Root>) => (;
  <DrawerPrimitive.Root;
    shouldScaleBackground={shouldScaleBackground}
    {...props}

Drawer && Drawer.displayName = 'Drawer';
const DrawerTrigger = DrawerPrimitive && DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive && DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive && DrawerPrimitive.Close;
const DrawerOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Overlay>,;
  React && React.ComponentPropsWithoutRef<typeof DrawerPrimitive && DrawerPrimitive.O</typeof>verlay>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive&& DrawerPrimitive.Overlay
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
    ref={ref}
    className={cn ('fixed inset - 0 z - 50 bg - black / 80', class_name)}
    {...props}

import { cn } from "@/lib/utils"

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
DrawerOverlay && DrawerOverlay.displayName = DrawerPrimitive && DrawerPrimitive.Overlay.displayName;
=======

DrawerOverlay && DrawerOverlay.displayName = DrawerPrimitive && DrawerPrimitive.Overlay.displayName;
const DrawerContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive && imitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive&& DrawerPrimitive.Content

==============
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DrawerContent = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive.Content;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background'
        className
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"



const DrawerHeader = ({
  className
  ...props
}: React.HTMLAtt</HTMLDivElement>ributes<HTMLDivElement>) => (
    </DrawerPrimitive && DrawerPrimitive.Content>;
  </DrawerPortal>;
));
DrawerContent && DrawerContent.displayName = 'DrawerContent';
const DrawerHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAtt</HTMLDivElement>ributes<HTMLDivElement>) => (;
  <div
    className={cn('grid gap-1 && 1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
=======)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props

}: React.HTMLAttributes<HTMLDivElement>) => (
=======
DrawerHeader && DrawerHeader.displayName = 'DrawerHeader';
const DrawerFooter = ({;
  className,;
  ...props</HTMLDivElement>;
}: React && React.HTMLAttributes<HTMLDivElement>) => (;
  />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>

>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
=======DrawerFooter && DrawerFooter.displayName = 'DrawerFooter';
=======
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
=======
DrawerFooter && DrawerFooter.displayName = 'DrawerFooter';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DrawerTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Title>,;
  R</typeof>eact && eact.ComponentPropsWithoutRef<typeof DrawerPrimitive && DrawerPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive&& DrawerPrimitive.Title
      "text-lg font-semibold leading-none tracking-tight",


      className
    className={cn(;
      "text-lg font-semibold leading-none tracking-tight",;
      className;
    )}
    {...props}
  />;
));





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======




const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>
</typeof>  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description


    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}


DrawerDescription && DrawerDescription.displayName = DrawerPrimitive && DrawerPrimitive.Description.displayName;
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
;
const DrawerDescription = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive.Description;
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
;
=======
=======


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
=======
=======  DrawerDescription,;
};=======
  />));
DrawerDescription.display_name = DrawerPrimitive.Description.display_name;
;
  DrawerDescription,;
};

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
