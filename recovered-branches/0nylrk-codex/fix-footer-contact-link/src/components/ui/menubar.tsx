

import * as React from "react"""
import * as MenubarPrimitive from "@radix-ui/react-menubar"""
import { Check, ChevronRight, Circle } from "lucide-react"""
import { cn } from "@/lib/utils""
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>
</typeof>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
  <MenubarPrimitive.Root;
    ref={ref}
    className={cn(

"
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1","
      className;)
    )}
    {...props}
  />;

const MenubarTrigger = React.forwardRef<;


  React.ElementRef<typeof MenubarPrimitive.Trigger>,;


  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;
  <MenubarPrimitive.Trigger;


    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground","
      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;

const MenubarSubTrigger = React.forwardRef<;

import * as React from &quot;react & quot;
import * as MenubarPrimitive from &quot;@radix - ui / react - menubar & quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
const Menubar = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Root>;
>(({ class_name, ...props }, ref) => (
    className={cn (
      &quot;flex h - 10 items - center space - x-1 rounded - md border bg - background p - 1&quot;,)
      class_name)}
  />));

const MenubarTrigger = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Trigger>;
      &quot;flex cursor - default select - none items - center rounded - sm px - 3 py - 1.5 text - sm font - medium outline - none focus:bg - accent focus:text - accent - foreground data-[state = open]:bg - accent data-[state = open]:text - accent - foreground & quot;,)

const MenubarSubTrigger = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;

  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
const Menubar = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>;
    className={cn(;"
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",;"

      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",;"

  <MenubarPrimitive.SubTrigger;
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      inset && &quot;pl-8&quot;,

      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",""
      inset && "pl-8","
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {inset?: boolean;
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
  >;
    <ChevronRight className="ml-auto h-4 w-4" />"

<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />

  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
  <MenubarPrimitive.SubContent;

      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
  />

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
    <MenubarPrimitive.Portal>

      <MenubarPrimitive.Content;
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}


          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;

    </MenubarPrimitive.Portal>;
  );
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
const MenubarItem = React.forwardRef<;

      &quot;flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[state = open]:bg - accent data-[state = open]:text - accent - foreground & quot;,
      inset && &quot;pl - 8&quot;,)
    {children}
<ChevronRight className=&quot;ml - auto h - 4 w - 4&quot; />;

  </MenubarPrimitive.SubTrigger>));
MenubarSubTrigger.display_name = MenubarPrimitive.SubTrigger.display_name;
const MenubarSubContent = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.SubContent>;
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,)

const MenubarContent = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Content>;
>(
  (
    { class_name, align = &quot;start & quot;, align_offset = -4, side_offset = 8, ...props },)
    ref) => (
    <MenubarPrimitive.Portal>;

        align_offset={align_offset}
        side_offset={side_offset}
          &quot;z - 50 min - w-[12rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,)

    </MenubarPrimitive.Portal>));
MenubarContent.display_name = MenubarPrimitive.Content.display_name;
const MenubarItem = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Item> & {


  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
  <MenubarPrimitive.Item;
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,

      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",""
  React.ElementRef<typeof MenubarPrimitive.Item>;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {inset?: boolean;
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;

const MenubarCheckboxItem = React.forwardRef<;


  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;


  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;
  <MenubarPrimitive.CheckboxItem;


      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      &quot;relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,

const MenubarCheckboxItem = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.CheckboxItem>;
>(({ class_name, children, checked, ...props }, ref) => (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,)
    checked={checked}

    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
</span>
      <MenubarPrimitive.ItemIndicator>;

        <Check className=&quot;h - 4 w - 4&quot; />;

      </MenubarPrimitive.ItemIndicator>;
    </span>;
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;


  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;
  <MenubarPrimitive.RadioItem;


  </MenubarPrimitive.CheckboxItem>));

const MenubarRadioItem = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;


        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;

  </MenubarPrimitive.RadioItem>));
