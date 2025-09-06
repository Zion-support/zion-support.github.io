import * as React from &quot;react&quot;
import * as DropdownMenuPrimitive from &quot;@radix-ui/react-dropdown-menu&quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean

  }
>(({ class_name, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref}

<<<<<<< HEAD
className={cn(


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;,
      inset && &quot;pl-8&quot;,

=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      className
    )}
    {...props}
  >;
    {children}
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
    <ChevronRight className="ml-auto h-4 w-4" />


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
    className={cn(
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />;
));
DropdownMenuSubContent.displayName =;
  DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Content>;
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
>(({ className, sideOffset = 4, ...props }, ref) => (;
  <DropdownMenuPrimitive.Portal>;
    <DropdownMenuPrimitive.Content;
      ref={ref}
      sideOffset={sideOffset}
<<<<<<< HEAD

className={cn(
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
=======
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        className
      )}
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
    inset?: boolean;
  }
>(({ class_name, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item;
    ref={ref}

<<<<<<< HEAD
className={cn(


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,

=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      className
    )}
    {...props}
  />;
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}
<<<<<<< HEAD

className={cn(
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      className
    )}

    checked={checked}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Check className=&quot;h - 4 w - 4&quot; />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
  </DropdownMenuPrimitive.CheckboxItem>;
));
DropdownMenuCheckboxItem.displayName =;
  DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD

className={cn(
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      className
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
  React.ElementRef<typeof DropdownMenuPrimitive.Label>;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
    inset?: boolean;
  }
>(({ class_name, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label;
    ref={ref}

<<<<<<< HEAD
className={cn(


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

      &quot;px-2 py-1.5 text-sm font-semibold&quot;,
      inset && &quot;pl-8&quot;,

=======
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      className
    )}
    {...props}
  />;
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;

  <DropdownMenuPrimitive.Separator;
    ref={ref}
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}
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
      {...props}
    />);
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
  DropdownMenuSubTrigger,
<<<<<<< HEAD

  DropdownMenuRadioGroup};
  DropdownMenuRadioGroup}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
