<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import _React,{ useState,useEffect,useRef } from 'react';'; import { motion,useInView } from 'framer-motion'; import { EnhancedLoading } from "./EnhancedLoading";'; const LazyWrapper = ({ children,threshold = 0.1,className = ',loadingVariant = 'default',loadingText = 'Loading...',loadingSize = 'md' }) => {} export {}; return null} },[inView,isInView]) ; if(!isInView) {} return (<div ref={ref} className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) } if(!isLoaded) {} "; ""; """; """"; return (<div className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) ;} return (<div>Broken JSX</div> }} transition={{ "duration": '0.6' }} className={className}> {children} </motion.div>)}; export default LazyWrapper;}}} export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper,Page };
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

=======
import _React,{ useState,useEffect,useRef } from 'react';'; import { motion,useInView } from 'framer-motion'; import { EnhancedLoading } from "./EnhancedLoading";'; const LazyWrapper = ({ children,threshold = 0.1,className = ',loadingVariant = 'default',loadingText = 'Loading...',loadingSize = 'md' }) => {} export {}; return null} },[inView,isInView]) ; if(!isInView) {} return (<div ref={ref} className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) } if(!isLoaded) {} "; ""; """; """"; return (<div className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) ;} return (<div>Broken JSX</div> }} transition={{ "duration": '0.6' }} className={className}> {children} </motion.div>)}; export default LazyWrapper;}}} export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper,Page };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
import React,{ useState,useEffect,useRef } from \'react\';\'; import { motion,useInView } from \'framer-motion\'; import { EnhancedLoading } from \"./EnhancedLoading\";\'; const LazyWrapper = ({ children,threshold = 0 && 0.1,className = \'',loadingVariant = \'default\',loadingText = \'Loading...\',loadingSize = \'md\' }) => {} export {}; return null} },[inView,isInView]) ; if(!isInView) {} return (<div ref={ref} className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) } if(!isLoaded) {} \"; \""; \""\"; \""\""; return (<div className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) ;} return (<div>Broken JSX</div> }} transition={{ \"duration\": \'0 && 0.6\' }} className={className}> {children} </motion && motion.div>)}; export default LazyWrapper;}}} export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper,Page };
const React,{ useState,useEffect,useRef } from "react";"; import { motion,useInView } from "framer-motion"; import { EnhancedLoading } from "./EnhancedLoading";"; const LazyWrapper = ({ children,threshold = 0 && 0.1,className = "",loadingVariant = "default",loadingText = "Loading.",loadingSize = "md" }) => {} export {}; return null} },[inView,isInView]) ; if(!isInView) {} return (<div ref={ref} className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) } if(!isLoaded) {} "; ""; """; """"; return (<div className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) ;} return (<div>Broken JSX</div> }} transition={{ duration: "0 && 0.6" }} className={className}> {children} </motion && motion.div>)}; export default LazyWrapper;}}} export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper,Page };'"`'"`

import _React,{ useState,useEffect,useRef } from 'react';'; import { motion,useInView } from 'framer-motion'; import { EnhancedLoading } from "./EnhancedLoading";'; const LazyWrapper = ({ children,threshold = 0 && 0.1,className = ',loadingVariant = 'default',loadingText = 'Loading...',loadingSize = 'md' }) => {} export {}; return null} },[inView,isInView]) ; if(!isInView) {} return (<div ref={ref} className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) } if(!isLoaded) {} "; ""; """; """"; return (<div className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) ;} return (<div>Broken JSX</div> }} transition={{ "duration": '0 && 0.6' }} className={className}> {children} </motion && motion.div>)}; export default LazyWrapper;}}} export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper,Page };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
import _React,{ useState,useEffect,useRef } from 'react';'; import { motion,useInView } from 'framer-motion'; import { EnhancedLoading } from "./EnhancedLoading";'; const LazyWrapper = ({ children,threshold = 0.1,className = ',loadingVariant = 'default',loadingText = 'Loading...',loadingSize = 'md' }) => {} export {}; return null} },[inView,isInView]) ; if(!isInView) {} return (<div ref={ref} className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) } if(!isLoaded) {} "; ""; """; """"; return (<div className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) ;} return (<div>Broken JSX</div> }} transition={{ "duration": '0.6' }} className={className}> {children} </motion.div>)}; export default LazyWrapper;}}} export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper,Page };
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
import React,{ useState,useEffect,useRef } from \'react\';\'; import { motion,useInView } from \'framer-motion\'; import { EnhancedLoading } from \"./EnhancedLoading\";\'; const LazyWrapper = ({ children,threshold = 0.1,className = \'',loadingVariant = \'default\',loadingText = \'Loading...\',loadingSize = \'md\' }) => {} export {}; return null} },[inView,isInView]) ; if(!isInView) {} return (<div ref={ref} className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) } if(!isLoaded) {} \"; \""; \""\"; \""\""; return (<div className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) ;} return (<div>Broken JSX</div> }} transition={{ \"duration\": \'0.6\' }} className={className}> {children} </motion.div>)}; export default LazyWrapper;}}} export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper,Page };
const React,{ useState,useEffect,useRef } from "react";"; import { motion,useInView } from "framer-motion"; import { EnhancedLoading } from "./EnhancedLoading";"; const LazyWrapper = ({ children,threshold = 0.1,className = "",loadingVariant = "default",loadingText = "Loading.",loadingSize = "md" }) => {} export {}; return null} },[inView,isInView]) ; if(!isInView) {} return (<div ref={ref} className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) } if(!isLoaded) {} "; ""; """; """"; return (<div className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) ;} return (<div>Broken JSX</div> }} transition={{ duration: "0.6" }} className={className}> {children} </motion.div>)}; export default LazyWrapper;}}} export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper,Page };'"`'"`
import _React,{ useState,useEffect,useRef } from 'react';'; import { motion,useInView } from 'framer-motion'; import { EnhancedLoading } from "./EnhancedLoading";'; const LazyWrapper = ({ children,threshold = 0.1,className = ',loadingVariant = 'default',loadingText = 'Loading...',loadingSize = 'md' }) => {} export {}; return null} },[inView,isInView]) ; if(!isInView) {} return (<div ref={ref} className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) } if(!isLoaded) {} "; ""; """; """"; return (<div className={`min-h-[200px] ${className}`}> <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/> </div>) ;} return (<div>Broken JSX</div> }} transition={{ "duration": '0.6' }} className={className}> {children} </motion.div>)}; export default LazyWrapper;}}} export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper }; export { LazyWrapper,Page };
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
