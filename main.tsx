import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import './index.css';

// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for scheduler unstable_now error
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
if ("serviceWorker" in globalThis.navigator) {
  window.addEventListener("load", () => {
    globalThis.navigator.serviceWorker
      .register("/sw.js")
      .then((_registration) => {
        // Service worker registered successfully
      })
      .catch((_registrationError) => {
        // Service worker registration failed
      });
  });
}
