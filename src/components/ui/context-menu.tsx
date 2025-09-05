import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"


const _ContextMenu = ContextMenuPrimitive.Root

const _ContextMenuTrigger = ContextMenuPrimitive.Trigger

const _ContextMenuGroup = ContextMenuPrimitive.Group

const _ContextMenuPortal = ContextMenuPrimitive.Portal

const _ContextMenuSub = ContextMenuPrimitive.Sub

const _ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const _ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {_inset?: boolean}
>(_({_className, _inset, _children, _...props}, _ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={_ref}
    className={_cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", _inset && "pl-8", _className
    )}
    {_...props}
  >
    {_children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const _ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(_({_className, _...props}, _ref) => (
  <ContextMenuPrimitive.SubContent
    ref={_ref}
    className={_cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _className
    )}
    {_...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const _ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(_({_className, _...props}, _ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={_ref}
      className={_cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _className
      )}
      {_...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const _ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {_inset?: boolean}
>(_({_className, _inset, _...props}, _ref) => (
  <ContextMenuPrimitive.Item
    ref={_ref}
    className={_cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", _inset && "pl-8", _className
    )}
    {_...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const _ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(_({_className, _children, _checked, _...props}, _ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={_ref}
    className={_cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", _className
    )}
    checked={_checked}
    {_...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {_children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const _ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(_({_className, _children, _...props}, _ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={_ref}
    className={_cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", _className
    )}
    {_...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {_children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const _ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {_inset?: boolean}
>(_({_className, _inset, _...props}, _ref) => (
  <ContextMenuPrimitive.Label
    ref={_ref}
    className={_cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground", _inset && "pl-8", _className
    )}
    {_...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const _ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(_({_className, _...props}, _ref) => (
  <ContextMenuPrimitive.Separator
    ref={_ref}
    className={_cn("-mx-1 my-1 h-px bg-border", _className)}
    {_...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const _ContextMenuShortcut = (_{_className, _...props}: React.HTMLAttributes<HTMLSpanElement>) => {_return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground", _className
      )}
      {_...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {_ContextMenu, _ContextMenuTrigger, _ContextMenuContent, _ContextMenuItem, _ContextMenuCheckboxItem, _ContextMenuRadioItem, _ContextMenuLabel, _ContextMenuSeparator, _ContextMenuShortcut, _ContextMenuGroup, _ContextMenuPortal, _ContextMenuSub, _ContextMenuSubContent, _ContextMenuSubTrigger, _ContextMenuRadioGroup}
