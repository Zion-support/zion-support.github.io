import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
import {cn} from '@/lib/utils';
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

import { cn } from "@/lib/utils"

const Dialog = $2;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref = $2;
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = $2;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref = $2;
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className = $2;
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className = $2;
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = $2;
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className = $2;
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = $2;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref = $2;
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = $2;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
DialogDescription.displayName = $2;
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription}
