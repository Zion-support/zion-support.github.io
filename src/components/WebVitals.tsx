import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string}

>>>>>> 124e0663bdd3dc771c9ec6d97c2524a133c5e7cb
    })}

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('WebVitals:', metric)}
}

 {
    // Loadweb-vitalslibrary, dynamicallyimport('web-vitals').then(({ getCLSgetFIDgetFCPgetLCPgetTTFB }) => {getCLS(reportWebVitals);

export function WebVitals() {
  useEffect(() => {
    // Load web-vitals library dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);

      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals)})}, []);

  return null}