import * as React from &quot;react&quot;
import * as MenubarPrimitive from &quot;@radix-ui/react-menubar&quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
import { cn } from &quot;@/lib/utils&quot;

onst MenubarMenu = MenubarPrimitive.Menu
      &quot;flex h-10 items-center space-x-1 rounded-md border bg-background p-1&quot;


  React.ElementRef<typeof MenubarPrimitive.Trigger>,;



import * as React from &quot;react & quot;
import * as MenubarPrimitive from &quot;@radix - ui / react - menubar & quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
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
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.SubTrigger> & {


  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
    { className, align = &quot;start&quot;, alignOffset = -4, sideOffset = 8, ...props }
    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
className={cn(
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;

className={cn (
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
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Item> & {


  React.ElementRef<typeof MenubarPrimitive.Item>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;


  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;


      className
    )}
  </MenubarPrimitive.CheckboxItem>;
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.RadioItem>;
  React.ElementRef<typeof MenubarPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;


  React.ElementRef<typeof MenubarPrimitive.Separator>,;


  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
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
        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;
  MenubarGroup,



