<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as SelectPrimitive from &quot;@radix-ui/react-select&quot;
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Select = SelectPrimitive.Root

const _SelectGroup = SelectPrimitive.Group

const _SelectValue = SelectPrimitive.Value

const _SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(_({_className, _children, _...props}, _ref) => (
  <SelectPrimitive.Trigger
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    {_children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className=&quot;h-4 w-4 opacity-50&quot; />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const _SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(_({_className, _...props}, _ref) => (
  <SelectPrimitive.ScrollUpButton
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;flex cursor-default items-center justify-center py-1&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "flex cursor-default items-center justify-center py-1", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    <ChevronUp className=&quot;h-4 w-4&quot; />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const _SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(_({_className, _...props}, _ref) => (
  <SelectPrimitive.ScrollDownButton
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;flex cursor-default items-center justify-center py-1&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "flex cursor-default items-center justify-center py-1", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    <ChevronDown className=&quot;h-4 w-4&quot; />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const _SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
<<<<<<< HEAD
>(({ className, children, position = &quot;popper&quot;, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        &quot;relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
        position === &quot;popper&quot; &&
          &quot;data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1&quot;,
        className
=======
>(_({_className, _children, _position = "popper", _...props}, _ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={_ref}
      className={_cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      position={_position}
      {_...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
<<<<<<< HEAD
        className={cn(
          &quot;p-1&quot;,
          position === &quot;popper&quot; &&
            &quot;h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]&quot;
=======
        className={_cn(
          "p-1", _position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
      >
        {_children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const _SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(_({_className, _...props}, _ref) => (
  <SelectPrimitive.Label
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;py-1.5 pl-8 pr-2 text-sm font-semibold&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("py-1.5 pl-8 pr-2 text-sm font-semibold", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const _SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(_({_className, _children, _...props}, _ref) => (
  <SelectPrimitive.Item
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    <span className=&quot;absolute left-2 flex h-3.5 w-3.5 items-center justify-center&quot;>
      <SelectPrimitive.ItemIndicator>
        <Check className=&quot;h-4 w-4&quot; />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{_children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const _SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(_({_className, _...props}, _ref) => (
  <SelectPrimitive.Separator
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
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {_Select, _SelectGroup, _SelectValue, _SelectTrigger, _SelectContent, _SelectLabel, _SelectItem, _SelectSeparator, _SelectScrollUpButton, _SelectScrollDownButton}
