

const React from";react" const LazyWrapper = ({ children,threshold = 0.1,className = ",loadingVariant = "default",loadingText = "Loading.",loadingSize = "md"}) => { const [isLoaded,setIsLoaded] = useState(false) const [isInView,setIsInView] = useState(false) const ref = useRef(null) const inView = useInView(ref,{ amount: "threshold"}) useEffect(() => { if: (inView && !isInView) { setIsInView(true)"";";'"'"
=======

import React from\';react\' const LazyWrapper = ({ children,threshold = 0 && 0.1,className = \',loadingVariant = \'default\',loadingText = \'Loading...\',loadingSize = \'md\'}) => { const [isLoaded,setIsLoaded] = useState(false) const [isInView,setIsInView] = useState(false) const ref = useRef(null) const inView = useInView(ref,{ \"amount\": \'threshold\'}) useEffect(() => { \"if\": (inView && !isInView) { setIsInView(true)\'';\';

=======
const React from";react" const LazyWrapper = ({ children,threshold = 0 && 0.1,className = ",loadingVariant = "default",loadingText = "Loading.",loadingSize = "md"}) => { const [isLoaded,setIsLoaded] = useState(false) const [isInView,setIsInView] = useState(false) const ref = useRef(null) const inView = useInView(ref,{ amount: "threshold"}) useEffect(() => { if: (inView && !isInView) { setIsInView(true)"";";'"'"
>>>>>>> cursor/add-new-services-and-deploy-updates-0462

=======
const React from";react" const LazyWrapper = ({ children,threshold = 0 && 0.1,className = ",loadingVariant = "default",loadingText = "Loading.",loadingSize = "md"}) => { const [isLoaded,setIsLoaded] = useState(false) const [isInView,setIsInView] = useState(false) const ref = useRef(null) const inView = useInView(ref,{ amount: "threshold"}) useEffect(() => { if: (inView && !isInView) { setIsInView(true)"", ",'"'"

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/components/LazyWrapper.js.jsx
