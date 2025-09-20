import React, { createContext, useContext, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export function Tabs({ 
  children, 
  className = "", 
  value: controlledValue, 
  onValueChange: controlledOnValueChange,
  defaultValue = ""
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const onValueChange = controlledOnValueChange || setInternalValue;

  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={cn("", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export function TabsList({ children, className = "" }: TabsListProps) {
  return (
    <div className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)}>
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function TabsTrigger({ children, className = "", value }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsTrigger must be used within Tabs");
  }

  const isActive = context.value === value;

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className
      )}
      onClick={() => context.onValueChange(value)}
      data-state={isActive ? "active" : "inactive"}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function TabsContent({ children, className = "", value }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsContent must be used within Tabs");
  }

  if (context.value !== value) {
    return null;
  }

  return (
    <div className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}>
      {children}
    </div>
  );
}

// Export statements are already included above
