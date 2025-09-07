<<<<<<< HEAD
import * as SheetPrimitive from "@radix-ui/react-dialog""
import { cva, type VariantProps } from "class-variance-authority""
import { X } from 'lucide-react''
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
import * as SheetPrimitive from "@radix-ui/react-dialog""
import { cva, type VariantProps } from "class-variance-authority""
import { X } from 'lucide-react''
=======
<<<<<<< HEAD
import * as SheetPrimitive from &quot;@radix-ui/react-dialog&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;
import { X } from 'lucide-react';
import * as React from &quot;react&quot;
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from 'lucide-react'
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from "react"

import { cn } from "@/lib/utils"
=======
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from 'lucide-react'

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const Sheet = SheetPrimitive.Root
onst Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(,
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",",
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from 'lucide-react'
import * as React from "react"

import { cn } from "@/lib/utils"





  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
=======
<<<<<<< HEAD
      &quot;fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0&quot;
ursor/fix-website-loading-errors-and-merge-6662
      &quot;fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0&quot;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
<<<<<<< HEAD
const sheetVariants = cva(,
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500","
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
const sheetVariants = cva(,
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500","
=======
const sheetVariants = cva(
<<<<<<< HEAD
        right:
          &quot;inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm&quot;}}
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  &quot;fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500&quot;
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},
      side: "right"}}
    defaultVariants: {
      side: &quot;right&quot;}}
          &quot;inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom&quot;
        left: &quot;inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm&quot;
        right:
          &quot;inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm&quot;}}
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  {
    variants: {,
      side: {,
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top","
        bottom:
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm","
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},"
    defaultVariants: {,
      side: "right"}}"
=======
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},
    defaultVariants: {
      side: "right"}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
)
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
  VariantProps<typeof sheetVariants> { }
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>
  SheetContentProps
