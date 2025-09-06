<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {cn} from '@/lib/utils';
const Tabs = TabsPrimitive.Root;import {cn} from '@/lib/utils';
const Tabs = TabsPrimitive.Root;
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
></typeof>(({ className, ...props }, ref) => (
  <TabsPrimitive.List

<<<<<<< HEAD
<<<<<<< HEAD
const Tabs = TabsPrimitive && TabsPrimitive.Root;

const TabsList = React && React.forwardRef<;
  React && React.ElementRef<typeof TabsPrimitive && TabsPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<typeof TabsPrimitive && TabsPrimitive.List>;
></typeof>(({ className, ...props }, ref) => (;
  <TabsPrimitive&& TabsPrimitive.List
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ref={ref}
    className={cn(

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",


      className
<<<<<<< HEAD
=======
    className={cn(;
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",;
      className;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    ref={ref}
    className={cn(
      className
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    {...props}
  />;
));

<<<<<<< HEAD
<<<<<<< HEAD




<<<<<<< HEAD
<<<<<<< HEAD
=======
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.T</typeof>rigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm'
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
TabsList && TabsList.displayName = TabsPrimitive && TabsPrimitive.List.displayName;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const TabsTrigger = React && React.forwardRef<;
  React && React.ElementRef<typeof TabsPrimitive && TabsPrimitive.Trigger>,;
  React && React.ComponentPropsWithoutRef<typeof TabsPrimitive && TabsPrimitive.T</typeof>rigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive&& TabsPrimitive.Trigger

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const TabsTrigger = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Trigger;
<<<<<<< HEAD
=======
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    )}
    {...props}
  />;
));





<<<<<<< HEAD
<<<<<<< HEAD
=======
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof TabsPr</typeof>imitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
<<<<<<< HEAD
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
TabsTrigger && TabsTrigger.displayName = TabsPrimitive && TabsPrimitive.Trigger.displayName;

const TabsContent = React && React.forwardRef<;
  React && React.ElementRef<typeof TabsPrimitive && TabsPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof TabsPr</typeof>imitive && imitive.Content>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive&& TabsPrimitive.Content
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const TabsContent = React.forwardRef<;
  React.ElementRef<typeof TabsPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <TabsPrimitive.Content;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ref={ref}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
      classNameexport { Tabs, TabsList, TabsTrigger, TabsContent };
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export { Tabs, TabsList, TabsTrigger, TabsContent };
export { Tabs, TabsList, TabsTrigger, TabsContent }
;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export { Tabs, TabsList, TabsTrigger, TabsContent }
export { Tabs, TabsList, TabsTrigger, TabsContent }
;

export { Tabs, TabsList, TabsTrigger, TabsContent };
export { Tabs, TabsList, TabsTrigger, TabsContent }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
