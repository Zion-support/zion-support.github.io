import * as React from "react"


const _Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(_({_className, _...props}, _ref) => (
  <CommandPrimitive
    ref={_ref}
    className={_cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", _className
    )}
    {_...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const _CommandDialog = (_{_children, _...props}: CommandDialogProps) => {_return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <DialogHeader>
          <DialogTitle className="sr-only">Command Menu</DialogTitle>
        </DialogHeader>
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {_children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const _CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(_({_className, _...props}, _ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={_ref}
      className={_cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", _className
      )}
      {_...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const _CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(_({_className, _...props}, _ref) => (
  <CommandPrimitive.List
    ref={_ref}
    className={_cn("max-h-[300px] overflow-y-auto overflow-x-hidden", _className)}
    {_...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const _CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(_(props, _ref) => (
  <CommandPrimitive.Empty
    ref={_ref}
    className="py-6 text-center text-sm"
    {_...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const _CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(_({_className, _...props}, _ref) => (
  <CommandPrimitive.Group
    ref={_ref}
    className={_cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", _className
    )}
    {_...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const _CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(_({_className, _...props}, _ref) => (
  <CommandPrimitive.Separator
    ref={_ref}
    className={_cn("-mx-1 h-px bg-border", _className)}
    {_...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const _CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(_({_className, _...props}, _ref) => (
  <CommandPrimitive.Item
    ref={_ref}
    className={_cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", _className
    )}
    {_...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const _CommandShortcut = (_{_className, _...props}: React.HTMLAttributes<HTMLSpanElement>) => {_return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground", _className
      )}
      {_...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {_Command, _CommandDialog, _CommandInput, _CommandList, _CommandEmpty, _CommandGroup, _CommandItem, _CommandShortcut, _CommandSeparator}
