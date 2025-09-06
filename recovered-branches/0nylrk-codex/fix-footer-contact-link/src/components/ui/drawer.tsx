<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from 'react';
import {Drawer, as, DrawerPrimitive} from 'vaul';
import {cn} from '@/lib/utils';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {cn} from '@/lib/utils';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import {cn} from '@/lib/utils';import {cn} from '@/lib/utils';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {cn} from '@/lib/utils';import {cn} from '@/lib/utils';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {cn} from '@/lib/utils';

import * as React from "react""
import { Drawer as DrawerPrimitive } from "vaul""
import * as React from "react""
import { Drawer as DrawerPrimitive } from "vaul"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
import { cn } from "@/lib/utils"

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const Drawer = ({
  shouldScaleBackground = true
  ...props
=======
const Drawer = ({};
  shouldScaleBackground = true;
  ...props;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}: React.ComponentProps<typeof DrawerPrimitive.Root>) =></typeof> (
  <DrawerPrimitive.Root;
const Drawer = ({;
  shouldScaleBackground = true,;
  ...props;
}: React && React.ComponentProps<typeof DrawerPrimitive && DrawerPrimitive.Root>) =></typeof> (;
<<<<<<< HEAD
  <DrawerPrimitive&& DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />

    ref={ref}
    className={cn ('fixed inset - 0 z - 50 bg - black / 80', class_name)}
    {...props}

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  <DrawerPrimitive&& DrawerPrimitive.Root;
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);'
Drawer.displayName = 'Drawer';
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.O</typeof>verlay>
)"
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay;
    ref={ref}'
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const DrawerOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Overlay>,;
  React && React.ComponentPropsWithoutRef<typeof DrawerPrimitive && DrawerPrimitive.O</typeof>verlay>;
>(({ className, ...props }, ref) => (;
  <DrawerPrimitive&& DrawerPrimitive.Overlay
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934





>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
<<<<<<< HEAD
    <DrawerPrimitive.Content
<<<<<<< HEAD
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background'
=======

=======
    <DrawerPrimitive.Content;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
DrawerOverlay && DrawerOverlay.displayName = DrawerPrimitive && DrawerPrimitive.Overlay.displayName;

const DrawerContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive && imitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
<<<<<<< HEAD
    <DrawerPrimitive&& DrawerPrimitive.Content

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    <DrawerPrimitive&& DrawerPrimitive.Content;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const DrawerContent = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
<<<<<<< HEAD
    <DrawerPrimitive.Content;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background'
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import React from 'react';
import * as React from 'react';
=======
    <DrawerPrimitive.Content;'
import React from 'react';'
import * as React from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {Drawer, as, DrawerPrimitive} from 'vaul';
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />;
);

;'
import {cn} from '@/lib / utils';
;
const Drawer = ({}
  shouldScaleBackground = true,
  ...props;
}: React.ComponentProps < typeof DrawerPrimitive.Root>) =>: any</typeof> (
  <DrawerPrimitive.Root;
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />);'
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
    ref={ref}'
    className={cn ('fixed inset - 0 z - 50 bg - black / 80', class_name)}
    {...props}

)"
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>

>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay;
    ref={ref}'
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
    <DrawerPrimitive.Content;
DrawerOverlay && DrawerOverlay.displayName = DrawerPrimitive && DrawerPrimitive.Overlay.displayName;

const DrawerContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DrawerPr</typeof>imitive && imitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive&& DrawerPrimitive.Content;
const DrawerContent = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DrawerPortal>;
    <DrawerOverlay />;
    <DrawerPrimitive.Content;


      ref={ref}
      className={cn('
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background'
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className
<<<<<<< HEAD
      )}
      {...props}>;
      <div className='mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted' />;
      {children}

    </DrawerPrimitive.Content>
  </DrawerPortal>
<<<<<<< HEAD
=======
=======
=======
        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      ref={ref}
      className={cn("
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className;
      )}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {...props}
    >"
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
  <div'
    className={cn('grid gap-1 && 1.5 p-4 text-center sm:text-left', className)}
    {...props}
<<<<<<< HEAD
))
DrawerContent.displayName = "DrawerContent"
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

const DrawerHeader = ({
  className
  ...props
}: React.HTMLAtt</HTMLDivElement>ributes<HTMLDivElement>) => (
=======
  />
'
DrawerContent && DrawerContent.displayName = 'DrawerContent';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

const DrawerHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAtt</HTMLDivElement>ributes<HTMLDivElement>) => (;
<<<<<<< HEAD
  <div
=======

  <div'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    className={cn('grid gap-1 && 1.5 p-4 text-center sm:text-left', className)}
    {...props}

<<<<<<< HEAD
<<<<<<< HEAD
  />
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



)"
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({}
  className,
<<<<<<< HEAD
  ...props
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}: React.HTMLAttributes<HTMLDivElement>) => (
=======
=======
  />;
);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  ...props;
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
DrawerHeader && DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({;
  className,;
  ...props</HTMLDivElement>;
}: React && React.HTMLAttributes<HTMLDivElement>) => (;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
=======
  />  <div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  />  <div
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}

  />
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
);
DrawerFooter.displayName = 'DrawerFooter';
const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>
  R</typeof>eact.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
