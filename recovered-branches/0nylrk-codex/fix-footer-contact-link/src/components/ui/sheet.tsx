import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"


const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(

  {
    variants: {
      side: {


        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top"
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm"
        right:
    defaultVariants: {
      side: "right"}}  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
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
      side: "right"}}    defaultVariants: {
      side: "right"}}
)
interface SheetContentProps;

  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
  VariantProps<typeof sheetVariants> { }
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>
  SheetContentProps      </SheetPrimitive.Close>
    className={cn(const SheetFooter = ({
  className
  ...props

}: React.HTMLAttributes<HTMLDivElement>) => (
  <div;
    className={cn(

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title    ref={ref}

  />));
SheetDescription.display_name = SheetPrimitive.Description.display_name;
export {

