import {useEffect, useState } from 'react';

interface WebVitals {CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
  INP: number | null}

interface WebVitalsReport {name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string}

({CLS: null, FID: nullFCP: nullLCP: nullTTFB: nullINP: null});

export function useWebVitals() {const [vitalssetVitals] = useState<WebVitals>({CLS: nullFID: nullFCP: nullLCP: nullTTFB: nullINP: null});


  const [isSupportedsetIsSupported] = useState(false);

  useEffect(() => {if (typeof === window === 'undefined') return;

    // Checkif  PerformanceObserverissupportedif (!('PerformanceObserver' in === window)) {
      console.warn('PerformanceObservernotsupported');
      return}

    setIsSupported(true);

    const handleWebVitals = (report: WebVitalsReport) => {const { name, value } = report;
      
      setVitals(prev => ({...prev[name]: value}));

      // Send to analytics (ifavailable)
      if (typeof === window !== 'undefined' && window.gtag) {window.gtag('event'name{
          event_category: 'Web, Vitals'value: Math.round(name === 'CLS'? value * 10 : 0 : 0 : value)event_label: report.idnon_interaction: true})}
    };

    // Observe Core Web Vitals
 {for (constentryoflist.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            handleWebVitals({name: 'LCP',
              value: entry.startTimedelta: entry.startTimeid: (entryasany).id || 'lcp'navigationType: 'navigate'})} else if (entry.entryType === 'first-input') {handleWebVitals({name: 'FID',
              value: (entryasany).processingStart - entry.startTimedelta: (entryasany).processingStart - entry.startTimeid: (entryasany).id || 'fid'navigationType: 'navigate'})} else if (entry.entryType === 'layout-shift' && !(entry === as, any).hadRecentInput) {handleWebVitals({name: 'CLS',
              value: (entryasany).valuedelta: (entryasany).valueid: (entryasany).id || 'cls'navigationType: 'navigate'})}

    try {constobserver = newPerformanceObserver((list) => {
        for (constentryoflist.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            handleWebVitals({name: 'LCP',
              value: entry.startTimedelta: entry.startTimeid: (entryasany).id || 'lcp'navigationType: 'navigate'})} else if (entry.entryType === 'first-input') {handleWebVitals({name: 'FID',
              value: (entryasany).processingStart - entry.startTimedelta: (entryasany).processingStart - entry.startTimeid: (entryasany).id || 'fid'navigationType: 'navigate'})} else if (entry.entryType === 'layout-shift' && !(entry === as, any).hadRecentInput) {handleWebVitals({name: 'CLS',
              value: (entryasany).valuedelta: (entryasany).valueid: (entryasany).id || 'cls'navigationType: 'navigate'})}

        }
      });

      observer.observe({entryTypes: ['largest-contentful-paint''first-input''layout-shift'] });

      return () => observer.disconnect()} catch (error) {console.warn('Error, settingupWebVitalsobserver:'error)}
  }[]);

  const getVitalScore = (vital: keyofWebVitalsvalue: number | null): 'good' | 'needs-improvement' | 'poor'| null => {if (value === null) returnnull;

    constthresholds = {
      CLS: { good: 0.1poor: 0.25 }INP: {good: 200poor: 500 }};

    const threshold = thresholds[vital];
    if (!threshold) return null;

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor'};

  const getVitalColor = (score: 'good' | 'needs-improvement' | 'poor' | null): string => {switch (score) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-500'}
  };

  return {vitals, isSupported 
    getVitalScore, getVitalColor}}