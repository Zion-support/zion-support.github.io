<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { logInfo } from '@/utils/productionLogger'
const ToastProvider = ToastPrimitives.Provider; import { logInfo } from '@/utils/productionLogger'
const ToastProvider = ToastPrimitives.Provider
import { cn } from '@/lib/utils';
import { logInfo } from '@/utils/productionLogger';
const ToastProvider = ToastPrimitives.Provider; import { logInfo } from '@/utils/productionLogger'
import { cn } from '@/lib/utils';
import { logInfo } from '@/utils/productionLogger';
const ToastProvider = ToastPrimitives.Provider; import { logInfo } from '@/utils/productionLogger'
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { logInfo } from '@/utils/productionLogger',
onst ToastProvider = ToastPrimitives.Provider

onst ToastViewport = React.forwardRef<
ursor/fix-website-loading-errors-and-merge-6662
const ToastProvider = ToastPrimitives.Provider

const ToastProvider = ToastPrimitives.Provider

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const ToastViewport = React.forwardRef<
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',      className
    ),}
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',      className
    ),}
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName
const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full'
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground'
        destructive:
          'destructive border-destructive bg-destructive text-destructive-foreground'
        success:
          'border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100'
        warning:
          'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100'
        info: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100'
      }
    }
    defaultVariants: {
      variant: 'default'
    }
  }
)
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref,) => (
  <ToastPrimitives.Viewport
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { logInfo } from '@/utils/productionLogger';

const ToastProvider = ToastPrimitives && ToastPrimitives.Provider;import { logInfo } from '@/utils/productionLogger';
const ToastProvider = ToastPrimitives && ToastPrimitives.Provider;

const ToastViewport = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Viewport>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Viewport>;
>(({ className, ...props }, ref,) => (;
  <ToastPrimitives&& ToastPrimitives.Viewport
import * as React from 'react';
import * as ToastPrimitives from '@radix - ui / react - toast';
import { cva, type VariantProps } from 'class - variance - authority';
import { X } from 'lucide-react';
import { cn } from '@/lib / utils';
import { log_info } from '@/utils / production_logger';
const ToastProvider = ToastPrimitives.Provider; import { log_info } from '@/utils / production_logger';
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Viewport>;
>(({ class_name, ...props }, ref, ) => (
  <ToastPrimitives.Viewport;
    ref={ref}
<<<<<<< HEAD

    className={cn(

      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
=======
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',      className
    ),}
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    {...props}





<<<<<<< HEAD
const toastVariants = cva(

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive border-destructive bg-destructive text-destructive-foreground",
        success: "border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100",
        info: "border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100"}},
    defaultVariants: {
<<<<<<< HEAD
<<<<<<< HEAD
      variant: "default"}}
)

      variant: "default"}}
)

      variant: "default"}}
)

      variant: 'default',
    },
  }
)
      variant: "default"}}
)
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
<<<<<<< HEAD
      />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName
const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref,) => (
  <ToastPrimitives.Action
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  />;
));
ToastViewport && ToastViewport.displayName = ToastPrimitives && ToastPrimitives.Viewport.displayName;

const toastVariants = cva(;
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',;
  {;
    variants: {;
      variant: {;
        default: 'border bg-background text-foreground',;
        destructive:;
          'destructive border-destructive bg-destructive text-destructive-foreground',;
        success:;
          'border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100',;
        warning:;
          'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100',;
        info: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100',;
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
    VariantProps<typeof toastVariants>;
>(({ className, variant, ...props }, ref) => {;
      />;
  );
});
Toast && Toast.displayName = ToastPrimitives && ToastPrimitives.Root.displayName;

const ToastAction = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Action>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Action>;
>(({ className, ...props }, ref,) => (;
  <ToastPrimitives&& ToastPrimitives.Action

  />));
ToastViewport.display_name = ToastPrimitives.Viewport.display_name;
const toast_variants = cva (
  'group pointer - events - auto relative flex w - full items - center justify - between space - x-4 overflow - hidden rounded - md border p - 6 pr - 8 shadow - lg transition - all data-[swipe = cancel]:translate - x-0 data-[swipe = end]:translate - x-[var (--radix - toast - swipe - end - x)] data-[swipe = move]:translate - x-[var (--radix - toast - swipe - move - x)] data-[swipe = move]:transition - none data-[state = open]:animate - in data-[state = closed]:animate - out data-[swipe = end]:animate - out data-[state = closed]:fade - out - 80 data-[state = closed]:slide - out - to - right - full data-[state = open]:slide - in - from - top - full data-[state = open]:sm:slide - in - from - bottom - full',
  {
    variants: {
      variant: {
        default: 'border bg - background text - foreground',
        destructive:;
          'destructive border - destructive bg - destructive text - destructive - foreground',
        success:;
          'border - green - 500 bg - green - 50 text - green - 900 dark:bg - green - 900 / 20 dark:text - green - 100',
        warning:;
          'border - yellow - 500 bg - yellow - 50 text - yellow - 900 dark:bg - yellow - 900 / 20 dark:text - yellow - 100',
        info: 'border - blue - 500 bg - blue - 50 text - blue - 900 dark:bg - blue - 900 / 20 dark:text - blue - 100',
      },
    },
    default_variants: {
      variant: 'default',
    },
  }
);
const Toast = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Root> &;
    VariantProps < typeof toast_variants>;
>(({ class_name, variant, ...props }, ref) => {
      />);
});
Toast.display_name = ToastPrimitives.Root.display_name;
const ToastAction = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Action>;
>(({ class_name, ...props }, ref, ) => (
  <ToastPrimitives.Action;
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',      className
    ),}
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName
const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref,) => (
  <ToastPrimitives.Close
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  />;
));
ToastAction && ToastAction.displayName = ToastPrimitives && ToastPrimitives.Action.displayName;

