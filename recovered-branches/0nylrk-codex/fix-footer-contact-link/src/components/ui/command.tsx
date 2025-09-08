<<<<<<< HEAD
=======

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import * as React from 'react';
import {Command, as, CommandPrimitive} from 'cmdk';
import {Search} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { cn } from '@/lib/utils'
import { Dialog, DialogContent } from '@/components/ui/dialog'

<<<<<<< HEAD
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"







import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"




const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
></typeof>(({ className, ...props }, ref) => (

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


=======
import { Dialog, DialogContent } from "@/components/ui/dialog"


import { Dialog, DialogContent } from "@/components/ui/dialog"

>>>>>>> origin/cursor/delete-old-data-records-6bba
Command && Command.displayName = CommandPrimitive && CommandPrimitive.displayName;
interface CommandDialogProps;

  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

<<<<<<< HEAD

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
=======

extends React && React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
Command.displayName = CommandPrimitive.displayName;

  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

interface CommandDialogProps;

  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
Command.displayName = CommandPrimitive.displayName;

        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">

  return (
    <Dialog {...props}>;'
      <DialogContent className='overflow-hidden p-0 shadow-lg'>;'
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

          {children}
        </Command>;
      </DialogContent>;
    </Dialog>;
  );

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground'
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
<<<<<<< HEAD
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;




=======
interface CommandDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {
  return (
    <Dialog {...props}>
      <DialogContent className='overflow-hidden p-0 shadow-lg'>
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>

      className
    )}
    {...props}
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

  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
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

>>>>>>> origin/cursor/delete-old-data-records-6bba

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
>(({ className, ...props }, ref) => (
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>(({ className, ...props }, ref) => (
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />
    <CommandPrimitive.Input

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
};
const CommandInput = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Input>,;
  React && React.ComponentPropsWithoutRef<typeof Command</typeof>Primitive && Primitive.Input>;
>(({ className, ...props }, ref) => (;'
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>;'
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />;
<<<<<<< HEAD

    <CommandPrimitive&& CommandPrimitive.Input

      ref={ref}
      className={cn(;
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",;
        className;
      )}
      {...props}
    />;
  </div>;
));








=======


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

>>>>>>> origin/cursor/delete-old-data-records-6bba
const CommandList = React.forwardRef<

  React.ElementRef<typeof CommandPrimitive.List>
  React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive.List>
>(({ className, ...props }, ref) => (

<<<<<<< HEAD
  <CommandPrimitive.List

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

CommandInput && CommandInput.displayName = CommandPrimitive && CommandPrimitive.Input.displayName;
const CommandList = React && React.forwardRef<;

  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive && CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.List
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

  <CommandPrimitive.List;




=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
    ref={ref}

    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
));

CommandList.displayName = CommandPrimitive.List.displayName;

    ref={ref}'
    className={cn ('max - h-[300px] overflow - y-auto overflow - x-hidden', class_name)}
    {...props}

  />));
;
CommandList.display_name = CommandPrimitive.List.display_name;
;
const CommandEmpty = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithout</typeof > Ref < typeof CommandPrimitive.Empty>;
>((props, ref) => (
  <CommandPrimitive.Empty;

    ref={ref}'
    className='py - 6 text - center text - sm';
    {...props}
const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.List;

    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>
  React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty;
CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive.Empty;
    ref={ref}'
    className='py-6 text-center text-sm'
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>
  React.ComponentPro</typeof>psWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group;
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
const CommandGroup = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Group>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Group;


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

    ref={ref}'
    className='py-6 text-center text-sm'
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Group>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Group;

    ref={ref}
    className={cn ('
      'flex h - full w - full flex - col overflow - hidden rounded - md bg - popover text - popover - foreground',
      class_name)}
    {...props}
  />));
Command.display_name = CommandPrimitive.display_name;
;
interface CommandDialogProps;
  extends React.ComponentPropsWithoutRef < typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof > Props) =>: any {}
  return (
    <Dialog {...props}>;'
      <DialogContent className='overflow - hidden p - 0 shadow - lg'>;'
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
>(({ class_name, ...props }, ref) => ('
  <div className='flex items - center border - b px - 3' cmdk - input - wrapper=''>;'
    <Search className='mr - 2 h - 4 w - 4 shrink - 0 opacity - 50' />;
    <CommandPrimitive.Input;
      ref={ref}
      className={cn ('
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
    ref={ref}'
    className={cn ('max - h-[300px] overflow - y-auto overflow - x-hidden', class_name)}
    {...props}

  />));
;
CommandList.display_name = CommandPrimitive.List.display_name;
;
const CommandEmpty = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithout</typeof > Ref < typeof CommandPrimitive.Empty>;
>((props, ref) => (
  <CommandPrimitive.Empty;

    ref={ref}'
    className='py - 6 text - center text - sm';
    {...props}
const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.List;

    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>
  React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty;
CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive.Empty;
    ref={ref}'
    className='py-6 text-center text-sm'
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>
  React.ComponentPro</typeof>psWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group;
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
const CommandGroup = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Group>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Group;

    className='py - 6 text - center text - sm';
    {...props}

    ref={ref}
    className={cn('
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground'

    ref={ref}
    className='py - 6 text - center text - sm';
    {...props}
CommandEmpty && CommandEmpty.displayName = CommandPrimitive && CommandPrimitive.Empty.displayName;
const CommandGroup = React && React.forwardRef<;

  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Group>,;
  React && React.ComponentPro</typeof>psWithoutRef<typeof CommandPrimitive && CommandPrimitive.Group>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Group;
    ref={ref}
    className={cn('
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1 && 1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',

      className;
    )}
    {...props}
  />;
));


>>>>>>> origin/cursor/delete-old-data-records-6bba
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>
  React.Compone</typeof>ntPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD

  <CommandPrimitive.Separator

=======


    ref={ref}

>>>>>>> origin/cursor/delete-old-data-records-6bba
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;


<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>
 </typeof> React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (

<<<<<<< HEAD
  <CommandPrimitive.Item
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

CommandSeparator && CommandSeparator.displayName = CommandPrimitive && CommandPrimitive.Separator.displayName;
const CommandItem = React && React.forwardRef<;

  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Item>,;
 </typeof> React && React.ComponentPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

  <CommandPrimitive&& CommandPrimitive.Item



=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;


<<<<<<< HEAD
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",

=======


    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = $2;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
))
CommandSeparator.displayName = $2;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD


CommandItem && CommandItem.displayName = CommandPrimitive && CommandPrimitive.Item.displayName;

const CommandShortcut =</HTMLSpanElement> ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<HTMLSpanElement>) => {;


=======

CommandItem.displayName = $2;
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
  return (
    <span
      className = $2;

>>>>>>> origin/cursor/delete-old-data-records-6bba
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {

<<<<<<< HEAD

=======
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
>>>>>>> origin/cursor/delete-old-data-records-6bba
        className
      )}
      {...props}
    />;
  );
}
<<<<<<< HEAD

CommandShortcut.displayName = "CommandShortcut"


=======
CommandShortcut.displayName = $2;


    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1 && 1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />

>>>>>>> origin/cursor/delete-old-data-records-6bba
))

CommandItem && CommandItem.displayName = CommandPrimitive && CommandPrimitive.Item.displayName;

const CommandShortcut =</HTMLSpanElement> ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<HTMLSpanElement>) => {;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
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
=======

  />));
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
const CommandGroup = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Group />,
  React.ComponentPro</typeof > psWithoutRef < typeof CommandPrimitive.Group>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Group;
    ref={ref}
    className={cn ('
      'overflow - hidden p - 1 text - foreground [&_[cmdk - group - heading]]:px - 2 [&_[cmdk - group - heading]]:py - 1.5 [&_[cmdk - group - heading]]:text - xs [&_[cmdk - group - heading]]:font - medium [&_[cmdk - group - heading]]:text - muted - foreground',
      class_name)}
    {...props}
  />));
