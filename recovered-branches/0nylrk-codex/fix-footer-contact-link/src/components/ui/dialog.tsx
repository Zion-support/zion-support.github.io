import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import {cn} from '@/lib/utils';
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
<<<<<<< HEAD
import { X } from 'lucide-react'const DialogOverlay = React.forwardRef<
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import * as React from "react""
import * as DialogPrimitive from "@radix-ui/react-dialog""
import { X } from "lucide-react""
import * as React from "react""
import * as DialogPrimitive from "@radix-ui/react-dialog""
import { X } from "lucide-react"
<<<<<<< HEAD

"
import { cn } from "@/lib/utils"

const DialogOverlay = React.forwardRef<

  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (

      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

    )}
    {...props}
  />;
));

=======

"
import { cn } from "@/lib/utils"

=======
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
=======


=======
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const DialogOverlay = React.forwardRef<

>>>>>>> origin/resolved-merge-conflicts
  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay

const Dialog = DialogPrimitive && DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive && DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive && DialogPrimitive.Portal;

const DialogClose = DialogPrimitive && DialogPrimitive.Close;

const DialogOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Overlay>,;
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Overlay>;
></typeof>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Overlay
    ref={ref}
    className={cn(

import { cn } from '@/lib/utils'

const Dialog = $2;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref = $2;
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = $2;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',

      classNameconst DialogContent = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive.Content;      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
        className
      )}
      {...props}>;
      {children}

      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className
      ref={ref}
      className={cn(;
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',;
        className;
      )}
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName
      <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
        <X className='h-4 w-4' />
        <span className='sr-only'>Close</span>
    </DialogPrimitive.Content>
  </DialogPortal>
))      className
    )}
    {...props}
  />

)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (

const DialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
  <div
    className={cn(

      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',

      className
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
    )}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>

>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
DialogFooter && DialogFooter.displayName = 'DialogFooter';
const DialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Title>,;
  React && React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Title
    ref={ref}
    className={cn(

      'text-lg font-semibold leading-none tracking-tight',

      className;
import {cn} from '@/lib / utils';
;
const Dialog = DialogPrimitive.Root;
;
const DialogTrigger = DialogPrimitive.Trigger;
;
const DialogPortal = DialogPrimitive.Portal;
;
const DialogClose = DialogPrimitive.Close;
;
const DialogOverlay = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.Overlay>;
></typeof>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Overlay;
    ref={ref}
    className={cn (
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',
      class_name)}
    {...props}
export {
  Dialog
  DialogPortal
  DialogOverlay
  DialogClose
  DialogTrigger
  DialogContent
  DialogHeader
  DialogFooter
  DialogTitle
  DialogDescription
}

<<<<<<< HEAD
export {;
  Dialog,;
  DialogPortal,;
  DialogOverlay,;
  DialogClose,;
  DialogTrigger,;
  DialogContent,;
  DialogHeader,;
  DialogFooter,;
  DialogTitle,;
  DialogDescription,
};
  />));
DialogOverlay.display_name = DialogPrimitive.Overlay.display_name;
;
const DialogContent = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.C</typeof > ontent>;
>(({ class_name, children, ...props }, ref) => (
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive.Content;
      ref={ref}
      className={cn (
        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',
        class_name)}
      {...props}
    >;
      {children}
      <DialogPrimitive.Close className='absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover: opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - accent data-[state = open]:text - muted - foreground'>;
        <X className='h - 4 w - 4' />;
        <span className='sr - only'>Close</span>;
      </DialogPrimitive.Close>;
    </DialogPrimitive.Content>;
  </DialogPortal>));
DialogContent.display_name = DialogPrimitive.Content.display_name,
const DialogHeader = ({
  class_name,
  ...props;
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
  <div;
    className={cn (
      'flex flex - col space - y-1.5 text - center sm:text - left',
      class_name)}
    {...props}
  />);
DialogHeader.display_name = 'DialogHeader';
;
const DialogFooter = ({
  class_name,
  ...props;
}: React</HTMLDivElement>.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn (
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',
      class_name)}
    {...props}
  />);
DialogFooter.display_name = 'DialogFooter';
;
const DialogTitle = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Title>,
  React.Comp</typeof > onentPropsWithoutRef < typeof DialogPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Title;
    ref={ref}
    className={cn (
      'text - lg font - semibold leading - none tracking - tight',
      class_name)}
    {...props}
  />));
