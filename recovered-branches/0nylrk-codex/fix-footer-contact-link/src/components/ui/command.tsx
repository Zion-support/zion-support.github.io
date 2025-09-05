import * as React from &quot;react&quot;
import { Command as CommandPrimitive } from &quot;cmdk&quot;
import { Search } from &quot;lucide-react&quot;

import { cn } from &quot;@/lib/utils&quot;
import { Dialog, DialogContent } from &quot;@/components/ui/dialog&quot;
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(_({className, _...props}, ref) => (
  <CommandPrimitive,
ref={ref}
    className={cn(
      &quot;flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground&quot;,
      className    )}
    {_...props}
  />
))
Command.displayName = CommandPrimitive.displayName,
interface CommandDialogProps,
extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = (_{children, _...props}: CommandDialogProps) => {return (
    <Dialog {...props}>
      <DialogContent className=&quot;overflow-hidden p-0 shadow-lg&quot;>
        <Command className=&quot;[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]svg]:h-5 [&_[cmdk-input-wrapper]svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]svg]:h-5 [&_[cmdk-item]svg]:w-5&quot;>
          {children}        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className=&quot;flex items-center border-b px-3&quot; cmdk-input-wrapper="">    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input,
ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className
      )}
      {_...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName,
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(_({className, _...props}, ref) => (
  <CommandPrimitive.List,
ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {_...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName,
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(_(props, ref) => (
  <CommandPrimitive.Empty,
ref={ref}
    className="py-6 text-center text-sm"
    {_...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName,
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(_({className, _...props}, ref) => (
  <CommandPrimitive.Group,
ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className
    )}
    {_...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName,
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(_({className, _...props}, ref) => (
  <CommandPrimitive.Separator,
ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {_...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName,
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(_({className, _...props}, ref) => (
  <CommandPrimitive.Item,
ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", className
    )}
    {_...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName,
const CommandShortcut = (_{className, _...props}: React.HTMLAttributes<HTMLSpanElement>) => {return (
    <span,
className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground&quot;,
        className      )}
      {_...props}
    />
  )
}
CommandShortcut.displayName = &quot;CommandShortcut"

export {Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator}
