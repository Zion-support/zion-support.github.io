import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

// Service worker registration function
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
      
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
      
      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New service worker available
              if (confirm('New version available! Reload to update?')) {
                window.location.reload();
              }
            }
          });
        }
      });
      
      return registration;
    } catch (error) {
      console.error('Service worker registration failed:', error);
      throw error;
    }
  }
  throw new Error('Service workers not supported');
};

// Performance monitoring
const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric);
  }
  // In production, you could send this to analytics
};

// Error boundary for the root
class RootErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Root error boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Application Error</h1>
            <p className="text-gray-400 mb-6">Something went wrong with the application. Please refresh the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Initialize the application
const initializeApp = async () => {
  try {
    // Register service worker
    await registerServiceWorker();
    
    // Create root element
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error('Root element not found');
    }

    // Create React root
    const root = ReactDOM.createRoot(rootElement);

    // Render the app
    root.render(
      <React.StrictMode>
        <RootErrorBoundary>
          <HelmetProvider>
            <Router>
              <App />
            </Router>
          </HelmetProvider>
        </RootErrorBoundary>
      </React.StrictMode>
    );

    // Report web vitals in development
    if (process.env.NODE_ENV === 'development') {
      // You can add web vitals reporting here
      console.log('App initialized successfully');
    }

  } catch (error) {
    console.error('Failed to initialize app:', error);
    
    // Fallback error display
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          font-family: system-ui, -apple-system, sans-serif;
          padding: 1rem;
        ">
          <div style="text-align: center; max-width: 400px;">
            <h1 style="font-size: 1.5rem; margin-bottom: 1rem;">Application Error</h1>
            <p style="margin-bottom: 1rem; opacity: 0.8;">
              Failed to initialize the application. Please refresh the page or contact support.
            </p>
            <button 
              onclick="window.location.reload()"
              style="
                background: #06b6d4;
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                cursor: pointer;
                font-size: 0.875rem;
              "
            >
              Refresh Page
            </button>
          </div>
        </div>
      `;
    }
  }
};

// Start the application
initializeApp();