MenubarRadioItem.display_name = MenubarPrimitive.RadioItem.display_name;
const MenubarLabel = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Label> & {

  React.ElementRef<typeof MenubarPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;"
        <Check className="h-4 w-4" />;"

  </MenubarPrimitive.CheckboxItem>;
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef<;
        <Circle className="h-2 w-2 fill-current" />;"

  </MenubarPrimitive.RadioItem>;
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
const MenubarLabel = React.forwardRef<;
  <MenubarPrimitive.Label;
      &quot;px-2 py-1.5 text-sm font-semibold&quot;,

      "px-2 py-1.5 text-sm font-semibold",""
  React.ElementRef<typeof MenubarPrimitive.Label>;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {inset?: boolean;
      &quot;px-2 py-1.5 text-sm font-semibold&quot;

const MenubarSeparator = React.forwardRef<;


  React.ElementRef<typeof MenubarPrimitive.Separator>,;


  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
const MenubarSeparator = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Separator>;
  <MenubarPrimitive.Separator;
    ref={ref})
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}

        "ml-auto text-xs tracking-widest text-muted-foreground","
        className;

}: React.HTMLAttributes < HTMLSpanElement>) =>: any {
  // TODO: Implement
}
  return (
    <span;
        &quot;ml - auto text - xs tracking - widest text - muted - foreground & quot;,)
    />);
    ref={ref}"
    className={cn("-mx-1 my-1 h-px bg-muted", className)}"

} React.HTMLAttributes<HTMLSpanElement>) => {;

        "ml-auto text-xs tracking-widest text-muted-foreground",;"
  MenubarShortcut} const MenubarMenu = MenubarPrimitive.Menu const MenubarGroup = MenubarPrimitive.Group const MenubarPortal = MenubarPrimitive.Portal const MenubarSub = MenubarPrimitive.Sub const MenubarRadioGroup = MenubarPrimitive.RadioGroup const Menubar = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> > ( ({
</typeof>)
}, ref) => (<MenubarPrimitive.Root) 
}{
  ...props;
}/>) ) Menubar.displayName = MenubarPrimitive.Root.displayName const MenubarTrigger = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Trigger>;

React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> > ( ({
}, ref) => (<MenubarPrimitive.Trigger) 
}/>) ) MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName const MenubarSubTrigger = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.SubTrigger>;

React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
}, ref) => (<MenubarPrimitive.SubTrigger) 
}> </MenubarPrimitive.SubTrigger>) ) MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName const MenubarSubContent = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.SubContent>;

React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> > ( ({
}, ref) => (<MenubarPrimitive.SubContent) 
}/>) ) MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName const MenubarContent = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Content>;

React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>) 
}/> </MenubarPrimitive.Portal>) ) MenubarContent.displayName = MenubarPrimitive.Content.displayName const MenubarItem = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
}, ref) => (<MenubarPrimitive.Item) 
}/>) ) MenubarItem.displayName = MenubarPrimitive.Item.displayName const MenubarCheckboxItem = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.CheckboxItem>;

React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> > ( ({
}, ref) => (<MenubarPrimitive.CheckboxItem) 
}checked= {
  checked;
  ...props;"
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <MenubarPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </MenubarPrimitive.ItemIndicator> </span> {"

}</MenubarPrimitive.CheckboxItem>) ) MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName const MenubarRadioItem = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.RadioItem>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> > ( ({
}, ref) => (<MenubarPrimitive.RadioItem) 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <MenubarPrimitive.ItemIndicator> <Circle className="h-2 w-2 fill-current" /> </MenubarPrimitive.ItemIndicator> </span> {"

}</MenubarPrimitive.RadioItem>) ) MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName const MenubarLabel = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Label>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
}, ref) => (<MenubarPrimitive.Label) 
}/>) ) MenubarLabel.displayName = MenubarPrimitive.Label.displayName const MenubarSeparator = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Separator>;

React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> > ( ({
}, ref) => (<MenubarPrimitive.Separator />) ) MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName const MenubarShortcut = ({
)
}: React.HTMLAttributes<HTMLSpanElement>) => {

  return (<span className= {)
  cn () 
}/>) 
</span>"