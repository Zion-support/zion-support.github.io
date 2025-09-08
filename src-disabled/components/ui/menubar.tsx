<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/ui/menubar.tsx
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from 'lucide-react'



<<<<<<< HEAD
=======
import { cn } from "@/lib/utils"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/menubar.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<

  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root;
    ref={ref}
    className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      &quot;flex h-10 items-center space-x-1 rounded-md border bg-background p-1&quot;
ursor/fix-website-loading-errors-and-merge-6662
      &quot;flex h-10 items-center space-x-1 rounded-md border bg-background p-1&quot;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD:src-disabled/components/ui/menubar.tsx
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",

    )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
>>>>>>> origin/cursor/delete-old-data-records-6bba



    {...props}
  />;
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
const MenubarTrigger = React.forwardRef<;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.Trigger>;
  React.ElementRef<typeof MenubarPrimitive.Trigger>;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



  React.ElementRef<typeof MenubarPrimitive.Trigger>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Trigger;
    ref={ref}

    className={cn(

      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",




    {...props}
  />;
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
const MenubarSubTrigger = React.forwardRef<;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



import * as React from &quot;react & quot;
import * as MenubarPrimitive from &quot;@radix - ui / react - menubar & quot;'
import { cn } from &quot;@/lib / utils & quot;
;
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
const Menubar = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Root>;
>(({ class_name, ...props }, ref) => (
  <MenubarPrimitive.Root;
    ref={ref}
    className={cn (
      &quot;flex h - 10 items - center space - x-1 rounded - md border bg - background p - 1&quot;,
      class_name)}
    {...props}
  />));
Menubar.display_name = MenubarPrimitive.Root.display_name;
const MenubarTrigger = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Trigger>;
>(({ class_name, ...props }, ref) => (
  <MenubarPrimitive.Trigger;
    ref={ref}
className={cn (
      &quot;flex cursor - default select - none items - center rounded - sm px - 3 py - 1.5 text - sm font - medium outline - none focus:bg - accent focus:text - accent - foreground data-[state = open]:bg - accent data-[state = open]:text - accent - foreground & quot;,
      class_name)}
    {...props}
  />));
MenubarTrigger.display_name = MenubarPrimitive.Trigger.display_name;
const MenubarSubTrigger = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.SubTrigger>,

  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;

  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;

    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (;
  <MenubarPrimitive.SubTrigger;
    ref={ref}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/ui/menubar.tsx
=======
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
    inset?: boolean;
>(({ className, inset, children, ...props }, ref) => (;
  <MenubarPrimitive.SubTrigger;
    ref={ref}
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
ursor/fix-website-loading-errors-and-merge-6662
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (;
  <MenubarPrimitive.SubTrigger;
    ref={ref}
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


      className


    {...props}
  >;
    {children}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
ursor/fix-website-loading-errors-and-merge-6662
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



    <ChevronRight className="ml-auto h-4 w-4" />

  </MenubarPrimitive.SubTrigger>

MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<

  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent;
    ref={ref}
    className={cn(
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
ursor/fix-website-loading-errors-and-merge-6662
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

      className


    {...props}
  />
))

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    { className, align = &quot;start&quot;, alignOffset = -4, sideOffset = 8, ...props }
    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    { className, align = &quot;start&quot;, alignOffset = -4, sideOffset = 8, ...props }
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },

    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },

    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },

    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },"
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },

    ref


    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content;
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
className={cn(
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
ursor/fix-website-loading-errors-and-merge-6662
className={cn(
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



        className={cn(

          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",



          className

        {...props}
      />;
    </MenubarPrimitive.Portal>;
  );
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
const MenubarItem = React.forwardRef<;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



      &quot;flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[state = open]:bg - accent data-[state = open]:text - accent - foreground & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  >;
    {children}
<ChevronRight className=&quot;ml - auto h - 4 w - 4&quot; />;
  </MenubarPrimitive.SubTrigger>));
MenubarSubTrigger.display_name = MenubarPrimitive.SubTrigger.display_name;
const MenubarSubContent = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.SubContent>;
>(({ class_name, ...props }, ref) => (
  <MenubarPrimitive.SubContent;
    ref={ref}
    className={cn (
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
      class_name)}
    {...props}
  />));
MenubarSubContent.display_name = MenubarPrimitive.SubContent.display_name;
const MenubarContent = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Content>;
>(
  (
    { class_name, align = &quot;start & quot;, align_offset = -4, side_offset = 8, ...props },
    ref) => (
    <MenubarPrimitive.Portal>;
      <MenubarPrimitive.Content;
        ref={ref}
        align={align}
        align_offset={align_offset}
        side_offset={side_offset}
className={cn (
          &quot;z - 50 min - w-[12rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
          class_name)}
        {...props}
      />;
    </MenubarPrimitive.Portal>));
MenubarContent.display_name = MenubarPrimitive.Content.display_name;
const MenubarItem = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Item>,

  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;

    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Item;
    ref={ref}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/ui/menubar.tsx
=======
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.Item>,;
    inset?: boolean;
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
ursor/fix-website-loading-errors-and-merge-6662
  React.ElementRef<typeof MenubarPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


      className


    {...props}
  />;
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
const MenubarCheckboxItem = React.forwardRef<;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>;
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;

>(({ className, children, checked, ...props }, ref) => (;
  <MenubarPrimitive.CheckboxItem;
    ref={ref}

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      className

    )}

className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
MenubarItem.display_name = MenubarPrimitive.Item.display_name;
const MenubarCheckboxItem = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.CheckboxItem>;
>(({ class_name, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}

        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}


  </MenubarPrimitive.CheckboxItem>;
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef<;

  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;


  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;

>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>;
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
const MenubarLabel = React.forwardRef<;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.Label>,;
    inset?: boolean;
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Label;
    ref={ref}
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;
      inset && &quot;pl-8&quot;
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;
    ref={ref}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      className

    )}

  </MenubarPrimitive.CheckboxItem>));
MenubarCheckboxItem.display_name = MenubarPrimitive.CheckboxItem.display_name;
const MenubarRadioItem = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}

        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
<<<<<<< HEAD
=======
<<<<<<< HEAD
  </MenubarPrimitive.RadioItem>;
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
const MenubarLabel = React.forwardRef<;
<<<<<<< HEAD
=======
  React.ElementRef<typeof MenubarPrimitive.Label>;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/menubar.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  React.ElementRef<typeof MenubarPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;

    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Label;
    ref={ref}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;
      inset && &quot;pl-8&quot;
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",

      inset && "pl-8",


      className


    {...props}
  />;
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
const MenubarSeparator = React.forwardRef<;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.Separator>;
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



  React.ElementRef<typeof MenubarPrimitive.Separator>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;

>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Separator;
    ref={ref}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/ui/menubar.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot; className)}
  React.ElementRef<typeof MenubarPrimitive.Separator>;
  React.ElementRef<typeof MenubarPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Separator;
    ref={ref}
    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot; className)}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
