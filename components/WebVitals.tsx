


  value: number;
  delta: number;
  id: string}


  if (typeof window !== 'undefined' && 'gtag' in window) {'    (window as any).gtag('event', metric.name {'      event_category: 'Web Vitals', event_label: metric.id',      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), non_interaction: true'});'  }'
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {'    console.log('Web Vital: ', metric);'  }'};'



export const WebVitals = () => {;useEffect(() => {

      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true })}

  }
};





  useEffect(() => {




    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);