=======

  <div'
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}

  <div"
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />

)"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
<<<<<<< HEAD

>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
=======


>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title;
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
DrawerFooter && DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Title>,;
  R</typeof>eact && eact.ComponentPropsWithoutRef<typeof DrawerPrimitive && DrawerPrimitive.Title>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
  <DrawerPrimitive&& DrawerPrimitive.Title
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ref={ref}
    className={cn(

=======
<<<<<<< HEAD
      'text-lg font-semibold leading-none tracking-tight'
      "text-lg font-semibold leading-none tracking-tight",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

=======
  <DrawerPrimitive&& DrawerPrimitive.Title;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "text-lg font-semibold leading-none tracking-tight",


      className;
    )}
    {...props}
  />;
));





<<<<<<< HEAD
<<<<<<< HEAD
=======
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight'
      "text-lg font-semibold leading-none tracking-tight",
=======
    ref={ref}
    className={cn(
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======

      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    )}
    {...props}
  />;
));
<<<<<<< HEAD
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======




<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>
</typeof>  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <DrawerPrimitive.Description
<<<<<<< HEAD
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
const DrawerDescription = React.forwardRef<;
  React.ElementRef<typeof DrawerPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>;
>(({ className, ...props }, ref) => (;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  <DrawerPrimitive.Description;
DrawerTitle && DrawerTitle.displayName = DrawerPrimitive && DrawerPrimitive.Title.displayName;

const DrawerDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof DrawerPrimitive && DrawerPrimitive.Description>,;
</typeof>  React && React.ComponentPropsWithoutRef<typeof DrawerPrimitive && DrawerPrimitive.Description>;
>(({ className, ...props }, ref) => (;

<<<<<<< HEAD
=======
  <DrawerPrimitive&& DrawerPrimitive.Description
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ref={ref}
=======

    ref={ref}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    className={cn('text-sm text-muted-foreground', className)}

  />));
=======
    ref={ref}
    className={cn(

      "text-lg font-semibold leading-none tracking-tight",

      className  />));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    ref={ref}
    className={cn(

      "text-lg font-semibold leading-none tracking-tight",

      className  />));
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
      className={cn ('
        'fixed inset - x-0 bottom - 0 z - 50 mt - 24 flex h - auto flex - col rounded - t-[10px] border bg - background',
        class_name)}
      {...props}
    >;'
      <div className='mx - auto mt - 4 h - 2 w-[100px] rounded - full bg - muted' />;
      {children}
    </DrawerPrimitive.Content>;
  </DrawerPortal>));'
DrawerContent.display_name = 'DrawerContent';
;
const DrawerHeader = ({}
  class_name,
  ...props;
}: React.HTMLAtt</HTMLDivElement > ributes < HTMLDivElement>) =>: any (
  <div;'
    className={cn ('grid gap - 1.5 p - 4 text - center sm:text - left', class_name)}
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  />);
=======
export {};
  Drawer;
  DrawerPortal;
  DrawerOverlay;
  DrawerTrigger;
  DrawerClose;
  DrawerContent;
  DrawerHeader;
  DrawerFooter;
  DrawerTitle;
  DrawerDescription;
}
  />);'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
DrawerHeader.display_name = 'DrawerHeader';
;
const DrawerFooter = ({}
  class_name,
  ...props</HTMLDivElement>;
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;'
    className={cn ('mt - auto flex flex - col gap - 2 p - 4', class_name)}
    {...props}
  />);'
DrawerFooter.display_name = 'DrawerFooter';
;
const DrawerTitle = React.forward_ref<;
  React.ElementRef < typeof DrawerPrimitive.Title>,
  R</typeof > eact.ComponentPropsWithoutRef < typeof DrawerPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <DrawerPrimitive.Title;
    ref={ref}
    className={cn ('
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ref={ref}
=======
    ref={ref}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}

DrawerDescription && DrawerDescription.displayName = DrawerPrimitive && DrawerPrimitive.Description.displayName;

<<<<<<< HEAD
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
export {
=======

  DrawerDescription,;
};
  />));
DrawerDescription.display_name = DrawerPrimitive.Description.display_name;
;



export {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
  DrawerDescription,;
};
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

;
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


  DrawerDescription,
}
;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  DrawerDescription,
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  DrawerDescription,
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
