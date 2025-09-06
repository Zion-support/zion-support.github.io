<<<<<<< HEAD


const ContextMenu = ContextMenuPrimitive.Root
=======
import * as React from &quot;react&quot;
import * as ContextMenuPrimitive from &quot;@radix-ui/react-context-menu&quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;

onst ContextMenu = ContextMenuPrimitive.Root
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======

import { cn } from "@/lib/utils"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const ContextMenu = ContextMenuPrimitive.Root
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
>(({ className, inset, children, ...props }, ref) => (;
  <ContextMenuPrimitive.SubTrigger;
    ref={ref}
<<<<<<< HEAD

=======
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
<<<<<<< HEAD
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
>>>>>>>     )}
    {...props}
  >;
    {children}
<<<<<<< HEAD
<<<<<<< HEAD

=======
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
>>>>>>>   </ContextMenuPrimitive.SubTrigger>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
=======
    <ChevronRight className="ml-auto h-4 w-4" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
>>>>>>>     )}
    {...props}
  />;
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
const ContextMenuContent = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof ContextMenuPrimitive.Content>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  React.ElementRef<typeof ContextMenuPrimitive.Content>;
=======
  React.ElementRef<typeof ContextMenuPrimitive.Content>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
>>>>>>> >(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Portal>;
    <ContextMenuPrimitive.Content;
      ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD

=======
className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
>>>>>>>         className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className
>>>>>>>       )}
      {...props}
    />;
  </ContextMenuPrimitive.Portal>;
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
const ContextMenuItem = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

  React.ElementRef<typeof ContextMenuPrimitive.Item>,;

  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
    inset?: boolean;

  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Item;
    ref={ref}

=======
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
=======
  React.ElementRef<typeof ContextMenuPrimitive.Item>;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {inset?: boolean;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Item;
    ref={ref}
<<<<<<< HEAD


    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
>>>>>>>     )}
    {...props}
  />;
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
const ContextMenuCheckboxItem = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
=======
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>;
=======
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>(({ className, children, checked, ...props }, ref) => (;
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}
<<<<<<< HEAD
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
<<<<<<< HEAD
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}

<<<<<<< HEAD
=======

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      className
    )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>;
));
ContextMenuCheckboxItem.displayName =;
  ContextMenuPrimitive.CheckboxItem.displayName;
const ContextMenuRadioItem = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
=======
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD

      className
=======
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
>>>>>>>       className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

  React.ElementRef<typeof ContextMenuPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
    inset?: boolean;

  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Label;
    ref={ref}

=======
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
=======
<<<<<<< HEAD
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      className
    )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
<<<<<<< HEAD

  </ContextMenuPrimitive.RadioItem>));
ContextMenuRadioItem.display_name = ContextMenuPrimitive.RadioItem.display_name;
const ContextMenuLabel = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Label> & {

  React.ElementRef<typeof ContextMenuPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
  </ContextMenuPrimitive.RadioItem>;
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const ContextMenuLabel = React.forwardRef<;
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.Label>;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {inset?: boolean;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Label;
    ref={ref}
<<<<<<< HEAD


    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;
      inset && &quot;pl-8&quot;
=======
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
>>>>>>>     )}
    {...props}
  />;
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
const ContextMenuSeparator = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof ContextMenuPrimitive.Separator>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
    className={cn(&quot;-mx-1 my-1 h-px bg-border&quot; className)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  React.ElementRef<typeof ContextMenuPrimitive.Separator>;
=======
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Separator;
    ref={ref}
<<<<<<< HEAD
    className={cn(&quot;-mx-1 my-1 h-px bg-border&quot; className)}
=======
    className={cn("-mx-1 my-1 h-px bg-border", className)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

        className
=======
        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;
>>>>>>>         className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;
=======
        "ml-auto text-xs tracking-widest text-muted-foreground",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        className
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )}
      {...props}
    />;
  );
}
<<<<<<< HEAD

=======
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
<<<<<<< HEAD
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


=======
=======
ContextMenuShortcut.displayName = "ContextMenuShortcut"

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  ContextMenuSubTrigger,;
  ContextMenuRadioGroup};
=======
  ContextMenuSubTrigger,
  ContextMenuRadioGroup}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
