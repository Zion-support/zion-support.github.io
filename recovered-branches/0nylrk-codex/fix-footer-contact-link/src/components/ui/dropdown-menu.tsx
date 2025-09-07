

import * as React from "react"""
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"""
import { Check, ChevronRight, Circle } from "lucide-react"""
import { cn } from "@/lib/utils""
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
</typeof>
const DropdownMenuSubTrigger = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;"
import * as React from "react";""
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";""
import { Check, ChevronRight, Circle } from "lucide-react";"
;"
import { cn } from "@/lib/utils";"
;
const DropdownMenu = DropdownMenuPrimitive.Root;
;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
;
const DropdownMenuSubTrigger = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {;
</typeof>
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref}
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;,
      inset && &quot;pl-8&quot;,

    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",""
      inset && "pl-8","
  })
>(({ className, inset, children, ...props }, ref) => (;
</DropdownMenuPrimitive>
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref}
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;
      inset && &quot;pl-8&quot;
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;,
      inset && &quot;pl-8&quot;,
    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",""
      inset && "pl-8","
    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",""
      inset && "pl-8","
      className;)
    )}
    {...props}
  >;
</DropdownMenuPrimitive>"
    <ChevronRight className="ml-auto h-4 w-4" />"
</ChevronRight>"
    <ChevronRight className="ml-auto h-4 w-4" />"
</ChevronRight>
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
</ChevronRight>"
    <ChevronRight className="ml-auto h-4 w-4" />"
</ChevronRight>
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
</typeof>
  <DropdownMenuPrimitive.SubContent;
    ref={ref}
    className={cn(

"
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
      className;)
    )}
    {...props}
  />;
</DropdownMenuPrimitive>
const DropdownMenuContent = React.forwardRef<;


  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;
</typeof>


  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
</typeof>
  <DropdownMenuPrimitive.Portal>;
</DropdownMenuPrimitive>
    <DropdownMenuPrimitive.Content;
      ref={ref}
      sideOffset={sideOffset}


      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        className;)
      )}
      {...props}
    />;
</DropdownMenuPrimitive>
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef<;

className={cn (
      &quot;flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent data-[state = open]:bg - accent & quot;,
      inset && &quot;pl - 8&quot;,)
      class_name)}
    {...props}
  >;
    {children}
<ChevronRight className=&quot;ml - auto h - 4 w - 4&quot; />;
</ChevronRight>
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
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - lg data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,)
      class_name)}
    {...props}
  />));
</DropdownMenuPrimitive>
const DropdownMenuContent = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Content>;
>(({ class_name, side_offset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>;
</DropdownMenuPrimitive>
    <DropdownMenuPrimitive.Content;
      ref={ref}
      side_offset={side_offset}
className={cn (
        &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,)
        class_name)}
      {...props}
    />;
</DropdownMenuPrimitive>
  </DropdownMenuPrimitive.Portal>));
DropdownMenuContent.display_name = DropdownMenuPrimitive.Content.display_name;
const DropdownMenuItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;

  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
</typeof>"
    <ChevronRight className="ml-auto h-4 w-4" />;"
</ChevronRight>
  </DropdownMenuPrimitive.SubTrigger>;
));
DropdownMenuSubTrigger.displayName =;
  DropdownMenuPrimitive.SubTrigger.displayName;
;
const DropdownMenuSubContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>;
</typeof>
  <DropdownMenuPrimitive.SubContent;
    ref={ref}
    className={cn(;"
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;"
      className;)
    )}
    {...props}
  />;
</DropdownMenuPrimitive>
const DropdownMenuContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
</typeof>
  <DropdownMenuPrimitive.Portal>;
</DropdownMenuPrimitive>
    <DropdownMenuPrimitive.Content;
      ref={ref}
      sideOffset={sideOffset}
      className={cn(;"
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;"
        className;)
      )}
      {...props}
    />;
</DropdownMenuPrimitive>
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
;
const DropdownMenuItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
</typeof>
  <DropdownMenuPrimitive.Item;
    ref={ref}
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,

    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",""
      inset && "pl-8","
  React.ElementRef<typeof DropdownMenuPrimitive.Item>;
</DropdownMenuPrimitive>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {inset?: boolean;
</typeof>
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
</typeof>
  <DropdownMenuPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",""
      inset && "pl-8","
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",""
      inset && "pl-8","
      className;)
    )}
    {...props}
  />;
</DropdownMenuPrimitive>
const DropdownMenuCheckboxItem = React.forwardRef<;


  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;
</typeof>


  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
</typeof>
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}


    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      className;)
    )}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none transition - colors focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      inset && &quot;pl - 8&quot;,)
      class_name)}
    {...props}
  />));
</DropdownMenuPrimitive>
const DropdownMenuCheckboxItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.CheckboxItem>;
>(({ class_name, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none transition - colors focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,)
      class_name)}
    checked={checked}
    {...props}
  >;
</DropdownMenuPrimitive>
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
</span>
      <DropdownMenuPrimitive.ItemIndicator>;
</DropdownMenuPrimitive>
        <Check className=&quot;h - 4 w - 4&quot; />;
</Check>
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
</typeof>


  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
</typeof>
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
</typeof>
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      className;)
    )}
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      className;)
    )}
  </DropdownMenuPrimitive.CheckboxItem>));
</DropdownMenuPrimitive>
const DropdownMenuRadioItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none transition - colors focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,)
      class_name)}
    {...props}
  >;
</DropdownMenuPrimitive>
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
</span>
      <DropdownMenuPrimitive.ItemIndicator>;
</DropdownMenuPrimitive>
        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;
