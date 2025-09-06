<<<<<<< HEAD


const MenubarMenu = MenubarPrimitive.Menu
=======
import * as React from &quot;react&quot;
import * as MenubarPrimitive from &quot;@radix-ui/react-menubar&quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;

onst MenubarMenu = MenubarPrimitive.Menu
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from 'lucide-react'
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======

import { cn } from "@/lib/utils"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const MenubarMenu = MenubarPrimitive.Menu
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarSub = MenubarPrimitive.Sub
const MenubarRadioGroup = MenubarPrimitive.RadioGroup
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
      &quot;flex h-10 items-center space-x-1 rounded-md border bg-background p-1&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      &quot;flex h-10 items-center space-x-1 rounded-md border bg-background p-1&quot;
=======
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
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
Menubar.displayName = MenubarPrimitive.Root.displayName;
const MenubarTrigger = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof MenubarPrimitive.Trigger>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;
=======
  React.ElementRef<typeof MenubarPrimitive.Trigger>;
=======
  React.ElementRef<typeof MenubarPrimitive.Trigger>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Trigger;
    ref={ref}
<<<<<<< HEAD
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
<<<<<<< HEAD
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Trigger;
    ref={ref}

<<<<<<< HEAD
=======

    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
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
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
const MenubarSubTrigger = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
    inset?: boolean;

  }
>(({ className, inset, children, ...props }, ref) => (;
  <MenubarPrimitive.SubTrigger;
    ref={ref}

=======
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
>>>>>>>   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
    inset?: boolean;
>>>>>>>   }
>(({ className, inset, children, ...props }, ref) => (;
  <MenubarPrimitive.SubTrigger;
    ref={ref}
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
=======
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {inset?: boolean;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, children, ...props }, ref) => (;
  <MenubarPrimitive.SubTrigger;
    ref={ref}
<<<<<<< HEAD


    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
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
>>>>>>>   </MenubarPrimitive.SubTrigger>
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
  </MenubarPrimitive.SubTrigger>
>>>>>>> ))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName
const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
>>>>>>>     )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName
const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
<<<<<<< HEAD
<<<<<<< HEAD

    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },

    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },

=======
    { className, align = &quot;start&quot;, alignOffset = -4, sideOffset = 8, ...props }
    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
>>>>>>> >>>>>>>     ref
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    { className, align = &quot;start&quot;, alignOffset = -4, sideOffset = 8, ...props }
=======
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },
=======
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref
>>>>>>>   ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
<<<<<<< HEAD
<<<<<<< HEAD

=======
className={cn(
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
>>>>>>>           className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
className={cn(
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          className
>>>>>>>         )}
        {...props}
      />;
    </MenubarPrimitive.Portal>;
  );
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
const MenubarItem = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

  React.ElementRef<typeof MenubarPrimitive.Item>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
    inset?: boolean;

  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Item;
    ref={ref}

=======
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.Item>,;
>>>>>>>   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
    inset?: boolean;
>>>>>>>   }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
=======
  React.ElementRef<typeof MenubarPrimitive.Item>;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {inset?: boolean;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  React.ElementRef<typeof MenubarPrimitive.Item>,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Item;
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
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
const MenubarCheckboxItem = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;
=======
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>;
=======
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>(({ className, children, checked, ...props }, ref) => (;
  <MenubarPrimitive.CheckboxItem;
    ref={ref}
<<<<<<< HEAD
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
<<<<<<< HEAD
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <MenubarPrimitive.CheckboxItem;
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
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>;
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof MenubarPrimitive.RadioItem>;
=======
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD

      className
=======
  React.ElementRef<typeof MenubarPrimitive.RadioItem>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
>>>>>>>       className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

  React.ElementRef<typeof MenubarPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
    inset?: boolean;

  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Label;
    ref={ref}

=======
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.Label>,;
>>>>>>>   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
    inset?: boolean;
>>>>>>>   }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Label;
    ref={ref}
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;
      inset && &quot;pl-8&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;
    ref={ref}


    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
<<<<<<< HEAD

  </MenubarPrimitive.RadioItem>));
MenubarRadioItem.display_name = MenubarPrimitive.RadioItem.display_name;
const MenubarLabel = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Label> & {

  React.ElementRef<typeof MenubarPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
  </MenubarPrimitive.RadioItem>;
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
const MenubarLabel = React.forwardRef<;
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.Label>;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {inset?: boolean;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  React.ElementRef<typeof MenubarPrimitive.Label>,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Label;
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
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
const MenubarSeparator = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof MenubarPrimitive.Separator>;
>>>>>>>   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>>>>>>> >(({ className, ...props }, ref) => (;
className={cn (
      &quot;px - 2 py - 1.5 text - sm font - semibold & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
MenubarLabel.display_name = MenubarPrimitive.Label.display_name;
const MenubarSeparator = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  <MenubarPrimitive.Separator;
    ref={ref}
<<<<<<< HEAD

=======
    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot; className)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  React.ElementRef<typeof MenubarPrimitive.Separator>;
=======
  React.ElementRef<typeof MenubarPrimitive.Separator>,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Separator;
    ref={ref}
<<<<<<< HEAD
    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot; className)}
=======
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
  MenubarSub,;
  MenubarShortcut};
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
        className
      )}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {...props}
    />);
}

MenubarShortcut.displayname = &quot;MenubarShortcut & quot;
;
MenubarShortcut.displayname = "MenubarShortcut"


=======
=======
MenubarShortcut.displayname = "MenubarShortcut"

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  MenubarSubTrigger,
  MenubarGroup,
<<<<<<< HEAD



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  MenubarSub,;
  MenubarShortcut};
=======
  MenubarSub,
  MenubarShortcut}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
