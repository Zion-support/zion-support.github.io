<<<<<<< HEAD

=======
import * as SheetPrimitive from &quot;@radix-ui/react-dialog&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;
import { X } from 'lucide-react';
import * as React from &quot;react&quot;
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
const Sheet = SheetPrimitive.Root
=======
onst Sheet = SheetPrimitive.Root
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
<<<<<<< HEAD

=======
      &quot;fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
>>>>>>>     )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
const sheetVariants = cva(
<<<<<<< HEAD

=======
        right:
          &quot;inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm&quot;}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
<<<<<<< HEAD

        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},

    defaultVariants: {
=======
>>>>>>>         right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},
>>>>>>>     defaultVariants: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      side: "right"}}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
    defaultVariants: {
      side: &quot;right&quot;}}
>>>>>>> )
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
  VariantProps<typeof sheetVariants> { }
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>
  SheetContentProps
<<<<<<< HEAD

=======
>(({ side = &quot;right&quot; className, children, ...props }, ref) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
    className={cn (
      &quot;fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0&quot;,
      class_name)}
    {...props}
    ref={ref}
  />));
SheetOverlay.display_name = SheetPrimitive.Overlay.display_name;
const sheet_variants = cva (
  &quot;fixed z - 50 gap - 4 bg - background p - 6 shadow - lg transition ease - in - out data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:duration - 300 data-[state = open]:duration - 500 & quot;,
  {
    variants: {
      side: {
        top: &quot;inset - x-0 top - 0 border - b data-[state = closed]:slide - out - to - top data-[state = open]:slide - in - from - top & quot;,
        bottom:;
          &quot;inset - x-0 bottom - 0 border - t data-[state = closed]:slide - out - to - bottom data-[state = open]:slide - in - from - bottom & quot;,
        left: &quot;inset - y-0 left - 0 h - full w - 3/4 border - r data-[state = closed]:slide - out - to - left data-[state = open]:slide - in - from - left sm:max - w-sm & quot;,
        right:;
          &quot;inset - y-0 right - 0 h - full w - 3/4  border - l data-[state = closed]:slide - out - to - right data-[state = open]:slide - in - from - right sm:max - w-sm & quot;}},
    default_variants: {
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      ref={ref}
      className={cn (sheet_variants ({ side }), class_name)}
      {...props}
    >;
      {children}
<<<<<<< HEAD

=======
<SheetPrimitive.Close className=&quot;absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary&quot;>
        <X className=&quot;h-4 w-4&quot; />
        <span className=&quot;sr-only&quot;>Close</span>
>>>>>>>       </SheetPrimitive.Close>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      </SheetPrimitive.Close>
>>>>>>>     </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName
const SheetHeader = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
<<<<<<< HEAD

=======
      &quot;flex flex-col space-y-2 text-center sm:text-left&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
>>>>>>>     )}
    {...props}
  />
)
<<<<<<< HEAD

=======
SheetHeader.displayName = &quot;SheetHeader&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const SheetFooter = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
<<<<<<< HEAD

=======
      &quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
>>>>>>>     )}
    {...props}
  />
)
<<<<<<< HEAD

=======
SheetFooter.displayName = &quot;SheetFooter&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title

<SheetPrimitive.Close className=&quot;absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover:opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - secondary & quot;>;
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
<<<<<<< HEAD

=======
    className={cn(&quot;text-lg font-semibold text-foreground&quot; className)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    {...props}
  />;
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef<;
<<<<<<< HEAD

=======
  React.ElementRef<typeof SheetPrimitive.Description>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
>>>>>>> >(({ className, ...props }, ref) => (;
  />));
SheetTitle.display_name = SheetPrimitive.Title.display_name;
const SheetDescription = React.forward_ref<;
  React.ElementRef < typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef < typeof SheetPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  <SheetPrimitive.Description;
    ref={ref}
<<<<<<< HEAD

=======
    className={cn(&quot;text-sm text-muted-foreground&quot; className)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    {...props}
  />;
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
<<<<<<< HEAD

=======
export {Sheet, SheetClose;
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