/>
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName
const MenubarShortcut = ({
  className

  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/ui/menubar.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;
        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
/>));
MenubarSeparator.display_name = MenubarPrimitive.Separator.display_name;
const MenubarShortcut = ({
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {
  return (
    <span;
      className={cn (
        &quot;ml - auto text - xs tracking - widest text - muted - foreground & quot;,
        class_name)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {...props}
    />;
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
MenubarShortcut.displayname = &quot;MenubarShortcut&quot;
export {
  Menubar
  MenubarMenu
  MenubarTrigger
  MenubarContent
  MenubarItem
  MenubarSeparator
  MenubarLabel
  MenubarCheckboxItem
  MenubarRadioGroup
  MenubarRadioItem
  MenubarPortal
  MenubarSubContent
  MenubarSubTrigger
  MenubarGroup
  MenubarSub
  MenubarShortcut}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


      )}

      {...props}
    />;
  );
}

MenubarShortcut.displayname = "MenubarShortcut"




export {

  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
<<<<<<< HEAD

  MenubarSubTrigger,

=======
<<<<<<< HEAD
  MenubarSubTrigger,
=======
<<<<<<< HEAD:src-disabled/components/ui/menubar.tsx
  MenubarSubTrigger,
=======
  MenubarSubTrigger,
<<<<<<< HEAD
  MenubarSub,;
  MenubarShortcut};
  MenubarSub,
  MenubarShortcut}
;
  MenubarGroup,
=======
  MenubarGroup,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/menubar.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
