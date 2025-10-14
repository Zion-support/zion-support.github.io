import React from 'react';
import { createRoot } from 'react-dom/client';
import React, { Suspense } from 'react';
import App from './App';
import './index.css';

// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }
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
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
import React, { Suspense } from 'react';
      .then((_registration) => {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Service Worker registered successfully');
        }
      })
      .catch((_error) => {
        if (process.env.NODE_ENV === 'development') {
import React, { Suspense } from 'react';
          console.warn('Service Worker registration failed');
        }
      });
  });
}