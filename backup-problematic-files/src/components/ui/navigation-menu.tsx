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
      className
    )}
    {...props}>;
    {children}
    <NavigationMenuViewport />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Root>;
));
NavigationMenu && NavigationMenu.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitiv</typeof>e && e.List>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1'
      className
    )}
    {...props}
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
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}>;
    {children}{' '}
    <ChevronDown
      className='relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none'
      aria-hidden='true'
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
      className
    )}
    {...props}
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
        className
      )}
      ref={ref}
      {...props}
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
  >;
    {children}
    <NavigationMenuViewport />;
  </NavigationMenuPrimitive.Root>));
NavigationMenu.display_name = NavigationMenuPrimitive.Root.display_name;
const NavigationMenuList = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef < typeof NavigationMenuPrimitiv</typeof > e.List>;
>(({ class_name, ...props }, ref) => (
  <NavigationMenuPrimitive.List;
    ref={ref}
    className={cn (
      'group flex flex - 1 list - none items - center justify - center space - x-1',
      class_name)}
    {...props}
  />));
NavigationMenuList.display_name = NavigationMenuPrimitive.List.display_name;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva (
  'group inline - flex h - 10 w - max items - center justify - center rounded - md bg - background px - 4 py - 2 text - sm font - medium transition - colors hover: bg - accent hover:text - accent - foreground focus:bg - accent focus:text - accent - foreground focus:outline - none disabled:pointer - events - none disabled:opacity - 50 data-[active]:bg - accent / 50 data-[state = open]:bg - accent / 50'),
const NavigationMenuTrigger = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef < typeof NavigationMenuPr</typeof > imitive.Trigger>;
>(({ class_name, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger;
    ref={ref}
    className={cn (navigationMenuTriggerStyle (), 'group', class_name)}
    {...props}
  >;
    {children}{' '}
    <ChevronDown;
      className='relative top-[1px] ml - 1 h - 4 w - 4 transition duration - 200 group - data-[state = open]:rotate - 180 pointer - events - none';
      aria - hidden='true';
    />;
  </NavigationMenuPrimitive.Trigger>));
NavigationMenuTrigger.display_name = NavigationMenuPrimitive.Trigger.display_name;
const NavigationMenuContent = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof Navigat</typeof > ionMenuPrimitive.Content>;
>(({ class_name, ...props }, ref) => (
  <NavigationMenuPrimitive.Content;
    ref={ref}
    className={cn (
      'left - 0 top - 0 z - 50 w - full rounded - md border bg - popover text - popover - foreground shadow - lg ring - 1 ring - border / 20 data-[motion^=from-]:animate - in data-[motion^=to-]:animate - out data-[motion^=from-]:fade - in data-[motion^=to-]:fade - out data-[motion = from - end]:slide - in - from - right - 52 data-[motion = from - start]:slide - in - from - left - 52 data-[motion = to - end]:slide - out - to - right - 52 data-[motion = to - start]:slide - out - to - left - 52 md:absolute md:w - auto dark:bg - secondary dark:text - foreground',
      class_name)}
    {...props}
  />));
NavigationMenuContent.display_name = NavigationMenuPrimitive.Content.display_name;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef < typeof</typeof> NavigationMenuPrimitive.Viewport>;
>(({ class_name, ...props }, ref) => (
  <div className={cn ('absolute left - 0 top - full z - 50 flex justify - center')}>;
    <NavigationMenuPrimitive.Viewport;
      className={cn (
        'origin - top - center relative mt - 1.5 h-[var (--radix - navigation - menu - viewport - height)] w - full overflow - hidden rounded - md border bg - popover text - popover - foreground shadow - lg data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 90 md:w-[var (--radix - navigation - menu - viewport - width)]',
        class_name)}
      ref={ref}
      {...props}
    />;
  </div>));
NavigationMenuViewport.display_name =;
  NavigationMenuPrimitive.Viewport.display_name;
const NavigationMenuIndicator = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRe</typeof > f<typeof NavigationMenuPrimitive.Indicator>;
>(({ class_name, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator;
    ref={ref}
    className={cn (
      'top - full z-[1] flex h - 1.5 items - end justify - center overflow - hidden data-[state = visible]:animate - in data-[state = hidden]:animate - out data-[state = hidden]:fade - out data-[state = visible]:fade - in',
      class_name)}
    {...props}
  >;
    <div className='relative top-[60%] h - 2 w - 2 rotate - 45 rounded - tl - sm bg - border shadow - md' />;
  </NavigationMenuPrimitive.Indicator>));
NavigationMenuIndicator.display_name =;
  NavigationMenuPrimitive.Indicator.display_name;
export {
    />;
  </div>;
));
NavigationMenuViewport && NavigationMenuViewport.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport.displayName;
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
export {;
  navigationMenuTriggerStyle,;
  NavigationMenu,;
  NavigationMenuList,;
  NavigationMenuItem,;
  NavigationMenuContent,;
  NavigationMenuTrigger,;
  NavigationMenuLink,;
  NavigationMenuIndicator,;
  NavigationMenuViewport,;
};
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}