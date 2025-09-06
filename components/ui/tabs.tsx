import React from 'react'

export function Tabs({ children, defaultValue, value, onValueChange, className = '' }: {
  children: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}) {
  const [activeTab, setActiveTab] = React.useState(defaultValue || '');

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            activeTab, 
            onTabChange: handleTabChange 
          } as any);
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ children, className = '' }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ children, value, className = '' }: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        className
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, className = '' }: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}