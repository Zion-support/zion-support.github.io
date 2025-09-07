import * as React from "react""
<<<<<<< HEAD:src_backup/components/ui/command.tsx
import { Command as CommandPrimitive } from "cmdk"
import { Search } from 'lucide-react'
"
import { cn } from "@/lib/utils""
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

=======
import { Command as CommandPrimitive } from "cmdk""
import { Search } from 'lucide-react''
import { cn } from "@/lib/utils""
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
<<<<<<< HEAD:src_backup/components/ui/command.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <CommandPrimitive
=======
></typeof>(({ className, ...props }, ref) => (';
import React from 'react';'
import * as React from 'react';'
import {Command, as, CommandPrimitive} from 'cmdk';'
import {Search} from 'lucide-react';
<<<<<<< HEAD:src_backup/components/ui/command.tsx
'
import {cn} from '@/lib/utils';'
=======
import {cn} from '@/lib/utils';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
import {Dialog, DialogContent, DialogHeader, DialogTitle,} from '@/components/ui/dialog';
const Command = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive>,;
  React && React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
></typeof>(({ className, ...props }, ref) => (;
  <CommandPrimitive;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
    ref={ref}
    className={cn(
<<<<<<< HEAD:src_backup/components/ui/command.tsx
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
=======

  />;
=======
  />
))
Command.displayName = CommandPrimitive.displayName
interface CommandDialogProps  />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
  extends React && React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
  />;
));
Command.displayName = CommandPrimitive.displayName;
interface CommandDialogProps;
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  />;
));
Command && Command.displayName = CommandPrimitive && CommandPrimitive.displayName;

<<<<<<< HEAD:src_backup/components/ui/command.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <Dialog {...props}>
=======

=======
  />;
));
Command && Command.displayName = CommandPrimitive && CommandPrimitive.displayName;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
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

<<<<<<< HEAD:src_backup/components/ui/command.tsx
    <Dialog {...props}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
=======
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
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
  return (
    <Dialog {...props}>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <DialogHeader>"
          <DialogTitle className="sr-only">Command Menu</DialogTitle>
        </DialogHeader>
<<<<<<< HEAD:src_backup/components/ui/command.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/command.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
=======

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
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
<<<<<<< HEAD:src_backup/components/ui/command.tsx

<<<<<<< HEAD:src_backup/components/ui/command.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
import * as React from 'react';
import {Command, as, CommandPrimitive} from 'cmdk';
import {Search} from 'lucide-react';
import {cn} from '@/lib / utils';
<<<<<<< HEAD:src_backup/components/ui/command.tsx
=======
'
import * as React from 'react';'
import {Command, as, CommandPrimitive} from 'cmdk';'
import {Search} from 'lucide-react';'
import {cn} from '@/lib / utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
import {Dialog, DialogContent, DialogHeader, DialogTitle, } from '@/components / ui / dialog';
const Command = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef < typeof CommandPrimitive>;
></typeof>(({ class_name, ...props }, ref) => (
  <CommandPrimitive;
    ref={ref}
<<<<<<< HEAD:src_backup/components/ui/command.tsx
    className={cn ('
      'flex h - full w - full flex - col overflow - hidden rounded - md bg - popover text - popover - foreground',
=======
    className={cn (
      'flex h - full w - full flex - col overflow - hidden rounded - md bg - popover text - popover - foreground',',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
      class_name)}
    {...props}
  />));
Command.display_name = CommandPrimitive.display_name;
interface CommandDialogProps;
  extends React.ComponentPropsWithoutRef < typeof Dialog> {}
<<<<<<< HEAD:src_backup/components/ui/command.tsx
const CommandDialog = ({ children, ...props }: CommandDialog</typeof > Props) =>: any {}
=======
const CommandDialog = ({ children, ...props }: CommandDialog</typeof >,  Props) =>: any {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
  return (
    <Dialog {...props}>;'
      <DialogContent className='overflow - hidden p - 0 shadow - lg'>;
        <DialogHeader>;'
          <DialogTitle className='sr - only'>Command Menu</DialogTitle>;
<<<<<<< HEAD:src_backup/components/ui/command.tsx
        </DialogHeader>;'
        <Command className='[&_[cmdk - group - heading]]:px - 2 [&_[cmdk - group - heading]]:font - medium [&_[cmdk - group - heading]]:text - muted - foreground [&_[cmdk - group]:not ([hidden])_~[cmdk - group]]:pt - 0 [&_[cmdk - group]]:px - 2 [&_[cmdk - input - wrapper]_svg]:h - 5 [&_[cmdk - input - wrapper]_svg]:w - 5 [&_[cmdk - input]]:h - 12 [&_[cmdk - item]]:px - 2 [&_[cmdk - item]]:py - 3 [&_[cmdk - item]_svg]:h - 5 [&_[cmdk - item]_svg]:w - 5'>;
=======
        </DialogHeader>;,
        <Command className='[&_[cmdk - group - heading]]:px - 2 [&_[cmdk - group - heading]]:font - medium [&_[cmdk - group - heading]]:text - muted - foreground [&_[cmdk - group]:not ([hidden])_~[cmdk - group]]:pt - 0 [&_[cmdk - group]]:px - 2 [&_[cmdk - input - wrapper]_svg]:h - 5 [&_[cmdk - input - wrapper]_svg]:w - 5 [&_[cmdk - input]]:h - 12 [&_[cmdk - item]]:px - 2 [&_[cmdk - item]]:py - 3 [&_[cmdk - item]_svg]:h - 5 [&_[cmdk - item]_svg]:w - 5'>;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
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
<<<<<<< HEAD:src_backup/components/ui/command.tsx
      className={cn ('
        'flex h - 11 w - full rounded - md bg - transparent py - 3 text - sm outline - none placeholder:text - muted - foreground disabled:cursor - not - allowed disabled:opacity - 50',
        class_name)}



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/ui/command.tsx
>(({ className, ...props }, ref) => ("
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">"
=======
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">"
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />"
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input;
      ref={ref}
<<<<<<< HEAD:src_backup/components/ui/command.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/command.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
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
<<<<<<< HEAD:src_backup/components/ui/command.tsx
<<<<<<< HEAD:src_backup/components/ui/command.tsx
<<<<<<< HEAD
    ref={ref}
=======



    ref={ref}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
<<<<<<< HEAD
=======

=======
    ref={ref},
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}"
    {...props}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
  />));
CommandList.display_name = CommandPrimitive.List.display_name;
const CommandEmpty = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithout</typeof > Ref < typeof CommandPrimitive.Empty>;
<<<<<<< HEAD:src_backup/components/ui/command.tsx

=======

    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
>((props, ref) => (
<<<<<<< HEAD:src_backup/components/ui/command.tsx
=======

    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))
CommandList.displayName = CommandPrimitive.List.displayName
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>
  React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive.Empty>>((props, ref) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD:src_backup/components/ui/command.tsx
    ref={ref}"
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
<<<<<<< HEAD
=======

=======
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}"
    {...props}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
  />));
CommandEmpty.display_name = CommandPrimitive.Empty.display_name;
const CommandGroup = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Group>,
  React.ComponentPro</typeof > psWithoutRef < typeof CommandPrimitive.Group>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Group;
<<<<<<< HEAD:src_backup/components/ui/command.tsx
    ref={ref}'
    className={cn('-mx-1 h-px bg-border', className)}
=======
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
    {...props}
  />));
