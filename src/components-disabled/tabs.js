import React, { createContext, useContext, useState } from 'react';
const TabsContext = createContext(undefined);
export function Tabs(_{ children, _defaultValue, _value, _onValueChange, _className = '' }) {
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
;
export function TabsList(_{ children, _className = '' }) {
    return (<div className={`flex border-b border-gray-200 ${className}`}>
      {children}
    </div>);
}
;
export function TabsTrigger(_{ children, _value, _className = '' }) {
    const context = useContext(TabsContext);
    if (!context)
        throw new Error('TabsTrigger must be used within Tabs');
    const isActive = context.activeTab === value;
    return (<button className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${isActive
            ? 'border-zion-cyan text-zion-cyan'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} ${className}`} onClick={() => context.setActiveTab(value)}>
      {children}
    </button>);
}
export function TabsContent(_{ children, _value, _className = '' }) {
    const context = useContext(TabsContext);
    if (!context)
        throw new Error('TabsContent must be used within Tabs');
    if (context.activeTab !== value)
        return null;
    return <div className={className}>{children}</div>;
}
