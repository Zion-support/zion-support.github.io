import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>

  />;
));
Command && Command.displayName = CommandPrimitive && CommandPrimitive.displayName;

    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <DialogHeader>
          <DialogTitle className="sr-only">Command Menu</DialogTitle>
        </DialogHeader>

        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}

        </Command>;
      </DialogContent>;
    </Dialog>;
  );
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}

    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}

>((props, ref) => (
  <CommandPrimitive.Empty
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
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}

  />));
CommandEmpty.display_name = CommandPrimitive.Empty.display_name;
const CommandGroup = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Group>,
  React.ComponentPro</typeof > psWithoutRef < typeof CommandPrimitive.Group>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Group;
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />));
CommandGroup.display_name = CommandPrimitive.Group.display_name;
const CommandSeparator = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Separator>,
  React.Compone</typeof > ntPropsWithoutRef < typeof CommandPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Separator;

    ref={ref}
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
    className={cn(

    />;
  );
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,

import * as React from "react"""
import { Command as CommandPrimitive } from "cmdk"""
import { Search } from 'lucide-react
import { cn } from "@/lib/utils"""
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog""
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
</typeof>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
></typeof>(({ className, ...props }, ref) => (
const Command = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive>,;
  React && React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
</typeof>)
></typeof>(({ className, ...props }, ref) => (;
  <CommandPrimitive;
    ref={ref}
    className={cn(

  />;

  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
  extends React && React.ComponentPropsWithoutRef<typeof Dialog> {}
)
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
    <Dialog {...props}>
"
      <DialogContent className="overflow-hidden p-0 shadow-lg">"

        <DialogHeader>
          <DialogTitle className="sr-only">Command Menu"
        

        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">"

        ;
const Command = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef < typeof CommandPrimitive>;
></typeof>(({ class_name, ...props }, ref) => (
    className={cn ("
      'flex h - full w - full flex - col overflow - hidden rounded - md bg - popover text - popover - foreground',')
      class_name)}
    {...props}
  />));

  extends React.ComponentPropsWithoutRef < typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof > Props) =>: any {
  // TODO: Implement
}
  return (
    <Dialog {...props}>;

      <DialogContent className='overflow - hidden p - 0 shadow - lg'>;

        <DialogHeader>;

          <DialogTitle className='sr - only'>Command Menu;
        ;)
        <Command className='[&_[cmdk - group - heading]]:px - 2 [&_[cmdk - group - heading]]:font - medium [&_[cmdk - group - heading]]:text - muted - foreground [&_[cmdk - group]:not ([hidden])_~[cmdk - group]]:pt - 0 [&_[cmdk - group]]:px - 2 [&_[cmdk - input - wrapper]_svg]:h - 5 [&_[cmdk - input - wrapper]_svg]:w - 5 [&_[cmdk - input]]:h - 12 [&_[cmdk - item]]:px - 2 [&_[cmdk - item]]:py - 3 [&_[cmdk - item]_svg]:h - 5 [&_[cmdk - item]_svg]:w - 5'>;

    );
const CommandInput = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef < typeof Command</typeof > Primitive.Input>;
>(({ class_name, ...props }, ref) => (
  <div className='flex items - center border - b px - 3' cmdk - input - wrapper=>;
</div>
    <Search className='mr - 2 h - 4 w - 4 shrink - 0 opacity - 50' />;

    <CommandPrimitive.Input;
      className={cn (
        'flex h - 11 w - full rounded - md bg - transparent py - 3 text - sm outline - none placeholder:text - muted - foreground disabled:cursor - not - allowed disabled:opacity - 50',')



const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,

  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">"
</div>"
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />"


      className={cn(;"
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",;"
        className;)
      )}

  </div>;
const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
  <CommandPrimitive.List;



    ref={ref}"
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}"


const CommandEmpty = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithout</typeof > Ref < typeof CommandPrimitive.Empty>;

>((props, ref) => (
  <CommandPrimitive.Empty;

const CommandEmpty = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
    className="py-6 text-center text-sm";"

const CommandGroup = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Group>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
  <CommandPrimitive.Group;
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",;"

const CommandSeparator = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
  <CommandPrimitive.Separator;
    className={cn("-mx-1 h-px bg-border", className)}"


const CommandGroup = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Group>,
  React.ComponentPro</typeof > psWithoutRef < typeof CommandPrimitive.Group>;
    ref={ref})"
    className={cn('-mx-1 h-px bg-border', className)}

const CommandSeparator = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Separator>,
  React.Compone</typeof > ntPropsWithoutRef < typeof CommandPrimitive.Separator>;

    ref={ref})
    className={cn ('-mx - 1 h - px bg - border', class_name)}









const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
  <CommandPrimitive.Item;

    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50""

const CommandItem = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive.Item>,
</typeof> React.ComponentPropsWithoutRef < typeof CommandPrimitive.Item>;
      "relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none data-[disabled = true]:pointer - events - none data-[selected='true']:bg - accent data-[selected = true]:text - accent - foreground data-[disabled = true]:opacity - 50",")

  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) => {

}: React.HTMLAttributes<HTMLSpanElement>) => {

    <span;
        "ml-auto text-xs tracking-widest text-muted-foreground","
</span>"
pr-12325
