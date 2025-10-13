'use client';
import React, { Suspense, lazy } from 'react';
interface AnalyticsProps {enableGoogleAnalytics?: boolean;}
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;}}
const Analytics: React.FC<AnalyticsProps> = ({,
    enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true;}}) => {useEffect(() => {
    if (enableGoogleAnalytics) {
      initializeGoogleAnalytics()}}
if (enablePerformanceMonitoring) {initializePerformanceMonitoring()}}
if (enableErrorTracking) {initializeErrorTracking()}}
if (enableUserBehaviorTracking) {initializeUserBehaviorTracking()}}
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking]);
const script = document.createElement('script')
    script.async = true;
    script['src'] = 'https: //www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
    document.head.appendChild(script)
// Initialize gtag;
    (window as any).dataLayer = (window as any).dataLayer || [],
    function gtag(...args: any[]) {
    ) => {
  return (
    $3;
  )
  }
      (window as any).dataLayer.push(args);}
    }
    (window as any).gtag = gtag;
gtag('js', new Date())
