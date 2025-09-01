import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { registerServiceWorker } from './utils/serviceWorker';
import { ErrorBoundary } from 'react-error-boundary';

// Performance monitoring
const reportWebVitals = (metric: unknown): void => {
  if (process.env.NODE_ENV === 'development') {
    // console.log('Web Vitals:', metric);
  }
};

// Main render function
const renderApp = (): void => {
  const container = document.getElementById('root');
  if (!container) return;
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Router>
        <HelmetProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </HelmetProvider>
      </Router>
    </React.StrictMode>
  );
};

// Initialize the application
renderApp();

// Register service worker with error handling
registerServiceWorker().catch(() => {
  // console.warn('Service worker registration failed:', error);
});

// Report web vitals if available
if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
  try {
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        reportWebVitals(entry);
      }
    });
    observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] as any });
  } catch {
    // console.warn('Performance monitoring failed:', error);
  }
}