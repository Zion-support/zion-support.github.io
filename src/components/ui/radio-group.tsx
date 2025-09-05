<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as RadioGroupPrimitive from &quot;@radix-ui/react-radio-group&quot;
import { Circle } from 'lucide-react'

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(_({_className, _...props}, _ref) => {_return (
    <RadioGroupPrimitive.Root
<<<<<<< HEAD
      className={cn(&quot;grid gap-2&quot;, className)}
      {...props}
      ref={ref}
=======
      className={cn("grid gap-2", _className)}
      {_...props}
      ref={_ref}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
      className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;,
        className
=======
      className={_cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    >
      <RadioGroupPrimitive.Indicator className=&quot;flex items-center justify-center&quot;>
        <Circle className=&quot;h-2.5 w-2.5 fill-current text-current&quot; />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export {_RadioGroup, _RadioGroupItem}
