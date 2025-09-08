import React, { createContext, useContext, useState, ReactNode } from 'react';

}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps extends React.PropsWithChildren<{}> {

  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string)    => void;
  className?: string;

}

export function Tabs(...args: []):  {
  const [activeTab, setActiveTab] = useState(value || defaultValue || '');

  const handleTabChange = (tab: string)    => {
    setActiveTab(tab);
    if (onValueChange) {
      onValueChange(tab);
    }
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

interface TabsListProps extends React.PropsWithChildren<{}> {

  children: ReactNode;
  className?: string;

}

export function TabsList(...args: []):  {
  return (
    <div className={`flex border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

interface TabsTriggerProps extends React.PropsWithChildren<{}> {

  children: ReactNode;
  value: string;
  className?: string;

}

export function TabsTrigger(...args: []):  {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');

  const isActive = context.activeTab === value;

  return (
    <button
      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'border-b-2 border-blue-500 text-blue-600'
          : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
      } ${className}`}
      onClick={() => context.setActiveTab(value)}
    >
      {children}
    </button>
  );
}

interface TabsContentProps extends React.PropsWithChildren<{}> {

  children: ReactNode;
  value: string;
  className?: string;

}

export function TabsContent(...args: []):  {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');

  if (context.activeTab !== value) {
    return null;
  }

  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
};
<<<<<<< HEAD

export { Tabs, TabsList, TabsTrigger, TabsContent };
=======
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
}
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

<<<<<<< HEAD
export { Tabs, TabsList, TabsTrigger, TabsContent }
=======
export { Tabs, TabsList, TabsTrigger, TabsContent }
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
