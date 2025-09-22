<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {cn} from '@/lib/utils';
=======

import {cn} from '@/lib/utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {buttonVariants} from '@/components/ui/button';
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import * as React from "react""
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog""
import * as React from "react""
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

"
import { cn } from "@/lib/utils""
import { buttonVariants } from "@/components/ui/button"
;
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (
<AlertDialogPrimitive.Overlay    {...props}
    ref={ref}
  />;
pr-12325

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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      className
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.C</typeof>ontent>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
<AlertDialogPrimitive.Content
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    <AlertDialogPrimitive.Content;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  <AlertDialogPortal>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
AlertDialogOverlay && AlertDialogOverlay.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React && React.forwardRef<;

  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.C</typeof>ontent>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
<AlertDialogPrimitive&& AlertDialogPrimitive.Content
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    <AlertDialogPrimitive&& AlertDialogPrimitive.Content;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const AlertDialogContent = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
    <AlertDialogPrimitive.Content;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      ref={ref}
      className={cn('
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      ref={ref}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className
=======
        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      className={cn("
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg''
        className;
      ref={ref}
      className={cn('
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg''
        className;)

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      )}
      {...props}

    />
</AlertDialogPrimitive>
  </AlertDialogPortal>

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
<<<<<<< HEAD
<<<<<<< HEAD
  <div
    className={cn(
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
AlertDialogContent && AlertDialogContent.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
=======
  <div
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    className={cn(
  className}
  ...props}
}: React.HTMLAttributes<H</HTMLDivElement />TMLDivElement>) => (
className={cn(

      "flex flex-col space-y-2 text-center sm:text-left",

      className
      \"flex flex-col space-y-2 text-center sm:text-left\",

      className;
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
;
const AlertDialogHeader = ({;
  className,;}
  ...props;}
} React.HTMLAttributes<HTMLDivElement />) => (;
  <div;
    className={cn(;
      "flex flex-col space-y-2 text-center sm:text-left",;
      className;
      ref={ref}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    )}
    {...props}
  />
const AlertDialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
<div
    className={cn(

AlertDialogHeader && AlertDialogHeader.displayName = 'AlertDialogHeader';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
        \"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg\",}
        className;}
ref={ref}
      className={cn(;
        \"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg\",;}
        className;}
      )}
      {...props}
const AlertDialogHeader = ({
  className}
  ...props}
}: React.HTMLAttributes<H</HTMLDivElement />TMLDivElement>) => (
  <div;
className={cn(
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
AlertDialogHeader && AlertDialogHeader.displayName = 'AlertDialogHeader';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

const AlertDialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
<div
    className={cn(
      \"flex flex-col space-y-2 text-center sm:text-left\",
      className;
const AlertDialogFooter = ({;
  className,;}
  ...props;}
}: React</HTMLDivElement />.HTMLAttributes<HTMLDivElement />) => (;
  <div;
className={cn(

AlertDialogFooter && AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title />,;}
  React && React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title />;}
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Title
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
    className={cn(
'
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
    )}
    {...props}
  />

>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
<<<<<<< HEAD

    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;
    )}
    {...props}
  />;
);
<div
    className={cn(
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
const AlertDialogTitle = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Title />,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title />;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Title;
    ref={ref}
    className={cn(\"text-lg font-semibold\", className)}

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

    )}
    {...props}
  />

);
AlertDialogFooter.displayName = 'AlertDialogFooter';
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>
  React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive.Title>
)
AlertDialogFooter.displayName = "AlertDialogFooter"

  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.C</typeof>ontent>;
  <AlertDialogPortal>;

    <AlertDialogOverlay />;

    <AlertDialogPrimitive&& AlertDialogPrimitive.Content;
const AlertDialogContent = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Content>,;

  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>;

        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg

    />

}: React.HTMLAttributes<HTMLDivElement>) => (
)
}: React && React.HTMLAttributes<HTMLDivElement>) => (;

  <div;

      "flex flex-col space-y-2 text-center sm:text-left","
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg","
      className={cn(;"
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;"
const AlertDialogHeader = ({
  ...props;)
</div>
      'flex flex-col space-y-2 text-center sm:text-left
}: React.HTMLAttributes<HTMLDivElement>) => (;

"
AlertDialogFooter && AlertDialogFooter.displayName = 'AlertDialogFooter';
const AlertDialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>,;
  React && React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Title;
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2

}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
</H>)
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
</H>
  <div;
    className={cn(

'
      "flex flex-col space-y-2 text-center sm:text-left","
      className;
      ref={ref}
      className={cn("
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg","
        className;
      ref={ref}
      className={cn(;"
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;"
        className;)
      )}
      {...props}
const AlertDialogHeader = ({
  className;
  ...props;)
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
</div>
  <div;
    className={cn("
      'flex flex-col space-y-2 text-center sm:text-left'''
      "flex flex-col space-y-2 text-center sm:text-left","
      className;)
    )}
    {...props}
  />
</div>
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
</HTMLDivElement>)
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
</HTMLDivElement>
  <div;
    className={cn(
"
AlertDialogFooter && AlertDialogFooter.displayName = 'AlertDialogFooter';'
const AlertDialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>,;
</div>
  React && React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>;
</typeof>
  <AlertDialogPrimitive&& AlertDialogPrimitive.Title;'
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2''
      className;)
    )}
    {...props}
  />;
);
  <div
    className={cn(
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      className
    )}
    {...props}
  />;
);
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
  <AlertDialogPrimitive.Action;
    ref={ref}
    className={cn ('text - lg font - semibold', class_name)}

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

      className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    )}
    {...props}
  />

