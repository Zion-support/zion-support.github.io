<<<<<<< HEAD:src/components/ui/tabs.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

=======
import React, { createContext, useContext, useState } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/tabs.tsx
interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
const TabsContext = createContext<TabsContextType | undefined>(undefined);
interface TabsProps {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}
<<<<<<< HEAD:src/components/ui/tabs.tsx

export function Tabs({ children, defaultValue, value, onValueChange, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(value || defaultValue || '');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (onValueChange) {
      onValueChange(tab);
    }
  };

=======
const Tabs: React.FC<TabsProps> = ({
  children,
  className = '',
  value: controlledValue,
  onValueChange: controlledOnValueChange,
  defaultValue = ''
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const onValueChange = controlledOnValueChange || setInternalValue;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/tabs.tsx
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};
interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}
<<<<<<< HEAD:src/components/ui/tabs.tsx

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export function TabsList({ children, className = '' }: TabsListProps) {
=======
const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/tabs.tsx
  return (
    <div className={`flex border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};
interface TabsTriggerProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}
<<<<<<< HEAD:src/components/ui/tabs.tsx

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function TabsTrigger({ children, value, className = '' }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');

  const isActive = context.activeTab === value;

  return (
    <button
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
        isActive
          ? 'border-zion-cyan text-zion-cyan'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      } ${className}`}
      onClick={() => context.setActiveTab(value)}
=======
const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, className = '', value }) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsTrigger must be used within Tabs');
  }
  const isActive = context.value === value;
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}
      onClick={() => context.onValueChange(value)}
      data-state={isActive ? 'active' : 'inactive'}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/tabs.tsx
    >
      {children}
    </button>
  );
<<<<<<< HEAD:src/components/ui/tabs.tsx
}

interface TabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function TabsContent({ children, value, className = '' }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');

  if (context.activeTab !== value) return null;

  return <div className={className}>{children}</div>;
}
=======
};
interface TabsContentProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}
const TabsContent: React.FC<TabsContentProps> = ({ children, className = '', value }) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsContent must be used within Tabs');
  }
  if (context.value !== value) {
    return null;
  }
  return (
    <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}>
      {children}
    </div>
  );
};
export { Tabs, TabsList, TabsTrigger, TabsContent };
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/tabs.tsx
