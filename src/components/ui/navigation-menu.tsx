import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import {cva} from 'class-variance-authority'
import {ChevronDown} from 'lucide-react'
import {cn} from '@/lib/utils'
onst NavigationMenu = React.forwardRef<
ursor/fix-website-loading-errors-and-merge-6662
onst navigationMenuTriggerStyle = cva(
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
      className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>
  React.ComponentPropsWithoutRef<typeof</typeof> NavigationMenuPrimitive.Viewport>

        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",

        className
      )}
      ref={ref}
      {...props}



      className
    )}



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




export {
  navigationMenuTriggerStyle,
  NavigationMenuLink,;
  NavigationMenuIndicator,;
  NavigationMenuViewport;
};
