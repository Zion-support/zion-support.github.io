import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import './globals.css';
import { measureWebVitals } from './utils/performanceMonitor';

// Initialize performance monitoring;
if (typeof window !== 'undefined') {
  measureWebVitals();
}

// Register service worker;
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        // Service Worker registered successfully;
      })
      .catch(() => {
        // Service Worker registration failed - handled silently;
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<React.StrictMode>)
      <App />)
    </React.StrictMode>)
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}