CommandGroup.display_name = CommandPrimitive.Group.display_name;
const CommandSeparator = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Separator>,
  React.Compone</typeof > ntPropsWithoutRef < typeof CommandPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Separator;
<<<<<<< HEAD:src_backup/components/ui/command.tsx

    ref={ref}'
    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}

=======
    ref={ref}
    className={cn ('-mx - 1 h - px bg - border', class_name)}'
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
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

<<<<<<< HEAD:src_backup/components/ui/command.tsx
    ref={ref}
=======

    ref={ref}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
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
<<<<<<< HEAD:src_backup/components/ui/command.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",;
      className;
    )}
    {...props}
=======
    className={cn('"
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"
      className;
    )}
  />));
CommandSeparator.display_name = CommandPrimitive.Separator.display_name;
const CommandItem = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Item>,
</typeof> React.ComponentPropsWithoutRef < typeof CommandPrimitive.Item>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Item;
    ref={ref}
    className={cn ('"
      "relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none data-[disabled = true]:pointer - events - none data-[selected='true']:bg - accent data-[selected = true]:text - accent - foreground data-[disabled = true]:opacity - 50",
      class_name)}
    {...props}

  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) => {}
    />);

}'
CommandShortcut.display_name = 'CommandShortcut';
export {};
    />;
  </div>;
));
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

<<<<<<< HEAD
=======


<<<<<<< HEAD:src_backup/components/ui/command.tsx
CommandItem.displayName = CommandPrimitive.Item.displayName

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const CommandShortcut = ({
=======
CommandItem.displayName = CommandPrimitive.Item.displayName;
const CommandShortcut = ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
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

<<<<<<< HEAD
=======




<<<<<<< HEAD:src_backup/components/ui/command.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD:src_backup/components/ui/command.tsx
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"
      className
    )}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    className={cn(

=======
    className={cn(

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:src_backup/components/ui/command.tsx

<<<<<<< HEAD:src_backup/components/ui/command.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  CommandItem,
  CommandShortcut,
  CommandSeparator};
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/command.tsx
=======
  CommandItem,
  CommandShortcut,
  CommandSeparator}
;
})
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/command.tsx
