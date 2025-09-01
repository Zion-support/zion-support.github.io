import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

<<<<<<< HEAD
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

try {
  renderApp();

  // Register service worker with error handling
  registerServiceWorker().catch(error => {
    console.warn('Service worker registration failed:', error);
  });

  // Report web vitals if available
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver(list => {
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
  console.error('Failed to render application:', error);

  // Fallback error display
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        min-height: 100vh;
        background: #111827;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        font-family: system-ui, -apple-system, sans-serif;
      ">
        <div style="text-align: center; max-width: 500px;">
          <h1 style="font-size: 2rem; margin-bottom: 1rem;">Application Failed to Load</h1>
          <p style="color: #9ca3af; margin-bottom: 1.5rem;">
            We're sorry, but the application failed to initialize. Please try refreshing the page.
          </p>
          <button
            onclick="window.location.reload()"
            style="
              background: #06b6d4;
              color: white;
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              cursor: pointer;
              font-size: 1rem;
            "
          >
            Refresh Page
          </button>
        </div>
=======
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong:</h2>
        <pre className="text-red-400 mb-4">{error.message}</pre>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Reload page
        </button>
>>>>>>> main
      </div>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
