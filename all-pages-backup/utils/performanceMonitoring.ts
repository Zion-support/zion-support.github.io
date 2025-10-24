'use client''
  "rating": 'good' | 'needs-improvement' | 'poor'',";'"
  "unit": 'ms' | 'bytes' | 'count' | 'percentage'',";'"
  "rating": 'good' | 'needs-improvement' | 'poor'',;
if(typeof window === 'undefined' || !('PerformanceObserver''
if (entry.name === 'first-contentful-paint'';'"
this.recordWebVital('FCP'';";'"
paintObserver.observe({ "type": 'paint'',;'"
this.recordWebVital('LCP'';";'"
lcpObserver.observe({ "type": 'largest-contentful-paint'',;'"
this.recordWebVital('CLS'';";'"
clsObserver.observe({ "type": 'layout-shift'',;'"
this.recordWebVital('FID'';";'"
fidObserver.observe({ "type": 'first-input'',;'"
this.recordWebVital('TTFB'';");'"
navObserver.observe({ "type": 'navigation'',);'"
console.error('Failed to initialize performance observers'');";'"
private getRating("name": keyof, WebVitals, "value": number): 'good' | 'needs-improvement' | 'poor'',;
if (!threshold) return 'good''
if (value <= threshold.good) return 'good''
if (value <= threshold.poor) return 'needs-improvement'';'"
return 'poor'';";'"
recordCustomMetric("name": string, "value": number, "unit": CustomMetric['unit'',);";'"
private getCustomRating("value": number, "unit": string): 'good' | 'needs-improvement' | 'poor'',;
if(unit === 'ms'');
if (value < 100) return 'good''
if (value < 500) return 'needs-improvement''
return 'poor''
return 'good''
if(typeof window !== 'undefined' && 'fetch'';'"
await fetch('/api/analytics/performance''";'"
  "headers": { 'Content-Type': 'application/json'',;
console.error('Failed to send metric to analytics''
case 'good''
case 'needs-improvement''
case 'poor''
if (this.webVitals.FCP && this.webVitals.FCP.rating !== 'good''
recommendations.push('Improve First Contentful Paint by optimizing critical rendering path''
if (this.webVitals.LCP && this.webVitals.LCP.rating !== 'good''
recommendations.push('Improve Largest Contentful Paint by optimizing images and server response''
if (this.webVitals.CLS && this.webVitals.CLS.rating !== 'good''
recommendations.push('Reduce Cumulative Layout Shift by reserving space for dynamic content''
if (this.webVitals.FID && this.webVitals.FID.rating !== 'good''
recommendations.push('Improve First Input Delay by reducing JavaScript execution time''
if (this.webVitals.TTFB && this.webVitals.TTFB.rating !== 'good''
recommendations.push('Improve Time to First Byte by optimizing server response time''
this.recordCustomMetric(`fn_${name}`, duration, 'ms'';`'
this.recordCustomMetric(`async_fn_${name}`, duration, 'ms''
if (typeof performance !== 'undefined' && 'mark''
if (typeof performance !== 'undefined' && 'measure''
const measure = performance.getEntriesByName(name, 'measure''
this.recordCustomMetric(name, measure.duration, 'ms''
console.error('Failed to measure performance''
Milliseconds = 'ms''
Bytes = 'bytes''
Count = 'count'');
Percentage = 'percentage'');'"
rating?: 'good' | 'needs-improvement' | 'poor'');";'"
function getRating("name": string, "value": number): 'good' | 'needs-improvement' | 'poor'',;
    'FCP''
    'LCP''
    'FID''
    'CLS''
    'TTFB''
    'INP''
if (!threshold) return 'good''
if (value <= threshold.good) return 'good''
if (value <= threshold.poor) return 'needs-improvement''
return 'poor''
const webVitalNames = ['FCP', 'LCP', 'FID', 'CLS', 'TTFB''
case 'good''
case 'needs-improvement''
case 'poor''
if(metrics.FCP && metrics.FCP.rating !== 'good''
recommendations.push('Improve FCP by optimizing critical CSS and reducing render-blocking resources''
if (metrics.LCP && metrics.LCP.rating !== 'good''
recommendations.push('Improve LCP by optimizing largest images and server response time''
if (metrics.FID && metrics.FID.rating !== 'good''
recommendations.push('Improve FID by reducing JavaScript execution time''
if (metrics.CLS && metrics.CLS.rating !== 'good''
recommendations.push('Improve CLS by reserving space for dynamic content and avoiding layout shifts'');
if (metrics.TTFB && metrics.TTFB.rating !== 'good'');'"
recommendations.push('Improve TTFB by optimizing server response time and using CDN'');]";`'"
"use client""
  "rating": "good" | "needs-improvement" | "poor""
  "unit": "ms" | "bytes" | "count" | "percentage""
  "rating": "good" | "needs-improvement" | "poor""
if(typeof window === "undefined" || !("PerformanceObserver""
if (entry.name === "first-contentful-paint"" this.recordWebVital("FCP""
paintObserver.observe({ "type": "paint"" this.recordWebVital("LCP""
lcpObserver.observe({ "type": "largest-contentful-paint"" this.recordWebVital("CLS""
clsObserver.observe({ "type": "layout-shift"" this.recordWebVital("FID""
fidObserver.observe({ "type": "first-input"" this.recordWebVital("TTFB""
navObserver.observe({ "type": "navigation"") console.error("Failed to initialize performance observers"")
private getRating("name": keyof, WebVitals, "value": number): "good" | "needs-improvement" | "poor""
if (!threshold) return "good""
if (value <= threshold.good) return "good""
if (value <= threshold.poor) return "needs-improvement""
return "poor"" recordCustomMetric("name": string, "value": number, "unit": CustomMetric["unit"")
private getCustomRating("value": number, "unit": string): "good" | "needs-improvement" | "poor""
if(unit === "ms"")
if (value < 100) return "good""
if (value < 500) return "needs-improvement""
return "poor""
return "good""
if(typeof window !== "undefined" && "fetch""
await fetch("/api/analytics/performance""
  "headers": { "Content-Type": "application/json"" console.error("Failed to send metric to analytics""
case "good""
case "needs-improvement""
case "poor""
if (this.webVitals.FCP && this.webVitals.FCP.rating !== "good"" recommendations.push("Improve First Contentful Paint by optimizing critical rendering path""
if (this.webVitals.LCP && this.webVitals.LCP.rating !== "good"" recommendations.push("Improve Largest Contentful Paint by optimizing images and server response""
if (this.webVitals.CLS && this.webVitals.CLS.rating !== "good"" recommendations.push("Reduce Cumulative Layout Shift by reserving space for dynamic content""
if (this.webVitals.FID && this.webVitals.FID.rating !== "good"" recommendations.push("Improve First Input Delay by reducing JavaScript execution time""
if (this.webVitals.TTFB && this.webVitals.TTFB.rating !== "good"" recommendations.push("Improve Time to First Byte by optimizing server response time""
this.recordCustomMetric(`fn_${name}`, duration, "ms"" this.recordCustomMetric(`async_fn_${name}`, duration, "ms""
if (typeof performance !== "undefined" && "mark""
if (typeof performance !== "undefined" && "measure""
const measure = performance.getEntriesByName(name, "measure""
this.recordCustomMetric(name, measure.duration, "ms"" console.error("Failed to measure performance""
Milliseconds = "ms""
Bytes = "bytes""
Count = "count""
Percentage = "percentage"")
rating?: "good" | "needs-improvement" | "poor"")
function getRating("name": string, "value": number): "good" | "needs-improvement" | "poor""
    "FCP""
    "LCP""
    "FID""
    "CLS""
    "TTFB""
    "INP""
if (!threshold) return "good""
if (value <= threshold.good) return "good""
if (value <= threshold.poor) return "needs-improvement""
return "poor""
const webVitalNames = ["FCP", "LCP", "FID", "CLS", "TTFB""
case "good""
case "needs-improvement""
case "poor""
if(metrics.FCP && metrics.FCP.rating !== "good"" recommendations.push("Improve FCP by optimizing critical CSS and reducing render-blocking resources""
if (metrics.LCP && metrics.LCP.rating !== "good"" recommendations.push("Improve LCP by optimizing largest images and server response time""
if (metrics.FID && metrics.FID.rating !== "good"" recommendations.push("Improve FID by reducing JavaScript execution time""
if (metrics.CLS && metrics.CLS.rating !== "good"" recommendations.push("Improve CLS by reserving space for dynamic content and avoiding layout shifts""
if (metrics.TTFB && metrics.TTFB.rating !== "good"") recommendations.push("Improve TTFB by optimizing server response time and using CDN"');]
