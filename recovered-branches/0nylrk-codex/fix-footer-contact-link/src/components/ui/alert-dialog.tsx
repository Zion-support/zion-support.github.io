
<<<<<<< HEAD

=======
import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import {cn} from '@/lib/utils';
import {buttonVariants} from '@/components/ui/button';
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay


<<<<<<< HEAD
const AlertDialog = AlertDialogPrimitive && AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive && AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive && AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Overlay>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Overlay>;
></typeof>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Overlay

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
    className={cn(

      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

      className
<<<<<<< HEAD
=======
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
;
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
;
const AlertDialog = AlertDialogPrimitive.Root;
;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
;
const AlertDialogOverlay = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Overlay;
    className={cn(;
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",;
      className;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    )}
    {...props}
    ref={ref}
  />;
));





<<<<<<< HEAD
=======
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.C</typeof>ontent>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
AlertDialogOverlay && AlertDialogOverlay.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.C</typeof>ontent>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
    <AlertDialogPrimitive&& AlertDialogPrimitive.Content

<<<<<<< HEAD
=======


=======
=======

AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
;
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const AlertDialogContent = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
    <AlertDialogPrimitive.Content;

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
        className
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
        className
      )}
      {...props}

    />
  </AlertDialogPortal>

))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName



const AlertDialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
AlertDialogContent && AlertDialogContent.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
    className={cn(


      "flex flex-col space-y-2 text-center sm:text-left",

      className
<<<<<<< HEAD
=======
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
;
const AlertDialogHeader = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;
      "flex flex-col space-y-2 text-center sm:text-left",;
      className;
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left'
      "flex flex-col space-y-2 text-center sm:text-left",
      className
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    )}
    {...props}
  />

)
AlertDialogHeader.displayName = "AlertDialogHeader"



const AlertDialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
AlertDialogHeader && AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
    className={cn(
<<<<<<< HEAD

AlertDialogFooter && AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>,;
  React && React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Title

=======
=======
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      className
AlertDialogHeader.displayName = "AlertDialogHeader";
;
const AlertDialogFooter = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",;
      className;
    )}
    {...props}
  />;
);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as AlertDialogPrimitive from '@radix - ui / react - alert - dialog';
;
import {cn} from '@/lib / utils';
import {button_variants} from '@/components / ui / button';
;
const AlertDialog = AlertDialogPrimitive.Root;
;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
;
const AlertDialogOverlay = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Overlay>;
></typeof>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay;
    className={cn (
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',
      class_name)}
    {...props}
    ref={ref}
  />));
AlertDialogOverlay.display_name = AlertDialogPrimitive.Overlay.display_name;
;
const AlertDialogContent = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.C</typeof > ontent>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
    <AlertDialogPrimitive.Content;
      ref={ref}
      className={cn (
        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',
        class_name)}
      {...props}
    />;
  </AlertDialogPortal>));
AlertDialogContent.display_name = AlertDialogPrimitive.Content.display_name;
;
const AlertDialogHeader = ({
  class_name,
  ...props;
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
  <div;
    className={cn (
      'flex flex - col space - y-2 text - center sm:text - left',
      class_name)}
    {...props}
  />);
AlertDialogHeader.display_name = 'AlertDialogHeader';
;
const AlertDialogFooter = ({
  class_name,
  ...props;
}: React</HTMLDivElement>.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn (
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',
      class_name)}
    {...props}
  />);
AlertDialogFooter.display_name = 'AlertDialogFooter';
;
const AlertDialogTitle = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Title>,
  React.Component</typeof > PropsWithoutRef < typeof AlertDialogPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Title;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
AlertDialogFooter.displayName = "AlertDialogFooter";
;
const AlertDialogTitle = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Title>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Title;
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />;
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
;
const AlertDialogDescription = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Description;
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
));
AlertDialogDescription.displayName =;
  AlertDialogPrimitive.Description.displayName;
;
const AlertDialogAction = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Action>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Action;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    ref={ref}
    className={cn ('text - lg font - semibold', class_name)}
    {...props}


      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

<<<<<<< HEAD
=======
);
AlertDialogHeader.displayName = 'AlertDialogHeader';
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className
    )}
    {...props}
  />

<<<<<<< HEAD
=======
);
AlertDialogFooter.displayName = 'AlertDialogFooter';
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>
  React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive.Title>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;




<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
AlertDialogTitle && AlertDialogTitle.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>,;
  React && React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

=======
  <AlertDialogPrimitive&& AlertDialogPrimitive.Description
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  />));
AlertDialogTitle.display_name = AlertDialogPrimitive.Title.display_name;
;
const AlertDialogDescription = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Description>,
  React.Compon</typeof > entPropsWithoutRef < typeof AlertDialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Description;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  <AlertDialogPrimitive.Description;


    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}
