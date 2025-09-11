<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from &quot;react&quot;
import * as SelectPrimitive from &quot;@radix-ui/react-select&quot;
import { Check, ChevronDown, ChevronUp } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",


      &quot;flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1&quot;
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
=======

      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      &quot;flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1&quot;
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  >;
    {children}
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
<SelectPrimitive.Icon asChild>
      <ChevronDown className=&quot;h-4 w-4 opacity-50&quot; />
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
      "flex cursor-default items-center justify-center py-1",


      &quot;flex cursor-default items-center justify-center py-1&quot;
      "flex cursor-default items-center justify-center py-1",
=======

      "flex cursor-default items-center justify-center py-1",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      &quot;flex cursor-default items-center justify-center py-1&quot;
      "flex cursor-default items-center justify-center py-1",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  >
<<<<<<< HEAD
<<<<<<< HEAD
    <ChevronUp className="h-4 w-4" />
=======
    <ChevronUp className=&quot;h-4 w-4&quot; />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <ChevronUp className=&quot;h-4 w-4&quot; />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
      "flex cursor-default items-center justify-center py-1",


      &quot;flex cursor-default items-center justify-center py-1&quot;
      "flex cursor-default items-center justify-center py-1",
=======

      "flex cursor-default items-center justify-center py-1",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      &quot;flex cursor-default items-center justify-center py-1&quot;
      "flex cursor-default items-center justify-center py-1",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  >
<<<<<<< HEAD
<<<<<<< HEAD
    <ChevronDown className="h-4 w-4" />
=======
    <ChevronDown className=&quot;h-4 w-4&quot; />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <ChevronDown className=&quot;h-4 w-4&quot; />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
<<<<<<< HEAD
<<<<<<< HEAD
>(({ className, children, position = "popper", ...props }, ref) => (
=======
>(({ className, children, position = &quot;popper&quot;, ...props }, ref) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>(({ className, children, position = &quot;popper&quot;, ...props }, ref) => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        &quot;relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
        position === &quot;popper&quot; &&
          &quot;data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1&quot;
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"


        )}
=======
          &quot;p-1&quot;
          position === &quot;popper&quot; &&
            &quot;h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]&quot;
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      position={position}
      {...props}
    >;
      <SelectScrollUpButton />;
      <SelectPrimitive.Viewport;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className={cn (
          &quot;p - 1&quot;,
          position === &quot;popper & quot; &&;
            &quot;h-[var (--radix - select - trigger - height)] w - full min - w-[var (--radix - select - trigger - width)]&quot)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      >;
        {children}
      </SelectPrimitive.Viewport>;
      <SelectScrollDownButton />;
    </SelectPrimitive.Content>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  </SelectPrimitive.Portal>;
));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef<;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  React.ElementRef<typeof SelectPrimitive.Label>,;


  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  React.ElementRef<typeof SelectPrimitive.Label>;
  React.ElementRef<typeof SelectPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  </SelectPrimitive.Portal>));
SelectContent.display_name = SelectPrimitive.Content.display_name;
const SelectLabel = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Label>;
>(({ class_name, ...props }, ref) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <SelectPrimitive.Label;
    ref={ref}
    className={cn (&quot;py - 1.5 pl - 8 pr - 2 text - sm font - semibold & quot;, class_name)}
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD
  React.ElementRef<typeof SelectPrimitive.Label>;
  React.ElementRef<typeof SelectPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;
  <SelectPrimitive.Label;
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  />;
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef<;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  React.ElementRef<typeof SelectPrimitive.Item>,;


<<<<<<< HEAD
  React.ElementRef<typeof SelectPrimitive.Item>;
  React.ElementRef<typeof SelectPrimitive.Item>,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  React.ElementRef<typeof SelectPrimitive.Item>;
  React.ElementRef<typeof SelectPrimitive.Item>,;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
>(({ className, children, ...props }, ref) => (;
  <SelectPrimitive.Item;
    ref={ref}

<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

className={cn(
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  >
<<<<<<< HEAD
<<<<<<< HEAD
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
=======
    <span className=&quot;absolute left-2 flex h-3.5 w-3.5 items-center justify-center&quot;>
      <SelectPrimitive.ItemIndicator>
        <Check className=&quot;h-4 w-4&quot; />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <span className=&quot;absolute left-2 flex h-3.5 w-3.5 items-center justify-center&quot;>
      <SelectPrimitive.ItemIndicator>
        <Check className=&quot;h-4 w-4&quot; />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
    ref={ref}
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}
    {...props}
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

  SelectSeparator;
  SelectScrollUpButton;
  SelectScrollDownButton}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
