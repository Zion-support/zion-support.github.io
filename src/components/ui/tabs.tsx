import React, { createContext, useContext, useState, ReactNode } from "react";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
}

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: ReactNode;
}

export function Tabs({ defaultValue, className, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  className?: string;
  children: ReactNode;
}

export function TabsList({ className, children }: TabsListProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function TabsTrigger({ value, className, children }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      className={className}
      onClick={() => setActiveTab(value)}
      data-state={isActive ? "active" : "inactive"}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function TabsContent({ value, className, children }: TabsContentProps) {
  const { activeTab } = useTabsContext();
  
  if (activeTab !== value) {
    return null;
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
}