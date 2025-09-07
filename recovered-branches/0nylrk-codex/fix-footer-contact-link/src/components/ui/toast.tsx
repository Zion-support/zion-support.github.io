import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import {cva, type, VariantProps} from 'class-variance-authority';
import {X} from 'lucide-react';
import {cn} from '@/lib/utils';
const ToastProvider = ToastPrimitives.Provider;

<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

=======
<<<<<<< HEAD
=======
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import {cva, type, VariantProps} from 'class-variance-authority';
import {X} from 'lucide-react';
import {cn} from '@/lib/utils';
const ToastProvider = ToastPrimitives.Provider;
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { cn } from "@/lib/utils"
>>>>>>> origin/chore/fix-lint-and-merge

const ToastProvider = ToastPrimitives.Provider

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
></typeof>(({ className, ...props }, ref) => (
<<<<<<< HEAD

  <ToastPrimitives.Viewport;
      className;
    className={cn(;"
=======
<<<<<<< HEAD
=======
  <ToastPrimitives.Viewport
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",;
      className;
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
=======
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]'
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  <ToastPrimitives.Viewport;
      className;
    className={cn(;"
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",;
      className;
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  <ToastPrimitives.Viewport;
    ref={ref}
    className={cn(

))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva("
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {}
    variants: {}
      variant: {"
        default: "border bg-background text-foreground",
        destructive:"
          "destructive group border-destructive bg-destructive text-destructive-foreground","
        success: "border bg-background text-foreground"}},
    defaultVariants: {"
      variant: "default"}}
)

import * as React from "react"""
import * as ToastPrimitives from "@radix-ui/react-toast"""
import { cva, type VariantProps } from "class-variance-authority"""
import { X } from "lucide-react"""
import { cn } from "@/lib/utils""
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>
</typeof>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
></typeof>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport;
const ToastProvider = ToastPrimitives && ToastPrimitives.Provider;

const ToastViewport = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Viewport>,;

  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Viewport>;
</typeof>)
></typeof>(({ className, ...props }, ref) => (;
  <ToastPrimitives&& ToastPrimitives.Viewport;
    ref={ref}
    className={cn(

"
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",""
import * as React from "react";""
import * as ToastPrimitives from "@radix-ui/react-toast";""
import { cva, type VariantProps } from "class-variance-authority";""
import { X } from "lucide-react";"
;"
import { cn } from "@/lib/utils";"
;
const ToastViewport = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Viewport>,;

  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>;
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]","
      className;
    className={cn(;"
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",;"

<<<<<<< HEAD
    className={cn("
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]
      className;)
    )}
    {...props}
  />
pr-12325
=======
<<<<<<< HEAD
    className={cn("
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]
      className;)
    )}
    {...props}
  />
pr-12325
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className
    )}
    {...props}
  />

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
))
<<<<<<< HEAD
ToastViewport.displayName = $2;
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground'
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground'
        success: 'border bg-background text-foreground'
      }
    }
=======
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
>>>>>>> merged-prs-20250907-203621
    defaultVariants: {
      variant: "default"}}
)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
const Toast = $2;
=======

<<<<<<< HEAD
  

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
<<<<<<< HEAD

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
=======
<<<<<<< HEAD

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
    />
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )
})
Toast.displayName = $2;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  
=======
    VariantProps<typeof toastVa</typeof>riants>
>(({ className, variant, ...props }, ref) => {


  


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    />

  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>
  React.ComponentPropsWithoutRef<typeof ToastPr</typeof>imitives.Action>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
  <ToastPrimitives.Action
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <ToastPrimitives.Root;
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}

    />;
  );
});
Toast && Toast.displayName = ToastPrimitives && ToastPrimitives.Root.displayName;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const ToastAction = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Action>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPr</typeof>imitives && imitives.Action>;
>(({ className, ...props }, ref) => (;

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
import * as ToastPrimitives from '@radix - ui / react - toast';
import {cva, type, VariantProps} from 'class - variance - authority';
=======
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Root> &;
    VariantProps<typeof toastVa</typeof>riants>;
    <ToastPrimitives.Root;
      className={cn(toastVariants({ variant }), className)}

    />;

const ToastAction = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Action>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPr</typeof>imitives && imitives.Action>;

import React from 'react';
pr-12325
import * as React from 'react';
import * as ToastPrimitives from '@radix - ui / react - toast';
import {cva, type, VariantProps} from 'class - variance - authority';
import {X} from 'lucide-react';

>>>>>>> origin/chore/fix-lint-and-merge
    ref={ref}
    className={cn('
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]'
      className;
    )}
    {...props}
  />;
));

    )}
    {...props}
  />;
));

