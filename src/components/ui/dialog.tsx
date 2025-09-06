import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from 'lucide-react'

import { cn } from "@/lib/utils"

onst DialogOverlay = React.forwardRef<
ursor/fix-website-loading-errors-and-merge-6662
    <DialogPrimitive&& DialogPrimitive.Content



      <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
        <X className='h-4 w-4' />
        <span className='sr-only'>Close</span>
DialogHeader.displayName = 'DialogHeader'
onst DialogFooter = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
ursor/fix-website-loading-errors-and-merge-6662


DialogFooter.displayName = "DialogFooter"

DialogFooter.displayName = "DialogFooter"



>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
  />);
DialogFooter.display_name = 'DialogFooter';
const DialogTitle = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Title>,
  React.Comp</typeof > onentPropsWithoutRef < typeof DialogPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Title;



    ref={ref}
    className={cn (
      'text - lg font - semibold leading - none tracking - tight',
      class_name)}
    {...props}


  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,;
  DialogTitle,;
  DialogDescription;
};


;
