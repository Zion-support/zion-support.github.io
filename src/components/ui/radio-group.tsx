import * as React from &quot;react&quot;
import * as RadioGroupPrimitive from &quot;@radix-ui/react-radio-group&quot;
import { Circle } from "lucide-react";
import {cn} from &quot;@/lib/utils&quot;
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Root className={cn(&quot;grid gap-2&quot;, className)}