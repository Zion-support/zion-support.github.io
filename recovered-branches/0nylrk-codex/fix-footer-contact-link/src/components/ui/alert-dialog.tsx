import * as React from &quot;react&quot;
import * as AlertDialogPrimitive from &quot;@radix-ui/react-alert-dialog&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
import { buttonVariants } from &quot;@/components/ui/button&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _AlertDialog = AlertDialogPrimitive.Root

const _AlertDialogTrigger = AlertDialogPrimitive.Trigger

const _AlertDialogPortal = AlertDialogPrimitive.Portal

const _AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(_({_className, _...props}, _ref) => (
  <AlertDialogPrimitive.Overlay
<<<<<<< HEAD
    className={cn(
      &quot;fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0&quot;,
      className
=======
    className={_cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
    ref={_ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const _AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(_({_className, _...props}, _ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
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
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const _AlertDialogHeader = (_{_className, _...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
<<<<<<< HEAD
    className={cn(
      &quot;flex flex-col space-y-2 text-center sm:text-left&quot;,
      className
=======
    className={_cn(
      "flex flex-col space-y-2 text-center sm:text-left", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
)
AlertDialogHeader.displayName = &quot;AlertDialogHeader&quot;

const _AlertDialogFooter = (_{_className, _...props}: React.HTMLAttributes<HTMLDivElement>) => (
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
AlertDialogFooter.displayName = &quot;AlertDialogFooter&quot;

const _AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(_({_className, _...props}, _ref) => (
  <AlertDialogPrimitive.Title
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;text-lg font-semibold&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("text-lg font-semibold", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const _AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(_({_className, _...props}, _ref) => (
  <AlertDialogPrimitive.Description
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
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const _AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(_({_className, _...props}, _ref) => (
  <AlertDialogPrimitive.Action
    ref={_ref}
    className={_cn(buttonVariants(), _className)}
    {_...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const _AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(_({_className, _...props}, _ref) => (
  <AlertDialogPrimitive.Cancel
<<<<<<< HEAD
    ref={ref}
    className={cn(
      buttonVariants({ variant: &quot;outline&quot; }),
      &quot;mt-2 sm:mt-0&quot;,
=======
    ref={_ref}
    className={_cn(
      buttonVariants({ variant: "outline"}),
      "mt-2 sm:mt-0",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      className
    )}
    {_...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {_AlertDialog, _AlertDialogPortal, _AlertDialogOverlay, _AlertDialogTrigger, _AlertDialogContent, _AlertDialogHeader, _AlertDialogFooter, _AlertDialogTitle, _AlertDialogDescription, _AlertDialogAction, _AlertDialogCancel}
