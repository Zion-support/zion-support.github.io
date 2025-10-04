<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Dynamically import web-vitals to avoid build issues
    import('web-vitals').then((webVitals) => {
      const { onCLS, onFCP, onLCP, onTTFB } = webVitals;
      
      // Measure Core Web Vitals
                  onCLS((metric: { value: number }) => {
        setMetrics((prev: PerformanceMetrics) => ({
          ...prev,
          cls: metric.value
        }));
      });
      
                  onFCP((metric: { value: number }) => {
        setMetrics((prev: PerformanceMetrics) => ({
          ...prev,
          fcp: metric.value
        }));
      });
      
                  onLCP((metric: { value: number }) => {
        setMetrics((prev: PerformanceMetrics) => ({
          ...prev,
          lcp: metric.value
        }));
      });
      
                  onTTFB((metric: { value: number }) => {
        setMetrics((prev: PerformanceMetrics) => ({
          ...prev,
          ttfb: metric.value
        }));
      });
      
      // Try to use onINP if available (for newer versions)
                  if (webVitals.onINP) {
                    webVitals.onINP((metric: { value: number }) => {
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            inp: metric.value
          }));
        });
      }
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });
  }, []);

  // const getPerformanceGrade = (metric: number, thresholds: { good: number; poor: number }) => {
  //   if (metric <= thresholds.good) return 'good';
  //   if (metric <= thresholds.poor) return 'needs-improvement';
  //   return 'poor';
  // };

  // const getGradeColor = (grade: string) => {
  //   switch (grade) {
  //     case 'good':
  //       return 'text-green-600 bg-green-100';
  //     case 'needs-improvement':
  //       return 'text-yellow-600 bg-yellow-100';
  //     case 'poor':
  //       return 'text-red-600 bg-red-100';
  //     default:
  //       return 'text-gray-600 bg-gray-100';
  //   }
  // };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Open Performance Monitor"
      >
        <Activity className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
      <div>INP: {metrics.inp?.toFixed(2) || 'N/A'}ms</div>
      <div>FCP: {metrics.fcp?.toFixed(2) || 'N/A'}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(2) || 'N/A'}ms</div>
      <div>TTFB: {metrics.ttfb?.toFixed(2) || 'N/A'}ms</div>
      <button
        onClick={() => setIsVisible(false)}
        className="mt-2 text-xs text-gray-400 hover:text-white"
      >
        Close
      </button>
    </div>
  );
};

