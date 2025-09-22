import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import { cn } from "@/lib/utils"
=======

import { cn } from "@/lib/utils""
import { Dialog, DialogContent } from "@/components/ui/dialog"

"
import { cn } from "@/lib/utils""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Dialog, DialogContent } from "@/components/ui/dialog"

=======
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
></typeof>(({ className, ...props }, ref) => (

"
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
<<<<<<< HEAD
      className;
import React from 'react';'
import * as React from 'react';'
import {Command, as, CommandPrimitive} from 'cmdk';'
import {Search} from 'lucide-react';
  <CommandPrimitive;
    ref={ref}
    className={cn('
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground'
      className;
    className={cn(;"
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",;
      className;

    )}
=======

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const Command = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive>,;
  React && React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
></typeof>(({ className, ...props }, ref) => (;
  <CommandPrimitive
    ref={ref}
    className={cn(

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
import React from 'react';
import * as React from 'react';
import {Command, as, CommandPrimitive} from 'cmdk';
import {Search} from 'lucide-react';
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground'
      className
    className={cn(;
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",;
      className;
    )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {...props}
  />;
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps;
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
Command && Command.displayName = CommandPrimitive && CommandPrimitive.displayName;

interface CommandDialogProps;

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

extends React && React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
Command.displayName = CommandPrimitive.displayName;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

interface CommandDialogProps;

  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
Command.displayName = CommandPrimitive.displayName;

        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <Dialog {...props}>;'
      <DialogContent className='overflow-hidden p-0 shadow-lg'>;'
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>;

          {children}
        </Command>;
      </DialogContent>;
    </Dialog>;
  );

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground'
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CommandDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}
const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {
  return (
    <Dialog {...props}>
      <DialogContent className='overflow-hidden p-0 shadow-lg'>
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
interface CommandDialogProps;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

interface CommandDialogProps
interface CommandDialogProps;
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, ...props }, ref) => (
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />
    <CommandPrimitive.Input

=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>

>(({ className, ...props }, ref) => (
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>(({ className, ...props }, ref) => (
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />
    <CommandPrimitive.Input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>(({ className, ...props }, ref) => (
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />
    <CommandPrimitive.Input
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};

=======
};
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const CommandInput = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Input>,;
  React && React.ComponentPropsWithoutRef<typeof Command</typeof>Primitive && Primitive.Input>;
>(({ className, ...props }, ref) => (;'
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>;'
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />;
<<<<<<< HEAD
<<<<<<< HEAD
    <CommandPrimitive&& CommandPrimitive.Input
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ref={ref}
      className={cn('
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50'
        className;
=======
    <CommandPrimitive&& CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50'
        className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      )}
      {...props}
    />;
  </div>;
));

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const CommandList = React.forwardRef<
=======
    <CommandPrimitive&& CommandPrimitive.Inputconst CommandList = React.forwardRef<
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    <CommandPrimitive&& CommandPrimitive.Inputconst CommandList = React.forwardRef<
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const CommandList = React.forwardRef<
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
const CommandList = React.forwardRef<
    <CommandPrimitive&& CommandPrimitive.Inputconst CommandList = React.forwardRef<
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  React.ElementRef<typeof CommandPrimitive.List>
  React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive.List>
>(({ className, ...props }, ref) => (
<CommandPrimitive.List
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  <CommandPrimitive.List;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import { cn } from "@/lib/utils"""
import { Dialog, DialogContent } from "@/components/ui/dialog"""
import { Dialog, DialogContent } from "@/components/ui/dialog""
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
"
import * as React from "react";""
import { Command as CommandPrimitive } from "cmdk";""
import { Search } from "lucide-react";"
;"
import { cn } from "@/lib/utils";""
import { Dialog, DialogContent } from "@/components/ui/dialog";"
;
const Command = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive>,;

  React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground","
      className;"
import React from 'react';
import * as React from 'react';
import {Command, as, CommandPrimitive} from 'cmdk';
import {Search} from 'lucide-react';
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground
      className;
    className={cn(;
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",;"
      className;)
    )}
    {...props}
  />;

  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialog</typeof>Props) => {;
    <Dialog {...props}>
      <DialogContent className='overflow-hidden p-0 shadow-lg'>

        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>

      <DialogContent className="overflow-hidden p-0 shadow-lg">"
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">"

    <Dialog {...props}>;
      <DialogContent className='overflow-hidden p-0 shadow-lg'>;

        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>;

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=>
</div>
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />

    <CommandPrimitive.Input;
};
const CommandInput = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Input>,;

  React && React.ComponentPropsWithoutRef<typeof Command</typeof>Primitive && Primitive.Input>;
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=>;
    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />;

    <CommandPrimitive&& CommandPrimitive.Input;
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50

  </div>;
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>
  React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive.List>
</type>

  <CommandPrimitive.List;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
CommandInput && CommandInput.displayName = CommandPrimitive && CommandPrimitive.Input.displayName;

const CommandList = React && React.forwardRef<;

  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<type</typeof>of CommandPrimitive && CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

;'
import {cn} from '@/lib / utils';'
;
import {cn} from '@/lib / utils';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Dialog, DialogContent} from '@/components / ui / dialog';
;
const Command = React.forward_ref<;
  React.ElementRef < typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef < typeof CommandPrimitive>;
></typeof>(({ class_name, ...props }, ref) => (
  <CommandPrimitive;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ref={ref}
=======
    ref={ref}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    ref={ref}'
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
<<<<<<< HEAD
<<<<<<< HEAD
    className='py - 6 text - center text - sm';
    {...props}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    ref={ref}
    className={cn('
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground'

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
CommandGroup.displayName = CommandPrimitive.Group.displayName;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>
  React.Compone</typeof>ntPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
<CommandPrimitive.Separator
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    ref={ref}
=======
  <CommandPrimitive.Separator;
    ref={ref}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>
 </typeof> React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
<CommandPrimitive.Item
ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"
CommandSeparator && CommandSeparator.displayName = CommandPrimitive && CommandPrimitive.Separator.displayName;

const CommandItem = React && React.forwardRef<;

  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Item>,;
 </typeof> React && React.ComponentPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
<CommandPrimitive&& CommandPrimitive.Separator
<<<<<<< HEAD

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
  />));
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
CommandEmpty.display_name = CommandPrimitive.Empty.display_name;
;
</CommandPrimitive>
 </typeof> React && React.ComponentPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Item>;
</typeof>
  <CommandPrimitive&& CommandPrimitive.Separator;
  <CommandPrimitive&& CommandPrimitive.Item;
const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
</CommandPrimitive>
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
</typeof>
  <CommandPrimitive.Item;
    ref={ref}
    className={cn('
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50","
      className;)
    )}
    {...props}
  />
</CommandPrimitive>
const CommandShortcut =</HTMLSpanElement> ({;)
}: React && React.HTMLAttributes<HTMLSpanElement>) => {;
</HTMLSpanElement>
}: React.HTMLAttributes<HTMLSpanElement>) => {
</HTMLSpanElement>
    <span;
      className={cn("
        "ml-auto text-xs tracking-widest text-muted-foreground","
        className;)
      )}
      {...props}
    />;
</span>

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

ref={ref}
    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}
className
    )}const CommandSeparator = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Separator;

<<<<<<< HEAD
    {...props}
  />
));
<<<<<<< HEAD
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>
 </typeof> React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item

ref={ref}
    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}
CommandSeparator && CommandSeparator.displayName = CommandPrimitive && CommandPrimitive.Separator.displayName;

const CommandItem = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Item>,;
 </typeof> React && React.ComponentPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive&& CommandPrimitive.Item

ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"
const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;
ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>
 </typeof> React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item;
CommandSeparator && CommandSeparator.displayName = CommandPrimitive && CommandPrimitive.Separator.displayName;

const CommandItem = React && React.forwardRef<;
  React && React.ElementRef<typeof CommandPrimitive && CommandPrimitive.Item>,;
 </typeof> React && React.ComponentPropsWithoutRef<typeof CommandPrimitive && CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
<CommandPrimitive&& CommandPrimitive.Item

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    ref={ref}
    className={cn('"
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1 && 1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
className
    )}
    {...props}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  />

))

<<<<<<< HEAD
<<<<<<< HEAD
CommandItem && CommandItem.displayName = CommandPrimitive && CommandPrimitive.Item.displayName;

const CommandShortcut =</HTMLSpanElement> ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<HTMLSpanElement>) => {;

<<<<<<< HEAD
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

/>;
  );
  CommandSeparator,
};
  CommandSeparator}
;

    ref={ref})'
    className={cn ('-mx - 1 h - px bg - border', class_name)}'
    {...props}

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
    ref={ref}
    className={cn ('-mx - 1 h - px bg - border', class_name)}
    {...props}
      className
    )}
    {...props}
  />;
));
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>(({ class_name, ...props }, ref) => (
  <CommandPrimitive.Item;
    ref={ref}
className={cn ('"
      "relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none data-[disabled = true]:pointer - events - none data-[selected='true']:bg - accent data-[selected = true]:text - accent - foreground data-[disabled = true]:opacity - 50",
      class_name)}
    {...props}
  />));
;
CommandItem.display_name = CommandPrimitive.Item.display_name;
;
const CommandShortcut =</HTMLSpanElement> ({}
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) => {}
    />);
}'
CommandShortcut.display_name = 'CommandShortcut';
;

export {}
}: React.HTMLAttributes < HTMLSpanElement>) => {
    />);
}"
CommandShortcut.display_name = 'CommandShortcut';
;

export {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
  CommandSeparator,
};
  CommandSeparator}
;

CommandSeparator,
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

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
  CommandSeparator}
;

  CommandSeparator,
pr-12325
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
