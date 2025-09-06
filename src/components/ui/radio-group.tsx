<<<<<<< HEAD
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;

import { cn } from "@/lib/utils"
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
<<<<<<< HEAD
      className={cn(&quot;grid gap-2&quot; className)}
      className={cn("grid gap-2", className)}

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      {...props}
      ref={ref}
    />;
  );
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
=======
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;
=======
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
<<<<<<< HEAD
<<<<<<< HEAD
=======

RadioGroup.display_name = RadioGroupPrimitive.Root.display_name;
const RadioGroupItem = React.forward_ref<;
  React.ElementRef < typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof RadioGroupPrimitive.Item>;
>(({ class_name, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item;
      ref={ref}
className={cn (
        &quot;aspect - square h - 4 w - 4 rounded - full border border - primary text - primary ring - offset - background focus:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 & quot;,
        class_name)}
      {...props}
    >;
      <RadioGroupPrimitive.Indicator className=&quot;flex items - center justify - center & quot;>;
        <Circle className=&quot;h - 2.5 w - 2.5 fill - current text - current & quot; />;
      </RadioGroupPrimitive.Indicator>;
    </RadioGroupPrimitive.Item>);
});
RadioGroupItem.display_name = RadioGroupPrimitive.Item.display_name;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export { RadioGroup, RadioGroupItem }


export { RadioGroup, RadioGroupItem }
;
<<<<<<< HEAD

export { RadioGroup, RadioGroupItem };

export { RadioGroup, RadioGroupItem }
;
=======
=======
export { RadioGroup, RadioGroupItem };
=======

export { RadioGroup, RadioGroupItem }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