<<<<<<< HEAD
);
AlertDialogFooter.displayName = 'AlertDialogFooter';
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>
  React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive.Title>
)
=======

)"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
AlertDialogFooter.displayName = "AlertDialogFooter"

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2","
pr-12325

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

<<<<<<< HEAD

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
<AlertDialogPrimitive.Description
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    ref={ref}
</AlertDialogPrimitive>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>;
</typeof>
  <AlertDialogPrimitive.Title;
    ref={ref})"
    className={cn("text-lg font-semibold", className)}"

    {...props}
  />;
</AlertDialogPrimitive>
const AlertDialogDescription = React.forwardRef<;

  React.ElementRef<typeof AlertDialogPrimitive.Description>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
</typeof>
  <AlertDialogPrimitive.Description;
    className={cn ('text - lg font - semibold', class_name)}
    {...props}
  />));
AlertDialogTitle.display_name = AlertDialogPrimitive.Title.display_name;
;

'
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2","
      className;
    )}
    {...props}
  />
</AlertDialogPrimitive>
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
</typeof>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
</typeof>
  <AlertDialogPrimitive.Title;
    ref={ref}"
    className={cn('text-lg font-semibold', className)}'
    {...props}
  />
</AlertDialogPrimitive>
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
</typeof>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
</typeof>
  <AlertDialogPrimitive.Description;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
AlertDialogTitle && AlertDialogTitle.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>,;
</AlertDialogPrimitive>
  React && React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, ...props }, ref) => (;

=======
=======    ref={ref}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>(({ className, ...props }, ref) => (;

<AlertDialogPrimitive&& AlertDialogPrimitive.Description
    ref={ref}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    className={cn ('text - lg font - semibold', class_name)}
    {...props}
=======

    ref={ref}'
    className={cn ('text - lg font - semibold', class_name)}
    {...props}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  />));
AlertDialogTitle.display_name = AlertDialogPrimitive.Title.display_name;
;
</typeof>

const AlertDialogDescription = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Description>,
  React.Compon</typeof > entPropsWithoutRef < typeof AlertDialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
<AlertDialogPrimitive.Description;    ref={ref}
  <AlertDialogPrimitive.Description;

  <AlertDialogPrimitive.Description;

<<<<<<< HEAD
    ref={ref}'
    ref={ref}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}
