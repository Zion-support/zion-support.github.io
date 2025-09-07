


import {cn} from '@/lib/utils';'
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;'
import * as React from "react"""
import * as DialogPrimitive from "@radix-ui/react-dialog"""
import { X } from "lucide-react"""
import * as React from "react"""
import * as DialogPrimitive from "@radix-ui/react-dialog"""
import { X } from "lucide-react"""
import { cn } from "@/lib/utils""
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
</typeof>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
</typeof>
></typeof>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay;
const Dialog = DialogPrimitive && DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive && DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive && DialogPrimitive.Portal;

const DialogClose = DialogPrimitive && DialogPrimitive.Close;

const DialogOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Overlay>,;
</DialogPrimitive>
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
const Dialog = DialogPrimitive.Root;
;
const DialogTrigger = DialogPrimitive.Trigger;
;
const DialogPortal = DialogPrimitive.Portal;
;
const DialogClose = DialogPrimitive.Close;
;
const DialogOverlay = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Overlay>,;
</DialogPrimitive>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
</typeof>
  <DialogPrimitive.Overlay;
    ref={ref}
"
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","
      className;
    ref={ref}
    className={cn(
      className;)
    )}
    {...props}
  />;
</DialogPrimitive>
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>
</typeof>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.C</typeof>ontent>
  <DialogPortal>
</DialogPortal>
    <DialogOverlay />
</DialogOverlay>
    <DialogPrimitive.Content;
DialogOverlay && DialogOverlay.displayName = DialogPrimitive && DialogPrimitive.Overlay.displayName;

const DialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Content>,;
</DialogPrimitive>
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.C</typeof>ontent>;
  <DialogPortal>;
</DialogPortal>
    <DialogOverlay />;
</DialogOverlay>
    <DialogPrimitive&& DialogPrimitive.Content;
const DialogContent = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Content>,;
</DialogPrimitive>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
</typeof>
  <DialogPortal>;
</DialogPortal>
    <DialogOverlay />;
