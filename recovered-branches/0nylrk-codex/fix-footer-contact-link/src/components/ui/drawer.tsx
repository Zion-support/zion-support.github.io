

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"


"

import {cn} from '@/lib/utils';
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import {cn} from '@/lib/utils';import {cn} from '@/lib/utils';
import * as React from \"react\"
import { Drawer as DrawerPrimitive } from \"vaul\"
import * as React from \"react\"
import { Drawer as DrawerPrimitive } from \"vaul\"

import { cn } from "@/lib/utils"

}: React.ComponentProps<typeof DrawerPrimitive.Root>) =></typeof> (

>(({ className, ...props }, ref) => (

  <DrawerPrimitive.Overlay;
    ref={ref}'
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;


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



const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>



>(({ className, ...props }, ref) => (

    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;






const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />

    <DrawerPrimitive.Content

DrawerOverlay && DrawerOverlay.displayName = DrawerPrimitive && DrawerPrimitive.Overlay.displayName;
const DrawerContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive && imitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;




const DrawerContent = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive.Content;




      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background'
        className

      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
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



      ref={ref}
      className={cn("
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className;
      )}

      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}

      {...props}
    >"
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
  <div'
    className={cn('grid gap-1 && 1.5 p-4 text-center sm:text-left', className)}
    {...props}

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



DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({}
  className,

  ...props

    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}

  />



)

DrawerFooter.displayName = "DrawerFooter"

  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>



DrawerFooter && DrawerFooter.displayName = 'DrawerFooter';
const DrawerTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Title>,;
  R</typeof>eact && eact.ComponentPropsWithoutRef<typeof DrawerPrimitive && DrawerPrimitive.Title>;
>(({ className, ...props }, ref) => (;

  <DrawerPrimitive&& DrawerPrimitive.Title
      {...props}
    >;
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />;
      {children}
    </DrawerPrimitive.Content>;
  </DrawerPortal>;
));
DrawerContent.displayName = "DrawerContent";
;
const DrawerHeader = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />;
);
DrawerHeader.displayName = "DrawerHeader";
;
const DrawerFooter = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />;
);
DrawerFooter.displayName = "DrawerFooter";
;
const DrawerTitle = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Title>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive.Title;
    ref={ref}

      "text-lg font-semibold leading-none tracking-tight",


      className
    className={cn(;
      "text-lg font-semibold leading-none tracking-tight",;

      className;
    )}
    {...props}
  />;
));

      className

    )}
    {...props}
  />;
));


));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;



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

  shouldScaleBackground = true, ...props 
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (<DrawerPrimitive.Root shouldScaleBackground= {
</typeof>)
}/>) Drawer.displayName = "Drawer" const DrawerTrigger = DrawerPrimitive.Trigger const DrawerPortal = DrawerPrimitive.Portal const DrawerClose = DrawerPrimitive.Close const DrawerOverlay = React.forwardRef< React.ElementRef<typeof DrawerPrimitive.Overlay>;"
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> > ( ({
}, ref) => (<DrawerPrimitive.Overlay />) ) DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName const DrawerContent = React.forwardRef< React.ElementRef<typeof DrawerPrimitive.Content>;





