<<<<<<< HEAD
import * as SheetPrimitive from &quot;@radix-ui/react-dialog&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;
import { X } from 'lucide-react'
import * as React from &quot;react&quot;

import { cn } from &quot;@/lib/utils&quot;
=======
import * as SheetPrimitive from "@radix-ui/react-dialog"
import * as React from "react"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Sheet = SheetPrimitive.Root

const _SheetTrigger = SheetPrimitive.Trigger

const _SheetClose = SheetPrimitive.Close

const _SheetPortal = SheetPrimitive.Portal

const _SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(_({_className, _...props}, _ref) => (
  <SheetPrimitive.Overlay
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
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

<<<<<<< HEAD
const sheetVariants = cva(
  &quot;fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500&quot;,
  {
    variants: {
      side: {
        top: &quot;inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top&quot;,
        bottom:
          &quot;inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom&quot;,
        left: &quot;inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm&quot;,
        right:
          &quot;inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm&quot;}},
    defaultVariants: {
      side: &quot;right&quot;}}
=======
const _sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {_variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", _bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", _left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", _right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},
    defaultVariants: {_side: "right"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> {}

const _SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
<<<<<<< HEAD
>(({ side = &quot;right&quot;, className, children, ...props }, ref) => (
=======
>(_({_side = "right", _className, _children, _...props}, _ref) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={_ref}
      className={_cn(sheetVariants({ side}), className)}
      {_...props}
    >
<<<<<<< HEAD
      {children}
      <SheetPrimitive.Close className=&quot;absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary&quot;>
        <X className=&quot;h-4 w-4&quot; />
        <span className=&quot;sr-only&quot;>Close</span>
=======
      {_children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const _SheetHeader = (_{_className, _...props}: React.HTMLAttributes<HTMLDivElement>) => (
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
SheetHeader.displayName = &quot;SheetHeader&quot;

const _SheetFooter = (_{_className, _...props}: React.HTMLAttributes<HTMLDivElement>) => (
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
SheetFooter.displayName = &quot;SheetFooter&quot;

const _SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(_({_className, _...props}, _ref) => (
  <SheetPrimitive.Title
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;text-lg font-semibold text-foreground&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("text-lg font-semibold text-foreground", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const _SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(_({_className, _...props}, _ref) => (
  <SheetPrimitive.Description
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
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {_Sheet, _SheetClose, _SheetContent, _SheetDescription, _SheetFooter, _SheetHeader, _SheetOverlay, _SheetPortal, _SheetTitle, _SheetTrigger}

