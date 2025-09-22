import * as React from "react""
:src_backup/components/ui/command.tsx
import { Command as CommandPrimitive } from "cmdk"
import { Search } from 'lucide-react'
"
import { cn } from "@/lib/utils""
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
:src_backup/components/ui/command.tsx
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <CommandPrimitive
import {Dialog, DialogContent, DialogHeader, DialogTitle,} from '@/components/ui/dialog';
const Command = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive>,;
  React && React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
></typeof>(({ className, ...props }, ref) => (;
  <CommandPrimitive;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
    ref={ref}
    className={cn(
:src_backup/components/ui/command.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />;
));
Command.displayName = CommandPrimitive.displayName;
interface CommandDialogProps;
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
));
Command && Command.displayName = CommandPrimitive && CommandPrimitive.displayName;

  />
))
Command.displayName = CommandPrimitive.displayName
interface CommandDialogProps

  />;
));
Command.displayName = CommandPrimitive.displayName;
interface CommandDialogProps;
extends React && React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (

  />;
));
Command && Command.displayName = CommandPrimitive && CommandPrimitive.displayName;

:src_backup/components/ui/command.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <Dialog {...props}>
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
interface CommandDialogProps;
  extends React && React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">"
        <DialogHeader>
          <DialogTitle className="sr-only">Command Menu</DialogTitle>"
        </DialogHeader>,
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">",
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from 'lucide-react'

:src_backup/components/ui/command.tsx
    <Dialog {...props}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <DialogHeader>"
          <DialogTitle className="sr-only">Command Menu</DialogTitle>
        </DialogHeader>
:src_backup/components/ui/command.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
        </Command>;
      </DialogContent>;
    </Dialog>;
  );
}
:src_backup/components/ui/command.tsx

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import {Command, as, CommandPrimitive} from 'cmdk';
import {Search} from 'lucide-react';
import {cn} from '@/lib / utils';
:src_backup/components/ui/command.tsx
import {Dialog, DialogContent, DialogHeader, DialogTitle, } from '@/components / ui / dialog';
const Command = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef < typeof CommandPrimitive>;
></typeof>(({ class_name, ...props }, ref) => (
  <CommandPrimitive;
    ref={ref}
:src_backup/components/ui/command.tsx
    className={cn ('
      'flex h - full w - full flex - col overflow - hidden rounded - md bg - popover text - popover - foreground',
      class_name)}
    {...props}
  />));
Command.display_name = CommandPrimitive.display_name;
interface CommandDialogProps;
  extends React.ComponentPropsWithoutRef < typeof Dialog> {}