<<<<<<< HEAD
>(({ side = "right", className, children, ...props }, ref) => ("
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
>(({ side = "right", className, children, ...props }, ref) => ("
=======
<<<<<<< HEAD
>(({ side = &quot;right&quot; className, children, ...props }, ref) => (
=======


>(({ side = "right", className, children, ...props }, ref) => (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
import * as SheetPrimitive from &quot;@radix - ui / react - dialog & quot;
import { cva, type VariantProps } from &quot;class - variance - authority & quot;
import { X } from 'lucide-react';
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
    className={cn (,
      &quot;fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0&quot;,
      class_name)}
    {...props}
    ref={ref}
  />));
SheetOverlay.display_name = SheetPrimitive.Overlay.display_name;
const sheet_variants = cva (
  &quot;fixed z - 50 gap - 4 bg - background p - 6 shadow - lg transition ease - in - out data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:duration - 300 data-[state = open]:duration - 500 & quot;,
  {
    variants: {,
      side: {,
        top: &quot;inset - x-0 top - 0 border - b data-[state = closed]:slide - out - to - top data-[state = open]:slide - in - from - top & quot;,
        bottom:;,
          &quot;inset - x-0 bottom - 0 border - t data-[state = closed]:slide - out - to - bottom data-[state = open]:slide - in - from - bottom & quot;,
        left: &quot;inset - y-0 left - 0 h - full w - 3/4 border - r data-[state = closed]:slide - out - to - left data-[state = open]:slide - in - from - left sm:max - w-sm & quot;,
        right:;,
          &quot;inset - y-0 right - 0 h - full w - 3/4  border - l data-[state = closed]:slide - out - to - right data-[state = open]:slide - in - from - right sm:max - w-sm & quot;}},
    default_variants: {,
      side: &quot;right & quot;}}
);
interface SheetContentProps;
  extends React.ComponentPropsWithoutRef < typeof SheetPrimitive.Content>,
  VariantProps < typeof sheet_variants> { }
const SheetContent = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Content>,
  SheetContentProps;
>(({ side = &quot;right & quot;, class_name, children, ...props }, ref) => (
  <SheetPortal>;
    <SheetOverlay />;
    <SheetPrimitive.Content;
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx

  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},
    defaultVariants: {
      side: "right"}}
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> { }

  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
=======
<<<<<<< HEAD
>(({ side = &quot;right&quot; className, children, ...props }, ref) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >;
      {children}
<<<<<<< HEAD
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">",
        <X className="h-4 w-4" />"
        <span className="sr-only">Close</span>"
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">",
        <X className="h-4 w-4" />"
        <span className="sr-only">Close</span>"
=======
<<<<<<< HEAD
<SheetPrimitive.Close className=&quot;absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary&quot;>
        <X className=&quot;h-4 w-4&quot; />
        <span className=&quot;sr-only&quot;>Close</span>
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
<SheetPrimitive.Close className=&quot;absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary&quot;>
        <X className=&quot;h-4 w-4&quot; />
        <span className=&quot;sr-only&quot;>Close</span>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName
const SheetHeader = ({
  className

  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
<<<<<<< HEAD
      "flex flex-col space-y-2 text-center sm:text-left",",
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
      "flex flex-col space-y-2 text-center sm:text-left",",
=======
<<<<<<< HEAD
      &quot;flex flex-col space-y-2 text-center sm:text-left&quot;
ursor/fix-website-loading-errors-and-merge-6662
      &quot;flex flex-col space-y-2 text-center sm:text-left&quot;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    {...props}
  />
)
<<<<<<< HEAD
SheetHeader.displayName = "SheetHeader""
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
SheetHeader.displayName = "SheetHeader""
=======
<<<<<<< HEAD
SheetHeader.displayName = &quot;SheetHeader&quot;
SheetHeader.displayName = &quot;SheetHeader&quot;
SheetHeader.displayName = "SheetHeader"

=======


SheetHeader.displayName = "SheetHeader"



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const SheetFooter = ({
  className
SheetHeader.displayName = "SheetHeader"

  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
<<<<<<< HEAD
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",",
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",",
=======
<<<<<<< HEAD
      &quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2&quot;
ursor/fix-website-loading-errors-and-merge-6662
      &quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2&quot;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    {...props}
  />
)
<<<<<<< HEAD
SheetFooter.displayName = "SheetFooter""
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
SheetFooter.displayName = "SheetFooter""
=======
<<<<<<< HEAD
SheetFooter.displayName = &quot;SheetFooter&quot;
SheetFooter.displayName = &quot;SheetFooter&quot;
SheetFooter.displayName = "SheetFooter"

=======


SheetFooter.displayName = "SheetFooter"



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
<<<<<<< HEAD
<SheetPrimitive.Close className=&quot;absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover:opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - secondary & quot;>;,
        <X className=&quot;h - 4 w - 4&quot; />;
        <span className=&quot;sr - only & quot;>Close</span>;
      </SheetPrimitive.Close>;
    </SheetPrimitive.Content>;
  </SheetPortal>));
SheetContent.display_name = SheetPrimitive.Content.display_name;
const SheetHeader = ({
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn (
      &quot;flex flex - col space - y-2 text - center sm:text - left & quot;,
      class_name)}
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}"
    {...props}
  />);
SheetHeader.display_name = &quot;SheetHeader & quot;
;
const SheetFooter = ({
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
    ref={ref}
    className={cn (&quot;text - lg font - semibold text - foreground & quot;, class_name)}
    {...props}
  React.ElementRef<typeof SheetPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  />));
SheetTitle.display_name = SheetPrimitive.Title.display_name;
const SheetDescription = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef < typeof SheetPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <SheetPrimitive.Description;
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}"
    {...props}
  />));
SheetDescription.display_name = SheetPrimitive.Description.display_name;
export {
SheetFooter.displayName = "SheetFooter"

=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
<SheetPrimitive.Close className=&quot;absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover:opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - secondary & quot;>;,
=======
<<<<<<< HEAD
    className={cn(&quot;text-lg font-semibold text-foreground&quot; className)}
    ref={ref}
    className={cn(&quot;text-lg font-semibold text-foreground&quot; className)}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />;
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef<;
  React.ElementRef<typeof SheetPrimitive.Description>;
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
=======

<SheetPrimitive.Close className=&quot;absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover:opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - secondary & quot;>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
        <X className=&quot;h - 4 w - 4&quot; />;
        <span className=&quot;sr - only & quot;>Close</span>;
      </SheetPrimitive.Close>;
    </SheetPrimitive.Content>;
  </SheetPortal>));
SheetContent.display_name = SheetPrimitive.Content.display_name;
const SheetHeader = ({
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn (
      &quot;flex flex - col space - y-2 text - center sm:text - left & quot;,
      class_name)}
    ref={ref}
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
    className={cn("text-lg font-semibold text-foreground", className)}"
=======

    className={cn("text-lg font-semibold text-foreground", className)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
    {...props}
  />);
SheetHeader.display_name = &quot;SheetHeader & quot;
;
const SheetFooter = ({
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
    ref={ref}
    className={cn (&quot;text - lg font - semibold text - foreground & quot;, class_name)}
    {...props}
  React.ElementRef<typeof SheetPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  />));
SheetTitle.display_name = SheetPrimitive.Title.display_name;
const SheetDescription = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef < typeof SheetPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <SheetPrimitive.Description;
    ref={ref}
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
    className={cn("text-sm text-muted-foreground", className)}"
=======
    className={cn(&quot;text-sm text-muted-foreground&quot; className)}
  React.ElementRef<typeof SheetPrimitive.Description>;
  React.ElementRef<typeof SheetPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <SheetPrimitive.Description;
    ref={ref}
    className={cn(&quot;text-sm text-muted-foreground&quot; className)}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
export {Sheet, SheetClose;
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}
export {Sheet, SheetClose;
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}
export {;

    className={cn("text-sm text-muted-foreground", className)}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
    {...props}
  />));
SheetDescription.display_name = SheetPrimitive.Description.display_name;
export {
SheetFooter.displayName = "SheetFooter"

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />;
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef<;
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
export {;
  Sheet, SheetClose;
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}
<<<<<<< HEAD
;
}))))
;
=======
<<<<<<< HEAD:src-disabled/components/ui/sheet.tsx
;
}))))
;
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/sheet.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
