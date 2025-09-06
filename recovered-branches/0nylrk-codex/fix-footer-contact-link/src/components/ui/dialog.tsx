<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx


<<<<<<< HEAD
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
=======

=======
<<<<<<< HEAD
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
=======

========
<<<<<<< HEAD
import React from 'react';
import * as React from 'react';
import * as DialogPrimitive from '@radix - ui / react - dialog';
import {X} from 'lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
const Dialog = DialogPrimitive && DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive && DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive && DialogPrimitive.Portal;
const DialogClose = DialogPrimitive && DialogPrimitive.Close;
const DialogOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Overlay>,;
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Overlay>;
></typeof>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Overlay
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    ref={ref}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
    className={cn(

<<<<<<< HEAD
=======

      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
========
    className={cn(;
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",;
      className;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
    )}
    {...props}
  />;
));
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

=======





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
=======
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
DialogOverlay && DialogOverlay.displayName = DialogPrimitive && DialogPrimitive.Overlay.displayName;
const DialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.C</typeof>ontent>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive&& DialogPrimitive.Content
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
=======
<<<<<<< HEAD
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const DialogContent = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive.Content;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx

<<<<<<< HEAD
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        className
========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      ref={ref}
      className={cn(;
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;
        className;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
      )}
<<<<<<< HEAD
      {...props}>;
      {children}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        className
      )}
      {...props}
    >
      {children}
<<<<<<< HEAD
      <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
        <X className='h-4 w-4' />
        <span className='sr-only'>Close</span>
<<<<<<< HEAD
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
DialogContent.displayName = DialogPrimitive.Content.displayName
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const DialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
  <div
    className={cn(

<<<<<<< HEAD
=======
========
      <DialogPrimitive && DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>;
        <X className='h-4 w-4' />;
        <span className='sr-only'>Close</span>;
      </DialogPrimitive && DialogPrimitive.Close>;
    </DialogPrimitive && DialogPrimitive.Content>;
  </DialogPortal>;
));
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
DialogContent && DialogContent.displayName = DialogPrimitive && DialogPrimitive.Content.displayName,;
const DialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
  <div
    className={cn(
      'flex flex-col space-y-1 && 1.5 text-center sm:text-left',
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
      className
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    )}
    {...props}
  />;
);


      "flex flex-col space-y-1.5 text-center sm:text-left",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
DialogContent.displayName = DialogPrimitive.Content.displayName

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const DialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
<<<<<<< HEAD
      'flex flex-col space-y-1.5 text-center sm:text-left'
=======
      "flex flex-col space-y-1.5 text-center sm:text-left",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx

=======

)
DialogHeader.displayName = "DialogHeader"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const DialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
DialogHeader && DialogHeader.displayName = 'DialogHeader';
const DialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
  <div
    className={cn(

<<<<<<< HEAD
=======

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
);
DialogHeader.displayName = 'DialogHeader';
=======
)
DialogHeader.displayName = "DialogHeader"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx

=======

=======
);
DialogFooter.displayName = 'DialogFooter';
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>
  React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive.Title>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
DialogFooter && DialogFooter.displayName = 'DialogFooter';
const DialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Title>,;
  React && React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Title
=======
DialogFooter.displayName = "DialogFooter";
;
const DialogTitle = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Title>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Title;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    ref={ref}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
    className={cn(

<<<<<<< HEAD
=======

      "text-lg font-semibold leading-none tracking-tight",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
========
    className={cn(;
      "text-lg font-semibold leading-none tracking-tight",;
      className;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
    )}
    {...props}
  />;
));
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
DialogTitle.displayName = DialogPrimitive.Title.displayName;

=======





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'text-lg font-semibold leading-none tracking-tight'
=======
      "text-lg font-semibold leading-none tracking-tight",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>
  React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const DialogDescription = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Description;
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
<<<<<<< HEAD

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
DialogTitle && DialogTitle.displayName = DialogPrimitive && DialogPrimitive.Title.displayName;
const DialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Description>,;
  React && React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx

========
  <DialogPrimitive&& DialogPrimitive.Description
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
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
=======
  <DialogPrimitive.Description;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    ref={ref}
    className={cn (
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',
      class_name)}
    {...props}
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx

DialogDescription && DialogDescription.displayName = DialogPrimitive && DialogPrimitive.Description.displayName;
=======



========
DialogDescription && DialogDescription.displayName = DialogPrimitive && DialogPrimitive.Description.displayName;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
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
  DialogDescription,;
};
  />));
DialogDescription.display_name = DialogPrimitive.Description.display_name;
;
=======
<<<<<<< HEAD
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  DialogDescription,;
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  DialogDescription,;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dialog.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
