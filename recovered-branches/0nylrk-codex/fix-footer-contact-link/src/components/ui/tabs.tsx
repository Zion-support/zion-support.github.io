
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
=======

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
=======
=======
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"


import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
;
import { cn } from "@/lib/utils";
;
const Tabs = TabsPrimitive.Root;
;
const TabsList = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.List;
    ref={ref}

      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",


      className
    className={cn(;
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",;
      className;
    )}
    {...props}
  />;
));





const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
=======
=======

const Tabs = TabsPrimitive && TabsPrimitive.Root;

const TabsList = React && React.forwardRef<;
  React && React.ElementRef<typeof TabsPrimitive && TabsPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<typeof TabsPrimitive && TabsPrimitive.List>;
></typeof>(({ className, ...props }, ref) => (;
  <TabsPrimitive&& TabsPrimitive.List>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
=======
  />;
));
TabsList.displayName = TabsPrimitive.List.displayName;
=======





>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.T</typeof>rigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
TabsList && TabsList.displayName = TabsPrimitive && TabsPrimitive.List.displayName;
const TabsTrigger = React && React.forwardRef<;
  React && React.ElementRef<typeof TabsPrimitive && TabsPrimitive.Trigger>,;
  React && React.ComponentPropsWithoutRef<typeof TabsPrimitive && TabsPrimitive.T</typeof>rigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive&& TabsPrimitive.Trigger
=======

    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm'
=======


=======const TabsTrigger = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Trigger;






const TabsTrigger = React && React.forwardRef<;
  React && React.ElementRef<typeof TabsPrimitive && TabsPrimitive.Trigger>,;
  React && React.ComponentPropsWithoutRef<typeof TabsPrimitive && TabsPrimitive.T</typeof>rigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive&& TabsPrimitive.Trigger
=======


=======
const TabsTrigger = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Trigger;


    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 && 1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',      className
    )}
    {...props}
  />;
));
=======
  />;
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof TabsPr</typeof>imitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
TabsTrigger && TabsTrigger.displayName = TabsPrimitive && TabsPrimitive.Trigger.displayName;
const TabsContent = React && React.forwardRef<;
  React && React.ElementRef<typeof TabsPrimitive && TabsPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof TabsPr</typeof>imitive && imitive.Content>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive&& TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
=======


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      className=======

    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    )}
    {...props}
  />;
));

TabsContent && TabsContent.displayName = TabsPrimitive && TabsPrimitive.Content.displayName;


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
export { Tabs, TabsList, TabsTrigger, TabsContent };
export { Tabs, TabsList, TabsTrigger, TabsContent }
;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

export { Tabs, TabsList, TabsTrigger, TabsContent }
;

=======


export { Tabs, TabsList, TabsTrigger, TabsContent };
export { Tabs, TabsList, TabsTrigger, TabsContent }
;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
