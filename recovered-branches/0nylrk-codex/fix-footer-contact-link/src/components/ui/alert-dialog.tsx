import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
import {cn} from '@/lib/utils';

=======
import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import {cn} from '@/lib/utils';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
import {buttonVariants} from '@/components/ui/button';
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

<<<<<<< HEAD
const AlertDialog = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className = $2;
      className
    )}
    {...props}
    ref = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
=======
const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (

    ref={ref}
  />;
pr-12325

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
<<<<<<< HEAD
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
=======


    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
    className={cn(

      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      className
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
    )}
    {...props}
    ref={ref}
  />
));

<<<<<<< HEAD
const AlertDialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Content>,
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.C</typeof>ontent>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
=======
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

      className
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.C</typeof>ontent>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
<<<<<<< HEAD

=======
    <AlertDialogPrimitive.Content
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
AlertDialogOverlay && AlertDialogOverlay.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.C</typeof>ontent>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
    <AlertDialogPrimitive&& AlertDialogPrimitive.Content


<<<<<<< HEAD
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
;
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const AlertDialogContent = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
    <AlertDialogPrimitive.Content;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      ref={ref}
      className={cn('
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'

      ref={ref}

      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
>>>>>>> origin/chore/fix-lint-and-merge

        className
<<<<<<< HEAD

=======
      ref={ref}
      className={cn(;
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;
        className;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      )}
      {...props}

    />
</AlertDialogPrimitive>
  </AlertDialogPortal>

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
AlertDialogContent && AlertDialogContent.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
<<<<<<< HEAD
=======
  <div
    className={cn(
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    className={cn(
<<<<<<< HEAD

  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;

        className;
      )}
      {...props}
  }
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (

const AlertDialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>,
  React && React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Title

=======
  className}
  ...props}
}: React.HTMLAttributes<H</HTMLDivElement />TMLDivElement>) => (
className={cn(

      "flex flex-col space-y-2 text-center sm:text-left",

      className
<<<<<<< HEAD
      \"flex flex-col space-y-2 text-center sm:text-left\",

      className;
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
;
const AlertDialogHeader = ({;
  className,;}
  ...props;}
} React.HTMLAttributes<HTMLDivElement />) => (;
=======
<<<<<<< HEAD
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
;
const AlertDialogHeader = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  <div;
    className={cn(;
      "flex flex-col space-y-2 text-center sm:text-left",;
      className;
      ref={ref}
<<<<<<< HEAD
    className={cn(;}
      \"flex flex-col space-y-2 text-center sm:text-left\",;}
      className;      ref={ref}
      className={cn(

        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className;
      ref={ref}
      className={cn(;"
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;
        className;
      )}
      {...props}
const AlertDialogHeader = ({}
  className;
  ...props;
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
  <div;
    className={cn('
      'flex flex-col space-y-2 text-center sm:text-left'"
      "flex flex-col space-y-2 text-center sm:text-left",

=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    )}
    {...props}
  />

const AlertDialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
<<<<<<< HEAD

AlertDialogHeader && AlertDialogHeader.displayName = 'AlertDialogHeader';

      'flex flex-col space-y-2 text-center sm:text-left'
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
const AlertDialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
AlertDialogHeader && AlertDialogHeader.displayName = 'AlertDialogHeader';
const AlertDialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
<<<<<<< HEAD

    className={cn(
'
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'

    )}
    {...props}
  />;
);

      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
>>>>>>> origin/chore/fix-lint-and-merge
      className
=======
  <div
    className={cn(
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    )}
    {...props}
  />;
);
<<<<<<< HEAD
<<<<<<< HEAD
const AlertDialogTitle = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Title;
    ref={ref}

));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
</AlertDialogPrimitive>
const AlertDialogOverlay = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Overlay>;
></typeof>(({ class_name, ...props }, ref) => (
    className={cn (
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',')
      class_name)}
  />));

  <AlertDialogPrimitive.Overlay;
    className={cn ('
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',')
      class_name)}
    {...props}
    ref={ref}
  />));
</AlertDialogPrimitive>
const AlertDialogContent = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.C</typeof > ontent>;
>(({ class_name, ...props }, ref) => (

        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',')

  ));
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
      'flex flex - col space - y-2 text - center sm:text - left',')
  />);
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',')
const AlertDialogTitle = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Title>,
  React.Component</typeof > PropsWithoutRef < typeof AlertDialogPrimitive.Title>;
  <AlertDialogPrimitive.Title;
  <AlertDialogPortal>;
</AlertDialogPortal>
    <AlertDialogOverlay />;
</AlertDialogOverlay>
    <AlertDialogPrimitive.Content;
      ref={ref}
      className={cn ('
        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',')
        class_name)}
      {...props}
    />;
</AlertDialogPrimitive>
  </AlertDialogPortal>));
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col space - y-2 text - center sm:text - left',')
      class_name)}
    {...props}
  />);
