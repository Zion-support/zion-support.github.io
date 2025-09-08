
<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as SelectPrimitive from &quot;@radix-ui/react-select&quot;
import { Check, ChevronDown, ChevronUp } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;


=======

import * as React from "react"
>>>>>>> origin/cursor/delete-old-data-records-6bba
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
<<<<<<< HEAD
"
import { cn } from "@/lib/utils"


=======

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(      className
const Select = $2;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref = $2;

"
import { cn } from "@/lib/utils"
>>>>>>> origin/cursor/delete-old-data-records-6bba

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger;
    ref={ref}
<<<<<<< HEAD

    className={cn(



      className

=======


      className
>>>>>>> origin/cursor/delete-old-data-records-6bba
    )}
    {...props}
  >;
    {children}

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />

<SelectPrimitive.Icon asChild>
      <ChevronDown className=&quot;h-4 w-4 opacity-50&quot; />
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
"flex cursor-default items-center justify-center py-1",




=======
      "flex cursor-default items-center justify-center py-1,
    <SelectPrimitive.Icon asChild>
      <ChevronDown className = $2;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref = $2;

"flex cursor-default items-center justify-center py-1",


>>>>>>> origin/cursor/delete-old-data-records-6bba
      className
    )}
    {...props}
  >
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD

  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(


=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
      className
    )}
    {...props}
  >

<<<<<<< HEAD

=======
    <ChevronDown className="h-4 w-4" />
    <ChevronDown className=&quot;h-4 w-4&quot; />
    <ChevronDown className=h-4 w-4" />    <ChevronDown className="h-4 w-4 />
>>>>>>> origin/cursor/delete-old-data-records-6bba
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
<<<<<<< HEAD

=======
>(({ className, children, position = "popper", ...props }, ref) => (>(({ className, children, position = "popper", ...props }, ref) => (

>(({ className, children, position = popper", ...props }, ref) => (>(({ className, children, position = "popper, ...props }, ref) => (
>>>>>>> origin/cursor/delete-old-data-records-6bba

"
    <ChevronDown className="h-4 w-4" />

        className

      )}
>(({ className, children, position = "popper", ...props }, ref) => (>(({ className, children, position = "popper", ...props }, ref) => (
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
  </SelectPrimitive.Portal>));
import * as React from "react"""
import * as SelectPrimitive from "@radix-ui/react-select"""
import { Check, ChevronDown, ChevronUp } from "lucide-react"""
import { cn } from "@/lib/utils""
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>
</typeof>
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
  <SelectPrimitive.Trigger;
    ref={ref}
    className={cn(




      <ChevronDown className=&quot;h-4 w-4 opacity-50&quot; />



      position={position}

      <SelectScrollUpButton />

      <SelectPrimitive.Viewport
        className={cn(

=======
"
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1","

    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />"

>>>>>>> origin/cursor/delete-old-data-records-6bba

            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"

        )}
<<<<<<< HEAD


=======

        )}

>>>>>>> origin/cursor/delete-old-data-records-6bba
import * as React from &quot;react & quot;
import * as SelectPrimitive from &quot;@radix - ui / react - select & quot;
import { Check, ChevronDown, ChevronUp } from &quot;lucide-react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
const SelectTrigger = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Trigger>,

  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Trigger>;
>(({ class_name, children, ...props }, ref) => (
    className={cn (
      &quot;flex h - 10 w - full items - center justify - between rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background placeholder:text - muted - foreground focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 [&>span]:line - clamp - 1&quot;,

<SelectPrimitive.Icon as_child>;

      <ChevronDown className=&quot;h - 4 w - 4 opacity - 50 & quot; />;

    </SelectPrimitive.Icon>;)
  </SelectPrimitive.Trigger>));
SelectTrigger.display_name = SelectPrimitive.Trigger.display_name;
const SelectScrollUpButton = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.ScrollUpButton>;
>(({ class_name, ...props }, ref) => (
      &quot;flex cursor - default items - center justify - center py - 1&quot;,)
      class_name)}
  >;

    <ChevronUp className=&quot;h - 4 w - 4&quot; />;

  </SelectPrimitive.ScrollUpButton>));
SelectScrollUpButton.display_name = SelectPrimitive.ScrollUpButton.display_name;
const SelectScrollDownButton = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.ScrollDownButton>;

    <ChevronDown className=&quot;h - 4 w - 4&quot; />;

  </SelectPrimitive.ScrollDownButton>));
SelectScrollDownButton.display_name =;
  SelectPrimitive.ScrollDownButton.display_name;
const SelectContent = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Content>;
>(({ class_name, children, position = &quot;popper & quot;, ...props }, ref) => (
  <SelectPrimitive.Portal>;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

      position={position}
      {...props}
    >;
      <SelectScrollUpButton />;
      <SelectPrimitive.Viewport;

<<<<<<< HEAD
=======

        className={cn (
          &quot;data-[side = bottom]:translate - y-1 data-[side = left]:-translate - x-1 data-[side = right]:translate - x-1 data-[side = top]:-translate - y-1 & quot;,)
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
          &quot;p - 1&quot;,
          position === &quot;popper & quot; &&;)
            &quot;h-[var (--radix - select - trigger - height)] w - full min - w-[var (--radix - select - trigger - width)]&quot)}


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


>>>>>>> origin/cursor/delete-old-data-records-6bba
      >;
        {children}
        className={cn(;"
          "p-1",;""
          position === "popper" &&;")"
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]";"
          &quot;p-1&quot;
          position === &quot;popper&quot; &&
            &quot;h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]&quot;"

      </SelectPrimitive.Viewport>;
      <SelectScrollDownButton />;

<<<<<<< HEAD
    </SelectPrimitive.Content>;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </SelectPrimitive.Content>;

  React.ElementRef<typeof SelectPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;

<<<<<<< HEAD

=======
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  </SelectPrimitive.Portal>));

