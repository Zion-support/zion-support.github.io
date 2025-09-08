
<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as DropdownMenuPrimitive from &quot;@radix-ui/react-dropdown-menu&quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;


=======
import * as React from "react"
>>>>>>> origin/cursor/delete-old-data-records-6bba
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {

<<<<<<< HEAD
    inset?: boolean
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import * as React from &quot;react & quot;
import * as DropdownMenuPrimitive from &quot;@radix - ui / react - dropdown - menu & quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
    inset?: boolean  }
>(({ class_name, inset, children, ...props }, ref) => (
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
const DropdownMenuSubTrigger = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.SubTrigger>,

<<<<<<< HEAD
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
;
import { cn } from "@/lib/utils";
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

<<<<<<< HEAD
=======
    inset?: boolean;"
import * as React from "react";""
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";""
import { Check, ChevronRight, Circle } from "lucide-react";"
;"
import { cn } from "@/lib/utils";"
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
const DropdownMenuSubTrigger = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {;
    inset?:boolean;


  }

>(({ class_name, inset, children, ...props }, ref) => (
pr-12325
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref}
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;,
      inset && &quot;pl-8&quot;,

<<<<<<< HEAD


    className={cn(


      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",



=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",

      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
const DropdownMenu = $2;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref = $2;
      inset && "pl-8",
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",

>>>>>>> origin/cursor/delete-old-data-records-6bba
      className
    )}
    {...props}
  >;
    {children}

<<<<<<< HEAD






=======
    <ChevronRight className="ml-auto h-4 w-4 />

    <ChevronRight className="ml-auto h-4 w-4" />

>>>>>>> origin/cursor/delete-old-data-records-6bba
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
<<<<<<< HEAD

    className={cn(


      className




        className
      )}
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef<;



className={cn (
=======


      className


        className
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - lg data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
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
        &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
        class_name)}
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>));
DropdownMenuContent.display_name = DropdownMenuPrimitive.Content.display_name;
const DropdownMenuItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Item>,
<<<<<<< HEAD
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Item> & {}
    inset?: boolean;


  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
=======
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Item> & {
>>>>>>> origin/cursor/delete-old-data-records-6bba
    inset?: boolean;

    className={cn(;
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",;
      inset && "pl-8",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className;
    )}
    {...props}
  >;
    {children}
<<<<<<< HEAD

    <ChevronRight className="ml-auto h-4 w-4" />;

=======
    <ChevronRight className="ml-auto h-4 w-4" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  </DropdownMenuPrimitive.SubTrigger>;
));
DropdownMenuSubTrigger.displayName =;
  DropdownMenuPrimitive.SubTrigger.displayName;
<<<<<<< HEAD

;
const DropdownMenuSubContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,;

=======
;
const DropdownMenuSubContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>;
>(({ className, ...props }, ref) => (;
  <DropdownMenuPrimitive.SubContent;
    ref={ref}
    className={cn(;
<<<<<<< HEAD

      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;

=======
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className;
    )}
    {...props}
  />;
));
DropdownMenuSubContent.displayName =;
  DropdownMenuPrimitive.SubContent.displayName;
<<<<<<< HEAD

;
const DropdownMenuContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;

=======
;
const DropdownMenuContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
>(({ className, sideOffset = 4, ...props }, ref) => (;
  <DropdownMenuPrimitive.Portal>;
    <DropdownMenuPrimitive.Content;
      ref={ref}
      sideOffset={sideOffset}
      className={cn(;
<<<<<<< HEAD

        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;

=======
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        className;
      )}
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

<<<<<<< HEAD
;
const DropdownMenuItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
    inset?:boolean;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
>(({ class_name, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item;
    ref={ref}
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,

<<<<<<< HEAD
=======

      inset && "pl-8",
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
    className={cn(

  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,

      className

=======
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
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50,
      inset && pl-8",    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50,
      inset && pl-8",

      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50,
    <ChevronRight className = $2;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref = $2;
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName = $2;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref = $2;
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = $2;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref = $2;
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = $2;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref = $2;
      className
    )}
    checked = $2;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref = $2;
      className
    )}
    {...props}
  >
    <span className = $2;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref = $2;
      inset && "pl-8",
      className
    )}
    {...props}

      className
>>>>>>> origin/cursor/delete-old-data-records-6bba

    )}
    {...props}
  />;
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef<;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}


<<<<<<< HEAD

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50,

    className={cn(
      px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8,    className={cn(
      px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8,

      px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8,
=======
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",


      className
    )}

      className
    )}

    className={cn(

      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      className;
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


    checked={checked}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Check className=&quot;h - 4 w - 4&quot; />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;


    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>;
));
DropdownMenuCheckboxItem.displayName =;
  DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef<;

  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;

  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}


      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,

      className
    )}

      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      className;
    )}


    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children}

  </DropdownMenuPrimitive.RadioItem>));
