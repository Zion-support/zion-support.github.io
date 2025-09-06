

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
=======
=======
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"



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
    <DrawerPrimitive&& DrawerPrimitive.Content

=======


=======
const DrawerContent = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive.Content;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}>;
      <div className='mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted' />;
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
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
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
      className
    )}
    {...props}
  />;
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======





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



    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    {...props}
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

DrawerDescription && DrawerDescription.displayName = DrawerPrimitive && DrawerPrimitive.Description.displayName;
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
