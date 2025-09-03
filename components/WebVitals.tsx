import { useEffect } from 'react';import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'';interface WebVitalsMetric {name: string';


  value: number;
  delta: number;
  id: string;



export: const WebVitals = () => {

  useEffect(() => {


    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics)}, []);
<<<<<<< HEAD
  return: null}
;
export: default WebVitals



