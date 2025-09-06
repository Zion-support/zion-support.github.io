<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD


=======
=======
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import {cva, type, VariantProps} from 'class-variance-authority';
import {X} from 'lucide-react';
import {cn} from '@/lib/utils';
const ToastProvider = ToastPrimitives.Provider;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
></typeof>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
const ToastProvider = ToastPrimitives && ToastPrimitives.Provider;

const ToastViewport = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Viewport>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Viewport>;
></typeof>(({ className, ...props }, ref) => (;
  <ToastPrimitives&& ToastPrimitives.Viewport
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(


      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",

=======
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const ToastProvider = ToastPrimitives.Provider;
;
const ToastViewport = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Viewport>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Viewport;
    ref={ref}

      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      className
    className={cn(;
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",;
      className;
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
<<<<<<< HEAD
const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
=======
<<<<<<< HEAD
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]'
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className
    )}
    {...props}
  />

<<<<<<< HEAD
=======
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full'
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground'
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground'
        success: 'border bg-background text-foreground'
      }
    }
    defaultVariants: {
      variant: 'default'
    }
  }
);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "border bg-background text-foreground"}},
    defaultVariants: {
      variant: "default"}}
)


<<<<<<< HEAD
=======
  

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
<<<<<<< HEAD
    VariantProps<typeof toastVa</typeof>riants>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>(({ className, variant, ...props }, ref) => {


  


=======
=======
const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {


  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>
  React.ComponentPropsWithoutRef<typeof ToastPr</typeof>imitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
ToastViewport && ToastViewport.displayName = ToastPrimitives && ToastPrimitives.Viewport.displayName;

const toastVariants = cva(;
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',;
  {;
    variants: {;
      variant: {;
        default: 'border bg-background text-foreground',;
        destructive:;
          'destructive group border-destructive bg-destructive text-destructive-foreground',;
        success: 'border bg-background text-foreground',;
      },;
    },;
    defaultVariants: {;
      variant: 'default',;
    },;
  }
);

const Toast = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Root>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Root> &;
    VariantProps<typeof toastVa</typeof>riants>;
>(({ className, variant, ...props }, ref) => {;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======


=======
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}

    />;
  );
});
Toast && Toast.displayName = ToastPrimitives && ToastPrimitives.Root.displayName;
const ToastAction = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Action>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPr</typeof>imitives && imitives.Action>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

<<<<<<< HEAD
  <ToastPrimitives.Action;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React from 'react';
import * as React from 'react';
import * as ToastPrimitives from '@radix - ui / react - toast';
import {cva, type, VariantProps} from 'class - variance - authority';
import {X} from 'lucide-react';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]'
      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD
=======
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    )}
    {...props}
  />;
));




<<<<<<< HEAD
=======
  <ToastPrimitives&& ToastPrimitives.Action
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
;
const toastVariants = cva(;
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",;
  {;
    variants:{;
      variant:{;
        default:"border bg-background text-foreground",;
        destructive:;
          "destructive group border-destructive bg-destructive text-destructive-foreground",;
        success:"border bg-background text-foreground"}},;
    defaultVariants:{;
      variant:"default"}}
);
;
const Toast = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Root>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &;
    VariantProps<typeof toastVariants>;
>(({ className, variant, ...props }, ref) => {;
  return (;
    <ToastPrimitives.Root;
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive'
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />;
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Action>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Action;





>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
));
<<<<<<< HEAD




=======
ToastAction.displayName = ToastPrimitives.Action.displayName;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>
  React.ComponentPropsWithoutRef<type</typeof>of ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
ToastAction && ToastAction.displayName = ToastPrimitives && ToastPrimitives.Action.displayName;

const ToastClose = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Close>,;
  React && React.ComponentPropsWithoutRef<type</typeof>of ToastPrimitives && ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives&& ToastPrimitives.Close
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'
const ToastClose = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Close>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Close;
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'
      className
    )}
    toast-close=''
    {...props}>;
    <X className='h-4 w-4' />;
  </ToastPrimitives && ToastPrimitives.Close>;
));




<<<<<<< HEAD
=======
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'
const ToastClose = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Close>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Close;

    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
ToastAction.displayName = ToastPrimitives.Action.displayName;
;
const ToastClose = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Close>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Close;
    ref={ref}
    className={cn(;
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",;
      className;
    )}





    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=''
    {...props}
  >
    <X className='h-4 w-4' />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>
  React.ComponentPropsWithou</typeof>tRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

