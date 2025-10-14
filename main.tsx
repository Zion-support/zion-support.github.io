import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {}
    window.performance.now = window.performance.now || (() => Date.now());
  }
}

// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {}
    window.performance.now = window.performance.now || (() => Date.now())
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
        console.log("Service worker registered successfully", registration);
      })
      .catch((registrationError) => {
        console.log("Service worker registration failed", registrationError);
      });
  });
}
