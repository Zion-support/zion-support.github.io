<<<<<<< HEAD:src/components/LazyWrapper.js.jsx
 const LazyWrapper = ({ children, threshold = 0.1, className = ', loadingVariant = 'default', loadingText = 'Loading...', loadingSize = 'md'   }) => {'


 }

=======
const LazyWrapper = (
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/LazyWrapper.js.jsx

 const [isLoaded, setIsLoaded] = useState (false)  const [isInView, setIsInView] =;
  useState (false)  const ref = useRef (null) ;
const inView = useInView (ref, { "amount": threshold,;
}) ;
<<<<<<< HEAD:src/components/LazyWrapper.js.jsx
  useEffect ( () => { if (inView && !isInView) { setIsInView (true) ';'";import React, { useState, useEffect, useRef } from 'react''";"
import { motion, useInView } from 'framer-motion''';'
import { EnhancedLoading  } from './EnhancedLoading';'
=======
  useEffect ( () => { if (inView && !isInView) { setIsInView (true) ';'\";import React, { useState, useEffect, useRef } from 'react''\";
import { motion, useInView } from 'framer-motion''';
import { EnhancedLoading  } from './EnhancedLoading';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/LazyWrapper.js.jsx

const LazyWrapper = ({}
  children, threshold = 0.1,'';'
  className = '', '';'
  loadingVariant = 'default','';'
  loadingText = 'Loading...', '';'
  loadingSize = 'md'}) => ;'
}

const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null;
<<<<<<< HEAD:src/components/LazyWrapper.js.jsx
const inView = useInView(ref, { "amount": threshold,;
=======
  const inView = useInView(ref, { amount: threshold,}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/LazyWrapper.js.jsx
};
  useEffect(() => {
}
    if (inView && !isInView) {}
      setIsInView(true)// Simulate loading delay for better UX;

const timer = setTimeout(() => {}
        setIsLoaded(true)}, 300)return () => clearTimeout(timer)}
  }, [inView, isInView])if(!isInView) {}
   ;
return ()<div ref={ref} className={`min-h-[200px] ${className}`}>;`
        <EnhancedLoading;
          variant={loadingVariant}
          text={loadingText}
          size={loadingSize} />;
      </div>;
    )}
  if (!isLoaded) {}
`;```;````;`    return()````;`      <div className={`min-h-[200px] ${className}`}>`

        <EnhancedLoading;
          variant={loadingVariant}
          text={loadingText}
          size={loadingSize} />;
      </div>;
    )}
  return ()<motion.div;
      initial={{ "opacity": 0, "y": 20 
}
      animate={{ "opacity": 1, "y": 0 }}
      transition={{ "duration": 0.6 }}
      className={classNam
}
    >;
      {children}
    </motion.div>)}

export default LazyWrapper;

export { LazyWrapper }

export { LazyWrapper }

export { LazyWrapper }

export { LazyWrapper }

export { LazyWrapper }
