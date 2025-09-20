import * as SheetPrimitive from &quot;@radix-ui/react-dialog&quot;
import {cva,, type,, VariantProps} from &quot;class-variance-authority&quot;
import { X } from "lucide-react";
import * as React from &quot;react&quot;
import {cn} from &quot;@/lib/utils&quot;
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>;
>(({ className, ...props }, ref) => (;
  <SheetPrimitive.Overlay className={cn(;
      &quot;fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0&quot;
const sheetVariants = cva(;
  &quot;fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500&quot;
          &quot;inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom&quot;
        left: &quot;inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm: max-w-sm&quot;
right:
          &quot;inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm: max-w-sm&quot;
}},
const SheetContent = React.forwardRef<;
  React.ElementRef<typeof SheetPrimitive.Content>;
  SheetContentProps;
>(({ side = &quot;right&quot;, className children, ...props }, ref) => (
const SheetHeader = ({className
  ...props}: React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
className={cn(;
      &quot;flex flex-col space-y-2 text-center sm:text-left&quot;
SheetHeader.displayName = &quot;SheetHeader&quot;
const SheetFooter = ({className
  ...props}: React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
className={cn(;
      &quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2&quot;
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <SheetPrimitive.Title ref={ref};
    className={cn(&quot;text-lg font-semibold text-foreground&quot;, className)}