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
                setIsLoaded(true)}, 300);
            return () => clearTimeout(timer)}
    }, [inView, isInView]);
    if (!isInView) {
        return (<div ref={ref} className={`min-h-[200px] ${className}`}>
        <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize}/>
      </div>)}
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
    }
    return (<motion.div initial = {
  { opacity: 0,
  y: 20 






}} animate = {
  { opacity: 1,
  y: 0 






}} transition={{ duration: 0.6 }} className={className}>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      {children}
    </motion.div>)};
export default LazyWrapper;
