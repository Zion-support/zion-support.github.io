import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"


const _RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(_({_className, _...props}, _ref) => {_return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", _className)}
      {_...props}
      ref={_ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const _RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(_({_className, _...props}, _ref) => {_return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={_cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", _className
      )}
      {_...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export {_RadioGroup, _RadioGroupItem}
