<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

<<<<<<< HEAD

=======
import { cn } from '@/lib/utils'
import { logInfo } from '@/utils/productionLogger'
const ToastProvider = ToastPrimitives.Provider; import { logInfo } from '@/utils/productionLogger'
const ToastProvider = ToastPrimitives.Provider
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { cn } from '@/lib/utils';
import { logInfo } from '@/utils/productionLogger';
const ToastProvider = ToastPrimitives.Provider; import { logInfo } from '@/utils/productionLogger'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { cn } from '@/lib/utils';
import { logInfo } from '@/utils/productionLogger';
const ToastProvider = ToastPrimitives.Provider; import { logInfo } from '@/utils/productionLogger'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { logInfo } from '@/utils/productionLogger',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const ToastProvider = ToastPrimitives.Provider

=======
onst ToastProvider = ToastPrimitives.Provider

onst ToastViewport = React.forwardRef<
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const ToastProvider = ToastPrimitives.Provider

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
const ToastProvider = ToastPrimitives.Provider

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const ToastViewport = React.forwardRef<
>>>>>>>   React.ElementRef<typeof ToastPrimitives.Viewport>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName
=======
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',      className
    ),}
>>>>>>>     {...props}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',      className
    ),}
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
onst toastVariants = cva(
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}

    className={cn(

      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
    {...props}




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

const toastVariants = cva(
>>>>>>>   "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6


const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
      variant: "default"}}
)

=======
      variant: "default"}}
)

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      variant: "default"}}
)

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      variant: 'default',
    },
  }
)
<<<<<<< HEAD
<<<<<<< HEAD
onst Toast = React.forwardRef<
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const Toast = React.forwardRef<
>>>>>>>   React.ElementRef<typeof ToastPrimitives.Root>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      variant: "default"}}
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName
const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref,) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',      className
    ),}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName
const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref,) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'
      className
    )}
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
//     // Accept a loosely typed props object to allow custom fields like `description`
//     toast: (props: any,) => {
//       // Implementation of toast functionality
//       logInfo('Toast:', { data: props })
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
//     }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
//     },;
//   };
// };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
//     },;
//   };
// };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
//     };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
//   }
// }
>>>>>>> 
//     };

//   }
// }

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
//   }
// }
//   }
// }
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
