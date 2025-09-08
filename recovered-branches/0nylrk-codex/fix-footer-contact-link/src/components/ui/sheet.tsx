import * as SheetPrimitive from &quot;@radix-ui/react-dialog&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;
import { X } from &quot;lucide-react&quot;
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import * as React from "react"
"
import { cn } from "@/lib/utils"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (


<<<<<<< HEAD

=======
      className

    className={cn(

      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",


      &quot;fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0&quot;
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className

    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(

<<<<<<< HEAD


=======

&quot;fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500&quot;
  {
    variants: {
      side: {


        top: &quot;inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top&quot;
        bottom:
          &quot;inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom&quot;
        left: &quot;inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm&quot;
        right:


>>>>>>> origin/cursor/delete-old-data-records-6bba
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


    defaultVariants: {
      side: &quot;right&quot;}}

=======
    defaultVariants: {
      side: "right"}}

    defaultVariants: {
      side: "right"}}

>>>>>>> origin/cursor/delete-old-data-records-6bba
)
interface SheetContentProps;

  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
  VariantProps<typeof sheetVariants> { }
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>

<<<<<<< HEAD
  SheetContentProps

=======

>(({ side = &quot;right&quot;, className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

        top: &quot;inset - x-0 top - 0 border - b data-[state = closed]:slide - out - to - top data-[state = open]:slide - in - from - top & quot;,
        bottom:;
          &quot;inset - x-0 bottom - 0 border - t data-[state = closed]:slide - out - to - bottom data-[state = open]:slide - in - from - bottom & quot;,
        left: &quot;inset - y-0 left - 0 h - full w - 3/4 border - r data-[state = closed]:slide - out - to - left data-[state = open]:slide - in - from - left sm:max - w-sm & quot;,
        right:;
          &quot;inset - y-0 right - 0 h - full w - 3/4  border - l data-[state = closed]:slide - out - to - right data-[state = open]:slide - in - from - right sm:max - w-sm & quot;}},

      side: &quot;right & quot;}});
interface SheetContentProps;
  extends React.ComponentPropsWithoutRef < typeof SheetPrimitive.Content>,
  VariantProps < typeof sheet_variants> { }
const SheetContent = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Content>,
  SheetContentProps;
>(({ side = &quot;right & quot;, class_name, children, ...props }, ref) => (

<<<<<<< HEAD
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
  <SheetPortal>;
    <SheetOverlay />;
    <SheetPrimitive.Content;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ref={ref}
      className={cn (sheet_variants ({ side }), class_name)}
      {...props}
    >;
      {children}

<<<<<<< HEAD


      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>




      </SheetPrimitive.Close>

    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({}
  className;
  ...props;

}: React.HTMLAttributes<HTMLDivElement>) => (

  <div
    className={cn(



=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
      className

    )}
    {...props}
  />
)


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const SheetFooter = ({

  className
  ...props

}: React.HTMLAttributes<HTMLDivElement>) => (
  <div;
    className={cn(


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className

    )}
    {...props}
  />
)

SheetFooter.displayName = "SheetFooter"


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (

<<<<<<< HEAD
  <SheetPrimitive.Title

=======

    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />;
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef<;


>>>>>>> origin/cursor/delete-old-data-records-6bba
<SheetPrimitive.Close className=&quot;absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover:opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - secondary & quot;>;
        <X className=&quot;h - 4 w - 4&quot; />;
        <span className=&quot;sr - only & quot;>Close</span>;
      </SheetPrimitive.Close>;
    </SheetPrimitive.Content>;
  </SheetPortal>));
SheetContent.display_name = SheetPrimitive.Content.display_name;

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
    className={cn (&quot;text - lg font - semibold text - foreground & quot;, class_name)}
    {...props}
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
=======


    className={cn (&quot;text - lg font - semibold text - foreground & quot;, class_name)}
    {...props}

>>>>>>> origin/cursor/delete-old-data-records-6bba

;
<<<<<<< HEAD
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
export {;
  Sheet, SheetClose;

  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}

;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
