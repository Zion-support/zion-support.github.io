
<<<<<<< HEAD

=======
import * as React from 'react';
import {Drawer, as, DrawerPrimitive} from 'vaul';
import {cn} from '@/lib/utils';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
<<<<<<< HEAD



import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
<<<<<<< HEAD

=======
);
Drawer.displayName = 'Drawer';
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.O</typeof>verlay>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;




<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
DrawerOverlay && DrawerOverlay.displayName = DrawerPrimitive && DrawerPrimitive.Overlay.displayName;

const DrawerContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive && imitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive&& DrawerPrimitive.Content

<<<<<<< HEAD
=======


=======
=======

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
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const DrawerContent = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive.Content;

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background'
        className
<<<<<<< HEAD
      )}
      {...props}>;
      <div className='mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted' />;
      {children}

    </DrawerPrimitive.Content>
  </DrawerPortal>
=======
      ref={ref}
      className={cn(;
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",;
        className;
      )}
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

))
DrawerContent.displayName = "DrawerContent"



const DrawerHeader = ({
  className
  ...props
}: React.HTMLAtt</HTMLDivElement>ributes<HTMLDivElement>) => (
<<<<<<< HEAD
=======
=======
    </DrawerPrimitive && DrawerPrimitive.Content>;
  </DrawerPortal>;
));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
DrawerContent && DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAtt</HTMLDivElement>ributes<HTMLDivElement>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
    className={cn('grid gap-1 && 1.5 p-4 text-center sm:text-left', className)}
    {...props}
<<<<<<< HEAD

  />

=======
);
DrawerHeader.displayName = 'DrawerHeader';
const DrawerFooter = ({
  className
  ...props</HTMLDivElement>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
<<<<<<< HEAD


}: React.HTMLAttributes<HTMLDivElement>) => (
=======
=======
  />;
);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
DrawerHeader && DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({;
  className,;
  ...props</HTMLDivElement>;
}: React && React.HTMLAttributes<HTMLDivElement>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
<<<<<<< HEAD

  />

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
<<<<<<< HEAD


>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
=======
=======
  />;
);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
DrawerFooter && DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Title>,;
  R</typeof>eact && eact.ComponentPropsWithoutRef<typeof DrawerPrimitive && DrawerPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive&& DrawerPrimitive.Title
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      "text-lg font-semibold leading-none tracking-tight",


      className
<<<<<<< HEAD
=======
    className={cn(;
      "text-lg font-semibold leading-none tracking-tight",;
      className;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    )}
    {...props}
  />;
));





<<<<<<< HEAD
=======
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight'
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>
</typeof>  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
<<<<<<< HEAD
=======
=======
const DrawerDescription = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive.Description;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
DrawerTitle && DrawerTitle.displayName = DrawerPrimitive && DrawerPrimitive.Title.displayName;

const DrawerDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Description>,;
</typeof>  React && React.ComponentPropsWithoutRef<typeof DrawerPrimitive && DrawerPrimitive.Description>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

=======
  <DrawerPrimitive&& DrawerPrimitive.Description
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  <DrawerPrimitive.Description;



    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
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
<<<<<<< HEAD
=======



=======



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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
  DrawerDescription,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  />));
DrawerDescription.display_name = DrawerPrimitive.Description.display_name;
;
=======
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
=======
  DrawerDescription,;
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  DrawerDescription} const Drawer = ({
  shouldScaleBackground = true, ...props 
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (<DrawerPrimitive.Root shouldScaleBackground= {
  shouldScaleBackground 
}{
  ...props 
}/>) Drawer.displayName = "Drawer" const DrawerTrigger = DrawerPrimitive.Trigger const DrawerPortal = DrawerPrimitive.Portal const DrawerClose = DrawerPrimitive.Close const DrawerOverlay = React.forwardRef< React.ElementRef<typeof DrawerPrimitive.Overlay>;
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> > ( ({
  className, ...props 
}, ref) => (<DrawerPrimitive.Overlay />) ) DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName const DrawerContent = React.forwardRef< React.ElementRef<typeof DrawerPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> > ( ({
  className, children, ...props 
}, ref) => (<DrawerPortal> <DrawerOverlay /> <DrawerPrimitive.Content) 
}{
  ...props 
}> </DrawerPrimitive.Content> </DrawerPortal>) ) DrawerContent.displayName = "DrawerContent" const DrawerHeader = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div />) DrawerHeader.displayName = "DrawerHeader" const DrawerFooter = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div />) DrawerFooter.displayName = "DrawerFooter" const DrawerTitle = React.forwardRef< React.ElementRef<typeof DrawerPrimitive.Title>;
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> > ( ({
  className, ...props 
}, ref) => (<DrawerPrimitive.Title) 
}{
  ...props 
}/>) ) DrawerTitle.displayName = DrawerPrimitive.Title.displayName const DrawerDescription = React.forwardRef< React.ElementRef<typeof DrawerPrimitive.Description>;
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> > ( ({
  className, ...props 
}, ref) => (<DrawerPrimitive.Description />) ) DrawerDescription.displayName = DrawerPrimitive.Description.displayName export {
  Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription 
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
