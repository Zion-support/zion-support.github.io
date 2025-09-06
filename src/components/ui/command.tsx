<<<<<<< HEAD
import * as React from 'react'
import {Command, as, CommandPrimitive} from 'cmdk'
import {Search} from 'lucide-react'
import {cn} from '@/lib/utils'
import {Dialog, DialogContent, DialogHeader, DialogTitle,} from '@/components/ui/dialog'
=======


import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
></typeof>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground'
      className
    )}
    {...props}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  />
))
Command.displayName = CommandPrimitive.displayName
interface CommandDialogProps
<<<<<<< HEAD
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {
  return (
    <Dialog {...props}>;
      <DialogContent className='overflow-hidden p-0 shadow-lg'>;
        <DialogHeader>;
          <DialogTitle className='sr-only'>Command Menu</DialogTitle>;
        </DialogHeader>;
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>;
=======
<<<<<<< HEAD
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {
=======
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  />;
));
Command.displayName = CommandPrimitive.displayName;
interface CommandDialogProps;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}


interface CommandDialogProps;
  extends React && React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (

=======
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <DialogHeader>
          <DialogTitle className="sr-only">Command Menu</DialogTitle>
        </DialogHeader>
<<<<<<< HEAD
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>
  React.ComponentPropsWithoutRef<typeof Command</typeof>Primitive.Input>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}

        </Command>;
      </DialogContent>;
    </Dialog>;
  );
};

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>
  React.ComponentPropsWithoutRef<typeof Command</typeof>Primitive.Input>
>(({ className, ...props }, ref) => (
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50'
        className
      )}
      {...props}
<<<<<<< HEAD
    />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>
  React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
=======
    />;
  </div>));
CommandInput.display_name = CommandPrimitive.Input.display_name;
const CommandList = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef < type</typeof > of CommandPrimitive.List>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.List;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    ref={ref}
    className={cn ('max - h-[300px] overflow - y-auto overflow - x-hidden', class_name)}
    {...props}
  />
))
CommandList.displayName = CommandPrimitive.List.displayName
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>
  React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty;
    ref={ref}
    className='py - 6 text - center text - sm';
    {...props}
  />
))
CommandEmpty.displayName = CommandPrimitive.Empty.displayName
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>
  React.ComponentPro</typeof>psWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground'
      className
    )}
    {...props}
  />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>
  React.Compone</typeof>ntPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}
<<<<<<< HEAD
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>
 </typeof> React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
=======


  />;
));
CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive.Empty;
    ref={ref}
    className="py-6 text-center text-sm";
    {...props}
  />;
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
const CommandGroup = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Group>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Group;
    ref={ref}
    className={cn(;
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",;
      className;
    )}
    {...props}
  />;
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
const CommandSeparator = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Separator;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}

  />;
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"
      className
    )}
    {...props}
  />));
CommandItem.display_name = CommandPrimitive.Item.display_name;
const CommandShortcut =</HTMLSpanElement> ({
  className
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    />
  )
}
CommandShortcut.display_name = 'CommandShortcut';
export {
<<<<<<< HEAD
=======

    />;
  </div>;
));
=======
  />
))
<<<<<<< HEAD
CommandItem.displayName = CommandPrimitive.Item.displayName
const CommandShortcut =</HTMLSpanElement> ({
  className
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'
<<<<<<< HEAD
export {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  Command
  CommandDialog
  CommandInput
  CommandList
  CommandEmpty
  CommandGroup
  CommandItem
  CommandShortcut
  CommandSeparator
}
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


CommandInput && CommandInput.displayName = CommandPrimitive && CommandPrimitive.Input.displayName;

const CommandList = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive && CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />;
));

CommandList && CommandList.displayName = CommandPrimitive && CommandPrimitive.List.displayName;

const CommandEmpty = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Empty>,;
  React && React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive && CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Empty
    ref={ref}
    className='py-6 text-center text-sm'
    {...props}
  />;
));

CommandEmpty && CommandEmpty.displayName = CommandPrimitive && CommandPrimitive.Empty.displayName;

const CommandGroup = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Group>,;
  React && React.ComponentPro</typeof>psWithoutRef<typeof CommandPrimitive && CommandPrimitive.Group>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1 && 1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className
    )}
    {...props}
  />;
));

CommandGroup && CommandGroup.displayName = CommandPrimitive && CommandPrimitive.Group.displayName;

const CommandSeparator = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Separator>,;
  React && React.Compone</typeof>ntPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />;
));
CommandSeparator && CommandSeparator.displayName = CommandPrimitive && CommandPrimitive.Separator.displayName;

const CommandItem = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Item>,;
 </typeof> React && React.ComponentPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1 && 1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />;
));

CommandItem && CommandItem.displayName = CommandPrimitive && CommandPrimitive.Item.displayName;

const CommandShortcut =</HTMLSpanElement> ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<HTMLSpanElement>) => {;

    />;
  );
};
CommandShortcut && CommandShortcut.displayName = 'CommandShortcut';


<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
<<<<<<< HEAD
  CommandSeparator,
}
=======
  CommandSeparator}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
