

import * as React from "react"""
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"""
import { Check, ChevronRight, Circle } from "lucide-react"""
import { cn } from "@/lib/utils""
const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
</typeof>
const ContextMenuSubTrigger = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;"
import * as React from "react";""
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";""
import { Check, ChevronRight, Circle } from "lucide-react";"
;"
import { cn } from "@/lib/utils";"
;
const ContextMenu = ContextMenuPrimitive.Root;
;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
;
const ContextMenuGroup = ContextMenuPrimitive.Group;
;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
;
const ContextMenuSub = ContextMenuPrimitive.Sub;
;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
;
const ContextMenuSubTrigger = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {;
</typeof>
  <ContextMenuPrimitive.SubTrigger;
    ref={ref}
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      inset && &quot;pl-8&quot;,

    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",""
      inset && "pl-8","
  })
>(({ className, inset, children, ...props }, ref) => (;
</ContextMenuPrimitive>
  <ContextMenuPrimitive.SubTrigger;
    ref={ref}
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      inset && &quot;pl-8&quot;,
    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",""
      inset && "pl-8","
    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",""
      inset && "pl-8","
      className;)
    )}
    {...props}
  >;
</ContextMenuPrimitive>"
    <ChevronRight className="ml-auto h-4 w-4" />"
</ChevronRight>"
    <ChevronRight className="ml-auto h-4 w-4" />"
</ChevronRight>
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
</ChevronRight>"
    <ChevronRight className="ml-auto h-4 w-4" />"
</ChevronRight>
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
</typeof>
  <ContextMenuPrimitive.SubContent;
    ref={ref}
    className={cn(

"
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
      className;)
    )}
    {...props}
  />;
</ContextMenuPrimitive>
const ContextMenuContent = React.forwardRef<;


  React.ElementRef<typeof ContextMenuPrimitive.Content>,;
</typeof>


  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
</typeof>
  <ContextMenuPrimitive.Portal>;
</ContextMenuPrimitive>
    <ContextMenuPrimitive.Content;
      ref={ref}


      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
      className={cn("
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        className;)
      )}
      {...props}
    />;
</ContextMenuPrimitive>
  </ContextMenuPrimitive.Portal>;
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
const ContextMenuItem = React.forwardRef<;

className={cn (
      &quot;flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[state = open]:bg - accent data-[state = open]:text - accent - foreground & quot;,
      inset && &quot;pl - 8&quot;,)
      class_name)}
    {...props}
  >;
    {children}
<ChevronRight className=&quot;ml - auto h - 4 w - 4&quot; />;
</ChevronRight>
  </ContextMenuPrimitive.SubTrigger>));
ContextMenuSubTrigger.display_name = ContextMenuPrimitive.SubTrigger.display_name;
const ContextMenuSubContent = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.SubContent>;
>(({ class_name, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent;
    ref={ref}
    className={cn (
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,)
      class_name)}
    {...props}
  />));
</ContextMenuPrimitive>
const ContextMenuContent = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Content>;
>(({ class_name, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>;
</ContextMenuPrimitive>
    <ContextMenuPrimitive.Content;
      ref={ref}
className={cn (
        &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md animate - in fade - in - 80 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,)
        class_name)}
      {...props}
    />;
</ContextMenuPrimitive>
  </ContextMenuPrimitive.Portal>));
ContextMenuContent.display_name = ContextMenuPrimitive.Content.display_name;
const ContextMenuItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;

  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
</typeof>"
    <ChevronRight className="ml-auto h-4 w-4" />;"
</ChevronRight>
  </ContextMenuPrimitive.SubTrigger>;
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
;
const ContextMenuSubContent = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>;
</typeof>
  <ContextMenuPrimitive.SubContent;
    ref={ref}
    className={cn(;"
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;"
      className;)
    )}
    {...props}
  />;
</ContextMenuPrimitive>
const ContextMenuContent = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.Content>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
</typeof>
  <ContextMenuPrimitive.Portal>;