:src_backup/components/ui/command.tsx
const CommandDialog = ({ children, ...props }: CommandDialog</typeof > Props) =>: any {}
  return (
    <Dialog {...props}>;'
      <DialogContent className='overflow - hidden p - 0 shadow - lg'>;
        <DialogHeader>;'
          <DialogTitle className='sr - only'>Command Menu</DialogTitle>;
:src_backup/components/ui/command.tsx
        </DialogHeader>;'
        <Command className='[&_[cmdk - group - heading]]:px - 2 [&_[cmdk - group - heading]]:font - medium [&_[cmdk - group - heading]]:text - muted - foreground [&_[cmdk - group]:not ([hidden])_~[cmdk - group]]:pt - 0 [&_[cmdk - group]]:px - 2 [&_[cmdk - input - wrapper]_svg]:h - 5 [&_[cmdk - input - wrapper]_svg]:w - 5 [&_[cmdk - input]]:h - 12 [&_[cmdk - item]]:px - 2 [&_[cmdk - item]]:py - 3 [&_[cmdk - item]_svg]:h - 5 [&_[cmdk - item]_svg]:w - 5'>;
          {children}
        </Command>;
      </DialogContent>;
    </Dialog>);
}
const CommandInput = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef < typeof Command</typeof > Primitive.Input>;
>(({ class_name, ...props }, ref) => ('
  <div className='flex items - center border - b px - 3' cmdk - input - wrapper=''>;'
    <Search className='mr - 2 h - 4 w - 4 shrink - 0 opacity - 50' />;
    <CommandPrimitive.Input;
      ref={ref}
:src_backup/components/ui/command.tsx
      className={cn ('
        'flex h - 11 w - full rounded - md bg - transparent py - 3 text - sm outline - none placeholder:text - muted - foreground disabled:cursor - not - allowed disabled:opacity - 50',
        class_name)}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      className={cn (
        'flex h - 11 w - full rounded - md bg - transparent py - 3 text - sm outline - none placeholder:text - muted - foreground disabled:cursor - not - allowed disabled:opacity - 50',',
        class_name)}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
const CommandInput = React.forwardRef<
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
:src_backup/components/ui/command.tsx
>(({ className, ...props }, ref) => ("
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">"
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input;
      ref={ref}
:src_backup/components/ui/command.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      className={cn(;
=======
      className={cn(;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",;
        className;
      )}
      {...props}
    />;
  </div>;
));
CommandInput.displayName = CommandPrimitive.Input.displayName;
const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.List;
:src_backup/components/ui/command.tsx
<<<<<<< HEAD
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}

  />));
CommandList.display_name = CommandPrimitive.List.display_name;
const CommandEmpty = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithout</typeof > Ref < typeof CommandPrimitive.Empty>;
:src_backup/components/ui/command.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
>((props, ref) => (
:src_backup/components/ui/command.tsx
  <CommandPrimitive.Empty
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  <CommandPrimitive.Empty;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
  />;
));
CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive.Empty;
    ref={ref}"
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
    className={cn(;"
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
:src_backup/components/ui/command.tsx
    ref={ref}"
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
/>));
CommandEmpty.display_name = CommandPrimitive.Empty.display_name;
const CommandGroup = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Group>,
  React.ComponentPro</typeof > psWithoutRef < typeof CommandPrimitive.Group>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Group;
:src_backup/components/ui/command.tsx
    ref={ref}'
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />));
CommandGroup.display_name = CommandPrimitive.Group.display_name;
const CommandSeparator = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Separator>,
  React.Compone</typeof > ntPropsWithoutRef < typeof CommandPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Separator;
:src_backup/components/ui/command.tsx

    ref={ref}'
    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}
  />;
));
CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive.Empty;
    ref={ref}"
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
    className={cn(;"
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

:src_backup/components/ui/command.tsx
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  />;
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;
    ref={ref}
:src_backup/components/ui/command.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",;
      className;
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props;
}: React.HTMLAttributes<HTMLSpanElement>) => {}
  return (
    <span;
      className={cn("
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className;
      )}
      {...props}
    />;
  );
}"
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,

  CommandItem,
  CommandShortcut,
  CommandSeparator}
;
=======
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
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>
 </typeof> React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
  />;
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;

    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
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
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}"
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
    ref={ref}
:src_backup/components/ui/command.tsx
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"
      className
    )}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"",
      className
    )}
  />));
CommandSeparator.display_name = CommandPrimitive.Separator.display_name;
const CommandItem = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Item>,
</typeof> React.ComponentPropsWithoutRef < typeof CommandPrimitive.Item>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Item;
    ref={ref}
    className={cn (
      "relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none data-[disabled = true]:pointer - events - none data-[selected='true']:bg - accent data-[selected = true]:text - accent - foreground data-[disabled = true]:opacity - 50",",
      class_name)}
    {...props}
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) => {
    />);
}
CommandShortcut.display_name = 'CommandShortcut';
export {
    />;
  </div>;
));
  />
))
CommandItem.displayName = CommandPrimitive.Item.displayName
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",;
      className;
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",",
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
    />;
  );
}
CommandShortcut.displayName = "CommandShortcut""
CommandShortcut.displayName = "CommandShortcut"

export {
=======
export {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
:src_backup/components/ui/command.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  CommandItem,
  CommandShortcut,
  CommandSeparator}
;
})
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