const AlertDialogDescription = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Description;
ref={ref}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;
ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
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

<<<<<<< HEAD

    ref={ref})
    className={cn ('text - sm text - muted - foreground', class_name)}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>
</typeof>  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
<AlertDialogPrimitive.Action
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
    className={cn(
      buttonVariants({ variant: 'outline' })
      'mt-2 sm:mt-0'
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}AlertDialogDescription && AlertDialogDescription.displayName =;
=======
=======
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}AlertDialogDescription && AlertDialogDescription.displayName =;
AlertDialogDescription && AlertDialogDescription.displayName =;
pr-12325

  <AlertDialogPrimitive.Description;

  <AlertDialogPrimitive.Description;

    ref={ref})'
    className={cn ('text - sm text - muted - foreground', class_name)}'
    {...props}
const AlertDialogDescription = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Description>,;
</AlertDialogPrimitive>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
</typeof>
  <AlertDialogPrimitive.Description;
    ref={ref}'
    className={cn('text-sm text-muted-foreground', className)}'
    {...props}
  />
</AlertDialogPrimitive>
const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>
</typeof>
</typeof>  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
</typeof>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  <AlertDialogPrimitive.Action;
AlertDialogDescription && AlertDialogDescription.displayName =;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
AlertDialogDescription && AlertDialogDescription.displayName =;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  AlertDialogPrimitive && AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>,;
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
<AlertDialogPrimitive&& AlertDialogPrimitive.Action
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}
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
const AlertDialogAction = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Action>,
</typeof>  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Action>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Action;
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

AlertDialogAction && AlertDialogAction.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Cancel>;
>(({ className, ...props }, ref) => (;
<AlertDialogPrimitive&& AlertDialogPrimitive.Cancel
<<<<<<< HEAD
    ref={ref}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  <AlertDialogPrimitive&& AlertDialogPrimitive.Cancel;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const AlertDialogAction = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Action>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Action;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======
    className={cn(
=======
      className    className={cn(
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      className    className={cn(
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      buttonVariants({ variant: "outline" }),
=======

    className={cn("
      buttonVariants({ variant: "outline" }),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "mt-2 sm:mt-0",
    ref={ref}
    className={cn('
      buttonVariants({ variant: 'outline' })'
      'mt-2 sm:mt-0'
className
    )}
    {...props}
  />;
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export {};
  AlertDialog;
  AlertDialogPortal;
  AlertDialogOverlay;
  AlertDialogTrigger;
  AlertDialogContent;
  AlertDialogHeader;
  AlertDialogFooter;
  AlertDialogTitle;
  AlertDialogDescription;
  AlertDialogAction;
  AlertDialogCancel;
}

AlertDialogCancel && AlertDialogCancel.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Cancel.displayName;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

AlertDialogCancel && AlertDialogCancel.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Cancel.displayName;
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  AlertDialogCancel,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  />));
AlertDialogAction.display_name = AlertDialogPrimitive.Action.display_name;
;
const AlertDialogCancel = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.</typeof > Cancel>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Cancel>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel;
    ref={ref}
className={cn ('
      button_variants ({ variant: 'outline' }),'
      'mt - 2 sm:mt - 0',
      class_name)}
    {...props}
  />));
AlertDialogCancel.display_name = AlertDialogPrimitive.Cancel.display_name;
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export {
=======

export {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  AlertDialogCancel}
;

AlertDialogCancel}import * as React from "react" import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog" const AlertDialog = AlertDialogPrimitive.Root const AlertDialogTrigger = AlertDialogPrimitive.Trigger const AlertDialogPortal = AlertDialogPrimitive.Portal const AlertDialogOverlay = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Overlay>;
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Action;

const AlertDialogAction = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Action>,
</typeof>  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Action>;
    ref={ref})
    className={cn(buttonVariants(), className)}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  AlertDialogCancel,
<<<<<<< HEAD
}
;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
