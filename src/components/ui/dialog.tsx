
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from 'lucide-react'

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(


      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        className
      )}
      {...props}
    >
      {children}

      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))

=======


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const DialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(

      "flex flex-col space-y-1.5 text-center sm:text-left",

      className
    )}
    {...props}
  />
)

DialogHeader.displayName = "DialogHeader"


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const DialogFooter = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

      className
    )}
    {...props}
  />
)

DialogFooter.displayName = "DialogFooter"

=======
=======
DialogFooter.displayName = "DialogFooter"


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(


    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}

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

=======
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
  DialogFooter;
  DialogTitle;
  DialogDescription}
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
