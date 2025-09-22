<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as RadioGroupPrimitive from &quot;@radix-ui/react-radio-group&quot;
import { Circle } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import * as React from "react"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
=======

import * as React from "react""
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Circle } from "lucide-react"
"
import { cn } from "@/lib/utils"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
<<<<<<< HEAD
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
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
>(({ className, ...props }, ref) => {className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;,
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
import * as React from "react"""
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"""
import { Circle } from "lucide-react"""
import { cn } from "@/lib/utils""
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
</typeof>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
const RadioGroup = React.forward_ref<;
  React.ElementRef < typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof RadioGroupPrimitive.Root>;
>(({ class_name, ...props }, ref) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <RadioGroupPrimitive.Root;
      className={cn (&quot;grid gap - 2&quot;, class_name)}
      {...props}
      ref={ref}
    />);
});

<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
    <RadioGroupPrimitive.Item;
      ref={ref}
<<<<<<< HEAD
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;,
      className={cn("
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

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
=======

className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;,
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

        className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      )}
    >

      <RadioGroupPrimitive.Indicator className=&quot;flex items-center justify-center&quot;>

        <Circle className=&quot;h-2.5 w-2.5 fill-current text-current&quot; />
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />

=======
<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
"
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">"
        <Circle className="h-2.5 w-2.5 fill-current text-current" />"

pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export { RadioGroup, RadioGroupItem }

<<<<<<< HEAD

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
className={cn (
        &quot;aspect - square h - 4 w - 4 rounded - full border border - primary text - primary ring - offset - background focus:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 & quot;,)
        class_name)}
    >;

      <RadioGroupPrimitive.Indicator className=&quot;flex items - center justify - center & quot;>;

        <Circle className=&quot;h - 2.5 w - 2.5 fill - current text - current & quot; />;

pr-12325
      </RadioGroupPrimitive.Indicator>;
    </RadioGroupPrimitive.Item>);
});
RadioGroupItem.display_name = RadioGroupPrimitive.Item.display_name;

export { RadioGroup, RadioGroupItem }

export { RadioGroup, RadioGroupItem }
;
export { RadioGroup, RadioGroupItem }

export { RadioGroup, RadioGroupItem };
;

;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export { RadioGroup, RadioGroupItem }

export { RadioGroup, RadioGroupItem };
;
export { RadioGroup, RadioGroupItem }
;
export { RadioGroup, RadioGroupItem };

export { RadioGroup, RadioGroupItem };
;
;
export { RadioGroup, RadioGroupItem }
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

;

export { RadioGroup, RadioGroupItem };

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;
      className={cn(;"
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",;"
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">;"
        <Circle className="h-2.5 w-2.5 fill-current text-current" />;"

    </RadioGroupPrimitive.Item>;
  );
export { RadioGroup, RadioGroupItem } const RadioGroup = React.forwardRef< React.ElementRef<typeof RadioGroupPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> > ( ({
</typeof>)
  return (<RadioGroupPrimitive.Root />) 

}) RadioGroup.displayName = RadioGroupPrimitive.Root.displayName const RadioGroupItem = React.forwardRef< React.ElementRef<typeof RadioGroupPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> > ( ({
  return (<RadioGroupPrimitive.Item ref= {
  ref;)
}{
  ...props;"
}> <RadioGroupPrimitive.Indicator className="flex items-center justify-center" > <Circle className="h-2.5 w-2.5 fill-current text-current" /> </RadioGroupPrimitive.Indicator> </RadioGroupPrimitive.Item>)"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
