import React, { useEffect } from 'react';
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}


import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
interface WebVitalsMetric {
{ useEffect } from;
  'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB  } from 'lucide-react'';interface WebVitalsMetric {'
  name: string;
  value: number;
  delta: number;
  id: string}

const sendToAnalytics = (metric: WebVitalsMetric) => {
  // Send to your analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
(window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals', event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), non_interaction: true,
    })}
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital: ', metric)}
}

export const WebVitals = () => {
  useEffect(() => {
const sendToAnalytics = (metric: WebVitalsMetric) => {
  // Send to your analytics service;
  if (typeof window !==, undefined;
  ' && 'gtag;
  ' in window) {'    (window as unknown).gtag(
  'event', metric.name, {
  '      event_category: 'Web Vitals, event_label: metric.id,'      value: Math.round(metric.name ===;'
  'CLS' ? metric.value * 1000 : metric.value), non_interaction: true,
})'  }'
  // Log to console in development;
  if (process.env.NODE_ENV ===;
  'development') {
  '    console.log('Web Vital:  , metric)'  }'}
export const WebVitals = () => {useEffect(() => {
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics)}, []);
  return null}
export default WebVitals