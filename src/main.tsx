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
      .then((registration) => {
        // Service Worker registered successfully
        if (process.env.NODE_ENV === 'development') {
          console.log('SW registered: ', registration);
        }
      })
      .catch((registrationError) => {
        // Service Worker registration failed - handled silently
        if (process.env.NODE_ENV === 'development') {
          console.log('SW registration failed: ', registrationError);
        }
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