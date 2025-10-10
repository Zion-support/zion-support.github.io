import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';

// Initialize performance optimizations immediately
if (typeof window !== 'undefined') {
  initializePerformanceOptimizations();
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
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