DropdownMenuRadioItem.display_name = DropdownMenuPrimitive.RadioItem.display_name;
const DropdownMenuLabel = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Label>,


  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
    inset?: boolean;


      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      inset && "pl-8",;
      className;
    )}
    {...props}
  />;
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
;
const DropdownMenuCheckboxItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      className;
    )}
    checked={checked}
    {...props}
  >;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Check className="h-4 w-4" />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
  </DropdownMenuPrimitive.CheckboxItem>;
));
DropdownMenuCheckboxItem.displayName =;
  DropdownMenuPrimitive.CheckboxItem.displayName;
;
const DropdownMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      className;
    )}
    {...props}
  >;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Circle className="h-2 w-2 fill-current" />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
  </DropdownMenuPrimitive.RadioItem>;
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
;
const DropdownMenuLabel = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
    inset?:boolean;
  }

>(({ class_name, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label;
    ref={ref}
      &quot;px-2 py-1.5 text-sm font-semibold&quot;,
      inset && &quot;pl-8&quot;,


    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",

>>>>>>> origin/cursor/delete-old-data-records-6bba

      className
    )}
    {...props}
  />;
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef<;
<<<<<<< HEAD

=======
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/delete-old-data-records-6bba


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


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  <DropdownMenuPrimitive.Separator;
    ref={ref}
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}
    {...props}
<<<<<<< HEAD



=======
/>));
DropdownMenuSeparator.display_name = DropdownMenuPrimitive.Separator.display_name;
const DropdownMenuShortcut = ({
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {
  return (
    <span;
      className={cn (&quot;ml - auto text - xs tracking - widest opacity - 60 & quot;, class_name)}
    className={cn(;
      "px-2 py-1.5 text-sm font-semibold",;
      inset && "pl-8",;
      className;
    )}
    {...props}
  />;
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
;
const DropdownMenuSeparator = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <DropdownMenuPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}

DropdownMenuShortcut.display_name = &quot;DropdownMenuShortcut & quot;
;
  return (
    <span;
      className={cn (&quot;ml - auto text - xs tracking - widest opacity - 60 & quot;, class_name)}
      {...props}
    />);
}  DropdownMenu,
  />
))
DropdownMenuLabel.displayName = $2;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
/>
))
DropdownMenuSeparator.displayName = $2;
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />;
  );
}
DropdownMenuShortcut.displayName = $2;
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
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,

export {

  DropdownMenu,


  DropdownMenuRadioGroup}
DropdownMenuShortcut.displayName = DropdownMenuShortcut";
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
<<<<<<< HEAD





=======
  DropdownMenuRadioGroup} const DropdownMenu = DropdownMenuPrimitive.Root const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger const DropdownMenuGroup = DropdownMenuPrimitive.Group const DropdownMenuPortal = DropdownMenuPrimitive.Portal const DropdownMenuSub = DropdownMenuPrimitive.Sub const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup const DropdownMenuSubTrigger = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean 
}> ( ({
  className, inset, children, ...props 
}, ref) => (<DropdownMenuPrimitive.SubTrigger) 
}{
  ...props 
}> </DropdownMenuPrimitive.SubTrigger>) ) DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName const DropdownMenuSubContent = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.SubContent>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> > ( ({
  className, ...props 
}, ref) => (<DropdownMenuPrimitive.SubContent) 
}{
  ...props 
}/>) ) DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName const DropdownMenuContent = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> > ( ({
  className, sideOffset = 4, ...props 
}, ref) => (<DropdownMenuPrimitive.Portal> <DropdownMenuPrimitive.Content) 
}{
  ...props 
}/> </DropdownMenuPrimitive.Portal>) ) DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName const DropdownMenuItem = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean 
}> ( ({
  className, inset, ...props 
}, ref) => (<DropdownMenuPrimitive.Item) 
}{
  ...props 
}/>) ) DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName const DropdownMenuCheckboxItem = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> > ( ({
  className, children, checked, ...props 
}, ref) => (<DropdownMenuPrimitive.CheckboxItem) 
}checked= {
  checked 
}{
  ...props 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <DropdownMenuPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </DropdownMenuPrimitive.ItemIndicator> </span> {
  children 
}</DropdownMenuPrimitive.CheckboxItem>) ) DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName const DropdownMenuRadioItem = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> > ( ({
  className, children, ...props 
}, ref) => (<DropdownMenuPrimitive.RadioItem) 
}{
  ...props 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <DropdownMenuPrimitive.ItemIndicator> <Circle className="h-2 w-2 fill-current" /> </DropdownMenuPrimitive.ItemIndicator> </span> {
  children 
}</DropdownMenuPrimitive.RadioItem>) ) DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName const DropdownMenuLabel = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Label>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean 
}> ( ({
  className, inset, ...props 
}, ref) => (<DropdownMenuPrimitive.Label) 
}{
  ...props 
}/>) ) DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName const DropdownMenuSeparator = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> > ( ({
  className, ...props 
}, ref) => (<DropdownMenuPrimitive.Separator />) ) DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName const DropdownMenuShortcut = ({
  className, ...props 
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (<span />) 
}DropdownMenuShortcut.displayName = "DropdownMenuShortcut" export {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup 
}

;
;
  DropdownMenuRadioGroup}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
