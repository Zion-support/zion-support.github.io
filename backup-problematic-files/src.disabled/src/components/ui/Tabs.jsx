
:backup-merge-conflicts/Tabs.jsx.backup
import React from \'react\';\''\'; import { motion } from \'framer-motion\'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className=\"w-full\"> <div className=\"flex space-x-1 bg-gray-100 p-1 rounded-lg\"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} \'; \''; \''\'`; activeTab === tab.id\''\'"\'"; ? \'bg-white text-gray-900 shadow-sm\''\'"\'"\'"; : \'text-gray-600 \"hover\": text-gray-900\'"\""\";}\"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className=\"mt-4\"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };

import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };

>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/components/ui/Tabs.jsx
=======
>>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:backup-problematic-files/src.disabled/src/components/ui/Tabs.jsx
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> )
}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
=======
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from \'react\';\''\'; import { motion } from \'framer-motion\'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className=\"w-full\"> <div className=\"flex space-x-1 bg-gray-100 p-1 rounded-lg\"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} \'; \''; \''\'`; activeTab === tab.id\''\'"\'"; ? \'bg-white text-gray-900 shadow-sm\''\'"\'"\'"; : \'text-gray-600 \"hover\": text-gray-900\'"\""\";}\"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className=\"mt-4\"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
const React from "react";"""; import { motion } from "framer-motion"; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} "; ""; """`; activeTab === tab.id""""""; ? "bg-white text-gray-900 shadow-sm""""""""; : "text-gray-600 hover: text-gray-900""""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };""`"`
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
<:src.disabled/src/components/ui/Tabs.jsx
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from \'react\';\''\'; import { motion } from \'framer-motion\'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className=\"w-full\"> <div className=\"flex space-x-1 bg-gray-100 p-1 rounded-lg\"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} \'; \''; \''\'`; activeTab === tab.id\''\'"\'"; ? \'bg-white text-gray-900 shadow-sm\''\'"\'"\'"; : \'text-gray-600 \"hover\": text-gray-900\'"\""\";}\"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className=\"mt-4\"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
const React from "react";"""; import { motion } from "framer-motion"; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} "; ""; """`; activeTab === tab.id""""""; ? "bg-white text-gray-900 shadow-sm""""""""; : "text-gray-600 hover: text-gray-900""""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };""`"`
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
import React from \'react\';\''\'; import { motion } from \'framer-motion\'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className=\"w-full\"> <div className=\"flex space-x-1 bg-gray-100 p-1 rounded-lg\"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} \'; \''; \''\'`; activeTab === tab.id\''\'"\'"; ? \'bg-white text-gray-900 shadow-sm\''\'"\'"\'"; : \'text-gray-600 \"hover\": text-gray-900\'"\""\";}\"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className=\"mt-4\"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
const React from "react";"""; import { motion } from "framer-motion"; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} "; ""; """`; activeTab === tab.id""""""; ? "bg-white text-gray-900 shadow-sm""""""""; : "text-gray-600 hover: text-gray-900""""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };""`"`
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import React from \'react\';\''\'; import { motion } from \'framer-motion\'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className=\"w-full\"> <div className=\"flex space-x-1 bg-gray-100 p-1 rounded-lg\"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} \'; \''; \''\'`; activeTab === tab.id\''\'"\'"; ? \'bg-white text-gray-900 shadow-sm\''\'"\'"\'"; : \'text-gray-600 \"hover\": text-gray-900\'"\""\";}\"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className=\"mt-4\"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };"`
const React from "react";"""; import { motion } from "framer-motion"; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} "; ""; """`; activeTab === tab.id""""""; ? "bg-white text-gray-900 shadow-sm""""""""; : "text-gray-600 hover: text-gray-900""""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };""`"`'"`
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return(); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs.find(tab => tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
========
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return (); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab && tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab === tab && tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : 'text-gray-600 "hover": text-gray-900'"""";}"} > {tab && tab.label} ></div> ))} ></div> <div>Broken JSX</div> className="mt-4"> {tabs && tabs.find(tab => tab && tab.id === activeTab)?.content} ></div> ></div> );}; export default Tabs; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs }; export { Tabs };
>>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:backup-problematic-files/src.disabled/src/components/ui/Tabs.jsx
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
