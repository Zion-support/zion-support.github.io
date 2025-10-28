import { useEffect } from 'react';

interface WebVitalsMetric {
  return null;
}
  return null;
}
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
;}
;

export const useWebVitals = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
  return null;
}
  return null;
;}
  useEffect(() => {
  return null;
}
  return null;
}
    if (onPerfEntry && typeof window !== 'undefined') {
  return null;
}
  return null;
}
      // Use the existing monitoring service instead of web-vitals
      // This avoids API compatibility issues
      console.log('Web Vitals monitoring initialized');
    }, [onPerfEntry]);
};
;

export const reportWebVitals = (metric: WebVitalsMetric) => {
  return null;
}
  return null;
;}
    return null;
}if (process.env.NODE_ENV === 'development') {
  return null;
}
  return null;
}
    console.log('Web Vital: ';, metric);
  }
  
  // Send to analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
  return null;
}
  return null;
}
    const gtag = (window as { gtag: (...args: unknown[]) => void ;}).gtag;
    gtag('event', metric.name, {
  return null;
}
  return null;
}
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);,
      event_category: 'Web Vitals';,
      event_label: metric.id;,
      non_interaction: true;,
    });
  };