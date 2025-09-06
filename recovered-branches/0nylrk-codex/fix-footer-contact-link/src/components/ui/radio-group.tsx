<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/radio-group.tsx

=======


=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from &quot;react&quot;
import * as RadioGroupPrimitive from &quot;@radix-ui/react-radio-group&quot;
import { Circle } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/radio-group.tsx
import * as React from &quot;react & quot;
import * as RadioGroupPrimitive from &quot;@radix - ui / react - radio - group & quot;
import { Circle } from &quot;lucide-react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
const RadioGroup = React.forward_ref<;
  React.ElementRef < typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof RadioGroupPrimitive.Root>;
>(({ class_name, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root;
      className={cn (&quot;grid gap - 2&quot;, class_name)}
=======
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const RadioGroup = React.forwardRef<;
  React.ElementRef<typeof RadioGroupPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Root;
      className={cn("grid gap-2", className)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {...props}
      ref={ref}
    />);
});
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/radio-group.tsx
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;
=======


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
  React.ElementRef<typeof RadioGroupPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;,
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        className
      )}
      {...props}
    >
<<<<<<< HEAD
      <RadioGroupPrimitive.Indicator className=&quot;flex items-center justify-center&quot;>
        <Circle className=&quot;h-2.5 w-2.5 fill-current text-current&quot; />
=======
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export { RadioGroup, RadioGroupItem };

export { RadioGroup, RadioGroupItem }

;

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/radio-group.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/radio-group.tsx

export { RadioGroup, RadioGroupItem }
=======


export { RadioGroup, RadioGroupItem }
;

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export { RadioGroup, RadioGroupItem }

export { RadioGroup, RadioGroupItem }
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export { RadioGroup, RadioGroupItem };

export { RadioGroup, RadioGroupItem }
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
export { RadioGroup, RadioGroupItem }
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/radio-group.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
