<<<<<<< HEAD


const DropdownMenu = DropdownMenuPrimitive.Root
=======
import * as React from &quot;react&quot;
import * as DropdownMenuPrimitive from &quot;@radix-ui/react-dropdown-menu&quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;

onst DropdownMenu = DropdownMenuPrimitive.Root
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======

import { cn } from "@/lib/utils"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const DropdownMenu = DropdownMenuPrimitive.Root
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
<<<<<<< HEAD
import * as React from &quot;react & quot;
import * as DropdownMenuPrimitive from &quot;@radix - ui / react - dropdown - menu & quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
;
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
>(({ className, inset, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref}
<<<<<<< HEAD

=======
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;
      inset && &quot;pl-8&quot;
<<<<<<< HEAD
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
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
>>>>>>>   </DropdownMenuPrimitive.SubTrigger>
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
  </DropdownMenuPrimitive.SubTrigger>
>>>>>>> ))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
DropdownMenuSubContent.displayName =;
  DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof DropdownMenuPrimitive.Content>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Content>;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
>>>>>>> >(({ className, sideOffset = 4, ...props }, ref) => (;
  <DropdownMenuPrimitive.Portal>;
    <DropdownMenuPrimitive.Content;
      ref={ref}
      sideOffset={sideOffset}
<<<<<<< HEAD
<<<<<<< HEAD

=======
className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
>>>>>>>         className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
    inset?: boolean;

  }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Item;
    ref={ref}

=======
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
>>>>>>>   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
    inset?: boolean;
>>>>>>>   }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Item>;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {inset?: boolean;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Item;
    ref={ref}
<<<<<<< HEAD


    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>(({ className, children, checked, ...props }, ref) => (;
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}
<<<<<<< HEAD
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
<<<<<<< HEAD
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}

<<<<<<< HEAD
=======

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
>>>>>>>     )}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD

      className
=======
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
>>>>>>>       className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>;
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef<;
<<<<<<< HEAD

  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
    inset?: boolean;

  }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Label;
    ref={ref}

=======
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
>>>>>>>   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
    inset?: boolean;
>>>>>>>   }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Label;
    ref={ref}
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;
      inset && &quot;pl-8&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}


    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      className
    )}
  </DropdownMenuPrimitive.CheckboxItem>));
DropdownMenuCheckboxItem.display_name =;
  DropdownMenuPrimitive.CheckboxItem.display_name;
const DropdownMenuRadioItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none transition - colors focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
<<<<<<< HEAD

  </DropdownMenuPrimitive.RadioItem>));
DropdownMenuRadioItem.display_name = DropdownMenuPrimitive.RadioItem.display_name;
const DropdownMenuLabel = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Label> & {

  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
  </DropdownMenuPrimitive.RadioItem>;
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef<;
<<<<<<< HEAD
  React.ElementRef<typeof DropdownMenuPrimitive.Label>;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {inset?: boolean;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Label;
    ref={ref}
<<<<<<< HEAD


    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;
      inset && &quot;pl-8&quot;
=======
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
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
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>>>>>>> >(({ className, ...props }, ref) => (;
className={cn (
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  <DropdownMenuPrimitive.Separator;
    ref={ref}
<<<<<<< HEAD

=======
    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot; className)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    {...props}

/>));
DropdownMenuSeparator.display_name = DropdownMenuPrimitive.Separator.display_name;
const DropdownMenuShortcut = ({
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {

  return (
    <span;
      className={cn (&quot;ml - auto text - xs tracking - widest opacity - 60 & quot;, class_name)}
  return (
    <span
<<<<<<< HEAD

      {...props}
    />;
  );
}

=======
      className={cn(&quot;ml-auto text-xs tracking-widest opacity-60&quot; className)}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>       {...props}
    />);
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <DropdownMenuPrimitive.Separator;
    ref={ref}
<<<<<<< HEAD
    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot; className)}
=======
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    {...props}
/>
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
const DropdownMenuShortcut = ({
  className
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
<<<<<<< HEAD
      className={cn(&quot;ml-auto text-xs tracking-widest opacity-60&quot; className)}
=======
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      {...props}
    />;
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
DropdownMenuShortcut.displayName = &quot;DropdownMenuShortcut&quot;
export {
  DropdownMenu
  DropdownMenuTrigger
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuCheckboxItem
  DropdownMenuRadioItem
  DropdownMenuLabel
  DropdownMenuSeparator
  DropdownMenuShortcut
  DropdownMenuGroup
  DropdownMenuPortal
  DropdownMenuSub
  DropdownMenuSubContent
  DropdownMenuSubTrigger
  DropdownMenuRadioGroup}
<<<<<<< HEAD
  DropdownMenuSubTrigger,;
  DropdownMenuRadioGroup};
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
<<<<<<< HEAD
  DropdownMenuSubTrigger,;
  DropdownMenuRadioGroup};
=======
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
