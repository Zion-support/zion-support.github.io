import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'
import { registerServiceWorker } from './utils/serviceWorker'
import { ErrorBoundary } from './components/ErrorBoundary'


// Performance monitoring
const reportWebVitals: React.FC = ($2) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric);
  }
  // In production, you could send this to analytics
};

// Main render function
const renderApp: React.FC = ($2) => {
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  
  root.render(
    <React.StrictMode>
      <Router>
        <HelmetProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </HelmetProvider>
      </Router>
    </React.StrictMode>,
  );
};

// Initialize the application

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
      </div>
    `;
  }

}
