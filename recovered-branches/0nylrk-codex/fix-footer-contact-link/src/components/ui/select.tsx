<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
import * as React from &quot;react&quot;
import * as SelectPrimitive from &quot;@radix-ui/react-select&quot;
import { Check, ChevronDown, ChevronUp } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",


=======
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",


      &quot;flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1&quot;
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      className
    )}
    {...props}
  >;
    {children}
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<SelectPrimitive.Icon asChild>
      <ChevronDown className=&quot;h-4 w-4 opacity-50&quot; />
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

      "flex cursor-default items-center justify-center py-1",


=======
      "flex cursor-default items-center justify-center py-1",


      &quot;flex cursor-default items-center justify-center py-1&quot;
      "flex cursor-default items-center justify-center py-1",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      className
    )}
    {...props}
  >
<<<<<<< HEAD
    <ChevronUp className="h-4 w-4" />
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <ChevronUp className=&quot;h-4 w-4&quot; />
=======
    <ChevronUp className="h-4 w-4" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    <ChevronUp className="h-4 w-4" />
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

      "flex cursor-default items-center justify-center py-1",


=======
      "flex cursor-default items-center justify-center py-1",


      &quot;flex cursor-default items-center justify-center py-1&quot;
      "flex cursor-default items-center justify-center py-1",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      className
    )}
    {...props}
  >
<<<<<<< HEAD
    <ChevronDown className="h-4 w-4" />
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <ChevronDown className=&quot;h-4 w-4&quot; />
=======
    <ChevronDown className="h-4 w-4" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    <ChevronDown className="h-4 w-4" />
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
<<<<<<< HEAD
>(({ className, children, position = "popper", ...props }, ref) => (
=======
<<<<<<< HEAD
<<<<<<< HEAD
>(({ className, children, position = &quot;popper&quot;, ...props }, ref) => (
=======
>(({ className, children, position = "popper", ...props }, ref) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>(({ className, children, position = "popper", ...props }, ref) => (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",


<<<<<<< HEAD
=======
        &quot;relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
        position === &quot;popper&quot; &&
          &quot;data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1&quot;
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
<<<<<<< HEAD
        )}
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"


        )}
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import * as React from &quot;react & quot;
import * as SelectPrimitive from &quot;@radix - ui / react - select & quot;
import { Check, ChevronDown, ChevronUp } from &quot;lucide-react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Trigger>;
>(({ class_name, children, ...props }, ref) => (
  <SelectPrimitive.Trigger;
    ref={ref}
    className={cn (
      &quot;flex h - 10 w - full items - center justify - between rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background placeholder:text - muted - foreground focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 [&>span]:line - clamp - 1&quot;,
      class_name)}
    {...props}
  >;
    {children}
<SelectPrimitive.Icon as_child>;
      <ChevronDown className=&quot;h - 4 w - 4 opacity - 50 & quot; />;
    </SelectPrimitive.Icon>;
  </SelectPrimitive.Trigger>));
SelectTrigger.display_name = SelectPrimitive.Trigger.display_name;
const SelectScrollUpButton = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.ScrollUpButton>;
>(({ class_name, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton;
    ref={ref}
    className={cn (
      &quot;flex cursor - default items - center justify - center py - 1&quot;,
      class_name)}
    {...props}
  >;
    <ChevronUp className=&quot;h - 4 w - 4&quot; />;
  </SelectPrimitive.ScrollUpButton>));
SelectScrollUpButton.display_name = SelectPrimitive.ScrollUpButton.display_name;
const SelectScrollDownButton = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.ScrollDownButton>;
>(({ class_name, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton;
    ref={ref}
    className={cn (
      &quot;flex cursor - default items - center justify - center py - 1&quot;,
      class_name)}
    {...props}
  >;
    <ChevronDown className=&quot;h - 4 w - 4&quot; />;
  </SelectPrimitive.ScrollDownButton>));
SelectScrollDownButton.display_name =;
  SelectPrimitive.ScrollDownButton.display_name;
const SelectContent = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Content>;
>(({ class_name, children, position = &quot;popper & quot;, ...props }, ref) => (
  <SelectPrimitive.Portal>;
    <SelectPrimitive.Content;
      ref={ref}
      className={cn (
        &quot;relative z - 50 max - h-96 min - w-[8rem] overflow - hidden rounded - md border bg - popover text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
        position === &quot;popper & quot; &&;
          &quot;data-[side = bottom]:translate - y-1 data-[side = left]:-translate - x-1 data-[side = right]:translate - x-1 data-[side = top]:-translate - y-1 & quot;,
        class_name)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const Select = SelectPrimitive.Root;
;
const SelectGroup = SelectPrimitive.Group;
;
const SelectValue = SelectPrimitive.Value;
;
const SelectTrigger = React.forwardRef<;
  React.ElementRef<typeof SelectPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
>(({ className, children, ...props }, ref) => (;
  <SelectPrimitive.Trigger;
    ref={ref}
    className={cn(;
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",;
      className;
    )}
    {...props}
  >;
    {children}
    <SelectPrimitive.Icon asChild>;
      <ChevronDown className="h-4 w-4 opacity-50" />;
    </SelectPrimitive.Icon>;
  </SelectPrimitive.Trigger>;
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
;
const SelectScrollUpButton = React.forwardRef<;
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>;
>(({ className, ...props }, ref) => (;
  <SelectPrimitive.ScrollUpButton;
    ref={ref}
    className={cn(;
      "flex cursor-default items-center justify-center py-1",;
      className;
    )}
    {...props}
  >;
    <ChevronUp className="h-4 w-4" />;
  </SelectPrimitive.ScrollUpButton>;
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
;
const SelectScrollDownButton = React.forwardRef<;
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>;
>(({ className, ...props }, ref) => (;
  <SelectPrimitive.ScrollDownButton;
    ref={ref}
    className={cn(;
      "flex cursor-default items-center justify-center py-1",;
      className;
    )}
    {...props}
  >;
    <ChevronDown className="h-4 w-4" />;
  </SelectPrimitive.ScrollDownButton>;
));
SelectScrollDownButton.displayName =;
  SelectPrimitive.ScrollDownButton.displayName;
;
const SelectContent = React.forwardRef<;
  React.ElementRef<typeof SelectPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
>(({ className, children, position = "popper", ...props }, ref) => (;
  <SelectPrimitive.Portal>;
    <SelectPrimitive.Content;
      ref={ref}
      className={cn(;
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
        position === "popper" &&;
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",;
        className;
      )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      position={position}
      {...props}
    >;
      <SelectScrollUpButton />;
      <SelectPrimitive.Viewport;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        className={cn (
          &quot;p - 1&quot;,
          position === &quot;popper & quot; &&;
            &quot;h-[var (--radix - select - trigger - height)] w - full min - w-[var (--radix - select - trigger - width)]&quot)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        className={cn(;
          "p-1",;
          position === "popper" &&;
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]";
        )}
          &quot;p-1&quot;
          position === &quot;popper&quot; &&
            &quot;h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]&quot;
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      >;
        {children}
      </SelectPrimitive.Viewport>;
      <SelectScrollDownButton />;
    </SelectPrimitive.Content>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  </SelectPrimitive.Portal>;
));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef<;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  React.ElementRef<typeof SelectPrimitive.Label>,;


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  </SelectPrimitive.Portal>));
SelectContent.display_name = SelectPrimitive.Content.display_name;
const SelectLabel = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Label>;
>(({ class_name, ...props }, ref) => (
  <SelectPrimitive.Label;
    ref={ref}
    className={cn (&quot;py - 1.5 pl - 8 pr - 2 text - sm font - semibold & quot;, class_name)}
    {...props}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  React.ElementRef<typeof SelectPrimitive.Label>;
  React.ElementRef<typeof SelectPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;
  <SelectPrimitive.Label;
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />;
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef<;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  React.ElementRef<typeof SelectPrimitive.Item>,;


<<<<<<< HEAD
=======
  React.ElementRef<typeof SelectPrimitive.Item>;
  React.ElementRef<typeof SelectPrimitive.Item>,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
>(({ className, children, ...props }, ref) => (;
  <SelectPrimitive.Item;
    ref={ref}
<<<<<<< HEAD
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
=======
<<<<<<< HEAD

<<<<<<< HEAD

    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

=======
=======
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

className={cn(
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      className
    )}
    {...props}
  >
<<<<<<< HEAD
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <span className=&quot;absolute left-2 flex h-3.5 w-3.5 items-center justify-center&quot;>
      <SelectPrimitive.ItemIndicator>
        <Check className=&quot;h-4 w-4&quot; />
=======
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  />));
SelectLabel.display_name = SelectPrimitive.Label.display_name;
const SelectItem = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Item>;
>(({ class_name, children, ...props }, ref) => (
  <SelectPrimitive.Item;
    ref={ref}
className={cn (
      &quot;relative flex w - full cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <SelectPrimitive.ItemIndicator>;
        <Check className=&quot;h - 4 w - 4&quot; />;
      </SelectPrimitive.ItemIndicator>;
    </span>;
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>;
  </SelectPrimitive.Item>));
SelectItem.display_name = SelectPrimitive.Item.display_name;
const SelectSeparator = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <SelectPrimitive.Separator;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}
    {...props}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  />));
SelectSeparator.display_name = SelectPrimitive.Separator.display_name;
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  SelectSeparator;
  SelectScrollUpButton;
  SelectScrollDownButton}

<<<<<<< HEAD
=======
  SelectSeparator;
  SelectScrollUpButton;
  SelectScrollDownButton}
  </SelectPrimitive.Portal>;
));
SelectContent.displayName = SelectPrimitive.Content.displayName;
;
const SelectLabel = React.forwardRef<;
  React.ElementRef<typeof SelectPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;
  <SelectPrimitive.Label;
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />;
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
;
const SelectItem = React.forwardRef<;
  React.ElementRef<typeof SelectPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
>(({ className, children, ...props }, ref) => (;
  <SelectPrimitive.Item;
    ref={ref}
    className={cn(;
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      className;
    )}
    {...props}
  >;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;
      <SelectPrimitive.ItemIndicator>;
        <Check className="h-4 w-4" />;
      </SelectPrimitive.ItemIndicator>;
    </span>;
;
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>;
  </SelectPrimitive.Item>;
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
;
const SelectSeparator = React.forwardRef<;
  React.ElementRef<typeof SelectPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <SelectPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />;
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
export {Select;
  SelectGroup;
  SelectValue;
  SelectTrigger;
  SelectContent;
  SelectLabel;
  SelectItem;
  SelectSeparator;
  SelectScrollUpButton;
  SelectScrollDownButton}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export {;
  Select,;
  SelectGroup,;
  SelectValue,;
  SelectTrigger,;
  SelectContent,;
  SelectLabel,;
  SelectItem,;
  SelectSeparator;
  SelectScrollUpButton;
  SelectScrollDownButton}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  SelectSeparator,;
  SelectScrollUpButton,;
  SelectScrollDownButton} const Select = SelectPrimitive.Root const SelectGroup = SelectPrimitive.Group const SelectValue = SelectPrimitive.Value const SelectTrigger = React.forwardRef< React.ElementRef<typeof SelectPrimitive.Trigger>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> > ( ({
  className, children, ...props 
}, ref) => (<SelectPrimitive.Trigger) 
}{
  ...props 
}> {
  children 
}<SelectPrimitive.Icon asChild> <ChevronDown className="h-4 w-4 opacity-50" /> </SelectPrimitive.Icon> </SelectPrimitive.Trigger>) ) SelectTrigger.displayName = SelectPrimitive.Trigger.displayName const SelectScrollUpButton = React.forwardRef< React.ElementRef<typeof SelectPrimitive.ScrollUpButton>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> > ( ({
  className, ...props 
}, ref) => (<SelectPrimitive.ScrollUpButton) 
}{
  ...props 
}> <ChevronUp className="h-4 w-4" /> </SelectPrimitive.ScrollUpButton>) ) SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName const SelectScrollDownButton = React.forwardRef< React.ElementRef<typeof SelectPrimitive.ScrollDownButton>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> > ( ({
  className, ...props 
}, ref) => (<SelectPrimitive.ScrollDownButton) 
}{
  ...props 
}> <ChevronDown className="h-4 w-4" /> </SelectPrimitive.ScrollDownButton>) ) SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName const SelectContent = React.forwardRef< React.ElementRef<typeof SelectPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>) 
}position= {
  position 
}{
  ...props 
}> <SelectScrollUpButton /> <SelectPrimitive.Viewport) 
}> {
  children 
}</SelectPrimitive.Viewport> <SelectScrollDownButton /> </SelectPrimitive.Content> </SelectPrimitive.Portal>) ) SelectContent.displayName = SelectPrimitive.Content.displayName const SelectLabel = React.forwardRef< React.ElementRef<typeof SelectPrimitive.Label>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> > ( ({
  className, ...props 
}, ref) => (<SelectPrimitive.Label />) ) SelectLabel.displayName = SelectPrimitive.Label.displayName const SelectItem = React.forwardRef< React.ElementRef<typeof SelectPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> > ( ({
  className, children, ...props 
}, ref) => (<SelectPrimitive.Item) 
}{
  ...props 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <SelectPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </SelectPrimitive.ItemIndicator> </span> <SelectPrimitive.ItemText> {
  children 
}</SelectPrimitive.ItemText> </SelectPrimitive.Item>) ) SelectItem.displayName = SelectPrimitive.Item.displayName const SelectSeparator = React.forwardRef< React.ElementRef<typeof SelectPrimitive.Separator>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> > ( ({
  className, ...props 
}, ref) => (<SelectPrimitive.Separator />) ) SelectSeparator.displayName = SelectPrimitive.Separator.displayName export {
  Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton 
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
