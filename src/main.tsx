import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import './globals.css';
import { measureWebVitals } from './utils/performanceMonitor';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  measureWebVitals();
}

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        // Service Worker registered successfully
      })
      .catch(() => {
        // Service Worker registration failed - handled silently
      });
  });
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode></React>
      <App /></App>
    </React.StrictMode>
  );
}