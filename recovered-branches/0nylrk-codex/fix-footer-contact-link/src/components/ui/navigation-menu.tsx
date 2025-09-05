<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as NavigationMenuPrimitive from &quot;@radix-ui/react-navigation-menu&quot;
import { cva } from &quot;class-variance-authority&quot;
import { ChevronDown } from &quot;lucide-react&quot;

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(_({_className, _children, _...props}, _ref) => (
  <NavigationMenuPrimitive.Root
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative z-10 flex max-w-max flex-1 items-center justify-center&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    {_children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const _NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(_({_className, _...props}, _ref) => (
  <NavigationMenuPrimitive.List
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;group flex flex-1 list-none items-center justify-center space-x-1&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "group flex flex-1 list-none items-center justify-center space-x-1", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const _NavigationMenuItem = NavigationMenuPrimitive.Item

<<<<<<< HEAD
const navigationMenuTriggerStyle = cva(
  &quot;group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50&quot;
=======
const _navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
)

const _NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(_({_className, _children, _...props}, _ref) => (
  <NavigationMenuPrimitive.Trigger
<<<<<<< HEAD
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), &quot;group&quot;, className)}
    {...props}
  >
    {children}{&quot; &quot;}
=======
    ref={_ref}
    className={_cn(navigationMenuTriggerStyle(), _"group", _className)}
    {_...props}
  >
    {_children}{_" "}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <ChevronDown
      className=&quot;relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180&quot;
      aria-hidden=&quot;true&quot;
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const _NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(_({_className, _...props}, _ref) => (
  <NavigationMenuPrimitive.Content
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto &quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const _NavigationMenuLink = NavigationMenuPrimitive.Link

const _NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <div className={cn(&quot;absolute left-0 top-full flex justify-center&quot;)}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        &quot;origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]&quot;,
        className
=======
>(_({_className, _...props}, _ref) => (
  <div className={_cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={_cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      ref={_ref}
      {_...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const _NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(_({_className, _...props}, _ref) => (
  <NavigationMenuPrimitive.Indicator
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    <div className=&quot;relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md&quot; />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {_navigationMenuTriggerStyle, _NavigationMenu, _NavigationMenuList, _NavigationMenuItem, _NavigationMenuContent, _NavigationMenuTrigger, _NavigationMenuLink, _NavigationMenuIndicator, _NavigationMenuViewport}
