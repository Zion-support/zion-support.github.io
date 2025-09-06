
<<<<<<< HEAD


import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"




import { cn } from "@/lib/utils"

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
></typeof>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const NavigationMenu = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Root>;
></typeof>(({ className, children, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Root
<<<<<<< HEAD

      'relative z-10 flex max-w-max flex-1 items-center justify-center'
      className
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const NavigationMenu = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>;
>(({ className, children, ...props }, ref) => (;
  <NavigationMenuPrimitive.Root;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center'
      className
    )}
    {...props}>;
    {children}
    <NavigationMenuViewport />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Root>;
<<<<<<< HEAD
));

import { cn } from "@/lib/utils"
=======
));import { cn } from "@/lib/utils"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center'
      "relative z-10 flex max-w-max flex-1 items-center justify-center",

<<<<<<< HEAD
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;





const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitiv</typeof>e.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List


NavigationMenu && NavigationMenu.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitiv</typeof>e && e.List>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.List


    ref={ref}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1'
      className
    )}
    {...props}
  />;
<<<<<<< HEAD
));



const NavigationMenuList = React.forwardRef<;
=======
));const NavigationMenuList = React.forwardRef<;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  React.ElementRef<typeof NavigationMenuPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.List;
<<<<<<< HEAD



    ref={ref}
    className={cn(
=======
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",    ref={ref}
    className={cn(
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      "group flex flex-1 list-none items-center justify-center space-x-1",

    ref={ref}
    className={cn(
<<<<<<< HEAD
      "group flex flex-1 list-none items-center justify-center space-x-1",
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />

))
=======
      "group flex flex-1 list-none items-center justify-center space-x-1",))
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover: bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
)
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>

>(({ className, children, ...props }, ref) => (
<<<<<<< HEAD
  <NavigationMenuPrimitive.Trigger
>(({ className, children, ...props }, ref) => (
=======
  <NavigationMenuPrimitive.Trigger>(({ className, children, ...props }, ref) => (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}>;
    {children}{' '}
<<<<<<< HEAD
    <ChevronDown

      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>

))
=======
    <ChevronDown))
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>

<<<<<<< HEAD

>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
>(({ className, ...props }, ref) => (
=======
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content>(({ className, ...props }, ref) => (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  <NavigationMenuPrimitive.Content
NavigationMenuTrigger && NavigationMenuTrigger.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive && ionMenuPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Content
<<<<<<< HEAD
    ref={ref}
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
    className={cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto '
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",

      className
    )}
    {...props}
  />

=======
    ref={ref}    className={cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto '
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
>(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
<<<<<<< HEAD

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

        className

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
    ref={ref}
    className={cn(
        className
      )}
=======
        className      )}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      ref={ref}
      {...props}
    />;
  </div>;
));

<<<<<<< HEAD




=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>
  React.ComponentPropsWithoutRe</typeof>f<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
NavigationMenuViewport && NavigationMenuViewport.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>,;
  React && React.ComponentPropsWithoutRe</typeof>f<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Indicator

<<<<<<< HEAD

const NavigationMenuIndicator = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.Indicator;


    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1 && 1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      className
    )}

NavigationMenuIndicator && NavigationMenuIndicator.displayName =;
<<<<<<< HEAD
  NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator.displayName;
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =

  NavigationMenuPrimitive.Indicator.displayName


    ref={ref}
=======
  NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator.displayName;    ref={ref}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
));
NavigationMenuIndicator && NavigationMenuIndicator.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator.displayName;
NavigationMenuViewport.displayName =;
  NavigationMenuPrimitive.Viewport.displayName;
;
const NavigationMenuIndicator = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.Indicator;
    ref={ref}
    className={cn(;
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",;
      className;
    )}
    {...props}
  >;
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />;
  </NavigationMenuPrimitive.Indicator>;
));
NavigationMenuIndicator.displayName =;
  NavigationMenuPrimitive.Indicator.displayName;
;
export {;
=======
));export {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  navigationMenuTriggerStyle,;
  NavigationMenu,;
  NavigationMenuList,;
  NavigationMenuItem,;
  NavigationMenuContent,;
  NavigationMenuTrigger,;
  NavigationMenuLink,;
  NavigationMenuIndicator,;
<<<<<<< HEAD
  NavigationMenuViewport,;
=======
  NavigationMenuViewport,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
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
<<<<<<< HEAD
;
export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,



  NavigationMenuViewport,;
};
  NavigationMenuViewport}
;



  NavigationMenuViewport,
}
;
=======
;  NavigationMenuViewport,
};
  NavigationMenuViewport}
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
