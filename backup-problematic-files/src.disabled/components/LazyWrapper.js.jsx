<<<<<<< HEAD
<<<<<<< HEAD
const React from";react" const LazyWrapper = ({ children,threshold = 0.1,className = ",loadingVariant = "default",loadingText = "Loading.",loadingSize = "md"}) => { const [isLoaded,setIsLoaded] = useState(false) const [isInView,setIsInView] = useState(false) const ref = useRef(null) const inView = useInView(ref,{ amount: "threshold"}) useEffect(() => { if: (inView && !isInView) { setIsInView(true)"";";'"'"
=======
import React from\';react\' const LazyWrapper = ({ children,threshold = 0.1,className = \',loadingVariant = \'default\',loadingText = \'Loading...\',loadingSize = \'md\'}) => { const [isLoaded,setIsLoaded] = useState(false) const [isInView,setIsInView] = useState(false) const ref = useRef(null) const inView = useInView(ref,{ \"amount\": \'threshold\'}) useEffect(() => { \"if\": (inView && !isInView) { setIsInView(true)\'';\';
const React from";react" const LazyWrapper = ({ children,threshold = 0.1,className = ",loadingVariant = "default",loadingText = "Loading.",loadingSize = "md"}) => { const [isLoaded,setIsLoaded] = useState(false) const [isInView,setIsInView] = useState(false) const ref = useRef(null) const inView = useInView(ref,{ amount: "threshold"}) useEffect(() => { if: (inView && !isInView) { setIsInView(true)"";";'"'"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

const LazyWrapper.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LazyWrapper.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
