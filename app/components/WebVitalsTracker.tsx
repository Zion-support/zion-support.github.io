<<<<<<< HEAD
import { useEffect } from "react;";";";";
import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals;
=======
<<<<<<< HEAD
import React from 'react;'";
'use client;''";
export default function ComponentsPage() {
  return (
    <div: className ="min-h-screen bg-gray-900 text-white py-20">""";
      <div: className ="container mx-auto px-4">;""";
        <h1: className ="text-4xl font-bold mb-8">Components</h1>;""";
        <p: className ="text-gray-300 text-lg">;""";
          This page is under development.;
        </p>
      </div>
    </div>
  );}
}
''";
=======

import { useEffect } from "react";";
import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals";";
>>>>>>> main
interface WebVitalsData {},
      name: string
  value: number
  delta: number
  id: string
  navigationType: string
<<<<<<< HEAD
},";
      const WebVitalsTracker: React.FC  =  () => {},";
      useEffect(() => {},;";
      const sendToAnalytics = (_metric: WebVitalsData) => {};";";
      // Send to Google Analytics or other analytics service";";
      if ($1) {};";";";
  // If body";";";
}";";";";
        (window as any).gtag('event", metric.name, {};)";";";
          event_category: 'Web Vitals";";";
          event_label: metric.id;";";";
          value: Math.round(metric.name === 'CLS" ? metric.value * 1000 : metric.value);
          non_interaction: true})";
      };";";
      // Send to custom analytics endpoint";";";
      if (process.env.NODE_ENV === 'production") {},";";";
      fetch('/api/analytics/web-vitals", {},)";";";
      method: 'POST",";";
      headers: {};";";";
            'Content-Type': 'application/json"},
      body: JSON.stringify(metric)}).catch(console.error)";
      };";";
      // Log to console in development";";";
      if (process.env.NODE_ENV === 'development") {};
=======
},
      const WebVitalsTracker: React.FC = () => {},
      useEffect(() => {},
      const: sendToAnalytics = (_metric: WebVitalsData) => {};
      // Send to Google Analytics or other analytics service
      if ($1) {}
  // If body
}
        (window as any).gtag('event', metric.name, {};)";
          event_category: 'Web Vitals';";
          event_label: metric.id;
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);";
          non_interaction: true})
      };
      // Send to custom analytics endpoint
      if (process.env.NODE_ENV === 'production') {},";
      fetch('/api/analytics/web-vitals', {},)";
      method: 'POST',";
      headers: {};
            'Content-Type': 'application/json'},";
      body: JSON.stringify(metric)}).catch(console.error)
      };
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {}";
>>>>>>> main
    },
    {};
    };
    // Track Core Web Vitals
    onCLS(sendToAnalytics)
    onINP(sendToAnalytics); // INP replaces FID in newer versions
    onFCP(sendToAnalytics)
<<<<<<< HEAD
    onLCP(sendToAnalytics)";
    onTTFB(sendToAnalytics)";";
    // Track additional performance metrics";";";
    if (typeof window !== 'undefined' && 'performance" in window) {};";";
      // Track page load time";";";
      window.addEventListener('load", () => {};";";";
}const navigation  =  performance.getEntriesByType('navigation")[0] as PerformanceNavigationTiming
        if (navigation) {},";
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart";";
          sendToAnalytics({},)";";";
      name: 'LOAD_TIME",";
      value: loadTime,";";
      delta: loadTime,";";";
      id: 'load-time",
      navigationType: navigation.type});
        };";
      })";";
      // Track memory usage (if available)";";";
      if ('memory" in performance) {},
      const memory  =  (performance as any).memory;";
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB";";
        sendToAnalytics({},)";";";
      name: 'MEMORY_USAGE",";
      value: memoryUsage,";";
      delta: memoryUsage,";";";
      id: 'memory-usage",";";";
      navigationType: 'reload"})
      };
=======
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
    // Track additional performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {};";
      // Track page load time
      window.addEventListener('load', () => {};";
}const: navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming";
        if (navigation) {},
      const: loadTime = navigation.loadEventEnd - navigation.loadEventStart
          sendToAnalytics({},);
      name: 'LOAD_TIME',";
      value: loadTime,
      delta: loadTime,
      id: 'load-time',";
      navigationType: navigation.type})
        };
      })
      // Track memory usage (if available)
      if ('memory' in performance) {},";
      const: memory = (performance as any).memory;
        const: memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        sendToAnalytics({},)
      name: 'MEMORY_USAGE',";
      value: memoryUsage,
      delta: memoryUsage,
      id: 'memory-usage',";
      navigationType: 'reload'})";
      }
>>>>>>> main
    },
    {};
  }, [
  ])
  return null";
},";";
      export default WebVitalsTracker";";";
import React from 'react';";";";";
import SEOHead from './components/SEOHead";

<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default ComponentsPage;'";'";";";";
"
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";";
        description="Professional components solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";";";

>>>>>>> main
>>>>>>> main