SelectContent.display_name = SelectPrimitive.Content.display_name;
const SelectLabel = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Label>;
>(({ class_name, ...props }, ref) => (
<<<<<<< HEAD

=======
  <SelectPrimitive.Label;
    ref={ref}
    className={cn (&quot;py - 1.5 pl - 8 pr - 2 text - sm font - semibold & quot;, class_name)}
>>>>>>> origin/cursor/delete-old-data-records-6bba

  <SelectPrimitive.Label;
    ref={ref}
    className={cn (&quot;py - 1.5 pl - 8 pr - 2 text - sm font - semibold & quot;, class_name)}
<<<<<<< HEAD
    {...props}



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

  React.ElementRef<typeof SelectPrimitive.Item>,;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
>(({ className, children, ...props }, ref) => (;
  <SelectPrimitive.Item;
    ref={ref}

<<<<<<< HEAD


    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",


=======

      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,

    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  <SelectPrimitive.Item;
    ref={ref}
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD


=======
className={cn(
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    {...props}>(({ className, children, ...props }, ref) => (;
  <SelectPrimitive.Item;
    ref={ref}
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

    <ChevronDown className = $2;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref = $2;
        position = $2;
        className
      )}
      position = $2;
          position = $2;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = $2;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref = $2;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      className
    )}
    {...props}
  >
<<<<<<< HEAD


=======

    <span className=absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 />    <span className=absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 />
    <span className=&quot;absolute left-2 flex h-3.5 w-3.5 items-center justify-center&quot;>
      <SelectPrimitive.ItemIndicator>
        <Check className=&quot;h-4 w-4&quot; />

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD
  <SelectPrimitive.Separator


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  />));
SelectLabel.display_name = SelectPrimitive.Label.display_name;
const SelectItem = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Item>;
>(({ class_name, children, ...props }, ref) => (
  <SelectPrimitive.Item;
    ref={ref}
<<<<<<< HEAD

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


=======
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = $2;

    ref={ref}
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}
    {...props}


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======

  <SelectPrimitive.Separator  SelectSeparator,
  SelectScrollUpButton,
>>>>>>> origin/cursor/delete-old-data-records-6bba


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
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton}
  SelectScrollUpButton,;
  SelectScrollDownButton} const Select = SelectPrimitive.Root const SelectGroup = SelectPrimitive.Group const SelectValue = SelectPrimitive.Value const SelectTrigger = React.forwardRef< React.ElementRef<typeof SelectPrimitive.Trigger>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> > ( ({
  className, children, ...props 
}, ref) => (<SelectPrimitive.Trigger) 
}{
  ...props 
}> {
  children 
}<SelectPrimitive.Icon asChild> <ChevronDown className="h-4 w-4 opacity-50 /> </SelectPrimitive.Icon> </SelectPrimitive.Trigger>) ) SelectTrigger.displayName = SelectPrimitive.Trigger.displayName const SelectScrollUpButton = React.forwardRef< React.ElementRef<typeof SelectPrimitive.ScrollUpButton>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> > ( ({
  className, ...props 
}, ref) => (<SelectPrimitive.ScrollUpButton) 
}{
  ...props 
}> <ChevronUp className=h-4 w-4" /> </SelectPrimitive.ScrollUpButton>) ) SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName const SelectScrollDownButton = React.forwardRef< React.ElementRef<typeof SelectPrimitive.ScrollDownButton>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> > ( ({
  className, ...props 
}, ref) => (<SelectPrimitive.ScrollDownButton) 
}{
  ...props 
}> <ChevronDown className="h-4 w-4 /> </SelectPrimitive.ScrollDownButton>) ) SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName const SelectContent = React.forwardRef< React.ElementRef<typeof SelectPrimitive.Content>;
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
}> <span className=absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <SelectPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </SelectPrimitive.ItemIndicator> </span> <SelectPrimitive.ItemText> {
  children 
}</SelectPrimitive.ItemText> </SelectPrimitive.Item>) ) SelectItem.displayName = SelectPrimitive.Item.displayName const SelectSeparator = React.forwardRef< React.ElementRef<typeof SelectPrimitive.Separator>;
React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> > ( ({
  className, ...props 
}, ref) => (<SelectPrimitive.Separator />) ) SelectSeparator.displayName = SelectPrimitive.Separator.displayName export {
  Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton 

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
