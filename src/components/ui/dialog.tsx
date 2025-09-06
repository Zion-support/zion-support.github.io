<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {X} from 'lucide-react'
import {cn} from '@/lib/utils'
const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close
<<<<<<< HEAD
onst DialogOverlay = React.forwardRef<
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from 'lucide-react'

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const DialogOverlay = React.forwardRef<
>>>>>>>   React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
<<<<<<< HEAD
import React from 'react';
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';

import {cn} from '@/lib/utils';

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
    ref={ref}
    className={cn(
<<<<<<< HEAD

=======
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      className
    )}
    {...props}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.C</typeof>ontent>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
<<<<<<< HEAD

=======
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  />;
));
DialogOverlay && DialogOverlay.displayName = DialogPrimitive && DialogPrimitive.Overlay.displayName;

const DialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.C</typeof>ontent>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive.Content;
<<<<<<< HEAD

      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",

=======
>>>>>>>       ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
>>>>>>>         className
ursor/fix-website-loading-errors-and-merge-6662
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        className
>>>>>>>       )}
      {...props}>;
=======
<<<<<<< HEAD
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg'
=======
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  />;
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive.Content;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        className
      )}
      {...props}
    >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {children}
<<<<<<< HEAD

=======
      <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
        <X className='h-4 w-4' />
        <span className='sr-only'>Close</span>
<<<<<<< HEAD
>>>>>>>       </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName,
>>>>>>> 
onst DialogHeader = ({
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
<<<<<<< HEAD

<<<<<<< HEAD
=======



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
DialogContent.displayName = DialogPrimitive.Content.displayName
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
DialogContent.displayName = DialogPrimitive.Content.displayName,
=======
DialogContent.displayName = DialogPrimitive.Content.displayName
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const DialogHeader = ({
>>>>>>>   className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
      'flex flex-col space-y-1.5 text-center sm:text-left'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
    )}
import * as React from 'react';
import * as DialogPrimitive from '@radix - ui / react - dialog';
import {X} from 'lucide-react';
import {cn} from '@/lib / utils';
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
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

  />
)
<<<<<<< HEAD

const DialogFooter = ({
=======
DialogHeader.displayName = 'DialogHeader'
onst DialogFooter = ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
ursor/fix-website-loading-errors-and-merge-6662
const DialogFooter = ({

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

<<<<<<< HEAD
=======
>>>>>>>   <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      'flex flex-col space-y-1.5 text-center sm:text-left'
=======
      "flex flex-col space-y-1.5 text-center sm:text-left",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />
)
<<<<<<< HEAD
<<<<<<< HEAD

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>

=======
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>
  React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive.Title>
onst DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>>>>>>> >(({ className, ...props }, ref) => (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
>(({ className, ...props }, ref) => (
>>>>>>>   <DialogPrimitive.Title
  />;
);
DialogFooter && DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Title>,;
  React && React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Title
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
DialogHeader.displayName = 'DialogHeader'
=======
DialogHeader.displayName = "DialogHeader"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const DialogFooter = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
<<<<<<< HEAD
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
=======
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
)
<<<<<<< HEAD
DialogFooter.displayName = 'DialogFooter'
<<<<<<< HEAD
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>
  React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive.Title>
=======
DialogFooter.displayName = "DialogFooter"

=======
=======
DialogFooter.displayName = "DialogFooter"

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'text-lg font-semibold leading-none tracking-tight'
      className
    )}
    {...props}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>
  React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  />;
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Description;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
<<<<<<< HEAD
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName
export {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD

=======
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  />;
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Description;
<<<<<<< HEAD

    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}

=======
>>>>>>>     ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,;
  DialogTitle,;
  DialogDescription;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  />;
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
export {;
  Dialog,;
  DialogPortal,;
  DialogOverlay,;
  DialogClose,;
  DialogTrigger,;
  DialogContent,;
  DialogHeader,;
<<<<<<< HEAD

  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  DialogFooter;
  DialogTitle;
  DialogDescription}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
