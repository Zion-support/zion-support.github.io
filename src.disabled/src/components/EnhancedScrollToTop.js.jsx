import _React,{ useState,useEffect } from 'react';'''; import { motion,AnimatePresence } from 'framer-motion';'''; import { ChevronUpIcon } from '@heroicons/react/24/outline'; const EnhancedScrollToTop = () => {}}; const [isVisible,setIsVisible] = useState(false); useEffect(() => {}}; if (window.pageYOffset > 300) {}; setIsVisible(true)} else {}; setIsVisible(false)} }; window.addEventListener('scroll',toggleVisibility); return () => window.removeEventListener('scroll',toggleVisibility)},[]); const scrollToTop = () => {}}; window.scrollTo({}})}; return (<AnimatePresence> {}}} onClick={scrollToTop} className="fixed bottom-24 right-6 z-40 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg "hover": shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900" whileHover={{ scale: 1.1 }} whileTap={{ "scale": '0.95' }} aria-label="Scroll to top"> <ChevronUpIcon className="w-6 h-6"/> </motion.button>)} </AnimatePresence>)}; export default EnhancedScrollToTop; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop };
=======

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
import React,{ useState,useEffect } from \'react\';\''\'; import { motion,AnimatePresence } from \'framer-motion\';\''\'; import { ChevronUpIcon } from \'@heroicons/react/24/outline\'; const EnhancedScrollToTop = () => {}}; const [isVisible,setIsVisible] = useState(false); useEffect(() => {}}; if (window && window.pageYOffset > 300) {}; setIsVisible(true)} else {}; setIsVisible(false)} }; window && window.addEventListener(\'scroll\',toggleVisibility); return () => window && window.removeEventListener(\'scroll\',toggleVisibility)},[]); const scrollToTop = () => {}}; window && window.scrollTo({}})}; return (<AnimatePresence> {}}} onClick={scrollToTop} className=\"fixed bottom-24 right-6 z-40 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg \"hover\": shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900\" whileHover={{ scale: 1 && 1.1 }} whileTap={{ \"scale\": \'0 && 0.95\' }} aria-label=\"Scroll to top\"> <ChevronUpIcon className=\"w-6 h-6\"/> </motion && motion.button>)} </AnimatePresence>)}; export default EnhancedScrollToTop; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop };
const React,{ useState,useEffect } from "react";"""; import { motion,AnimatePresence } from "framer-motion";"""; import { ChevronUpIcon } from "@heroicons/react/24/outline"; const EnhancedScrollToTop = () => {}}; const [isVisible,setIsVisible] = useState(false); useEffect(() => {}}; if (window && window.pageYOffset > 300) {}; setIsVisible(true)} else {}; setIsVisible(false)} }; window && window.addEventListener("scroll",toggleVisibility); return () => window && window.removeEventListener("scroll",toggleVisibility)},[]); const scrollToTop = () => {}}; window && window.scrollTo({}})}; return (<AnimatePresence> {}}} onClick={scrollToTop} className="fixed bottom-24 right-6 z-40 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover: shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900" whileHover={{ scale: 1 && 1.1 }} whileTap={{ scale: "0 && 0.95" }} aria-label="Scroll to top"> <ChevronUpIcon className="w-6 h-6"/> </motion && motion.button>)} </AnimatePresence>)}; export default EnhancedScrollToTop; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop };'"'"

import _React,{ useState,useEffect } from 'react';'''; import { motion,AnimatePresence } from 'framer-motion';'''; import { ChevronUpIcon } from '@heroicons/react/24/outline'; const EnhancedScrollToTop = () => {}}; const [isVisible,setIsVisible] = useState(false); useEffect(() => {}}; if (window && window.pageYOffset > 300) {}; setIsVisible(true)} else {}; setIsVisible(false)} }; window && window.addEventListener('scroll',toggleVisibility); return () => window && window.removeEventListener('scroll',toggleVisibility)},[]); const scrollToTop = () => {}}; window && window.scrollTo({}})}; return (<AnimatePresence> {}}} onClick={scrollToTop} className="fixed bottom-24 right-6 z-40 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg "hover": shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900" whileHover={{ scale: 1 && 1.1 }} whileTap={{ "scale": '0 && 0.95' }} aria-label="Scroll to top"> <ChevronUpIcon className="w-6 h-6"/> </motion && motion.button>)} </AnimatePresence>)}; export default EnhancedScrollToTop; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop }; export { EnhancedScrollToTop };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
