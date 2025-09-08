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
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;










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








  <CommandPrimitive.List


  <CommandPrimitive.List;







  <CommandPrimitive.Separator





  <CommandPrimitive.Item

  <CommandPrimitive&& CommandPrimitive.Item



    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",



CommandItem && CommandItem.displayName = CommandPrimitive && CommandPrimitive.Item.displayName;

const CommandShortcut =</HTMLSpanElement> ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<HTMLSpanElement>) => {;




CommandShortcut.displayName = "CommandShortcut"



export {

  Command,



  CommandSeparator,

};
  CommandSeparator}



