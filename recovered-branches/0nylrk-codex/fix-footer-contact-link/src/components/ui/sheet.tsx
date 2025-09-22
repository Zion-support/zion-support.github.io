<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import * as SheetPrimitive from &quot;@radix-ui/react-dialog&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;
import { X } from &quot;lucide-react&quot;
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as SheetPrimitive from "@radix-ui/react-dialog"
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import * as SheetPrimitive from "@radix-ui/react-dialog"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import * as SheetPrimitive from "@radix-ui/react-dialog"


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
=======

import * as SheetPrimitive from "@radix-ui/react-dialog""
import { cva, type VariantProps } from "class-variance-authority""
import { X } from "lucide-react""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import * as React from "react"
"
import { cn } from "@/lib/utils"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal
=======


;
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <SheetPrimitive.Overlay
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
=======
  <SheetPrimitive.Overlay;
    className={cn(
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

      &quot;fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0&quot;
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======
    className={cn(      className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    className={cn(      className
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
    className={cn(      className
import * as SheetPrimitive from "@radix-ui/react-dialog"""
import { cva, type VariantProps } from "class-variance-authority"""
import { X } from "lucide-react"""
import * as React from "react"""
import { cn } from "@/lib/utils""
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>
</typeof>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
  <SheetPrimitive.Overlay;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    className={cn(

      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

      &quot;fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0&quot;
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","
      className;)
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

&quot;fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500&quot;
  {
    variants: {
      side: {
=======

  {}
    variants: {}
      side: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        top: &quot;inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top&quot;
        bottom:
          &quot;inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom&quot;
        left: &quot;inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm&quot;
        right:
<<<<<<< HEAD
<<<<<<< HEAD
    defaultVariants: {
      side: "right"}}  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
=======
          &quot;inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm&quot;}}
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    defaultVariants: {
      side: "right"}}  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    defaultVariants: {
      side: &quot;right&quot;}}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    defaultVariants: {
      side: "right"}}
<<<<<<< HEAD
=======
    defaultVariants: {"
      side: "right"}}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
)
interface SheetContentProps;
=======
defaultVariants: {
      side: "right"}}
      side: &quot;right&quot;}}    defaultVariants: {
      side: "right"}}
)
interface SheetContentProps

pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
  VariantProps<typeof sheetVariants> { }
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  SheetContentProps
<<<<<<< HEAD
<<<<<<< HEAD
=======
  SheetContentProps
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>(({ side = &quot;right&quot;, className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  SheetContentProps;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import * as SheetPrimitive from &quot;@radix - ui / react - dialog & quot;
import { cva, type VariantProps } from &quot;class - variance - authority & quot;
import { X } from &quot;lucide-react & quot;
import * as React from &quot;react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof SheetPrimitive.Overlay>;
>(({ class_name, ...props }, ref) => (
  <SheetPrimitive.Overlay;
    className={cn (
      &quot;fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0&quot;,
      class_name)}
    {...props}
    ref={ref}
  />));
SheetOverlay.display_name = SheetPrimitive.Overlay.display_name;
const sheet_variants = cva (
  &quot;fixed z - 50 gap - 4 bg - background p - 6 shadow - lg transition ease - in - out data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:duration - 300 data-[state = open]:duration - 500 & quot;,
<<<<<<< HEAD
  {}
    variants: {}
      side: {}
=======
  {
    variants: {
      side: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        top: &quot;inset - x-0 top - 0 border - b data-[state = closed]:slide - out - to - top data-[state = open]:slide - in - from - top & quot;,
        bottom:;
          &quot;inset - x-0 bottom - 0 border - t data-[state = closed]:slide - out - to - bottom data-[state = open]:slide - in - from - bottom & quot;,
        left: &quot;inset - y-0 left - 0 h - full w - 3/4 border - r data-[state = closed]:slide - out - to - left data-[state = open]:slide - in - from - left sm:max - w-sm & quot;,
        right:;
          &quot;inset - y-0 right - 0 h - full w - 3/4  border - l data-[state = closed]:slide - out - to - right data-[state = open]:slide - in - from - right sm:max - w-sm & quot;}},
<<<<<<< HEAD
    default_variants: {}
=======
    default_variants: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      side: &quot;right & quot;}}
);
interface SheetContentProps;
  extends React.ComponentPropsWithoutRef < typeof SheetPrimitive.Content>,
  VariantProps < typeof sheet_variants> { }
const SheetContent = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Content>,
  SheetContentProps;
>(({ side = &quot;right & quot;, class_name, children, ...props }, ref) => (
<<<<<<< HEAD
<<<<<<< HEAD



=======
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";
;
import { cn } from "@/lib/utils";
;
const Sheet = SheetPrimitive.Root;
;
const SheetTrigger = SheetPrimitive.Trigger;
;
const SheetClose = SheetPrimitive.Close;
;
const SheetPortal = SheetPrimitive.Portal;
;
const SheetOverlay = React.forwardRef<;
  React.ElementRef<typeof SheetPrimitive.Overlay>,;
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>;
>(({ className, ...props }, ref) => (;
  <SheetPrimitive.Overlay;
    className={cn(;
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",;
      className;
    )}
    {...props}
    ref={ref}
  />;
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
;
const sheetVariants = cva(;
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",;
  {;
    variants:{;
      side:{;
        top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",;
        bottom:;
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",;
        left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",;
        right:;
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},;
    defaultVariants:{;
      side:"right"}}
);
;
interface SheetContentProps;
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,;
  VariantProps<typeof sheetVariants> { }
;
const SheetContent = React.forwardRef<;
  React.ElementRef<typeof SheetPrimitive.Content>,;
  SheetContentProps;
>(({ side = "right", className, children, ...props }, ref) => (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  <SheetPortal>;
    <SheetOverlay />;
    <SheetPrimitive.Content;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  <SheetPortal>;
    <SheetOverlay />;
    <SheetPrimitive.Content;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      ref={ref}
      className={cn (sheet_variants ({ side }), class_name)}
      {...props}
    >;
      {children}

<<<<<<< HEAD
<<<<<<< HEAD
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD



<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >;
      {children}
<SheetPrimitive.Close className=&quot;absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary&quot;>
        <X className=&quot;h-4 w-4&quot; />
        <span className=&quot;sr-only&quot;>Close</span>
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </SheetPrimitive.Close>
=======
  SheetContentProps      </SheetPrimitive.Close>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  SheetContentProps      </SheetPrimitive.Close>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({}
  className;
  ...props;
=======
      </SheetPrimitive.Close>
  SheetContentProps      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName
const SheetHeader = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(

      "flex flex-col space-y-2 text-center sm:text-left",

"flex flex-col space-y-2 text-center sm:text-left",

      &quot;flex flex-col space-y-2 text-center sm:text-left&quot;
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)

SheetHeader.displayName = "SheetHeader"

SheetHeader.displayName = &quot;SheetHeader&quot;
SheetHeader.displayName = "SheetHeader"
const SheetFooter = ({
    className={cn(const SheetFooter = ({
  className
  ...props
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}: React.HTMLAttributes<HTMLDivElement>) => (
<<<<<<< HEAD
  <div
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

      "flex flex-col space-y-2 text-center sm:text-left",
=======
  <div;
    className={cn(
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD


<<<<<<< HEAD

      &quot;flex flex-col space-y-2 text-center sm:text-left&quot;
      "flex flex-col space-y-2 text-center sm:text-left",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

      &quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2&quot;
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    )}
    {...props}
  />
)
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


SheetHeader.displayName = "SheetHeader"



<<<<<<< HEAD
=======
SheetHeader.displayName = &quot;SheetHeader&quot;
SheetHeader.displayName = "SheetHeader"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const SheetFooter = ({
=======
    className={cn(const SheetFooter = ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    className={cn(const SheetFooter = ({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  className
  ...props
=======



const SheetFooter = ({}
  className;
  ...props;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div;
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD


      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

      &quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2&quot;
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


      className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    )}
    {...props}
  />
)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

SheetFooter.displayName = "SheetFooter"

<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
SheetFooter.displayName = &quot;SheetFooter&quot;
SheetFooter.displayName = "SheetFooter"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
SheetFooter.displayName = &quot;SheetFooter&quot;
SheetFooter.displayName = "SheetFooter"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  <SheetPrimitive.Title
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    ref={ref}
=======
ref={ref}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />;
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  <SheetPrimitive.Title;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  <SheetPrimitive.Title
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
<SheetPrimitive.Close className=&quot;absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover:opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - secondary & quot;>;
        <X className=&quot;h - 4 w - 4&quot; />;
        <span className=&quot;sr - only & quot;>Close</span>;
      </SheetPrimitive.Close>;
    </SheetPrimitive.Content>;
  </SheetPortal>));
SheetContent.display_name = SheetPrimitive.Content.display_name;
<<<<<<< HEAD
const SheetHeader = ({}
=======
const SheetHeader = ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn (
      &quot;flex flex - col space - y-2 text - center sm:text - left & quot;,
      class_name)}
    {...props}
  />);
SheetHeader.display_name = &quot;SheetHeader & quot;
;
<<<<<<< HEAD
const SheetFooter = ({}
=======
const SheetFooter = ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn (
      &quot;flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2 & quot;,
      class_name)}
    {...props}
  />);
SheetFooter.display_name = &quot;SheetFooter & quot;
;
const SheetTitle = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef < typeof SheetPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <SheetPrimitive.Title;
<<<<<<< HEAD

    ref={ref}
<<<<<<< HEAD
=======
  <SheetPrimitive.Title    ref={ref}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  <SheetPrimitive.Title    ref={ref}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    ref={ref}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  <SheetPrimitive.Title    ref={ref}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    className={cn (&quot;text - lg font - semibold text - foreground & quot;, class_name)}
    {...props}
<<<<<<< HEAD

  React.ElementRef<typeof SheetPrimitive.Description>,;

  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
<<<<<<< HEAD
>(({ className, ...props }, ref) => (;    ref={ref}
=======


    ref={ref}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>(({ className, ...props }, ref) => (;
    ref={ref}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>(({ className, ...props }, ref) => (;    ref={ref}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  />));
SheetTitle.display_name = SheetPrimitive.Title.display_name;
const SheetDescription = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef < typeof SheetPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <SheetPrimitive.Description;
    ref={ref}
    className={cn (&quot;text - sm text - muted - foreground & quot;, class_name)}
    {...props}

<<<<<<< HEAD
  />));
SheetDescription.display_name = SheetPrimitive.Description.display_name;
export {

export {;

  Sheet, SheetClose;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;

=======
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;

}
  <SheetPortal>

    <SheetOverlay />

    <SheetPrimitive.Content;
import * as SheetPrimitive from &quot;@radix - ui / react - dialog & quot;
import { cva, type VariantProps } from &quot;class - variance - authority & quot;
import { X } from &quot;lucide-react & quot;
import * as React from &quot;react & quot;
;

<SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">;
        <X className="h-4 w-4" />;
        <span className="sr-only">Close</span>;
import { cn } from &quot;@/lib / utils & quot;
const SheetOverlay = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Overlay>,

  React.ComponentPropsWithoutRef < typeof SheetPrimitive.Overlay>;
>(({ class_name, ...props }, ref) => (
    className={cn (
      &quot;fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0&quot;,)
      class_name)}
  />));

  extends React.ComponentPropsWithoutRef < typeof SheetPrimitive.Content>,
  VariantProps < typeof sheet_variants> { }
const SheetContent = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Content>,
  SheetContentProps;
>(({ side = &quot;right & quot;, class_name, children, ...props }, ref) => (
  <SheetPortal>;

    <SheetOverlay />;

      ref={ref})
      className={cn (sheet_variants ({ side }), class_name)}
    >;
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">"
        <X className="h-4 w-4" />"
        <span className="sr-only">Close</span>"


      className={cn(sheetVariants({ side }), className)}

<SheetPrimitive.Close className=&quot;absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary&quot;>

        <X className=&quot;h-4 w-4&quot; />

        <span className=&quot;sr-only&quot;>Close</span>"
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  
}: React.HTMLAttributes<HTMLDivElement>) => (

  <div;

      "flex flex-col space-y-2 text-center sm:text-left","
</div>


      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2","
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
  <SheetPrimitive.Title;
<SheetPrimitive.Close className=&quot;absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover:opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - secondary & quot;>;

        <X className=&quot;h - 4 w - 4&quot; />;

        <span className=&quot;sr - only & quot;>Close</span>;
      </SheetPrimitive.Close>;
    </SheetPrimitive.Content>;
  ));
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
      &quot;flex flex - col space - y-2 text - center sm:text - left & quot;,)
  />);
      &quot;flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2 & quot;,)
const SheetTitle = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef < typeof SheetPrimitive.Title>;
    className={cn (&quot;text - lg font - semibold text - foreground & quot;, class_name)}


  React.ElementRef<typeof SheetPrimitive.Description>,;



  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
const SheetDescription = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef < typeof SheetPrimitive.Description>;
  <SheetPrimitive.Description;
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
}
; const Sheet = SheetPrimitive.Root const SheetTrigger = SheetPrimitive.Trigger const SheetClose = SheetPrimitive.Close const SheetPortal = SheetPrimitive.Portal const SheetOverlay = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Overlay>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> > ( ({
  className, ...props 
}, ref) => (<SheetPrimitive.Overlay) 
}{
  ...props 
}ref= {
  ref 
}/>) ) SheetOverlay.displayName = SheetPrimitive.Overlay.displayName) interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>;
VariantProps<typeof sheetVariants> {
  
}const SheetContent = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Content>;
SheetContentProps <SheetPortal> <SheetOverlay /> <SheetPrimitive.Content ref= {
  ref 
}className= {
  cn (sheetVariants ({
  side 
}), className) 
}{
  ...props 
}> </SheetPrimitive.Close> </SheetPrimitive.Content> </SheetPortal>) ) SheetContent.displayName = SheetPrimitive.Content.displayName const SheetHeader = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) SheetHeader.displayName = "SheetHeader" const SheetFooter = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) SheetFooter.displayName = "SheetFooter" const SheetTitle = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Title>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> > ( ({
  className, ...props 
}, ref) => (<SheetPrimitive.Title />) ) SheetTitle.displayName = SheetPrimitive.Title.displayName const SheetDescription = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Description>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> > ( ({
  className, ...props 
}, ref) => (<SheetPrimitive.Description />) ) SheetDescription.displayName = SheetPrimitive.Description.displayName export {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger 
}
export {Sheet, SheetClose;
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
<<<<<<< HEAD
;


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">;
        <X className="h-4 w-4" />;
        <span className="sr-only">Close</span>;
      </SheetPrimitive.Close>;
    </SheetPrimitive.Content>;
  </SheetPortal>;
));
SheetContent.displayName = SheetPrimitive.Content.displayName;
;
const SheetHeader = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;
      "flex flex-col space-y-2 text-center sm:text-left",;
      className;
    )}
    {...props}
  />;
);
SheetHeader.displayName = "SheetHeader";
;
const SheetFooter = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",;
      className;
    )}
    {...props}
  />;
);
SheetFooter.displayName = "SheetFooter";
;
const SheetTitle = React.forwardRef<;
  React.ElementRef<typeof SheetPrimitive.Title>,;
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <SheetPrimitive.Title;
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />;
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
;
const SheetDescription = React.forwardRef<;
  React.ElementRef<typeof SheetPrimitive.Description>,;
  React.ElementRef<typeof SheetPrimitive.Description>;
  React.ElementRef<typeof SheetPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <SheetPrimitive.Description;
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
}
; const Sheet = SheetPrimitive.Root const SheetTrigger = SheetPrimitive.Trigger const SheetClose = SheetPrimitive.Close const SheetPortal = SheetPrimitive.Portal const SheetOverlay = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Overlay>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> > ( ({
  className, ...props 
}, ref) => (<SheetPrimitive.Overlay) 
}{
  ...props 
}ref= {
  ref 
}/>) ) SheetOverlay.displayName = SheetPrimitive.Overlay.displayName) interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>;
VariantProps<typeof sheetVariants> {
  
}const SheetContent = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Content>;
SheetContentProps <SheetPortal> <SheetOverlay /> <SheetPrimitive.Content ref= {
  ref 
}className= {
  cn (sheetVariants ({
  side 
}), className) 
}{
  ...props 
}> </SheetPrimitive.Close> </SheetPrimitive.Content> </SheetPortal>) ) SheetContent.displayName = SheetPrimitive.Content.displayName const SheetHeader = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) SheetHeader.displayName = "SheetHeader" const SheetFooter = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) SheetFooter.displayName = "SheetFooter" const SheetTitle = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Title>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> > ( ({
  className, ...props 
}, ref) => (<SheetPrimitive.Title />) ) SheetTitle.displayName = SheetPrimitive.Title.displayName const SheetDescription = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Description>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> > ( ({
  className, ...props 
}, ref) => (<SheetPrimitive.Description />) ) SheetDescription.displayName = SheetPrimitive.Description.displayName export {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger 
}
export {Sheet, SheetClose;
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export {;
  Sheet, SheetClose;
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}
    className={cn (&quot;text - sm text - muted - foreground & quot;, class_name)}
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
