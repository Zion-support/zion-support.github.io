import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './context/ThemeContext'
import AccessibilityEnhancer from './utils/accessibilityEnhancer'
import { preloadCriticalResources, addResourceHints } from './utils/performanceOptimizer'
import './index.css'

// Initialize performance optimizations
preloadCriticalResources();
addResourceHints();

// Register service worker for PWA functionality
if (typeof window !== 'undefined' && 'serviceWorker' in (window as any).navigator) {
  window.addEventListener('load', () => {
    (window as any).navigator.serviceWorker.register('/sw.js')
      .then((_registration) => {
        // console.log('SW registered: ', registration)
      })
      .catch((_registrationError) => {
        // console.log('SW registration failed: ', registrationError)
      })
  })
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <AccessibilityEnhancer>
          <ThemeProvider>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </ThemeProvider>
        </AccessibilityEnhancer>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