DialogTitle.display_name = DialogPrimitive.Title.display_name;
;
const DialogDescription = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Description>,
  React.C</typeof > omponentPropsWithoutRef < typeof DialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Description;
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}

DialogDescription && DialogDescription.displayName = DialogPrimitive && DialogPrimitive.Description.displayName;export {;
  Dialog,;
  DialogPortal,;
  DialogOverlay,;
  DialogClose,;
  DialogTrigger,;
  DialogContent,;
  DialogHeader,;
  DialogFooter,;
  DialogTitle,;
  DialogDescription,
};
DialogDescription.display_name = DialogPrimitive.Description.display_name;
;
export {
  Dialog,
      ref = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(

      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

<<<<<<< HEAD
=======
<<<<<<< HEAD
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.C</typeof>ontent>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
<<<<<<< HEAD

const DialogContent = React.forwardRef<;

        className
=======
<<<<<<< HEAD
    <DialogPrimitive.Content
      ref = $2;
=======
<<<<<<< HEAD

=======
    <DialogPrimitive.Content
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
DialogOverlay && DialogOverlay.displayName = DialogPrimitive && DialogPrimitive.Overlay.displayName;
const DialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.C</typeof>ontent>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive&& DialogPrimitive.Content
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


<<<<<<< HEAD
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
;
      ref={ref}
<<<<<<< HEAD
      className={cn(;"
=======
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const DialogContent = React.forwardRef<;

<<<<<<< HEAD
        className

      ref={ref}
      className={cn(;"
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;
        className;
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
        className
<<<<<<< HEAD
      ref={ref}
      className={cn(;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;
        className;
      )}

<<<<<<< HEAD
=======

      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>



      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className = $2;
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className = $2;
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = $2;
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className = $2;
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = $2;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref = $2;
<<<<<<< HEAD
=======
=======
      <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
        <X className='h-4 w-4' />
        <span className='sr-only'>Close</span>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));

      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
<<<<<<< HEAD
))
=======
));

      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({}
  className;
  ...props;
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
  <div;
    className={cn(

DialogContent && DialogContent.displayName = DialogPrimitive && DialogPrimitive.Content.displayName,;

const DialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
  <div;
    className={cn('
      'flex flex-col space-y-1 && 1.5 text-center sm:text-left',

    )}
    {...props}
  />;
);

"
      "flex flex-col space-y-1.5 text-center sm:text-left",

      className

      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName
<<<<<<< HEAD
DialogContent.displayName = DialogPrimitive.Content.displayName
=======
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
DialogContent.displayName = DialogPrimitive.Content.displayName
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const DialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
  <div
    className={cn(

<<<<<<< HEAD
<DialogPrimitive && DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>;
=======
<<<<<<< HEAD
<DialogPrimitive && DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>;
=======
      <DialogPrimitive && DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <X className='h-4 w-4' />;
        <span className='sr-only'>Close</span>;
      </DialogPrimitive && DialogPrimitive.Close>;
    </DialogPrimitive && DialogPrimitive.Content>;
  </DialogPortal>;
));
DialogContent && DialogContent.displayName = DialogPrimitive && DialogPrimitive.Content.displayName,;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const DialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
  <div
    className={cn(
      'flex flex-col space-y-1 && 1.5 text-center sm:text-left',
<<<<<<< HEAD

      className
className
=======
      className
<<<<<<< HEAD
className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {...props}
    >;
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">;
        <X className="h-4 w-4" />;
        <span className="sr-only">Close</span>;
      </DialogPrimitive.Close>;
    </DialogPrimitive.Content>;
  </DialogPortal>;
));
DialogContent.displayName = DialogPrimitive.Content.displayName;
;
const DialogHeader = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;
      "flex flex-col space-y-1.5 text-center sm:text-left",;
      className;
    )}
    {...props}
  />;
);

      "flex flex-col space-y-1.5 text-center sm:text-left",

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left'
      "flex flex-col space-y-1.5 text-center sm:text-left",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      className

    )}
    {...props}
  />

