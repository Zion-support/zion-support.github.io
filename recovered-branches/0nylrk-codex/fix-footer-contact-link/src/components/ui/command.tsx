<<<<<<< HEAD

import * as React from 'react';
import {Command, as, CommandPrimitive} from 'cmdk';
import {Search} from 'lucide-react';



=======



=======
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
></typeof>(({ className, ...props }, ref) => (

  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground'
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />;
));



const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD

  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  return (

    <Dialog {...props}>

<<<<<<< HEAD
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">

      <DialogContent className='overflow-hidden p-0 shadow-lg'>
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          {children}
        </Command>;
      </DialogContent>;
    </Dialog>;
  );

<<<<<<< HEAD
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
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
    />;
  </div>;
));
<<<<<<< HEAD

CommandInput.displayName = CommandPrimitive.Input.displayName;



=======





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>
  React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;


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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
  <CommandPrimitive.List;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
<<<<<<< HEAD
  />
));


CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>
  React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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


=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    ref={ref}
    className={cn ('max - h-[300px] overflow - y-auto overflow - x-hidden', class_name)}
    {...props}


CommandList && CommandList.displayName = CommandPrimitive && CommandPrimitive.List.displayName;

const CommandEmpty = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Empty>,;
  React && React.ComponentPropsWithout</typeof>Ref<typeof CommandPrimitive && CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Empty

<<<<<<< HEAD


=======
=======
  />));
;
CommandList.display_name = CommandPrimitive.List.display_name;
;
const CommandEmpty = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithout</typeof > Ref < typeof CommandPrimitive.Empty>;
>((props, ref) => (
  <CommandPrimitive.Empty;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    ref={ref}
    className='py - 6 text - center text - sm';
    {...props}




<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground'

      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD

CommandGroup.displayName = CommandPrimitive.Group.displayName;



=======





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>
  React.Compone</typeof>ntPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
const CommandSeparator = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Separator;



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;



<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>
 </typeof> React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
<<<<<<< HEAD



=======

CommandSeparator && CommandSeparator.displayName = CommandPrimitive && CommandPrimitive.Separator.displayName;

const CommandItem = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Item>,;
 </typeof> React && React.ComponentPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Item
=======


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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


CommandItem && CommandItem.displayName = CommandPrimitive && CommandPrimitive.Item.displayName;

const CommandShortcut =</HTMLSpanElement> ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<HTMLSpanElement>) => {;


const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
<<<<<<< HEAD


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



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



export {;
  Command,;
  CommandDialog,;
  CommandInput,;
  CommandList,;
  CommandEmpty,;
  CommandGroup,;
  CommandItem,;
  CommandShortcut,;
  CommandSeparator,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
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
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
