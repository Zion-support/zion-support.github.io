<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import * as React from &quot;react&quot;
import * as RadioGroupPrimitive from &quot;@radix-ui/react-radio-group&quot;
import { Circle } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
=======

import * as React from "react""
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Circle } from "lucide-react"
"
import { cn } from "@/lib/utils"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
<<<<<<< HEAD
<<<<<<< HEAD
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import * as React from &quot;react & quot;
import * as RadioGroupPrimitive from &quot;@radix - ui / react - radio - group & quot;
import { Circle } from &quot;lucide-react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
const RadioGroup = React.forward_ref<;
  React.ElementRef < typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof RadioGroupPrimitive.Root>;
<<<<<<< HEAD
>(({ class_name, ...props }, ref) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>(({ class_name, ...props }, ref) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <RadioGroupPrimitive.Root;
      className={cn (&quot;grid gap - 2&quot;, class_name)}



      {...props}
      ref={ref}
    />);
});

<<<<<<< HEAD

<<<<<<< HEAD
=======
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />;
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;
=======
  React.ElementRef<typeof RadioGroupPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;,
      className={cn("
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        className
=======
>(({ className, ...props }, ref) => {className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;,
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>(({ className, ...props }, ref) => {className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;,
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
=======

        className;
      )}
      {...props}
    >

"
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">"
        <Circle className="h-2.5 w-2.5 fill-current text-current" />

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
<<<<<<< HEAD
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export { RadioGroup, RadioGroupItem }


export { RadioGroup, RadioGroupItem }
;
export { RadioGroup, RadioGroupItem };

export { RadioGroup, RadioGroupItem }
;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
RadioGroup.display_name = RadioGroupPrimitive.Root.display_name;
const RadioGroupItem = React.forward_ref<;
  React.ElementRef < typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof RadioGroupPrimitive.Item>;
>(({ class_name, ...props }, ref) => {}
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

<<<<<<< HEAD
export { RadioGroup, RadioGroupItem }
;
=======

export { RadioGroup, RadioGroupItem }



export { RadioGroup, RadioGroupItem };
;


;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export { RadioGroup, RadioGroupItem }



export { RadioGroup, RadioGroupItem };
;
export { RadioGroup, RadioGroupItem };

export { RadioGroup, RadioGroupItem };
;
;
export { RadioGroup, RadioGroupItem }
<<<<<<< HEAD
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
;
const RadioGroupItem = React.forwardRef<;
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
      className={cn(;
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",;
        className;
      )}
      {...props}
    >;
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">;
        <Circle className="h-2.5 w-2.5 fill-current text-current" />;
      </RadioGroupPrimitive.Indicator>;
    </RadioGroupPrimitive.Item>;
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
;
export { RadioGroup, RadioGroupItem } const RadioGroup = React.forwardRef< React.ElementRef<typeof RadioGroupPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> > ( ({
  className, ...props 
}, ref) => {
  return (<RadioGroupPrimitive.Root />) 
}) RadioGroup.displayName = RadioGroupPrimitive.Root.displayName const RadioGroupItem = React.forwardRef< React.ElementRef<typeof RadioGroupPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> > ( ({
  className, ...props 
}, ref) => {
  return (<RadioGroupPrimitive.Item ref= {
  ref 
}) 
}{
  ...props 
}> <RadioGroupPrimitive.Indicator className="flex items-center justify-center" > <Circle className="h-2.5 w-2.5 fill-current text-current" /> </RadioGroupPrimitive.Indicator> </RadioGroupPrimitive.Item>) 
}) RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName export {
  RadioGroup, RadioGroupItem 
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
