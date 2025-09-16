import React from 'react';
export function Tabs() {const [activeTab, setActiveTab] = React.useState(defaultValue || '')const handleTabChange = (newValue) => {setActiveTab(newValue)onValueChange?.(newValue)}return (<div className={`tabs ${className}`}>;
      {React.Children.map(children, child =>;
        React.cloneElement(child, { activeTab, onTabChange: handleTabChange }))}
    </div>;
  )}export function TabsList() {return (<div className={`tabs-list ${className}`}>;
      {children}
    </div>;
  )}export function TabsTrigger() {const isActive = activeTab === value;
  return (<button;
      className={`tabs-trigger ${isActive ? 'active' : ''} ${className}`}
      onClick={() => onTabChange(value)}
    >;
      {children}
    </button>;
  )}export function TabsContent() {if (activeTab !== value) return null;
  return (<div className={`tabs-content ${className}`}>;
      {children}
    </div>;
  )}