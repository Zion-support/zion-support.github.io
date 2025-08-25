import React, { createContext, useContext, useState } from 'react';

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

interface TabsProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

const Tabs: React.FC<TabsProps> = ({ children, className = '', value, onValueChange, defaultValue }) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  
  const contextValue: TabsContextType = {
    value: value || internalValue,
    onValueChange: onValueChange || setInternalValue,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={`${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}>
      {children}
    </div>
  );
};

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
    >
      {children}
    </button>
  );
};

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

  return (
    <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}>
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