</div>
}: React</HTMLDivElement>.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',')
      class_name)}
    {...props}
  />);
</div>
const AlertDialogTitle = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Title>,
  React.Component</typeof > PropsWithoutRef < typeof AlertDialogPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Title;
AlertDialogFooter.displayName = "AlertDialogFooter";
<<<<<<< HEAD
  <AlertDialogPrimitive.Title;'
AlertDialogFooter.displayName = "AlertDialogFooter";"
;
const AlertDialogTitle = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Title>,;

  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>;
    ref={ref})"
    className={cn("text-lg font-semibold", className)}"

const AlertDialogDescription = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
  <AlertDialogPrimitive.Description;
    ref={ref}"
    className={cn("text-sm text-muted-foreground", className)}"

const AlertDialogAction = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Action>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  <AlertDialogPrimitive.Action;
    ref={ref}
    className={cn ('text - lg font - semibold', class_name)}

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className

    )}
    {...props}
  />

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
);
AlertDialogFooter.displayName = 'AlertDialogFooter';
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>
  React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive.Title>
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
)

AlertDialogFooter.displayName = "AlertDialogFooter"

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2","
pr-12325

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

<<<<<<< HEAD
=======



<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD

=======
  <AlertDialogPrimitive.Description
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
AlertDialogTitle && AlertDialogTitle.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>,;
</AlertDialogPrimitive>
  React && React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>;
<<<<<<< HEAD

    className={cn ('text - lg font - semibold', class_name)}
    {...props}

=======
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Description
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  />));
AlertDialogTitle.display_name = AlertDialogPrimitive.Title.display_name;
;
</typeof>

const AlertDialogDescription = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Description>,
  React.Compon</typeof > entPropsWithoutRef < typeof AlertDialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (

  <AlertDialogPrimitive.Description;
<<<<<<< HEAD

  <AlertDialogPrimitive.Description;

=======
  <AlertDialogPrimitive.Description;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    ref={ref}

    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
const AlertDialogDescription = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Description;
<<<<<<< HEAD
    ref={ref}
=======
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

));
AlertDialogDescription.displayName =;
  AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Action;
    ref={ref}

    )}
    {...props} />
);

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>
  React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive.Title>
)

  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>>>>>>> merged-prs-20250907-203621
      ref = $2;
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = $2;
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className = $2;
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = $2;
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className = $2;
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold, className)}
    {...props}
  />
<<<<<<< HEAD
))
AlertDialogTitle.displayName = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
=======
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (

AlertDialogTitle.display_name = AlertDialogPrimitive.Title.display_name;
const AlertDialogDescription = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Description>,
  React.Compon</typeof > entPropsWithoutRef < typeof AlertDialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Description;    ref={ref}

=======

    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
>>>>>>> origin/chore/fix-lint-and-merge
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

    ref={ref}

<<<<<<< HEAD
=======
    className={cn ('text - sm text - muted - foreground', class_name)}
>>>>>>> origin/chore/fix-lint-and-merge
    {...props}
    className={cn('text-lg font-semibold', className)}

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
AlertDialogTitle && AlertDialogTitle.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>,;

  React && React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>;
const AlertDialogDescription = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Description>,
  React.Compon</typeof > entPropsWithoutRef < typeof AlertDialogPrimitive.Description>;

    ref={ref})
    className={cn ('text - sm text - muted - foreground', class_name)}

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>
</typeof>  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD

<<<<<<< HEAD
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
    {...props}AlertDialogDescription && AlertDialogDescription.displayName =;

  <AlertDialogPrimitive.Action;
=======
  <AlertDialogPrimitive.Action
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
AlertDialogDescription && AlertDialogDescription.displayName =;

  AlertDialogPrimitive && AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>,
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

<<<<<<< HEAD
AlertDialogDescription.display_name =;
  AlertDialogPrimitive.Description.display_name;
=======
=======
  <AlertDialogPrimitive&& AlertDialogPrimitive.Action
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  />));
AlertDialogDescription.display_name =;
  AlertDialogPrimitive.Description.display_name;
;
</AlertDialogPrimitive>
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
</typeof>
  <AlertDialogPrimitive&& AlertDialogPrimitive.Action;
    ref={ref}'
    className={cn ('text - sm text - muted - foreground', class_name)}'

    {...props}
  />));
</AlertDialogPrimitive>
>>>>>>> origin/chore/fix-lint-and-merge
const AlertDialogAction = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Action>,
</typeof>  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Action>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Action;
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
AlertDialogAction && AlertDialogAction.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Cancel>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
=======
  <AlertDialogPrimitive&& AlertDialogPrimitive.Cancel
