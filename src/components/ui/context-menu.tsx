import * as React from &quot;react&quot;
import * as ContextMenuPrimitive from &quot;@radix-ui/react-context-menu&quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
import { cn } from &quot;@/lib/utils&quot;

onst ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
import * as React from &quot;react & quot;
import * as ContextMenuPrimitive from &quot;@radix - ui / react - context - menu & quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
;
const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
const ContextMenuSubTrigger = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
>(({ class_name, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger;
    ref={ref}
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
      className
>>>>>>>     )}
    {...props}
  >;
    {children}
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
>>>>>>>   </ContextMenuPrimitive.SubTrigger>
ursor/fix-website-loading-errors-and-merge-6662
  </ContextMenuPrimitive.SubTrigger>
>>>>>>> ))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName
const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
      className
>>>>>>>     )}
    {...props}
  />;
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
const ContextMenuContent = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.Content>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
>>>>>>> >(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Portal>;
    <ContextMenuPrimitive.Content;
      ref={ref}
className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
>>>>>>>         className
ursor/fix-website-loading-errors-and-merge-6662
        className
>>>>>>>       )}
      {...props}
    />;
  </ContextMenuPrimitive.Portal>;
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
const ContextMenuItem = React.forwardRef<;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
>>>>>>>   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
    inset?: boolean;
>>>>>>>   }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
    inset?: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
>(({ class_name, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item;
    ref={ref}


    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      className
>>>>>>>     )}
    {...props}
  />;
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
const ContextMenuCheckboxItem = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}


    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      className
>>>>>>>     )}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
ContextMenuItem.display_name = ContextMenuPrimitive.Item.display_name;
const ContextMenuCheckboxItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.CheckboxItem>;
>(({ class_name, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    checked={checked}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <ContextMenuPrimitive.ItemIndicator>;
        <Check className=&quot;h - 4 w - 4&quot; />;
      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
  </ContextMenuPrimitive.CheckboxItem>;
));
ContextMenuCheckboxItem.displayName =;
  ContextMenuPrimitive.CheckboxItem.displayName;
const ContextMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
>>>>>>>       className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>;
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const ContextMenuLabel = React.forwardRef<;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
>>>>>>>   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
    inset?: boolean;
>>>>>>>   }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Label;
    ref={ref}
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;
      inset && &quot;pl-8&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
    ref={ref}


    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      className
    )}
  </ContextMenuPrimitive.CheckboxItem>));
ContextMenuCheckboxItem.display_name =;
  ContextMenuPrimitive.CheckboxItem.display_name;
const ContextMenuRadioItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <ContextMenuPrimitive.ItemIndicator>;
        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;
      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
    {children}

  </ContextMenuPrimitive.RadioItem>));
ContextMenuRadioItem.display_name = ContextMenuPrimitive.RadioItem.display_name;
const ContextMenuLabel = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Label> & {

  React.ElementRef<typeof ContextMenuPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
    inset?: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
>(({ class_name, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label;
    ref={ref}


    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      className
>>>>>>>     )}
    {...props}
  />;
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
const ContextMenuSeparator = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.Separator>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
>>>>>>> >(({ className, ...props }, ref) => (;
className={cn (
      &quot;px - 2 py - 1.5 text - sm font - semibold text - foreground & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
ContextMenuLabel.display_name = ContextMenuPrimitive.Label.display_name;
const ContextMenuSeparator = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  <ContextMenuPrimitive.Separator;
    ref={ref}
    className={cn(&quot;-mx-1 my-1 h-px bg-border&quot; className)}
    {...props}
/>
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName
const ContextMenuShortcut = ({
  className
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;
>>>>>>>         className
      )}
      {...props}
    />;
  );
}
ContextMenuShortcut.displayName = &quot;ContextMenuShortcut&quot;
export {
  ContextMenu
  ContextMenuTrigger
  ContextMenuContent
  ContextMenuItem
  ContextMenuCheckboxItem
  ContextMenuRadioItem
  ContextMenuLabel
  ContextMenuSeparator
  ContextMenuShortcut
  ContextMenuGroup
  ContextMenuPortal
  ContextMenuSub
  ContextMenuSubContent
  ContextMenuSubTrigger
  ContextMenuRadioGroup}
  ContextMenuSubTrigger,;
  ContextMenuRadioGroup};
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
        className
      )}
/>));
ContextMenuSeparator.display_name = ContextMenuPrimitive.Separator.display_name;
const ContextMenuShortcut = ({
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {
  return (
    <span;
      className={cn (
        &quot;ml - auto text - xs tracking - widest text - muted - foreground & quot;,
        class_name)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {...props}
    />);
}

ContextMenuShortcut.display_name = &quot;ContextMenuShortcut & quot;
;
ContextMenuShortcut.displayName = "ContextMenuShortcut"


export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 