<<<<<<< HEAD
import React from 'react'; const LazyWrapper = ({ children, threshold = 0.1, className = ", loadingVariant = "default", loadingText = "Loading...", loadingSize = "md"}) => { const [isLoaded, setIsLoaded] = useState(false); const [isInView, setIsInView] = useState(false); const ref = useRef(null); const inView = useInView(ref, { amount: threshold }); useEffect(() => { if(inView && !isInView) { setIsInView(true);
=======
import React from "react"; const LazyWrapper = ({ children, threshold = 0.1, className = ", loadingVariant = "default", loadingText = "Loading...", loadingSize = "md"}) => { const [isLoaded, setIsLoaded] = useState(false); const [isInView, setIsInView] = useState(false); const ref = useRef(null); const inView = useInView(ref, { amount: threshold }); useEffect(() => { if(inView && !isInView) { setIsInView(true);" const LazyWrapper = ({ children, threshold = 0.1, className = ", loadingVariant = "default", loadingText = "Loading...", loadingSize = "md"}) => { const [isLoaded, setIsLoaded] = useState(false); const [isInView, setIsInView] = useState(false); const ref = useRef(null); const inView = useInView(ref, { amount: threshold }); useEffect(() => { if(inView && !isInView) { setIsInView(true)
}
"
;,"});,"})"
 const LazyWrapper = ({ children, threshold = 0.1, className = ", loadingVariant = "default", loadingText = "Loading...", loadingSize = "md"}) => { const [isLoaded, setIsLoaded] = useState (false) ; const [isInView, setIsInView] = useState (false) ; const ref = useRef (null) ; const inView = useInView (ref, { amount: threshold }) ; useEffect ( () => { if (inView && !isInView) { setIsInView (true) ;"""";,"});,"})"
;,"});,"})"
 const LazyWrapper = ({ children, threshold = 0.1, className = ", loadingVariant = "default", loadingText = "Loading...", loadingSize = "md"}) => { const [isLoaded, setIsLoaded] = useState(false); const [isInView, setIsInView] = useState(false); const ref = useRef(null); const inView = useInView(ref, { amount: threshold }); useEffect(() => { if(inView && !isInView) { setIsInView(true);,"});,"})"""";,"});,"})","});,"})","});,"})"
const LazyWrapper = ({}"});,"})"
  children,,"});,"})"
  threshold = 0.1,";,"});,"})"
  className = "",";,"});,"})"
  loadingVariant = "default",";,"});,"})"
  loadingText = "Loading...",";,"});,"})"
  loadingSize = "md"}) => {}"});,"})"
  const [isLoaded, setIsLoaded] = useState(false);,"});,"})"
  const [isInView, setIsInView] = useState(false);,"});,"})"
  const ref = useRef(null);,"});,"})"
  const inView = useInView(ref, { amount: threshold });,"});,"})"
  useEffect(() => {}"});,"})"
    if (inView && !isInView) {}"});,"})"
      setIsInView(true);,"});,"})"
      // comment
      const timer = setTimeout(() => {}"});,"})"
        setIsLoaded(true);,"});,"});"
}, 300);,"});,"})"
      return () => clearTimeout(timer);,"});,"});"
}"});,"});"
}, [inView, isInView]);,"});,"})"
  if(!isInView) {}"});,"})"
    return ();,"});,"})"
      <div ref="{ref}" className="{"min-h-[200px]" ${className}"}>;,"});,"})"
        <EnhancedLoading,"});,"})"
          variant={loadingVariant}"});,"})"
          text={loadingText}"});,"})"
          size={loadingSize}"});,"})" />;,"});,"})"
      </div>;,"});,"})"
    );,"});,"});"
}"});,"})"
  if (!isLoaded) {}"});,"})"