;
CommandGroup.display_name = CommandPrimitive.Group.display_name;
;

    className={cn ("
      'overflow - hidden p - 1 text - foreground [&_[cmdk - group - heading]]:px - 2 [&_[cmdk - group - heading]]:py - 1.5 [&_[cmdk - group - heading]]:text - xs [&_[cmdk - group - heading]]:font - medium [&_[cmdk - group - heading]]:text - muted - foreground',')

      class_name)}
    {...props}
  />));
</CommandPrimitive>
const CommandSeparator = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Separator>,
  React.Compone</typeof > ntPropsWithoutRef < typeof CommandPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Separator;

const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}

    ref={ref}
    className={cn('"
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1 && 1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",

  />

))

CommandItem && CommandItem.displayName = CommandPrimitive && CommandPrimitive.Item.displayName;

const CommandShortcut =</HTMLSpanElement> ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<HTMLSpanElement>) => {;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {

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

export {;
  Command,;
  CommandDialog,;
  CommandInput,;
  CommandList,;
  CommandEmpty,;
  CommandGroup,;
  CommandItem,;
  CommandShortcut,;

    ref={ref}

    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}
      className
    )}
    {...props}
  />;
));


>>>>>>> origin/cursor/delete-old-data-records-6bba
  />));
CommandSeparator.display_name = CommandPrimitive.Separator.display_name;
;
      className={cn("
        "ml-auto text-xs tracking-widest text-muted-foreground","
</span>
const CommandGroup = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Group>,
  React.ComponentPro</typeof > psWithoutRef < typeof CommandPrimitive.Group>;
    className={cn ("
      'overflow - hidden p - 1 text - foreground [&_[cmdk - group - heading]]:px - 2 [&_[cmdk - group - heading]]:py - 1.5 [&_[cmdk - group - heading]]:text - xs [&_[cmdk - group - heading]]:font - medium [&_[cmdk - group - heading]]:text - muted - foreground',')

const CommandSeparator = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Separator>,
  React.Compone</typeof > ntPropsWithoutRef < typeof CommandPrimitive.Separator>;

    className={cn ('-mx - 1 h - px bg - border', class_name)}

const CommandSeparator = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Separator>,;

  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;

      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1 && 1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50","

const CommandItem = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Item>,
</typeof> React.ComponentPropsWithoutRef < typeof CommandPrimitive.Item>;

      "relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none data-[disabled = true]:pointer - events - none data-[selected='true']:bg - accent data-[selected = true]:text - accent - foreground data-[disabled = true]:opacity - 50",
      class_name)}
    {...props}
  />));
;
CommandItem.display_name = CommandPrimitive.Item.display_name;
;

}: React.HTMLAttributes < HTMLSpanElement>) => {
    />);
}"
CommandShortcut.display_name = 'CommandShortcut';
;


<<<<<<< HEAD

export {

  Command,

=======
export {

  Command,
>>>>>>> origin/cursor/delete-old-data-records-6bba
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
<<<<<<< HEAD


  CommandSeparator,

};
  CommandSeparator}



=======

  CommandSeparator,

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

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
