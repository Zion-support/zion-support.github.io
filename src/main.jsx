console.log("main.jsx: Start");
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
<<<<<<< HEAD

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              if (confirm('A new version is available! Reload to update?')) {
                window.location.reload();
              }
            }
          });
        });
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

=======
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
const rootElement = document.getElementById('root');
function renderApp() {
    const app = React.createElement(React.StrictMode, null,
        React.createElement(App, null)
    );
    
    if (rootElement?.hasChildNodes()) {
        // Hydrate if server-side rendered content exists
        hydrateRoot(rootElement, app);
    } else if (rootElement) {
        // Create new root if no existing content
        createRoot(rootElement).render(app);
    }
}
function displayFatalError(message) {
    if (rootElement) {
        rootElement.innerHTML = `
      <div style="padding:20px;text-align:center;font-family:sans-serif;color:#ef4444;">
        <h1>Application Error</h1>
        <p>${message}</p>
        <button onclick="window.location.reload()" style="padding:10px 20px;background:#3b82f6;color:white;border:none;border-radius:5px;cursor:pointer;">
          Reload Page
        </button>
      </div>`;
    }
}
<<<<<<< HEAD

// Error handling and app initialization
=======
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
try {
    renderApp();
} catch (error) {
    console.error('Global error caught in main.jsx:', error);
    displayFatalError(error.message);
}
<<<<<<< HEAD

// Global error event listeners
=======
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
window.addEventListener('error', (e) => {
    console.error('Unhandled error:', e.error || e.message);
    displayFatalError(e.message);
});
<<<<<<< HEAD

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    displayFatalError('An unexpected error occurred. Please try again.');
=======
// Add performance monitoring
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
  }
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }
    });
}
