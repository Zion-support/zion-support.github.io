<<<<<<< HEAD
=======
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from 'lucide-react'


const RadioGroup = React.forwardRef<
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from &quot;react&quot;
import * as RadioGroupPrimitive from &quot;@radix-ui/react-radio-group&quot;
import { Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;

onst RadioGroup = React.forwardRef<

      className={cn("grid gap-2", className)}

      {...props}
=======
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(&quot;grid gap-2&quot; className)}
      className={cn("grid gap-2", className)}
      {...props}
      className={cn(&quot;grid gap-2&quot; className)}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      ref={ref}
    />);
});
<<<<<<< HEAD
=======
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;

      className={cn("grid gap-2", className)}

      {...props}
      ref={ref}
    />);
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



  React.ElementRef<typeof RadioGroupPrimitive.Item>,;

<<<<<<< HEAD
=======
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
  React.ElementRef<typeof RadioGroupPrimitive.Item>;
  React.ElementRef<typeof RadioGroupPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
<<<<<<< HEAD


        className
      )}
=======
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
ursor/fix-website-loading-errors-and-merge-6662
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

        className
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {...props}
    >
      <RadioGroupPrimitive.Indicator className=&quot;flex items-center justify-center&quot;>
        <Circle className=&quot;h-2.5 w-2.5 fill-current text-current&quot; />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
<<<<<<< HEAD
=======
export { RadioGroup, RadioGroupItem }
export { RadioGroup, RadioGroupItem };
export { RadioGroup, RadioGroupItem }
;
export { RadioGroup, RadioGroupItem }

export { RadioGroup, RadioGroupItem }
;
export { RadioGroup, RadioGroupItem };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export { RadioGroup, RadioGroupItem }
;
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

export { RadioGroup, RadioGroupItem }
<<<<<<< HEAD
=======


export { RadioGroup, RadioGroupItem }
;

export { RadioGroup, RadioGroupItem };

export { RadioGroup, RadioGroupItem }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
