import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeLaunchDarkly } from './utils/launchdarkly';
import { registerServiceWorker, isServiceWorkerAvailable } from './utils/serviceWorker';

// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }

  // Initialize LaunchDarkly
  initializeLaunchDarkly().catch((error) => {
    console.error('Failed to initialize LaunchDarkly:', error);
  });
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
if (isServiceWorkerAvailable()) {
  window.addEventListener("load", async () => {
    try {
      const registration = await registerServiceWorker('/sw.js');
      
      if (process.env.NODE_ENV === 'development') {
        console.warn('Service Worker registered successfully');
      }
      
      // Handle service worker updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New service worker is available
              if (confirm('New version available! Reload to update?')) {
                window.location.reload();
              }
            }
          });
        }
      });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Service Worker registration failed:', error);
      }
    }
  });
  
  // Handle service worker messages properly
  navigator.serviceWorker.addEventListener('message', (event) => {
    console.warn('Message from service worker:', event.data);
  });

  // Handle service worker controller changes
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.warn('Service worker controller changed');
    // Reload the page to use the new service worker
    window.location.reload();
  });
}