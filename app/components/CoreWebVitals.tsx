import React, { useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const CoreWebVitals: React.FC = () => {
  const reportWebVitals = useCallback((data: WebVitalsData) => {
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', data.name, {
        event_category: 'Web Vitals',
        value: Math.round(data.value),
        event_label: data.id,
        non_interaction: true,
      });
    }

    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.log('Web Vital:', data);
    }

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
      }