</DialogOverlay>
    <DialogPrimitive.Content;


      ref={ref}
      className={cn("
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg''
        className;
      ref={ref}
      className={cn('
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg''
        className;)
      )}
      {...props}>;
</DialogPrimitive>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>'
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">"
</DialogPrimitive>"
        <X className="h-4 w-4" />"
</X>"
        <span className="sr-only">Close</span>""
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">"
</DialogPrimitive>"
        <X className="h-4 w-4" />"
</X>"
        <span className="sr-only">Close</span>"
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
</H>
  <div;
    className={cn(

DialogContent && DialogContent.displayName = DialogPrimitive && DialogPrimitive.Content.displayName,;

const DialogHeader = ({;
  className,;
  ...props;)
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
</div>
  <div;
    className={cn("
      'flex flex-col space-y-1 && 1.5 text-center sm:text-left','
      className;)
    )}
    {...props}
  />;
</div>
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
</HTMLDivElement>)
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
</HTMLDivElement>
  <div;
    className={cn(

'
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2","
      className;
  <div;
    className={cn("
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'''
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2","
      className;)
    )}
    {...props}
  />
</div>
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
</typeof>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
</typeof>
  <DialogPrimitive.Title;
>(({ className, ...props }, ref) => (
</DialogPrimitive>
  <DialogPrimitive.Title;"
DialogFooter && DialogFooter.displayName = 'DialogFooter';'
const DialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Title>,;
</DialogPrimitive>
  React && React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Title>;
</typeof>
  <DialogPrimitive&& DialogPrimitive.Title;
    ref={ref}
    className={cn(
'
DialogFooter.displayName = "DialogFooter";"
;
const DialogTitle = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Title>,;
</DialogPrimitive>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
</typeof>
  <DialogPrimitive.Title;
    ref={ref}
"
      "text-lg font-semibold leading-none tracking-tight","
      className;
    ref={ref}
    className={cn(
      className;
    className={cn(;"
      "text-lg font-semibold leading-none tracking-tight",;"
      className;)
    )}
    {...props}
  />;
</DialogPrimitive>
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>
</typeof>
  React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive.Description>
</typeof>
  <DialogPrimitive.Description;
DialogTitle && DialogTitle.displayName = DialogPrimitive && DialogPrimitive.Title.displayName;

const DialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Description>,;
</DialogPrimitive>
  React && React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Description>;
</typeof>
const DialogOverlay = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.Overlay>;
></typeof>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Overlay;
    ref={ref}
    className={cn ("
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',')
      class_name)}
    {...props}
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
}



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
</DialogPrimitive>
const DialogContent = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.C</typeof > ontent>;
>(({ class_name, children, ...props }, ref) => (
  <DialogPortal>;
</DialogPortal>
    <DialogOverlay />;
</DialogOverlay>
    <DialogPrimitive.Content;
      ref={ref}
      className={cn ('
        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',')
        class_name)}
      {...props}
    >;
</DialogPrimitive>'
      <DialogPrimitive.Close className='absolute right - 4 top - 4 rounded - sm opacity - 70 ring - offset - background transition - opacity hover: opacity - 100 focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:pointer - events - none data-[state = open]:bg - accent data-[state = open]:text - muted - foreground'>;'
</DialogPrimitive>'
        <X className='h - 4 w - 4' />;'
</X>'
        <span className='sr - only'>Close</span>;'
      </DialogPrimitive.Close>;
    </DialogPrimitive.Content>;
  </DialogPortal>));
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col space - y-1.5 text - center sm:text - left',')
      class_name)}
    {...props}
  />);
</div>
}: React</HTMLDivElement>.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',')
      class_name)}
    {...props}
  />);
</div>
const DialogTitle = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Title>,
  React.Comp</typeof > onentPropsWithoutRef < typeof DialogPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Title;
    ref={ref}
    className={cn ('
      'text - lg font - semibold leading - none tracking - tight',')
      class_name)}
    {...props}
  />));
</DialogPrimitive>
const DialogDescription = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Description>,
  React.C</typeof > omponentPropsWithoutRef < typeof DialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Description;
    ref={ref})'
    className={cn ('text - sm text - muted - foreground', class_name)}'
    {...props}

DialogDescription && DialogDescription.displayName = DialogPrimitive && DialogPrimitive.Description.displayName;
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
</DialogPrimitive>
  DialogDescription} const Dialog = DialogPrimitive.Root const DialogTrigger = DialogPrimitive.Trigger const DialogPortal = DialogPrimitive.Portal const DialogClose = DialogPrimitive.Close const DialogOverlay = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Overlay>;
</typeof>
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> > ( ({
</typeof>)
}, ref) => (<DialogPrimitive.Overlay) 
}{
  ...props;
}/>) ) DialogOverlay.displayName = DialogPrimitive.Overlay.displayName const DialogContent = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Content>;
</DialogPrimitive>
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> > ( ({
</typeof>)
}, ref) => (<DialogPortal> <DialogOverlay /> <DialogPrimitive.Content) 
</DialogPortal>
}> </DialogPrimitive.Close> </DialogPrimitive.Content> </DialogPortal>) ) DialogContent.displayName = DialogPrimitive.Content.displayName const DialogHeader = ({)
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
</HTMLDivElement>
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
</HTMLDivElement>'
}/>) DialogFooter.displayName = "DialogFooter" const DialogTitle = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Title>;"
</typeof>
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> > ( ({
</typeof>)
}, ref) => (<DialogPrimitive.Title) 
}{
  ...props;
}/>) ) DialogTitle.displayName = DialogPrimitive.Title.displayName const DialogDescription = React.forwardRef< React.ElementRef<typeof DialogPrimitive.Description>;
</DialogPrimitive>
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> > ( ({
</typeof>)
}, ref) => (<DialogPrimitive.Description />) ) DialogDescription.displayName = DialogPrimitive.Description.displayName export {
</DialogPrimitive>"