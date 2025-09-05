<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as ToastPrimitives from &quot;@radix-ui/react-toast&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;
import { X } from &quot;lucide-react&quot;

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _ToastProvider = ToastPrimitives.Provider

const _ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(_({_className, _...props}, _ref) => (
  <ToastPrimitives.Viewport
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

<<<<<<< HEAD
const toastVariants = cva(
  &quot;group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full&quot;,
  {
    variants: {
      variant: {
        default: &quot;border bg-background text-foreground&quot;,
        destructive:
          &quot;destructive group border-destructive bg-destructive text-destructive-foreground&quot;,
        success: &quot;border bg-background text-foreground&quot;}},
    defaultVariants: {
      variant: &quot;default&quot;}}
=======
const _toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {_variants: {
      variant: {
        default: "border bg-background text-foreground", _destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground", _success: "border bg-background text-foreground"}},
    defaultVariants: {_variant: "default"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
)

const _Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(_({_className, _variant, _...props}, _ref) => {_return (
    <ToastPrimitives.Root
      ref={ref}
      className={_cn(toastVariants({ variant}), className)}
      {_...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const _ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(_({_className, _...props}, _ref) => (
  <ToastPrimitives.Action
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const _ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(_({_className, _...props}, _ref) => (
  <ToastPrimitives.Close
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    toast-close=""
    {_...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const _ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(_({_className, _...props}, _ref) => (
  <ToastPrimitives.Title
    ref={_ref}
    className={_cn("text-sm font-semibold", _className)}
    {_...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const _ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(_({_className, _...props}, _ref) => (
  <ToastPrimitives.Description
<<<<<<< HEAD
    ref={ref}
    className={cn("text-sm opacity-90&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("text-sm opacity-90", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

// Older React type definitions may not support generics on `ReactElement`.
// Using the base `ReactElement` type here avoids compilation errors while
// still representing a valid React element returned by `ToastAction`.
type ToastActionElement = React.ReactElement

export {_type ToastProps, _type ToastActionElement, _ToastProvider, _ToastViewport, _Toast, _ToastTitle, _ToastDescription, _ToastClose, _ToastAction}

// Add useToast hook export
export function useToast() {_return {
    // Accept a loosely typed props object to allow custom fields like `description`
<<<<<<< HEAD
    toast: (props: any) => {
      // Implementation of toast functionality
<<<<<<< HEAD
      // // // console.log("Toast:", props)
=======
      // console.log(&quot;Toast:", props)
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }}
=======
    toast: (_props: unknown) => {
      // Implementation of toast functionality}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}