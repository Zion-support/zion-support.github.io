import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

<<<<<<< HEAD
// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }
}

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => {
        // Service worker registered successfully
        console.log('Service worker registered successfully');
      })
      .catch((Error) => {
        // Service worker failed
        console.error('Service worker failed:',Error);
      });
  });
=======
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
}