import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Performance monitoring
if (typeof window !== 'undefined') {
  // Track initial page load
  window.addEventListener('load', () => {
    console.log('App loaded successfully');
  });

  // Track Core Web Vitals
  if ('web-vitals' in window) {
    import('web-vitals').then((vitals) => {
      if (vitals.onCLS) vitals.onCLS(console.log);
      if (vitals.onINP) vitals.onINP(console.log); // INP replaces FID
      if (vitals.onFCP) vitals.onFCP(console.log);
      if (vitals.onLCP) vitals.onLCP(console.log);
      if (vitals.onTTFB) vitals.onTTFB(console.log);
    });
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  const app = (
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );

  root.render(app);
} else {
  console.error('Root element not found');
}