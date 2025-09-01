<<<<<<< HEAD
import React, { createContext, useContext, useState } from 'react';
const TabsContext = createContext(undefined);
export function Tabs({}
  children,
  defaultValue,
  value,
  onValueChange,'
  className = ''}) {}
'
''
'''
  const [activeTab, setActiveTab] = useState(value || defaultValue || '');
  const handleTabChange = tab => {}
    setActiveTab(tab);
    if (onValueChange) {}
      onValueChange(tab);
    }
  };
  return()
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}'
export function TabsList({ children, className = '' }) {}
  return()
    <div className={`flex border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
}'
export function TabsTrigger({ children, value, className = '' }) {}
  const context = useContext(TabsContext);'
  if (!context) throw new Error('TabsTrigger must be used within Tabs');
  const isActive = context.activeTab === value;
  return()`
    <button``
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${}
'
''
'''`
        isActive'''`'`
          ? 'border-zion-cyan text-zion-cyan'''`'`'`
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'````
      } ${className}`}
      onClick={() => context.setActiveTab(value)}
=======
import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange }) => {

  return (
    <div className="w-full">
      <div className="flex space-x-1 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${

              activeTab === tab.id
                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        key={activeTab}
        className="mt-4"
      >
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

const TabsList = ({ children, className = '' }) => {

  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}>
      {children}
    </div>
  );
};

const TabsTrigger = ({ children, className = '', ...props }) => {

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}
      {...props}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
    >
      {children}
    </button>
  );
<<<<<<< HEAD
}'
export function TabsContent({ children, value, className = '' }) {}
  const context = useContext(TabsContext);'
  if (!context) throw new Error('TabsContent must be used within Tabs');
  if (context.activeTab !== value) return null;
  return <div className={className}>{children}</div>;
}'`
'`'`
=======
};

const TabsContent = ({ children, className = '', ...props }) => {

  return (
    <div
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsContent, TabsList, TabsTrigger };
export default Tabs;
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
