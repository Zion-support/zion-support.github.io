import * as React from &quot;react&quot;
import * as DropdownMenuPrimitive from &quot;@radix-ui/react-dropdown-menu&quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
import { cn } from &quot;@/lib/utils&quot;

onst DropdownMenu = DropdownMenuPrimitive.Root
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;
      inset && &quot;pl-8&quot;
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;


  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;


className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;

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


  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;


      className
    )}
  </DropdownMenuPrimitive.CheckboxItem>;
));
DropdownMenuCheckboxItem.displayName =;
  DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;


  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;


  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;

      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}

      {...props}
    />);
}

DropdownMenuShortcut.display_name = &quot;DropdownMenuShortcut & quot;
;

DropdownMenuShortcut.displayName = "DropdownMenuShortcut"


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
