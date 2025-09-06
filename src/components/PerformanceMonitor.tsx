<<<<<<< HEAD

import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);

  return null;
};
=======
import React from 'react';

import React from 'react';
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
