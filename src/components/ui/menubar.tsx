<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as MenubarPrimitive from &quot;@radix-ui/react-menubar&quot;
import { Check, ChevronRight, Circle } from 'lucide-react'

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _MenubarMenu = MenubarPrimitive.Menu

const _MenubarGroup = MenubarPrimitive.Group

const _MenubarPortal = MenubarPrimitive.Portal

const _MenubarSub = MenubarPrimitive.Sub

const _MenubarRadioGroup = MenubarPrimitive.RadioGroup

const _Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(_({_className, _...props}, _ref) => (
  <MenubarPrimitive.Root
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;flex h-10 items-center space-x-1 rounded-md border bg-background p-1&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const _MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(_({_className, _...props}, _ref) => (
  <MenubarPrimitive.Trigger
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const _MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {_inset?: boolean}
>(_({_className, _inset, _children, _...props}, _ref) => (
  <MenubarPrimitive.SubTrigger
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      inset && &quot;pl-8&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", _inset && "pl-8", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
<<<<<<< HEAD
    {children}
    <ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
=======
    {_children}
    <ChevronRight className="ml-auto h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const _MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(_({_className, _...props}, _ref) => (
  <MenubarPrimitive.SubContent
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const _MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
<<<<<<< HEAD
>(
  (
    { className, align = &quot;start&quot;, alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
          className
=======
>(_(
    {_className, _align = "start", _alignOffset = -4, _sideOffset = 8, _...props}, _ref) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={_ref}
        align={_align}
        alignOffset={_alignOffset}
        sideOffset={_sideOffset}
        className={_cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
        {_...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const _MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {_inset?: boolean}
>(_({_className, _inset, _...props}, _ref) => (
  <MenubarPrimitive.Item
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", _inset && "pl-8", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const _MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(_({_className, _children, _checked, _...props}, _ref) => (
  <MenubarPrimitive.CheckboxItem
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    checked={_checked}
    {_...props}
  >
    <span className=&quot;absolute left-2 flex h-3.5 w-3.5 items-center justify-center&quot;>
      <MenubarPrimitive.ItemIndicator>
        <Check className=&quot;h-4 w-4&quot; />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {_children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const _MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(_({_className, _children, _...props}, _ref) => (
  <MenubarPrimitive.RadioItem
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    <span className=&quot;absolute left-2 flex h-3.5 w-3.5 items-center justify-center&quot;>
      <MenubarPrimitive.ItemIndicator>
        <Circle className=&quot;h-2 w-2 fill-current&quot; />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {_children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const _MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {_inset?: boolean}
>(_({_className, _inset, _...props}, _ref) => (
  <MenubarPrimitive.Label
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;,
      inset && &quot;pl-8&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "px-2 py-1.5 text-sm font-semibold", _inset && "pl-8", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const _MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(_({_className, _...props}, _ref) => (
  <MenubarPrimitive.Separator
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("-mx-1 my-1 h-px bg-muted", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const _MenubarShortcut = (_{_className, _...props}: React.HTMLAttributes<HTMLSpanElement>) => {_return (
    <span
      className={cn(
<<<<<<< HEAD
        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;,
        className
=======
        "ml-auto text-xs tracking-widest text-muted-foreground", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    />
  )
}
MenubarShortcut.displayname = &quot;MenubarShortcut&quot;

export {_Menubar, _MenubarMenu, _MenubarTrigger, _MenubarContent, _MenubarItem, _MenubarSeparator, _MenubarLabel, _MenubarCheckboxItem, _MenubarRadioGroup, _MenubarRadioItem, _MenubarPortal, _MenubarSubContent, _MenubarSubTrigger, _MenubarGroup, _MenubarSub, _MenubarShortcut}
