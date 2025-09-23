import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

type ToggleGroupContextProps = VariantProps<typeof toggleVariants>

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
  size: "default",
<<<<<<< HEAD
  variant: "default",
})
=======
  variant: "default"})
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
<<<<<<< HEAD
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
=======
>(({ classNamevariantsizechildren...props }ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1"className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variantsize }}>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
<<<<<<< HEAD
>(({ className, children, variant, size, ...props }, ref) => {
=======
>(({ classNamechildrenvariantsize...props }ref) => {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const context = React.useContext(
    ToggleGroupContext
  ) as ToggleGroupContextProps

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
<<<<<<< HEAD
          size: context.size || size,
        }),
=======
          size: context.size || size}),
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

<<<<<<< HEAD
export { ToggleGroup, ToggleGroupItem }
=======
export { ToggleGroupItem }
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
