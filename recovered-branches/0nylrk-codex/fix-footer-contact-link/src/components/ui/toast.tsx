
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import {cva, type, VariantProps} from 'class-variance-authority';
import {X} from 'lucide-react';
import {cn} from '@/lib/utils';
const ToastProvider = ToastPrimitives.Provider;
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
></typeof>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
<<<<<<< HEAD
<<<<<<< HEAD

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
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]'
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

const ToastProvider = ToastPrimitives && ToastPrimitives.Provider;

const ToastViewport = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Viewport>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Viewport>;
></typeof>(({ className, ...props }, ref) => (;
  <ToastPrimitives&& ToastPrimitives.Viewport
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(
<<<<<<< HEAD


      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]'
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  />
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
  

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
<<<<<<< HEAD
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  
=======
=======
const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    VariantProps<typeof toastVa</typeof>riants>
>(({ className, variant, ...props }, ref) => {


  


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
ToastViewport && ToastViewport.displayName = ToastPrimitives && ToastPrimitives.Viewport.displayName;
=======

ToastViewport && ToastViewport.displayName = ToastPrimitives && ToastPrimitives.Viewport.displayName;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const Toast = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Root>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Root> &;
    VariantProps<typeof toastVa</typeof>riants>;
>(({ className, variant, ...props }, ref) => {;

<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}

    />;
  );
});
Toast && Toast.displayName = ToastPrimitives && ToastPrimitives.Root.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ToastAction = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Action>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPr</typeof>imitives && imitives.Action>;
>(({ className, ...props }, ref) => (;

<<<<<<< HEAD
<<<<<<< HEAD

    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive'
      className
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <ToastPrimitives.Action;



<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
<<<<<<< HEAD
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive'
      className
    )}
    {...props}
  />;
));
=======
  />;
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>
  React.ComponentPropsWithoutRef<type</typeof>of ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
ToastAction && ToastAction.displayName = ToastPrimitives && ToastPrimitives.Action.displayName;
=======

ToastAction && ToastAction.displayName = ToastPrimitives && ToastPrimitives.Action.displayName;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ToastClose = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Close>,;
  React && React.ComponentPropsWithoutRef<type</typeof>of ToastPrimitives && ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives&& ToastPrimitives.Close
<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ToastClose = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Close>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Close;

<<<<<<< HEAD
<<<<<<< HEAD
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




=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=''
<<<<<<< HEAD
    {...props}
  >
    <X className='h-4 w-4' />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      className
    )}
    toast-close=''
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {...props}>;
    <X className='h-4 w-4' />;
  </ToastPrimitives && ToastPrimitives.Close>;
));
<<<<<<< HEAD
=======
ToastClose.displayName = ToastPrimitives.Close.displayName;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>
  React.ComponentPropsWithou</typeof>tRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ToastClose && ToastClose.displayName = ToastPrimitives && ToastPrimitives.Close.displayName;
const ToastTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Title>,;
  React && React.ComponentPropsWithou</typeof>tRef<typeof ToastPrimitives && ToastPrimitives.Title>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives&& ToastPrimitives.Title
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
=======

    ref={ref}
    className={cn ('text - sm font - semibold', class_name)}
    {...props}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ToastTitle = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Title>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Title;


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;



<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>
  React.ComponentPropsWit</typeof>houtRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  />));
ToastDescription.display_name = ToastPrimitives.Description.display_name;
;
type ToastProps = React.ComponentPropsWithoutRef < typeof Toast>;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
// Older React type definitions may not support generics on `ReactElement`.;
// Using the base `ReactElement` type here avoids compilation errors while;
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React.ReactElement;
;
<<<<<<< HEAD
  <ToastPrimitives.Description;
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
// Older React type definitions may not support generics on `ReactElement`.
// Using the base `ReactElement` type here avoids compilation errors while
// still representing a valid React element returned by `ToastAction`.
type ToastActionElement = React.ReactElement;
export {
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ToastAction,
}
;
// Add use_toast hook export;
export /**
 * use_toast - Function description
 */
function use_toast() {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return {
    // Accept a loosely typed props object to allow custo</typeof > m fields like `description`;
    toast: (props: any) => {
ToastDescription && ToastDescription.displayName = ToastPrimitives && ToastPrimitives.Description.displayName;
type ToastProps = React && React.ComponentPropsWithoutRef<typeof Toast>;
=======
  return {
    // Accept a loosely typed props object to allow custo</typeof > m fields like `description`;
    toast: (props: any) => {

ToastDescription && ToastDescription.displayName = ToastPrimitives && ToastPrimitives.Description.displayName;

type ToastProps = React && React.ComponentPropsWithoutRef<typeof Toast>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Older React type definitions may not support generics on `ReactElement`.;
// Using the base `ReactElement` type here avoids compilation errors while;
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React && React.ReactElement;
<<<<<<< HEAD
<<<<<<< HEAD
  ToastAction,;
};
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
// Older React type definitions may not support generics on `ReactElement`.;
// Using the base `ReactElement` type here avoids compilation errors while;
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React.ReactElement;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export {;
  type ToastProps,;
  type ToastActionElement,;
  ToastProvider,;
  ToastViewport,;
  Toast,;
  ToastTitle,;
<<<<<<< HEAD
<<<<<<< HEAD
  ToastDescription;
  ToastClose;
  ToastAction}

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ToastDescription,;
  ToastClose,;
  ToastAction,;
};
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Implementation of toast functionality;
      console.log ('Toast:', props);
    },
  }
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ToastDescription = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Description>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Description;


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;


<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
