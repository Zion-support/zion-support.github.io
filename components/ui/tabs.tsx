import React from 'react';

interface TabsProps {
  children: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function Tabs({ children, defaultValue, value, onValueChange, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue || '');
  
  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div className={`w-full ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            activeTab: value || activeTab, 
            onTabChange: onValueChange || handleTabChange 
          } as any);
        }
        return child;
      })}
    </div>
  );
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
  activeTab?: string;
  onTabChange?: (value: string) => void;
}

export function TabsList({ children, className = '', activeTab, onTabChange }: TabsListProps) {
  return (
    <div className={`flex space-x-1 bg-slate-800 p-1 rounded-lg ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            activeTab, 
            onTabChange 
          } as any);
        }
        return child;
      })}
    </div>
  );
}

interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  activeTab?: string;
  onTabChange?: (value: string) => void;
}

export function TabsTrigger({ children, value, className = '', activeTab, onTabChange }: TabsTriggerProps) {
  const isActive = activeTab === value;
  
  return (
    <button
      onClick={() => onTabChange?.(value)}
      className={`
        px-4 py-2 rounded-md text-sm font-medium transition-colors
        ${isActive 
          ? 'bg-purple-600 text-white' 
          : 'text-gray-300 hover:text-white hover:bg-slate-700'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  activeTab?: string;
}

export function TabsContent({ children, value, className = '', activeTab }: TabsContentProps) {
  if (activeTab !== value) {
    return null;
  }
  
  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  );
}