const AlertDialogDescription = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Description;
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;






<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>
</typeof>  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
<<<<<<< HEAD
=======
=======
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
AlertDialogDescription && AlertDialogDescription.displayName =;
  AlertDialogPrimitive && AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>,;
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Action
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  />));
AlertDialogDescription.display_name =;
  AlertDialogPrimitive.Description.display_name;
;
const AlertDialogAction = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Action>,
</typeof>  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Action>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Action;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn (button_variants (), class_name)}
    {...props}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
AlertDialogAction && AlertDialogAction.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Cancel>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Cancel
<<<<<<< HEAD

    ref={ref}



=======
=======
    className={cn(
      buttonVariants({ variant: 'outline' })
      'mt-2 sm:mt-0'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const AlertDialogAction = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Action>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Action;
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Cancel;
    ref={ref}


<<<<<<< HEAD

    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      className
=======
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
  />;
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
;
const AlertDialogCancel = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Cancel;
    ref={ref}
    className={cn(;
      buttonVariants({ variant:"outline" }),;
      "mt-2 sm:mt-0",;
      className;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    )}
    {...props}
  />;
));

AlertDialogCancel && AlertDialogCancel.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Cancel.displayName;
<<<<<<< HEAD
=======



=======



AlertDialogCancel && AlertDialogCancel.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Cancel.displayName;
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export {;
  AlertDialog,;
  AlertDialogPortal,;
  AlertDialogOverlay,;
  AlertDialogTrigger,;
  AlertDialogContent,;
  AlertDialogHeader,;
  AlertDialogFooter,;
  AlertDialogTitle,;
  AlertDialogDescription,;
  AlertDialogAction,;
<<<<<<< HEAD
  AlertDialogCancel,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  />));
AlertDialogAction.display_name = AlertDialogPrimitive.Action.display_name;
;
const AlertDialogCancel = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.</typeof > Cancel>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Cancel>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel;
    ref={ref}
    className={cn (
      button_variants ({ variant: 'outline' }),
      'mt - 2 sm:mt - 0',
      class_name)}
    {...props}
  />));
AlertDialogCancel.display_name = AlertDialogPrimitive.Cancel.display_name;
;
=======
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
export {
  AlertDialog
  AlertDialogPortal
  AlertDialogOverlay
  AlertDialogTrigger
  AlertDialogContent
  AlertDialogHeader
  AlertDialogFooter
  AlertDialogTitle
  AlertDialogDescription
  AlertDialogAction
  AlertDialogCancel
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
<<<<<<< HEAD

  AlertDialogCancel,;
};

=======
=======
  AlertDialogCancel,;
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export {;
  AlertDialog,;
  AlertDialogPortal,;
  AlertDialogOverlay,;
  AlertDialogTrigger,;
  AlertDialogContent,;
  AlertDialogHeader,;
  AlertDialogFooter,;
  AlertDialogTitle,;
  AlertDialogDescription;
  AlertDialogAction;
  AlertDialogCancel}
;


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  AlertDialogCancel}import * as React from "react" import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog" const AlertDialog = AlertDialogPrimitive.Root const AlertDialogTrigger = AlertDialogPrimitive.Trigger const AlertDialogPortal = AlertDialogPrimitive.Portal const AlertDialogOverlay = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Overlay>;
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> > ( ({
  className, ...props 
}, ref) => (<AlertDialogPrimitive.Overlay) 
}{
  ...props 
}ref= {
  ref 
}/>) ) AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName const AlertDialogContent = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> > ( ({
  className, ...props 
}, ref) => (<AlertDialogPortal> <AlertDialogOverlay /> <AlertDialogPrimitive.Content) 
}{
  ...props 
}/> </AlertDialogPortal>) ) AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName const AlertDialogHeader = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) AlertDialogHeader.displayName = "AlertDialogHeader" const AlertDialogFooter = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) AlertDialogFooter.displayName = "AlertDialogFooter" const AlertDialogTitle = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Title>;
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> > ( ({
  className, ...props 
}, ref) => (<AlertDialogPrimitive.Title />) ) AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName const AlertDialogDescription = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Description>;
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> > ( ({
  className, ...props 
}, ref) => (<AlertDialogPrimitive.Description />) ) AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName const AlertDialogAction = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Action>;
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> > ( ({
  className, ...props 
}, ref) => (<AlertDialogPrimitive.Action ref= {
  ref 
}className= {
  cn (buttonVariants (), className) 
}{
  ...props 
}/>) ) AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName const AlertDialogCancel = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Cancel>;
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> > ( ({
  className, ...props 
}, ref) => (<AlertDialogPrimitive.Cancel className) 
}{
  ...props 
}/>) ) AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName export {
  AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel 
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
