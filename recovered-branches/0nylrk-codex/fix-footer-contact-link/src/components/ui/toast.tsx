
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import {cva, type, VariantProps} from 'class-variance-authority';
import {X} from 'lucide-react';
import {cn} from '@/lib/utils';
const ToastProvider = ToastPrimitives.Provider;

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"










import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
></typeof>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport


    ref={ref}
    className={cn(

      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]'
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",

      className
    )}
    {...props}
  />

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


const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVa</typeof>riants>
>(({ className, variant, ...props }, ref) => {











    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>
  React.ComponentPropsWithoutRef<typeof ToastPr</typeof>imitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action

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
Toast && Toast.displayName = ToastPrimitives && ToastPrimitives.Root.displayName;

const ToastAction = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Action>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPr</typeof>imitives && imitives.Action>;
>(({ className, ...props }, ref) => (;

  <ToastPrimitives.Action;







>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",

      className
    )}
    {...props}
  />;
));

ToastAction.displayName = ToastPrimitives.Action.displayName;

ToastAction.displayName = ToastPrimitives.Action.displayName;


const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>
  React.ComponentPropsWithoutRef<type</typeof>of ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close

    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'

const ToastClose = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Close>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Close;








>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",

      className
    )}
    toast-close=''
    {...props}>;
    <X className='h-4 w-4' />;
  </ToastPrimitives && ToastPrimitives.Close>;
));

ToastClose.displayName = ToastPrimitives.Close.displayName;

ToastClose.displayName = ToastPrimitives.Close.displayName;


const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>
  React.ComponentPropsWithou</typeof>tRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title


const ToastTitle = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Title>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Title;







>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;








>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>
  React.ComponentPropsWit</typeof>houtRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description





const ToastDescription = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Description>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Description;




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



    ref={ref}
    className={cn ('text - sm opacity - 90', class_name)}
    {...props}

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







  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,



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

ToastDescription && ToastDescription.displayName = ToastPrimitives && ToastPrimitives.Description.displayName;

type ToastProps = React && React.ComponentPropsWithoutRef<typeof Toast>;







// Older React type definitions may not support generics on `ReactElement`.;
// Using the base `ReactElement` type here avoids compilation errors while;
// still representing a valid React element returned by `ToastAction`.;
type ToastActionElement = React && React.ReactElement;

export {;
  type ToastProps,;
  type ToastActionElement,;
  ToastProvider,;
  ToastViewport,;
  Toast,;
  ToastTitle,;

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


}
      // Implementation of toast functionality

      // // // console.log("Toast:", props)
;

  ToastDescription,;
  ToastClose,;
  ToastAction,;
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

// Add useToast hook export;
export function useToast() {;
  return {;
    // Accept a loosely typed props object to allow custo</typeof>m fields like `description`;
    toast: (props: any) => {;
      // Implementation of toast functionality;





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662







