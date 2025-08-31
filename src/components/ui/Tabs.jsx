<<<<<<< HEAD
import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

const TabsContext = createContext();

export function Tabs({ children, defaultValue, value, onValueChange, className = '' }) {
    const [activeTab, setActiveTab] = useState(value || defaultValue || '');
    
    const handleTabChange = (tab) => {
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

export function TabsList({ children, className = '' }) {
    return (
        <div className={cn('flex border-b border-gray-200', className)}>
            {children}
        </div>
    );
}

export function TabsTrigger({ children, value, className = '' }) {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('TabsTrigger must be used within Tabs');
    }
    
    const isActive = context.activeTab === value;
    
    return (
        <button 
            className={cn(
                'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
                isActive
                    ? 'border-zion-cyan text-zion-cyan'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                className
            )}
            onClick={() => context.setActiveTab(value)}
        >
            {children}
        </button>
    );
}

export function TabsContent({ children, value, className = '' }) {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('TabsContent must be used within Tabs');
    }
    
    if (context.activeTab !== value) {
        return null;
    }
    
    return <div className={className}>{children}</div>;
}
=======
import React from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="w-full">
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-4"
      >
        {tabs.find(tab => tab.id === activeTab)?.content}
      </motion.div>
    </div>
  );
};

export default Tabs;
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
