
&quot;use client&quot;

<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as CheckboxPrimitive from &quot;@radix-ui/react-checkbox&quot;
import { Check } from 'lucide-react'

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(_({_className, _...props}, _ref) => (
  <CheckboxPrimitive.Root
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    <CheckboxPrimitive.Indicator
<<<<<<< HEAD
      className={cn(&quot;flex items-center justify-center text-current&quot;)}
=======
      className={_cn("flex items-center justify-center text-current")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    >
      <Check className=&quot;h-3 w-3&quot; />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export {_Checkbox}
