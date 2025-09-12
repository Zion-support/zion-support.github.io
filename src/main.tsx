import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Performance monitoring
if (typeof window !== 'undefined') {
  // Track initial page load
  window.addEventListener('load', () => {
    // Page loaded
  });

  // Track Core Web Vitals
  if ('web-vitals' in window) {
    import('web-vitals').then((vitals) => {
      if (vitals.onCLS) vitals.onCLS(() => {});
      if (vitals.onINP) vitals.onINP(() => {}); // INP replaces FID
      if (vitals.onFCP) vitals.onFCP(() => {});
      if (vitals.onLCP) vitals.onLCP(() => {});
      if (vitals.onTTFB) vitals.onTTFB(() => {});
    });
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  const app = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  root.render(app);
} else {
  // console.error('Root element not found');
}