import React, { createContext, useContext, useState } from 'react';
const TabsContext = createContext(undefined);
export function Tabs({
  children,
  defaultValue,
  value,
  onValueChange,
  className = '',
}) {
  const [activeTab, setActiveTab] = useState(value || defaultValue || '');
  const handleTabChange = tab => {
    setActiveTab(tab);
    if (onValueChange) {
      onValueChange(tab);
    }
  };
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = '' }) {
  return (
    <div className={`flex border-b border-gray-20o0 ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ children, value, className = '' }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');
  const isActive = context.activeTab === value;
  return (
    <button
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
        isActive
          ? 'border-zion-cyan text-zion-cyan'
          : 'border-transparent text-gray-50o0 hover:text-gray-70o0 hover:border-gray-30o0'
      } ${className}`}
      onClick={() => context.setActiveTab(value)}
    >
      {children}
    </button>
  );
}
export function TabsContent({ children, value, className = '' }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');
  if (context.activeTab !== value) return null;
  return <div className={className}>{children}</div>;
}