const ToastClose = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Close>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Close>;
>(({ className, ...props }, ref,) => (;
  <ToastPrimitives&& ToastPrimitives.Close

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'
      className
    )}
<<<<<<< HEAD
<<<<<<< HEAD
    toast-close=''    {...props}
  >
    <X className='h-4 w-4' />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName
const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref,) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName
const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref,) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
type ToastActionElement = React.ReactElement<typeof ToastAction>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  />));
ToastAction.display_name = ToastPrimitives.Action.display_name;
const ToastClose = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Close>;
>(({ class_name, ...props }, ref, ) => (
  <ToastPrimitives.Close;
    ref={ref}
    className={cn (
      'absolute right - 2 top - 2 rounded - md p - 1 text - foreground / 50 opacity - 0 transition - opacity hover:text - foreground focus:opacity - 100 focus:outline - none focus:ring - 2 group - hover:opacity - 100 group-[.destructive]:text - red - 300 group-[.destructive]:hover:text - red - 50 group-[.destructive]:focus:ring - red - 400 group-[.destructive]:focus:ring - offset - red - 600',
      class_name)}
    toast - close=''    {...props}
  >;
    <X className='h - 4 w - 4' />;
  </ToastPrimitives.Close>));
ToastClose.display_name = ToastPrimitives.Close.display_name;
const ToastTitle = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Title>;
>(({ class_name, ...props }, ref, ) => (
  <ToastPrimitives.Title;
    ref={ref}
    className={cn ('text - sm font - semibold', class_name)}    {...props}
  />));
ToastTitle.display_name = ToastPrimitives.Title.display_name;
const ToastDescription = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Description>;
>(({ class_name, ...props }, ref, ) => (
  <ToastPrimitives.Description;

    ref={ref}
    className={cn ('text - sm opacity - 90', class_name)}    {...props}
  />));
ToastDescription.display_name = ToastPrimitives.Description.display_name;
type ToastProps = React.ComponentPropsWithoutRef < typeof Toast>;
type ToastActionElement = React.ReactElement < typeof ToastAction>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
// Add useToast hook export
// export function useToast() {
//   return {
<<<<<<< HEAD
<<<<<<< HEAD
//     }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    toast-close=''    {...props}>;
    <X className='h-4 w-4' />;
  </ToastPrimitives && ToastPrimitives.Close>;
));
ToastClose && ToastClose.displayName = ToastPrimitives && ToastPrimitives.Close.displayName;
<<<<<<< HEAD

const ToastTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Title>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Title>;
>(({ className, ...props }, ref,) => (;
  <ToastPrimitives&& ToastPrimitives.Title

//     },;
//   };
// };
//     },;
//   };
// };

  return (
    <ToastPrimitives.Root
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { logInfo } from '@/utils/productionLogger',;
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Viewport>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Viewport;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    ref={ref}
    className={cn(;
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",;
      className;
    )}
    {...props}
  />;
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(;
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",;
  {;
    variants: {;
      variant: {;
        default: "border bg-background text-foreground",;
        destructive:;
          "destructive border-destructive bg-destructive text-destructive-foreground",;
        success: "border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100",;
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100",;
        info: "border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100"}},;
    defaultVariants: {;
      variant: "default"}}
);
const Toast = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Root>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &;
    VariantProps<typeof toastVariants>;
>(({ className, variant, ...props }, ref) => {;
  return (;
    <ToastPrimitives.Root;
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
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />;
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Close>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Close;
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close="";
    {...props}
  >;
    <X className="h-4 w-4" />;
  </ToastPrimitives.Close>;
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
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
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;
export {;
  type ToastProps,;
  type ToastActionElement,;
  ToastProvider,;
  ToastViewport,;
  Toast,;
  ToastTitle,;
  ToastDescription,;
  ToastClose;
  ToastAction}
;
// Add useToast hook export;
// export function useToast() {;
//   return {;
//     // Accept a loosely typed props object to allow custom fields like `description`;
//     toast: (props: any) => {;
//       // Implementation of toast functionality;
//       logInfo('Toast:', { data: props });
<<<<<<< HEAD
//     };
//   }
// }
//     };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

//   }
// }

//   }
// }
//   }
// }


//     // Accept a loosely typed props object to allow custom fields like `description`;
//     toast: (props: any, ) => {
//       // Implementation of toast functionality;
//       log_info ('Toast:', { data: props });
//     },
//   }
// }
//     };

//   }
<<<<<<< HEAD
// }
=======
// }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
//     // Accept a loosely typed props object to allow custom fields like `description`
//     toast: (props: any,) => {
//       // Implementation of toast functionality
//       logInfo('Toast:', { data: props })

//   }
// }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