<<<<<<< HEAD
    className={cn(
      buttonVariants({ variant: 'outline' })
      'mt-2 sm:mt-0'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> merged-prs-20250907-203621
    ref={ref}
<<<<<<< HEAD
    className={cn('text-sm text-muted-foreground, className)}
    {...props}
  />
))
AlertDialogDescription.displayName = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const AlertDialogAction = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Action>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Action;

>>>>>>> origin/chore/fix-lint-and-merge
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
<<<<<<< HEAD
=======
<<<<<<< HEAD
      className    className={cn(

      className
    )}
    {...props} />;
=======
>>>>>>> origin/chore/fix-lint-and-merge
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}

<<<<<<< HEAD
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",

      buttonVariants({ variant: "outline" }),

      "mt-2 sm:mt-0",
    ref={ref}
    className={cn('
      buttonVariants({ variant: 'outline' })'
      'mt-2 sm:mt-0'

=======

<<<<<<< HEAD
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
=======

    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      className
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    )}
    {...props}
  />;
));

AlertDialogCancel && AlertDialogCancel.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Cancel.displayName;
<<<<<<< HEAD

<<<<<<< HEAD
export {
  }
  AlertDialog,
>>>>>>> merged-prs-20250907-203621
))
AlertDialogAction.displayName = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn($2);
      mt-2 sm:mt-0",
      className
    )}
=======
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
;
=======


AlertDialogCancel && AlertDialogCancel.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Cancel.displayName;
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
;
=======
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  AlertDialogCancel,;
};

  />));
AlertDialogAction.display_name = AlertDialogPrimitive.Action.display_name;
;
const AlertDialogCancel = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.</typeof > Cancel>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Cancel>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel;
    ref={ref}

      'mt - 2 sm:mt - 0',
      class_name)}
>>>>>>> origin/chore/fix-lint-and-merge
    {...props}
  />));
AlertDialogCancel.display_name = AlertDialogPrimitive.Cancel.display_name;
;
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/chore/fix-lint-and-merge
  AlertDialogCancel}
<<<<<<< HEAD
=======
;

AlertDialogCancel}import * as React from "react" import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog" const AlertDialog = AlertDialogPrimitive.Root const AlertDialogTrigger = AlertDialogPrimitive.Trigger const AlertDialogPortal = AlertDialogPrimitive.Portal const AlertDialogOverlay = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Overlay>;
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Action;

<<<<<<< HEAD
const AlertDialogAction = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Action>,
</typeof>  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Action>;
    ref={ref})
    className={cn(buttonVariants(), className)}

AlertDialogAction && AlertDialogAction.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>,;

  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Cancel>;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Cancel;

const AlertDialogCancel = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>;
  <AlertDialogPrimitive.Cancel;

    className={cn()
      buttonVariants({ variant: "outline" }),""
      "mt-2 sm:mt-0","
    className={cn()"

    className={cn(;)"
      buttonVariants({ variant:"outline" }),;""
      "mt-2 sm:mt-0",;"
      buttonVariants({ variant: 'outline' })
      'mt-2 sm:mt-0

      className;
    className={cn()"
      buttonVariants({ variant: "outline" }),""
      "mt-2 sm:mt-0","
    ref={ref}
    className={cn()"
      buttonVariants({ variant: 'outline' })''
      'mt-2 sm:mt-0''

      className;
    )}
    {...props}
  />;

</AlertDialogPrimitive>
const AlertDialogCancel = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.</typeof > Cancel>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Cancel>;
    className={cn ()
      button_variants ({ variant: 'outline' }),
      'mt - 2 sm:mt - 0',

  AlertDialogCancel}import * as React from "react" import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog" const AlertDialog = AlertDialogPrimitive.Root const AlertDialogTrigger = AlertDialogPrimitive.Trigger const AlertDialogPortal = AlertDialogPrimitive.Portal const AlertDialogOverlay = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Overlay>;"
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> > ( ({
}, ref) => (<AlertDialogPrimitive.Overlay) 
}{
  ...props;
}ref= {
  ref;
}/>) ) AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName const AlertDialogContent = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Content>;

React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> > ( ({
}, ref) => (<AlertDialogPortal> <AlertDialogOverlay /> <AlertDialogPrimitive.Content) 

}/> ) ) AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName const AlertDialogHeader = ({)
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 

}/>) AlertDialogFooter.displayName = "AlertDialogFooter" const AlertDialogTitle = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Title>;"
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> > ( ({
}, ref) => (<AlertDialogPrimitive.Title />) ) AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName const AlertDialogDescription = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Description>;

React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> > ( ({
}, ref) => (<AlertDialogPrimitive.Description />) ) AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName const AlertDialogAction = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Action>;

React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> > ( ({
}, ref) => (<AlertDialogPrimitive.Action ref= {
}className= {)
  cn (buttonVariants (), className) 
}/>) ) AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName const AlertDialogCancel = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Cancel>;

React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> > ( ({
}, ref) => (<AlertDialogPrimitive.Cancel className) 
}/>) ) AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName export {
  AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel 
}
  AlertDialogCancel,
}
;
=======
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
