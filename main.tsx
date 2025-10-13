<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { createRoot } from 'react-dom/client;
import App from './App;
import './index.css;
// Ensure scheduler is properly initialized;
if (typeof window !== 'undefined') {';
  // Fix for scheduler unstable_now error;
=======
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for scheduler unstable_now error
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
  if (!window.performance || !window.performance.now) {
=======
import React from 'react';'
{ createRoot } from 'react-dom/client';'
App from './App';'
'./index.css';
// Ensure scheduler is properly initialized;'
if (typeof window !== 'undefined') {';
  // Fix for scheduler unstable_now error;
  if (!window.performance || !window.performance.now) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-bef6
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }
}

<<<<<<< HEAD
const root = createRoot(
  document.getElementById('root') as HTMLElement
=======
const root = createRoot('
  document.getElementById('root') as HTMLElement';
>>>>>>> cursor/fix-errors-and-merge-to-main-bef6
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
<<<<<<< HEAD
        // Service worker registered successfully
      })
      .catch((registrationError) => {
        // Service worker registration failed
=======
        // Service worker registered successfully;}
      })
      .catch((registrationError) => {
        // Service worker registration failed;}
>>>>>>> cursor/fix-errors-and-merge-to-main-bef6
      });
  });
}
'