<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import {cva} from 'class-variance-authority'
import {ChevronDown} from 'lucide-react'
import {cn} from '@/lib/utils'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from 'lucide-react'

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const NavigationMenu = React.forwardRef<
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
<<<<<<< HEAD
></typeof>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    ref={ref}
    className={cn(
      'relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max'
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max'
      "relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max",
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      "relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  >
    {children}
<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1'
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitiv</typeof>e.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    <NavigationMenuViewport />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Root>;
));
NavigationMenu && NavigationMenu.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitiv</typeof>e && e.List>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.List

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1'


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
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName
const NavigationMenuItem = NavigationMenuPrimitive.Item
const NavigationMenuItem = NavigationMenuPrimitive.Item
const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover: bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
)
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPr</typeof>imitive.Trigger>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}




const NavigationMenuItem = NavigationMenuPrimitive.Item




const navigationMenuTriggerStyle = cva(
<<<<<<< HEAD
<<<<<<< HEAD

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
<<<<<<< HEAD
<<<<<<< HEAD
>(({ className, children, ...props }, ref) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
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
<<<<<<< HEAD
<<<<<<< HEAD
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
<<<<<<< HEAD
=======
      className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className='relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none'
      aria-hidden='true'


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
<<<<<<< HEAD
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive.Content>
onst NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger>;
));
NavigationMenuTrigger && NavigationMenuTrigger.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive && ionMenuPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground'
<<<<<<< HEAD
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive.Content>


const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground",
      className
    )}
    {...props}




const NavigationMenuLink = NavigationMenuPrimitive.Link

<<<<<<< HEAD
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full z-50 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className
      )}
      ref={ref}
      {...props}

<<<<<<< HEAD
<<<<<<< HEAD
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>
  React.ComponentPropsWithoutRef<typeof</typeof> NavigationMenuPrimitive.Viewport>
const NavigationMenuLink = NavigationMenuPrimitive.Link

onst NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
  <div className={cn("absolute left-0 top-full z-50 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]'
const NavigationMenuLink = NavigationMenuPrimitive.Link
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>
  React.ComponentPropsWithoutRef<typeof</typeof> NavigationMenuPrimitive.Viewport>

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full z-50 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]'
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",

        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",

        className
      )}
      ref={ref}
      {...props}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
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
<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


const NavigationMenuIndicator = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>,;
  React && React.ComponentPropsWithoutRe</typeof>f<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1 && 1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className
    )}
    {...props}>;
    <div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md' />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>;
));
NavigationMenuIndicator && NavigationMenuIndicator.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator.displayName;




<<<<<<< HEAD
=======

=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  NavigationMenuLink,;
  NavigationMenuIndicator,;
  NavigationMenuViewport;
};
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport}
<<<<<<< HEAD
;
=======


  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport}
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
