import React, { createContext; useContext; useState; ReactNode } from "react";

interface DialogContextType {
isOpen: boolean;,
setIsOpen: (open: boolean) => void;,
};
const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function Dialog({ ;
children;
open;
onOpenChange;
}: {
children: ReactNode;
open?: boolean;
onOpenChange?: (open: boolean) => void;,
}) {
const [internalOpen; setInternalOpen] = useState(false);
const isControlled = open !== undefined;
const isOpen = isControlled ? open : internalOpen;

const setIsOpen: any = (newOpen: boolean) => {
if (!isControlled) {;
setInternalOpen(newOpen);
}
if (onOpenChange) {
onOpenChange(newOpen);
}
};

return (
<DialogContext.Provider value={{ isOpen; setIsOpen }}>;
<div className="relative">;
import React from "react";
import { cn } from "@/lib/utils";

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {;
open?: boolean;
onOpenChange?: (open: boolean) => void;,
}

export interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {;
children: React.ReactNode;,
}

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {;
children: React.ReactNode;,
}

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {;
children: React.ReactNode;,
}

export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {;
children: React.ReactNode;,
}

export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {;
children: React.ReactNode;,
}

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {;
children: React.ReactNode;,
}

const DialogContext = React.createContext<{;
open: boolean;,
setOpen: React.Dispatch<React.SetStateAction<boolean>>;,
} | undefined>(undefined);

export const Dialog: React.FC<DialogProps> = ({;
open = false;
onOpenChange;
children;
className,
...props;
}) => {
const [isOpen; setIsOpen] = React.useState(open);

React.useEffect(() => {
setIsOpen(open);
}, [open]);

const handleOpenChange: any = (newOpen: boolean) => {;
setIsOpen(newOpen);
onOpenChange?.(newOpen);
};

return (
<DialogContext.Provider value={{ open: isOpen; setOpen: (value: boolean | ((prev: boolean) => boolean)) => {
if (typeof value === "function") {
setIsOpen(value);
} else {
setIsOpen(value);
}
}}}>;
<div className={cn("relative", className)} {...props}>;
{children}
</div>;
</DialogContext.Provider>;
);
}

export function DialogTrigger({ children; asChild = false }: { children: ReactNode; asChild?: boolean }) {
const context = useContext(DialogContext);
if (!context) throw new Error("DialogTrigger must be used within Dialog");

if (asChild) {
return (
<div onClick={() => context.setIsOpen(true)}>;
{children}
</div>;
);
}

return (
<div onClick={() => context.setIsOpen(true)}>;
{children}
</div>;
);
}

export function DialogContent({ children; className = "" }: { children: ReactNode; className?: string }) {
const context = useContext(DialogContext);
if (!context) throw new Error("DialogContent must be used within Dialog");

if (!context.isOpen) return null;

return (
<div className="fixed inset-0 z-50 flex items-center justify-center">;
<div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => context.setIsOpen(false)} />;
<div className={`relative bg-white rounded-lg p-6 max-w-md w-full mx-4 ${className}`}>;
};

export const DialogTrigger: React.FC<DialogTriggerProps> = ({;
children;
className,
...props;
}) => {
const context = React.useContext(DialogContext);
if (!context) {
throw new Error("DialogTrigger must be used within Dialog");
}

const { setOpen } = context;

return (
<button;
className={cn("inline-flex items-center justify-center", className)}
onClick={() => setOpen(true)}
{...props}
>;
{children}
</button>;
);
};

export const DialogContent: React.FC<DialogContentProps> = ({;
children;
className,
...props;
}) => {
const context = React.useContext(DialogContext);
if (!context) {
throw new Error("DialogContent must be used within Dialog");
}

const { open; setOpen } = context;

if (!open) return null;

return (
<div className="fixed inset-0 z-50 flex items-center justify-center">;
<div;
className="fixed inset-0 bg-black/50"
onClick={() => setOpen(false)}
/>;
<div;
className={cn(
"relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4",
className;
)}
{...props}
>;
{children}
</div>;
</div>;
);
}

export function DialogHeader({ children; className = "" }: { children: ReactNode; className?: string }) {
return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function DialogTitle({ children; className = "" }: { children: ReactNode; className?: string }) {
return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

export function DialogDescription({ children; className = "" }: { children: ReactNode; className?: string }) {
return <p className={`text-gray-600 mt-2 ${className}`}>{children}</p>;
}

export function DialogFooter({ children; className = "" }: { children: ReactNode; className?: string }) {
return <div className={`flex justify-end gap-2 mt-6 ${className}`}>{children}</div>;
}
};

export const DialogHeader: React.FC<DialogHeaderProps> = ({;
children;
className,
...props;
}) => {
return (
<div className={cn("mb-4", className)} {...props}>;
{children}
</div>;
);
};

export const DialogTitle: React.FC<DialogTitleProps> = ({;
children;
className,
...props;
}) => {
return (
<h2 className={cn("text-lg font-semibold", className)} {...props}>;
{children}
</h2>;
);
};

export const DialogDescription: React.FC<DialogDescriptionProps> = ({;
children;
className,
...props;
}) => {
return (
<p className={cn("text-sm text-gray-600", className)} {...props}>;
{children}
</p>;
);
};

export const DialogFooter: React.FC<DialogFooterProps> = ({;
children;
className,
...props;
}) => {
return (
<div className={cn("flex justify-end gap-2 mt-4", className)} {...props}>;
{children}
</div>;
);
};
<//div><///div>))
import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
const Dialog = DialogPrimitive.Root,
const DialogTrigger = DialogPrimitive.Trigger,
const DialogPortal = DialogPrimitive.Portal,
const DialogClose = DialogPrimitive.Close,
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay,
ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName,
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.C</typeof>ontent>
>(({ className children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content,
ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg'
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
        <X className='h-4 w-4' />
        <span className='sr-only'>Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName,
const DialogHeader = ({
  className
  ...props,
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
  <div,
className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left'
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'
const DialogFooter = ({
  className
  ...props,
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
  <div,
className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>
  React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title,
ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight'
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName,
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>
  React.C</typeof>omponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description,
ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName,
export {
  Dialog,
DialogPortal
  DialogOverlay,
DialogClose
  DialogTrigger,
DialogContent
  DialogHeader,
DialogFooter
  DialogTitle,
DialogDescription,
}