</Circle>
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
  </DropdownMenuPrimitive.RadioItem>));
DropdownMenuRadioItem.display_name = DropdownMenuPrimitive.RadioItem.display_name;
const DropdownMenuLabel = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;

  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
</typeof>
const DropdownMenuCheckboxItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
</typeof>
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}
    className={cn(;"
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;"
      className;)
    )}
    checked={checked}
    {...props}
  >;
</DropdownMenuPrimitive>"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;"
</span>
      <DropdownMenuPrimitive.ItemIndicator>;
</DropdownMenuPrimitive>"
        <Check className="h-4 w-4" />;"
</Check>
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
  </DropdownMenuPrimitive.CheckboxItem>;
));
DropdownMenuCheckboxItem.displayName =;
  DropdownMenuPrimitive.CheckboxItem.displayName;
;
const DropdownMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
</typeof>
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
    className={cn(;"
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;"
      className;)
    )}
    {...props}
  >;
</DropdownMenuPrimitive>"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;"
</span>
      <DropdownMenuPrimitive.ItemIndicator>;
</DropdownMenuPrimitive>"
        <Circle className="h-2 w-2 fill-current" />;"
</Circle>
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
  </DropdownMenuPrimitive.RadioItem>;
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
;
const DropdownMenuLabel = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
</typeof>
  <DropdownMenuPrimitive.Label;
    ref={ref}
      &quot;px-2 py-1.5 text-sm font-semibold&quot;,
      inset && &quot;pl-8&quot;,

    className={cn("
      "px-2 py-1.5 text-sm font-semibold",""
      inset && "pl-8","
  React.ElementRef<typeof DropdownMenuPrimitive.Label>;
</DropdownMenuPrimitive>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {inset?: boolean;
</typeof>
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
</typeof>
  <DropdownMenuPrimitive.Label;
    ref={ref}
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;
      inset && &quot;pl-8&quot;
      &quot;px-2 py-1.5 text-sm font-semibold&quot;,
      inset && &quot;pl-8&quot;,
    className={cn("
      "px-2 py-1.5 text-sm font-semibold",""
      inset && "pl-8","
    className={cn("
      "px-2 py-1.5 text-sm font-semibold",""
      inset && "pl-8","
      className;)
    )}
    {...props}
  />;
</DropdownMenuPrimitive>
const DropdownMenuSeparator = React.forwardRef<;


  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;
</typeof>


  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
</typeof>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
</typeof>
const DropdownMenuSeparator = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator;
    ref={ref})
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}
    {...props}

/>));
</DropdownMenuPrimitive>
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {
  // TODO: Implement
}
  return (
    <span;)
      className={cn (&quot;ml - auto text - xs tracking - widest opacity - 60 & quot;, class_name)}
      {...props}
    />);
</span>
  DropdownMenuRadioGroup} const DropdownMenu = DropdownMenuPrimitive.Root const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger const DropdownMenuGroup = DropdownMenuPrimitive.Group const DropdownMenuPortal = DropdownMenuPrimitive.Portal const DropdownMenuSub = DropdownMenuPrimitive.Sub const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup const DropdownMenuSubTrigger = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>;
</typeof>
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
</typeof>
}, ref) => (<DropdownMenuPrimitive.SubTrigger) 
}{
  ...props;
}> </DropdownMenuPrimitive.SubTrigger>) ) DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName const DropdownMenuSubContent = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.SubContent>;
</DropdownMenuPrimitive>
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> > ( ({
</typeof>)
}, ref) => (<DropdownMenuPrimitive.SubContent) 
}{
  ...props;
}/>) ) DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName const DropdownMenuContent = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Content>;
</DropdownMenuPrimitive>
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> > ( ({
</typeof>)
}, ref) => (<DropdownMenuPrimitive.Portal> <DropdownMenuPrimitive.Content) 
</DropdownMenuPrimitive>
}/> </DropdownMenuPrimitive.Portal>) ) DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName const DropdownMenuItem = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Item>;
</typeof>
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
</typeof>
}, ref) => (<DropdownMenuPrimitive.Item) 
}{
  ...props;
}/>) ) DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName const DropdownMenuCheckboxItem = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
</DropdownMenuPrimitive>
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> > ( ({
</typeof>)
}, ref) => (<DropdownMenuPrimitive.CheckboxItem) 
}checked= {
  checked;
}{
  ...props;"
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <DropdownMenuPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </DropdownMenuPrimitive.ItemIndicator> </span> {"
</DropdownMenuPrimitive>
}</DropdownMenuPrimitive.CheckboxItem>) ) DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName const DropdownMenuRadioItem = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
</typeof>
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> > ( ({
</typeof>)
}, ref) => (<DropdownMenuPrimitive.RadioItem) 
}{
  ...props;"
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <DropdownMenuPrimitive.ItemIndicator> <Circle className="h-2 w-2 fill-current" /> </DropdownMenuPrimitive.ItemIndicator> </span> {"
</DropdownMenuPrimitive>
}</DropdownMenuPrimitive.RadioItem>) ) DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName const DropdownMenuLabel = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Label>;
</typeof>
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
</typeof>
}, ref) => (<DropdownMenuPrimitive.Label) 
}{
  ...props;
}/>) ) DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName const DropdownMenuSeparator = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
</DropdownMenuPrimitive>
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> > ( ({
</typeof>)
}, ref) => (<DropdownMenuPrimitive.Separator />) ) DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName const DropdownMenuShortcut = ({
</DropdownMenuPrimitive>)
}: React.HTMLAttributes<HTMLSpanElement>) => {
</HTMLSpanElement>
  return (<span />) 
</span>"