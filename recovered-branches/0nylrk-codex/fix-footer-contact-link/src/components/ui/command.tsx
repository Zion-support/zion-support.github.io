<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx


<<<<<<< HEAD
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
=======

=======
<<<<<<< HEAD
import * as React from 'react';
import {Command, as, CommandPrimitive} from 'cmdk';
import {Search} from 'lucide-react';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
import {Dialog, DialogContent} from '@/components/ui/dialog';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
></typeof>(({ className, ...props }, ref) => (
=======

========
<<<<<<< HEAD
import React from 'react';
import * as React from 'react';
import {Command, as, CommandPrimitive} from 'cmdk';
import {Search} from 'lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
const Command = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive>,;
  React && React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
></typeof>(({ className, ...props }, ref) => (;
  <CommandPrimitive
=======
import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
;
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
;
const Command = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    ref={ref}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
    className={cn(

<<<<<<< HEAD
=======

      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
========
    className={cn(;
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",;
      className;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
    )}
    {...props}
  />;
));
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
Command.displayName = CommandPrimitive.displayName;

  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
=======


interface CommandDialogProps;

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
Command && Command.displayName = CommandPrimitive && CommandPrimitive.displayName;
interface CommandDialogProps;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx



  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (

    <Dialog {...props}>

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  extends React && React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
  return (
    <Dialog {...props}>;
      <DialogContent className='overflow-hidden p-0 shadow-lg'>;
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>;
=======
Command.displayName = CommandPrimitive.displayName;
;
interface CommandDialogProps;
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
;
const CommandDialog = ({ children, ...props } CommandDialogProps) => {;
  return (;
    <Dialog {...props}>;
      <DialogContent className="overflow-hidden p-0 shadow-lg">;
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
          {children}
        </Command>;
      </DialogContent>;
    </Dialog>;
  );
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
=======


=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground'
=======
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
interface CommandDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {
  return (
    <Dialog {...props}>
      <DialogContent className='overflow-hidden p-0 shadow-lg'>
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
=======
interface CommandDialogProps;
=======

interface CommandDialogProps
=======
interface CommandDialogProps;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
<<<<<<< HEAD
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
      <DialogContent className='overflow-hidden p-0 shadow-lg'>
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
=======
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>
  React.ComponentPropsWithoutRef<typeof Command</typeof>Primitive.Input>
=======
=======
<<<<<<< HEAD
};
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
>(({ className, ...props }, ref) => (
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />
    <CommandPrimitive.Input
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
};
const CommandInput = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Input>,;
  React && React.ComponentPropsWithoutRef<typeof Command</typeof>Primitive && Primitive.Input>;
>(({ className, ...props }, ref) => (;
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>;
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />;
    <CommandPrimitive&& CommandPrimitive.Input
=======
}
;
const CommandInput = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Input>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;
>(({ className, ...props }, ref) => (;
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">;
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />;
    <CommandPrimitive.Input;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      ref={ref}
      className={cn(;
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",;
        className;
      )}
      {...props}
    />;
  </div>;
));
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
CommandInput.displayName = CommandPrimitive.Input.displayName;

=======





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50'
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>
  React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
<<<<<<< HEAD
<<<<<<< HEAD

const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
=======
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
CommandInput && CommandInput.displayName = CommandPrimitive && CommandPrimitive.Input.displayName;
const CommandList = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive && CommandPrimitive.List>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
>(({ className, ...props }, ref) => (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx

========
  <CommandPrimitive&& CommandPrimitive.List
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
;
import {cn} from '@/lib / utils';
import {Dialog, DialogContent} from '@/components / ui / dialog';
;
const Command = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef < typeof CommandPrimitive>;
></typeof>(({ class_name, ...props }, ref) => (
  <CommandPrimitive;
=======
  <CommandPrimitive.List;

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    ref={ref}
    className={cn (
      'flex h - full w - full flex - col overflow - hidden rounded - md bg - popover text - popover - foreground',
      class_name)}
    {...props}
  />));
Command.display_name = CommandPrimitive.display_name;
;
interface CommandDialogProps;
  extends React.ComponentPropsWithoutRef < typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof > Props) =>: any {
  return (
    <Dialog {...props}>;
      <DialogContent className='overflow - hidden p - 0 shadow - lg'>;
        <Command className='[&_[cmdk - group - heading]]:px - 2 [&_[cmdk - group - heading]]:font - medium [&_[cmdk - group - heading]]:text - muted - foreground [&_[cmdk - group]:not ([hidden])_~[cmdk - group]]:pt - 0 [&_[cmdk - group]]:px - 2 [&_[cmdk - input - wrapper]_svg]:h - 5 [&_[cmdk - input - wrapper]_svg]:w - 5 [&_[cmdk - input]]:h - 12 [&_[cmdk - item]]:px - 2 [&_[cmdk - item]]:py - 3 [&_[cmdk - item]_svg]:h - 5 [&_[cmdk - item]_svg]:w - 5'>;
          {children}
        </Command>;
      </DialogContent>;
    </Dialog>);
}
;
const CommandInput = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef < typeof Command</typeof > Primitive.Input>;
>(({ class_name, ...props }, ref) => (
  <div className='flex items - center border - b px - 3' cmdk - input - wrapper=''>;
    <Search className='mr - 2 h - 4 w - 4 shrink - 0 opacity - 50' />;
    <CommandPrimitive.Input;
      ref={ref}
      className={cn (
        'flex h - 11 w - full rounded - md bg - transparent py - 3 text - sm outline - none placeholder:text - muted - foreground disabled:cursor - not - allowed disabled:opacity - 50',
        class_name)}
      {...props}
    />;
  </div>));
;
CommandInput.display_name = CommandPrimitive.Input.display_name;
;
const CommandList = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef < type</typeof > of CommandPrimitive.List>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.List;
    ref={ref}
    className={cn ('max - h-[300px] overflow - y-auto overflow - x-hidden', class_name)}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
<<<<<<< HEAD
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
CommandList && CommandList.displayName = CommandPrimitive && CommandPrimitive.List.displayName;
const CommandEmpty = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Empty>,;
  React && React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive && CommandPrimitive.Empty>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
>((props, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Empty
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
  />));
;
CommandList.display_name = CommandPrimitive.List.display_name;
;
const CommandEmpty = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithout</typeof > Ref < typeof CommandPrimitive.Empty>;
>((props, ref) => (
  <CommandPrimitive.Empty;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    ref={ref}
    className='py - 6 text - center text - sm';
    {...props}
<<<<<<< HEAD
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

=======
=======
const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.List;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
CommandList.displayName = CommandPrimitive.List.displayName;
<<<<<<< HEAD
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>
  React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
=======
<<<<<<< HEAD
=======
CommandList.displayName = CommandPrimitive.List.displayName;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const CommandEmpty = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive.Empty;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className='py-6 text-center text-sm'
    {...props}
  />
));
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
<<<<<<< HEAD
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>
  React.ComponentPro</typeof>psWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
=======
<<<<<<< HEAD
=======
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const CommandGroup = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Group>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Group;
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground'
=======

========
    ref={ref}
    className='py - 6 text - center text - sm';
    {...props}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
<<<<<<< HEAD
CommandGroup.displayName = CommandPrimitive.Group.displayName;

=======





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground'
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>
  React.Compone</typeof>ntPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

========
CommandGroup && CommandGroup.displayName = CommandPrimitive && CommandPrimitive.Group.displayName;
const CommandSeparator = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Separator>,;
  React && React.Compone</typeof>ntPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Separator
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
  />));
;
CommandEmpty.display_name = CommandPrimitive.Empty.display_name;
;
const CommandGroup = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Group>,
  React.ComponentPro</typeof > psWithoutRef < typeof CommandPrimitive.Group>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Group;
    ref={ref}
    className={cn (
      'overflow - hidden p - 1 text - foreground [&_[cmdk - group - heading]]:px - 2 [&_[cmdk - group - heading]]:py - 1.5 [&_[cmdk - group - heading]]:text - xs [&_[cmdk - group - heading]]:font - medium [&_[cmdk - group - heading]]:text - muted - foreground',
      class_name)}
    {...props}
  />));
;
CommandGroup.display_name = CommandPrimitive.Group.display_name;
;
const CommandSeparator = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Separator>,
  React.Compone</typeof > ntPropsWithoutRef < typeof CommandPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Separator;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx

    ref={ref}
    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const CommandSeparator = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Separator;
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>
 </typeof> React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
    ref={ref}
    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
CommandSeparator && CommandSeparator.displayName = CommandPrimitive && CommandPrimitive.Separator.displayName;
const CommandItem = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Item>,;
 </typeof> React && React.ComponentPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Item
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;
<<<<<<< HEAD

<<<<<<< HEAD
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />
<<<<<<< HEAD

=======
<<<<<<< HEAD
));
CommandItem.displayName = CommandPrimitive.Item.displayName;
const CommandShortcut =</HTMLSpanElement> ({
  className
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    />
  );
}
CommandShortcut.displayName = 'CommandShortcut';
export {
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
=======
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />;
  );
}
CommandShortcut.displayName = "CommandShortcut"
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1 && 1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx

=======
  />

))


========
  />;
));
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
CommandItem && CommandItem.displayName = CommandPrimitive && CommandPrimitive.Item.displayName;
const CommandShortcut =</HTMLSpanElement> ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<HTMLSpanElement>) => {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx


const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee



========
    />;
  );
};
CommandShortcut && CommandShortcut.displayName = 'CommandShortcut';
=======
;
CommandInput.displayName = CommandPrimitive.Input.displayName;
;
const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.List;
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />;
));
;
CommandList.displayName = CommandPrimitive.List.displayName;
;
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
;
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
;
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
;
CommandGroup.displayName = CommandPrimitive.Group.displayName;
;
const CommandSeparator = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />;
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
;
const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;
    ref={ref}
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",;
      className;
    )}
    {...props}
  />;
));
;
CommandItem.displayName = CommandPrimitive.Item.displayName;
;
const CommandShortcut = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLSpanElement>) => {;
  return (;
    <span;
      className={cn(;
        "ml-auto text-xs tracking-widest text-muted-foreground",;
        className;
      )}
      {...props}
    />;
  );
}
CommandShortcut.displayName = "CommandShortcut";
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
export {;
  Command,;
  CommandDialog,;
  CommandInput,;
  CommandList,;
  CommandEmpty,;
  CommandGroup,;
  CommandItem,;
  CommandShortcut,;
<<<<<<< HEAD
  CommandSeparator,;
};
  />));
