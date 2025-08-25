<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { cn } from '@/lib/utils';
=======
import React, { createContext, useContext, useState } from 'react';
>>>>>>> origin/cursor/build-and-fix-errors-e276

<<<<<<< HEAD
interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

interface TabsProps {
  children: React.ReactNode;
  className?: string;
=======
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  value?: string;
  onValueChange?: (value: string) => void;
}

<<<<<<< HEAD
const Tabs: React.FC<TabsProps> = ({ children, className = '', value, onValueChange, defaultValue }) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  
  const contextValue: TabsContextType = {
    value: value || internalValue,
    onValueChange: onValueChange || setInternalValue,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={`${className}`}>
=======
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

const TabsContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
} | undefined>(undefined);

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  ...props
}) => {
  const [currentValue, setCurrentValue] = React.useState(value || defaultValue || '');

  React.useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value);
    }
  }, [value]);

  const handleValueChange = (newValue: string) => {
    setCurrentValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div className={cn('w-full', className)} {...props}>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
        {children}
      </div>
    </TabsContext.Provider>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
interface TabsListProps {
=======
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ children, className = '' }: TabsListProps) {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}>
      {children}
    </div>
  );
}

interface TabsTriggerProps {
>>>>>>> origin/cursor/build-and-fix-errors-e276
  children: React.ReactNode;
  className?: string;
}

const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => {
=======
export const TabsList: React.FC<TabsListProps> = ({ children, className, ...props }) => {
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  return (
    <div
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

<<<<<<< HEAD
interface TabsTriggerProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, className = '', value }) => {
  const context = useContext(TabsContext);
  
  const isActive = context?.value === value;
  
  const handleClick = () => {
    context?.onValueChange(value);
  };

  return (
    <button 
      onClick={handleClick}
      data-state={isActive ? 'active' : 'inactive'}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}
=======
export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className, ...props }) => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }

  const isActive = context.value === value;

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'bg-background text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground',
        className
      )}
      onClick={() => context.onValueChange(value)}
      {...props}
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
    >
      {children}
    </button>
  );
};

<<<<<<< HEAD
interface TabsContentProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

const TabsContent: React.FC<TabsContentProps> = ({ children, className = '', value }) => {
  const context = useContext(TabsContext);
  
  if (context?.value !== value) {
    return null;
  }

=======
export const TabsContent: React.FC<TabsContentProps> = ({ value, children, className, ...props }) => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }

  if (context.value !== value) {
    return null;
  }

>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  return (
    <div
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
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
