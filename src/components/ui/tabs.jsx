import React, { createContext, useContext, useState } from 'react';
const TabsContext = createContext(undefined);
export function Tabs({ children, defaultValue, value, onValueChange, className = '' }) {
    const [activeTab, setActiveTab] = useState(value || defaultValue || '');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (onValueChange) {
            onValueChange(tab);
        }
    };
    return (<TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>);
}

export function TabsList({ children, className = '' }) {
    return (<div className={`flex border-b border-gray-200 ${className}`}>
      {children}
    </div>);
}

export function TabsTrigger({ children, value, className = '' }) {
    const context = useContext(TabsContext);
    if (!context)
        throw new Error('TabsTrigger must be used within Tabs');
    const isActive = context.activeTab === value;
    return (<button className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${isActive
            ? 'border-zion-cyan text-zion-cyan'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} ${className}`} onClick={() => context.setActiveTab(value)}>
      {children}
    </div>
  );
});
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-zion-cyan data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-zion-slate hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-cyan focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent };
