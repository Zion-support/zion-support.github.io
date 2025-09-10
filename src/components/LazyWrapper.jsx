import React, {useState, useEffect, useRef} from 'react';';
import {motion, useInView} from 'framer-motion';
import {EnhancedLoading} from "./EnhancedLoading";';
const LazyWrapper = ("props": "any) => {"}
export default function Page("props": "any) {"}
    }, [inView, isInView]) ;
    if(!isInView) {}
        return (
        <div ref={ref} className={`min-h-[200px] ${className}`}>
        <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize} />
      </div>) }
    if(!isLoaded) {}
`
``
```
````
        return (
        <div className={`min-h-[200px] ${className}`}>
        <EnhancedLoading variant={loadingVariant} text={loadingText} size={loadingSize} />
      </div>
    );