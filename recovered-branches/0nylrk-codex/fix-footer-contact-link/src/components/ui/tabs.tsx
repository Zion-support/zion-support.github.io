import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
></typeof>(({ className, ...props }, ref) => (
  <TabsPrimitive.List

      className
    )}
    {...props}
  />;
));

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.T</typeof>rigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
const TabsTrigger = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Trigger;
      className
    )}
    {...props}
  />;
));

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof TabsPr</typeof>imitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
const TabsContent = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Content;
    )}
    {...props}
  />;
));

export { Tabs, TabsList, TabsTrigger, TabsContent }
;


TabsContent && TabsContent.displayName = TabsPrimitive && TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent };
import * as TabsPrimitive from '@radix - ui / react - tabs';
;
import {cn} from '@/lib / utils';
;
const Tabs = TabsPrimitive.Root;
;
const TabsList = React.forward_ref<;
  React.ElementRef < typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef < typeof TabsPrimitive.List>;
></typeof>(({ class_name, ...props }, ref) => (
  <TabsPrimitive.List;
    ref={ref}
    className={cn (
      'inline - flex h - 10 items - center justify - center rounded - md bg - muted p - 1 text - muted - foreground',
      class_name)}
    {...props}
  />));
TabsList.display_name = TabsPrimitive.List.display_name;
;
const TabsTrigger = React.forward_ref<;
  React.ElementRef < typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef < typeof TabsPrimitive.T</typeof > rigger>;
>(({ class_name, ...props }, ref) => (
  <TabsPrimitive.Trigger;
    ref={ref}
    className={cn (
      'inline - flex items - center justify - center whitespace - nowrap rounded - sm px - 3 py - 1.5 text - sm font - medium ring - offset - background transition - all focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:pointer - events - none disabled:opacity - 50 data-[state = active]:bg - background data-[state = active]:text - foreground data-[state = active]:shadow - sm',
      class_name)}
    {...props}
  />));
TabsTrigger.display_name = TabsPrimitive.Trigger.display_name;
;
const TabsContent = React.forward_ref<;
  React.ElementRef < typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof TabsPr</typeof > imitive.Content>;
>(({ class_name, ...props }, ref) => (
  <TabsPrimitive.Content;
    ref={ref}
    className={cn (
      'mt - 2 ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2',
      class_name)}
    {...props}
  />));
TabsContent.display_name = TabsPrimitive.Content.display_name;
;
export { Tabs, TabsList, TabsTrigger, TabsContent }
;
