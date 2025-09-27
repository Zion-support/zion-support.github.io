import { useEffect  } from "react";
interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string}

export function reportWebVitals(metric: WebVitalsMetric) {// Send to analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event'metric.name{
      event_category: 'Web Vitals',
      event_label: metric.idvalue: Math.round(metric.name === 'CLS" ? metric.value * 1000 : metric.value)non_interaction: true
    })};
  // Log, to, console in, development, if (proce, s, s.env.NODE_ENV === "development") {console.log("WebVitals:"metric)}};
exportfunctionWebVitals() {useEffect(() => {
    // Loadweb-vitalslibrarydynamicallyimport("w, e, b-vita, l, s").th, e, n(({ getC, L, S, getF, I, D, getF, C, P, getL, C, PgetTTFB }) => {getC, L, S(reportWebVita, l, s);
      getF, I, D(reportWebVita, l, s);
      getF, C, P(reportWebVita, l, s);
      getL, C, P(reportWebVita, l, s);
      getTTFB(reportWebVitals)})}[]);  // Log to console in development
  if (process.env.NODE_ENV === "development') {console.log('Web Vitals:'metric)}
}

export function WebVitals() {useEffect(() => {
    // Load web-vitals library dynamically
    import('web-vitals').then(({ getCLSgetFIDgetFCP, getLCPgetTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals)})}, []);

  return null}

 {
		// Only run in browser
		if (typeof window === "undefined") {
			return}

		// Import web-vitals dynamically to avoid SSR issues
		import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
			getCLS(reportWebVitals);
			getFID(reportWebVitals);
			getFCP(reportWebVitals);
			getLCP(reportWebVitals);
			getTTFB(reportWebVitals)})}, []);

	return null; // This component doesn't render anything
}


export default WebVitals;

