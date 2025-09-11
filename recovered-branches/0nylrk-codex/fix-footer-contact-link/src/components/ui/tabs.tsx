
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import {cn} from '@/lib/utils';
const Tabs = TabsPrimitive.Root;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
=======
=======
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
></typeof>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
<<<<<<< HEAD
<<<<<<< HEAD

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
  <TabsPrimitive&& TabsPrimitive.List
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
<<<<<<< HEAD
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

=======
  />;
));
TabsList.displayName = TabsPrimitive.List.displayName;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======





>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.T</typeof>rigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
<<<<<<< HEAD
TabsList && TabsList.displayName = TabsPrimitive && TabsPrimitive.List.displayName;
=======

TabsList && TabsList.displayName = TabsPrimitive && TabsPrimitive.List.displayName;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const TabsTrigger = React && React.forwardRef<;
  React && React.ElementRef<typeof TabsPrimitive && TabsPrimitive.Trigger>,;
  React && React.ComponentPropsWithoutRef<typeof TabsPrimitive && TabsPrimitive.T</typeof>rigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive&& TabsPrimitive.Trigger
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm'
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const TabsTrigger = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Trigger;


<<<<<<< HEAD
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 && 1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className
TabsList.displayName = TabsPrimitive.List.displayName;
;
const TabsTrigger = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Trigger;
    ref={ref}
    className={cn(;
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",;
      className;
    )}
    {...props}
  />;
));





<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
<<<<<<< HEAD
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
=======
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


=======
const TabsTrigger = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Trigger;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 && 1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      className
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




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof TabsPr</typeof>imitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
TabsTrigger && TabsTrigger.displayName = TabsPrimitive && TabsPrimitive.Trigger.displayName;
=======

TabsTrigger && TabsTrigger.displayName = TabsPrimitive && TabsPrimitive.Trigger.displayName;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const TabsContent = React && React.forwardRef<;
  React && React.ElementRef<typeof TabsPrimitive && TabsPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof TabsPr</typeof>imitive && imitive.Content>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive&& TabsPrimitive.Content
<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const TabsContent = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Content;

<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
;
const TabsContent = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Content;
    ref={ref}
    className={cn(;
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",;
      className;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      className
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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
<<<<<<< HEAD

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
<<<<<<< HEAD
TabsContent.displayName = TabsPrimitive.Content.displayName;
;
export { Tabs, TabsList, TabsTrigger, TabsContent }import * as React from "react" import * as TabsPrimitive from "@radix-ui/react-tabs" const Tabs = TabsPrimitive.Root const TabsList = React.forwardRef< React.ElementRef<typeof TabsPrimitive.List>;
React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> > ( ({
  className, ...props 
}, ref) => (<TabsPrimitive.List) 
}{
  ...props 
}/>) ) TabsList.displayName = TabsPrimitive.List.displayName const TabsTrigger = React.forwardRef< React.ElementRef<typeof TabsPrimitive.Trigger>;
React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> > ( ({
  className, ...props 
}, ref) => (<TabsPrimitive.Trigger) 
}{
  ...props 
}/>) ) TabsTrigger.displayName = TabsPrimitive.Trigger.displayName const TabsContent = React.forwardRef< React.ElementRef<typeof TabsPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> > ( ({
  className, ...props 
}, ref) => (<TabsPrimitive.Content) 
}{
  ...props 
}/>) ) TabsContent.displayName = TabsPrimitive.Content.displayName export {
  Tabs, TabsList, TabsTrigger, TabsContent 
}
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent }
export { Tabs, TabsList, TabsTrigger, TabsContent }
;

export { Tabs, TabsList, TabsTrigger, TabsContent };
export { Tabs, TabsList, TabsTrigger, TabsContent }
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

export { Tabs, TabsList, TabsTrigger, TabsContent }
;

=======


export { Tabs, TabsList, TabsTrigger, TabsContent };
export { Tabs, TabsList, TabsTrigger, TabsContent }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
