'use client';
}
}
}
export interface WebVitalsMetrics {
FCP?: number; // First Contentful Paint
LCP?: number; // Largest Contentful Paint
FID?: number; // First Input Delay
CLS?: number; // Cumulative Layout Shift
TTFB?: number; // Time to First, Byte
}
}
}
FCP?: number; // First Contentful Paint
LCP?: number; // Largest Contentful Paint
FID?: number; // First Input Delay
CLS?: number; // Cumulative Layout Shift
TTFB?: number; // Time to First Byte
INP?: number; // Interaction to Next, Paint}
}
metrics: "PerformanceMetric[]",webVitals: "WebVitalsMetrics"
summar",y: "{",avgLoadTime: "number"
totalMetric",s: "number",performanceScore: "number"
webVital",s: "WebVitalsMetrics"
this.observers.push(paintObserver)
// Largest Contentful Paint;
const
;));
const
;// Layout Shift;
const clsObserver = new PerformanceObserver(list => {));
let
;calculatePerformanceScore(): number{;
let
;}