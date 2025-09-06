<<<<<<< HEAD
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
const Tabs = TabsPrimitive.Root;
=======
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
=======
=======
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'
=======
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.T</typeof>rigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
const TabsTrigger = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Trigger;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof TabsPr</typeof>imitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
const TabsContent = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Content;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
export { Tabs, TabsList, TabsTrigger, TabsContent }
=======
export { Tabs, TabsList, TabsTrigger, TabsContent }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

export { Tabs, TabsList, TabsTrigger, TabsContent };
=======
export { Tabs, TabsList, TabsTrigger, TabsContent }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