<ToastPrimitives&& ToastPrimitives.Action
=======
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive'
      className
  <ToastPrimitives&& ToastPrimitives.Action
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
      variant:"default"}});
=======
      variant:"default"}}
);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Action;

      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>
  React.ComponentPropsWithoutRef<type</typeof>of ToastPrimitives.Close>
>(({ className, ...props }, ref) => (

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

=======
>(({ className, ...props }, ref) => (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  <ToastPrimitives.Action;

<<<<<<< HEAD
import * as ToastPrimitives from '@radix - ui / react - toast';
import {cva, type, VariantProps} from 'class - variance - authority';
=======
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Root> &;
    VariantProps<typeof toastVa</typeof>riants>;
    <ToastPrimitives.Root;
      className={cn(toastVariants({ variant }), className)}

    />;

<<<<<<< HEAD
const ToastAction = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Action>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPr</typeof>imitives && imitives.Action>;

import React from 'react';
pr-12325
import * as React from 'react';
import * as ToastPrimitives from '@radix - ui / react - toast';
import {cva, type, VariantProps} from 'class - variance - authority';
import {X} from 'lucide-react';

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD


    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
>>>>>>> merged-prs-20250907-203621
      className
    )}
    {...props}
  />
<<<<<<< HEAD
))
ToastAction.displayName = $2;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref = $2;
      className
    )}
    toast-close = $2;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))
ToastTitle.displayName = $2;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
=======
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    ref={ref}
    className={cn('
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]'
      className;
    )}
    {...props}
  />;
));

    )}
    {...props}
  />;
));

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
      variant:"default"}});
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

<<<<<<< HEAD
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>
  React.ComponentPropsWithoutRef<type</typeof>of ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD

=======
  <ToastPrimitives.Close
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
ToastAction && ToastAction.displayName = ToastPrimitives && ToastPrimitives.Action.displayName;
const ToastClose = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Close>,;
  React && React.ComponentPropsWithoutRef<type</typeof>of ToastPrimitives && ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives&& ToastPrimitives.Close
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'
=======

    ref={ref}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const ToastClose = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Close>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Close;

<<<<<<< HEAD
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
=======
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
    {...props}>;
    <X className='h-4 w-4' />;
  </ToastPrimitives && ToastPrimitives.Close>;
));




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>
  React.ComponentPropsWithou</typeof>tRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
  <ToastPrimitives.Title
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

ToastClose && ToastClose.displayName = ToastPrimitives && ToastPrimitives.Close.displayName;
const ToastTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Title>,;
  React && React.ComponentPropsWithou</typeof>tRef<typeof ToastPrimitives && ToastPrimitives.Title>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives&& ToastPrimitives.Title
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

      'fixed top - 0 z-[100] flex max - h-screen w - full flex - col - reverse p - 4 sm:bottom - 0 sm:right - 0 sm:top - auto sm:flex - col md:max - w-[420px]',
      class_name)}
    {...props}
  />));
ToastViewport.display_name = ToastPrimitives.Viewport.display_name;
;

      variant: 'default',
    },
  });
;
const Toast = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Root> &;
    VariantProps < typeof toast_va</typeof > riants>;

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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
    ref={ref}
    className={cn ('text - sm font - semibold', class_name)}
    {...props}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const ToastTitle = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Title>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Title;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    ref={ref}

    className={cn('text-sm font-semibold', className)}
    {...props}
  />
));

<<<<<<< HEAD
const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>
  React.ComponentPropsWit</typeof>houtRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>
  React.ComponentPropsWit</typeof>houtRef<typeof ToastPrimitives.Description>
>>>>>>> merged-prs-20250907-203621
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
=======
  <ToastPrimitives.Description
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  />));
ToastTitle.display_name = ToastPrimitives.Title.display_name;
;
const ToastDescription = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Description>,
  React.ComponentPropsWit</typeof > hout_ref < typeof ToastPrimitives.Description>;
