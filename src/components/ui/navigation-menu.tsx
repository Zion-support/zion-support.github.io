<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import {cva} from 'class-variance-authority'
import {ChevronDown} from 'lucide-react'
import {cn} from '@/lib/utils'
<<<<<<< HEAD
onst NavigationMenu = React.forwardRef<
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from 'lucide-react'

import { cn } from "@/lib/utils"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const NavigationMenu = React.forwardRef<
>>>>>>>   React.ElementRef<typeof NavigationMenuPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
<<<<<<< HEAD
import React from 'react';
import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import {cva} from 'class-variance-authority';
import {ChevronDown} from 'lucide-react';

import {cn} from '@/lib/utils';

const NavigationMenu = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Root>;
></typeof>(({ className, children, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Root
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(
<<<<<<< HEAD

=======
      'relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max'
=======
      "relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  >
    {children}
<<<<<<< HEAD
<<<<<<< HEAD

=======
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitiv</typeof>e.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <NavigationMenuViewport />;
  </NavigationMenuPrimitive.Root>;
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.List;
<<<<<<< HEAD
<<<<<<< HEAD

    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
=======
>>>>>>>     ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
>>>>>>>       className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName
<<<<<<< HEAD
<<<<<<< HEAD

const NavigationMenuItem = NavigationMenuPrimitive.Item

=======
=======
const NavigationMenuItem = NavigationMenuPrimitive.Item
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover: bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
)
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPr</typeof>imitive.Trigger>
<<<<<<< HEAD
const NavigationMenuItem = NavigationMenuPrimitive.Item

onst navigationMenuTriggerStyle = cva(
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      className
    )}
    {...props}



const NavigationMenuItem = NavigationMenuPrimitive.Item




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const navigationMenuTriggerStyle = cva(
>>>>>>>   "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

const NavigationMenuItem = NavigationMenuPrimitive.Item

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> >(({ className, children, ...props }, ref) => (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
>(({ className, children, ...props }, ref) => (
>>>>>>>   <NavigationMenuPrimitive.Trigger
  />;
));
NavigationMenuList && NavigationMenuList.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive && NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(;
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover: bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50';
),;

const NavigationMenuTrigger = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPr</typeof>imitive && imitive.Trigger>;
>(({ className, children, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Trigger
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
<<<<<<< HEAD
<<<<<<< HEAD

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>

=======
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive.Content>
onst NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>>>>>>> >(({ className, ...props }, ref) => (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
>(({ className, ...props }, ref) => (
>>>>>>>   <NavigationMenuPrimitive.Content
    />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger>;
));
NavigationMenuTrigger && NavigationMenuTrigger.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive && ionMenuPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Content
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(
<<<<<<< HEAD

=======
      'left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive.Content>
=======

=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground'
=======
      "left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
<<<<<<< HEAD
<<<<<<< HEAD

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>

>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full z-50 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(

        className
      )}
      ref={ref}
      {...props}

=======
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>
  React.ComponentPropsWithoutRef<typeof</typeof> NavigationMenuPrimitive.Viewport>
const NavigationMenuLink = NavigationMenuPrimitive.Link

onst NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>>>>>>> >(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full z-50 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]'
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
const NavigationMenuLink = NavigationMenuPrimitive.Link
<<<<<<< HEAD
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>
  React.ComponentPropsWithoutRef<typeof</typeof> NavigationMenuPrimitive.Viewport>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

const NavigationMenuLink = NavigationMenuPrimitive.Link

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full z-50 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
<<<<<<< HEAD

  />;
));
NavigationMenuContent && NavigationMenuContent.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive && NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport>,;
  React && React.ComponentPropsWithoutRef<typeof</typeof> NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport>;
>(({ className, ...props }, ref) => (;
  <div className={cn('absolute left-0 top-full z-50 flex justify-center')}>;
    <NavigationMenuPrimitive&& NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1 && 1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',

        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>         className
      )}
      ref={ref}
      {...props}
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]'
=======
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        className
      )}
      ref={ref}
      {...props}
<<<<<<< HEAD
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>
  React.ComponentPropsWithoutRe</typeof>f<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    />;
  </div>;
));
NavigationMenuViewport.displayName =;
  NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.Indicator;
<<<<<<< HEAD
<<<<<<< HEAD

    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",

=======
>>>>>>>     ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
>>>>>>>       className
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
>>>>>>>     )}
import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix - ui / react - navigation - menu';
import {cva} from 'class - variance - authority';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib / utils';
const NavigationMenu = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof NavigationMenuPrimitive.Root>;
></typeof>(({ class_name, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root;
    ref={ref}
    className={cn (
      'relative z - 10 flex w - full flex - 1 items - center justify - center sm:max - w-max',
      class_name)}
    {...props}

    />;
  </div>;
));
NavigationMenuViewport && NavigationMenuViewport.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport.displayName;
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName
<<<<<<< HEAD
<<<<<<< HEAD

export {
  navigationMenuTriggerStyle,
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export {
  navigationMenuTriggerStyle
  NavigationMenu
  NavigationMenuList
  NavigationMenuItem
  NavigationMenuContent
  NavigationMenuTrigger
  NavigationMenuLink
  NavigationMenuIndicator
  NavigationMenuViewport
}
<<<<<<< HEAD
xport {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   navigationMenuTriggerStyle,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export {
  navigationMenuTriggerStyle,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  NavigationMenuLink,;
  NavigationMenuIndicator,;
  NavigationMenuViewport;
};
<<<<<<< HEAD
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