ToastClose && ToastClose.displayName = ToastPrimitives && ToastPrimitives.Close.displayName;
const ToastTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Title>,;
  React && React.ComponentPropsWithou</typeof>tRef<typeof ToastPrimitives && ToastPrimitives.Title>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives&& ToastPrimitives.Title
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
import {cn} from '@/lib / utils';
;
const ToastProvider = ToastPrimitives.Provider;
;
const ToastViewport = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Viewport>;
></typeof>(({ class_name, ...props }, ref) => (
  <ToastPrimitives.Viewport;
    ref={ref}
    className={cn (
      'fixed top - 0 z-[100] flex max - h-screen w - full flex - col - reverse p - 4 sm:bottom - 0 sm:right - 0 sm:top - auto sm:flex - col md:max - w-[420px]',
      class_name)}
    {...props}
  />));
ToastViewport.display_name = ToastPrimitives.Viewport.display_name;
;
const toast_variants = cva (
  'group pointer - events - auto relative flex w - full items - center justify - between space - x-4 overflow - hidden rounded - md border p - 6 pr - 8 shadow - lg transition - all data-[swipe = cancel]:translate - x-0 data-[swipe = end]:translate - x-[var (--radix - toast - swipe - end - x)] data-[swipe = move]:translate - x-[var (--radix - toast - swipe - move - x)] data-[swipe = move]:transition - none data-[state = open]:animate - in data-[state = closed]:animate - out data-[swipe = end]:animate - out data-[state = closed]:fade - out - 80 data-[state = closed]:slide - out - to - right - full data-[state = open]:slide - in - from - top - full data-[state = open]:sm:slide - in - from - bottom - full',
  {
    variants: {
      variant: {
        default: 'border bg - background text - foreground',
        destructive:;
          'destructive group border - destructive bg - destructive text - destructive - foreground',
        success: 'border bg - background text - foreground',
      },
    },
    default_variants: {
      variant: 'default',
    },
  }
);
;
const Toast = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Root> &;
    VariantProps < typeof toast_va</typeof > riants>;
>(({ class_name, variant, ...props }, ref) => {
    />);
});
Toast.display_name = ToastPrimitives.Root.display_name;
;
const ToastAction = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef < typeof ToastPr</typeof > imitives.Action>;
>(({ class_name, ...props }, ref) => (
  <ToastPrimitives.Action;
    ref={ref}
    className={cn (
      'inline - flex h - 8 shrink - 0 items - center justify - center rounded - md border bg - transparent px - 3 text - sm font - medium ring - offset - background transition - colors hover:bg - secondary focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none disabled:opacity - 50 group-[.destructive]:border - muted / 40 group-[.destructive]:hover:border - destructive / 30 group-[.destructive]:hover:bg - destructive group-[.destructive]:hover:text - destructive - foreground group-[.destructive]:focus:ring - destructive',
      class_name)}
    {...props}
  />));
ToastAction.display_name = ToastPrimitives.Action.display_name;
;
const ToastClose = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef < type</typeof > of ToastPrimitives.Close>;
>(({ class_name, ...props }, ref) => (
  <ToastPrimitives.Close;
    ref={ref}
    className={cn (
      'absolute right - 2 top - 2 rounded - md p - 1 text - foreground / 50 opacity - 0 transition - opacity hover:text - foreground focus:opacity - 100 focus:outline - none focus:ring - 2 group - hover:opacity - 100 group-[.destructive]:text - red - 300 group-[.destructive]:hover:text - red - 50 group-[.destructive]:focus:ring - red - 400 group-[.destructive]:focus:ring - offset - red - 600',
      class_name)}
    toast - close='';
    {...props}
  >;
    <X className='h - 4 w - 4' />;
  </ToastPrimitives.Close>));
ToastClose.display_name = ToastPrimitives.Close.display_name;
;
const ToastTitle = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Title>,
  React.ComponentPropsWithou</typeof > t_ref < typeof ToastPrimitives.Title>;