</ContextMenuPrimitive>
    <ContextMenuPrimitive.Content;
      ref={ref}
      className={cn(;"
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;"
        className;)
      )}
      {...props}
    />;
</ContextMenuPrimitive>
  </ContextMenuPrimitive.Portal>;
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
;
const ContextMenuItem = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
</typeof>
  <ContextMenuPrimitive.Item;
    ref={ref}
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,

    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",""
      inset && "pl-8","
  React.ElementRef<typeof ContextMenuPrimitive.Item>;
</ContextMenuPrimitive>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {inset?: boolean;
</typeof>
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
</typeof>
  <ContextMenuPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",""
      inset && "pl-8","
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",""
      inset && "pl-8","
      className;)
    )}
    {...props}
  />;
</ContextMenuPrimitive>
const ContextMenuCheckboxItem = React.forwardRef<;


  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;
</typeof>


  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
</typeof>
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}


    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      className;)
    )}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      inset && &quot;pl - 8&quot;,)
      class_name)}
    {...props}
  />));
</ContextMenuPrimitive>
const ContextMenuCheckboxItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.CheckboxItem>;
>(({ class_name, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,)
      class_name)}
    checked={checked}
    {...props}
  >;
</ContextMenuPrimitive>
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
</span>
      <ContextMenuPrimitive.ItemIndicator>;
</ContextMenuPrimitive>
        <Check className=&quot;h - 4 w - 4&quot; />;
</Check>
      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;
</typeof>


  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
</typeof>
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
</typeof>
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      className;)
    )}
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      className;)
    )}
  </ContextMenuPrimitive.CheckboxItem>));
</ContextMenuPrimitive>
const ContextMenuRadioItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,)
      class_name)}
    {...props}
  >;
</ContextMenuPrimitive>
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
</span>
      <ContextMenuPrimitive.ItemIndicator>;
</ContextMenuPrimitive>
        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;
</Circle>
      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
  </ContextMenuPrimitive.RadioItem>));
ContextMenuRadioItem.display_name = ContextMenuPrimitive.RadioItem.display_name;
const ContextMenuLabel = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;

  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
</typeof>
const ContextMenuCheckboxItem = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
</typeof>
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}
    className={cn(;"
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;"
      className;)
    )}
    checked={checked}
    {...props}
  >;
</ContextMenuPrimitive>"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;"
</span>
      <ContextMenuPrimitive.ItemIndicator>;
</ContextMenuPrimitive>"
        <Check className="h-4 w-4" />;"
</Check>
      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
  </ContextMenuPrimitive.CheckboxItem>;
));
ContextMenuCheckboxItem.displayName =;
  ContextMenuPrimitive.CheckboxItem.displayName;
;
const ContextMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
</typeof>
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
    className={cn(;"
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;"
      className;)
    )}
    {...props}
  >;
</ContextMenuPrimitive>"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;"
</span>
      <ContextMenuPrimitive.ItemIndicator>;
</ContextMenuPrimitive>"
        <Circle className="h-2 w-2 fill-current" />;"
</Circle>
      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
  </ContextMenuPrimitive.RadioItem>;
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
;
const ContextMenuLabel = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
</typeof>
  <ContextMenuPrimitive.Label;
    ref={ref}
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;,
      inset && &quot;pl-8&quot;,

    className={cn("
      "px-2 py-1.5 text-sm font-semibold text-foreground",""
      inset && "pl-8","
  React.ElementRef<typeof ContextMenuPrimitive.Label>;
</ContextMenuPrimitive>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {inset?: boolean;
</typeof>
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
</typeof>
  <ContextMenuPrimitive.Label;
    ref={ref}
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;
      inset && &quot;pl-8&quot;
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;,
      inset && &quot;pl-8&quot;,
    className={cn("
      "px-2 py-1.5 text-sm font-semibold text-foreground",""
      inset && "pl-8","
    className={cn("
      "px-2 py-1.5 text-sm font-semibold text-foreground",""
      inset && "pl-8","
      className;)
    )}
    {...props}
  />;
</ContextMenuPrimitive>
const ContextMenuSeparator = React.forwardRef<;


  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;
</typeof>


  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
</typeof>
const ContextMenuSeparator = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <ContextMenuPrimitive.Separator;
    ref={ref})
    className={cn (&quot;-mx - 1 my - 1 h - px bg - border & quot;, class_name)}
    {...props}

"
        "ml-auto text-xs tracking-widest text-muted-foreground","
        className;
      )}
/>));
</ContextMenuPrimitive>
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {
  // TODO: Implement
}
  return (
    <span;
      className={cn (
        &quot;ml - auto text - xs tracking - widest text - muted - foreground & quot;,)
        class_name)}
      {...props}
    />);