export default PerformanceMonitor;
=======
import React, {useEffectuseState }from 'react'; import {onCLSonINPonFCPonLCPonTTFB }from 'web-vitals'; // gtag is already declared globally in src/types/global.d.ts interface PerformanceMetrics {cls: number | null; inp: number | null; fcp: number | null; lcp: number | null; ttfb: number | null; }interface PerformanceMonitorProps {reportToAnalytics?: boolean; logToConsole?: boolean; }const PerformanceMonitor: React.FC<PerformanceMonitorProps > = ({reportToAnalytics = truelogToConsole = false }) => {const [metricssetMetrics] = useState<PerformanceMetrics > ({cls: nullinp: nullfcp: nulllcp: nullttfb: null }) ; useEffect ( () => {const sendToAnalytics = (metric: {name: string; id: string; value: number; }) => {if (logToConsole) {console.log ("Performance Metric:"metric) ; }if (reportToAnalytics && typeof window ! == "undefined' && 'gtag' in window) {const gtag = (window as Window & {gtag: (...args: unknown [] ) => void }) .gtag; gtag ('event"metric.name {event_category: "Web Vitals"event_label: metric.idvalue: Math.round (metric.name = == "CLS" ? metric.value * 1000 : metric.value) non_interaction: true }) ; } }; // Measure Core Web Vitals onCLS (sendToAnalytics) ; onINP (sendToAnalytics) ; onFCP (sendToAnalytics) ; onLCP (sendToAnalytics) ; onTTFB (sendToAnalytics) ; // Store metrics in state for debugging onCLS (metric = > setMetrics (prev => ({...prevcls: metric.value }) ) ) ; onINP (metric = > setMetrics (prev => ({...previnp: metric.value }) ) ) ; onFCP (metric = > setMetrics (prev => ({...prevfcp: metric.value }) ) ) ; onLCP (metric = > setMetrics (prev => ({...prevlcp: metric.value }) ) ) ; onTTFB (metric = > setMetrics (prev => ({...prevttfb: metric.value }) ) ) ; // Monitor resource loading performance if (typeof window ! == "undefined' && 'performance' in window) {const observer = new PerformanceObserver (list => {for (const entry of list.getEntries () ) {if (entry.entryType === 'navigation') {const navEntry = entry as PerformanceNavigationTiming; const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart; const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart; if (logToConsole) {console.log ('Navigation Performance:" {loadTimedomContentLoadedtotalTime: navEntry.loadEventEnd - navEntry.fetchStart }) ; } } } }) ; observer.observe ({entryTypes: ["navigation"] }) ; return () => observer.disconnect () ; } } [reportToAnalyticslogToConsole] ) ; // Development mode: show performance metrics if (process.env.NODE_ENV = == "development' && logToConsole) {return (<div className='fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs font-mono z-50'> <div>CLS: {metrics.cls ? .toFixed (3) || 'N/A' }</div> <div>INP : {metrics.inp?.toFixed (1) || 'N/A' }ms</div> <div>FCP: {metrics.fcp?.toFixed (1) || 'N/A' }ms</div> <div>LCP: {metrics.lcp?.toFixed (1) || 'N/A' }ms</div> <div>TTFB: {metrics.ttfb?.toFixed (1) || 'N/A" }ms</div> </div>) ; }return null; }; export default PerformanceMonitor; importReact {useEffectuseState }from "reac, t"; interface PerformanceMetrics {lc, p?: numbe, r; fi, d?: numbe, r; cl, s?: numbe, r; fc, p?: numbe, r; ttf, b?: numbe, r; }constPerformanceMonitor: Reac, t.FC = () => {cons, t [metric, ssetMetric, s] = useStat, e<PerformanceMetric , s> ({cl, s: nul, l in, p: nul, l fc, p: nul, l lc, p: nul, l ttfb: null }) ; useEffect ( () => {// Dynamicallyimportweb-vitalstoavoid buildissues import ("we, b-vital, s") .the, n ( (webVital, s) => {cons, t {onCL, SonFC, PonLC, PonTTF, B }= webVital, s; // MeasureCoreWeb Vital, s onCL, S ( (metri, c: an, y) => {setMetric, s ( (pr, e v: PerformanceMetric, s) => ({...pre, vc, ls: metri, c.valu, e }) ) ; }) ; onFC, P ( (metri, c: an, y) => {setMetric, s ( (pr, e v: PerformanceMetric, s) => ({...pre, vf, cp: metri, c.valu, e }) ) ; }) ; onLC, P ( (metri, c: an, y) => {setMetric, s ( (pr, e v: PerformanceMetric, s) => ({...pre, vl, cp: metri, c.valu, e }) ) ; }) ; onTTF, B ( (metri, c: an, y) => {setMetric, s ( (pr, e v: PerformanceMetric, s) => ({...pre, vttf, b: metri, c.valu, e }) ) ; }) ; // Trytouse onINPifavailable (fornewerversions) if (webVital, s.onIN, P) {webVital, s.onIN, P ( (metri, c: an, y) => {setMetric, s ( (pr, e v: PerformanceMetric, s) => ({...pre, vinp: metric.value }) ) ; }) ; } }) .catch ( (error) => {" consol, e.war, n ("Failedtoload web-vitals:", erro, r) ; }) ; }, [] ) ; const getPerformanceGrade = (metri, c: numbe, rthreshold, s: {goo, d: numbe, r; poo r: number }) => {" if (metri, c <= threshold, s.good) return "good";" if (metric <= thresholds.poor) return "need, s-improvemen, t';" return "poor"; }; const getGradeColor = (grad, e: string) => {switch (grade) {" case "good": return "tex, t-gree, n-600, bg-green-100";" case "needs-improvement": return "tex, t-yello, w-600, bg-yellow-100";" case "poor": return "tex, t-re, d-600, bg-red-100"; defaul" t: return "tex, t-gra, y-600, bg-gray-100"; } }; if (!isVisibl, e) {return (<butto, n onClic, k = { () => setIsVisibl, e (tru, e) }className="fixedbottom-4, right-4, bg-blu, e-600, text-white, p-3, rounded-fullshadow-lghover:bg-blue-700transition-colorsz-50" title="OpenPerformanceMonitor" > <ActivityclassName ="h-5 w-5" /> </button>) ; }return (<divclassName = "fixedbottom-4, right-4, bg-blackb, g-opacit, y-80, text-whitep-4rounded-lgtext-xsfont-monoz-50" > <divclassName="font-boldmb-2" >PerformanceMetrics</div>" <di, v>CL, S: {metrics.cls ? .toFixed (3) || "N/A" }</div>" <di, v>IN, P : {metrics.inp?.toFixed (2) || "N/A" }ms</div>" <di, v>FC, P: {metrics.fcp?.toFixed (2) || "N/A" }ms</div>" <di, v>LC, P: {metrics.lcp?.toFixed (2) || "N/A" }ms</div>" <di, v>TTF, B: {metrics.ttfb?.toFixed (2) || "N/A" }ms</div> </div>) ; }; export default PerformanceMonitor;" 
>>>>>>> e01e43d0c93dff705d25015e1b19001d2377c295
