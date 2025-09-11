
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
import {cn} from '@/lib/utils';
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
<<<<<<< HEAD

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const Dialog = DialogPrimitive.Root;
;
const DialogTrigger = DialogPrimitive.Trigger;
;
const DialogPortal = DialogPrimitive.Portal;
;
const DialogClose = DialogPrimitive.Close;
;
const DialogOverlay = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Overlay>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Overlay;
    ref={ref}

      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",


      className
    className={cn(;
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",;
      className;
    )}
    {...props}
  />;
));





<<<<<<< HEAD
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
=======
=======

const Dialog = DialogPrimitive && DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive && DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive && DialogPrimitive.Portal;

const DialogClose = DialogPrimitive && DialogPrimitive.Close;

const DialogOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Overlay>,;
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Overlay>;
></typeof>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Overlay
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
<<<<<<< HEAD
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  />;
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======





>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.C</typeof>ontent>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
DialogOverlay && DialogOverlay.displayName = DialogPrimitive && DialogPrimitive.Overlay.displayName;
=======

DialogOverlay && DialogOverlay.displayName = DialogPrimitive && DialogPrimitive.Overlay.displayName;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.C</typeof>ontent>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive&& DialogPrimitive.Content

<<<<<<< HEAD

<<<<<<< HEAD
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
;
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DialogContent = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive.Content;

<<<<<<< HEAD
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
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;
        className;
      )}


      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>



=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
<<<<<<< HEAD
      {...props}
    >
      {children}
      <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
        <X className='h-4 w-4' />
        <span className='sr-only'>Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
=======
      )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {...props}>;
      {children}



=======
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
DialogContent.displayName = DialogPrimitive.Content.displayName
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
DialogContent.displayName = DialogPrimitive.Content.displayName

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
  <div
    className={cn(
<<<<<<< HEAD

      <DialogPrimitive && DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>;
        <X className='h-4 w-4' />;
        <span className='sr-only'>Close</span>;
      </DialogPrimitive && DialogPrimitive.Close>;
    </DialogPrimitive && DialogPrimitive.Content>;
  </DialogPortal>;
));
DialogContent && DialogContent.displayName = DialogPrimitive && DialogPrimitive.Content.displayName,;
const DialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
  <div
    className={cn(
      'flex flex-col space-y-1 && 1.5 text-center sm:text-left',
      className
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
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left'
      "flex flex-col space-y-1.5 text-center sm:text-left",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      'flex flex-col space-y-1.5 text-center sm:text-left'
      "flex flex-col space-y-1.5 text-center sm:text-left",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  />
<<<<<<< HEAD

)
DialogHeader.displayName = "DialogHeader"



const DialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
DialogHeader && DialogHeader.displayName = 'DialogHeader';
const DialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
  <div
    className={cn(


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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
);
DialogHeader.displayName = 'DialogHeader';
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className
  ...props
<<<<<<< HEAD
}: React.HTMLAttributes<HTMLDivElement>) => (
=======
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
=======
DialogHeader && DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  />
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
);
DialogFooter.displayName = 'DialogFooter';
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>
  React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive.Title>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
DialogFooter && DialogFooter.displayName = 'DialogFooter';
=======
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
=======
DialogFooter && DialogFooter.displayName = 'DialogFooter';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Title>,;
  React && React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Title
<<<<<<< HEAD
DialogFooter.displayName = "DialogFooter";
;
const DialogTitle = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Title>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Title;
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





<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight'
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
<<<<<<< HEAD
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  />;
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======





>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>
  React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
<<<<<<< HEAD
<<<<<<< HEAD
const DialogDescription = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Description;
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
DialogTitle && DialogTitle.displayName = DialogPrimitive && DialogPrimitive.Title.displayName;
=======
=======
DialogTitle && DialogTitle.displayName = DialogPrimitive && DialogPrimitive.Title.displayName;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Description>,;
  React && React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
  <DialogPrimitive&& DialogPrimitive.Description
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <DialogPrimitive.Description;



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn (
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',
      class_name)}
    {...props}
<<<<<<< HEAD
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
=======
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======


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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  DialogDescription,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  />));
DialogDescription.display_name = DialogPrimitive.Description.display_name;
;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
<<<<<<< HEAD
<<<<<<< HEAD
  DialogDescription,;
};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  DialogDescription,;
};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export {;
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
<<<<<<< HEAD
  DialogDescription} const Dialog = DialogPrimitive.Root const DialogTrigger = DialogPrimitive.Trigger const DialogPortal = DialogPrimitive.Portal const DialogClose = DialogPrimitive.Close const DialogOverlay = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Overlay>;
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
}/>) DialogHeader.displayName = "DialogHeader" const DialogFooter = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) DialogFooter.displayName = "DialogFooter" const DialogTitle = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Title>;
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