<<<<<<< HEAD
const DialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (

DialogHeader && DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;

      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

=======
const DialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
DialogHeader && DialogHeader.displayName = 'DialogHeader';
const DialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
<<<<<<< HEAD
=======
  <div
    className={cn(

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

<<<<<<< HEAD
      className
DialogHeader.displayName = "DialogHeader";
;
const DialogFooter = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",;
      className;
);
DialogHeader.displayName = 'DialogHeader';
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      className

    )}
    {...props}
  />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
);
DialogFooter.displayName = 'DialogFooter';
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>
  React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive.Title>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    )}
    {...props}
  />
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
)

DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
DialogFooter && DialogFooter.displayName = 'DialogFooter';
const DialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Title>,;
  React && React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  <DialogPrimitive&& DialogPrimitive.Title
DialogFooter.displayName = "DialogFooter";
;
const DialogTitle = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Title>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Title;
    ref={ref}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      "text-lg font-semibold leading-none tracking-tight",

      className;
<<<<<<< HEAD
import {cn} from '@/lib / utils';
;
;
;
;
;
const DialogOverlay = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.Overlay>;
></typeof>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Overlay;
=======

>>>>>>> origin/chore/fix-lint-and-merge
    ref={ref}
    className={cn(
      className;
    className={cn(;"
      "text-lg font-semibold leading-none tracking-tight",;
      className;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      className
    className={cn(;
      "text-lg font-semibold leading-none tracking-tight",;
      className;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    )}
    {...props}
  />;
));

      'text-lg font-semibold leading-none tracking-tight'
      "text-lg font-semibold leading-none tracking-tight",

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = $2;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
<<<<<<< HEAD
=======
=======
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight'
      "text-lg font-semibold leading-none tracking-tight",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>
  React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD

  <DialogPrimitive.Description;
DialogTitle && DialogTitle.displayName = DialogPrimitive && DialogPrimitive.Title.displayName;

=======
<<<<<<< HEAD

  <DialogPrimitive.Description;
=======
  <DialogPrimitive.Description
<<<<<<< HEAD
const DialogDescription = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Description;
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
DialogDescription.displayName = $2;
<<<<<<< HEAD
=======
=======
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
DialogTitle && DialogTitle.displayName = DialogPrimitive && DialogPrimitive.Title.displayName;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const DialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Description>,;
  React && React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

;

=======
  <DialogPrimitive&& DialogPrimitive.Description
;
<<<<<<< HEAD

=======
import {cn} from '@/lib / utils';
;
const Dialog = DialogPrimitive.Root;
;
const DialogTrigger = DialogPrimitive.Trigger;
;
const DialogPortal = DialogPrimitive.Portal;
;
const DialogClose = DialogPrimitive.Close;
;
const DialogOverlay = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.Overlay>;
></typeof>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Overlay;
  <DialogPrimitive.Description;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    ref={ref}
    className={cn ('
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',
      class_name)}
    {...props}
<<<<<<< HEAD

}
    className={cn ("
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',')
      class_name)}
export {
  // TODO: Implement
}
  Dialog;
  DialogPortal;
  DialogOverlay;
  DialogClose;
  DialogTrigger;
  DialogContent;
  DialogHeader;
  DialogFooter;
  DialogTitle;
  DialogDescription;

pr-12325
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
    className={cn ("
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',')
      class_name)}
export {
  // TODO: Implement
}
  Dialog;
  DialogPortal;
  DialogOverlay;
  DialogClose;
  DialogTrigger;
  DialogContent;
  DialogHeader;
  DialogFooter;
  DialogTitle;
  DialogDescription;

pr-12325

=======
  />));
DialogOverlay.display_name = DialogPrimitive.Overlay.display_name;
;
  DialogDescription,;
};
  />));

