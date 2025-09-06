import * as React from &quot;react&quot;
import * as RadioGroupPrimitive from &quot;@radix-ui/react-radio-group&quot;
import { Circle } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root;
      className={cn (&quot;grid gap - 2&quot;, class_name)}
      {...props}
      ref={ref}
    />);
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;
<<<<<<< HEAD
  React.ElementRef<typeof RadioGroupPrimitive.Item>;
=======
<<<<<<< HEAD
  React.ElementRef<typeof RadioGroupPrimitive.Item>;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
<<<<<<< HEAD
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
=======
<<<<<<< HEAD
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        className
      )}
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
export { RadioGroup, RadioGroupItem }
=======
<<<<<<< HEAD
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