>(({ class_name, ...props }, ref) => (
  <ToastPrimitives.Description;

    ref={ref}'
    className={cn ('text - sm opacity - 90', class_name)}
    {...props}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
// Older React type definitions may not support generics on `ReactElement`.;`
// Using the base `ReactElement` type here avoids compilation errors while;`
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React.ReactElement;
;
<<<<<<< HEAD

    ref={ref}'
    className={cn('text-sm opacity-90', className)}
    {...props}
  />

    className={cn ('text - sm font - semibold', class_name)}
    {...props}
  <ToastPrimitives.Title;
import {cn} from '@/lib / utils';
const ToastViewport = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Viewport>,

  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Viewport>;
></typeof>(({ class_name, ...props }, ref) => (
    className={cn (
      'fixed top - 0 z-[100] flex max - h-screen w - full flex - col - reverse p - 4 sm:bottom - 0 sm:right - 0 sm:top - auto sm:flex - col md:max - w-[420px]',')
      class_name)}
  />));

const Toast = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Root> &;
    VariantProps < typeof toast_va</typeof > riants>;
>(({ class_name, variant, ...props }, ref) => {
    />);
});
Toast.display_name = ToastPrimitives.Root.display_name;
const ToastAction = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef < typeof ToastPr</typeof > imitives.Action>;
>(({ class_name, ...props }, ref) => (
      'inline - flex h - 8 shrink - 0 items - center justify - center rounded - md border bg - transparent px - 3 text - sm font - medium ring - offset - background transition - colors hover:bg - secondary focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none disabled:opacity - 50 group-[.destructive]:border - muted / 40 group-[.destructive]:hover:border - destructive / 30 group-[.destructive]:hover:bg - destructive group-[.destructive]:hover:text - destructive - foreground group-[.destructive]:focus:ring - destructive',')

const ToastClose = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef < type</typeof > of ToastPrimitives.Close>;
      'absolute right - 2 top - 2 rounded - md p - 1 text - foreground / 50 opacity - 0 transition - opacity hover:text - foreground focus:opacity - 100 focus:outline - none focus:ring - 2 group - hover:opacity - 100 group-[.destructive]:text - red - 300 group-[.destructive]:hover:text - red - 50 group-[.destructive]:focus:ring - red - 400 group-[.destructive]:focus:ring - offset - red - 600',')
    toast - close=;
  >;

    <X className='h - 4 w - 4' />;

  </ToastPrimitives.Close>));
ToastClose.display_name = ToastPrimitives.Close.display_name;
const ToastTitle = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Title>,
  React.ComponentPropsWithou</typeof > t_ref < typeof ToastPrimitives.Title>;

    ref={ref})
    className={cn ('text - sm font - semibold', class_name)}

const ToastTitle = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Title>,;

  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>;

    className={cn('text-sm font-semibold', className)}

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>
  React.ComponentPropsWit</typeof>houtRef<typeof ToastPrimitives.Description>
  <ToastPrimitives.Description;

const ToastDescription = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Description>,
  React.ComponentPropsWit</typeof > hout_ref < typeof ToastPrimitives.Description>;

    className={cn ('text - sm opacity - 90', class_name)}
    {...props}

=======
  <ToastPrimitives.Description;
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
<<<<<<< HEAD
))
ToastDescription.displayName = $2;
=======
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  />));
ToastTitle.display_name = ToastPrimitives.Title.display_name;
;
const ToastDescription = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Description>,
  React.ComponentPropsWit</typeof > hout_ref < typeof ToastPrimitives.Description>;
>(({ class_name, ...props }, ref) => (
  <ToastPrimitives.Description;

    ref={ref}'
    className={cn ('text - sm opacity - 90', class_name)}
    {...props}

  />));
ToastDescription.display_name = ToastPrimitives.Description.display_name;
;
type ToastProps = React.ComponentPropsWithoutRef < typeof Toast>;

;
// Older React type definitions may not support generics on `ReactElement`.;`
// Using the base `ReactElement` type here avoids compilation errors while;`
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React.ReactElement;
<<<<<<< HEAD
;

    ref={ref}'
    className={cn('text-sm opacity-90', className)}
    {...props}
  />

    className={cn ('text - sm font - semibold', class_name)}
    {...props}
  <ToastPrimitives.Title;
import {cn} from '@/lib / utils';
const ToastViewport = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Viewport>,

  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Viewport>;
></typeof>(({ class_name, ...props }, ref) => (
    className={cn (
      'fixed top - 0 z-[100] flex max - h-screen w - full flex - col - reverse p - 4 sm:bottom - 0 sm:right - 0 sm:top - auto sm:flex - col md:max - w-[420px]',')
      class_name)}
  />));

const Toast = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Root> &;
    VariantProps < typeof toast_va</typeof > riants>;