pr-12325
const DialogContent = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.C</typeof > ontent>;
>(({ class_name, children, ...props }, ref) => (
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive.Content;
      ref={ref}
      className={cn ('
        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',
        class_name)}
      {...props}
    >;
      {children}'
      <DialogPrimitive.Close className='absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover: opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - accent data-[state = open]:text - muted - foreground'>;'
        <X className='h - 4 w - 4' />;'
        <span className='sr - only'>Close</span>;
      </DialogPrimitive.Close>;
    </DialogPrimitive.Content>;
  </DialogPortal>));
DialogContent.display_name = DialogPrimitive.Content.display_name,
const DialogHeader = ({}
  class_name,
  ...props;
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col space - y-1.5 text - center sm:text - left',
      class_name)}
    {...props}
  />);'
DialogHeader.display_name = 'DialogHeader';
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
const DialogFooter = ({}
>>>>>>> origin/chore/fix-lint-and-merge
=======
const DialogFooter = ({
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  class_name,
  ...props;
}: React</HTMLDivElement>.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',
      class_name)}
    {...props}
  />);'
DialogFooter.display_name = 'DialogFooter';
;

      className={cn (
        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',')
    >;

      <DialogPrimitive.Close className='absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover: opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - accent data-[state = open]:text - muted - foreground'>;

        <X className='h - 4 w - 4' />;

        <span className='sr - only'>Close</span>;
      </DialogPrimitive.Close>;
    </DialogPrimitive.Content>;
  ));
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
      'flex flex - col space - y-1.5 text - center sm:text - left',')
  />);
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',')
pr-12325
const DialogTitle = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Title>,
  React.Comp</typeof > onentPropsWithoutRef < typeof DialogPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Title;
    ref={ref}
    className={cn ('
      'text - lg font - semibold leading - none tracking - tight',
      class_name)}
    {...props}
  />));
DialogTitle.display_name = DialogPrimitive.Title.display_name;
;
const DialogDescription = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Description>,
  React.C</typeof > omponentPropsWithoutRef < typeof DialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Description;
    ref={ref}'
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}
DialogDescription && DialogDescription.displayName = DialogPrimitive && DialogPrimitive.Description.displayName;

<<<<<<< HEAD
=======


DialogDescription && DialogDescription.displayName = DialogPrimitive && DialogPrimitive.Description.displayName;
DialogTitle.displayName = DialogPrimitive.Title.displayName;
;
const DialogDescription = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Description;
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export {;
  Dialog,;
  DialogPortal,;
  DialogOverlay,;
  DialogClose,;
  DialogTrigger,;
  DialogContent,;
  DialogHeader,;
  DialogFooter,;
  DialogTitle,;
<<<<<<< HEAD
  DialogDescription,
};
  />));
DialogOverlay.display_name = DialogPrimitive.Overlay.display_name;
;
=======
<<<<<<< HEAD
export {
  Dialog
  DialogPortal
  DialogOverlay
  DialogClose
  DialogTrigger
  DialogContent
  DialogHeader
  DialogFooter
  DialogTitle
  DialogDescription
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  DialogDescription,;
};
  />));

pr-12325
const DialogContent = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.C</typeof > ontent>;
>(({ class_name, children, ...props }, ref) => (
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive.Content;
      ref={ref}
      className={cn ('
        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',
        class_name)}
      {...props}
    >;
      {children}'
      <DialogPrimitive.Close className='absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover: opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - accent data-[state = open]:text - muted - foreground'>;'
        <X className='h - 4 w - 4' />;'
        <span className='sr - only'>Close</span>;
      </DialogPrimitive.Close>;
    </DialogPrimitive.Content>;
  </DialogPortal>));
DialogContent.display_name = DialogPrimitive.Content.display_name,
const DialogHeader = ({}
  class_name,
  ...props;
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col space - y-1.5 text - center sm:text - left',
      class_name)}
    {...props}
  />);'
DialogHeader.display_name = 'DialogHeader';
;
<<<<<<< HEAD
=======
const DialogFooter = ({}
>>>>>>> origin/chore/fix-lint-and-merge
  class_name,
  ...props;
}: React</HTMLDivElement>.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',
      class_name)}
    {...props}
  />);'