";,"});,"})"
"";,"});,"})"
""";,"});,"})"
    return()"""";,"});,"})"
      <div className="{"min-h-[200px]" ${className}"}>;,"});,"})"
        <EnhancedLoading,"});,"})"
          variant={loadingVariant}"});,"})"
          text={loadingText}"});,"})"
          size={loadingSize}"});,"})" />;,"});,"})"
      </div>;,"});,"})"
    );,"});,"});"
}"});,"})"
  return ();,"});,"})"
    <motion.div,"});,"})"
      initial="{{" opacity: 0, y: 20 }}"});,"})"
      animate="{{" opacity: 1, y: 0 }}"});,"})"
      transition="{{" duration: 0.6 }}"});,"})"
      className={className}"});,"})"
    >;,"});,"})"
      {children}"});,"})"
    </motion.div>)};,"});,"})"
export default LazyWrapper,"});,"})"
;,"});,"})"
export { LazyWrapper };,"});,"})"
;,"});,"})"
export { LazyWrapper };,"});,"})"
;,"});,"})"
export { LazyWrapper };,"});,"})"
;,"});,"})"
export { LazyWrapper };,"});,"})"
;,"});,"})"
export { LazyWrapper };,"});,"})"
 const LazyWrapper = ({ children, threshold = 0.1, className = ", loadingVariant = "default", loadingText = "Loading...", loadingSize = "md"}) => { const [isLoaded, setIsLoaded] = useState (false)  const [isInView, setIsInView] = useState (false)  const ref = useRef (null)  const inView = useInView (ref, { amount: threshold })  useEffect ( () => { if (inView && !isInView) { setIsInView (true) ";";import React, { useState, useEffect, useRef } from "react"""
const LazyWrapper = ({}""
  children, threshold = 0.1,"""
  className = "", ""
  loadingVariant = "default",""
  loadingText = "Loading...", ""
 const LazyWrapper = ({ children, threshold = 0.1, className = ", loadingVariant = "default", loadingText = "Loading...", loadingSize = "md"}) => { const [isLoaded, setIsLoaded] = useState (false)  const [isInView, setIsInView] = useState (false)  const ref = useRef (null)  const inView = useInView (ref, { amount: threshold })  useEffect ( () => { if (inView && !isInView) { setIsInView (true) ";import React, { useState, useEffect, useRef } from "react""
  loadingSize = "md"}) => {}

  const [isLoaded, setIsLoaded] = useState()
}
  const [isInView, setIsInView] = useState()
}
  const ref = useRef()
}
  const inView = useInView()
}  useEffect(() => {}

    if (inView && !isInView) {}

      setIsInView()
}
      // comment
const timer = setTimeout(() => {}

        setIsLoaded(true)}, 300)
}
      return () => clearTimeout(timer)}

  }, [inView, isInView])
}
  if(!isInView) {}

    return ()"
      <div ref="{ref}" className="{"min-h-[200px]" ${className}"}" >""
        <EnhancedLoading variant="{loadingVariant}""
          text="{loadingText}""
          size="{loadingSize}""
        /" >"
      </div>
    )}

  if (!isLoaded) {}"
"
""
"""
    return()"""""
      <div className="{"min-h-[200px]" ${className}"}" >""
        <EnhancedLoading variant="{loadingVariant}""
          text="{loadingText}""
          size="{loadingSize}""
        /" >"
      </div>
<<<<<<< HEAD
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
=======
    )}

  return()
}
    <motion .div,"
initial="{{" opacity: 0, y: 20 }}"
      animate="{{" opacity: 1, y: 0 }}"
      transition="{{" duration: 0.6 }}"
      className={className}" >"      {children}

    </motion.div>)}

export default LazyWrapper
export { LazyWrapper }
;
export { LazyWrapper }
;
export { LazyWrapper }
;
export { LazyWrapper }
;
export { LazyWrapper }

    </motion.div>)}

export default LazyWrapper,export { LazyWrapper }
;
export { LazyWrapper }
;
export { LazyWrapper }
;
export { LazyWrapper }
;
export { LazyWrapper }";
;"`"";
"
>>>>>>> main
>>>>>>> main