CommandSeparator.display_name = CommandPrimitive.Separator.display_name;
;
const CommandItem = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Item>,
</typeof> React.ComponentPropsWithoutRef < typeof CommandPrimitive.Item>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Item;
    ref={ref}
    className={cn (
      "relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none data-[disabled = true]:pointer - events - none data-[selected='true']:bg - accent data-[selected = true]:text - accent - foreground data-[disabled = true]:opacity - 50",
      class_name)}
    {...props}
  />));
;
CommandItem.display_name = CommandPrimitive.Item.display_name;
;
const CommandShortcut =</HTMLSpanElement> ({
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) => {
    />);
}
CommandShortcut.display_name = 'CommandShortcut';
;
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  CommandSeparator,
}
;
=======
  CommandSeparator} const Command = React.forwardRef< React.ElementRef<typeof CommandPrimitive>;
React.ComponentPropsWithoutRef<typeof CommandPrimitive> > ( ({
  className, ...props 
}, ref) => (<CommandPrimitive) 
}{
  ...props 
}/>) ) Command.displayName = CommandPrimitive.displayName interface CommandDialogProps extends React.ComponentPropsWithoutRef<typeof Dialog> {
  
}const CommandDialog = ({
  children, ...props 
}: CommandDialogProps) => {
  return (<Dialog {
  ...props 
}> </Command> </DialogContent> </Dialog>) 
}const CommandInput = React.forwardRef< React.ElementRef<typeof CommandPrimitive.Input>;
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" /> <CommandPrimitive.Input ref= {
  ref 
}className= {
  cn ("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className) 
}{
  ...props 
}/> </div>) ) CommandInput.displayName = CommandPrimitive.Input.displayName const CommandList = React.forwardRef< React.ElementRef<typeof CommandPrimitive.List>;
React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> > ( ({
  className, ...props 
}, ref) => (<CommandPrimitive.List ref= {
  ref 
}className= {
  cn ("max-h-[300px] overflow-y-auto overflow-x-hidden", className) 
}{
  ...props 
}/>) ) CommandList.displayName = CommandPrimitive.List.displayName const CommandEmpty = React.forwardRef< React.ElementRef<typeof CommandPrimitive.Empty>;
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> > ( (props, ref) => (<CommandPrimitive.Empty ref= {
  ref 
}className="py-6 text-center text-sm" {
  ...props 
}/>) ) CommandEmpty.displayName = CommandPrimitive.Empty.displayName const CommandGroup = React.forwardRef< React.ElementRef<typeof CommandPrimitive.Group>;
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> > ( ({
  className, ...props 
}, ref) => (<CommandPrimitive.Group ref= {
  ref 
}className= {
  cn ("overflow-hidden p-1 text-foreground [& [cmdk-group-heading]]:px-2 [& [cmdk-group-heading]]:py-1.5 [& [cmdk-group-heading]]:text-xs [& [cmdk-group-heading]]:font-medium [& [cmdk-group-heading]]:text-muted-foreground", className) 
}{
  ...props 
}/>) ) CommandGroup.displayName = CommandPrimitive.Group.displayName const CommandSeparator = React.forwardRef< React.ElementRef<typeof CommandPrimitive.Separator>;
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> > ( ({
  className, ...props 
}, ref) => (<CommandPrimitive.Separator ref= {
  ref 
}className= {
  cn ("-mx-1 h-px bg-border", className) 
}{
  ...props 
}/>) ) CommandSeparator.displayName = CommandPrimitive.Separator.displayName const CommandItem = React.forwardRef< React.ElementRef<typeof CommandPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> > ( ({
  className, ...props 
}, ref) => (<CommandPrimitive.Item ref= {
  ref 
}className= {
  cn ("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", className) 
}{
  ...props 
}/>) ) CommandItem.displayName = CommandPrimitive.Item.displayName const CommandShortcut = ({
  className, ...props 
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (<span className= {
  cn () 
}{
  ...props 
}/>) 
}CommandShortcut.displayName = "CommandShortcut" export {
  Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/command.tsx
=======
<<<<<<< HEAD
  CommandSeparator}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  CommandSeparator,;
};
=======
  CommandSeparator}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
