import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'
import { registerServiceWorker } from './utils/serviceWorker'
import { ErrorBoundary } from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <HelmetProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </HelmetProvider>
    </Router>
  </React.StrictMode>,
)

// Register service worker with error handling
try {
  renderApp();
  
  // Register service worker with error handling
  registerServiceWorker().catch((error) => {
    console.warn('Service worker registration failed:', error);
  });
  
  // Report web vitals if available
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals(entry);
        }
      });
      observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }
  
} catch (error) {
  console.warn('Service worker registration error:', error);
}
