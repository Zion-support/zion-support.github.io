<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as ToggleGroupPrimitive from &quot;@radix-ui/react-toggle-group&quot;
import { type VariantProps } from &quot;class-variance-authority&quot;

import { cn } from &quot;@/lib/utils&quot;
import { toggleVariants } from &quot;@/components/ui/toggle&quot;

type ToggleGroupContextProps = VariantProps<typeof toggleVariants>

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
  size: &quot;default&quot;,
  variant: &quot;default&quot;})
=======
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"


type ToggleGroupContextProps = VariantProps<typeof toggleVariants>

const _ToggleGroupContext = React.createContext<ToggleGroupContextProps>({_size: "default", _variant: "default"})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(_({_className, _variant, _size, _children, _...props}, _ref) => (
  <ToggleGroupPrimitive.Root
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;flex items-center justify-center gap-1&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("flex items-center justify-center gap-1", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  >
    <ToggleGroupContext.Provider value={_{ variant, _size}}>
      {_children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const _ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(_({_className, _children, _variant, _size, _...props}, _ref) => {_const _context = React.useContext(
    ToggleGroupContext
  ) as ToggleGroupContextProps

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={_cn(
        toggleVariants({
          variant: context.variant || variant, _size: context.size || size}),
        className
      )}
      {_...props}
    >
      {_children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export {_ToggleGroup, _ToggleGroupItem}
