

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
const ContextMenuSubTrigger = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {;
  <ContextMenuPrimitive.SubTrigger;
    ref={ref}
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      inset && &quot;pl-8&quot;,

    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",""
      inset && "pl-8","
  })
>(({ className, inset, children, ...props }, ref) => (;

className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
      className;)
    )}
    {...props}
  >;
"
    <ChevronRight className="ml-auto h-4 w-4" />"

<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />

  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
  <ContextMenuPrimitive.SubContent;

      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
  />;

const ContextMenuContent = React.forwardRef<;


  React.ElementRef<typeof ContextMenuPrimitive.Content>,;


  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
  <ContextMenuPrimitive.Portal>;

    <ContextMenuPrimitive.Content;


        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;

  </ContextMenuPrimitive.Portal>;
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
const ContextMenuItem = React.forwardRef<;

className={cn (
      &quot;flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[state = open]:bg - accent data-[state = open]:text - accent - foreground & quot;,
      inset && &quot;pl - 8&quot;,)
      class_name)}
    {children}
<ChevronRight className=&quot;ml - auto h - 4 w - 4&quot; />;

  </ContextMenuPrimitive.SubTrigger>));
ContextMenuSubTrigger.display_name = ContextMenuPrimitive.SubTrigger.display_name;
const ContextMenuSubContent = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.SubContent>;
>(({ class_name, ...props }, ref) => (
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,)
  />));

const ContextMenuContent = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Content>;

        &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md animate - in fade - in - 80 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,)

  </ContextMenuPrimitive.Portal>));
ContextMenuContent.display_name = ContextMenuPrimitive.Content.display_name;
const ContextMenuItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;

  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
</typeof>"
    <ChevronRight className="ml-auto h-4 w-4" />;"

  </ContextMenuPrimitive.SubTrigger>;
const ContextMenuSubContent = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>;
    className={cn(;"
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;"


        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;"

  <ContextMenuPrimitive.Item;
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,

      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",""
  React.ElementRef<typeof ContextMenuPrimitive.Item>;

  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {inset?: boolean;
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;

const ContextMenuCheckboxItem = React.forwardRef<;


  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;


  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
  <ContextMenuPrimitive.CheckboxItem;


      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      &quot;relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,

const ContextMenuCheckboxItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.CheckboxItem>;
>(({ class_name, children, checked, ...props }, ref) => (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,)
    checked={checked}

    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
</span>
      <ContextMenuPrimitive.ItemIndicator>;

        <Check className=&quot;h - 4 w - 4&quot; />;

      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;


  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
  <ContextMenuPrimitive.RadioItem;
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
  </ContextMenuPrimitive.CheckboxItem>));

const ContextMenuRadioItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (


        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;

  </ContextMenuPrimitive.RadioItem>));
ContextMenuRadioItem.display_name = ContextMenuPrimitive.RadioItem.display_name;
const ContextMenuLabel = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Label> & {

  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;"
        <Check className="h-4 w-4" />;"

  </ContextMenuPrimitive.CheckboxItem>;
ContextMenuCheckboxItem.displayName =;
  ContextMenuPrimitive.CheckboxItem.displayName;
const ContextMenuRadioItem = React.forwardRef<;
        <Circle className="h-2 w-2 fill-current" />;"

  </ContextMenuPrimitive.RadioItem>;
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const ContextMenuLabel = React.forwardRef<;
  <ContextMenuPrimitive.Label;
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;,

      "px-2 py-1.5 text-sm font-semibold text-foreground",""
  React.ElementRef<typeof ContextMenuPrimitive.Label>;

  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {inset?: boolean;
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;

const ContextMenuSeparator = React.forwardRef<;


  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;


  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
const ContextMenuSeparator = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Separator>;
  <ContextMenuPrimitive.Separator;
    ref={ref})
    className={cn (&quot;-mx - 1 my - 1 h - px bg - border & quot;, class_name)}

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
    className={cn("-mx-1 my-1 h-px bg-border", className)}"

} React.HTMLAttributes<HTMLSpanElement>) => {;

        "ml-auto text-xs tracking-widest text-muted-foreground",;"
  ContextMenuRadioGroup} const ContextMenu = ContextMenuPrimitive.Root const ContextMenuTrigger = ContextMenuPrimitive.Trigger const ContextMenuGroup = ContextMenuPrimitive.Group const ContextMenuPortal = ContextMenuPrimitive.Portal const ContextMenuSub = ContextMenuPrimitive.Sub const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup const ContextMenuSubTrigger = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>;
}, ref) => (<ContextMenuPrimitive.SubTrigger) 
}{
  ...props;
}> </ContextMenuPrimitive.SubTrigger>) ) ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName const ContextMenuSubContent = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.SubContent>;

React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> > ( ({
</typeof>)
}, ref) => (<ContextMenuPrimitive.SubContent) 
}/>) ) ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName const ContextMenuContent = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Content>;

React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> > ( ({
}, ref) => (<ContextMenuPrimitive.Portal> <ContextMenuPrimitive.Content) 

}/> </ContextMenuPrimitive.Portal>) ) ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName const ContextMenuItem = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
}, ref) => (<ContextMenuPrimitive.Item) 
}/>) ) ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName const ContextMenuCheckboxItem = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>;

React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> > ( ({
}, ref) => (<ContextMenuPrimitive.CheckboxItem) 
}checked= {
  checked;
  ...props;"
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <ContextMenuPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </ContextMenuPrimitive.ItemIndicator> </span> {"

}</ContextMenuPrimitive.CheckboxItem>) ) ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName const ContextMenuRadioItem = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> > ( ({
}, ref) => (<ContextMenuPrimitive.RadioItem) 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <ContextMenuPrimitive.ItemIndicator> <Circle className="h-2 w-2 fill-current" /> </ContextMenuPrimitive.ItemIndicator> </span> {"

}</ContextMenuPrimitive.RadioItem>) ) ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName const ContextMenuLabel = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Label>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
}, ref) => (<ContextMenuPrimitive.Label) 
}/>) ) ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName const ContextMenuSeparator = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Separator>;

React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> > ( ({
}, ref) => (<ContextMenuPrimitive.Separator />) ) ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName const ContextMenuShortcut = ({
)
}: React.HTMLAttributes<HTMLSpanElement>) => {

  return (<span className= {)
  cn () 
}/>) 
</span>"