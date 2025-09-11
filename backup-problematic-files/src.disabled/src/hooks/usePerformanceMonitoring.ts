import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric && metric.name,{,event_category: "Web Vitals",event_label: metric && metric.id,"; value: Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; ,} if (performance && performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance && performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
import { useEffect } from "react";
export function usePerformanceMonitoring() {;
  useEffect(() => {;
    const sendToAnalytics = (metric) => {;
      // comment;
      ";
      // comment;
      if (typeof gtag != = "undefined") {,";
        gtag("event", metric && metric.name, {,
          "event_category": "Web Vitals",
"event_label": metric && metric.id,";
"value": Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),
"non_interaction": true,
export function usePerformanceMonitoring() {;
  useEffect(() => {}}
    const sendToAnalytics = (metric) => {;
      // comment;
console && console.log(&apos;Performance "metric": &apos, metric)}
      if (performance && performance.memory) {;
        setMetrics({;
          loadTime, "renderTime": endTime - startTime,
          "memoryUsage": performance && performance.memory.usedJSHeapSize / 1024 / 1024})}
}
    measurePerformance()}
    return () => {;
      measurePerformance()}
}, [])}  return metrics}
})}    }
    getCLS(sendToAnalytics)}
    getFID(sendToAnalytics)}
    getFCP(sendToAnalytics)}
    getLCP(sendToAnalytics)}    getTTFB(sendToAnalytics)}, [])}
export function reportWebVitals(metric) {;
"
<<<<<<< HEAD
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric.name,{,event_category: "Web Vitals",event_label: metric.id,"; value: Math.round(metric.name = == "CLS' ? metric.value * 1000 : metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console.log(&apos;Performance metric: &apos,metric),} if (performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric && metric.name,{,; event_category: "Web Vitals",; event_label: 'metric && metric.id',"; value: Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),; non_interaction: 'true',; export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console && console.log(&apos;Performance metric: '&apos',metric);,} if (performance && performance.memory) {; setMetrics({; loadTime,renderTime: 'endTime - startTime',; memoryUsage: 'performance && performance.memory.usedJSHeapSize / 1024 / 1024'});,} } measurePerformance();,} return () => {; measurePerformance();,} },[]);,} return metrics} })} } getCLS(sendToAnalytics);,} getFID(sendToAnalytics);,} getFCP(sendToAnalytics);,} getLCP(sendToAnalytics);,} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric && metric.name,{,event_category: "Web Vitals",event_label: metric && metric.id,"; value: Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console && console.log(&apos;Performance metric: &apos,metric),} if (performance && performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance && performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric && metric.name,{,event_category: "Web Vitals",event_label: metric && metric.id,"; value: Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console && console.log(&apos;Performance metric: &apos,metric),} if (performance && performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance && performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
=======


=======
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric && metric.name,{,; event_category: "Web Vitals",; event_label: 'metric && metric.id',"; value: Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),; non_interaction: 'true',; export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console && console.log(&apos;Performance metric: '&apos',metric);,} if (performance && performance.memory) {; setMetrics({; loadTime,renderTime: 'endTime - startTime',; memoryUsage: 'performance && performance.memory.usedJSHeapSize / 1024 / 1024'});,} } measurePerformance();,} return () => {; measurePerformance();,} },[]);,} return metrics} })} } getCLS(sendToAnalytics);,} getFID(sendToAnalytics);,} getFCP(sendToAnalytics);,} getLCP(sendToAnalytics);,} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric && metric.name,{,event_category: "Web Vitals",event_label: metric && metric.id,"; value: Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console && console.log(&apos;Performance metric: &apos,metric),} if (performance && performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance && performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric && metric.name,{,event_category: "Web Vitals",event_label: metric && metric.id,"; value: Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console && console.log(&apos;Performance metric: &apos,metric),} if (performance && performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance && performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/src/hooks/usePerformanceMonitoring.ts
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
