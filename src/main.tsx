<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-fb38
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
<<<<<<< HEAD
import { SkipToContent } from './components/Accessibility'
import './index.css'

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
<<<<<<< HEAD
        console.log('SW registered: ', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, show update prompt
                if (confirm('New content is available! Would you like to update?')) {
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                  window.location.reload();
                }
              }
            });
          }
        });
=======
        // Service Worker registered successfully
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-675b
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
import App from './App';
import { AppWrapper } from './AppWrapper';
import './index.css';
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698

// Performance monitoring setup
if (import.meta.env.DEV) {
  console.log('🚀 Zion Tech Group - Development Mode');
  console.log('📊 Performance monitoring enabled');
  console.log('🔧 Accessibility controls available');
}

// Error handling for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // In production, you might want to send this to an error reporting service
});

// Error handling for uncaught errors
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', event.error);
  // In production, you might want to send this to an error reporting service
});
=======
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <HelmetProvider>
<<<<<<< HEAD
      <BrowserRouter>
        <SkipToContent />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
=======
      <AppWrapper>
        <App />
      </AppWrapper>
    </HelmetProvider>
  </React.StrictMode>
);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
=======

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> origin/cursor/build-and-fix-errors-fb38
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