</span>
const ContextMenuSeparator = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
</typeof>
  <ContextMenuPrimitive.Separator;
    ref={ref}"
    className={cn("-mx-1 my-1 h-px bg-border", className)}"
    {...props}
  />;
</ContextMenuPrimitive>
} React.HTMLAttributes<HTMLSpanElement>) => {;
</HTMLSpanElement>
    <span;
      className={cn(;"
        "ml-auto text-xs tracking-widest text-muted-foreground",;"
        className;)
      )}
      {...props}
    />);
</span>
  ContextMenuRadioGroup} const ContextMenu = ContextMenuPrimitive.Root const ContextMenuTrigger = ContextMenuPrimitive.Trigger const ContextMenuGroup = ContextMenuPrimitive.Group const ContextMenuPortal = ContextMenuPrimitive.Portal const ContextMenuSub = ContextMenuPrimitive.Sub const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup const ContextMenuSubTrigger = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>;
</typeof>
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
</typeof>
}, ref) => (<ContextMenuPrimitive.SubTrigger) 
}{
  ...props;
}> </ContextMenuPrimitive.SubTrigger>) ) ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName const ContextMenuSubContent = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.SubContent>;
</ContextMenuPrimitive>
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> > ( ({
</typeof>)
}, ref) => (<ContextMenuPrimitive.SubContent) 
}{
  ...props;
}/>) ) ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName const ContextMenuContent = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Content>;
</ContextMenuPrimitive>
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> > ( ({
</typeof>)
}, ref) => (<ContextMenuPrimitive.Portal> <ContextMenuPrimitive.Content) 
</ContextMenuPrimitive>
}/> </ContextMenuPrimitive.Portal>) ) ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName const ContextMenuItem = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Item>;
</typeof>
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
</typeof>
}, ref) => (<ContextMenuPrimitive.Item) 
}{
  ...props;
}/>) ) ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName const ContextMenuCheckboxItem = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>;
</ContextMenuPrimitive>
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> > ( ({
</typeof>)
}, ref) => (<ContextMenuPrimitive.CheckboxItem) 
}checked= {
  checked;
}{
  ...props;"
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <ContextMenuPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </ContextMenuPrimitive.ItemIndicator> </span> {"
</ContextMenuPrimitive>
}</ContextMenuPrimitive.CheckboxItem>) ) ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName const ContextMenuRadioItem = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
</typeof>
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> > ( ({
</typeof>)
}, ref) => (<ContextMenuPrimitive.RadioItem) 
}{
  ...props;"
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <ContextMenuPrimitive.ItemIndicator> <Circle className="h-2 w-2 fill-current" /> </ContextMenuPrimitive.ItemIndicator> </span> {"
</ContextMenuPrimitive>
}</ContextMenuPrimitive.RadioItem>) ) ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName const ContextMenuLabel = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Label>;
</typeof>
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
</typeof>
}, ref) => (<ContextMenuPrimitive.Label) 
}{
  ...props;
}/>) ) ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName const ContextMenuSeparator = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Separator>;
</ContextMenuPrimitive>
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> > ( ({
</typeof>)
}, ref) => (<ContextMenuPrimitive.Separator />) ) ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName const ContextMenuShortcut = ({
</ContextMenuPrimitive>)
}: React.HTMLAttributes<HTMLSpanElement>) => {
</HTMLSpanElement>
  return (<span className= {)
  cn () 
}{
  ...props;
}/>) 
</span>"