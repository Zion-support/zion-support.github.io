import * as React from &quot;react&quot;
import * as RadioGroupPrimitive from &quot;@radix-ui/react-radio-group&quot;
import { Circle } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {

import * as React from &quot;react & quot;
import * as RadioGroupPrimitive from &quot;@radix - ui / react - radio - group & quot;
import { Circle } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
;
const RadioGroup = React.forward_ref<;
  React.ElementRef < typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof RadioGroupPrimitive.Root>;
>(({ class_name, ...props }, ref) => {

  return (
    <RadioGroupPrimitive.Root;
      className={cn (&quot;grid gap - 2&quot;, class_name)}
  return (
    <RadioGroupPrimitive.Root
      className={cn(&quot;grid gap-2&quot; className)}
      className={cn("grid gap-2", className)}

      {...props}
      ref={ref}
    />);
});
export { RadioGroup, RadioGroupItem }


export { RadioGroup, RadioGroupItem }
;