DialogFooter.display_name = 'DialogFooter';
;

      className={cn (
        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',')
    >;

      <DialogPrimitive.Close className='absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover: opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - accent data-[state = open]:text - muted - foreground'>;

        <X className='h - 4 w - 4' />;

        <span className='sr - only'>Close</span>;
      </DialogPrimitive.Close>;
    </DialogPrimitive.Content>;
  ));
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
      'flex flex - col space - y-1.5 text - center sm:text - left',')
  />);
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',')
pr-12325
const DialogTitle = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Title>,
  React.Comp</typeof > onentPropsWithoutRef < typeof DialogPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Title;
    ref={ref}
    className={cn ('
      'text - lg font - semibold leading - none tracking - tight',
      class_name)}
    {...props}
  />));
DialogTitle.display_name = DialogPrimitive.Title.display_name;
;
const DialogDescription = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Description>,
  React.C</typeof > omponentPropsWithoutRef < typeof DialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Description;
    ref={ref}'
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}
DialogDescription && DialogDescription.displayName = DialogPrimitive && DialogPrimitive.Description.displayName;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
DialogDescription.display_name = DialogPrimitive.Description.display_name;
;
  DialogDescription,
};
DialogDescription.display_name = DialogPrimitive.Description.display_name;
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export {

  Dialog,
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
<<<<<<< HEAD
  DialogTitle,export {;
=======
<<<<<<< HEAD

;
export {;

=======
<<<<<<< HEAD
  DialogTitle,
  DialogDescription}
=======
<<<<<<< HEAD

=======
  DialogTitle,
<<<<<<< HEAD
  DialogDescription,;
};
=======

  DialogDescription,;
};

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export {;
>>>>>>> origin/resolved-merge-conflicts
  Dialog,;
  DialogPortal,;
  DialogOverlay,;
  DialogClose,;
  DialogTrigger,;
  DialogContent,;
  DialogHeader,;
  DialogFooter;
  DialogTitle;
  DialogDescription}
;
<<<<<<< HEAD
  DialogDescription,
}
;  DialogDescription} const Dialog = DialogPrimitive.Root const DialogTrigger = DialogPrimitive.Trigger const DialogPortal = DialogPrimitive.Portal const DialogClose = DialogPrimitive.Close const DialogOverlay = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Overlay>;
=======
export {;

<<<<<<< HEAD
=======

<<<<<<< HEAD
  DialogDescription} const Dialog = DialogPrimitive.Root const DialogTrigger = DialogPrimitive.Trigger const DialogPortal = DialogPrimitive.Portal const DialogClose = DialogPrimitive.Close const DialogOverlay = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Overlay>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> > ( ({
  className, ...props 
}, ref) => (<DialogPrimitive.Overlay) 
}{
  ...props 
}/>) ) DialogOverlay.displayName = DialogPrimitive.Overlay.displayName const DialogContent = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> > ( ({
  className, children, ...props 
}, ref) => (<DialogPortal> <DialogOverlay /> <DialogPrimitive.Content) 
}{
  ...props 
}> </DialogPrimitive.Close> </DialogPrimitive.Content> </DialogPortal>) ) DialogContent.displayName = DialogPrimitive.Content.displayName const DialogHeader = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) DialogHeader.displayName = 'DialogHeader' const DialogFooter = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) DialogFooter.displayName = 'DialogFooter' const DialogTitle = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Title>;
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> > ( ({
  className, ...props 
}, ref) => (<DialogPrimitive.Title) 
}{
  ...props 
}/>) ) DialogTitle.displayName = DialogPrimitive.Title.displayName const DialogDescription = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Description>;
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> > ( ({
  className, ...props 
}, ref) => (<DialogPrimitive.Description />) ) DialogDescription.displayName = DialogPrimitive.Description.displayName export {
  Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription 
}
<<<<<<< HEAD
  DialogTitle,
  DialogDescription}
=======
=======
<<<<<<< HEAD
}
=======
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
