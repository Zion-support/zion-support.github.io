<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import {cva} from 'class-variance-authority';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib/utils';
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

<<<<<<< HEAD
import { cn } from "@/lib/utils"

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD



import { cn } from "@/lib/utils"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
></typeof>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root

const NavigationMenu = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Root>;
></typeof>(({ className, children, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center'
      className
    )}
    {...props}>;
    {children}
    <NavigationMenuViewport />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Root>;
));import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
<<<<<<< HEAD
=======
      'relative z-10 flex max-w-max flex-1 items-center justify-center'
      "relative z-10 flex max-w-max flex-1 items-center justify-center",

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;




<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
NavigationMenu && NavigationMenu.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitiv</typeof>e && e.List>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.List
<<<<<<< HEAD
<<<<<<< HEAD

=======
    {...props}
  >;
    {children}
    <NavigationMenuViewport />;
  </NavigationMenuPrimitive.Root>;
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
;
const NavigationMenuList = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.List;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ref={ref}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1'
      className
    )}
    {...props}
  />;
<<<<<<< HEAD
));
<<<<<<< HEAD



<<<<<<< HEAD
=======
=======
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const NavigationMenuList = React.forwardRef<;
=======
));const NavigationMenuList = React.forwardRef<;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  React.ElementRef<typeof NavigationMenuPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.List;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",

    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover: bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
)
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}>;
    {children}{' '}
<<<<<<< HEAD
    <ChevronDown
<<<<<<< HEAD
<<<<<<< HEAD

=======
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
<<<<<<< HEAD

=======

<<<<<<< HEAD
=======
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive.Content>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
))
=======
    <ChevronDown))
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
NavigationMenuTrigger && NavigationMenuTrigger.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive && ionMenuPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Content
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
=======
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
;
const navigationMenuTriggerStyle = cva(;
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";
);
;
const NavigationMenuTrigger = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>;
>(({ className, children, ...props }, ref) => (;
  <NavigationMenuPrimitive.Trigger;
    ref={ref}

      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",

      className
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >;
    {children}{" "}
    <ChevronDown;
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180";
      aria-hidden="true";
    />;
  </NavigationMenuPrimitive.Trigger>;
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
;
const NavigationMenuContent = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.Content;
    ref={ref}
    className={cn(;
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",;
      className;
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    className={cn(

=======
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto '
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
    )}
    {...props}
  />
<<<<<<< HEAD

=======

<<<<<<< HEAD
=======
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>
  React.ComponentPropsWithoutRef<typeof</typeof> NavigationMenuPrimitive.Viewport>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    ref={ref}    className={cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto '
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
NavigationMenuContent && NavigationMenuContent.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive && NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport>,;
  React && React.ComponentPropsWithoutRef<typeof</typeof> NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport>;
>(({ className, ...props }, ref) => (;
  <div className={cn('absolute left-0 top-full flex justify-center')}>;
    <NavigationMenuPrimitive&& NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1 && 1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
<<<<<<< HEAD

=======

        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        className
=======

        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",

        className
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
;
const NavigationMenuViewport = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>;
>(({ className, ...props }, ref) => (;
  <div className={cn("absolute left-0 top-full flex justify-center")}>;
    <NavigationMenuPrimitive.Viewport;
      className={cn(;
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",;
        className;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    ref={ref}
    className={cn(
        className
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      )}
=======
        className      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      ref={ref}
      {...props}
    />;
  </div>;
));

<<<<<<< HEAD




<<<<<<< HEAD
<<<<<<< HEAD
=======
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]'
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======




>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>
  React.ComponentPropsWithoutRe</typeof>f<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in'
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
NavigationMenuViewport && NavigationMenuViewport.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport.displayName;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const NavigationMenuIndicator = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>,;
  React && React.ComponentPropsWithoutRe</typeof>f<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Indicator

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const NavigationMenuIndicator = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.Indicator;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


    ref={ref}
    className={cn(
<<<<<<< HEAD
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      'top-full z-[1] flex h-1 && 1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      className
    )}

NavigationMenuIndicator && NavigationMenuIndicator.displayName =;
<<<<<<< HEAD
  NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator.displayName;
<<<<<<< HEAD
=======
=======
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  NavigationMenuPrimitive.Indicator.displayName


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ref={ref}
=======
  NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator.displayName;    ref={ref}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}

NavigationMenuIndicator && NavigationMenuIndicator.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator.displayName;
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
      className
    )}
    {...props}>;
    <div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md' />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>;
));export {;
  navigationMenuTriggerStyle,;
  NavigationMenu,;
  NavigationMenuList,;
  NavigationMenuItem,;
  NavigationMenuContent,;
  NavigationMenuTrigger,;
  NavigationMenuLink,;
  NavigationMenuIndicator,;
  NavigationMenuViewport,
};
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
import {cn} from '@/lib / utils';
;
const NavigationMenu = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof NavigationMenuPrimitive.Root>;
></typeof>(({ class_name, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root;
    ref={ref}
    className={cn (
      'relative z - 10 flex max - w-max flex - 1 items - center justify - center',
      class_name)}
    {...props}
  >;
    {children}
    <NavigationMenuViewport />;
  </NavigationMenuPrimitive.Root>));
NavigationMenu.display_name = NavigationMenuPrimitive.Root.display_name;
;
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
;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
;
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
      className='relative top-[1px] ml - 1 h - 3 w - 3 transition duration - 200 group - data-[state = open]:rotate - 180';
      aria - hidden='true';
    />;
  </NavigationMenuPrimitive.Trigger>));
NavigationMenuTrigger.display_name = NavigationMenuPrimitive.Trigger.display_name;
;
const NavigationMenuContent = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof Navigat</typeof > ionMenuPrimitive.Content>;
>(({ class_name, ...props }, ref) => (
  <NavigationMenuPrimitive.Content;
    ref={ref}
    className={cn (
      'left - 0 top - 0 w - full data-[motion^=from-]:animate - in data-[motion^=to-]:animate - out data-[motion^=from-]:fade - in data-[motion^=to-]:fade - out data-[motion = from - end]:slide - in - from - right - 52 data-[motion = from - start]:slide - in - from - left - 52 data-[motion = to - end]:slide - out - to - right - 52 data-[motion = to - start]:slide - out - to - left - 52 md:absolute md:w - auto ',
      class_name)}
    {...props}
  />));
NavigationMenuContent.display_name = NavigationMenuPrimitive.Content.display_name;
;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
;
const NavigationMenuViewport = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef < typeof</typeof> NavigationMenuPrimitive.Viewport>;
>(({ class_name, ...props }, ref) => (
  <div className={cn ('absolute left - 0 top - full flex justify - center')}>;
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
;
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
;  NavigationMenuViewport,
};
  NavigationMenuViewport}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



  NavigationMenuViewport,
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