>(({ class_name, variant, ...props }, ref) => {
    />);
});
Toast.display_name = ToastPrimitives.Root.display_name;
const ToastAction = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef < typeof ToastPr</typeof > imitives.Action>;
>(({ class_name, ...props }, ref) => (
      'inline - flex h - 8 shrink - 0 items - center justify - center rounded - md border bg - transparent px - 3 text - sm font - medium ring - offset - background transition - colors hover:bg - secondary focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none disabled:opacity - 50 group-[.destructive]:border - muted / 40 group-[.destructive]:hover:border - destructive / 30 group-[.destructive]:hover:bg - destructive group-[.destructive]:hover:text - destructive - foreground group-[.destructive]:focus:ring - destructive',')

const ToastClose = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef < type</typeof > of ToastPrimitives.Close>;
      'absolute right - 2 top - 2 rounded - md p - 1 text - foreground / 50 opacity - 0 transition - opacity hover:text - foreground focus:opacity - 100 focus:outline - none focus:ring - 2 group - hover:opacity - 100 group-[.destructive]:text - red - 300 group-[.destructive]:hover:text - red - 50 group-[.destructive]:focus:ring - red - 400 group-[.destructive]:focus:ring - offset - red - 600',')
    toast - close=;
  >;

    <X className='h - 4 w - 4' />;

  </ToastPrimitives.Close>));
ToastClose.display_name = ToastPrimitives.Close.display_name;
const ToastTitle = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Title>,
  React.ComponentPropsWithou</typeof > t_ref < typeof ToastPrimitives.Title>;

    ref={ref})
    className={cn ('text - sm font - semibold', class_name)}

const ToastTitle = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Title>,;

  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>;

    className={cn('text-sm font-semibold', className)}

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>
  React.ComponentPropsWit</typeof>houtRef<typeof ToastPrimitives.Description>
  <ToastPrimitives.Description;

const ToastDescription = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Description>,
  React.ComponentPropsWit</typeof > hout_ref < typeof ToastPrimitives.Description>;

    className={cn ('text - sm opacity - 90', class_name)}
    {...props}

  type ToastProps,
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  type ToastProps,
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
  ToastAction,
}
;
// Add use_toast hook export;
export /**
 * use_toast - Function description
 */
function use_toast() {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return {
    // Accept a loosely typed props object to allow custo</typeof > m fields like `description`;
    toast: (props: any) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
ToastDescription && ToastDescription.displayName = ToastPrimitives && ToastPrimitives.Description.displayName;
type ToastProps = React && React.ComponentPropsWithoutRef<typeof Toast>;
// Older React type definitions may not support generics on `ReactElement`.;
// Using the base `ReactElement` type here avoids compilation errors while;
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React && React.ReactElement;
<<<<<<< HEAD

=======
<<<<<<< HEAD
  ToastAction,;
};
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
// Older React type definitions may not support generics on `ReactElement`.;
// Using the base `ReactElement` type here avoids compilation errors while;
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React.ReactElement;
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
ToastAction,;
};
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
// Older React type definitions may not support generics on `ReactElement`.;
// Using the base `ReactElement` type here avoids compilation errors while;
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React.ReactElement;
export {;
  type ToastProps,;
  type ToastActionElement,;
  ToastProvider,;
  ToastViewport,;
  Toast,;
  ToastTitle,;

  ToastDescription;
  ToastClose;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

      // Implementation of toast functionality;

      console.log('Toast:', props);
    },
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ToastDescription,;

  ToastClose,;
  ToastAction,
};

// Add useToast hook export;

      console.log ('Toast:', props);
    },
  }
;

const ToastDescription = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Description>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Description;

    ref={ref}

    ref={ref}

    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export {;
  type ToastProps,;
  type ToastActionElement,;
  ToastProvider,;
  ToastViewport,;
  Toast,;
  ToastTitle,;
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
  ToastDescription,;
  ToastClose,;
<<<<<<< HEAD
  ToastAction}
      // Implementation of toast functionality;
      console.log('Toast:', props);
    },
  };

}
      // Implementation of toast functionality
      // // // console.log("Toast:", props)
;
=======
  ToastAction,;
};
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Add useToast hook export;
export function useToast() {;
  return {;
    // Accept a loosely typed props object to allow custom fields like `description`;
    toast: (props: any) => {;
      // Implementation of toast functionality;
<<<<<<< HEAD
      // // // console.log("Toast:", props);
    }}
}
=======
      console && console.log('Toast:', props);
    },;
  };
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Implementation of toast functionality;
      console.log ('Toast:', props);
    },
  }
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const ToastDescription = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Description>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Description;


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;


<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
