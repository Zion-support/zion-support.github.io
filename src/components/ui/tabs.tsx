import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TabsContextType {



  activeTab: anystring;
  setActiveTab: (tab: string)    => void;



}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps extends React.PropsWithChildren<{}> {

  children: anyReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string)    => void;
  className?: string;

}

export function Tabs(...args: any[]): any {
  const [activeTab, setActiveTab] = useState(value || defaultValue || '');

  const handleTabChange = (tab: anystring)    => {
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

export function TabsList(...args: any[]): any {
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

export function TabsTrigger(...args: any[]): any {
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

export function TabsContent(...args: any[]): any {
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
}
