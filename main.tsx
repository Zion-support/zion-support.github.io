import React from 'react';
<<<<<<< HEAD
import { createRoot } from 'react-dom/client;
import App from './App;
import './index.css;
// Ensure scheduler is properly initialized;
if (typeof window !== 'undefined') {';
  // Fix for scheduler unstable_now error;
=======
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for scheduler unstable_now error
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }
}

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

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
      .then((registration) => {
        // Service worker registered successfully
      })
      .catch((registrationError) => {
        // Service worker registration failed
      });
  });
}
