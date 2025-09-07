


import {cn} from '@/lib/utils';
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
import * as React from "react"""
import * as DialogPrimitive from "@radix-ui/react-dialog"""
import { X } from "lucide-react"""
import { cn } from "@/lib/utils""
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
</typeof>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay;
const Dialog = DialogPrimitive && DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive && DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive && DialogPrimitive.Portal;

const DialogClose = DialogPrimitive && DialogPrimitive.Close;

const DialogOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Overlay>,;

  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Overlay>;
</typeof>)
></typeof>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Overlay;
    ref={ref}
    className={cn(
"
import * as React from "react";""
import * as DialogPrimitive from "@radix-ui/react-dialog";""
import { X } from "lucide-react";"
;"
import { cn } from "@/lib/utils";"
;
const DialogOverlay = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Overlay>,;

  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","
      className;
      className;)
    )}
    {...props}
  />;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.C</typeof>ontent>
  <DialogPortal>

    <DialogOverlay />

    <DialogPrimitive.Content;
DialogOverlay && DialogOverlay.displayName = DialogPrimitive && DialogPrimitive.Overlay.displayName;

const DialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Content>,;

  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.C</typeof>ontent>;
  <DialogPortal>;

    <DialogOverlay />;

    <DialogPrimitive&& DialogPrimitive.Content;
const DialogContent = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Content>,;

  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;




      className={cn("
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg
      {...props}>;

      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">"
        <X className="h-4 w-4" />"
        <span className="sr-only">Close</span>""
        <span className="sr-only">Close</span>"
  
}: React.HTMLAttributes<HTMLDivElement>) => (

  <div;

DialogContent && DialogContent.displayName = DialogPrimitive && DialogPrimitive.Content.displayName,;

const DialogHeader = ({;
  className,;
  ...props;)
}: React && React.HTMLAttributes<HTMLDivElement>) => (;
</div>
      'flex flex-col space-y-1 && 1.5 text-center sm:text-left',
)
}: React.HTMLAttributes<HTMLDivElement>) => (;



      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2","
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2
  />
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
  <DialogPrimitive.Title;
>(({ className, ...props }, ref) => (

  <DialogPrimitive.Title;"
DialogFooter && DialogFooter.displayName = 'DialogFooter';
const DialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Title>,;

  React && React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Title>;
  <DialogPrimitive&& DialogPrimitive.Title;

DialogFooter.displayName = "DialogFooter";"
const DialogTitle = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Title>,;

  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
      "text-lg font-semibold leading-none tracking-tight","
    className={cn(;"
      "text-lg font-semibold leading-none tracking-tight",;"

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>
  React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive.Description>
  <DialogPrimitive.Description;
DialogTitle && DialogTitle.displayName = DialogPrimitive && DialogPrimitive.Title.displayName;

const DialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Description>,;

  React && React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Description>;
const DialogOverlay = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.Overlay>;
></typeof>(({ class_name, ...props }, ref) => (
    className={cn ("
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',')
      class_name)}
export {
  // TODO: Implement
}
  Dialog;
  DialogPortal;
  DialogOverlay;
  DialogClose;
  DialogTrigger;
  DialogContent;
  DialogHeader;
  DialogFooter;
  DialogTitle;
  DialogDescription;



export {;
  Dialog,;
  DialogPortal,;
  DialogOverlay,;
  DialogClose,;
  DialogTrigger,;
  DialogContent,;
  DialogHeader,;
  DialogFooter,;
  DialogTitle,;
  DialogDescription,;
};
  />));

const DialogContent = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.C</typeof > ontent>;
>(({ class_name, children, ...props }, ref) => (


      className={cn (
        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',')
    >;

      <DialogPrimitive.Close className='absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover: opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - accent data-[state = open]:text - muted - foreground'>;

        <X className='h - 4 w - 4' />;

        <span className='sr - only'>Close</span>;
      </DialogPrimitive.Close>;
    </DialogPrimitive.Content>;
  ));
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
      'flex flex - col space - y-1.5 text - center sm:text - left',')
  />);
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',')
const DialogTitle = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Title>,
  React.Comp</typeof > onentPropsWithoutRef < typeof DialogPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
      'text - lg font - semibold leading - none tracking - tight',')

const DialogDescription = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Description>,
  React.C</typeof > omponentPropsWithoutRef < typeof DialogPrimitive.Description>;
    ref={ref})
    className={cn ('text - sm text - muted - foreground', class_name)}

DialogDescription && DialogDescription.displayName = DialogPrimitive && DialogPrimitive.Description.displayName;

  DialogDescription} const Dialog = DialogPrimitive.Root const DialogTrigger = DialogPrimitive.Trigger const DialogPortal = DialogPrimitive.Portal const DialogClose = DialogPrimitive.Close const DialogOverlay = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Overlay>;
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> > ( ({
}, ref) => (<DialogPrimitive.Overlay) 
}{
  ...props;
}/>) ) DialogOverlay.displayName = DialogPrimitive.Overlay.displayName const DialogContent = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Content>;

React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> > ( ({
}, ref) => (<DialogPortal> <DialogOverlay /> <DialogPrimitive.Content) 

}> </DialogPrimitive.Close> </DialogPrimitive.Content> ) ) DialogContent.displayName = DialogPrimitive.Content.displayName const DialogHeader = ({)
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 


}/>) DialogFooter.displayName = "DialogFooter" const DialogTitle = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Title>;"
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> > ( ({
}, ref) => (<DialogPrimitive.Title) 
}/>) ) DialogTitle.displayName = DialogPrimitive.Title.displayName const DialogDescription = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Description>;

React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> > ( ({
}, ref) => (<DialogPrimitive.Description />) ) DialogDescription.displayName = DialogPrimitive.Description.displayName export {