<<<<<<< HEAD
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
=======



>>>>>>> main
=======
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
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
    ref={ref}
    className={cn(


      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",


      className
    )}
    {...props}
  />;
));





>>>>>>> main
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.C</typeof>ontent>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
<<<<<<< HEAD
<<<<<<< HEAD
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

DialogOverlay && DialogOverlay.displayName = DialogPrimitive && DialogPrimitive.Overlay.displayName;

const DialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.C</typeof>ontent>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive&& DialogPrimitive.Content

=======


>>>>>>> main
=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
        className
      )}
      {...props}>;
      {children}



>>>>>>> main
=======
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
DialogContent.displayName = DialogPrimitive.Content.displayName
const DialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
  <div
    className={cn(

DialogContent && DialogContent.displayName = DialogPrimitive && DialogPrimitive.Content.displayName,;

const DialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
  <div
    className={cn(
      'flex flex-col space-y-1 && 1.5 text-center sm:text-left',

      className
    )}
    {...props}
  />;
);


      "flex flex-col space-y-1.5 text-center sm:text-left",

>>>>>>> main
      className
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

)
DialogHeader.displayName = "DialogHeader"



const DialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
=======
DialogHeader && DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
    className={cn(


      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

>>>>>>> main
      className
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
);
DialogFooter.displayName = 'DialogFooter';
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>
  React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive.Title>
=======
=======

>>>>>>> main
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
<<<<<<< HEAD
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
=======


>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
=======
DialogFooter && DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Title>,;
  React && React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Title
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(


      "text-lg font-semibold leading-none tracking-tight",


      className
    )}
    {...props}
  />;
));





>>>>>>> main
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>
  React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
=======
<<<<<<< HEAD
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
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
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

=======
DialogTitle && DialogTitle.displayName = DialogPrimitive && DialogPrimitive.Title.displayName;

const DialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Description>,;
  React && React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}

DialogDescription && DialogDescription.displayName = DialogPrimitive && DialogPrimitive.Description.displayName;
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
  DialogDescription,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  />));
DialogDescription.display_name = DialogPrimitive.Description.display_name;
;
>>>>>>> main
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  DialogDescription,;
};

>>>>>>> main
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
