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
<<<<<<< HEAD
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric.name,{,; event_category: "Web Vitals",; event_label: 'metric.id',"; value: Math.round(metric.name = == "CLS' ? metric.value * 1000 : metric.value),; non_interaction: 'true',; export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console.log(&apos;Performance metric: '&apos',metric);,} if (performance.memory) {; setMetrics({; loadTime,renderTime: 'endTime - startTime',; memoryUsage: 'performance.memory.usedJSHeapSize / 1024 / 1024'});,} } measurePerformance();,} return () => {; measurePerformance();,} },[]);,} return metrics} })} } getCLS(sendToAnalytics);,} getFID(sendToAnalytics);,} getFCP(sendToAnalytics);,} getLCP(sendToAnalytics);,} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
<<<<<<< HEAD
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric.name,{,event_category: "Web Vitals",event_label: metric.id,"; value: Math.round(metric.name = == "CLS' ? metric.value * 1000 : metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console.log(&apos;Performance metric: &apos,metric),} if (performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> origin/main
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric.name,{,event_category: "Web Vitals",event_label: metric.id,"; value: Math.round(metric.name = == "CLS' ? metric.value * 1000 : metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console.log(&apos;Performance metric: &apos,metric),} if (performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======

=======


import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric && metric.name,{,; event_category: "Web Vitals",; event_label: 'metric && metric.id',"; value: Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),; non_interaction: 'true',; export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console && console.log(&apos;Performance metric: '&apos',metric);,} if (performance && performance.memory) {; setMetrics({; loadTime,renderTime: 'endTime - startTime',; memoryUsage: 'performance && performance.memory.usedJSHeapSize / 1024 / 1024'});,} } measurePerformance();,} return () => {; measurePerformance();,} },[]);,} return metrics} })} } getCLS(sendToAnalytics);,} getFID(sendToAnalytics);,} getFCP(sendToAnalytics);,} getLCP(sendToAnalytics);,} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric && metric.name,{,event_category: "Web Vitals",event_label: metric && metric.id,"; value: Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console && console.log(&apos;Performance metric: &apos,metric),} if (performance && performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance && performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric && metric.name,{,event_category: "Web Vitals",event_label: metric && metric.id,"; value: Math && Math.round(metric && metric.name = == "CLS' ? metric && metric.value * 1000 : metric && metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console && console.log(&apos;Performance metric: &apos,metric),} if (performance && performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance && performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "


import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric.name,{,event_category: "Web Vitals",event_label: metric.id,"; value: Math.round(metric.name = == "CLS' ? metric.value * 1000 : metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console.log(&apos;Performance metric: &apos,metric),} if (performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric.name,{,event_category: "Web Vitals",event_label: metric.id,"; value: Math.round(metric.name = == "CLS' ? metric.value * 1000 : metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console.log(&apos;Performance metric: &apos,metric),} if (performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
import { useEffect } from "react"; export function usePerformanceMonitoring() {; useEffect(() => {; const sendToAnalytics = (metric) => {; "; if (typeof gtag != = "undefined") {,"; gtag("event",metric.name,{,event_category: "Web Vitals",event_label: metric.id,"; value: Math.round(metric.name = == "CLS' ? metric.value * 1000 : metric.value),non_interaction: true,export function usePerformanceMonitoring() {; useEffect(() => {}} const sendToAnalytics = (metric) => {; console.log(&apos;Performance metric: &apos,metric),} if (performance.memory) {; setMetrics({; loadTime,renderTime: endTime - startTime,memoryUsage: performance.memory.usedJSHeapSize / 1024 / 1024}),} } measurePerformance(),} return () => {; measurePerformance(),} },[]),} return metrics} })} } getCLS(sendToAnalytics),} getFID(sendToAnalytics),} getFCP(sendToAnalytics),} getLCP(sendToAnalytics),} getTTFB(sendToAnalytics)},[])} export function reportWebVitals(metric) {; "
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
