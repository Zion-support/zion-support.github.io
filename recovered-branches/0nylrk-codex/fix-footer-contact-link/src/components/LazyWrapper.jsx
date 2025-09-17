<<<<<<< HEAD
import React from 'react';

const LazyWrapper: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">LazyWrapper</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
=======
import React, { useState, useEffect, useRef } from 'react';

import { EnhancedLoading } from './EnhancedLoading';
const LazyWrapper = ({ children, threshold = 0.1, className = '', loadingVariant = 'default', loadingText = 'Loading...', loadingSize = 'md' }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { amount: threshold });
    useEffect(() => {
        if (inView && !isInView) {
            setIsInView(true);
            // Simulate loading delay for better UX
            const timer = setTimeout(() => {
                setIsLoaded(true);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [inView, isInView]);
    if (!isInView) {
        return (<div ref={ref} className={`min-h-[200px] ${className}`}>
        <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/>
      </div>);
    }
    if (!isLoaded) {
        return (<div className={`min-h-[200px] ${className}`}>
        <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/>
      </div>);
    }
    return (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
};

export default LazyWrapper;