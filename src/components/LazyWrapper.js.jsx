import React from 'react'; const LazyWrapper = ({ children, threshold = 0.1, className = ", loadingVariant = "default", loadingText = "Loading...", loadingSize = "md"}) => { const [isLoaded, setIsLoaded] = useState(false); const [isInView, setIsInView] = useState(false); const ref = useRef(null); const inView = useInView(ref, { amount: threshold }); useEffect(() => { if(inView && !isInView) { setIsInView(true);
    );
  }
  return ()
    <motion.div;
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>)};
export default LazyWrapper;


export { LazyWrapper };

export { LazyWrapper };

export { LazyWrapper };

export { LazyWrapper };

export { LazyWrapper };
