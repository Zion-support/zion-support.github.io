<<<<<<< HEAD


=======
import * as React from "react""
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu""
import { cva } from "class-variance-authority""
import { ChevronDown } from 'lucide-react''
import { cn } from "@/lib/utils""
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      "relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max",",
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className
    )}
    {...props}
  >
    {children}
<<<<<<< HEAD


=======
    <NavigationMenuViewport />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Root>;
));
NavigationMenu && NavigationMenu.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitiv</typeof>e && e.List>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.List
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1''
    <NavigationMenuViewport />;
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from 'lucide-react'

import { cn } from "@/lib/utils"

  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max",
      className
    )}
    {...props}
  >;
    {children}
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",",
      className
    )}
    {...props}
const NavigationMenuItem = NavigationMenuPrimitive.Item
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"",
)
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName


<<<<<<< HEAD



const NavigationMenuItem = NavigationMenuPrimitive.Item




const navigationMenuTriggerStyle = cva(

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>


>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
  />;
));
NavigationMenuList && NavigationMenuList.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive && NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva(;,
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover: bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50';,
),;
const NavigationMenuTrigger = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPr</typeof>imitive && imitive.Trigger>;
>(({ className, children, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Trigger


    ref={ref}
<<<<<<< HEAD


=======
    className={cn(navigationMenuTriggerStyle(), "group", className)}"
    {...props}
  >
    {children}{" "}"
    <ChevronDown,
      className='relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none'',
      aria-hidden='true''
    ref={ref}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive.Content>
onst NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
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
<<<<<<< HEAD

      'left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground'
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
      "left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground",

=======
      "left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground",",
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className
    )}
    {...props}
const NavigationMenuLink = NavigationMenuPrimitive.Link
<<<<<<< HEAD


=======
    ref={ref}
    className={cn(
      "left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

>>>>>>> origin/cursor/delete-old-data-records-6bba

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD

  <div className={cn("absolute left-0 top-full z-50 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(


=======
  <div className={cn("absolute left-0 top-full z-50 flex justify-center")}>"
    <NavigationMenuPrimitive.Viewport
      className={cn(
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
        'origin-top-center relative mt-1 && 1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',',
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]","
  <div className={cn("absolute left-0 top-full z-50 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
>>>>>>> origin/cursor/delete-old-data-records-6bba
        className
      )}
      ref={ref}
      {...props}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",",
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className
    )}
import * as NavigationMenuPrimitive from '@radix - ui / react - navigation - menu';
import {cva} from 'class - variance - authority';
import {cn} from '@/lib / utils';
const NavigationMenu = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof NavigationMenuPrimitive.Root>;
></typeof>(({ class_name, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root;
    ref={ref}
    className={cn (
      'relative z - 10 flex w - full flex - 1 items - center justify - center sm:max - w-max',',
      class_name)}
    {...props}
    />;
  </div>;
));
NavigationMenuViewport && NavigationMenuViewport.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport.displayName;
<<<<<<< HEAD


=======
  >,
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />"
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const NavigationMenuIndicator = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>,;
  React && React.ComponentPropsWithoutRe</typeof>f<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1 && 1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',',
      className
    )}
    {...props}>;
    <div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md' />;,
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>;
));
NavigationMenuIndicator && NavigationMenuIndicator.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
<<<<<<< HEAD


=======
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport}
;
}}))))))))))
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