>(({ class_name, ...props }, ref) => (
  <ToastPrimitives.Title;
<<<<<<< HEAD

    ref={ref}
    className={cn ('text - sm font - semibold', class_name)}
    {...props}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
const ToastTitle = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Title>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Title;
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>
  React.ComponentPropsWit</typeof>houtRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
const ToastDescription = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Description>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>;
>(({ className, ...props }, ref) => (;

    ref={ref}
    className={cn ('text - sm font - semibold', class_name)}
    {...props}
ToastTitle && ToastTitle.displayName = ToastPrimitives && ToastPrimitives.Title.displayName;
const ToastDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Description>,;
  React && React.ComponentPropsWit</typeof>houtRef<typeof ToastPrimitives && ToastPrimitives.Description>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives&& ToastPrimitives.Description
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  />));
ToastTitle.display_name = ToastPrimitives.Title.display_name;
;
const ToastDescription = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Description>,
  React.ComponentPropsWit</typeof > hout_ref < typeof ToastPrimitives.Description>;
>(({ class_name, ...props }, ref) => (
  <ToastPrimitives.Description;

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    ref={ref}
    className={cn ('text - sm opacity - 90', class_name)}
    {...props}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  />));
ToastDescription.display_name = ToastPrimitives.Description.display_name;
;
type ToastProps = React.ComponentPropsWithoutRef < typeof Toast>;
<<<<<<< HEAD
=======
    toast-close="";
    {...props}
  >;
    <X className="h-4 w-4" />;
  </ToastPrimitives.Close>;
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
;
const ToastTitle = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Title>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Title;
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />;
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
;
const ToastDescription = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Description>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Description;
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />;
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
;
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
// Older React type definitions may not support generics on `ReactElement`.;
// Using the base `ReactElement` type here avoids compilation errors while;
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React.ReactElement;
;
<<<<<<< HEAD
export {
=======
  <ToastPrimitives.Description;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
// Older React type definitions may not support generics on `ReactElement`.
// Using the base `ReactElement` type here avoids compilation errors while
// still representing a valid React element returned by `ToastAction`.
type ToastActionElement = React.ReactElement;
;
export {
  type ToastProps
  type ToastActionElement
  ToastProvider
  ToastViewport
  Toast
  ToastTitle
  ToastDescription
  ToastClose
  ToastAction
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    ref={ref}
    className={cn ('text - sm font - semibold', class_name)}
    {...props}
  />));
ToastTitle.display_name = ToastPrimitives.Title.display_name;
;
const ToastDescription = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Description>,
  React.ComponentPropsWit</typeof > hout_ref < typeof ToastPrimitives.Description>;
>(({ class_name, ...props }, ref) => (
  <ToastPrimitives.Description;
    ref={ref}
    className={cn ('text - sm opacity - 90', class_name)}
    {...props}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ToastAction,
}
;
// Add use_toast hook export;
export /**
 * use_toast - Function description
 */
function use_toast() {

  return {
    // Accept a loosely typed props object to allow custo</typeof > m fields like `description`;
    toast: (props: any) => {

<<<<<<< HEAD
=======
  return {
    // Accept a loosely typed props object to allow custo</typeof > m fields like `description`;
    toast: (props: any) => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
ToastDescription && ToastDescription.displayName = ToastPrimitives && ToastPrimitives.Description.displayName;

type ToastProps = React && React.ComponentPropsWithoutRef<typeof Toast>;

// Older React type definitions may not support generics on `ReactElement`.;
// Using the base `ReactElement` type here avoids compilation errors while;
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React && React.ReactElement;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
  ToastAction,;
};
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
// Older React type definitions may not support generics on `ReactElement`.;
// Using the base `ReactElement` type here avoids compilation errors while;
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React.ReactElement;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export {;
  type ToastProps,;
  type ToastActionElement,;
  ToastProvider,;
  ToastViewport,;
  Toast,;
  ToastTitle,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  ToastDescription;
  ToastClose;
  ToastAction}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

// Add useToast hook export
export function useToast() {
  return {
    // Accept a loosely typed props object to allow custom fields like `description`
    toast: (props: any) => {
      // Implementation of toast functionality
      console.log('Toast:', props);
    }
  }

// Add useToast hook export export function useToast() {
  return {
    // Accept a loosely typed props object to allow custom fields like `description`
    toast: (props: any) => {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      // Implementation of toast functionality;
      console.log('Toast:', props);
    },
  };

}
      // Implementation of toast functionality
      // // // console.log("Toast:", props)
;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  ToastDescription,;
  ToastClose,;
  ToastAction,;
};

// Add useToast hook export;
export function useToast() {;
  return {;
    // Accept a loosely typed props object to allow custo</typeof>m fields like `description`;
    toast: (props: any) => {;
      // Implementation of toast functionality;
      console && console.log('Toast:', props);
    },;
  };
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Implementation of toast functionality;
      console.log ('Toast:', props);
    },
  }
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const ToastDescription = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Description>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Description;


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;


<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export {;
  type ToastProps,;
  type ToastActionElement,;
  ToastProvider,;
  ToastViewport,;
  Toast,;
  ToastTitle,;
  ToastDescription,;
  ToastClose,;
  ToastAction}
      // Implementation of toast functionality;
      console.log('Toast:', props);
    },
  };

}
      // Implementation of toast functionality
      // // // console.log("Toast:", props)
;
// Add useToast hook export;
export function useToast() {;
  return {;
    // Accept a loosely typed props object to allow custom fields like `description`;
    toast: (props: any) => {;
      // Implementation of toast functionality;
      // // // console.log("Toast:", props);
    }}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
