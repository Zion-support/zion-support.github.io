<<<<<<< HEAD
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
  />;
);
Drawer.displayName = "Drawer";
;
const DrawerTrigger = DrawerPrimitive.Trigger;
;
const DrawerPortal = DrawerPrimitive.Portal;
;
const DrawerClose = DrawerPrimitive.Close;
;
const DrawerOverlay = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Overlay>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive.Overlay;
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />;
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
;
const DrawerContent = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive.Content;
      ref={ref}
      className={cn(;
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",;
        className;
      )}
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
    className={cn(;
      "text-lg font-semibold leading-none tracking-tight",;
      className;
    )}
    {...props}
  />;
));
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
  DrawerDescription}
=======
import * as React from &quot;react&quot;
import { Drawer as DrawerPrimitive } from &quot;vaul&quot;

import { cn } from &quot;@/lib/utils&quot;
const Drawer = (_{shouldScaleBackground = true, _...props}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root,
shouldScaleBackground={shouldScaleBackground}
    {_...props}
  />
)
Drawer.displayName = &quot;Drawer&quot;

const DrawerTrigger = DrawerPrimitive.Trigger,
const DrawerPortal = DrawerPrimitive.Portal,
const DrawerClose = DrawerPrimitive.Close,
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(_({className, _...props}, ref) => (
  <DrawerPrimitive.Overlay,
ref={ref}
    className={cn(&quot;fixed inset-0 z-50 bg-black/80&quot;, className)}
    {...props}  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName,
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(_({className, children, _...props}, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content,
ref={ref}
      className={cn(
        &quot;fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background&quot;,
        className      )}
      {_...props}
    >
      <div className=&quot;mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted&quot; />
      {children}    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = &quot;DrawerContent&quot;

const DrawerHeader = (_{className, _...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div,
className={cn(&quot;grid gap-1.5 p-4 text-center sm:text-left&quot;, className)}
    {...props}  />
)
DrawerHeader.displayName = &quot;DrawerHeader&quot;

const DrawerFooter = (_{className, _...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div,
className={cn(&quot;mt-auto flex flex-col gap-2 p-4&quot;, className)}
    {...props}  />
)
DrawerFooter.displayName = &quot;DrawerFooter&quot;

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(_({className, _...props}, ref) => (
  <DrawerPrimitive.Title,
ref={ref}
    className={cn(
      &quot;text-lg font-semibold leading-none tracking-tight&quot;,
      className    )}
    {_...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName,
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(_({className, _...props}, ref) => (
  <DrawerPrimitive.Description,
ref={ref}
    className={cn(&quot;text-sm text-muted-foreground&quot;, className)}
    {...props}  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName,
export {Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
