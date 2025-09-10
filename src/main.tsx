import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Performance monitoring
if (typeof window !== 'undefined') {
  // Track initial page load
  window.addEventListener('load', () => {
    // App loaded successfully - could be sent to analytics
  });

  // Track Core Web Vitals
  if ('web-vitals' in window) {
    import('web-vitals').then((vitals) => {
      // Send vitals to analytics service instead of console
      const sendToAnalytics = (_metric: any) => {
        // Analytics implementation would go here
      };
      
      if (vitals.onCLS) vitals.onCLS(sendToAnalytics);
      if (vitals.onINP) vitals.onINP(sendToAnalytics); // INP replaces FID
      if (vitals.onFCP) vitals.onFCP(sendToAnalytics);
      if (vitals.onLCP) vitals.onLCP(sendToAnalytics);
      if (vitals.onTTFB) vitals.onTTFB(sendToAnalytics);
    });
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  const app = (
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  );

  root.render(app);
} else {
  // Root element not found - this is a critical error
  throw new Error('Root element not found');
}