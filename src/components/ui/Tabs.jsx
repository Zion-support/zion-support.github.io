import React from 'react';'''
import { motion } from 'framer-motion';
;
const Tabs = ({ tabs, activeTab, onTabChange }) => {}
  return()
    <div className="w-full">""""
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {tabs.map(tab => (
          <button;
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${}
'
''
'''`
              activeTab === tab.id'''`'`
                ? 'bg-white text-gray-900 shadow-sm'''`'`'`
                : 'text-gray-600 hover:text-gray-900'````
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div;
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}"""
        transition={{ duration: 0.2 }}""""
        className="mt-4"""
      >
        {tabs.find(tab => tab.id === activeTab)?.content}
      </motion.div>
    </div>
  );
};

export default Tabs;


export { Tabs };

export { Tabs };

export { Tabs };

export { Tabs };

export { Tabs };
import React from 'react'; ; const Tabs = ({ tabs, activeTab, onTabChange }) => {; return(; <div className="w-full">";" <div className="flex space-x-1 border-b border-gray-200">; {tabs.map((tab) => (; <button; key={tab.id}; onClick={() => onTabChange(tab.id)}; className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${; activeTab === tab.id; ? 'bg-white text-blue-600 border-b-2 border-blue-600'; : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'; }`}; >; {tab.label}; </button>; ))}; </div>; <div;" key={activeTab}";" className="mt-4"; >; {tabs.find(tab => tab.id === activeTab)?.content}; </div>; </div>; ); }; ; const TabsList = ({ children, className = '' }) => {; return(; <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}>; {children}; </div>; ); }; ; const TabsTrigger = ({ children, className = '', ...props }) => {; return(; <button; className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}; {...props}; >; {children}; </button>; ); }; ; const TabsContent = ({ children, className = '', ...props }) => {; return(; <div; className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}; {...props}; >; {children}; </div>; ); }; ; export { Tabs, TabsContent, TabsList, TabsTrigger }; export default Tabs;" ";"
