
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import {Command, as, CommandPrimitive} from 'cmdk';
import {Search} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
></typeof>(({ className, ...props }, ref) => (
<<<<<<< HEAD

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
    ref={ref}

      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",


      className
    className={cn(;
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",;
      className;
    )}
    {...props}
  />;
));


interface CommandDialogProps;

Command && Command.displayName = CommandPrimitive && CommandPrimitive.displayName;
interface CommandDialogProps;


  extends React && React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
  return (
    <Dialog {...props}>;
      <DialogContent className='overflow-hidden p-0 shadow-lg'>;
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>;
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
          {children}
        </Command>;
      </DialogContent>;
    </Dialog>;
  );



<<<<<<< HEAD
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
=======
=======

const Command = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive>,;
  React && React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
></typeof>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground'
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
<<<<<<< HEAD
  />
));
Command.displayName = CommandPrimitive.displayName;
interface CommandDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {
  return (
    <Dialog {...props}>
      <DialogContent className='overflow-hidden p-0 shadow-lg'>
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
interface CommandDialogProps;

interface CommandDialogProps
=======
  />;
));


interface CommandDialogProps;

=======
Command && Command.displayName = CommandPrimitive && CommandPrimitive.displayName;

interface CommandDialogProps;



  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
Command.displayName = CommandPrimitive.displayName;
interface CommandDialogProps;
=======

interface CommandDialogProps
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface CommandDialogProps;
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
<<<<<<< HEAD
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
      <DialogContent className='overflow-hidden p-0 shadow-lg'>
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>
  React.ComponentPropsWithoutRef<typeof Command</typeof>Primitive.Input>
};
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (

    <Dialog {...props}>



          {children}
        </Command>;
      </DialogContent>;
    </Dialog>;
  );


=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>(({ className, ...props }, ref) => (
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />
    <CommandPrimitive.Input
<<<<<<< HEAD
};
=======
=======
};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CommandInput = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Input>,;
  React && React.ComponentPropsWithoutRef<typeof Command</typeof>Primitive && Primitive.Input>;
>(({ className, ...props }, ref) => (;
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>;
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />;
    <CommandPrimitive&& CommandPrimitive.Input
<<<<<<< HEAD
<<<<<<< HEAD
}
;
const CommandInput = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Input>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;
>(({ className, ...props }, ref) => (;
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">;
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />;
    <CommandPrimitive.Input;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50'
        className
      )}
      {...props}
<<<<<<< HEAD
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    />;
  </div>;
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======





>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>
  React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

CommandInput && CommandInput.displayName = CommandPrimitive && CommandPrimitive.Input.displayName;
const CommandList = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive && CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.List
=======
const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
import {cn} from '@/lib / utils';
import {Dialog, DialogContent} from '@/components / ui / dialog';
;
const Command = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef < typeof CommandPrimitive>;
></typeof>(({ class_name, ...props }, ref) => (
  <CommandPrimitive;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <CommandPrimitive.List;



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn ('max - h-[300px] overflow - y-auto overflow - x-hidden', class_name)}
    {...props}


CommandList && CommandList.displayName = CommandPrimitive && CommandPrimitive.List.displayName;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CommandEmpty = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Empty>,;
  React && React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive && CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Empty
<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  />));
;
CommandList.display_name = CommandPrimitive.List.display_name;
;
const CommandEmpty = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithout</typeof > Ref < typeof CommandPrimitive.Empty>;
>((props, ref) => (
  <CommandPrimitive.Empty;
<<<<<<< HEAD


    ref={ref}
    className='py - 6 text - center text - sm';
    {...props}
const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.List;
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>
  React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive.Empty;
    ref={ref}
    className='py-6 text-center text-sm'
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>
  React.ComponentPro</typeof>psWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
const CommandGroup = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Group>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Group;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    ref={ref}
    className='py - 6 text - center text - sm';
    {...props}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground'
<<<<<<< HEAD

    ref={ref}
    className='py - 6 text - center text - sm';
    {...props}
CommandEmpty && CommandEmpty.displayName = CommandPrimitive && CommandPrimitive.Empty.displayName;
=======
=======

CommandEmpty && CommandEmpty.displayName = CommandPrimitive && CommandPrimitive.Empty.displayName;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CommandGroup = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Group>,;
  React && React.ComponentPro</typeof>psWithoutRef<typeof CommandPrimitive && CommandPrimitive.Group>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1 && 1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD





<<<<<<< HEAD
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground'
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
CommandGroup.displayName = CommandPrimitive.Group.displayName;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======





>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>
  React.Compone</typeof>ntPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

CommandGroup && CommandGroup.displayName = CommandPrimitive && CommandPrimitive.Group.displayName;
const CommandSeparator = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Separator>,;
  React && React.Compone</typeof>ntPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Separator
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
<<<<<<< HEAD
=======

    ref={ref}
    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CommandSeparator = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Separator;


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>
 </typeof> React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
CommandSeparator && CommandSeparator.displayName = CommandPrimitive && CommandPrimitive.Separator.displayName;
=======

CommandSeparator && CommandSeparator.displayName = CommandPrimitive && CommandPrimitive.Separator.displayName;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CommandItem = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Item>,;
 </typeof> React && React.ComponentPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Item
<<<<<<< HEAD


<<<<<<< HEAD
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
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
))

<<<<<<< HEAD
CommandItem.displayName = CommandPrimitive.Item.displayName
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1 && 1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      className
    )}
    {...props}

=======
  />

))

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

CommandItem && CommandItem.displayName = CommandPrimitive && CommandPrimitive.Item.displayName;

const CommandShortcut =</HTMLSpanElement> ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<HTMLSpanElement>) => {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
<<<<<<< HEAD
<<<<<<< HEAD
  
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1 && 1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />

))


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
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  CommandSeparator,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  CommandSeparator,
}
;
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
  CommandSeparator}
;
  CommandSeparator,;
};
  CommandSeparator}
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
