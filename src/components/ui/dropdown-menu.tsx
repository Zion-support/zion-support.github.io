import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'


<<<<<<< HEAD
=======
const DropdownMenu = DropdownMenuPrimitive.Root
import * as React from &quot;react&quot;
import * as DropdownMenuPrimitive from &quot;@radix-ui/react-dropdown-menu&quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;

import { cn } from "@/lib/utils"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
import * as React from &quot;react & quot;
import * as DropdownMenuPrimitive from &quot;@radix - ui / react - dropdown - menu & quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
;
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ class_name, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref}
<<<<<<< HEAD


=======
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;
      inset && &quot;pl-8&quot;
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;
      inset && &quot;pl-8&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",


      className
<<<<<<< HEAD
    )}
    {...props}
  >;
    {children}


=======
    {...props}
  >;
    {children}
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
ursor/fix-website-loading-errors-and-merge-6662
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <ChevronRight className="ml-auto h-4 w-4" />


  </DropdownMenuPrimitive.SubTrigger>
<<<<<<< HEAD
))
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
<<<<<<< HEAD


=======
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
ursor/fix-website-loading-errors-and-merge-6662
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


      className
<<<<<<< HEAD
    )}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    {...props}
  />;
));
DropdownMenuSubContent.displayName =;
  DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef<;
<<<<<<< HEAD


=======
  React.ElementRef<typeof DropdownMenuPrimitive.Content>;
ursor/fix-website-loading-errors-and-merge-6662
  React.ElementRef<typeof DropdownMenuPrimitive.Content>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;


  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
<<<<<<< HEAD
>(({ className, sideOffset = 4, ...props }, ref) => (;
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  <DropdownMenuPrimitive.Portal>;
    <DropdownMenuPrimitive.Content;
      ref={ref}
      sideOffset={sideOffset}
<<<<<<< HEAD


=======
className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
ursor/fix-website-loading-errors-and-merge-6662
className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


        className
<<<<<<< HEAD
      )}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef<;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
className={cn (
      &quot;flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent data-[state = open]:bg - accent & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  >;
    {children}
<ChevronRight className=&quot;ml - auto h - 4 w - 4&quot; />;
  </DropdownMenuPrimitive.SubTrigger>));
DropdownMenuSubTrigger.display_name =;
  DropdownMenuPrimitive.SubTrigger.display_name;
const DropdownMenuSubContent = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.SubContent>;
>(({ class_name, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent;
    ref={ref}
    className={cn (
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border border - border bg - popover p - 1 text - popover - foreground shadow - lg data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
      class_name)}
    {...props}
  />));
DropdownMenuSubContent.display_name =;
  DropdownMenuPrimitive.SubContent.display_name;
const DropdownMenuContent = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Content>;
>(({ class_name, side_offset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>;
    <DropdownMenuPrimitive.Content;
      ref={ref}
      side_offset={side_offset}
className={cn (
        &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border border - border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
        class_name)}
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>));
DropdownMenuContent.display_name = DropdownMenuPrimitive.Content.display_name;
const DropdownMenuItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Item> & {


  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
    inset?: boolean;
  }
<<<<<<< HEAD
>(({ class_name, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item;
    ref={ref}


    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",


      className
    )}
=======
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Item;
    ref={ref}

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
    inset?: boolean;
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
ursor/fix-website-loading-errors-and-merge-6662
  React.ElementRef<typeof DropdownMenuPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    {...props}
  />;
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef<;
<<<<<<< HEAD


=======
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;


  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}


    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",


      className
    )}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none transition - colors focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
DropdownMenuItem.display_name = DropdownMenuPrimitive.Item.display_name;
const DropdownMenuCheckboxItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.CheckboxItem>;
>(({ class_name, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none transition - colors focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
<<<<<<< HEAD
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    checked={checked}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Check className=&quot;h - 4 w - 4&quot; />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
<<<<<<< HEAD


  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;


=======
  </DropdownMenuPrimitive.CheckboxItem>;
));
DropdownMenuCheckboxItem.displayName =;
  DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>;
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef<;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
    inset?: boolean;
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Label;
    ref={ref}
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;
      inset && &quot;pl-8&quot;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}


    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",


      className
    )}
  </DropdownMenuPrimitive.CheckboxItem>));
DropdownMenuCheckboxItem.display_name =;
  DropdownMenuPrimitive.CheckboxItem.display_name;
const DropdownMenuRadioItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none transition - colors focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
<<<<<<< HEAD
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
<<<<<<< HEAD

  </DropdownMenuPrimitive.RadioItem>));
DropdownMenuRadioItem.display_name = DropdownMenuPrimitive.RadioItem.display_name;
const DropdownMenuLabel = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Label> & {

=======
  </DropdownMenuPrimitive.RadioItem>;
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
    inset?: boolean;
  }
>(({ class_name, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label;
    ref={ref}
<<<<<<< HEAD


    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",


      className
    )}
=======
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;
      inset && &quot;pl-8&quot;
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    {...props}
  />;
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef<;
<<<<<<< HEAD

=======
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;


  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
className={cn (
      &quot;px - 2 py - 1.5 text - sm font - semibold & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
DropdownMenuLabel.display_name = DropdownMenuPrimitive.Label.display_name;
const DropdownMenuSeparator = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator;
    ref={ref}
<<<<<<< HEAD


    className={cn("-mx-1 my-1 h-px bg-muted", className)}


=======
    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot; className)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    {...props}

/>));
DropdownMenuSeparator.display_name = DropdownMenuPrimitive.Separator.display_name;
const DropdownMenuShortcut = ({
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {

  return (
    <span;
      className={cn (&quot;ml - auto text - xs tracking - widest opacity - 60 & quot;, class_name)}
  return (
    <span
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}

      {...props}
    />);
}

<<<<<<< HEAD
=======
      className={cn(&quot;ml-auto text-xs tracking-widest opacity-60&quot; className)}
ursor/fix-website-loading-errors-and-merge-6662
    />);
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <DropdownMenuPrimitive.Separator;
    ref={ref}
    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot; className)}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
/>
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
const DropdownMenuShortcut = ({
  className
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(&quot;ml-auto text-xs tracking-widest opacity-60&quot; className)}
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />;
  );
}
DropdownMenuShortcut.displayName = &quot;DropdownMenuShortcut&quot;
export {
  DropdownMenu
  DropdownMenuTrigger
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuCheckboxItem
  DropdownMenuRadioItem
  DropdownMenuLabel
  DropdownMenuSeparator
  DropdownMenuShortcut
  DropdownMenuGroup
  DropdownMenuPortal
  DropdownMenuSub
  DropdownMenuSubContent
  DropdownMenuSubTrigger
  DropdownMenuRadioGroup}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
DropdownMenuShortcut.display_name = &quot;DropdownMenuShortcut & quot;
;

DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
<<<<<<< HEAD
  DropdownMenuSubContent,
=======
  DropdownMenuSubContent,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
