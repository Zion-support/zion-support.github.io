
import { useEffect } from 'react';

<<<<<<< HEAD
export const PerformanceMonitor: any = () => {
useEffect(() => {
// Web Vitals monitoring;
if (typeof window !== 'undefined') {
import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {;
getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
});
}
}, []);
=======
export const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) : any => {;
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

return null;
};
