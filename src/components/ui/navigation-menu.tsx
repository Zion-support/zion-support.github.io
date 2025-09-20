import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>origin/main
></typeof>(({ className children, ...props }, ref) => (
<NavigationMenuPrimitive.Root ref={ref}
className={cn(
"relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max";
className;
)}
{...props}
>;
{children}
<NavigationMenuViewport />;
</NavigationMenuPrimitive.Root>;
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef<;
React.ElementRef<typeof NavigationMenuPrimitive.List>;
React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitiv</typeof>e.List>;
>(({ className, ...props }, ref) => (
<NavigationMenuPrimitive.List ref={ref}
className={cn(
"group flex flex-1 list-none items-center justify-center space-x-1";
className;
)}
{...props}
/>;
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName,
export {
  navigationMenuTriggerStyle,
NavigationMenu
  NavigationMenuList,
NavigationMenuItem
  NavigationMenuContent,
NavigationMenuTrigger
  NavigationMenuLink,
NavigationMenuIndicator
  NavigationMenuViewport}origin/main
