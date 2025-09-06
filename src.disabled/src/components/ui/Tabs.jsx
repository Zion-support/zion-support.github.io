<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from \'react\';\''\'; import { motion } from \'framer-motion\'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return (); <div className=\"w-full\"> <div className=\"flex space-x-1 bg-gray-100 p-1 rounded-lg\"> {}; onClick={() => onTabChange(tab && tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} \'; \''; \''\'`; activeTab === tab && tab.id\''\'"\'"; ? \'bg-white text-gray-900 shadow-sm\''\'"\'"\'"; : \'text-gray-600 \"hover\": text-gray-900\'"\""\";}\"} > {tab && tab.label} ></div> ))} ></div> <div>Broken JSX</div> className=\"mt-4\"> {tabs && tabs.find(tab => tab && tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
const React from "react";"""; import { motion } from "framer-motion"; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return (); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab && tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} "; ""; """`; activeTab === tab && tab.id""""""; ? "bg-white text-gray-900 shadow-sm""""""""; : "text-gray-600 hover: text-gray-900""""";}"} > {tab && tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs && tabs.find(tab => tab && tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };""`"`

import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return (); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab && tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab && tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab && tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs && tabs.find(tab => tab && tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };

=======
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
>>>>>>> main
=======
import React from \'react\';\''\'; import { motion } from \'framer-motion\'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className=\"w-full\"> <div className=\"flex space-x-1 bg-gray-100 p-1 rounded-lg\"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} \'; \''; \''\'`; activeTab === tab.id\''\'"\'"; ? \'bg-white text-gray-900 shadow-sm\''\'"\'"\'"; : \'text-gray-600 \"hover\": text-gray-900\'"\""\";}\"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className=\"mt-4\"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
const React from "react";"""; import { motion } from "framer-motion"; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} "; ""; """`; activeTab === tab.id""""""; ? "bg-white text-gray-900 shadow-sm""""""""; : "text-gray-600 hover: text-gray-900""""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };""`"`
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
