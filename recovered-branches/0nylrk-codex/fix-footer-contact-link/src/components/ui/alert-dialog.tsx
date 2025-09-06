import React from 'react';
import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import {cn} from '@/lib/utils';
import {buttonVariants} from '@/components/ui/button';
<<<<<<< HEAD
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
=======

const AlertDialog = AlertDialogPrimitive && AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive && AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive && AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Overlay>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Overlay>;
></typeof>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Overlay
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      className
    )}
    {...props}
    ref={ref}
  />;
));
<<<<<<< HEAD
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.C</typeof>ontent>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
=======
AlertDialogOverlay && AlertDialogOverlay.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.C</typeof>ontent>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
    <AlertDialogPrimitive&& AlertDialogPrimitive.Content
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
        className
      )}
      {...props}
    />;
  </AlertDialogPortal>;
));
<<<<<<< HEAD
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
=======
AlertDialogContent && AlertDialogContent.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left'
      className
    )}
    {...props}
  />;
);
<<<<<<< HEAD
AlertDialogHeader.displayName = 'AlertDialogHeader';
const AlertDialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
=======
AlertDialogHeader && AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      className
    )}
    {...props}
  />;
);
<<<<<<< HEAD
AlertDialogFooter.displayName = 'AlertDialogFooter';
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>
  React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
=======
AlertDialogFooter && AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>,;
  React && React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Title
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />;
));
<<<<<<< HEAD
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
=======
AlertDialogTitle && AlertDialogTitle.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>,;
  React && React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Description
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />;
));
<<<<<<< HEAD
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>
</typeof>  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
=======
AlertDialogDescription && AlertDialogDescription.displayName =;
  AlertDialogPrimitive && AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>,;
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Action
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />;
));
<<<<<<< HEAD
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
=======
AlertDialogAction && AlertDialogAction.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Cancel>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Cancel
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(
      buttonVariants({ variant: 'outline' })
      'mt-2 sm:mt-0'
      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD
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
AlertDialogCancel && AlertDialogCancel.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Cancel.displayName;

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
  AlertDialogCancel,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
