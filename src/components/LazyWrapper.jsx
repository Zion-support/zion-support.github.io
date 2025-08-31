import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EnhancedLoading } from "./EnhancedLoading";
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
<<<<<<< HEAD
                setIsLoaded(true);
            }, 300);
            return () => clearTimeout(timer);

=======
                setIsLoaded(true)}, 300);
            return () => clearTimeout(timer)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    }, [inView, isInView]);
    if (!isInView) {
        return (<div ref={ref} className={`min-h-[200px] ${className}`}>
        <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/>
<<<<<<< HEAD
      </div>);

=======
      </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    if (!isLoaded) {
        return (<div className={`min-h-[200px] ${className}`}>
        <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/>
<<<<<<< HEAD
      </div>)}
    return (<motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ duration: 0.6 }} className={className}>
=======
      </div>);
<<<<<<< HEAD

    return (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={className}>
=======
    }
    return (<motion.div initial = {
  { opacity: 0,
  y: 20 






}} animate = {
  { opacity: 1,
  y: 0 






}} transition={{ duration: 0.6 }} className={className}>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      {children}
    </motion.div>)};
export default LazyWrapper;
}}}