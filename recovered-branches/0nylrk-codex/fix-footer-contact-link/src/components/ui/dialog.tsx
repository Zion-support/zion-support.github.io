<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as DialogPrimitive from &quot;@radix-ui/react-dialog&quot;
import { X } from &quot;lucide-react&quot;

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Dialog = DialogPrimitive.Root

const _DialogTrigger = DialogPrimitive.Trigger

const _DialogPortal = DialogPrimitive.Portal

const _DialogClose = DialogPrimitive.Close

const _DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(_({_className, _...props}, _ref) => (
  <DialogPrimitive.Overlay
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const _DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(_({_className, _children, _...props}, _ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
<<<<<<< HEAD
      ref={ref}
      className={cn(
        &quot;fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg&quot;,
        className
=======
      ref={_ref}
      className={_cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    >
<<<<<<< HEAD
      {children}
      <DialogPrimitive.Close className=&quot;absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground&quot;>
        <X className=&quot;h-4 w-4&quot; />
        <span className=&quot;sr-only&quot;>Close</span>
=======
      {_children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const _DialogHeader = (_{_className, _...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
<<<<<<< HEAD
    className={cn(
      &quot;flex flex-col space-y-1.5 text-center sm:text-left&quot;,
      className
=======
    className={_cn(
      "flex flex-col space-y-1.5 text-center sm:text-left", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
)
DialogHeader.displayName = &quot;DialogHeader&quot;

const _DialogFooter = (_{_className, _...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
<<<<<<< HEAD
    className={cn(
      &quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2&quot;,
      className
=======
    className={_cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
)
DialogFooter.displayName = &quot;DialogFooter&quot;

const _DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(_({_className, _...props}, _ref) => (
  <DialogPrimitive.Title
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;text-lg font-semibold leading-none tracking-tight&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "text-lg font-semibold leading-none tracking-tight", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const _DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(_({_className, _...props}, _ref) => (
  <DialogPrimitive.Description
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;text-sm text-muted-foreground&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("text-sm text-muted-foreground", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {_Dialog, _DialogPortal, _DialogOverlay, _DialogClose, _DialogTrigger, _DialogContent, _DialogHeader, _DialogFooter, _DialogTitle, _DialogDescription}
