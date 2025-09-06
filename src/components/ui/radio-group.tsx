<<<<<<< HEAD


const RadioGroup = React.forwardRef<
=======
import * as React from &quot;react&quot;
import * as RadioGroupPrimitive from &quot;@radix-ui/react-radio-group&quot;
import { Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;

onst RadioGroup = React.forwardRef<
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
=======
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from 'lucide-react'
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======

import { cn } from "@/lib/utils"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
<<<<<<< HEAD
      className={cn(&quot;grid gap-2&quot; className)}
=======
      className={cn("grid gap-2", className)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {...props}
=======
      className={cn(&quot;grid gap-2&quot; className)}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>       {...props}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      ref={ref}
    />;
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

  React.ElementRef<typeof RadioGroupPrimitive.Item>,;

  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
=======
=======
  React.ElementRef<typeof RadioGroupPrimitive.Item>;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
<<<<<<< HEAD
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
>>>>>>>   React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD

=======
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
>>>>>>>         className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
=======
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className
>>>>>>>       )}
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

export { RadioGroup, RadioGroupItem };

export { RadioGroup, RadioGroupItem }
;

=======
export { RadioGroup, RadioGroupItem }
export { RadioGroup, RadioGroupItem };
export { RadioGroup, RadioGroupItem }
;
>>>>>>> >>>>>>> 
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export { RadioGroup, RadioGroupItem }
=======

export { RadioGroup, RadioGroupItem }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export { RadioGroup, RadioGroupItem };
=======

export { RadioGroup, RadioGroupItem }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
